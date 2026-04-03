/**
 * Format number to Indian currency: ₹1,42,500
 * Uses en-IN locale for proper lakhs/crores grouping.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Compact format: ₹1.4L, ₹1.2Cr
 */
export function formatCurrencyCompact(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";

  if (abs >= 10000000) {
    return `${sign}₹${(abs / 10000000).toFixed(1)}Cr`;
  }
  if (abs >= 100000) {
    return `${sign}₹${(abs / 100000).toFixed(1)}L`;
  }
  if (abs >= 1000) {
    return `${sign}₹${(abs / 1000).toFixed(0)}K`;
  }
  return `${sign}₹${abs.toLocaleString("en-IN")}`;
}

/**
 * Format a plain number with Indian grouping: 1,42,500
 */
export function formatIndianNumber(num: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(num);
}

/**
 * Format percentage: 12.4%
 */
export function formatPercentage(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format annual CTC as a compact LPA/Cr label for nav and summaries.
 *
 * Examples:
 *   800000   → "8 LPA"
 *   1200000  → "12 LPA"
 *   1850000  → "18.5 LPA"
 *   2500000  → "25 LPA"
 *   10000000 → "1 Cr"
 *   12500000 → "1.25 Cr"
 *
 * Rules:
 *   - ≥ 1 Cr → "X.XX Cr" (drop trailing zeros)
 *   - < 1 Cr → "X.X LPA" or "X LPA" (drop .0)
 */
export function formatCTCAsLPA(annualCTC: number): string {
  if (annualCTC <= 0) return "";
  const abs = Math.abs(annualCTC);

  if (abs >= 10_000_000) {
    const cr = abs / 10_000_000;
    const formatted = cr % 1 === 0 ? cr.toFixed(0) : parseFloat(cr.toFixed(2)).toString();
    return `${formatted} Cr`;
  }

  const lpa = abs / 100_000;
  const formatted = lpa % 1 === 0 ? lpa.toFixed(0) : parseFloat(lpa.toFixed(1)).toString();
  return `${formatted} LPA`;
}
