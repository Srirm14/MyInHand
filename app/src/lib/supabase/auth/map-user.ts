import type { User } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import type { PlanTier, UserProfile } from "@/lib/types/user.types";

type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];

export function mapProfileToUser(
  authUser: User,
  row: ProfileRow | null
): UserProfile {
  const planTier: PlanTier =
    row?.plan_tier === "premium" ? "premium" : "free";
  const metaName = authUser.user_metadata?.display_name;
  const emailLocal = authUser.email?.split("@")[0];
  return {
    id: authUser.id,
    email: authUser.email ?? "",
    displayName:
      row?.display_name ??
      (typeof metaName === "string" ? metaName : undefined) ??
      emailLocal ??
      "User",
    company: row?.company ?? "",
    role: row?.role ?? undefined,
    planTier,
    profileUpdatedAt: row?.updated_at,
  };
}
