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
| Env **unset** or `NEXT_PUBLIC_ACCESS_MODE=default` | **Free tier** (calculator on `/salary`; `/lifestyle`, `/salary/breakdown`, `/salary/detailed` redirect to `/salary`; `/premium/*` → paywall). Same in dev and production. |
| `NEXT_PUBLIC_ACCESS_MODE=premium` | Full premium routes (still requires login where middleware says so). |

Restart the dev server after changing `.env.local`.

## Routes

- `/` — Marketing landing  
- `/salary` — **Premium env:** `CtcInputForm` → breakdown (legacy). **Default/paywall env:** free fixed/variable calculator only (in-hand + composition).  
- `/salary/detailed`, `/salary/breakdown`, `/lifestyle` — **Premium env only** (`NEXT_PUBLIC_ACCESS_MODE=premium`). Otherwise middleware + server **redirect → `/salary`**. With premium env, **signed-in** still required (middleware).  
- `/salary/detailed` — Detailed CTC + document upload + recents → breakdown  
- `/salary/breakdown` — KPI row, component breakup, plan cards (EMI, forecast, monthly plan)  
- `/lifestyle` — Monthly plan (spending + surplus)  
- `/premium` — Hub for planning tools  
- `/premium/offer-comparison` — **Manual** or **upload** 2–3 offers; same CTC split pattern as `/salary` per card (mock parse)  
- `/premium/wealth-forecast` — 5/10/20 yr projection (sliders + table)  
- `/premium/emi-analyzer` — EMI + DTI vs in-hand & monthly plan  
- `/paywall` — **Free tier:** opens the same global **Premium plans** modal as in-app CTAs (page is a minimal shell). **Premium env:** handled by the paywall page (unlocked redirect). Closing the modal while on `/paywall` returns to `/salary`.

## Premium plans modal (free tier)

- **Component:** `src/components/features/pricing/premium-plans-modal.tsx` (embedded pricing section).
- **Host:** `src/components/providers/premium-plans-modal-host.tsx` in root `layout.tsx` (inside `Suspense` for `useSearchParams`).
- **State:** `src/lib/stores/use-premium-plans-modal-store.ts` — call **`openPremiumPlansModal({ fromPremium?: boolean })`** from buttons or **`PremiumBlurOfferTeaser`**; **`closePremiumPlansModal()`** to dismiss.

Design tokens and patterns: `../DESIGN_SYSTEM.md`.
