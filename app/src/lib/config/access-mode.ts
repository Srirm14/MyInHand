/**
 * Access tier:
 * - Env `NEXT_PUBLIC_ACCESS_MODE=premium` → full tools (same on dev and prod).
 * - Env `NEXT_PUBLIC_ACCESS_MODE=default` or **unset** → free tier / paywall paths.
 *
 * Unset does **not** imply premium in development—so localhost matches production
 * gating unless you explicitly set `premium`.
 */
export type AccessMode = "default" | "premium";

const raw = process.env.NEXT_PUBLIC_ACCESS_MODE?.toLowerCase().trim();

/** Use in middleware / server — same rules as client `PREMIUM_UNLOCKED`. */
export function getPremiumUnlockedFromEnv(): boolean {
  if (raw === "premium") return true;
  return false;
}

export const ACCESS_MODE: AccessMode = getPremiumUnlockedFromEnv()
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
