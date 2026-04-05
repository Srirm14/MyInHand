# Salary / compensation PDF upload (browser parse → review → breakdown)

**Audience:** engineers and AI agents changing the PDF flow, parsers, review UI, or document-based breakdown behaviour.

**Scope:** Client-side extraction with **PDF.js** (`pdfjs-dist`), human-in-the-loop review, then merge into the existing **salary breakdown engine** (`calculate-salary.ts` + `recalculateBreakdownFromComponents`). This is **not** a payroll or legal truth source — copy in the product positions it as assistive.

---

## End-to-end flow

```mermaid
flowchart LR
  subgraph upload [Upload]
    A[User picks PDF] --> B[validate-pdf-upload]
    B --> C[parseCompensationPdf]
  end
  subgraph parse [Parse]
    C --> D[pdf.js text items]
    D --> E[cluster lines + plain text]
    E --> F[map-text-to-salary-fields]
  end
  subgraph ui [Review]
    F --> G[SalaryPdfReviewDialog]
    G --> H[User edits + Continue]
  end
  subgraph apply [Apply]
    H --> I[buildSalaryStateFromPdfReview]
    I --> J[useSalaryStore.applySalaryPdfReview]
    J --> K[Breakdown screen]
  end
```

1. **Entry points:** `CtcInputForm` (salary input → premium breakdown) and `SalaryBreakdownView` (“Replace from file”). Both call `parseCompensationPdf(buffer, fileName)` after `assertValidSalaryPdfFile` / `assertPdfMagicBytes`.
2. **Parse result:** `CompensationPdfParseResult` — `fields[]` (semantic keys + amounts + confidence + `rawSnippet`), `pages[]` (lines + `plainText`), `warnings[]`.
3. **Review:** `SalaryPdfReviewDialog` opens with that result. User toggles inclusion, edits amounts, adds manual allowance/variable lines, confirms CTC shape.
4. **Apply:** `onApply(selection: SalaryPdfReviewSelection)` → `applySalaryPdfReview` in `use-salary-store` → `buildSalaryStateFromPdfReview` → Zustand `input` + `breakdown` updated.

---

## Directory map (`app/src/lib/salary/pdf/`)

| File | Role |
|------|------|
| `pdfjs-browser.ts` | Worker URL / PDF.js init for Next/browser |
| `validate-pdf-upload.ts` | Magic bytes, size/type checks, password error sniffing |
| `extract-pdf-text-structure.ts` | Raw items → `PdfTextLine` (cluster by Y), `plainText` per page |
| `parse-money-from-text.ts` | Rupee / lakh-style token parsing, monthly–annual pairing heuristics |
| `map-text-to-salary-fields.ts` | Line text → `ExtractedSalaryField[]` (regex/label rules, dedupe, multi-line aggregation for some keys) |
| `parse-compensation-pdf.ts` | Orchestrates PDF.js `getDocument` → pages → lines → `mapPdfLinesToSalaryFields` |
| `parse-offer-pdf.ts` | Thin wrapper if offer-specific naming is needed (same pipeline family) |
| `salary-pdf-parse.types.ts` | `SalaryPdfSemanticKey`, `ExtractedSalaryField`, `CompensationPdfParseResult`, `SalaryPdfParseError`, `SalaryPdfComponentId` |
| `salary-pdf-review-model.ts` | `SALARY_REVIEW_GROUPS`, `SALARY_REVIEW_COMPONENT_KEYS`, ordering, missing keys, `inferCtcLineage` |
| `review-defaults.ts` | `defaultIncludeExtractedField`, `confidenceLabel` |
| `apply-salary-pdf-to-state.ts` | `buildSalaryStateFromPdfReview`, `resolveSalaryInputFromPdfReview`, `SalaryPdfReviewSelection`, mapping to breakdown rows |

**UI:** `app/src/components/features/salary/salary-pdf-review-dialog.tsx`

