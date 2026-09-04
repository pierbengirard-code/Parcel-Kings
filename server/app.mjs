import "dotenv/config";
import crypto from "node:crypto";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import * as oidc from "openid-client";
import connectPgSimple from "connect-pg-simple";
import { getGameSave, getPlayerAccountType, pool, putGameSave, upsertPlayer } from "./db.mjs";

const required = [
  "APP_ORIGIN",
  "COGNITO_ISSUER",
  "COGNITO_DOMAIN",
  "COGNITO_CLIENT_ID",
  "COGNITO_CLIENT_SECRET",
  "SESSION_SECRET"
];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) throw new Error(`Configuration manquante : ${missing.join(", ")}`);

const appOrigin = new URL(process.env.APP_ORIGIN);
const callbackUrl = new URL("/api/auth/callback", appOrigin).href;
const logoutUrl = new URL("/", appOrigin).href;
const issuer = new URL(process.env.COGNITO_ISSUER);
const cognitoDomain = new URL(process.env.COGNITO_DOMAIN);
const clientId = process.env.COGNITO_CLIENT_ID;
const port = Number(process.env.PORT || 3000);

const config = await oidc.discovery(issuer, clientId, process.env.COGNITO_CLIENT_SECRET);
const app = express();
const PgSession = connectPgSimple(session);
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "2mb" }));
app.use(session({
  name: "boxorbust.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new PgSession({
    pool,
    schemaName: "app",
    tableName: "user_sessions",
    createTableIfMissing: true
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 12
  }
}));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.get("/api/auth/login", async (request, response, next) => {
  try {
    const codeVerifier = oidc.randomPKCECodeVerifier();
    const codeChallenge = await oidc.calculatePKCECodeChallenge(codeVerifier);
    const state = crypto.randomBytes(24).toString("base64url");
    request.session.oidc = { codeVerifier, state };
    const authorizationUrl = oidc.buildAuthorizationUrl(config, {
      redirect_uri: callbackUrl,
      response_type: "code",
      scope: "openid email",
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
      state
    });
    request.session.save((error) => error ? next(error) : response.redirect(authorizationUrl.href));
  } catch (error) {
    next(error);
  }
});

app.get("/api/auth/callback", async (request, response, next) => {
  try {
    const pending = request.session.oidc;
    if (!pending) return response.status(400).send("Connexion expirée. Recommencez depuis Box or Bust.");
    const currentUrl = new URL(request.originalUrl, appOrigin);
    const tokens = await oidc.authorizationCodeGrant(config, currentUrl, {
      pkceCodeVerifier: pending.codeVerifier,
      expectedState: pending.state
    });
    const claims = tokens.claims();
    if (!claims?.sub) throw new Error("Le compte Cognito ne contient pas d’identifiant utilisateur.");
    const user = {
      id: claims.sub,
      username: claims["cognito:username"] || "",
      email: claims.email || "",
      emailVerified: claims.email_verified === true
    };
    const player = await upsertPlayer(user);
    request.session.user = {
      ...user,
      displayName: player.display_name || "",
      accountType: player.account_type
    };
    delete request.session.oidc;
    request.session.save((error) => error ? next(error) : response.redirect("/jeu.html"));
  } catch (error) {
    next(error);
  }
});

app.get("/api/auth/me", async (request, response, next) => {
  try {
    response.set("Cache-Control", "no-store");
    if (!request.session.user?.id) return response.json({ authenticated: false });
    request.session.user.accountType = await getPlayerAccountType(request.session.user.id);
    response.json({ authenticated: true, user: request.session.user });
  } catch (error) {
    next(error);
  }
});

function requirePlayer(request, response, next) {
  if (!request.session.user?.id) return response.status(401).json({ error: "Connexion requise." });
  next();
}

app.get("/api/player/save", requirePlayer, async (request, response, next) => {
  try {
    response.set("Cache-Control", "no-store");
    response.json({ save: await getGameSave(request.session.user.id) });
  } catch (error) {
    next(error);
  }
});

app.put("/api/player/save", requirePlayer, async (request, response, next) => {
  try {
    const expectedRevision = Number(request.body?.revision);
    const saveVersion = Number(request.body?.saveVersion);
    const savedState = request.body?.state;
    if (!Number.isSafeInteger(expectedRevision) || expectedRevision < 0 ||
        !Number.isSafeInteger(saveVersion) || saveVersion < 1 ||
        !savedState || typeof savedState !== "object" || Array.isArray(savedState)) {
      return response.status(400).json({ error: "Sauvegarde invalide." });
    }
    const saved = await putGameSave(request.session.user.id, expectedRevision, saveVersion, savedState);
    if (!saved) {
      return response.status(409).json({
        error: "Sauvegarde plus récente détectée.",
        save: await getGameSave(request.session.user.id)
      });
    }
    response.json({ save: saved });
  } catch (error) {
    next(error);
  }
});

app.get("/api/auth/logout", (request, response, next) => {
  request.session.destroy((error) => {
    if (error) return next(error);
    response.clearCookie("boxorbust.sid");
    const target = new URL("/logout", cognitoDomain);
    target.searchParams.set("client_id", clientId);
    target.searchParams.set("logout_uri", logoutUrl);
    response.redirect(target.href);
  });
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: "Une erreur d’authentification est survenue." });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Box or Bust API active sur http://127.0.0.1:${port}`);
});
