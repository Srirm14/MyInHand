"use client";

import { useMemo } from "react";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { hasPremiumProductAccess } from "@/lib/access/product-access";
import type { PaywallTool } from "@/lib/config/access-mode";
import {
  SALARY_PREMIUM_EMI_ANALYZER,
  SALARY_PREMIUM_LIFESTYLE,
  SALARY_PREMIUM_OFFER_COMPARISON,
  SALARY_PREMIUM_WEALTH_FORECAST,
} from "@/lib/config/salary-premium-paths";

const TOOL_PATHS: Record<PaywallTool, string> = {
  offers: SALARY_PREMIUM_OFFER_COMPARISON,
  forecast: SALARY_PREMIUM_WEALTH_FORECAST,
  emi: SALARY_PREMIUM_EMI_ANALYZER,
  monthly: SALARY_PREMIUM_LIFESTYLE,
};

/**
 * Tiered destinations: anonymous → sign-in first; signed-in free → paywall;
 * signed-in premium → real premium routes.
 */
export function useTieredPremiumLinks() {
  const user = useAuthStore((s) => s.user);

  return useMemo(() => {
    const loggedIn = Boolean(user);
    const premium = hasPremiumProductAccess(user?.planTier);

    function toolHref(tool: PaywallTool): string {
      if (premium) return TOOL_PATHS[tool];
      const paywall = `/paywall?tool=${tool}`;
      if (loggedIn) return paywall;
      return `/login?from=${encodeURIComponent(paywall)}`;
    }

    return { loggedIn, premium, toolHref };
  }, [user]);
}
