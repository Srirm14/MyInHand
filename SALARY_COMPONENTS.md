# SALARY_COMPONENTS.md — Indian salary breakdown (InHand)

Product reference for the **Salary Breakdown** screen: information architecture, data model, tooltip copy strategy, badges, and calculation display rules. Implementation lives in `app/src/lib/constants/salary-component-catalog.ts`, `salary.types.ts`, `calculate-salary.ts`, and `salary-breakdown-view.tsx`.

---

## 1. Information architecture

1. **Hero stats** — Monthly in-hand, annual tax, monthly deductions (unchanged high-level KPIs).
2. **Truth banner** — Estimated vs document-parsed; disclaimer that CTC ≠ in-hand.
3. **Component table (grouped)**  
   - **Earnings & cash components** — Amounts that typically flow into monthly gross / in-hand (basic, allowances, reimbursements, variable where modeled).  
   - **Employer contributions & CTC-only** — Part of package value, not paid as monthly cash (employer PF, gratuity accrual, etc.).  
   - **Deductions** — Reduce in-hand (employee PF, PT, TDS, etc.).
4. **Net in-hand summary** — Short reconciliation: cash earnings (+) less deductions (=) monthly in-hand (ties to KPI).
5. **Downstream CTAs** — Lifestyle, tax tools (unchanged).

Rows are **sparse**: only components with a non-zero value in the current run are shown, except core illustrative lines the engine always emits for the estimated template (basic, HRA, special, PF, tax, etc.). Optional heads (DA, LTA, joining bonus, …) appear when the engine or future parsers attach values.

---

## 2. Component list model (`SalaryComponent`)

| Field | Purpose |
|--------|--------|
| `id` | Stable key; maps to tooltip catalog. |
| `name` | Short label in the table. |
| `description` | One-line subtitle under name (calculation hint). |
| `monthlyValue` / `annualValue` | Shown per period; annual = monthly × 12 when user edits monthly (existing behavior). |
| `type` | `earning` \| `deduction` \| `tax-free` \| `employer` — drives badge color. |
| `group` | `earnings` \| `employer_contributions` \| `deductions` — drives grouping and in-hand math. |
| `lineSource` | `estimated` \| `parsed` \| `user_edited` — from engine, document flow, or cell edit. |
| `tags?` | `employer_side`, `one_time`, `tax_sensitive`, `conditional`, `recurring` — extra chips. |

**In-hand aggregation rule:** Sum `monthlyValue` for `group === "earnings"`; subtract `group === "deductions"`; **ignore** `employer_contributions` for monthly cash.

---

## 3. Grouping structure

| Group ID | UI title | Typical contents |
|----------|----------|------------------|
| `earnings` | Earnings & salary components | Basic, DA (if any), HRA, special allowance, LTA, conveyance, medical, meal, telecom, variable pay (when split), bonuses (when modeled), reimbursements. |
| `employer_contributions` | Employer contributions (CTC) | Employer PF (and pension split explained in tooltip), gratuity accrual, employer ESI, group insurance (when modeled). |
| `deductions` | Deductions | Employee PF, professional tax, income tax (TDS), employee ESI, LWF, other recoveries (when modeled). |

---

## 4. Tooltip copy approach

- **Source of truth:** `salary-component-catalog.ts` keyed by `id`.
- **Trigger:** Small **Info** icon next to each component name (hover + focus for accessibility).
- **Content blocks (concise):**  
  1. Plain-language **what it is**.  
  2. **Classification** (earning / employer contribution / deduction / reimbursement; recurring vs one-time where relevant).  
  3. **Cash & CTC impact** (affects monthly in-hand, CTC only, reduces in-hand, tax relevance).  
  4. **Calculation** (how this app estimated it — **illustrative** wording).  
  5. **Applicability** (many employers omit or rename heads; not legal advice).

Tone: helpful for salaried employees; **no** guarantees of legal/tax outcomes.

---

## 5. Calculation display rules

- **CTC ≠ in-hand:** Banner + employer group explains non-cash CTC parts.
- **Employer PF / gratuity:** Shown under employer group; excluded from monthly cash inflow in totals.
- **Employee PF:** Linked to PF wage ceiling in engine; tooltip states eligible wages vary by company.
- **Tax (TDS):** Estimated from regime + gross proxy (CTC less employer-only CTC slices used in engine); tooltip says actual TDS depends on declarations and payroll.
- **Variable pay:** When user enters fixed + variable split, variable appears as an earning line; may be tagged `conditional` / `one_time` depending on product copy.
- **Parsed vs estimated:** `lineSource` + **Parsed** / **Estimated** badge; after cell edit, that row → **Edited**.

---

## 6. Badge / label system

| Badge | When |
|-------|------|
| **Estimated** | `lineSource === "estimated"` |
| **Parsed** | `lineSource === "parsed"` |
| **Edited** | `lineSource === "user_edited"` |
| **Employer-side** | `tags` includes `employer_side` or `type === "employer"` |
| **Tax-sensitive** | `tags` includes `tax_sensitive` |
| **One-time** | `tags` includes `one_time` |
| **Conditional** | `tags` includes `conditional` |

Type column keeps **EARNING** / **DEDUCTION** / **TAX FREE** / **EMPLOYER (CTC)**.

---

## 7. UX structure (breakdown table)

- **Monthly / Annual** toggle: primary numeric column follows selection; secondary column shows the other in smaller, muted text.
- **Grouped sections:** Subheader row per group (no spreadsheet gridlines; calm spacing).
- **Columns:** Component (name + info icon + optional badges), primary amount, secondary amount, type badge.
- **Alignment:** Labels left, amounts right (`tabular-nums`).
- **Editing:** Monthly cell remains editable where shown; annual follows ×12 (existing store behavior).

---

## 8. Truthfulness

- The app **does not** claim a universal Indian salary structure.
- **Optional** components are omitted when zero or not modeled in this release.
- Copy and tooltips use **illustrative** / **typical** language and defer to employer payslips for ground truth.
- Future: document OCR can populate additional `id`s from catalog; same grouping and tooltip behavior.

---

## 9. Related docs

- `PRODUCT_FLOW.md` — §3 Salary breakdown.
- `ARCHITECTURE.md` — `calculate-salary.ts`, catalog path.
- `DESIGN_SYSTEM.md` — Tables, tooltips, badges.
