/**
 * Standard reducing-balance EMI (monthly rest).
 * P = principal, annualRatePercent = nominal annual %, tenureMonths = loan term in months.
 */
export function calculateEmi(
  principal: number,
  annualRatePercent: number,
  tenureMonths: number
): number {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  const r = annualRatePercent / 12 / 100;
  if (r <= 0) return Math.round(principal / tenureMonths);
  const factor = Math.pow(1 + r, tenureMonths);
  return Math.round((principal * r * factor) / (factor - 1));
}

export function totalInterestPayable(
  principal: number,
  emi: number,
  tenureMonths: number
): number {
  return Math.max(0, emi * tenureMonths - principal);
}
