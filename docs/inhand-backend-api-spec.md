# InHand — Backend & API specification

Implementation-ready contract for a Supabase-backed (or equivalent) backend. This document is **derived from the current Next.js app** (`app/`) and **extends** it where the product clearly needs durable, user-owned session persistence.

**Related:** [`inhand-database-design.md`](./inhand-database-design.md)

---

## A. Overview

### A.1 What the backend is responsible for

| Concern | Backend role |
|--------|----------------|
| **Identity** | Register, login, session/JWT, password recovery (Supabase Auth). |
| **Profile & plan** | Store user-visible profile fields and **commercial access** (free vs premium) — today the app uses env `NEXT_PUBLIC_ACCESS_MODE`; production should persist plan on the user. |
| **Salary sessions** | Create, read, update, delete **durable** salary workspaces keyed by `salary_session_id`, including input, breakdown snapshot, and linked planning-tool state. |
| **Offer comparison sessions** | Same for `offer_session_id` and child offers (including optional per-offer breakdown overrides). |
| **History / lists** | Server-backed ordering for “saved salaries” and “saved comparisons” (today: local Zustand persist + caps 40 / mixed 5). |
| **Authorization** | Enforce ownership: a user may only access their own sessions and profile rows (RLS). |

### A.2 What stays client-side

The app **already** implements these purely in the browser; the backend must **not** reimplement tax/breakdown logic as a source of truth unless you deliberately add a server calculator:

- **Salary math:** `calculateSalaryBreakdown`, `recalculateBreakdownFromComponents` (`app/src/lib/utils/calculate-salary.ts`), simple calculator (`app/src/lib/simple-salary-calculator/`).
- **Offer comparison math:** per-offer breakdown via the same engine inside `OfferComparisonView`.
- **EMI math:** `calculateEmi`, `totalInterestPayable` (`app/src/lib/utils/calculate-emi.ts`).
- **Wealth projection:** `projectWealth` (`app/src/lib/utils/project-wealth.ts`).
- **Lifestyle surplus:** `useLifestyleStore.calculateSurplus` (`app/src/lib/stores/use-lifestyle-store.ts`).

**Intended rule:** the server stores **authoritative snapshots** (JSON) that the client wrote after local calculation. The client remains the calculator for v1; the server validates shape, size, and ownership.

### A.3 Free flow vs persisted (premium) flow

**As implemented today**

| Mode | How “premium” is decided | Persistence |
|------|---------------------------|-------------|
| **Env premium** | `NEXT_PUBLIC_ACCESS_MODE=premium` | Salary/offer **history** in `localStorage` via Zustand (`inhand-history`). |
| **Default / paywall** | Env unset or `default` | Same local persistence where flows exist; deep salary routes redirect to `/salary`; premium routes hit paywall. |
| **Auth** | Demo Zustand + `fl_session_email` cookie | No server. |

**Target architecture (this spec)**

| User | Calculations | Persistence |
|------|--------------|-------------|
| **Anonymous / not logged in** | Client-only | Optional: none, or ephemeral local only (current behavior). |
| **Logged-in free** | Client-only | Profile + optional lightweight activity; **no** durable salary/offer sessions **or** gated feature flags only. |
| **Logged-in premium** | Client-side math | **Durable** `salary_sessions` and `offer_sessions` with full restore on reload/device change. |

> **Ambiguity in current code:** “Premium” is an **environment flag**, not a per-user subscription. The database design adds `plan_tier` (or similar) on `profiles` so access can move off env.

### A.4 Source of truth rules

1. **Single salary workspace in UI:** The in-memory `useSalaryStore` remains the interactive workspace; on **blur / debounced save / explicit save**, the client **PATCH**es the active `salary_session_id` row.
2. **Reload:** `GET /salary-sessions/:id` replaces store content (input + breakdown + extension blobs).
3. **History list:** Derived from `salary_sessions` rows for that `user_id` (sort `updated_at DESC`), not a separate “history” table unless you need audit feeds.
4. **Offer workspace:** Same: `offer_session_id` + child offers; client PATCHes after debounce (mirrors current ~1s debounce before `pushOfferComparison`).

