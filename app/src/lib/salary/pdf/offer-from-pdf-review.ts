import type { CityTier } from "@/lib/constants/city-tiers";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { SalaryBreakdown, TaxRegime } from "@/lib/types/salary.types";
import {
  buildSalaryStateFromPdfReview,
  type SalaryPdfReviewSelection,
} from "@/lib/salary/pdf/apply-salary-pdf-to-state";
import type { CompensationPdfParseResult } from "@/lib/salary/pdf/salary-pdf-parse.types";

export function pickEmployerName(parse: CompensationPdfParseResult): string {
  const emp = parse.fields.find((f) => f.key === "employerName");
  if (emp?.rawSnippet?.trim()) return emp.rawSnippet.trim().slice(0, 56);
  const base = parse.fileName.replace(/\.[^.]+$/i, "");
  return base.replace(/[_-]+/g, " ").trim().slice(0, 56) || "Offer from upload";
}

/**
 * When joining/bonus map to distinct variable rows in the breakdown, do not also
 * put the same cash on the offer’s joining-bonus field (first-year score would
 * double-count).
 */
function offerJoiningBonusAfterReview(
  parse: CompensationPdfParseResult,
  selection: SalaryPdfReviewSelection,
  breakdown: SalaryBreakdown
): number {
  const hasDistinctJoiningRow = breakdown.components.some((c) =>
    /^pdf_var_(joiningBonus|bonus)_/.test(c.id)
  );
  if (hasDistinctJoiningRow) return 0;

  let sum = 0;
  for (const key of ["joiningBonus", "bonus"] as const) {
    if (!selection.includedKeys.has(key)) continue;
    const f = parse.fields.find((x) => x.key === key);
    const a = selection.amountAnnualOverride?.[key];
    const m = selection.amountMonthlyOverride?.[key];
    if (a != null && Number.isFinite(a)) sum += Math.round(a);
    else if (m != null && Number.isFinite(m)) sum += Math.round(m * 12);
    else if (f?.amountAnnual != null) sum += Math.round(f.amountAnnual);
    else if (f?.amountMonthly != null) sum += Math.round(f.amountMonthly * 12);
  }
  return sum;
}

function offerEsopValueFromBreakdown(breakdown: SalaryBreakdown): number {
  const row = breakdown.components.find((c) => c.id === "esop_estimate");
  return row ? Math.max(0, Math.round(row.annualValue)) : 0;
}

/**
 * Same apply path as salary PDF review: user-reviewed selection + full breakdown
 * from `buildSalaryStateFromPdfReview`, folded into an offer card + stored
 * breakdown edit for comparison.
 */
export function buildOfferDraftAndBreakdownFromPdfReview(
  parse: CompensationPdfParseResult,
  selection: SalaryPdfReviewSelection,
  defaults: { cityTier: CityTier; taxRegime: TaxRegime },
  offerId: string
): { draft: OfferDraft; breakdown: SalaryBreakdown } {
  const { input, breakdown } = buildSalaryStateFromPdfReview(
    parse,
    selection,
    defaults
  );

  const draft: OfferDraft = {
    id: offerId,
    companyName: pickEmployerName(parse),
    annualCTC: input.annualCTC,
    compensationMode: input.compensationMode ?? "total_only",
    fixedAnnual: input.fixedAnnual ?? 0,
    variableAnnual: input.variableAnnual ?? 0,
    cityTier: input.cityTier,
    taxRegime: input.taxRegime,
    joiningBonus: offerJoiningBonusAfterReview(parse, selection, breakdown),
    esopValue: offerEsopValueFromBreakdown(breakdown),
    documentFileName: parse.fileName,
  };

  return { draft, breakdown };
}
