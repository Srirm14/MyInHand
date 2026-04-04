"use client";

import Link from "next/link";
import { Crown, Lock } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PaywallTool } from "@/lib/config/access-mode";

const TOOL_COPY: Record<
  PaywallTool,
  { title: string; body: string }
> = {
  offers: {
    title: "Offer comparison",
    body: "Side-by-side in-hand, tax, and first-year value for up to three offers.",
  },
  forecast: {
    title: "Wealth forecast",
    body: "Project corpus over 5–20 years with savings rate, growth, and return sliders.",
  },
  emi: {
    title: "EMI analyzer",
    body: "EMI math, debt-to-income, and impact on your Monthly plan surplus.",
  },
};

interface PaywallLockedProps {
  tool: PaywallTool;
  fromPremium: boolean;
}

export function PaywallLocked({ tool, fromPremium }: PaywallLockedProps) {
  const focus = TOOL_COPY[tool];

  return (
    <PageShell narrow className="py-16 md:py-24">
      <div className="rounded-2xl border border-navy-200/60 bg-white p-8 md:p-10 shadow-sm text-center">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
          <Crown className="size-7" />
        </div>
        <h1 className="text-h1 text-navy-800">Unlock Premium</h1>
        <p className="mt-3 text-navy-500 leading-relaxed max-w-lg mx-auto text-sm md:text-base">
          {fromPremium
            ? "These planning tools are part of Premium. Complete checkout (coming soon) or switch your environment to premium mode for demos."
            : "Compare offers, run wealth projections, and stress-test EMIs with Premium."}
        </p>

        <div className="mt-8 grid gap-3 text-left max-w-md mx-auto">
          {(Object.keys(TOOL_COPY) as PaywallTool[]).map((key) => {
            const item = TOOL_COPY[key];
            const active = key === tool;
            return (
              <Link
                key={key}
                href={`/paywall?tool=${key}`}
                className={cn(
                  "flex items-start gap-3 rounded-xl border px-4 py-3 transition-colors",
                  active
                    ? "border-teal-400 bg-teal-50/60"
                    : "border-navy-100 bg-navy-50/30 hover:border-navy-200"
                )}
              >
                <Lock
                  className={cn(
                    "size-4 shrink-0 mt-0.5",
                    active ? "text-teal-600" : "text-navy-400"
                  )}
                />
                <div>
                  <p className="text-sm font-semibold text-navy-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">{item.body}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg bg-navy-50/80 px-4 py-3 text-left text-xs text-navy-600 max-w-md mx-auto">
          <span className="font-semibold text-navy-800">Demo tip:</span> set{" "}
          <code className="rounded bg-white px-1 py-0.5 text-[11px] border border-navy-200">
            NEXT_PUBLIC_ACCESS_MODE=premium
          </code>{" "}
          in <code className="text-[11px]">app/.env.local</code> and restart{" "}
          <code className="text-[11px]">npm run dev</code> to open all tools.
        </div>

        <p className="mt-6 text-sm font-medium text-navy-800">
          You were viewing: {focus.title}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            href="/salary"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-8 h-11 bg-teal-600 hover:bg-teal-700"
            )}
          >
            Back to free salary calculator
          </Link>
          <p className="text-center text-xs text-navy-500 max-w-md leading-relaxed">
            Detailed breakdown, payslip-style tables, and monthly plan open after
            Premium is unlocked.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
