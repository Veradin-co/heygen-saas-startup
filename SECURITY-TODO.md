# SECURITY-TODO — heygen-saas-startup

**Status: PENDING (low severity). Blocked by project being inactive (2026-05-08).**

## Why this exists

Per `~/.claude/CLAUDE.md` Secrets Handling rule (locked 2026-05-08), no plaintext secrets in any file.

## What's plaintext

`~/Local_Claude_Projects/heygen-saas-startup/.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` — non-secret (project URL)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key. Public-by-design (intended to ship to client bundle), but better stored in 1P than in a tracked file for consistency with the Secrets Handling rule.

**No high-severity secrets** (no service role, no Stripe keys, no auth secrets in this `.env.local`). Migration is mostly hygiene.

## Migration steps when project resumes

Same pattern as Romio — see `~/Local_Claude_Projects/Romio/SECURITY-TODO.md` for the full step-by-step. Short version:

1. Create `Supabase - heygen-saas-startup` item in `Veradin Co` vault with `url` + `anon_key` fields.
2. Create `.env.secrets` with `op://` refs.
3. Wrap `package.json` scripts with `op run --env-file=.env.secrets --`.
4. Verify, move `.env.local` aside, delete after green test.

## Reference implementations

- `~/Local_Claude_Projects/Romio/SECURITY-TODO.md`
- `~/.claude/CLAUDE.md`
