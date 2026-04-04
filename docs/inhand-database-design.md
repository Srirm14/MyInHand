# InHand — Database design (Supabase)

Supabase-oriented schema for **durable, user-owned salary and offer sessions**. Aligns with [`inhand-backend-api-spec.md`](./inhand-backend-api-spec.md) and the actual client types in `app/src/lib/types/`.

---

## A. Design goals

| Goal | How |
|------|-----|
| **Durable session persistence** | One row per salary journey (`salary_sessions`) and per comparison (`offer_sessions` + children). |
| **Per-user isolation** | `user_id` = `auth.users.id` on all tenant tables; **RLS** enforces `auth.uid() = user_id`. |
| **Free vs persisted** | Free/anonymous: no rows (or optional guest experiment). Premium: full CRUD on sessions. |
| **Parent–child modeling** | Salary: session + optional **1:1 extension** for planning tools. Offers: session + **1:N** offers. |
| **History from sessions** | Lists = `SELECT ... ORDER BY updated_at DESC` — no duplicate history table unless auditing is required. |
| **Supabase + RLS** | Standard pattern: `profiles` trigger on signup; policies on all public tables. |

---

## B. Tables to create

| Table | Role |
|-------|------|
| `profiles` | App user profile + **plan_tier** (commercial access). |
| `salary_sessions` | Parent for one salary check: **input + breakdown JSONB** + list metadata. |
| `salary_session_planning` | **1:1** extension — EMI / wealth / lifestyle JSON blobs (hybrid; see §B.1). |
| `offer_sessions` | Parent for one comparison run (summary + timestamps). |
| `offer_session_offers` | Child rows: draft + optional breakdown override. |

**Not required for v1:** `user_activity`, `audit_log`, unless product needs a unified feed or compliance.

### B.1 Salary sub-features: separate tables vs JSONB vs hybrid

**What the app actually stores today**

- **Salary input + breakdown:** `useSalaryStore` — types `SalaryInput`, `SalaryBreakdown` (`salary.types.ts`).
- **Lifestyle:** `useLifestyleStore` — `LifestyleExpenses` (`lifestyle.types.ts`); **global**, not keyed by session in code.
- **EMI:** `useState` inside `EmiAnalyzerView` — loan principals, rates, tenure, second loan flags.
- **Wealth:** `useState` in `WealthForecastView` — horizon, savings rate, growth, return; optional in-hand override string.

**Recommendation: hybrid**

| Data | Storage | Rationale |
|------|---------|-----------|
| Input + breakdown | **`salary_sessions.input_json`, `salary_sessions.breakdown_json`** | Always loaded together on open; matches PATCH from Zustand; one RLS row. Avoids join + consistency issues splitting components into SQL rows. |
| EMI / wealth / lifestyle | **`salary_session_planning` single row** with `emi_json`, `wealth_json`, `lifestyle_json` | Sparse (user may never open EMI); rarely queried analytically; matches “PATCH extension” ergonomics. |

**When to normalize** (future): If you need SQL reporting on loan parameters across users, extract `salary_session_emi_analysis` with typed columns and foreign key — not needed for MVP.

**`salary_session_breakdowns` as a separate table:** Only useful if another service writes component-level rows or you need row-level RLS on components. For InHand’s **client-calculated** model, a **JSONB breakdown on `salary_sessions`** is simpler and is the **recommended primary design**.

---

### B.2 Offer comparison: separate child rows

Store **one row per offer** in `offer_session_offers`:

- Supports 2–3 offers with stable ordering (`sort_order`).
- **Partial updates:** update one child without rewriting whole session JSON.
- **Per-offer `breakdown_override` JSONB** fixes the current gap where only `OfferDraft[]` is saved locally, not `offerBreakdownEdits`.

---

## C. Columns

### C.1 `profiles`

| Column | Type | Required | Meaning |
|--------|------|----------|---------|
| `id` | `uuid` | yes | PK, **FK → `auth.users.id`** |
| `display_name` | `text` | yes | Shown in UI |
| `company` | `text` | no | Employer |
| `role` | `text` | no | Job title |
| `plan_tier` | `text` | yes | `free` \| `premium` (check constraint) |
| `plan_updated_at` | `timestamptz` | no | Last billing-driven change |
| `created_at` | `timestamptz` | yes | default `now()` |
| `updated_at` | `timestamptz` | yes | maintained by trigger |

---

### C.2 `salary_sessions`

