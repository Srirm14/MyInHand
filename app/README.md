# The Fluid Ledger — web app

Next.js (App Router) + TypeScript + Tailwind + shadcn/ui.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Access mode (env)

Copy `app/.env.example` → `app/.env.local`:

| `NEXT_PUBLIC_ACCESS_MODE` | Behavior |
|---------------------------|----------|
| `default` or unset | Free tier: `/premium/*` redirects to paywall; nav **Offers / Forecast / EMI / Premium** → paywall. |
| `premium` | Full tools: `/premium/*` open; `/paywall` shows a short “already unlocked” notice. |

Restart the dev server after changing env.

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
