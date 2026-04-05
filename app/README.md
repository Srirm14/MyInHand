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
- `/salary/premium/offer-comparison` — **Manual** or **upload** 2–3 offers; same CTC split pattern as `/salary` per card (PDF parse where configured)  
- `/salary/premium/wealth-forecast` — 5/10/20 yr projection (sliders + table)  
- `/salary/premium/emi-analyzer` — EMI + DTI vs in-hand & monthly plan  
- Legacy `/premium/*` and `/salary/breakdown` (non-premium paths) — **`next.config.ts`** redirects to the canonical **`/salary/premium/*`** routes (no separate `/premium` hub page)  
- `/paywall` — **Free tier:** opens the same global **Premium plans** modal as in-app CTAs (page is a minimal shell). **Premium env:** handled by the paywall page (unlocked redirect). Closing the modal while on `/paywall` returns to `/salary`.

## Premium plans modal (free tier)

- **Component:** `src/components/features/pricing/premium-plans-modal.tsx` (embedded pricing section).
- **Host:** `src/components/providers/premium-plans-modal-host.tsx` in root `layout.tsx` (inside `Suspense` for `useSearchParams`).
- **State:** `src/lib/stores/use-premium-plans-modal-store.ts` — call **`openPremiumPlansModal({ fromPremium?: boolean })`** from buttons or **`PremiumBlurOfferTeaser`**; **`closePremiumPlansModal()`** to dismiss.

## Brand / favicon

- **`public/brand/inhand-logo.svg`** — logo mark; referenced by **`InhandLogoMark`** (`src/components/layout/inhand-logo-mark.tsx`) and `metadata.icons` in `src/app/layout.tsx`.
- **`src/app/icon.svg`** — same artwork for the app icon / favicon. Update both files together when the mark changes.

Design tokens and patterns: [`../docs/DESIGN_SYSTEM.md`](../docs/DESIGN_SYSTEM.md).

## Environment

Copy **`.env.example`** → **`.env.local`** and set Supabase URL + anon key. Restart the dev server after changes.