**Tests:** `app/src/__tests__/salary-pdf-parse.test.ts` (upload helpers, mapping, apply integration), plus `calculate-salary.test.ts` for document-mode recalc behaviour.

---

## Semantic model

- **`SalaryPdfSemanticKey`:** Stable buckets for parsing and review (e.g. `basic`, `hra`, `vehicleAllowance`, `annualCTC`, `employeePf`, `esop`, …). Not 1:1 with every payslip label — `map-text-to-salary-fields.ts` is the source of truth for string patterns.
- **`ExtractedSalaryField`:** `key`, `labelMatched`, `confidence` (`high` \| `medium` \| `low`), optional `amountMonthly` / `amountAnnual`, `rawSnippet` for UI.
- **`SalaryPdfComponentId`:** Breakdown row ids that PDF apply can patch (`basic`, `special_allowance`, `esop_estimate`, …).

---

## Review dialog behaviour (summary)

- **Groups:** Cash earnings & allowances → Your deductions → Employer / CTC packaging (`salary-pdf-review-model.ts`).
- **Missing template keys:** Rows still shown with “not in document”; user can include and type values.
- **Annual ↔ monthly:** Editing one side runs `applyReviewAmountPairUpdate` so the other side stays in sync (clear clears both).
- **Summary chips:** Counts use the **same key set** as the review model (matched clearly / need verification / not in PDF) — not raw “every PDF line”.
- **Manual rows:** “Add allowance” / “Add variable line” → `manualAllowances` / `manualVariableLines` on selection.
- **Name:** Document employee name is not used to override profile; `fullName` on `SalaryInput` from PDF path is typically empty unless you reintroduce an explicit override.

---

## Apply logic (`apply-salary-pdf-to-state.ts`)

**`SalaryPdfReviewSelection`**

- `includedKeys`, `amountAnnualOverride`, `amountMonthlyOverride`, `annualCTC`, `compensationMode`, `fixedAnnual`, `variableAnnual`, optional manual lines.

**`resolveSalaryInputFromPdfReview`**

- Builds `SalaryInput` with `resultSource: "document_parsed"`, `documentFileName`, CTC and fixed/variable split rules when the parse + selection imply it.

**Patches vs distinct rows**

- **`COMPONENT_MAP`:** Maps most included keys to a **single** breakdown component id (`basic`, `hra`, `special_allowance`, `variable_pay`, `employee_pf`, …).
- **Distinct allowance keys** (`vehicleAllowance`, `washingAllowance`, `ltaAllowance`): **not** summed into `special_allowance`; each becomes a **custom** allowance row (`isCustom`, `lineSource: parsed`) so the breakdown matches the review list.
- **Distinct variable keys** (`profitIncentive`, `joiningBonus`, `bonus`): separate **variable** section rows instead of merging into `variable_pay`.
- **`variablePay`** still feeds the main **`variable_pay`** line when included.

**Order of operations inside `buildSalaryStateFromPdfReview`**

1. `calculateSalaryBreakdown` with document meta + `variableAnnual` from input.
2. **`recalculateBreakdownFromComponents`** once with `buildBreakdownRecalcContext(input)` so **document mode** skips illustrative defaults (meal/telecom/PF/gratuity/prof tax) until parsed/overridden — see below.
3. Apply **monthly patches** for standard mapped ids from included keys + overrides.
4. **`recalculateBreakdownFromComponents`** again after patches.
5. Append **distinct parsed** allowance/variable components + **manual** lines; **recalc** once more if any extras.

Review values **win** over prior breakdown cells for included keys because patches overwrite `monthlyValue` / `annualValue` and set `lineSource: "parsed"` where applicable.

---

## Document path vs manual path (`calculate-salary.ts`)

