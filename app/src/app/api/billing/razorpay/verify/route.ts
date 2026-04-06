import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/server/api-auth";
import { createRazorpayClient } from "@/lib/server/razorpay/razorpay-client";
import { getRazorpayServerEnv } from "@/lib/server/razorpay/razorpay-env";
import { createSupabaseAdminClient } from "@/lib/supabase/client/admin";

/**
 * Auth: signed-in user (cookie-based via server Supabase client).
 * Identity: `supabase.auth.getUser()` from request cookies.
 *
 * Verifies Razorpay checkout signature and upgrades the user to Premium.
 */

const bodySchema = z.object({
  razorpay_payment_id: z.string().min(1),
  razorpay_subscription_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

function verifySubscriptionSignature(args: {
  paymentId: string;
  subscriptionId: string;
  signature: string;
  secret: string;
}) {
  const payload = `${args.paymentId}|${args.subscriptionId}`;
  const expected = crypto
    .createHmac("sha256", args.secret)
    .update(payload)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(args.signature)
  );
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser();
    if (!auth.ok) return auth.response;

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body." },
        { status: 400 }
      );
    }
    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    const env = getRazorpayServerEnv();
    const ok = verifySubscriptionSignature({
      paymentId: parsed.data.razorpay_payment_id,
      subscriptionId: parsed.data.razorpay_subscription_id,
      signature: parsed.data.razorpay_signature,
      secret: env.keySecret,
    });
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "Payment verification failed." },
        { status: 400 }
      );
    }

    // Ensure this subscription belongs to this user (defense-in-depth).
    const admin = createSupabaseAdminClient();
    const { data: billingRow, error: bErr } = await admin
      .from("billing_subscriptions")
      .select("user_id,plan_code,status")
      .eq("razorpay_subscription_id", parsed.data.razorpay_subscription_id)
      .maybeSingle();
    if (bErr || !billingRow || billingRow.user_id !== auth.user.id) {
      return NextResponse.json(
        { ok: false, error: "Subscription does not match this account." },
        { status: 403 }
      );
    }

    // Fetch subscription status from Razorpay for extra safety.
    const rzp = createRazorpayClient();
    const subscription = await rzp.subscriptions.fetch(
      parsed.data.razorpay_subscription_id
    );

  // Update billing record (best-effort).
  await admin
    .from("billing_subscriptions")
    .update({
      status: subscription.status ?? "unknown",
      latest_payment_id: parsed.data.razorpay_payment_id,
      current_start_at:
        typeof subscription.current_start === "number"
          ? new Date(subscription.current_start * 1000).toISOString()
          : null,
      current_end_at:
        typeof subscription.current_end === "number"
          ? new Date(subscription.current_end * 1000).toISOString()
          : null,
      metadata: {
        notes: subscription.notes ?? null,
        charge_at: subscription.charge_at ?? null,
        short_url: subscription.short_url ?? null,
      },
    })
    .eq("razorpay_subscription_id", parsed.data.razorpay_subscription_id)
    .eq("user_id", auth.user.id);

  // Grant entitlement only after successful verification.
  const { error: profileErr } = await admin
    .from("profiles")
    .update({
      plan_tier: "premium",
      plan_updated_at: new Date().toISOString(),
    })
    .eq("id", auth.user.id);

    if (profileErr) {
      return NextResponse.json(
        { ok: false, error: "Payment verified, but upgrade failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      planTier: "premium",
      subscriptionStatus: subscription.status ?? null,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Verification failed.";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

