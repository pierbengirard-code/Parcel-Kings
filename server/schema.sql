CREATE TABLE IF NOT EXISTS app.players (
  id text PRIMARY KEY,
  username varchar(128) NOT NULL,
  email varchar(320) NOT NULL,
  email_verified boolean NOT NULL DEFAULT false,
  display_name varchar(32),
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS players_display_name_unique
  ON app.players (lower(display_name))
  WHERE display_name IS NOT NULL;

CREATE TABLE IF NOT EXISTS app.game_saves (
  player_id text PRIMARY KEY REFERENCES app.players(id) ON DELETE CASCADE,
  revision bigint NOT NULL DEFAULT 1,
  save_version integer NOT NULL,
  state jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS game_saves_updated_at_idx
  ON app.game_saves (updated_at DESC);
