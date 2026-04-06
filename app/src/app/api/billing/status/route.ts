import { NextResponse } from "next/server";
import { requireUser } from "@/lib/server/api-auth";
import { createServerSupabaseClient } from "@/lib/supabase/client/server";
import { userHasPremiumEntitlement } from "@/lib/server/premium-access";

/**
 * Auth: signed-in user (cookie-based via server Supabase client).
 * Identity: `supabase.auth.getUser()` from request cookies.
 *
 * Returns current entitlement + latest known billing row.
 */

export async function GET() {
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

  const hasPremium = await userHasPremiumEntitlement();
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("billing_subscriptions")
    .select("plan_code,status,latest_payment_id,current_start_at,current_end_at,updated_at")
    .eq("user_id", auth.user.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { ok: true, entitlement: { hasPremium }, billing: null },
      { status: 200 }
    );
  }

  return NextResponse.json({
    ok: true,
    entitlement: { hasPremium },
    billing: data ?? null,
  });
}