- **`lineSourceFromMeta`:** Initial template rows use **`estimated`** until a line is explicitly **parsed** or **user_edited** (avoids marking the whole table “from doc” when only some lines came from the file).
- **`salaryResultSource === "document_parsed"`** in **`recalculateBreakdownFromComponents`:** When a row is **not** overridden (`parsed` / `user_edited`), **do not** apply illustrative defaults for: meal, telecom, employee PF, employer PF, gratuity accrual, professional tax — leave **0** and mark **`needsVerification`** (see below).
- **`attachDocumentVerificationHints`:** Sets `needsVerification` on those ids when `lineSource === "estimated"` and amount is 0; respects **`verificationDismissed`** from **previous** components so recalc does not flash warnings again after the user confirms.
- **`esop_estimate`:** Default breakdown row (variable section, **0**, **removable**); annual value participates in **variable block** for residual CTC math when overridden. PDF semantic **`esop`** maps to this id when included in review.

---

## Zustand (`use-salary-store.ts`)

- **`applySalaryPdfReview(parse, selection, { cityTier, taxRegime })`:** Replaces `input` + `breakdown` from `buildSalaryStateFromPdfReview`.
- **`patchBreakdownComponent`:** Supports amount/name patches and **`verificationDismissed: true`** alone (confirms “zero is OK” without forcing amount edits).

---

## Offer comparison

- **`offer-breakdown-recalc-context.ts`** aligns **`baseLineSource: "estimated"`** with salary’s recalc context so offer-side edits use the same override rules.
- **Bulk PDF upload (`OfferComparisonView`):** Users add **2–3 PDFs** only (drag-and-drop or browse via **`CompensationPdfUploadDropzone`**). Each file is parsed with `parseCompensationPdf`, then the same **`SalaryPdfReviewDialog`** runs **sequentially** (subtitle shows “Offer _i_ of _n_ · filename”). **`buildOfferDraftAndBreakdownFromPdfReview`** (`offer-from-pdf-review.ts`) calls **`buildSalaryStateFromPdfReview`** so CTC, fixed/variable split, line items, and manual rows match the salary apply path. The resulting **`SalaryBreakdown`** is stored in **`offerBreakdownEdits`** for that offer id (same as manual grid edits). Closing the dialog mid-queue restores offers + edits from before the upload.

---

## Extension guide for agents

1. **New PDF label → field:** Add/adjust rules in **`map-text-to-salary-fields.ts`**; extend **`SalaryPdfSemanticKey`** and **`KEY_LABELS`** in the review dialog; decide if the key maps to **`COMPONENT_MAP`**, a **distinct** allowance/variable set, or a **new** `SalaryPdfComponentId` + breakdown row.
2. **New review row (always optional):** Add key to **`SALARY_REVIEW_GROUPS`** / **`SALARY_REVIEW_COMPONENT_KEYS`**; tune **`defaultIncludeExtractedField`** in **`review-defaults.ts`**.
3. **New standard breakdown row:** Add in **`calculateSalaryBreakdown`** + **`recalculateBreakdownFromComponents`** (preserve via `hasRow(prev, id)`); wire PDF mapping in **`apply-salary-pdf-to-state.ts`** if the letter can supply it.
4. **Tests:** Add cases in **`salary-pdf-parse.test.ts`** (parse/apply) and **`calculate-salary.test.ts`** if recalc/document rules change.

---

## Known limitations

- Text-based PDFs only; scanned images need OCR (not implemented).
- Heuristic mapping — annexures and employer-specific wording vary; review UI is mandatory for trust.
- **Indian** number formatting assumed in money parsing where implemented.
- Filename / gross fallbacks for CTC seeding are best-effort (`suggestInitialAnnualCtc`, `inferCtcLineage`).

---

## Related docs

- `docs/SALARY_COMPONENTS.md` — breakdown table semantics.
- `docs/AGENTS.md` — repo-wide agent rules.
- `docs/inhand-client-sync-ux.md` — session persistence (breakdown can sync to cloud like manual flows).