---

## B. Core entities

### B.1 User & auth

| Entity | Maps to | Notes |
|--------|---------|-------|
| **User** | `auth.users` (Supabase) | Email/password, OAuth, etc. |
| **Profile** | `public.profiles` | `id` = `auth.users.id`, display name, company, role, **plan_tier**, timestamps. |

### B.2 Plan / subscription tier

| Field (on profile) | Purpose |
|--------------------|---------|
| `plan_tier` | `free` \| `premium` (extend as needed). Replaces env-only gating for real billing. |
| `plan_updated_at` | Optional; for support and cache invalidation. |

External billing (Stripe, etc.) updates this via webhook → Edge Function; out of scope for table DDL here (see database doc).

### B.3 Salary session

Parent record for one “in-hand check” journey.

| Field | Purpose |
|-------|---------|
| `salary_session_id` (`uuid`) | Stable id created on first “View breakdown” (or explicit create). |
| **Input snapshot** | `SalaryInput`-compatible JSON (see `app/src/lib/types/salary.types.ts`). |
| **Breakdown snapshot** | `SalaryBreakdown`-compatible JSON (components, meta, totals). |
| **List metadata** | Denormalized `title`, `annual_ctc`, `monthly_in_hand`, `regime_label` for fast lists without parsing JSON. |
| **Planning extension** | EMI / wealth / monthly planner inputs linked to this session (see database doc — JSONB bundle vs child tables). |

### B.4 Offer comparison session

| Field | Purpose |
|-------|---------|
| `offer_session_id` (`uuid`) | Stable id when user starts or saves a comparison. |
| **Summary** | `title`, `offer_count`, `winner_summary` (same semantics as `OfferComparisonHistoryEntry` in `history.types.ts`). |
| **Child offers** | Rows or embedded list: `OfferDraft` + optional edited breakdown override per offer. |

### B.5 Activity / recent (optional)

Not required if **lists** are served from `salary_sessions` and `offer_sessions` ordered by `updated_at`. Add a materialized `user_activity` view or table only if you need cross-type feeds with custom ordering.

---

## C. API endpoints

Conventions:

- Base path: `/v1` (or Supabase REST auto paths — below names are **app-facing** resources).
- Auth: `Authorization: Bearer <access_token>` (Supabase JWT).
- IDs: UUID v4.

### C.1 Auth & profile

| Method | Route | Purpose | Auth |
|--------|-------|---------|------|
| — | Supabase Auth endpoints | Sign up, sign in, refresh, reset password | varies |
| `GET` | `/v1/me` | Current user id + email + profile + `plan_tier` | Required |
| `PATCH` | `/v1/me/profile` | Update `display_name`, `company`, `role` | Required |

**`GET /v1/me` response (example)**

```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  },
  "profile": {
    "display_name": "Alex",
    "company": "Acme",
    "role": "PM",
    "plan_tier": "premium",
    "updated_at": "2026-04-04T12:00:00Z"
  }
}
```

**`PATCH /v1/me/profile` body**

```json
{
  "display_name": "Alex Rivera",
  "company": "Acme India Pvt Ltd",
  "role": "Senior PM"
}
```

**Validation:** Align with `profileUpdateSchema` (`app/src/lib/schemas/auth.schema.ts`). Email is not mutable via this endpoint.

**Free vs persisted:** Profile applies to all logged-in users. Session CRUD below is **premium** (or feature-flagged).

---

### C.2 Salary sessions

| Method | Route | Purpose | Auth | Free vs persisted |
|--------|-------|---------|------|-------------------|
| `POST` | `/v1/salary-sessions` | Create session + initial input/breakdown after “View breakdown” | Required | **Persisted** (premium) |
| `GET` | `/v1/salary-sessions/:id` | Load full session (input, breakdown, planning extension) | Required | Persisted |
| `GET` | `/v1/salary-sessions` | List sessions for history/nav (pagination) | Required | Persisted |
| `PATCH` | `/v1/salary-sessions/:id` | Update input and/or breakdown and/or extension; bump `updated_at` | Required | Persisted |
| `DELETE` | `/v1/salary-sessions/:id` | Delete session | Required | Persisted |
| `POST` | `/v1/salary-sessions/:id/open` | Optional: mark `last_opened_at` for recents | Required | Persisted |

