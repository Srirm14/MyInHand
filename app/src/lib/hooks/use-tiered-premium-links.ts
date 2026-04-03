"use client";

import { useMemo } from "react";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { PREMIUM_UNLOCKED, type PaywallTool } from "@/lib/config/access-mode";

const TOOL_PATHS: Record<PaywallTool, string> = {
  offers: "/premium/offer-comparison",
  forecast: "/premium/wealth-forecast",
  emi: "/premium/emi-analyzer",
};

/**
 * Tiered destinations: anonymous → sign-in first; signed-in free → paywall;
 * signed-in premium → real premium routes.
 */
export function useTieredPremiumLinks() {
  const user = useAuthStore((s) => s.user);

  return useMemo(() => {
    const loggedIn = Boolean(user);
    const premium = loggedIn && PREMIUM_UNLOCKED;

    function toolHref(tool: PaywallTool): string {
      if (premium) return TOOL_PATHS[tool];
      const paywall = `/paywall?tool=${tool}`;
      if (loggedIn) return paywall;
      return `/login?from=${encodeURIComponent(paywall)}`;
    }

    function hubHref(): string {
      if (premium) return "/premium";
      if (loggedIn) return "/paywall";
      return `/login?from=${encodeURIComponent("/paywall")}`;
    }

    return { loggedIn, premium, toolHref, hubHref };
  }, [user]);
}
