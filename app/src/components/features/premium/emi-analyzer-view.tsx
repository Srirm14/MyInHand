"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { calculateEmi, totalInterestPayable } from "@/lib/utils/calculate-emi";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

export function EmiAnalyzerView() {
  const monthlyInHand = useSalaryStore((s) => s.breakdown?.monthlyInHand ?? 0);
  const lifestyleTotalExpenses = useLifestyleStore(
    (s) =>
      s.expenses.rent +
      s.expenses.food +
      s.expenses.transport +
      s.expenses.misc
  );
  const calculateSurplus = useLifestyleStore((s) => s.calculateSurplus);

  const lifestyleSurplus =
    monthlyInHand <= 0 ? 0 : calculateSurplus(monthlyInHand).surplus;

  const [principal, setPrincipal] = useState(45_00_000);
  const [rate, setRate] = useState(8.7);
  const [tenureYears, setTenureYears] = useState(20);

  const [useSecond, setUseSecond] = useState(false);
  const [p2, setP2] = useState(8_00_000);
  const [r2, setR2] = useState(10.5);
  const [y2, setY2] = useState(5);

  const months1 = Math.max(1, Math.round(tenureYears * 12));
  const emi1 = useMemo(
    () => calculateEmi(principal, rate, months1),
    [principal, rate, months1]
  );
  const interest1 = totalInterestPayable(principal, emi1, months1);

  const months2 = Math.max(1, Math.round(y2 * 12));
  const emi2 = useMemo(
    () => calculateEmi(p2, r2, months2),
    [p2, r2, months2]
  );
  const interest2 = totalInterestPayable(p2, emi2, months2);

  const totalEmi = emi1 + (useSecond ? emi2 : 0);
  const dti =
    monthlyInHand > 0
      ? Number(((totalEmi / monthlyInHand) * 100).toFixed(1))
      : 0;

  const postEmi = monthlyInHand - totalEmi;
  const postEmiAfterLife = lifestyleSurplus - totalEmi;

  const verdict =
    monthlyInHand <= 0
      ? "neutral"
      : totalEmi > monthlyInHand
        ? "critical"
        : dti > 45
          ? "warn"
          : postEmiAfterLife < 0
            ? "tight"
            : "ok";

  return (
    <PageShell className="py-8 md:py-10">
      <SectionHeader
        title="EMI analyzer"
        subtitle="Fixed-rate EMI estimate and debt-to-income vs your last calculated in-hand. Lifestyle surplus uses current Lifestyle Check sliders."
      />

      {monthlyInHand <= 0 && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
          <Link href="/salary" className="font-semibold text-teal-700 hover:underline">
            Add a salary breakdown
          </Link>{" "}
          so we can compare EMIs to your real in-hand pay.
        </div>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
          <h2 className="text-h3 text-navy-800">Primary loan</h2>
          <LoanFields
            principal={principal}
            setPrincipal={setPrincipal}
            rate={rate}
            setRate={setRate}
            tenureYears={tenureYears}
            setTenureYears={setTenureYears}
            labelPrefix="Loan"
          />
          <div className="rounded-xl bg-navy-50/80 p-4 space-y-1">
            <p className="text-label text-navy-400">Monthly EMI</p>
            <CurrencyDisplay
              amount={emi1}
              className="text-2xl font-bold text-navy-800"
            />
            <p className="text-xs text-navy-500">
              Total interest ≈ {formatCurrency(interest1)} over {months1} months
            </p>
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-h3 text-navy-800">Second loan</h2>
            <label className="flex items-center gap-2 text-sm font-medium text-navy-600 cursor-pointer">
              <input
                type="checkbox"
                checked={useSecond}
                onChange={(e) => setUseSecond(e.target.checked)}
                className="rounded border-navy-300 text-teal-600 focus:ring-teal-500"
              />
              Include
            </label>
          </div>
          {useSecond ? (
            <>
              <LoanFields
                principal={p2}
                setPrincipal={setP2}
                rate={r2}
                setRate={setR2}
                tenureYears={y2}
                setTenureYears={setY2}
                labelPrefix="Loan 2"
              />
              <div className="rounded-xl bg-navy-50/80 p-4 space-y-1">
                <p className="text-label text-navy-400">Monthly EMI</p>
                <CurrencyDisplay
                  amount={emi2}
                  className="text-2xl font-bold text-navy-800"
                />
                <p className="text-xs text-navy-500">
                  Total interest ≈ {formatCurrency(interest2)} over {months2}{" "}
                  months
                </p>
              </div>
            </>
          ) : (
            <p className="text-sm text-navy-500">
              Stack a car or personal loan to see combined EMI and affordability.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
        <h2 className="text-h3 text-navy-800 mb-6">Affordability snapshot</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Snapshot
            label="Monthly in-hand"
            amount={monthlyInHand}
            muted={monthlyInHand <= 0}
          />
          <Snapshot label="Total EMI / mo" amount={totalEmi} accent="danger" />
          <Snapshot
            label="Post-EMI in-hand"
            amount={postEmi}
            accent={postEmi < 0 ? "danger" : "teal"}
          />
          <div>
            <p className="text-label text-navy-400 mb-1">DTI</p>
            <p className="text-2xl font-bold text-navy-800 tabular-nums">
              {monthlyInHand > 0 ? `${dti}%` : "—"}
            </p>
            <p className="text-xs text-navy-500 mt-1">EMI ÷ in-hand</p>
          </div>
        </div>

        {monthlyInHand > 0 && (
          <div className="mt-6 pt-6 border-t border-navy-100">
            <p className="text-xs text-navy-500 mb-2">
              Lifestyle expenses (from{" "}
              <Link href="/lifestyle" className="text-teal-600 hover:underline">
                Lifestyle Check
              </Link>
              ): {formatCurrency(lifestyleTotalExpenses)}/mo
            </p>
            <p className="text-label text-navy-400 mb-1">
              After EMIs & lifestyle (from Lifestyle Check)
            </p>
            <CurrencyDisplay
              amount={postEmiAfterLife}
              className={cn(
                "text-xl font-bold tabular-nums",
                postEmiAfterLife < 0 ? "text-danger-600" : "text-emerald-700"
              )}
            />
            <Link
              href="/lifestyle"
              className="mt-2 inline-block text-sm text-teal-600 hover:underline"
            >
              Adjust lifestyle sliders →
            </Link>
          </div>
        )}

        <div
          className={cn(
            "mt-6 rounded-xl px-4 py-3 text-sm font-medium",
            verdict === "critical" && "bg-danger-50 text-danger-900 border border-danger-100",
            verdict === "warn" && "bg-amber-50 text-amber-950 border border-amber-100",
            verdict === "tight" && "bg-amber-50/80 text-amber-950 border border-amber-100",
            verdict === "ok" && "bg-emerald-50 text-emerald-900 border border-emerald-100",
            verdict === "neutral" && "bg-navy-50 text-navy-600"
          )}
        >
          {verdict === "neutral" &&
            "Enter salary data for DTI and post-EMI estimates."}
          {verdict === "critical" &&
            "Combined EMI exceeds stated in-hand — not sustainable without higher income or lower principal."}
          {verdict === "warn" &&
            "Debt-to-income is high (>45%). Build a buffer before committing."}
          {verdict === "tight" &&
            "EMIs fit in-hand but lifestyle spend pushes you negative — trim expenses or loan size."}
          {verdict === "ok" &&
            "EMIs sit within a reasonable share of in-hand and leave room after your current lifestyle estimate."}
        </div>
      </div>
    </PageShell>
  );
}

function Snapshot({
  label,
  amount,
  accent,
  muted,
}: {
  label: string;
  amount: number;
  accent?: "teal" | "danger";
  muted?: boolean;
}) {
  return (
    <div>
      <p className="text-label text-navy-400 mb-1">{label}</p>
      <CurrencyDisplay
        amount={amount}
        className={cn(
          "text-xl font-bold tabular-nums",
          muted && "text-navy-400",
          accent === "teal" && "text-teal-700",
          accent === "danger" && "text-danger-600"
        )}
      />
    </div>
  );
}

function LoanFields({
  principal,
  setPrincipal,
  rate,
  setRate,
  tenureYears,
  setTenureYears,
  labelPrefix,
}: {
  principal: number;
  setPrincipal: (n: number) => void;
  rate: number;
  setRate: (n: number) => void;
  tenureYears: number;
  setTenureYears: (n: number) => void;
  labelPrefix: string;
}) {
  return (
    <>
      <div className="space-y-2">
        <Label>{labelPrefix} amount (₹)</Label>
        <Input
          inputMode="numeric"
          className="rounded-xl"
          value={principal || ""}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^\d]/g, "");
            setPrincipal(raw ? Number(raw) : 0);
          }}
        />
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <Label>Interest rate (p.a.)</Label>
          <span className="text-sm font-bold text-teal-700 tabular-nums">
            {rate.toFixed(1)}%
          </span>
        </div>
        <Slider
          min={6}
          max={16}
          step={0.1}
          value={[rate]}
          onValueChange={(v) => {
            const n = Array.isArray(v) ? v[0] : (v as number);
            setRate(Math.round(n * 10) / 10);
          }}
        />
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <Label>Tenure (years)</Label>
          <span className="text-sm font-bold text-teal-700 tabular-nums">
            {tenureYears} yr
          </span>
        </div>
        <Slider
          min={1}
          max={30}
          step={1}
          value={[tenureYears]}
          onValueChange={(v) => {
            const n = Array.isArray(v) ? v[0] : (v as number);
            setTenureYears(Math.round(n));
          }}
        />
      </div>
    </>
  );
}
