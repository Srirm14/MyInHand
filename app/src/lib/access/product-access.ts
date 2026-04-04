import { getPremiumUnlockedFromEnv } from "@/lib/config/access-mode";
import type { PlanTier } from "@/lib/types/user.types";

/**
 * Single client-side resolution for premium **product** access (tools, cloud saves, nav).
 *
 * Precedence:
 * 1. `NEXT_PUBLIC_ACCESS_MODE=premium` → everyone gets premium UX (dev/staging override).
 * 2. Else → signed-in user’s `profiles.plan_tier === 'premium'` (via `UserProfile.planTier`).
 * 3. Else → free.
 *
 * Use this (or `usePremiumProductAccess`) for UI and `shouldPersistSessions`; do not gate
 * features on `PREMIUM_UNLOCKED` alone—that flag is **env-only** and ignores the database.
 */
export function hasPremiumProductAccess(
  planTier: PlanTier | undefined | null
): boolean {
  if (getPremiumUnlockedFromEnv()) return true;
  return planTier === "premium";
}