**Note:** Implement as Supabase tables + RLS; expose via PostgREST or thin Edge Functions if you need custom merge logic.

#### `POST /v1/salary-sessions`

**When called (UX):** After successful validation on salary entry (equivalent to `CtcInputForm` `onSubmit` or document parse success) **and** user is premium — before navigating to breakdown.

**Request body**

```json
{
  "input": { "...SalaryInput" },
  "breakdown": { "...SalaryBreakdown" },
  "planning": {
    "lifestyle_expenses": {},
    "emi": {},
    "wealth": {}
  }
}
```

`planning` may be omitted or partial.

**Response**

```json
{
  "salary_session": {
    "id": "uuid",
    "title": "₹24.0L CTC",
    "annual_ctc": 2400000,
    "monthly_in_hand": 142500,
    "regime_label": "Old regime",
    "updated_at": "...",
    "input": {},
    "breakdown": {},
    "planning": {}
  }
}
```

**Validation**

- `input.annual_ctc` ≥ 100_000 (matches `ctc-input.schema.ts`).
- Fixed + variable must match CTC when `compensationMode === "fixed_variable"`.
- JSON payload size limits (e.g. 512KB) to prevent abuse.

#### `PATCH /v1/salary-sessions/:id`

**When called:** On breakdown cell blur, after adding/removing rows, or debounced batch (recommend 300–800ms debounce for typing).

**Request (partial update)**

```json
{
  "input": { "annualCTC": 2500000 },
  "breakdown": { "...full or partial strategy per implementation" },
  "planning": { "lifestyle_expenses": { "rent": 45000 } }
}
```

**Recommendation:** Either require **full** `input` + `breakdown` snapshots on each PATCH (simplest, matches client store), or support JSON Merge Patch with clear rules. Full snapshot is easier for the current Zustand shape.

**Response:** Updated `salary_session` object.

#### `GET /v1/salary-sessions`

**Query:** `?limit=40&cursor=...` — align with `SALARY_HISTORY_MAX_ENTRIES = 40`.

**Response:** List of summary rows + optional `id` for prefetch.

---

### C.3 Offer comparison sessions

| Method | Route | Purpose | Auth |
|--------|-------|---------|------|
| `POST` | `/v1/offer-sessions` | Create session with ≥2 valid offers | Required |
| `GET` | `/v1/offer-sessions/:id` | Load offers + overrides + summary | Required |
| `GET` | `/v1/offer-sessions` | List recent comparisons | Required |
| `PATCH` | `/v1/offer-sessions/:id` | Update offers / summaries | Required |
| `DELETE` | `/v1/offer-sessions/:id` | Delete | Required |

**When called:** After debounce when ≥2 valid offers (equivalent to `useEffect` in `offer-comparison-view.tsx` that calls `pushOfferComparison` after 1s). On explicit “Save” if you add one later.

**Request body (create / update)**

```json
{
  "offers": [
    {
      "client_id": "stable-per-row-uuid",
      "draft": { "...OfferDraft" },
      "breakdown_override": null
    }
  ],
  "summary": {
    "title": "Compare 2 offers",
    "offer_count": 2,
    "winner_summary": "A leads on in-hand & 1Y value"
  }
}
```

**Ambiguity / gap in current app:** `offerBreakdownEdits` (per-offer edited component tables) are **not** stored in `offersSnapshot` in history. The API **must** persist `breakdown_override` per offer so restore matches the screen.

---

### C.4 History / open / delete patterns

| UX surface | Current app behavior | API mapping |
|------------|---------------------|-------------|
| Nav salary dropdown | Last 5 from `salaryContexts` | `GET /v1/salary-sessions?limit=5` |
| `/salary/history` | Full list, delete, “Use this salary” | List + `DELETE` + `GET` by id |
| Recent activity sheet | Mixed last 5 salary + offer | Two queries or `GET /v1/activity?limit=5` (optional aggregator) |
| Delete salary | `removeSalaryContext` + active reconciliation | `DELETE /v1/salary-sessions/:id` then client refetch list; if deleted was active, `GET` next or clear workspace |
| Open offer from recents | `queueRestore` + navigate | `GET /v1/offer-sessions/:id` → hydrate component state |

