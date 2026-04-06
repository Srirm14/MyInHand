import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/client/admin";
import type { Json } from "@/lib/supabase/database.types";

/**
 * Auth: system (Razorpay).
 * Identity: `X-Razorpay-Signature` HMAC using `RAZORPAY_WEBHOOK_SECRET`.
 *
 * Webhook events keep billing status in sync (activation, cancellations, renewals).
 */

const webhookEventSchema = z.object({
  event: z.string(),
  payload: z.record(z.string(), z.any()).optional(),
});

function verifyWebhookSignature(args: {
  body: string;
  signature: string;
  secret: string;
}) {
  const expected = crypto
    .createHmac("sha256", args.secret)
    .update(args.body)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(args.signature)
  );
}

function extractSubscriptionId(payload: unknown): string | null {
  const p = payload as
    | {
        subscription?: {
          entity?: { id?: unknown; status?: unknown };
          id?: unknown;
          status?: unknown;
        };
        payment?: { entity?: { subscription_id?: unknown } };
      }
    | null
    | undefined;
  const subId =
    p?.subscription?.entity?.id ??
    p?.subscription?.id ??
    p?.payment?.entity?.subscription_id ??
    null;
  return typeof subId === "string" && subId.length > 0 ? subId : null;
}

function extractPaymentId(payload: unknown): string | null {
  const p = payload as
    | { payment?: { entity?: { id?: unknown } } }
    | null
    | undefined;
  const payId = p?.payment?.entity?.id ?? null;
  return typeof payId === "string" && payId.length > 0 ? payId : null;
}

export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET?.trim();
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Webhook is not configured." },
      { status: 500 }
    );
  }

  const signature = req.headers.get("x-razorpay-signature")?.trim();
  if (!signature) {
    return NextResponse.json(
      { ok: false, error: "Missing signature." },
      { status: 400 }
    );
  }

  const bodyText = await req.text();
  if (!verifyWebhookSignature({ body: bodyText, signature, secret })) {
    return NextResponse.json(
      { ok: false, error: "Invalid signature." },
      { status: 400 }
    );
  }

  let json: unknown;
  try {
    json = JSON.parse(bodyText);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON." },
      { status: 400 }
    );
  }

  const parsed = webhookEventSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid event payload." },
      { status: 400 }
    );
  }

  const event = parsed.data.event;
  const payload = (json as { payload?: unknown } | null)?.payload;
  const subscriptionId = extractSubscriptionId(payload);
  const paymentId = extractPaymentId(payload);

  if (!subscriptionId) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const admin = createSupabaseAdminClient();

  // Fetch user_id for this subscription (so we can flip entitlements).
  const { data: row } = await admin
    .from("billing_subscriptions")
    .select("user_id")
    .eq("razorpay_subscription_id", subscriptionId)
    .maybeSingle();

  // Update billing row status.
  const payloadObj = payload as
    | {
        subscription?: { entity?: { status?: unknown }; status?: unknown };
      }
    | null
    | undefined;
  const nextStatus =
    payloadObj?.subscription?.entity?.status ??
    payloadObj?.subscription?.status ??
    event;

  const metadata = json as Json;
  await admin
    .from("billing_subscriptions")
    .update({
      status: typeof nextStatus === "string" ? nextStatus : event,
      latest_payment_id: paymentId ?? undefined,
      metadata,
    })
    .eq("razorpay_subscription_id", subscriptionId);

  const userId = row?.user_id;
  if (!userId) return NextResponse.json({ ok: true });

  // Entitlement sync: activate → premium; cancel/halt → free.
  const lower = String(event).toLowerCase();
  if (
    lower.includes("subscription.activated") ||
    lower.includes("subscription.charged") ||
    lower.includes("payment.captured")
  ) {
    await admin
      .from("profiles")
      .update({ plan_tier: "premium", plan_updated_at: new Date().toISOString() })
      .eq("id", userId);
  }

  if (
    lower.includes("subscription.cancelled") ||
    lower.includes("subscription.halted") ||
    lower.includes("subscription.completed")
  ) {
    await admin
      .from("profiles")
      .update({ plan_tier: "free", plan_updated_at: new Date().toISOString() })
      .eq("id", userId);
  }

  return NextResponse.json({ ok: true });
}

