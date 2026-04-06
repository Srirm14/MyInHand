"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Loader2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { ShimmerBlock } from "@/components/shared/loading-skeletons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { hasPremiumProductAccess } from "@/lib/access/product-access";
import { cn } from "@/lib/utils";

type BillingStatusResponse =
  | {
      ok: true;
      entitlement: { hasPremium: boolean };
      billing:
        | null
        | {
            plan_code: string;
            status: string;
            latest_payment_id: string | null;
            current_start_at: string | null;
            current_end_at: string | null;
            updated_at: string;
          };
    }
  | { ok: false; error: string };

function planLabel(code: string | null | undefined): string {
  if (!code) return "Premium";
  if (code === "pro_monthly") return "Premium · Monthly";
  if (code === "pro_yearly") return "Premium · Yearly";
  return "Premium";
}

function fmtDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "2-digit" });
}

function statusUi(status: string | null | undefined): {
  label: string;
  tone: "neutral" | "good" | "warn";
} {
  const s = (status ?? "").toLowerCase();
  if (!s) return { label: "—", tone: "neutral" };
  const good = new Set(["active", "authenticated"]);
  const warn = new Set(["cancel_requested"]);
  if (good.has(s)) {
    return {
      label: s === "authenticated" ? "Mandate authorized" : "Active",
      tone: "good",
    };
  }
  if (warn.has(s)) return { label: "Cancellation scheduled", tone: "warn" };
  if (s.includes("cancel")) return { label: "Cancelled", tone: "neutral" };
  if (s.includes("halt")) return { label: "Payment halted", tone: "warn" };
  return { label: status ?? "—", tone: "neutral" };
}

