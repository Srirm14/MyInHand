"use client";

import Link from "next/link";
import { useEffect, useMemo, type ReactNode } from "react";
import {
  Bolt,
  Car,
  CheckCircle2,
  ChevronLeft,
  Home,
  Landmark,
  LineChart,
  Package,
  PiggyBank,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { DonutGauge } from "@/components/shared/donut-gauge";
import { LifestylePlanningSliderCard } from "@/components/shared/lifestyle-planning-slider-card";
import { buttonVariants } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useUpsertSalaryPlanningMutation } from "@/lib/supabase/hooks/use-salary-sessions";
import { SaveProgressCta } from "@/components/shared/save-progress-cta";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { cn } from "@/lib/utils";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";

export function MonthlyPlanView() {
  const { toolHref, hubHref, premium } = useTieredPremiumLinks();
  const user = useAuthStore((s) => s.user);
  const persist = shouldPersistSessions(user);
  const activeSalarySessionId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const upsertPlanning = useUpsertSalaryPlanningMutation();

  const breakdown = useSalaryStore((s) => s.breakdown);
  const monthlyInHand = breakdown?.monthlyInHand ?? 0;
  const hasBreakdown = Boolean(breakdown);

  const expenses = useLifestyleStore((s) => s.expenses);
  const setExpense = useLifestyleStore((s) => s.setExpense);
  const calculateSurplus = useLifestyleStore((s) => s.calculateSurplus);

  useEffect(() => {
    if (!persist || !activeSalarySessionId) return;
    const t = window.setTimeout(() => {
      upsertPlanning.mutate({
        salarySessionId: activeSalarySessionId,
        lifestyle: useLifestyleStore.getState().expenses,
      });
    }, 900);
    return () => window.clearTimeout(t);
  }, [expenses, persist, activeSalarySessionId, upsertPlanning]);

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

  const set = (key: keyof LifestyleExpenses) => (v: number) =>
    setExpense(key, v);

  return (
    <div className="relative">
      <PageShell className="py-8 md:py-10">
        <Link
          href="/salary/breakdown"
          scroll={false}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group -ml-1.5 mb-1 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
          )}
          aria-label="Back to salary breakdown"
        >
          <ChevronLeft
            className="size-3.5 opacity-70 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={2}
            aria-hidden
          />
          Back to breakdown
        </Link>
        <SectionHeader
          className="mt-1"
          title="Monthly plan"
          subtitle={
            premium
              ? "Plan essentials, day-to-day spending, savings, and investments. Drag sliders or type exact amounts—surplus is what’s left after your full month."
              : "Tune rent, food, transport, and misc. Drag sliders or type amounts to see monthly surplus vs estimated in-hand—quick affordability, no spreadsheet."
          }
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="space-y-10">
            <CategoryGroup
              title={premium ? "Essentials" : "Monthly essentials"}
              description={
                premium
                  ? "Fixed and recurring costs you can’t easily skip."
                  : "Rent, food, transport, and a misc bucket—drag or type for a fast affordability read."
              }
            >
              <div className="grid gap-4 md:grid-cols-2">
                <LifestylePlanningSliderCard
                  icon={Home}
                  label="Rent / housing"
                  description="EMI or rent"
                  value={expenses.rent}
                  suggestedMax={200_000}
                  step={500}
                  onCommit={set("rent")}
                />
                <LifestylePlanningSliderCard
                  icon={UtensilsCrossed}
                  label="Food"
                  description="Groceries & meals"
                  value={expenses.food}
                  suggestedMax={40_000}
                  step={500}
                  onCommit={set("food")}
                />
                <LifestylePlanningSliderCard
                  icon={Car}
                  label="Transport"
                  description="Fuel, commute, cabs"
                  value={expenses.transport}
                  suggestedMax={25_000}
                  step={500}
                  onCommit={set("transport")}
                />
                {premium ? (
                  <LifestylePlanningSliderCard
                    icon={Bolt}
                    label="Utilities"
                    description="Power, water, internet"
                    value={expenses.utilities}
                    suggestedMax={35_000}
                    step={500}
                    onCommit={set("utilities")}
                  />
                ) : (
                  <LifestylePlanningSliderCard
                    icon={Package}
                    label="Misc"
                    description="Shopping, fun, buffer"
                    value={expenses.misc}
                    suggestedMax={22_000}
                    step={500}
                    onCommit={set("misc")}
                  />
                )}
              </div>
            </CategoryGroup>

            {premium ? (
              <>
                <CategoryGroup
                  title="Flexible spending"
                  description="Discretionary spend—easy to trim when you need buffer."
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <LifestylePlanningSliderCard
                      icon={ShoppingCart}
                      label="Shopping"
                      description="Clothes, gadgets, subscriptions"
                      value={expenses.shopping}
                      suggestedMax={35_000}
                      step={500}
                      onCommit={set("shopping")}
                    />
                    <LifestylePlanningSliderCard
                      icon={Package}
                      label="Misc"
                      description="Everything else discretionary"
                      value={expenses.misc}
                      suggestedMax={22_000}
                      step={500}
                      onCommit={set("misc")}
                    />
                  </div>
                </CategoryGroup>

                <CategoryGroup
                  title="Planning"
                  description="What you intend to set aside—included in surplus math."
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <LifestylePlanningSliderCard
                      icon={PiggyBank}
                      label="Savings"
                      description="Emergency fund, goals"
                      value={expenses.savings}
                      suggestedMax={150_000}
                      step={500}
                      onCommit={set("savings")}
                    />
                    <LifestylePlanningSliderCard
                      icon={Landmark}
                      label="Investments"
                      description="SIP, stocks, PF top-ups"
                      value={expenses.investments}
                      suggestedMax={250_000}
                      step={500}
                      onCommit={set("investments")}
                    />
                  </div>
                </CategoryGroup>
              </>
            ) : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 h-fit">
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
                  {premium ? (
                    <>
                      Your full plan (living + savings + investments) exceeds
                      estimated in-hand by{" "}
                      <CurrencyDisplay
                        amount={Math.abs(result.surplus)}
                        className="font-semibold"
                      />
                      .
                    </>
                  ) : (
                    <>
                      Essentials exceed estimated in-hand by{" "}
                      <CurrencyDisplay
                        amount={Math.abs(result.surplus)}
                        className="font-semibold"
                      />
                      .
                    </>
                  )}
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-4 flex gap-3">
                <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-900">
                  {premium ? (
                    <>
                      After living costs, planned savings, and investments, you
                      have{" "}
                      <CurrencyDisplay
                        amount={result.surplus}
                        className="font-semibold"
                      />{" "}
                      left each month.
                    </>
                  ) : (
                    <>
                      With your current essentials, you have{" "}
                      <CurrencyDisplay
                        amount={result.surplus}
                        className="font-semibold"
                      />{" "}
                      left each month.
                    </>
                  )}
                </p>
              </div>
            )}

            {premium ? (
              <div className="space-y-4 rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm">
                <p className="text-label text-navy-400">Plan summary</p>
                <div className="grid grid-cols-2 gap-4">
                  <SummaryCell
                    label="Living expenses"
                    amount={result.livingExpenses}
                    tone="danger"
                  />
                  <SummaryCell
                    label="Est. net income"
                    amount={result.netIncome}
                    tone="teal"
                  />
                  <SummaryCell
                    label="Planned savings"
                    amount={result.plannedSavings}
                    tone="neutral"
                  />
                  <SummaryCell
                    label="Planned investments"
                    amount={result.plannedInvestments}
                    tone="neutral"
                  />
                </div>
                <div className="border-t border-navy-100 pt-3 flex justify-between items-baseline gap-2">
                  <span className="text-xs font-medium text-navy-500">
                    Total outflow
                  </span>
                  <CurrencyDisplay
                    amount={result.totalMonthlyOutflow}
                    className="text-sm font-bold text-navy-800"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm">
                <div>
                  <p className="text-label text-navy-400 mb-1">
                    Monthly expenses
                  </p>
                  <CurrencyDisplay
                    amount={result.totalExpenses}
                    className="text-lg font-bold text-danger-600"
                  />
                </div>
                <div>
                  <p className="text-label text-navy-400 mb-1">
                    Est. net income
                  </p>
                  <CurrencyDisplay
                    amount={result.netIncome}
                    className="text-lg font-bold text-teal-700"
                  />
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-teal-200/60 bg-teal-50/35 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <LineChart className="size-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-navy-800">
                    Wealth forecast
                  </p>
                  <p className="text-xs text-navy-500 leading-relaxed mt-1">
                    {premium
                      ? "See how today’s plan—including savings and investments—plays out over time."
                      : "Open the forecast to connect this plan to longer-term wealth."}
                  </p>
                </div>
              </div>
              <Link
                href={toolHref("forecast")}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "mt-4 rounded-full bg-teal-600 text-white hover:bg-teal-700 font-semibold inline-flex items-center justify-center w-full"
                )}
              >
                View wealth forecast
              </Link>
            </div>

            <SaveProgressCta returnTo="/lifestyle" className="mt-2" />
          </aside>
        </div>
      </PageShell>

      {premium && (
        <Link
          href={hubHref()}
          className={cn(
            buttonVariants({ size: "icon" }),
            "fixed bottom-8 right-6 z-40 size-12 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 md:size-14"
          )}
          aria-label="Open premium tools"
        >
          <LineChart className="size-5 md:size-6" />
        </Link>
      )}
    </div>
  );
}

function CategoryGroup({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-navy-400">
          {title}
        </h2>
        <p className="mt-1 text-sm text-navy-500 leading-snug max-w-xl">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function SummaryCell({
  label,
  amount,
  tone,
}: {
  label: string;
  amount: number;
  tone: "danger" | "teal" | "neutral";
}) {
  const cls =
    tone === "danger"
      ? "text-danger-600"
      : tone === "teal"
        ? "text-teal-700"
        : "text-navy-800";
  return (
    <div>
      <p className="text-label text-navy-400 mb-1">{label}</p>
      <CurrencyDisplay amount={amount} className={cn("text-lg font-bold", cls)} />
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