| Column | Type | Required | Meaning |
|--------|------|----------|---------|
| `id` | `uuid` | yes | PK, default `gen_random_uuid()` |
| `user_id` | `uuid` | yes | FK → `auth.users.id` |
| `title` | `text` | yes | e.g. name or `₹24.0L CTC` |
| `annual_ctc` | `bigint` | yes | Denormalized from input for list/filter |
| `monthly_in_hand` | `bigint` | yes | Denormalized fixed in-hand for list |
| `regime_label` | `text` | yes | `Old regime` / `New regime` |
| `result_source` | `text` | no | `manual_estimated` \| `document_parsed` |
| `input_json` | `jsonb` | yes | `SalaryInput` shape |
| `breakdown_json` | `jsonb` | yes | `SalaryBreakdown` shape |
| `created_at` | `timestamptz` | yes | |
| `updated_at` | `timestamptz` | yes | |
| `last_opened_at` | `timestamptz` | no | For “recent” ordering if desired |

**Optional later:** `version int` or `content_hash` for optimistic locking.

---

### C.3 `salary_session_planning`

| Column | Type | Required | Meaning |
|--------|------|----------|---------|
| `salary_session_id` | `uuid` | yes | PK & FK → `salary_sessions.id` **ON DELETE CASCADE** |
| `lifestyle_json` | `jsonb` | no | `LifestyleExpenses` |
| `emi_json` | `jsonb` | no | Serializable EMI analyzer state (principal, rate, tenure, second loan, etc.) |
| `wealth_json` | `jsonb` | no | Horizon, sliders, optional in-hand override |
| `updated_at` | `timestamptz` | yes | |

**Note:** TypeScript interfaces for `emi_json` / `wealth_json` should be added in the app when persisting (today they are anonymous `useState` shapes).

---

### C.4 `offer_sessions`

| Column | Type | Required | Meaning |
|--------|------|----------|---------|
| `id` | `uuid` | yes | PK |
| `user_id` | `uuid` | yes | FK → `auth.users.id` |
| `title` | `text` | yes | e.g. `Compare 2 offers` |
| `offer_count` | `int` | yes | |
| `winner_summary` | `text` | yes | Single-line summary |
| `created_at` | `timestamptz` | yes | |
| `updated_at` | `timestamptz` | yes | |

---

### C.5 `offer_session_offers`

| Column | Type | Required | Meaning |
|--------|------|----------|---------|
| `id` | `uuid` | yes | PK |
| `offer_session_id` | `uuid` | yes | FK → `offer_sessions.id` **ON DELETE CASCADE** |
| `sort_order` | `smallint` | yes | 0, 1, 2 |
| `draft_json` | `jsonb` | yes | `OfferDraft` |
| `breakdown_override_json` | `jsonb` | no | Full or partial `SalaryBreakdown` when user edited offer table |
| `updated_at` | `timestamptz` | yes | |

---

## D. Relationships

```
auth.users (1) ──< (1) profiles
auth.users (1) ──< (*) salary_sessions
auth.users (1) ──< (*) offer_sessions

salary_sessions (1) ──< (0..1) salary_session_planning

offer_sessions (1) ──< (*) offer_session_offers
```

- **One user → many salary sessions.**
- **One salary session → at most one planning extension row** (lazy-insert when user first opens EMI / lifestyle / wealth with data).
- **One user → many offer sessions.**
- **One offer session → many offers** (typically 2–3).

---

## E. Mermaid ER diagram

```mermaid
erDiagram
  AUTH_USERS ||--|| PROFILES : "id"
  AUTH_USERS ||--o{ SALARY_SESSIONS : owns
  AUTH_USERS ||--o{ OFFER_SESSIONS : owns
  SALARY_SESSIONS ||--o| SALARY_SESSION_PLANNING : extends
  OFFER_SESSIONS ||--o{ OFFER_SESSION_OFFERS : contains

  AUTH_USERS {
    uuid id PK
    string email
  }

  PROFILES {
    uuid id PK_FK
    text display_name
    text company
    text role
    text plan_tier
    timestamptz plan_updated_at
    timestamptz created_at
    timestamptz updated_at
  }

  SALARY_SESSIONS {
    uuid id PK
    uuid user_id FK
    text title
    bigint annual_ctc
    bigint monthly_in_hand
    text regime_label
    text result_source
    jsonb input_json
    jsonb breakdown_json
    timestamptz created_at
    timestamptz updated_at
    timestamptz last_opened_at
  }

  SALARY_SESSION_PLANNING {
    uuid salary_session_id PK_FK
    jsonb lifestyle_json
    jsonb emi_json
    jsonb wealth_json
    timestamptz updated_at
  }

  OFFER_SESSIONS {
    uuid id PK
    uuid user_id FK
    text title
    int offer_count
    text winner_summary
    timestamptz created_at
    timestamptz updated_at
  }

  OFFER_SESSION_OFFERS {
    uuid id PK
    uuid offer_session_id FK
    smallint sort_order
    jsonb draft_json
    jsonb breakdown_override_json
    timestamptz updated_at
  }
```

