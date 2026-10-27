# Milestone Guardian

Milestone-centered life planning, NOT a budgeting app, NOT a chatbot at the center.

**What was pre-existing:** the Soluntir platform (ledger and auth) — it is NOT part of this repo.
**What was built during the hackathon (26 Oct–4 Nov 2026):** this standalone repo. Tonight, 27 Oct 2026, only the initial scaffold and the milestone schema below.

## What this product does

A household sets life milestones — for example a wedding, a home down payment, or a child's education — on a timeline. A deterministic projection engine (built on a later night) computes, from a savings rate, when each milestone can be reached. A Meta model (Muse Spark via the Meta Model API, built on a later night) only explains those computed numbers and suggests options in non-judgmental language. It never computes numbers.

Demo data in this repo, when added later, will be synthetic only. Never use a real ledger here.

## What was built tonight (27 Oct 2026)

- Initial scaffold: Nuxt 4 + Vue + TypeScript + Tailwind, Cloudflare Workers + D1 + Drizzle.
- Milestone schema only: `milestones` and `milestone_links` tables, plus migration `migrations/0001_milestones.sql`.
- This README, a LICENSE, and a `.gitignore` that excludes secrets and environment files.

## What is NOT built yet

- Projection engine (planned 28 Oct)
- Meta narrative / recommendations (planned 29 Oct)
- Life Timeline UI (planned 30 Oct)
- What-if simulator and cascade recompute (planned 31 Oct)
- Drift detection and alert feed (planned later)
- Demo data and demo video (planned 2–4 Nov)
- Submission: 5 Nov before 09:00 WIB

## Stack

- Nuxt 4.4.4, Vue 3.5.41, TypeScript, Tailwind CSS 4.3.3
- Cloudflare Workers (Nitro preset `cloudflare_module`), Cloudflare D1, Drizzle ORM 0.45.2

## Run locally (owner steps, after the repo exists)

Use pnpm, not npm.

```bash
pnpm install
pnpm dev
```

Create the D1 database with the Cloudflare dashboard or CLI, then fill in its identifier in your own deployment configuration — do NOT commit a database identifier, an email address, an API key, or any token to this repo.

## Environment secrets

Only one secret name is referenced, as a placeholder, and it is not built yet:

- `MODEL_API_KEY` — Meta Model API key, to be set only as a Cloudflare secret on the server, never in code, never in `.env` committed to git, never in a screenshot or chat message.

See `.env.example` for the placeholder name only. It contains no value.

## Amounts

All money amounts in the schema are in minor units (for example, cents of the currency), as integers. The projection engine, when built, must use these integers deterministically and be unit-tested. The language model must never be the source of a number shown to the user.

## License

MIT. See `LICENSE`.
