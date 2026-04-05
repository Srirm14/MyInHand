/**
 * Env-only override (`NEXT_PUBLIC_ACCESS_MODE=premium`).
 *
 * For **feature gating**, use `hasPremiumProductAccess` / `userHasPremiumEntitlement`
 * so database `plan_tier` is respected when this is unset.
 */
import {
  SALARY_PREMIUM_EMI_ANALYZER,
  SALARY_PREMIUM_LIFESTYLE,
  SALARY_PREMIUM_OFFER_COMPARISON,
  SALARY_PREMIUM_WEALTH_FORECAST,
} from "@/lib/config/salary-premium-paths";

export type AccessMode = "default" | "premium";

const raw = process.env.NEXT_PUBLIC_ACCESS_MODE?.toLowerCase().trim();

/** True when env forces premium UX for everyone (dev/staging). */
export function getPremiumUnlockedFromEnv(): boolean {
  if (raw === "premium") return true;
  return false;
}

export const ACCESS_MODE: AccessMode = getPremiumUnlockedFromEnv()
  ? "premium"
  : "default";

/**
 * **Env-only**: true when `NEXT_PUBLIC_ACCESS_MODE=premium`.
 * Do not use alone for product access — prefer `hasPremiumProductAccess` (client) or
 * `userHasPremiumEntitlement` (server).
 */
export const PREMIUM_UNLOCKED = ACCESS_MODE === "premium";

export type PaywallTool = "offers" | "forecast" | "emi" | "monthly";

export function premiumHubHref(): string {
  return PREMIUM_UNLOCKED ? SALARY_PREMIUM_OFFER_COMPARISON : "/paywall";
}

/** Deep link into paywall with ?tool= when locked; real route when unlocked. */
export function premiumToolHref(tool: PaywallTool): string {
  if (PREMIUM_UNLOCKED) {
    const paths: Record<PaywallTool, string> = {
      offers: SALARY_PREMIUM_OFFER_COMPARISON,
      forecast: SALARY_PREMIUM_WEALTH_FORECAST,
      emi: SALARY_PREMIUM_EMI_ANALYZER,
      monthly: SALARY_PREMIUM_LIFESTYLE,
    };
    return paths[tool];
  }
  return `/paywall?tool=${tool}`;
}
