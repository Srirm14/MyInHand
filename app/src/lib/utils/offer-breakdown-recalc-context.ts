import type { OfferDraft } from "@/lib/types/offer.types";
import type { BreakdownRecalcContext } from "@/lib/utils/calculate-salary";

/** Same shape as salary `buildBreakdownRecalcContext`, for per-offer edits in comparison. */
export function buildOfferBreakdownRecalcContext(o: OfferDraft): BreakdownRecalcContext {
  const salaryResultSource = o.documentFileName
    ? "document_parsed"
    : "manual_estimated";
  return {
    annualCTC: o.annualCTC,
    cityTier: o.cityTier,
    regime: o.taxRegime,
    variableAnnual:
      o.compensationMode === "fixed_variable" ? (o.variableAnnual ?? 0) : 0,
    baseLineSource:
      salaryResultSource === "document_parsed" ? "parsed" : "estimated",
    salaryResultSource,
    documentFileName: o.documentFileName,
  };
}
