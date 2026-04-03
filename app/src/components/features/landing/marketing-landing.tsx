"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  PiggyBank,
  Scale,
  TrendingUp,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { FeatureCard } from "@/components/shared/feature-card";
import { buttonVariants } from "@/components/ui/button";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { cn } from "@/lib/utils";

export function MarketingLanding() {
  const { toolHref } = useTieredPremiumLinks();

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-40 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
        aria-hidden
      />

      <PageShell className="relative py-16 md:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-label text-teal-600 mb-4">The Fluid Ledger</p>
          <h1 className="text-display text-navy-800 md:text-5xl">
            Your salary, decoded with precision
          </h1>
          <p className="mt-6 text-lg text-navy-500 leading-relaxed">
            Understand in-hand pay, tax regimes, and lifestyle fit before you
            sign. Built for Indian salaried professionals who want clarity, not
            guesswork.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/salary"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full px-8 text-base font-semibold shadow-md hover:shadow-lg"
              )}
            >
              Calculate In-Hand Pay
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/salary"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-navy-200 px-8 text-base inline-flex items-center justify-center"
              )}
            >
              View salary breakdown
            </Link>
          </div>
        </section>

        <section className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 text-center shadow-sm">
            <p className="text-label text-navy-400">Sample net pay</p>
            <p className="mt-2 text-stat text-navy-800">₹1,42,500</p>
            <p className="mt-1 text-xs text-emerald-600 font-medium">/ month @ 18L CTC</p>
          </div>
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 text-center shadow-sm">
            <p className="text-label text-navy-400">Regimes compared</p>
            <p className="mt-2 text-stat text-navy-800">Old vs New</p>
            <p className="mt-1 text-xs text-navy-500">Side-by-side estimates</p>
          </div>
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 text-center shadow-sm">
            <p className="text-label text-navy-400">Privacy</p>
            <p className="mt-2 text-stat-sm text-navy-800 font-bold">Local-first</p>
            <p className="mt-1 text-xs text-navy-500">No bank linking required</p>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-h2 text-navy-800 text-center mb-4">
            Everything in one workspace
          </h2>
          <p className="text-center text-navy-500 max-w-2xl mx-auto mb-12">
            From CTC to lifestyle surplus — see the full picture on desktop,
            with flows that match how you actually plan money.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={BarChart3}
              title="Salary breakdown"
              description="Monthly in-hand, PF, tax, and components in a clear ledger-style table."
              cta="Open calculator"
              href="/salary"
            />
            <FeatureCard
              icon={Scale}
              title="Offer comparison"
              description="Compare two or three offers with consistent assumptions — premium feature."
              cta="Open tool"
              href={toolHref("offers")}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Wealth forecast"
              description="Project where today&apos;s savings could land in 5, 10, or 20 years."
              cta="Open tool"
              href={toolHref("forecast")}
            />
            <FeatureCard
              icon={PiggyBank}
              title="EMI analyzer"
              description="Stress-test loans against your real in-hand after statutory deductions."
              cta="Open tool"
              href={toolHref("emi")}
            />
          </div>
        </section>

        <section className="mt-24 rounded-2xl bg-teal-600 px-8 py-12 text-center text-white shadow-md">
          <h2 className="text-h2 text-white mb-3">
            Your financial clarity is one click away
          </h2>
          <p className="text-teal-50/90 max-w-xl mx-auto mb-8">
            Start with the free salary breakdown, then layer lifestyle and
            premium insights when you&apos;re ready.
          </p>
          <Link
            href="/salary"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "rounded-full px-8 h-12 font-semibold bg-white text-teal-700 hover:bg-teal-50"
            )}
          >
            Get started
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </section>
      </PageShell>
    </div>
  );
}
