"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Car,
  CheckCircle2,
  Home,
  LineChart,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { DonutGauge } from "@/components/shared/donut-gauge";
import { SliderCard } from "@/components/shared/slider-card";
import { buttonVariants } from "@/components/ui/button";
import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { premiumHubHref, premiumToolHref } from "@/lib/config/access-mode";
import { cn } from "@/lib/utils";

export function LifestyleCheckView() {
  const breakdown = useSalaryStore((s) => s.breakdown);
  const monthlyInHand = breakdown?.monthlyInHand ?? 0;
  const hasBreakdown = Boolean(breakdown);

  const expenses = useLifestyleStore((s) => s.expenses);
  const setExpense = useLifestyleStore((s) => s.setExpense);
  const calculateSurplus = useLifestyleStore((s) => s.calculateSurplus);

  const result = calculateSurplus(monthlyInHand);

  const donutPercent = useMemo(() => {
    if (monthlyInHand <= 0) return 0;
    if (result.isDeficit) {
      return Math.min(
        100,
        Math.max(8, (Math.abs(result.surplus) / monthlyInHand) * 100)
      );
    }
    return Math.min(
      100,
      Math.max(8, (result.surplus / monthlyInHand) * 100)
    );
  }, [monthlyInHand, result.isDeficit, result.surplus]);

  const trend =
    result.surplusPercent >= 0
      ? `+${result.surplusPercent}%`
      : `${result.surplusPercent}%`;

  return (
    <div className="relative">
      <PageShell className="py-8 md:py-10">
        <SectionHeader
          title="Lifestyle Check"
          subtitle="Fine-tune your monthly habits to see the impact on your long-term wealth architecture."
        />

        {!hasBreakdown && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
            Est. net income uses your last salary breakdown.{" "}
            <Link
              href="/salary"
              className="font-semibold text-teal-700 underline-offset-2 hover:underline"
            >
              Enter your CTC
            </Link>{" "}
            first for accurate surplus.
          </div>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <SliderCard
              icon={Home}
              label="Rent"
              value={expenses.rent}
              min={0}
              max={150_000}
              step={500}
              onChange={(v) => setExpense("rent", v)}
            />
            <SliderCard
              icon={UtensilsCrossed}
              label="Food"
              value={expenses.food}
              min={0}
              max={50_000}
              step={500}
              onChange={(v) => setExpense("food", v)}
            />
            <SliderCard
              icon={Car}
              label="Transport"
              value={expenses.transport}
              min={0}
              max={30_000}
              step={500}
              onChange={(v) => setExpense("transport", v)}
            />
            <SliderCard
              icon={ShoppingBag}
              label="Misc"
              value={expenses.misc}
              min={0}
              max={25_000}
              step={500}
              onChange={(v) => setExpense("misc", v)}
            />

            <div className="rounded-2xl bg-teal-600 p-6 text-white shadow-md flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm md:text-base text-teal-50/95 leading-relaxed max-w-xl">
                <span className="font-semibold text-white">
                  Unlock 10-Year Foresight.
                </span>{" "}
                Want to see your 10-year wealth forecast based on this lifestyle?
                Upgrade to Premium for deep predictive analytics.
              </p>
              <Link
                href={premiumToolHref("forecast")}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-full bg-white text-teal-700 hover:bg-teal-50 font-semibold shrink-0"
                )}
              >
                Upgrade Now
              </Link>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm flex flex-col items-center">
              <DonutGauge
                percentage={donutPercent}
                amount={Math.abs(result.surplus)}
                label={result.isDeficit ? "DEFICIT" : "SURPLUS"}
                trend={trend}
                sentiment={result.isDeficit ? "negative" : "positive"}
                size={200}
              />
            </div>

            {result.isDeficit ? (
              <div className="rounded-xl border border-danger-100 bg-danger-50/80 p-4 flex gap-3">
                <InfoMini />
                <p className="text-sm text-danger-800">
                  Your expenses exceed estimated in-hand by{" "}
                  <CurrencyDisplay
                    amount={Math.abs(result.surplus)}
                    className="font-semibold"
                  />
                  . Adjust sliders or revisit your CTC assumptions.
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-4 flex gap-3">
                <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-900">
                  With your current lifestyle, you save{" "}
                  <CurrencyDisplay
                    amount={result.surplus}
                    className="font-semibold"
                  />{" "}
                  monthly.
                </p>
              </div>
            )}

            <p className="text-center text-xs text-navy-400 px-2">
              Small adjustments today build monumental architecture tomorrow.
            </p>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm">
              <div>
                <p className="text-label text-navy-400 mb-1">Total Expenses</p>
                <CurrencyDisplay
                  amount={result.totalExpenses}
                  className="text-lg font-bold text-danger-600"
                />
              </div>
              <div>
                <p className="text-label text-navy-400 mb-1">Est. Net Income</p>
                <CurrencyDisplay
                  amount={result.netIncome}
                  className="text-lg font-bold text-teal-700"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-navy-200/40 bg-navy-50/50 overflow-hidden shadow-sm">
              <div className="aspect-[16/10] bg-gradient-to-br from-teal-100 to-navy-100 flex items-center justify-center">
                <span className="text-4xl" aria-hidden>
                  💰
                </span>
              </div>
              <div className="p-4">
                <p className="text-label text-teal-700 mb-1">Strategy tip</p>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Reducing &apos;Misc&apos; by 15% could fund your annual
                  vacation in 8 months.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </PageShell>

      <Link
        href={premiumHubHref()}
        className={cn(
          buttonVariants({ size: "icon" }),
          "fixed bottom-8 right-6 z-40 size-12 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 md:size-14"
        )}
        aria-label="Open Premium hub"
      >
        <LineChart className="size-5 md:size-6" />
      </Link>
    </div>
  );
}

function InfoMini() {
  return (
    <div
      className="size-5 shrink-0 rounded-full bg-danger-200 text-danger-800 flex items-center justify-center text-xs font-bold"
      aria-hidden
    >
      !
    </div>
  );
}
