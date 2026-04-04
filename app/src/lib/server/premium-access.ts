import { cache } from "react";
import { redirect } from "next/navigation";
import { getPremiumUnlockedFromEnv } from "@/lib/config/access-mode";
import { createServerSupabaseClient } from "@/lib/supabase/client/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Server-side premium entitlement (RSC, layouts, paywall).
 * Precedence matches `hasPremiumProductAccess`: env override, then `profiles.plan_tier`.
 */
export const userHasPremiumEntitlement = cache(async (): Promise<boolean> => {
  if (getPremiumUnlockedFromEnv()) return true;
  if (!isSupabaseConfigured()) return false;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data, error } = await supabase
    .from("profiles")
    .select("plan_tier")
    .eq("id", user.id)
    .maybeSingle();
  if (error) return false;
  const tier = (data as { plan_tier: string } | null)?.plan_tier;
  return tier === "premium";
});

/** @deprecated Use `userHasPremiumEntitlement`. */
export async function userHasPremiumServer(): Promise<boolean> {
  return userHasPremiumEntitlement();
}

/** Salary deep routes: require premium (env or DB). */
export async function redirectToSalaryUnlessPremiumAccess(): Promise<void> {
  const ok = await userHasPremiumEntitlement();
  if (!ok) redirect("/salary");
}
