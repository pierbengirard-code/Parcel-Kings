CREATE TABLE IF NOT EXISTS app.players (
  id text PRIMARY KEY,
  username varchar(128) NOT NULL,
  email varchar(320) NOT NULL,
  email_verified boolean NOT NULL DEFAULT false,
  account_type varchar(16) NOT NULL DEFAULT 'NORMAL',
  display_name varchar(32),
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE app.players
  ADD COLUMN IF NOT EXISTS account_type varchar(16) NOT NULL DEFAULT 'NORMAL';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'players_account_type_check'
      AND conrelid = 'app.players'::regclass
  ) THEN
    ALTER TABLE app.players
      ADD CONSTRAINT players_account_type_check
      CHECK (account_type IN ('ADMIN', 'NORMAL', 'VIP'));
  END IF;
END
$$;

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