> **Note:** `AUTH_USERS` represents Supabase `auth.users` (not in `public` schema). Only `profiles` and session tables live in `public` for PostgREST.

---

## F. Indexing

| Table | Index | Purpose |
|-------|-------|---------|
| `salary_sessions` | `(user_id, updated_at DESC)` | History + nav lists |
| `salary_sessions` | `(user_id, id)` | Lookup by id under user |
| `offer_sessions` | `(user_id, updated_at DESC)` | Recent comparisons |
| `offer_session_offers` | `(offer_session_id, sort_order)` | Ordered load |

Optional partial index: `(user_id)` where `last_opened_at IS NOT NULL` if “recents” uses that column heavily.

---

## G. RLS / ownership model

### G.1 `profiles`

- **SELECT / UPDATE:** `auth.uid() = id`
- **INSERT:** Typically via trigger after `auth.users` insert (service role or `SECURITY DEFINER` function), **or** first-login upsert from client with `id = auth.uid()`.

### G.2 `salary_sessions`, `offer_sessions`

- **ALL operations:** `auth.uid() = user_id`

### G.3 `salary_session_planning`

- **ALL:** parent row must belong to user — e.g. `EXISTS (SELECT 1 FROM salary_sessions s WHERE s.id = salary_session_id AND s.user_id = auth.uid())`

### G.4 `offer_session_offers`

- Same pattern via `offer_sessions.user_id = auth.uid()`.

### G.5 Auth linkage

- Supabase JWT `sub` claim = `auth.uid()`.
- **No** trusting client-sent `user_id` without server-side default: use `DEFAULT auth.uid()` on insert where appropriate, or Edge Function that sets `user_id` from JWT.

---

## H. Sync and versioning

| Topic | Approach |
|-------|----------|
| **Session ids** | UUID generated on create (`gen_random_uuid()`); client stores `activeSalarySessionId` / URL param. |
| **Updates** | Non-optimistic v1: await `PATCH` success before showing “Saved”. Optional: optimistic UI + rollback on error. |
| **`updated_at`** | Trigger `BEFORE UPDATE` sets `updated_at = now()` on all mutable tables. |
| **Reload** | Full `GET` of session replaces client store — avoids drift. |
| **Stale TanStack cache** | Invalidate on mutation; use `updated_at` in query key part if needed (`['salary-session', id, updatedAt]`). |
| **Concurrency** | Optional `version` integer + `WHERE version = $n` on update; else last-write-wins acceptable for personal finance tool v1. |

---

## I. Implementation notes (Supabase)

### I.1 Migrations

- Use `supabase/migrations/*.sql` with explicit `CREATE TABLE`, indexes, RLS `ENABLE ROW LEVEL SECURITY`, and `CREATE POLICY`.
- Order: `profiles` → `salary_sessions` → `salary_session_planning` → `offer_sessions` → `offer_session_offers`.

### I.2 `updated_at` trigger

Reuse standard snippet:

```sql
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

Attach to `profiles`, `salary_sessions`, `salary_session_planning`, `offer_sessions`, `offer_session_offers`.

### I.3 Profile creation trigger

On `auth.users` insert: insert into `public.profiles` with `plan_tier = 'free'` default.

### I.4 Generated types

- Run `supabase gen types typescript` for `Database` type.
- Map `jsonb` columns to shared TS types (`SalaryInput`, `SalaryBreakdown`, `OfferDraft`) in a thin adapter layer — **do not** duplicate shapes.

### I.5 Row ownership assumptions

- Every insert into `salary_sessions` / `offer_sessions` must set `user_id` from `auth.uid()`.
- Prefer **database constraints**: `REFERENCES auth.users(id) ON DELETE CASCADE` only if you want user deletion to wipe data; otherwise `ON DELETE RESTRICT` + soft-delete user flow.

### I.6 Payload limits

- Set reasonable `jsonb` size in app validation; consider Postgres `jsonb` compression; monitor row size.

---

## J. Summary decision table

| Area | Decision |
|------|----------|
| Salary breakdown | **JSONB on `salary_sessions`** |
| EMI / wealth / lifestyle | **JSONB on `salary_session_planning` (1:1)** |
| Offer rows | **Normalized `offer_session_offers`** + `draft_json` + optional `breakdown_override_json` |
| History UI | **Queries on session tables**, `ORDER BY updated_at DESC` |
| Plan / premium | **`profiles.plan_tier`**, not env-only |

---

*Document version: 1.0 — derived from InHand `app/` behavior and types.*
