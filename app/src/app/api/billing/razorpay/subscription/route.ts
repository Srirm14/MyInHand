import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/server/api-auth";
import { createRazorpayClient } from "@/lib/server/razorpay/razorpay-client";
import {
  getRazorpayPlanId,
  getRazorpayServerEnv,
  type RazorpayPlanCode,
} from "@/lib/server/razorpay/razorpay-env";
import { createSupabaseAdminClient } from "@/lib/supabase/client/admin";
import { getPremiumUnlockedFromEnv } from "@/lib/config/access-mode";

function errorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    // Razorpay SDK commonly returns structured errors.
    const anyE = e as {
      error?: { description?: unknown; code?: unknown; reason?: unknown };
      description?: unknown;
      message?: unknown;
    };
    const desc =
      anyE.error?.description ??
      anyE.description ??
      anyE.message ??
      undefined;
    if (typeof desc === "string" && desc.trim()) return desc.trim();
    try {
      return JSON.stringify(e);
    } catch {
      return "Unknown error.";
    }
  }
  return "Unknown error.";
}

/**
 * Auth: signed-in user (cookie-based via server Supabase client).
 * Identity: `supabase.auth.getUser()` from request cookies.
 *
 * Creates a Razorpay subscription (monthly/yearly) and records it server-side.
 */

const bodySchema = z.object({
  plan: z.enum(["pro_monthly", "pro_yearly"]),
});

function totalCountForPlan(plan: RazorpayPlanCode): number {
  // Razorpay subscriptions require `total_count`. Keep it high so it's effectively ongoing.
  return plan === "pro_monthly" ? 120 : 10;
}

async function fetchPlanOrThrow(rzp: ReturnType<typeof createRazorpayClient>, planId: string) {
  // `razorpay` SDK uses callbacks; wrap for consistent async/await.
  return await new Promise<unknown>((resolve, reject) => {
    rzp.plans.fetch(planId, (err: unknown, plan: unknown) => {
      if (err) reject(new Error(errorMessage(err)));
      else resolve(plan);
    });
  });
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

    const userId = auth.user.id;
    const plan = parsed.data.plan as RazorpayPlanCode;
    const rzp = createRazorpayClient();
    const planId = getRazorpayPlanId(plan);

    // Avoid creating duplicate subscriptions for users who already have entitlement.
    // (Env unlock bypasses billing entirely.)
    if (!getPremiumUnlockedFromEnv()) {
      const admin = createSupabaseAdminClient();
      const { data: prof } = await admin
        .from("profiles")
        .select("plan_tier")
        .eq("id", userId)
        .maybeSingle();
      if (prof?.plan_tier === "premium") {
        return NextResponse.json(
          { ok: false, error: "You’re already Premium." },
          { status: 409 }
        );
      }
    }

    // Preflight: verify the plan exists for these API keys.
    // This turns a vague subscription-create failure into an actionable message.
    try {
      await fetchPlanOrThrow(rzp, planId);
    } catch {
      const envVar =
        plan === "pro_monthly"
          ? "RAZORPAY_PLAN_ID_MONTHLY"
          : "RAZORPAY_PLAN_ID_YEARLY";
      return NextResponse.json(
        {
          ok: false,
          error:
            `Razorpay plan not found (${plan}). ` +
            `Check ${envVar}=${planId} and ensure the plan is created in the SAME mode (Test vs Live) as your Razorpay keys.`,
        },
        { status: 500 }
      );
    }

    const subscription = await new Promise<{
      id: string;
      status?: string;
      created_at?: number;
      short_url?: string | null;
    }>((resolve, reject) => {
      rzp.subscriptions.create(
        {
          plan_id: planId,
          total_count: totalCountForPlan(plan),
          customer_notify: 1,
          quantity: 1,
          notes: {
            app: "inhand",
            user_id: userId,
            plan,
          },
        },
        (err: unknown, sub: unknown) => {
          if (err) reject(new Error(errorMessage(err)));
          else
            resolve(
              sub as {
                id: string;
                status?: string;
                created_at?: number;
                short_url?: string | null;
              }
            );
        }
      );
    });

    // Persist a server record (service role only).
    const admin = createSupabaseAdminClient();
    const { error } = await admin.from("billing_subscriptions").insert({
      user_id: userId,
      provider: "razorpay",
      plan_code: plan,
      razorpay_subscription_id: subscription.id,
      status: subscription.status ?? "created",
      current_start_at: null,
      current_end_at: null,
      metadata: {
        created_at: subscription.created_at,
        short_url: subscription.short_url ?? null,
      },
    });
    if (error) {
      return NextResponse.json(
        {
          ok: false,
          error:
            `Failed to record subscription. ${error.message}` +
            (error.details ? ` (${error.details})` : ""),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      checkout: {
        keyId: getRazorpayServerEnv().keyId,
        subscriptionId: subscription.id,
      },
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: errorMessage(e) },
      { status: 500 }
    );
  }
}

