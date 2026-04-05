/**
 * Canonical premium planner URLs under the salary workspace.
 * Legacy `/lifestyle`, `/salary/breakdown`, and `/premium/*` redirect here (see next.config).
 */
export const SALARY_PREMIUM_BREAKDOWN = "/salary/premium/breakdown";
export const SALARY_PREMIUM_LIFESTYLE = "/salary/premium/lifestyle";
export const SALARY_PREMIUM_WEALTH_FORECAST = "/salary/premium/wealth-forecast";
export const SALARY_PREMIUM_EMI_ANALYZER = "/salary/premium/emi-analyzer";
export const SALARY_PREMIUM_OFFER_COMPARISON = "/salary/premium/offer-comparison";

/** Default “hub” when linking to offer comparison only. */
export const SALARY_PREMIUM_HUB = SALARY_PREMIUM_OFFER_COMPARISON;

export function salaryPremiumOfferComparisonHref(sessionId: string): string {
  return `${SALARY_PREMIUM_OFFER_COMPARISON}?session=${encodeURIComponent(sessionId)}`;
}

export function salaryPremiumBreakdownHref(sessionId?: string | null): string {
  if (sessionId != null && sessionId.length > 0) {
    return `${SALARY_PREMIUM_BREAKDOWN}?session=${encodeURIComponent(sessionId)}`;
  }
  return SALARY_PREMIUM_BREAKDOWN;
}

export function isSalaryPremiumBreakdownPath(pathname: string): boolean {
  return (
    pathname === SALARY_PREMIUM_BREAKDOWN ||
    pathname.startsWith(`${SALARY_PREMIUM_BREAKDOWN}/`)
  );
}

export function isSalaryPremiumOfferComparisonPath(pathname: string): boolean {
  return (
    pathname === SALARY_PREMIUM_OFFER_COMPARISON ||
    pathname.startsWith(`${SALARY_PREMIUM_OFFER_COMPARISON}/`)
  );
}
