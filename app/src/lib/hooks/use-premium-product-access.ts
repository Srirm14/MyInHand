"use client";

import { hasPremiumProductAccess } from "@/lib/access/product-access";
import { useAuthStore } from "@/lib/stores/use-auth-store";

/** Same rules as `hasPremiumProductAccess`, wired to the auth store (client). */
export function usePremiumProductAccess(): boolean {
  const planTier = useAuthStore((s) => s.user?.planTier);
  return hasPremiumProductAccess(planTier);
}
