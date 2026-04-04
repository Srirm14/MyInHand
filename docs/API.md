# API specification (planned backend)

This document describes **REST-style HTTP APIs** to persist user data that the InHand **Next.js app currently keeps only in the browser** (Zustand + `localStorage` via `persist`).  

**Calculations stay on the client** unless you later add a server-side tax engine for audit parity. The backend’s job is **durable storage**, **per-user isolation**, **list/delete**, and optional **versioning**.

---

## Current app state (no HTTP API yet)

| Concern | Today |
|--------|--------|
| Salary input + breakdown | `use-salary-store.ts` — in memory |
| Salary / offer **history** | `use-history-store.ts` — persisted as `localStorage` key **`inhand-history`** |
| Offer comparison **open from recents** | `use-offer-comparison-restore-store.ts` — in memory, one-shot queue |
| Auth | `use-auth-store.ts` — demo local accounts + cookie marker; **no server** |
| Document parse | Mocks only (`mock-parse-salary-document`, `mock-parse-offer-document`) |

There are **no** `app/api/**/route.ts` handlers in the repo today. React Query is installed but not wired to your domain APIs yet.

---

## Design principles

1. **Store inputs + optional snapshots** — The UI can **recompute** breakdown from `SalaryInput` (see `calculateSalaryBreakdown`). For rows where the user **edited line items**, persist a **`breakdown`** (or `components` + meta) so restore matches the table; otherwise a stored `monthly_in_hand` is display-only and may drift if tax rules change.
2. **Id** — Use server-generated UUIDs; the client today uses `crypto.randomUUID()`.
3. **Versions** — Use **`updated_at`** (ISO 8601) on every resource; optionally expose integer **`version`** for optimistic concurrency (`If-Match` or body `version`).
4. **Auth** — All routes below require an authenticated user (session cookie or `Authorization: Bearer`). Replace demo auth when implementing.
5. **Pagination** — List endpoints: `?limit=&cursor=` (cursor = opaque token or `updated_at,id`).

---

## Type alignment (existing TS types)

Implement JSON shapes compatible with:

- `SalaryInput`, `SalaryBreakdown` — `app/src/lib/types/salary.types.ts`
- `SalaryHistoryEntry` — `app/src/lib/types/history.types.ts` (kind `"salary"`)
- `OfferDraft`, `OfferComparisonHistoryEntry` — `app/src/lib/types/offer.types.ts`, `history.types.ts` (kind `"offer_comparison"`)

---

## 1. Salary saved runs

Maps to **`salaryContexts`** in `use-history-store.ts` (max **40** entries today — `SALARY_HISTORY_MAX_ENTRIES`).

### `POST /api/v1/salary-runs`

Create a saved run after the user completes CTC → breakdown (same moment `pushSalaryCalculation` runs).

**Body (JSON)**

| Field | Required | Notes |
|-------|----------|--------|
| `input` | Yes | `SalaryInput` object |
| `monthly_in_hand` | Yes | Number; denormalized for list cards (from `breakdown.monthlyInHand`) |
| `title` | No | Display string; app uses name or `₹XL CTC` |
| `breakdown` | No | Full `SalaryBreakdown` — **recommended** once user edits any line |
| `client_id` | No | Client UUID for idempotent retry |

**Response `201`**

```json
{
  "id": "uuid",
  "kind": "salary",
  "at": "2026-04-04T12:00:00.000Z",
  "title": "₹24.0L CTC",
  "annual_ctc": 2400000,
  "monthly_in_hand": 142500,
  "regime_label": "New regime",
  "snapshot": { },
  "result_source": "manual_estimated",
  "breakdown": null,
  "version": 1,
  "updated_at": "2026-04-04T12:00:00.000Z"
}
```

### `GET /api/v1/salary-runs`

List current user’s runs, **newest first** (replaces reading `salaryContexts` from localStorage).

- Query: `limit` (default 40, max 100), `cursor`

### `GET /api/v1/salary-runs/:id`

Single run for restore / “open this salary”.

### `PATCH /api/v1/salary-runs/:id`

Optional: update `title`, replace `breakdown` after edits, bump `version`.

- Body: partial; include `version` if using optimistic locking.

### `DELETE /api/v1/salary-runs/:id`

Permanent delete (replaces `removeSalaryContext`).

**Response `204`**

---

## 2. Offer comparisons (saved)

Maps to **`entries`** where `kind === "offer_comparison"` (today only **5** mixed rows in `entries` — `MAX_MIXED_ENTRIES`; you may use a larger server limit).

### `POST /api/v1/offer-comparisons`

Persist when comparison is stable (today debounced `pushOfferComparison` after ≥2 valid offers).

**Body (JSON)**

| Field | Required | Notes |
|-------|----------|--------|
| `offers` | Yes | Array of `OfferDraft` (2–3 items) |
| `valid_summary` | Yes | Array of `{ company_name, monthly_in_hand, first_year_value }` — used for winner line |
| `title` | No | Default: `Compare N offers` |
| `winner_summary` | No | App derives string; can be server-side for consistency |

**Response `201`**

