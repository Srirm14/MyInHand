import { hasPremiumProductAccess } from "@/lib/access/product-access";
import type { UserProfile } from "@/lib/types/user.types";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Cloud persistence for salary / offer sessions: signed-in user with resolved premium
 * access (`hasPremiumProductAccess`) and valid Supabase client config.
 */
export function shouldPersistSessions(user: UserProfile | null): boolean {
  if (!user || !isSupabaseConfigured()) return false;
  return hasPremiumProductAccess(user.planTier);
}
