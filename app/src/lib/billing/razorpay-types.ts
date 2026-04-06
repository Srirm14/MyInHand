export type BillingInterval = "monthly" | "yearly";
export type RazorpayPlanCode = "pro_monthly" | "pro_yearly";

export function toPlanCode(interval: BillingInterval): RazorpayPlanCode {
  return interval === "monthly" ? "pro_monthly" : "pro_yearly";
}

