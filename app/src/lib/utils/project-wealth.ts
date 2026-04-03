export interface WealthProjectionParams {
  /** Starting monthly in-hand (from salary breakdown or user override) */
  monthlyInHand: number;
  /** Portion of in-hand saved each month, 0–100 */
  savingsRatePercent: number;
  /** Nominal annual salary growth, capped in UI at 30% */
  salaryGrowthPercentPerYear: number;
  /** Nominal annual portfolio return, capped in UI at 30% */
  investmentReturnPercentPerYear: number;
  horizonYears: number;
}

export interface WealthYearRow {
  year: number;
  monthlyInHand: number;
  annualContribution: number;
  corpusEnd: number;
}

function clampRate(p: number, max = 30): number {
  return Math.min(max, Math.max(0, p));
}

/**
 * Year-by-year projection: salary grows annually; savings = in-hand × rate × 12;
 * contributions added at year-end then full corpus compounds at investment return.
 */
export function projectWealth(params: WealthProjectionParams): WealthYearRow[] {
  const g = clampRate(params.salaryGrowthPercentPerYear) / 100;
  const inv = clampRate(params.investmentReturnPercentPerYear) / 100;
  const save = Math.min(100, Math.max(0, params.savingsRatePercent)) / 100;
  const years = Math.min(40, Math.max(1, Math.floor(params.horizonYears)));

  let monthly = Math.max(0, params.monthlyInHand);
  let corpus = 0;
  const rows: WealthYearRow[] = [];

  for (let y = 1; y <= years; y++) {
    if (y > 1) monthly = monthly * (1 + g);
    const annualContribution = monthly * 12 * save;
    corpus = (corpus + annualContribution) * (1 + inv);
    rows.push({
      year: y,
      monthlyInHand: Math.round(monthly),
      annualContribution: Math.round(annualContribution),
      corpusEnd: Math.round(corpus),
    });
  }

  return rows;
}