export default function BillingManagePage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);

  const isPremium = hasPremiumProductAccess(user?.planTier);
  const [busy, setBusy] = useState<"idle" | "loading" | "cancelling">("loading");
  const [data, setData] = useState<BillingStatusResponse | null>(null);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canCancel = useMemo(() => {
    if (!data || !("ok" in data) || !data.ok) return false;
    const s = data.billing?.status?.toLowerCase?.() ?? "";
    return Boolean(isPremium) && Boolean(data.billing) && !s.includes("cancel");
  }, [data, isPremium]);

  async function refresh() {
    setError(null);
    setBusy("loading");
    try {
      const res = await fetch("/api/billing/status", { method: "GET" });
      const json = (await res.json()) as BillingStatusResponse;
      setData(json);
      if (!res.ok || !json.ok) {
        setError("Couldn’t load billing status.");
      }
    } catch {
      setError("Couldn’t load billing status.");
    } finally {
      setBusy("idle");
    }
  }

  useEffect(() => {
    if (!authReady) return;
    if (!user) {
      router.replace("/login?from=/profile/billing");
      return;
    }
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReady, user]);

  async function cancelSubscription() {
    setError(null);
    setBusy("cancelling");
    try {
      const res = await fetch("/api/billing/razorpay/cancel", { method: "POST" });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Couldn’t cancel subscription. Try again.");
        return;
      }
      setCancelOpen(false);
      await refresh();
      router.refresh();
    } catch {
      setError("Couldn’t cancel subscription. Try again.");
    } finally {
      setBusy("idle");
    }
  }

  const billing = data && "ok" in data && data.ok ? data.billing : null;
  const periodEnd = fmtDate(billing?.current_end_at);
  const status = statusUi(billing?.status);
  const scheduledCancel = (billing?.status ?? "").toLowerCase() === "cancel_requested";

  return (
    <PageShell narrow className="py-8 md:py-10">
      <div className="mb-4">
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
        >
          <ChevronLeft className="size-4" aria-hidden />
          Back to profile
        </Link>
      </div>
      <SectionHeader
        title="Plan & billing"
        subtitle="Manage your Premium subscription. Your salary calculators stay the same—billing only controls access to advanced tools."
      />

      <div className="mt-8 rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-label text-navy-400 mb-1">Current plan</p>
            <p className="text-sm font-semibold text-navy-900">
              {isPremium ? planLabel(billing?.plan_code) : "Free"}
            </p>
            {isPremium ? (
              <p className="mt-1 text-xs text-navy-500">
                {periodEnd
                  ? scheduledCancel
                    ? `Premium active until ${periodEnd}.`
                    : `Renews on ${periodEnd}.`
                  : "Premium is active."}
              </p>
            ) : (
              <p className="mt-1 text-xs text-navy-500">
                Upgrade from the Premium plans modal anytime.
              </p>
            )}
          </div>

          <Button
            variant="outline"
            className="rounded-full border-navy-200"
            onClick={() => refresh()}
            disabled={busy !== "idle"}
          >
            {busy === "loading" ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                Refreshing…
              </>
            ) : (
              "Refresh"
            )}
          </Button>
        </div>

        {error ? (
          <p className="text-sm text-danger-600 bg-danger-50 rounded-lg px-3 py-2">
            {error}
          </p>
        ) : null}

        <div className="rounded-xl border border-navy-100 bg-navy-50/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
            Billing status
          </p>
          {busy === "loading" ? (
            <div className="mt-2 space-y-2">
              <ShimmerBlock className="h-4 w-28 rounded" />
              <ShimmerBlock className="h-3 w-full max-w-md rounded" />
            </div>
          ) : (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                  status.tone === "good" &&
                    "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/70",
                  status.tone === "warn" &&
                    "bg-amber-100 text-amber-900 ring-1 ring-amber-200/70",
                  status.tone === "neutral" &&
                    "bg-navy-100 text-navy-800 ring-1 ring-navy-200/70"
                )}
              >
                {status.label}
              </span>
              <span className="text-xs text-navy-500">
                {periodEnd
                  ? scheduledCancel
                    ? `Access stays active until ${periodEnd}.`
                    : `Next renewal: ${periodEnd}.`
                  : null}
              </span>
            </div>
          )}
          <div className="mt-3 space-y-2 text-xs leading-relaxed text-navy-500">
            <p>
              If you paid using <span className="font-semibold text-navy-700">UPI AutoPay</span>,
              you’ll see a one-time mandate authorization step. Once the mandate is active,
              future renewals happen automatically.
            </p>
            <p>
              <span className="font-semibold text-navy-700">Cancel subscription</span> stops
              future auto-debits and prevents renewal. You’ll keep access until the current
              period ends (where supported by Razorpay/payment method).
            </p>
            <div className="rounded-lg border border-navy-200/60 bg-white/70 px-3 py-2">
              <p className="font-semibold text-navy-700">Your saved work is safe</p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li>Saved salary runs and offer comparisons stay in your account.</li>
                <li>
                  If you switch to Free after the period ends, Premium tools become locked,
                  but nothing is deleted.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cn("flex flex-wrap gap-3", !canCancel && "opacity-95")}>
          <Button
            className="rounded-full bg-teal-600 hover:bg-teal-700"
            onClick={() => router.push("/salary/premium/offer-comparison")}
          >
            Open premium tools
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-danger-200 text-danger-700 hover:bg-danger-50"
            disabled={!canCancel || busy !== "idle"}
            onClick={() => setCancelOpen(true)}
          >
            Cancel subscription
          </Button>
        </div>
      </div>

      <Dialog open={cancelOpen} onOpenChange={setCancelOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cancel Premium subscription?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-navy-600 leading-relaxed">
            This will stop future auto-debits for Premium (UPI AutoPay / card, depending on what you used) and cancel renewal. You’ll keep access until the end of the current billing period where supported.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelOpen(false)} disabled={busy !== "idle"}>
              Keep Premium
            </Button>
            <Button
              className="bg-danger-600 hover:bg-danger-700"
              onClick={() => cancelSubscription()}
              disabled={busy !== "idle"}
            >
              {busy === "cancelling" ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                  Cancelling…
                </>
              ) : (
                "Cancel subscription"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}

