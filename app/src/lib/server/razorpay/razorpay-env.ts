import { z } from "zod";

export type RazorpayPlanCode = "pro_monthly" | "pro_yearly";

export function getRazorpayServerEnv() {
  const keyId =
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.trim() ||
    process.env.RAZORPAY_KEY_ID?.trim() ||
    "";
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim() || "";
  const planMonthly = process.env.RAZORPAY_PLAN_ID_MONTHLY?.trim() || "";
  const planYearly = process.env.RAZORPAY_PLAN_ID_YEARLY?.trim() || "";

  const missing: string[] = [];
  if (!keyId) missing.push("NEXT_PUBLIC_RAZORPAY_KEY_ID (or RAZORPAY_KEY_ID)");
  if (!keySecret) missing.push("RAZORPAY_KEY_SECRET");
  if (!planMonthly) missing.push("RAZORPAY_PLAN_ID_MONTHLY");
  if (!planYearly) missing.push("RAZORPAY_PLAN_ID_YEARLY");

  if (missing.length) {
    throw new Error(`Razorpay env is not configured. Missing: ${missing.join(", ")}.`);
  }

  // Keep validation lightweight; values are already required above.
  const webhookSecret = z.string().optional().parse(process.env.RAZORPAY_WEBHOOK_SECRET);

  return {
    keyId,
    keySecret,
    planMonthly,
    planYearly,
    webhookSecret,
  };
}

export function getRazorpayPlanId(plan: RazorpayPlanCode): string {
  const env = getRazorpayServerEnv();
  return plan === "pro_monthly"
    ? env.planMonthly
    : env.planYearly;
}

