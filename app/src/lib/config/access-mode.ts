/**
 * Access tier:
 * - Env `NEXT_PUBLIC_ACCESS_MODE=premium` → full tools.
 * - Env `NEXT_PUBLIC_ACCESS_MODE=default` → paywall (explicit).
 * - Env unset: **development** defaults to premium (easy local testing);
 *   **production** defaults to default (safe for deploy).
 */
export type AccessMode = "default" | "premium";

const raw = process.env.NEXT_PUBLIC_ACCESS_MODE?.toLowerCase().trim();
const isDev = process.env.NODE_ENV === "development";

export const ACCESS_MODE: AccessMode =
  raw === "premium"
    ? "premium"
    : raw === "default"
      ? "default"
      : isDev
        ? "premium"
        : "default";

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
