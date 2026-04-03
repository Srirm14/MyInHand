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
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">
            InHand
          </p>
          <p className="text-sm font-medium text-navy-600 mb-5 md:mb-6">
            Salary intelligence for Indian employees
          </p>
          <h1 className="text-display text-navy-800 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Know what hits your bank each month
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-navy-500 leading-relaxed max-w-2xl mx-auto">
            Turn CTC into credible in-hand estimates, break down deductions and
            tax impact, and see how far your salary really goes—before you sign
            or switch roles.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/salary"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full px-8 text-base font-semibold shadow-md hover:shadow-lg bg-teal-600 hover:bg-teal-700"
              )}
            >
              Estimate my in-hand pay
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/salary"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-navy-200 px-8 text-base inline-flex items-center justify-center font-medium"
              )}
            >
              See a free breakdown
            </Link>
          </div>
        </section>

        <section className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 text-center shadow-sm">
            <p className="text-label text-navy-400">Example in-hand</p>
            <p className="mt-2 text-stat text-navy-800">₹1,42,500</p>
            <p className="mt-1 text-xs text-emerald-600 font-medium">
              / month @ ₹18L CTC
            </p>
          </div>
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 text-center shadow-sm">
            <p className="text-label text-navy-400">Tax context</p>
            <p className="mt-2 text-stat text-navy-800">Old vs new</p>
            <p className="mt-1 text-xs text-navy-500">Regime-aware estimates</p>
          </div>
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 text-center shadow-sm">
            <p className="text-label text-navy-400">Your data</p>
            <p className="mt-2 text-stat-sm text-navy-800 font-bold">
              No bank linking
            </p>
            <p className="mt-1 text-xs text-navy-500">You enter what you choose</p>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-h2 text-navy-800 text-center mb-4">
            What InHand helps you see
          </h2>
          <p className="text-center text-navy-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Real in-hand salary, full breakup, deductions and tax impact,
            lifestyle affordability, offer comparison, and optional long-range
            wealth views—laid out so you can decide with numbers, not noise.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={BarChart3}
              title="In-hand & breakup"
              description="Monthly take-home, PF, tax, and line items in a clear table—so you see where the CTC goes."
              cta="Open calculator"
              href="/salary"
            />
            <FeatureCard
              icon={Scale}
              title="Offer comparison"
              description="Put two or three offers on the same assumptions and compare apples to apples."
              cta="Open tool"
              href={toolHref("offers")}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Wealth outlook"
              description="Sketch how today’s surplus might compound over 5, 10, or 20 years."
              cta="Open tool"
              href={toolHref("forecast")}
            />
            <FeatureCard
              icon={PiggyBank}
              title="EMI stress-test"
              description="Check loan payments against in-hand after statutory deductions—not headline CTC."
              cta="Open tool"
              href={toolHref("emi")}
            />
          </div>
        </section>

        <section className="mt-24 rounded-2xl bg-teal-600 px-8 py-12 text-center text-white shadow-md">
          <h2 className="text-h2 text-white mb-3">Start with your CTC</h2>
          <p className="text-teal-50/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Free breakdown and monthly plan. Add premium when you want offer
            comparison, forecasts, and EMI checks tied to your numbers.
          </p>
          <Link
            href="/salary"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "rounded-full px-8 h-12 font-semibold bg-white text-teal-700 hover:bg-teal-50"
            )}
          >
            Open InHand
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </section>
      </PageShell>
    </div>
  );
}
