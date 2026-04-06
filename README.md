# InHand

**Salary intelligence for India** — CTC → in-hand, tax regimes, editable breakdown, lifestyle planning, offer comparison, EMI and wealth tools. The product is a **Next.js** app with **Supabase** auth and optional cloud persistence for salary/offer sessions; tax and payroll math run **on the client**.

**Docs (start here for contributors):**

| Doc | Purpose |
|-----|---------|
| [`docs/AGENTS.md`](docs/AGENTS.md) | How to work in this repo (agents & humans) |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Stack, folder tree, routes, state |
| [`docs/PRODUCT_FLOW.md`](docs/PRODUCT_FLOW.md) | Access tiers and screen flows |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) | UI tokens and patterns |
| [`docs/inhand-client-sync-ux.md`](docs/inhand-client-sync-ux.md) | Autosave, cookies, TanStack Query |
| [`docs/adr/`](docs/adr/) | Architecture decision records |

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | **Next.js 16** (App Router), **React 19** |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS 4**, **shadcn/ui**-style primitives |
| Auth & API | **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`) |
| Server state | **TanStack Query 5** |
| Client state | **Zustand 5** |
| Forms | **React Hook Form** + **Zod 4** |
| PDF export | **@react-pdf/renderer** |
| Motion | **Framer Motion** (marketing / selective UI) |
| Toasts | **Sonner** |

---

## Quick start

```bash
cd app
npm install
cp .env.example .env.local
# Add env values (see `app/.env.example`).
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

From the **repository root** you can also run:

```bash
cd app && npm install
npm run dev    # forwarded: npm run dev --prefix app
```

**Access modes:** `NEXT_PUBLIC_ACCESS_MODE` unset or `default` = free-tier routing (calculator on `/salary`; premium paths redirect unless user has premium in DB). `premium` = treat the app as fully unlocked for local QA. See [`app/src/lib/config/access-mode.ts`](app/src/lib/config/access-mode.ts).

**Security:** Do not commit `.env.local`. The anon key is public by design but must stay tied to your project; rotate if leaked. `npm audit` is clean as of last check; report issues via your usual channel.

---

## Premium billing (Razorpay subscriptions)

Premium (Pro) is a **recurring subscription** (monthly / yearly) for **individual users**. Checkout runs from the existing **Premium plans** modal (and `/billing/upgrade` is available as a deep link).

### Required environment variables

Set these in `app/.env.local` (see `app/.env.example`):

- **`NEXT_PUBLIC_RAZORPAY_KEY_ID`** (or `RAZORPAY_KEY_ID`): Razorpay **Test** key id (public)
- **`RAZORPAY_KEY_SECRET`**: Razorpay **Test** key secret (server-only)
- **`RAZORPAY_PLAN_ID_MONTHLY`**: Razorpay plan id like `plan_...` (monthly)
- **`RAZORPAY_PLAN_ID_YEARLY`**: Razorpay plan id like `plan_...` (yearly)
- **`SUPABASE_SERVICE_ROLE_KEY`**: server-only key used to persist subscription rows and update `profiles.plan_tier`

Optional (recommended):

- **`RAZORPAY_WEBHOOK_SECRET`**: enables webhook verification for subscription lifecycle sync

### Create Razorpay plans (Test mode)

In Razorpay Dashboard (Test mode): **Subscriptions → Plans → New Plan**

- Monthly: every 1 month, amount ₹199 → copy the generated `plan_...` into `RAZORPAY_PLAN_ID_MONTHLY`
- Yearly: every 1 year, amount ₹1910 → copy the generated `plan_...` into `RAZORPAY_PLAN_ID_YEARLY`

### Apply Supabase migration

Billing requires a DB table and a safety trigger:

- `supabase/migrations/20260406120000_inhand_billing_razorpay.sql`

Apply via Supabase CLI (`supabase db push`) or SQL editor in the dashboard.

### Payment flow (high level)

- Client: opens Razorpay Checkout after calling `POST /api/billing/razorpay/subscription`
- Server: verifies payment signature via `POST /api/billing/razorpay/verify`
- Entitlement: user becomes premium only after verification (`profiles.plan_tier = 'premium'`)

Webhook endpoint (optional): `POST /api/billing/razorpay/webhook`

---

## Features (product)

- **Landing** — Marketing hero and CTAs into salary flow.
- **`/salary`** — Free-tier **calculator** (fixed/variable, dual in-hand, regime) or premium **CTC → breakdown** depending on env and login.
- **`/salary/detailed`** — Manual + mock document path, recents (premium).
- **`/salary/breakdown`** — KPIs, editable component table, export **CSV/PDF**, deep links via workspace cookies.
- **`/salary/history`** — Saved salary list and deletes.
- **`/lifestyle`** — Monthly plan sliders and surplus (premium).
- **`/premium/*`** — Offer comparison, wealth forecast, EMI analyzer (premium).
- **`/paywall`** — Pricing modal shell on free tier; tool routing via query params.
- **`/profile`** — Profile fields backed by `profiles` table.
- **Auth** — Login, signup, forgot/reset password (Supabase).

---

## Repository layout

