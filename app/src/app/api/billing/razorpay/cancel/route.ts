import { NextResponse } from "next/server";
import { requireUser } from "@/lib/server/api-auth";
import { createRazorpayClient } from "@/lib/server/razorpay/razorpay-client";
import { createServerSupabaseClient } from "@/lib/supabase/client/server";
import { createSupabaseAdminClient } from "@/lib/supabase/client/admin";
import type { Json } from "@/lib/supabase/database.types";

/**
 * Auth: signed-in user (cookie-based via server Supabase client).
 * Identity: `supabase.auth.getUser()` from request cookies.
 *
 * Cancels the current user's subscription (best-effort: at period end where supported).
 */

function errorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    const anyE = e as { error?: { description?: unknown }; description?: unknown; message?: unknown };
    const desc = anyE.error?.description ?? anyE.description ?? anyE.message ?? undefined;
    if (typeof desc === "string" && desc.trim()) return desc.trim();
    try {
      return JSON.stringify(e);
    } catch {
      return "Unknown error.";
    }
  }
  return "Unknown error.";
}

async function cancelSubscription(rzp: ReturnType<typeof createRazorpayClient>, subId: string) {
  return await new Promise<unknown>((resolve, reject) => {
    // Razorpay SDK typings differ; support both signatures:
    // cancel(id, cancelAtCycleEndBool, cb) OR cancel(id, cb)
    try {
      (rzp.subscriptions.cancel as unknown as (
        id: string,
        cancelAtCycleEnd: boolean,
        cb: (err: unknown, sub: unknown) => void
      ) => void)(
        subId,
        true,
        (err: unknown, sub: unknown) => {
          if (err) reject(err);
          else resolve(sub);
        }
      );
    } catch {
      (rzp.subscriptions.cancel as unknown as (
        id: string,
        cb: (err: unknown, sub: unknown) => void
      ) => void)(subId, (err: unknown, sub: unknown) => {
        if (err) reject(err);
        else resolve(sub);
      });
    }
  });
}

export async function POST() {
  try {
    const auth = await requireUser();
    if (!auth.ok) return auth.response;

    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("billing_subscriptions")
      .select("razorpay_subscription_id")
      .eq("user_id", auth.user.id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data?.razorpay_subscription_id) {
      return NextResponse.json(
        { ok: false, error: "No subscription found for this account." },
        { status: 404 }
      );
    }

    const rzp = createRazorpayClient();
    const sub = await cancelSubscription(rzp, data.razorpay_subscription_id);

    // Best-effort: update billing row status; entitlement will be synced via webhook.
    const admin = createSupabaseAdminClient();
    await admin
      .from("billing_subscriptions")
      .update({
        status: "cancel_requested",
        metadata: { cancel_response: sub } as unknown as Json,
      })
      .eq("razorpay_subscription_id", data.razorpay_subscription_id)
      .eq("user_id", auth.user.id);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: errorMessage(e) },
      { status: 500 }
    );
  }
}

