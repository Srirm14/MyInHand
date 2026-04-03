"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import {
  projectWealth,
  type WealthYearRow,
} from "@/lib/utils/project-wealth";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

const HORIZONS = [5, 10, 20] as const;

export function WealthForecastView() {
  const storeInHand = useSalaryStore((s) => s.breakdown?.monthlyInHand ?? 0);
  const [overrideInHand, setOverrideInHand] = useState<string>("");
  const monthlyInHand =
    storeInHand > 0
      ? storeInHand
      : Math.max(0, Number(overrideInHand.replace(/[^\d]/g, "")) || 0);

  const [horizon, setHorizon] = useState<(typeof HORIZONS)[number]>(10);
  const [savingsRate, setSavingsRate] = useState(22);
  const [salaryGrowth, setSalaryGrowth] = useState(10);
  const [investReturn, setInvestReturn] = useState(12);

  const rows: WealthYearRow[] = useMemo(
    () =>
      projectWealth({
        monthlyInHand,
        savingsRatePercent: savingsRate,
        salaryGrowthPercentPerYear: salaryGrowth,
        investmentReturnPercentPerYear: investReturn,
        horizonYears: horizon,
      }),
    [monthlyInHand, savingsRate, salaryGrowth, investReturn, horizon]
  );

  const maxCorpus = rows.length ? Math.max(...rows.map((r) => r.corpusEnd)) : 0;
  const finalRow = rows[rows.length - 1];

  return (
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
      <div className="mt-1 mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <SectionHeader
          className="mb-0"
          title="Wealth forecast"
          subtitle="Nominal projection: recurring savings from in-hand pay, annual salary growth, and a single portfolio return. Not financial advice."
        />
        <div className="flex gap-2 shrink-0 lg:pt-1">
          {HORIZONS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setHorizon(y)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all",
                horizon === y
                  ? "border border-teal-600 bg-teal-100 text-teal-900 shadow-sm"
                  : "border border-navy-200 bg-white text-navy-600 hover:bg-navy-50"
              )}
            >
              {y} yr
            </button>
          ))}
        </div>
      </div>

      {storeInHand <= 0 && (
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-navy-200 bg-white p-4 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-2">
            <Label htmlFor="inhand-override">Monthly in-hand (₹)</Label>
            <Input
              id="inhand-override"
              inputMode="numeric"
              placeholder="e.g. 120000"
              value={overrideInHand}
              onChange={(e) => setOverrideInHand(e.target.value)}
              className="rounded-xl"
            />
            <p className="text-xs text-navy-400">
              Or{" "}
              <Link href="/salary" className="text-teal-600 font-medium hover:underline">
                calculate from CTC
              </Link>{" "}
              to prefill.
            </p>
          </div>
        </div>
      )}

      {monthlyInHand <= 0 && (
        <p className="mt-6 text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
          Enter a monthly in-hand amount or complete the salary flow to see
          projections.
        </p>
      )}

      {monthlyInHand > 0 && (
        <>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-8 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
              <SliderBlock
                label="Savings rate"
                hint="% of monthly in-hand invested each month (modelled annually)."
                value={savingsRate}
                onChange={setSavingsRate}
                min={0}
                max={50}
                suffix="%"
              />
              <SliderBlock
                label="Salary growth (capped 30%)"
                hint="Nominal annual increase to in-hand."
                value={salaryGrowth}
                onChange={setSalaryGrowth}
                min={0}
                max={30}
                suffix="%"
              />
              <SliderBlock
                label="Investment return (capped 30%)"
                hint="Nominal annual return on accumulated corpus."
                value={investReturn}
                onChange={setInvestReturn}
                min={0}
                max={30}
                suffix="%"
              />
            </div>

            <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
              <p className="text-label text-navy-400 mb-2">Projected corpus</p>
              {finalRow && (
                <CurrencyDisplay
                  amount={finalRow.corpusEnd}
                  className="text-stat text-navy-800"
                />
              )}
              <p className="mt-2 text-sm text-navy-500">
                After {horizon} years · final in-hand{" "}
                {finalRow && (
                  <CurrencyDisplay
                    amount={finalRow.monthlyInHand}
                    className="inline font-medium text-navy-700"
                  />
                )}
                /mo
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-label text-navy-400">Corpus trajectory</p>
                <div className="flex h-44 items-end gap-1">
                  {rows.map((r) => (
                    <div
                      key={r.year}
                      className="flex-1 min-w-0 flex h-full flex-col items-center justify-end gap-1"
                      title={`Year ${r.year}: ${formatCurrency(r.corpusEnd)}`}
                    >
                      <div
                        className="w-full max-w-[28px] mx-auto rounded-t-md bg-gradient-to-t from-teal-700 to-teal-500 transition-all"
                        style={{
                          height: `${maxCorpus > 0 ? Math.max(6, Math.round((r.corpusEnd / maxCorpus) * 160)) : 6}px`,
                        }}
                      />
                      <span className="text-[10px] text-navy-400 tabular-nums">
                        {r.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-200/50 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-navy-100 text-left text-label text-navy-400">
                  <th className="px-4 py-3 font-semibold">Year</th>
                  <th className="px-4 py-3 font-semibold">In-hand / mo</th>
                  <th className="px-4 py-3 font-semibold">Annual savings</th>
                  <th className="px-4 py-3 font-semibold">Corpus end</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.year}
                    className="border-b border-navy-50 hover:bg-navy-50/50"
                  >
                    <td className="px-4 py-2.5 font-medium text-navy-800">
                      {r.year}
                    </td>
                    <td className="px-4 py-2.5 tabular-nums">
                      {formatCurrency(r.monthlyInHand)}
                    </td>
                    <td className="px-4 py-2.5 tabular-nums text-teal-700">
                      {formatCurrency(r.annualContribution)}
                    </td>
                    <td className="px-4 py-2.5 tabular-nums font-semibold text-navy-800">
                      {formatCurrency(r.corpusEnd)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </PageShell>
  );
}

function SliderBlock({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  suffix,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  suffix: string;
}) {
  return (
    <div>
      <div className="flex justify-between gap-2">
        <Label className="text-navy-800">{label}</Label>
        <span className="text-sm font-bold text-teal-700 tabular-nums">
          {value}
          {suffix}
        </span>
      </div>
      <p className="text-xs text-navy-400 mt-1 mb-3">{hint}</p>
      <Slider
        min={min}
        max={max}
        step={1}
        value={[value]}
        onValueChange={(v) => {
          const n = Array.isArray(v) ? v[0] : (v as number);
          onChange(Math.round(n));
        }}
      />
    </div>
  );
}