```
.
├── package.json                 # Root scripts: dev/build/lint/start → ./app
├── README.md                    # This file
├── .gitignore                   # Root ignores (.env, .DS_Store)
│
├── app/                         # Next.js application (deploy this directory)
│   ├── package.json
│   ├── next.config.ts           # Next config + security headers (frame deny, nosniff, etc.)
│   ├── middleware.ts          # Supabase session; premium + auth gates
│   ├── tsconfig.json
│   ├── components.json         # shadcn/ui config
│   ├── .env.example            # Template for Supabase + access mode (copy → .env.local)
│   ├── .gitignore
│   ├── README.md               # App-specific commands & routes
│   ├── AGENTS.md               # Pointer to docs/ for contributors
│   ├── CLAUDE.md               # Short pointer for Claude / IDE
│   ├── public/
│   │   └── brand/inhand-logo.svg
│   └── src/
│       ├── app/                 # App Router routes (thin pages)
│       │   ├── layout.tsx       # Fonts, providers, Navbar, Footer, modal host
│       │   ├── globals.css
│       │   ├── icon.svg
│       │   ├── page.tsx         # Landing
│       │   ├── login/, signup/, forgot-password/
│       │   ├── auth/reset-password/
│       │   ├── profile/
│       │   ├── paywall/         # Paywall shell + unlocked variant
│       │   ├── lifestyle/
│       │   ├── salary/          # page, detailed, breakdown, history
│       │   └── premium/         # layout guard, offer-comparison, wealth-forecast, emi-analyzer
│       ├── components/
│       │   ├── ui/              # Primitives (button, dialog, sheet, table, …)
│       │   ├── shared/          # Reusable compositions (breakdown panels, export, stat-card, …)
│       │   ├── features/        # Feature screens (salary, calculator, premium, pricing, landing)
│       │   ├── layout/          # Navbar, footer, nav items, history sheet, dialogs
│       │   ├── auth/            # Auth shell, Supabase missing message
│       │   └── providers/       # Query, AuthSync, premium modal host, workspace cookies sync
│       └── lib/
│           ├── access/          # Product/premium access helpers
│           ├── auth/            # premium-entitlement (server)
│           ├── config/          # access-mode, premium tool metadata
│           ├── constants/       # Tax slabs, city tiers, salary catalog, auth UI copy
│           ├── dom/             # Focus helpers
│           ├── hooks/           # Cloud sync, scroll restore, tiered links, history delete, …
│           ├── mocks/           # Mock salary/offer document parsers
│           ├── motion/          # Landing motion presets
│           ├── notify/          # App toasts wrapper
│           ├── offer-comparison/# Verdict copy / filter helpers (PDF-safe strings)
│           ├── persistence/   # Save-flight, workspace session cookies
│           ├── salary/session-save/  # Draft vs baseline PATCH logic
│           ├── scheduling/      # deferExecution
│           ├── schemas/         # Zod: auth, CTC, lifestyle, offer
│           ├── server/          # Premium redirect helpers for RSC
│           ├── simple-salary-calculator/  # Free /salary math + CTC sync
│           ├── stores/          # Zustand stores
│           ├── supabase/        # Clients, middleware session, queries, hooks, generated types
│           ├── types/           # Domain TypeScript types
│           └── utils/           # Salary engine, tax, EMI, wealth, export CSV, formatters, …
│
└── docs/                        # Product & engineering documentation
    ├── AGENTS.md
    ├── ARCHITECTURE.md
    ├── APPLICATION_CONCEPT.md   # Vision & positioning (tiers → PRODUCT_FLOW)
    ├── DESIGN_SYSTEM.md
    ├── IMPLEMENTATION_PLAN.md   # Historical phases (see note at top)
    ├── PRODUCT_FLOW.md
    ├── SALARY_COMPONENTS.md
    ├── inhand-backend-api-spec.md
    ├── inhand-client-sync-ux.md
    ├── inhand-database-design.md
    └── adr/
        ├── ADR-001-frontend-architecture.md
        └── ADR-002-session-save.md
```

*(Exact file counts change as features land; use `find app/src -type f` for an exhaustive list.)*

---

## Scripts

| Command | Where | Action |
|---------|--------|--------|
| `npm run dev` | root or `app/` | Next.js dev server |
| `npm run build` | root or `app/` | Production build |
| `npm run start` | `app/` | Serve production build |
| `npm run lint` | root or `app/` | ESLint |

---

## What we fixed in this audit (summary)

- **Removed dead code:** unused demo auth seed (`auth.demo.ts`), unused `session-cookie.ts`, empty `docs/API.md`.
- **Types:** dropped unused `LocalAccountRecord`.
- **Docs:** aligned **ARCHITECTURE**, **AGENTS**, **PRODUCT_FLOW**, **APPLICATION_CONCEPT**, **IMPLEMENTATION_PLAN** with **Supabase** auth and real middleware/route rules; fixed **app/AGENTS.md** / **CLAUDE.md** links to **`docs/`**.
- **Security:** baseline **HTTP security headers** in `next.config.ts`; **`.env.example`** for safe onboarding; root **`.gitignore`** for stray env files.
- **npm audit:** 0 vulnerabilities at time of audit.

For deeper database and API contracts, see **`docs/inhand-database-design.md`** and **`docs/inhand-backend-api-spec.md`**.
