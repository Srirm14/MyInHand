"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { SALARY_PREMIUM_OFFER_COMPARISON } from "@/lib/config/salary-premium-paths";
import { cn } from "@/lib/utils";

/** Shown at /paywall when the user already has premium (env override or account plan). */
export function PaywallUnlocked() {
  return (
    <PageShell narrow className="py-20 md:py-28">
      <div className="rounded-2xl border border-teal-100 bg-teal-50/40 p-8 md:p-12 text-center shadow-sm">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm">
          <Sparkles className="size-8" />
        </div>
        <h1 className="text-h1 text-navy-800">You already have premium access</h1>
        <p className="mt-4 text-navy-600 leading-relaxed max-w-md mx-auto">
          Offer comparison, wealth forecast, EMI tools, and related flows are
          available from the app — head straight to a tool below.
        </p>
        <Link
          href={SALARY_PREMIUM_OFFER_COMPARISON}
          className={cn(
            buttonVariants({ variant: "default" }),
            "mt-10 inline-flex rounded-full px-8 h-11 bg-teal-600 hover:bg-teal-700"
          )}
        >
          Open offer comparison
        </Link>
      </div>
    </PageShell>
  );
}
