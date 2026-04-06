"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
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
  const renewal = fmtDate(billing?.current_end_at);

  return (
    <PageShell narrow className="py-8 md:py-10">
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
                {renewal ? `Renews on ${renewal}.` : "Premium is active."}
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
          <p className="mt-1 text-sm font-medium text-navy-900">
            {billing?.status ? billing.status : busy === "loading" ? "Loading…" : "—"}
          </p>
          <p className="mt-1 text-xs text-navy-500">
            If you just paid, it may take a few seconds for the subscription status to sync.
          </p>
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
            We’ll cancel renewal for your Premium plan. You’ll keep access until the end of the current billing period (where supported).
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

