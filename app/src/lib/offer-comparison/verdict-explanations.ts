/**
 * Single source of truth for Decision summary “Verdict” copy.
 * Must stay aligned with `firstYearValue` and `monthlyInHand` in
 * `offer-comparison-view.tsx` (comparisons useMemo).
 */
export const OFFER_VERDICT_FORMULAS = {
  /** Shown in footnotes / tooltips — matches table column “Monthly in-hand”. */
  monthlyInHand:
    "Monthly in-hand = Salary Breakdown estimate for recurring cash in-hand after tax and deductions on the fixed path (variable pay is not included in that monthly number).",

  /** Shown in footnotes / tooltips — matches `firstYearValue` in code. */
  firstYearValue:
    "First-year value = (monthly in-hand × 12) + joining bonus + (25% × stated ESOP).",

  /** How we pick badges — matches `bestInHand` / `bestValue` max logic. */
  ranking:
    "Among valid offers only (named company, CTC rules met). “Highest” = equals the table maximum for that metric; ties can share the same badge.",
} as const;

/** Short line for per-row info icon when this offer leads on both metrics. */
export const OFFER_VERDICT_ROW_BEST_BOTH =
  "This offer matches the highest monthly in-hand and the highest first-year value in this comparison. " +
  OFFER_VERDICT_FORMULAS.firstYearValue;

/** When only monthly in-hand is top. */
export const OFFER_VERDICT_ROW_HIGHEST_IN_HAND =
  "This offer has the highest monthly in-hand here. Another offer can still win on first-year value if it has a larger joining bonus or ESOP. " +
  OFFER_VERDICT_FORMULAS.firstYearValue;

/** When only first-year value is top. */
export const OFFER_VERDICT_ROW_HIGHEST_1Y =
  "This offer has the highest first-year value score. Its monthly in-hand can be lower than another offer’s. " +
  OFFER_VERDICT_FORMULAS.firstYearValue;

export function offerVerdictRowTooltipText(
  topHand: boolean,
  topVal: boolean
): string | null {
  if (topHand && topVal) return OFFER_VERDICT_ROW_BEST_BOTH;
  if (topHand && !topVal) return OFFER_VERDICT_ROW_HIGHEST_IN_HAND;
  if (!topHand && topVal) return OFFER_VERDICT_ROW_HIGHEST_1Y;
  return null;
}

/** Decision-summary toolbar: which rows to show. */
export type OfferVerdictFilterId =
  | "all"
  | "best_both"
  | "highest_in_hand"
  | "highest_1y";

export const OFFER_VERDICT_FILTER_LABELS: Record<OfferVerdictFilterId, string> =
  {
    all: "All offers",
    best_both: "Best on both",
    highest_in_hand: "High in-hand",
    highest_1y: "High 1Y value",
  };

/** One line under the filter chips — formula / rule for the active filter. */
export const OFFER_VERDICT_FILTER_FORMULA_LINE: Record<
  OfferVerdictFilterId,
  string
> = {
  all: `${OFFER_VERDICT_FORMULAS.ranking} ${OFFER_VERDICT_FORMULAS.monthlyInHand} ${OFFER_VERDICT_FORMULAS.firstYearValue}`,
  best_both: `“Best on both” = this offer’s monthly in-hand equals the max among compared offers and its first-year value equals the max. ${OFFER_VERDICT_FORMULAS.firstYearValue}`,
  highest_in_hand: `“High in-hand” = monthly in-hand equals the comparison max (includes offers that are also best on 1Y). ${OFFER_VERDICT_FORMULAS.monthlyInHand}`,
  highest_1y: `“High 1Y value” = first-year score equals the comparison max (includes best-on-both). ${OFFER_VERDICT_FORMULAS.firstYearValue}`,
};

export function offerMatchesVerdictFilter(
  filter: OfferVerdictFilterId,
  topHand: boolean,
  topVal: boolean
): boolean {
  if (filter === "all") return true;
  if (filter === "best_both") return topHand && topVal;
  if (filter === "highest_in_hand") return topHand;
  if (filter === "highest_1y") return topVal;
  return true;
}
