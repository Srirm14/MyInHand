"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, CircleX, Loader2 } from "lucide-react";
import { SalaryPricingSection } from "@/components/features/pricing/salary-pricing-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { loadRazorpayCheckoutScript } from "@/lib/billing/load-razorpay";
import { toPlanCode, type BillingInterval } from "@/lib/billing/razorpay-types";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { hasPremiumProductAccess } from "@/lib/access/product-access";

async function safeReadJson<T>(
  res: Response
): Promise<{ ok: true; data: T } | { ok: false; message: string }> {
  const text = await res.text();
  if (!text) {
    return { ok: false, message: `Empty response (HTTP ${res.status}).` };
  }
  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, message: `Non-JSON response (HTTP ${res.status}).` };
  }
}

type FlowState =
  | { kind: "idle" }
  | { kind: "creating" }
  | { kind: "opening" }
  | { kind: "verifying" }
  | { kind: "success" }
  | { kind: "cancelled" }
  | { kind: "failed"; message: string };

export interface RazorpayUpgradeFlowProps {
  className?: string;
  embedded?: boolean;
}

export function RazorpayUpgradeFlow({
  className,
  embedded = false,
}: Readonly<RazorpayUpgradeFlowProps>) {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const refreshProfileFromAuthUser = useAuthStore(
    (s) => s.refreshProfileFromAuthUser
  );

  const alreadyPremium = hasPremiumProductAccess(user?.planTier);
  const [state, setState] = useState<FlowState>({ kind: "idle" });
  const canUpgrade = Boolean(user) && !alreadyPremium;

  const premiumHref = useMemo(() => "/profile", []);

  const verify = useCallback(
    async (payload: {
      razorpay_payment_id: string;
      razorpay_subscription_id: string;
      razorpay_signature: string;
    }) => {
      setState({ kind: "verifying" });
      const res = await fetch("/api/billing/razorpay/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as
        | { ok: true }
        | { ok: false; error: string };
      if (!res.ok || !data.ok) {
        setState({
          kind: "failed",
          message: "We couldn’t verify that payment. Please try again.",
        });
        return;
      }
      await refreshProfileFromAuthUser();
      setState({ kind: "success" });
      router.refresh();
    },
    [refreshProfileFromAuthUser, router]
  );

  const startCheckout = useCallback(
    async (billing: BillingInterval) => {
      if (!user) return;
      setState({ kind: "creating" });

      const okScript = await loadRazorpayCheckoutScript();
      if (!okScript) {
        setState({
          kind: "failed",
          message:
            "Razorpay checkout failed to load. Check your network and try again.",
        });
        return;
      }

      const plan = toPlanCode(billing);
      const res = await fetch("/api/billing/razorpay/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const parsed = await safeReadJson<
        | {
            ok: true;
            checkout: { keyId: string; subscriptionId: string };
          }
        | { ok: false; error: string }
      >(res);
      const data = parsed.ok ? parsed.data : null;
      if (!res.ok || !parsed.ok || !data || !data.ok) {
        setState({
          kind: "failed",
          message:
            data && "error" in data && typeof data.error === "string"
              ? data.error
              : "We couldn’t start checkout. Please try again in a minute.",
        });
        return;
      }

      setState({ kind: "opening" });

      const RazorpayCtor = (globalThis as unknown as { Razorpay?: typeof window.Razorpay })
        .Razorpay;
      if (!RazorpayCtor) {
        setState({
          kind: "failed",
          message:
            "Checkout didn’t initialize. Please refresh and try again.",
        });
        return;
      }

      const rzp = new RazorpayCtor({
        key: data.checkout.keyId,
        subscription_id: data.checkout.subscriptionId,
        name: "InHand Premium",
        description:
          billing === "yearly"
            ? "Yearly Premium subscription (individual)"
            : "Monthly Premium subscription (individual)",
        prefill: {
          email: user.email,
          name: user.displayName,
        },
        theme: { color: "#0f766e" },
        modal: {
          ondismiss: () => {
            setState({ kind: "cancelled" });
          },
        },
        handler: (response: unknown) => {
          const r = response as {
            razorpay_payment_id?: string;
            razorpay_subscription_id?: string;
            razorpay_signature?: string;
          };
          if (
            !r.razorpay_payment_id ||
            !r.razorpay_subscription_id ||
            !r.razorpay_signature
          ) {
            setState({
              kind: "failed",
              message: "Payment completed but response was incomplete.",
            });
            return;
          }
          verify({
            razorpay_payment_id: r.razorpay_payment_id,
            razorpay_subscription_id: r.razorpay_subscription_id,
            razorpay_signature: r.razorpay_signature,
          });
        },
      });

      rzp.open();
    },
    [user, verify]
  );

  if (alreadyPremium) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-teal-200/60 bg-teal-50/40 p-5 text-teal-950",
          embedded && "rounded-xl",
          className
        )}
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 text-teal-700" aria-hidden />
          <div>
            <p className="font-semibold">You’re already Premium.</p>
            <p className="mt-1 text-sm text-teal-900/80">
              Your Pro features are unlocked across breakdowns, offer comparison,
              forecasts, and planners.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <SalaryPricingSection
        premiumHref={premiumHref}
        freeHref="/salary"
        embedded={embedded}
        onUpgrade={canUpgrade ? startCheckout : undefined}
        upgradeBusy={
          state.kind === "creating" ||
          state.kind === "opening" ||
          state.kind === "verifying"
        }
      />

      <div className="mt-6">
        {state.kind === "verifying" ? (
          <div className="rounded-2xl border border-navy-200/60 bg-white p-4 text-sm text-navy-700 shadow-sm">
            <div className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" aria-hidden />
              <span className="font-medium">Verifying payment…</span>
            </div>
            <p className="mt-1 text-xs text-navy-500">
              Don’t refresh—this usually takes a couple seconds.
            </p>
          </div>
        ) : null}

        {state.kind === "success" ? (
          <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-4 text-sm text-emerald-950 shadow-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 size-5 text-emerald-700" aria-hidden />
              <div className="min-w-0">
                <p className="font-semibold">Premium unlocked.</p>
                <p className="mt-1 text-xs text-emerald-900/80">
                  You can now access advanced salary insights and planning tools.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    className="rounded-full bg-emerald-700 hover:bg-emerald-800"
                    onClick={() => router.push("/salary/detailed")}
                  >
                    Go to detailed breakdown
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-emerald-200 bg-white"
                    onClick={() => router.push("/salary/premium/offers")}
                  >
                    Compare offers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {state.kind === "cancelled" ? (
          <div className="rounded-2xl border border-navy-200/60 bg-navy-50/40 p-4 text-sm text-navy-800 shadow-sm">
            <p className="font-semibold">Checkout closed.</p>
            <p className="mt-1 text-xs text-navy-600">
              No payment was completed. You can retry anytime.
            </p>
          </div>
        ) : null}

        {state.kind === "failed" ? (
          <div className="rounded-2xl border border-danger-200/60 bg-danger-50/40 p-4 text-sm text-danger-950 shadow-sm">
            <div className="flex items-start gap-2.5">
              <CircleX className="mt-0.5 size-5 text-danger-700" aria-hidden />
              <div className="min-w-0">
                <p className="font-semibold">Payment didn’t complete.</p>
                <p className="mt-1 text-xs text-danger-900/80">
                  {state.message}
                </p>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    className="rounded-full border-danger-200 bg-white"
                    onClick={() => setState({ kind: "idle" })}
                  >
                    Try again
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

