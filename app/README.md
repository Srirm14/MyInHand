# InHand — web app

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
- `/salary` — Salary input: **manual CTC** (total-only or optional **fixed + variable** split) or **document upload** (mock parse); **Last tracked salaries / Last compared offers**  
- `/salary/breakdown` — Breakdown KPIs; **editable** monthly components; estimated vs document banners  
- `/lifestyle` — Monthly plan (spending + surplus gauge)  
- `/premium` — Hub for planning tools  
- `/premium/offer-comparison` — **Manual** or **upload** 2–3 offers; same CTC split pattern as `/salary` per card (mock parse)  
- `/premium/wealth-forecast` — 5/10/20 yr projection (sliders + table)  
- `/premium/emi-analyzer` — EMI + DTI vs in-hand & monthly plan  
- `/paywall` — Upgrade / waitlist copy (links into Premium hub)

Design tokens and patterns: `../DESIGN_SYSTEM.md`.