---

## D. Flow mapping

### D.1 Salary — “View breakdown” (create session)

| Step | Trigger | API | Tables / entities |
|------|---------|-----|-------------------|
| 1 | User submits CTC form or finishes doc parse | `POST /v1/salary-sessions` | Insert `salary_sessions` (+ default planning row if split) |
| 2 | Success | — | Client sets `activeSalarySessionId` in memory (replaces `activeSalaryHistoryId` concept) |
| 3 | Navigate | — | `router.push('/salary/breakdown')` |

**Caching (TanStack Query):** Set query data for `['salary-session', id]` from response; prepend to `['salary-sessions', 'list']`.

**Errors:** 403 if not premium; 400 validation; 413 payload too large.

**UI after success:** Same as today — breakdown page renders from store.

---

### D.2 Salary — update session while editing breakdown

| Step | Trigger | API |
|------|---------|-----|
| 1 | User edits component row (blur) or adds/removes row | Debounced `PATCH /v1/salary-sessions/:id` |
| 2 | Success | Update TanStack cache for that id; optionally bump list query `updated_at` in place |

**Gap in current app:** Local history snapshot is **not** updated when breakdown edits occur; the backend model fixes this by using the session row as source of truth.

---

### D.3 Switching between salary sessions

| Step | Trigger | API |
|------|---------|-----|
| 1 | User selects row in nav or history | If cache fresh: hydrate from `['salary-session', id]`; else `GET /v1/salary-sessions/:id` |
| 2 | Client | `setInput` + `calculateBreakdown` optional if you trust server breakdown; **recommended:** trust server `breakdown` for parity with saved edits |

**Invalidation:** Selecting another session does not invalidate others; only mutations invalidate the touched id.

---

### D.4 Deleting salary session

| Step | Trigger | API |
|------|---------|-----|
| 1 | Confirm dialog | `DELETE /v1/salary-sessions/:id` |
| 2 | If deleted id was active | Per `useSalaryHistoryDelete`: load next newest or reset — `GET` list, pick first, or clear |

**Refetch:** `invalidateQueries(['salary-sessions'])`.

---

### D.5 Offer comparison — compare CTA / debounced save

| Step | Trigger | API |
|------|---------|-----|
| 1 | ≥2 valid offers stable for debounce window | `PATCH` existing `offer_session_id` or `POST` on first save |
| 2 | User opens tool | `GET /v1/offer-sessions/:id` on mount if id in URL or stored in client |

**Deep link (recommended):** `/salary/premium/offer-comparison?session=<uuid>` so refresh restores without relying on in-memory restore store only (see **`docs/adr/ADR-003-salary-session-client-persistence.md`** for salary cookie + global hydrate; offer sessions follow the same client pattern).

---

### D.6 Profile update

| Step | Trigger | API |
|------|---------|-----|
| 1 | User taps Save on `/profile` | `PATCH /v1/me/profile` |
| 2 | Success | Update `['me']` query |

Current app: `useAuthStore.updateProfile` only — replace with mutation + optimistic update.

---

### D.7 Refresh / reload

| Scenario | Behavior |
|----------|----------|
| Salary breakdown with `?session=id` or last active id in `inhand_last_salary_session` cookie (see ADR-003) | `GET` session on mount; show skeleton until resolved |
| No id, anonymous | Client-only calculator path; no GET |
| Offer comparison | `GET` offer session if id present |

---

### D.8 History behavior

**Server:** Lists are `GET` with sort `updated_at DESC`.

**Client:** Replace Zustand persist for premium users or sync local cache as offline fallback (optional future).

---

## E. TanStack Query guidance

**Status:** `@tanstack/react-query` is a dependency but **not used** in `app/src` yet. Recommended adoption as follows.

### E.1 What to query

