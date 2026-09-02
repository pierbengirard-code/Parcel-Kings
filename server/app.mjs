import "dotenv/config";
import crypto from "node:crypto";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import * as oidc from "openid-client";

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
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(helmet({ contentSecurityPolicy: false }));
app.use(session({
  name: "boxorbust.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
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
    request.session.user = {
      id: claims.sub,
      username: claims["cognito:username"] || "",
      email: claims.email || "",
      emailVerified: claims.email_verified === true
    };
    delete request.session.oidc;
    request.session.save((error) => error ? next(error) : response.redirect("/jeu.html"));
  } catch (error) {
    next(error);
  }
});

app.get("/api/auth/me", (request, response) => {
  response.set("Cache-Control", "no-store");
  response.json(request.session.user
    ? { authenticated: true, user: request.session.user }
    : { authenticated: false });
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