```json
{
  "id": "uuid",
  "kind": "offer_comparison",
  "at": "2026-04-04T12:00:00.000Z",
  "title": "Compare 2 offers",
  "offer_count": 2,
  "winner_summary": "Acme leads on in-hand & 1Y value",
  "offers_snapshot": [ ],
  "version": 1,
  "updated_at": "2026-04-04T12:00:00.000Z"
}
```

### `GET /api/v1/offer-comparisons`

List for user; newest first.

### `GET /api/v1/offer-comparisons/:id`

Load `offers_snapshot` into offer comparison screen (replaces `queueRestore` from local-only flow).

### `PATCH /api/v1/offer-comparisons/:id`

Update offers + summary when user edits and you want server truth.

### `DELETE /api/v1/offer-comparisons/:id`

Permanent delete (replaces `removeOfferComparisonEntry`).

**Response `204`**

---

## 3. Activity feed (optional)

The **Recent history** sheet merges salary + offer rows (`entries` in `use-history-store`). You can:

- **Option A:** Client merges `GET /salary-runs?limit=5` + `GET /offer-comparisons?limit=5` and sorts by `at`, or  
- **Option B:** **`GET /api/v1/activity?limit=10`** — returns a discriminated union:

```json
{
  "items": [
    { "kind": "salary", "id": "…", "at": "…", "title": "…", "subtitle": "…" },
    { "kind": "offer_comparison", "id": "…", "at": "…", "title": "…", "winner_summary": "…" }
  ],
  "next_cursor": null
}
```

---

## 4. Auth & profile (future)

Not persisted in a real API today. When you replace demo auth:

- `POST /api/v1/auth/login`, `POST /api/v1/auth/logout`, `GET /api/v1/me` — or use a provider (Clerk, Auth.js, etc.).
- `PATCH /api/v1/me` — profile fields from `UserProfile` in `user.types.ts`.

---

## 5. Document upload / OCR (out of scope for v1 storage)

Salary and offer flows use **mock parsers**. Real pipeline would be separate:

- `POST /api/v1/documents` (multipart) → job id → `GET /api/v1/documents/:id` → extracted fields.

Do not block salary-run / offer-comparison storage on this.

---

## 6. Errors

Use a consistent JSON body:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Salary run not found",
    "details": {}
  }
}
```

Common codes: `UNAUTHORIZED`, `FORBIDDEN`, `NOT_FOUND`, `VALIDATION_ERROR`, `CONFLICT` (version mismatch).

---

## 7. Migration notes (frontend)

When APIs exist:

1. Replace `persist` in `use-history-store` with **hydrate from `GET`** on login + **mutations** on push/delete.
2. Keep **optimistic UI** optional; otherwise await `POST` before navigating.
3. `use-offer-comparison-restore-store` can become “pending id from router” only, with **`GET /offer-comparisons/:id`** loading data.
4. Enforce limits server-side (e.g. max 40 salary runs, max 50 offer comparisons) and return `403` or `VALIDATION_ERROR` with a clear message to match current “history limit” UX.

---

## Summary checklist

| Endpoint | Purpose |
|----------|---------|
| `POST/GET/PATCH/DELETE /salary-runs` | Saved salary scenarios + optional breakdown |
| `POST/GET/PATCH/DELETE /offer-comparisons` | Saved offer comparison snapshots |
| `GET /activity` (optional) | Unified recents for nav/sheet |
| Auth + `/me` | Replace demo store |
| Documents (later) | Real PDF/image parse |

**Not required** for parity with current product: lifestyle sliders (`use-lifestyle-store` is not persisted), simple salary calculator state on free `/salary` beyond what you already sync into `use-salary-store`.


| Endpoint                             | Purpose                       |
| ------------------------------------ | ----------------------------- |
| POST /api/v1/salary-runs             | Create saved salary run       |
| GET /api/v1/salary-runs              | List salary runs              |
| GET /api/v1/salary-runs/:id          | Get one salary run            |
| PATCH /api/v1/salary-runs/:id        | Update salary run             |
| DELETE /api/v1/salary-runs/:id       | Delete salary run             |
| POST /api/v1/offer-comparisons       | Create saved offer comparison |
| GET /api/v1/offer-comparisons        | List comparisons              |
| GET /api/v1/offer-comparisons/:id    | Get one comparison            |
| PATCH /api/v1/offer-comparisons/:id  | Update comparison             |
| DELETE /api/v1/offer-comparisons/:id | Delete comparison             |
| GET /api/v1/activity                 | Optional unified history feed |
| POST /api/v1/auth/login              | Future auth                   |
| POST /api/v1/auth/logout             | Future auth                   |
| GET /api/v1/me                       | Future profile fetch          |
| PATCH /api/v1/me                     | Future profile update         |
| POST /api/v1/documents               | Later upload/OCR              |
| GET /api/v1/documents/:id            | Later parse status            |InHand needs a storage-first backend, not a calculation-first backend: keep salary math on the client, and use authenticated REST endpoints to save, list, restore, update, and delete salary runs and offer comparisons reliably per user