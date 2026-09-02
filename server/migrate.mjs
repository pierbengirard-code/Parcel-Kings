import "dotenv/config";
import fs from "node:fs/promises";
import { pool } from "./db.mjs";

try {
  const sql = await fs.readFile(new URL("./schema.sql", import.meta.url), "utf8");
  await pool.query(sql);
  console.log("Schéma PostgreSQL Box or Bust installé.");
} finally {
  await pool.end();
}