| Query key | Source | Stale time |
|-----------|--------|------------|
| `['me']` | `GET /v1/me` | 5 min (refetch on window focus for plan changes) |
| `['salary-sessions', 'list', { cursor }]` | List endpoint | Short (30s) or invalidate on mutation |
| `['salary-session', sessionId]` | Detail endpoint | **Session-scoped** — see below |
| `['offer-sessions', 'list']` | List | Short |
| `['offer-session', sessionId]` | Detail | Session-scoped |

### E.2 What stays local UI state

- Form field **draft** values while typing (before blur/debounce).
- Sheet open/close, modals, scroll restoration (`useSalaryBreakdownScrollRestoration`).
- **Restore bridge:** `useOfferComparisonRestoreStore` can be replaced by **URL session id** + query.

### E.3 Session switching & cache reuse

- If user re-selects a session **unchanged**: use `staleTime` (e.g. 2–5 min) on `['salary-session', id]` — **no refetch** if `updated_at` matches client-held version.
- Pass `updated_at` in query meta or use HTTP `ETag` / `If-None-Match` if implemented.

### E.4 Invalidation rules

| Event | Invalidate |
|-------|------------|
| `PATCH salary-session` success | `['salary-session', id]`, `['salary-sessions', 'list']` |
| `DELETE salary-session` | Remove `['salary-session', id]`, refetch list |
| `PATCH offer-session` | `['offer-session', id]`, list |
| Plan downgrade | `['me']`, clear session caches |

**Rule:** Any successful mutation that changes server data must **immediately** update or invalidate the relevant queries so the UI does not show stale breakdowns.

---

## F. Loading states

Mapped from current UI patterns:

| Scenario | Current behavior | Recommended |
|----------|------------------|-------------|
| Navbar auth | Skeleton `h-9 w-24` until Zustand hydrated | Same until `['me']` resolves |
| Profile | “Loading…” if no user | `isPending` from `useQuery` + skeleton |
| Salary breakdown | Redirect if no CTC | If `sessionId` present, **skeleton** until GET completes; avoid flash of empty |
| Document parse | Button “Reading document…” | Mutation `isPending` |
| Offer comparison initial | Local state | Route-level skeleton only if fetching session by id |
| Session switch | Instant from local store | Optional thin **fetching** bar if GET needed |

**Principle:** Use **route-level** suspense only for SSR-prefetched data; use **component-level** `isPending` for client fetches. Heavy **PATCH** debounces should not block entire page — show subtle “Saving…” on strip optional.

---

## G. Error model

### G.1 Response envelope

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable summary",
    "details": [{ "path": "input.annualCTC", "message": "..." }]
  }
}
```

### G.2 Standard codes

| HTTP | `code` | When |
|------|--------|------|
| 400 | `VALIDATION_ERROR` | Schema / business rules |
| 401 | `UNAUTHORIZED` | Missing/invalid JWT |
| 403 | `FORBIDDEN` | RLS denied or not premium |
| 404 | `NOT_FOUND` | Session id not found or not owned |
| 409 | `CONFLICT` | Optimistic lock / version mismatch (optional) |
| 413 | `PAYLOAD_TOO_LARGE` | JSON too big |
| 429 | `RATE_LIMITED` | Abuse protection |
| 500 | `INTERNAL_ERROR` | Unexpected |

### G.3 Optimistic concurrency (optional)

If using `version` or `updated_at` check:

- Client sends `If-Match: "<version>"` or body `{ "expected_updated_at": "..." }`.
- On mismatch → **409** with latest row in body for merge (or force client refetch).

---

## H. Known gaps vs current implementation (explicit)

1. **Premium is env-based** — migrate to `profiles.plan_tier` + middleware check via session claims or server fetch.
2. **Salary history does not update** after breakdown edits — backend PATCH + Query cache fixes product expectation.
3. **Offer breakdown edits** not in local history — API must store `breakdown_override`.
4. **`@tanstack/react-query` unused** — integrate per section E.
5. **Cookie auth** — replace `fl_session_email` with Supabase session; middleware should verify JWT or use SSR session helper.

---

*Document version: 1.0 — aligned with app snapshot under `app/src` as of InHand repo review.*
