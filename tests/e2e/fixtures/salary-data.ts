/**
 * Shared test data for InHand E2E tests.
 * All CTC values in INR.
 */

export const SALARY = {
  LOW: 600_000,       // 6 LPA
  MEDIUM: 1_200_000,  // 12 LPA
  HIGH: 2_500_000,    // 25 LPA
  VERY_HIGH: 5_000_000, // 50 LPA
  BELOW_MIN: 90_000,  // Below ₹1L minimum
  EXACT_MIN: 1_00_000, // Exactly ₹1L
} as const;

export const CITY_TIERS = {
  METRO: "tier1",
  URBAN: "tier2",
  SEMI_URBAN: "tier3",
} as const;

export const TAX_REGIMES = {
  OLD: "old",
  NEW: "new",
} as const;

export const OFFERS = [
  {
    companyName: "Company Alpha",
    annualCTC: 2_000_000,
    tier: "tier1" as const,
    regime: "new" as const,
  },
  {
    companyName: "Company Beta",
    annualCTC: 2_500_000,
    tier: "tier2" as const,
    regime: "new" as const,
  },
  {
    companyName: "Company Gamma",
    annualCTC: 1_800_000,
    tier: "tier1" as const,
    regime: "old" as const,
  },
];

export const VALID_EMAIL = "test@example.com";
export const VALID_PASSWORD = "TestPassword123!";

/** Routes */
export const ROUTES = {
  LANDING: "/",
  SALARY: "/salary",
  DETAILED: "/salary/detailed",
  BREAKDOWN: "/salary/premium/breakdown",
  LIFESTYLE: "/salary/premium/lifestyle",
  OFFER_COMPARISON: "/salary/premium/offer-comparison",
  WEALTH_FORECAST: "/salary/premium/wealth-forecast",
  EMI_ANALYZER: "/salary/premium/emi-analyzer",
  HISTORY: "/salary/history",
  PAYWALL: "/paywall",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PROFILE: "/profile",
} as const;
