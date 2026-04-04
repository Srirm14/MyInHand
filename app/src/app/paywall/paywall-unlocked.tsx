"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Shown at /paywall when NEXT_PUBLIC_ACCESS_MODE=premium (tools are not gated). */
export function PaywallUnlocked() {
  return (
    <PageShell narrow className="py-20 md:py-28">
      <div className="rounded-2xl border border-teal-100 bg-teal-50/40 p-8 md:p-12 text-center shadow-sm">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm">
          <Sparkles className="size-8" />
        </div>
        <h1 className="text-h1 text-navy-800">Premium access is on</h1>
        <p className="mt-4 text-navy-600 leading-relaxed max-w-md mx-auto">
          This environment is set to <strong>premium</strong> mode. Offer
          comparison, wealth forecast, and EMI tools live in the Premium hub —
          no paywall gate.
        </p>
        <Link
          href="/premium"
          className={cn(
            buttonVariants({ variant: "default" }),
            "mt-10 inline-flex rounded-full px-8 h-11 bg-teal-600 hover:bg-teal-700"
          )}
        >
          Open Premium hub
        </Link>
      </div>
    </PageShell>
  );
}
