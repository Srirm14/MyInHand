/**
 * Access tier is controlled at build/runtime via NEXT_PUBLIC_ACCESS_MODE.
 * - "premium" — full Premium hub and tools (no paywall gate on /premium/*).
 * - "default" or unset — free tier; /premium/* redirects to paywall; nav sends users to /paywall.
 */
export type AccessMode = "default" | "premium";

const raw = process.env.NEXT_PUBLIC_ACCESS_MODE?.toLowerCase().trim();

export const ACCESS_MODE: AccessMode =
  raw === "premium" ? "premium" : "default";

export const PREMIUM_UNLOCKED = ACCESS_MODE === "premium";

export type PaywallTool = "offers" | "forecast" | "emi";

export function premiumHubHref(): string {
  return PREMIUM_UNLOCKED ? "/premium" : "/paywall";
}

/** Deep link into paywall with ?tool= when locked; real route when unlocked. */
export function premiumToolHref(tool: PaywallTool): string {
  if (PREMIUM_UNLOCKED) {
    const paths: Record<PaywallTool, string> = {
      offers: "/premium/offer-comparison",
      forecast: "/premium/wealth-forecast",
      emi: "/premium/emi-analyzer",
    };
    return paths[tool];
  }
  return `/paywall?tool=${tool}`;
}
