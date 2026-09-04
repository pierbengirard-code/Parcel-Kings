import pg from "pg";

const required = ["PGHOST", "PGPORT", "PGDATABASE", "PGUSER", "PGPASSWORD"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) throw new Error(`Configuration PostgreSQL manquante : ${missing.join(", ")}`);

const useSsl = process.env.PGSSL !== "false";

export const pool = new pg.Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: useSsl ? { rejectUnauthorized: true } : false,
  max: 5,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 10_000
});

pool.on("error", (error) => console.error("Erreur PostgreSQL inattendue", error));

export async function upsertPlayer(user) {
  const result = await pool.query(
    `INSERT INTO app.players (id, username, email, email_verified, last_login_at)
     VALUES ($1, $2, $3, $4, now())
     ON CONFLICT (id) DO UPDATE SET
       username = EXCLUDED.username,
       email = EXCLUDED.email,
       email_verified = EXCLUDED.email_verified,
       last_login_at = now()
     RETURNING id, username, email, email_verified, display_name, created_at, last_login_at`,
    [user.id, user.username, user.email, user.emailVerified]
  );
  return result.rows[0];
}

export async function getGameSave(playerId) {
  const result = await pool.query(
    `SELECT revision, save_version, state, updated_at FROM app.game_saves WHERE player_id = $1`,
    [playerId]
  );
  return result.rows[0] || null;
}

export async function putGameSave(playerId, expectedRevision, saveVersion, state) {
  const updated = await pool.query(
    `UPDATE app.game_saves
        SET revision = revision + 1, save_version = $3, state = $4, updated_at = now()
      WHERE player_id = $1 AND revision = $2
      RETURNING revision, save_version, updated_at`,
    [playerId, expectedRevision, saveVersion, state]
  );
  if (updated.rows[0]) return updated.rows[0];
  if (expectedRevision !== 0) return null;
  const inserted = await pool.query(
    `INSERT INTO app.game_saves (player_id, revision, save_version, state)
     VALUES ($1, 1, $2, $3)
     ON CONFLICT (player_id) DO NOTHING
     RETURNING revision, save_version, updated_at`,
    [playerId, saveVersion, state]
  );
  return inserted.rows[0] || null;
}
