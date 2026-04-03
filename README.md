# InHand

Salary intelligence for Indian employees — manual or document-based salary input, editable breakdown, lifestyle surplus, offer comparison (manual or upload mock), and premium modules. Product docs: `PRODUCT_FLOW.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `AGENTS.md`.

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

**Premium vs paywall:** `npm run dev` unlocks premium by default (no env). Add `app/.env.local` with `NEXT_PUBLIC_ACCESS_MODE=default` to test the paywall locally. See `app/README.md`.

Agent / contributor rules for the **Next.js app** live in `app/AGENTS.md` (pointer to root docs).
