# The Fluid Ledger — web app

Next.js (App Router) + TypeScript + Tailwind + shadcn/ui.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Access mode

Logic lives in `src/lib/config/access-mode.ts`.

| When | Behavior |
|------|----------|
| `npm run dev` and env **unset** | **Premium** (full `/premium/*` tools) — no `.env` needed to test. |
| `npm run dev` + `NEXT_PUBLIC_ACCESS_MODE=default` in `.env.local` | Paywall; test free-tier UX. |
| Production build, env unset | **Default** (paywall). |
| Any env + `NEXT_PUBLIC_ACCESS_MODE=premium` | Full tools. |

Restart the dev server after changing `.env.local`.

## Routes

- `/` — Marketing landing  
- `/salary` — CTC input  
- `/salary/breakdown` — Salary breakdown table & KPIs  
- `/lifestyle` — Lifestyle sliders & surplus gauge  
- `/premium` — Hub for planning tools  
- `/premium/offer-comparison` — Compare 2–3 offers (interactive)  
- `/premium/wealth-forecast` — 5/10/20 yr projection (sliders + table)  
- `/premium/emi-analyzer` — EMI + DTI vs in-hand & lifestyle  
- `/paywall` — Upgrade / waitlist copy (links into Premium hub)

Design tokens and patterns: `../DESIGN_SYSTEM.md`.
