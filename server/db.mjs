import pg from "pg";

const required = ["PGHOST", "PGPORT", "PGDATABASE", "PGUSER", "PGPASSWORD"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) throw new Error(`Configuration PostgreSQL manquante : ${missing.join(", ")}`);

export const pool = new pg.Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: true },
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
