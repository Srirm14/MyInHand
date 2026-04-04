# InHand

Salary intelligence for Indian employees — **`/salary`** is **premium** (legacy CTC → breakdown) or **free calculator** (fixed/variable + CTC sync) depending on `NEXT_PUBLIC_ACCESS_MODE`; **detailed** CTC/document path → editable breakdown; **monthly plan**; offer comparison; premium modules. Product docs: `PRODUCT_FLOW.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `AGENTS.md`.

## Repository layout

| Path | Purpose |
|------|---------|
| `/` | Product docs: `AGENTS.md`, `DESIGN_SYSTEM.md`, `PRODUCT_FLOW.md`, `ARCHITECTURE.md` |
| `app/` | Next.js 16 App Router application (`npm run dev` from `app/`) |
| `docs/adr/` | Architecture decision records |

## Quick start

From the **repository root** (after `npm install` inside `app/` once):

```bash
cd app && npm install
cd .. && npm run dev
```

Or work only inside the app:

```bash
cd app && npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000). A root `package.json` forwards `npm run dev|build|lint|start` to `./app`.

**Premium vs paywall:** Without `NEXT_PUBLIC_ACCESS_MODE=premium` in `app/.env.local`, the app runs **free tier** locally (same as production). Set `NEXT_PUBLIC_ACCESS_MODE=premium` to test full flows. See `app/README.md`.

Agent / contributor rules for the **Next.js app** live in `app/AGENTS.md` (pointer to root docs).
