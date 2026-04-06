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
 * Nav links to premium tools (navbar, marketing, footer).
 *
 * | Session   | Plan (product) | `toolHref` result                                      |
 * |-----------|----------------|--------------------------------------------------------|
 * | Logged out| any            | `/login?from=/paywall?tool=<tool>`                     |
 * | Logged in | free           | `/paywall?tool=<tool>`                                 |
 * | Logged in | premium        | real route e.g. `/salary/premium/offer-comparison`     |
 *
 * Env `NEXT_PUBLIC_ACCESS_MODE=premium` still requires **logged in** before deep-linking to real routes.
 */
export function useTieredPremiumLinks() {
  const user = useAuthStore((s) => s.user);

  return useMemo(() => {
    const loggedIn = Boolean(user);
    const premium = hasPremiumProductAccess(user?.planTier);

    function toolHref(tool: PaywallTool): string {
      // Real tool URLs only when signed in; env premium must not skip login for anonymous users.
      if (premium && loggedIn) return TOOL_PATHS[tool];
      const paywall = `/paywall?tool=${tool}`;
      if (loggedIn) return paywall;
      return `/login?from=${encodeURIComponent(paywall)}`;
    }

    return { loggedIn, premium, toolHref };
  }, [user]);
}
