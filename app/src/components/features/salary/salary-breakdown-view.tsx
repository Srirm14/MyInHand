"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Banknote,
  CheckCircle2,
  Info,
  PiggyBank,
  Receipt,
  Sparkles,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { StatCard } from "@/components/shared/stat-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SaveProgressCta } from "@/components/shared/save-progress-cta";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type { SalaryComponent } from "@/lib/types/salary.types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

export function SalaryBreakdownView() {
  const router = useRouter();
  const { toolHref } = useTieredPremiumLinks();
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const updateBreakdownComponentMonthly = useSalaryStore(
    (s) => s.updateBreakdownComponentMonthly
  );

  useEffect(() => {
    if (!breakdown && input.annualCTC >= 100_000) {
      calculateBreakdown();
    }
  }, [breakdown, input.annualCTC, calculateBreakdown]);

  useEffect(() => {
    if (!breakdown && input.annualCTC < 100_000) {
      router.replace("/salary");
    }
  }, [breakdown, input.annualCTC, router]);

  if (!breakdown) {
    return (
      <PageShell className="py-20">
        <p className="text-center text-navy-500">Preparing your breakdown…</p>
      </PageShell>
    );
  }

  const regimeLabel = input.taxRegime === "old" ? "Old Regime" : "New Regime";
  const source = breakdown.meta?.resultSource ?? "manual_estimated";
  const isDocument = source === "document_parsed";

  return (
    <PageShell className="py-8 md:py-10">
      <div className="mb-6 space-y-3">
        {isDocument ? (
          <div className="rounded-xl border border-teal-200 bg-teal-50/90 px-4 py-3 text-sm text-navy-800">
            <span className="font-semibold text-teal-800">Document-based results</span>
            {breakdown.meta?.documentFileName && (
              <span className="text-navy-600">
                {" "}
                — parsed from <cite className="not-italic font-medium">{breakdown.meta.documentFileName}</cite>
              </span>
            )}
            . Figures use the same tax engine with extracted CTC hints; confirm
            components against your letter before deciding.
          </div>
        ) : (
          <div className="rounded-xl border border-navy-200 bg-navy-50/80 px-4 py-3 text-sm text-navy-700">
            <span className="font-semibold text-navy-800">Estimated breakdown</span> — built
            from your CTC, city tier, and regime using standard Indian payroll assumptions
            (basic split, HRA, PF, reimbursements). Not your employer&apos;s exact payslip.
          </div>
        )}
        {breakdown.meta?.componentsAdjusted && (
          <p className="text-xs text-navy-500 px-1">
            You edited monthly line items; in-hand and tax totals follow your adjusted numbers.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <SectionHeader
            title="Salary Breakdown"
            subtitle="Monthly components, deductions, and tax impact — edit any monthly value to correct estimates."
          />
        </div>
        <div className="rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm max-w-md lg:mt-4">
          <div className="flex gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Sparkles className="size-5" />
            </div>
            <p className="text-sm text-navy-600 leading-relaxed">
              You take home{" "}
              <span className="font-semibold text-navy-800">
                {breakdown.takeHomePercent}%
              </span>{" "}
              of your CTC. Your tax efficiency is{" "}
              <span className="font-semibold text-teal-700">12%</span> higher
              than similar earners in your bracket.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <StatCard
          label="Monthly In-hand"
          amount={breakdown.monthlyInHand}
          trend="+4.2% vs LW"
          sentiment="positive"
          icon={Banknote}
        />
        <StatCard
          label="Annual Income Tax"
          amount={breakdown.annualIncomeTax}
          sublabel={regimeLabel}
          sentiment="negative"
          icon={PiggyBank}
        />
        <StatCard
          label="Total Deductions"
          amount={breakdown.totalMonthlyDeductions}
          sublabel="Per Month"
          sentiment="neutral"
          icon={Receipt}
        />
      </div>

      <div className="mt-10 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-h3 text-navy-800">Monthly component breakup</h2>
            <p className="text-xs text-navy-400 mt-1">
              Click a monthly amount to adjust; annual column updates automatically.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-navy-200"
            >
              Download PDF
            </Button>
            <Link
              href="/lifestyle"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full bg-teal-600 hover:bg-teal-700"
              )}
            >
              Add lifestyle expenses
            </Link>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-navy-200 hover:bg-transparent">
              <TableHead className="text-label text-navy-400 pl-4">
                Component
              </TableHead>
              <TableHead className="text-label text-navy-400">
                Monthly Value
              </TableHead>
              <TableHead className="text-label text-navy-400">
                Annual Total
              </TableHead>
              <TableHead className="text-label text-navy-400">Type</TableHead>
              <TableHead className="text-label text-navy-400 text-right pr-4">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {breakdown.components.map((row) => (
              <EditableComponentRow
                key={row.id}
                row={row}
                onMonthlyCommit={(id, v) => updateBreakdownComponentMonthly(id, v)}
              />
            ))}
          </TableBody>
        </Table>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-navy-100 bg-navy-50/50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <UserRound className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-800">
                Personalized Tax Plan Ready…
              </p>
              <p className="text-xs text-navy-500">
                Unlock optimizations tailored to your regime and investments.
              </p>
            </div>
          </div>
          <Link
            href={toolHref("forecast")}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-teal-600 text-teal-700 hover:bg-teal-50 shrink-0"
            )}
          >
            Optimize My Tax
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-teal-600 p-6 text-white shadow-md">
          <h3 className="text-h3 text-white mb-2">Check your surplus.</h3>
          <p className="text-sm text-teal-50/90 leading-relaxed mb-6">
            Connect lifestyle expenses to see how much room you have after
            fixed costs each month.
          </p>
          <Link
            href="/lifestyle"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "rounded-full bg-white text-teal-700 hover:bg-teal-50 font-semibold"
            )}
          >
            Add lifestyle expenses
          </Link>
        </div>

        <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
          <h3 className="text-h3 text-navy-800 mb-4">Allocation benchmarks</h3>
          <div className="space-y-5">
            <BenchmarkBar
              label="Essential Needs"
              fillPercent={48}
              recommended="50% Recommended"
            />
            <BenchmarkBar
              label="Wants & Lifestyle"
              fillPercent={32}
              recommended="30% Recommended"
            />
            <BenchmarkBar
              label="Savings & Debt"
              fillPercent={20}
              recommended="20% Recommended"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
          <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
            <TrendingUp className="size-6" />
          </div>
          <p className="text-stat text-navy-800">₹2.4L / Year</p>
          <p className="mt-2 text-sm text-navy-500 leading-relaxed">
            Potential savings identified if you switch to New Regime and invest
            in 80CCD(1B).
          </p>
          <Link
            href={toolHref("forecast")}
            className="mt-4 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            Explore scenario →
          </Link>
        </div>
      </div>

      <SaveProgressCta returnTo="/salary/breakdown" className="mt-12" />
    </PageShell>
  );
}

function EditableComponentRow({
  row,
  onMonthlyCommit,
}: {
  row: SalaryComponent;
  onMonthlyCommit: (id: string, monthly: number) => void;
}) {
  const isDeduction = row.type === "deduction";
  const typeBadge = {
    earning: "bg-emerald-50 text-emerald-700 border-0",
    deduction: "bg-danger-50 text-danger-600 border-0",
    "tax-free": "bg-teal-50 text-teal-700 border-0",
  }[row.type];

  const typeLabel = {
    earning: "EARNING",
    deduction: "DEDUCTION",
    "tax-free": "TAX FREE",
  }[row.type];

  return (
    <TableRow className="border-navy-100">
      <TableCell className="pl-4 font-medium text-navy-800">{row.name}</TableCell>
      <TableCell className="p-2">
        <input
          key={`${row.id}-${row.monthlyValue}`}
          type="text"
          inputMode="numeric"
          defaultValue={String(row.monthlyValue)}
          aria-label={`${row.name} monthly`}
          className={cn(
            "w-full min-w-[7rem] rounded-lg border border-navy-200 bg-white px-2 py-1.5 text-sm font-semibold tabular-nums outline-none focus:ring-2 focus:ring-teal-200",
            isDeduction && "text-danger-600",
            row.type === "tax-free" && "text-emerald-600"
          )}
          onBlur={(e) => {
            const raw = e.target.value.replace(/\D/g, "");
            const n = raw ? parseInt(raw, 10) : 0;
            if (n !== row.monthlyValue) onMonthlyCommit(row.id, n);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
        />
      </TableCell>
      <TableCell className="text-navy-600 tabular-nums">
        {formatCurrency(row.annualValue)}
      </TableCell>
      <TableCell>
        <Badge variant="secondary" className={cn("font-semibold", typeBadge)}>
          {typeLabel}
        </Badge>
      </TableCell>
      <TableCell className="text-right pr-4">
        {row.id === "pf" ? (
          <Info className="inline size-5 text-navy-400" aria-label="Info" />
        ) : (
          <CheckCircle2 className="inline size-5 text-emerald-500" aria-label="OK" />
        )}
      </TableCell>
    </TableRow>
  );
}

function BenchmarkBar({
  label,
  fillPercent,
  recommended,
}: {
  label: string;
  fillPercent: number;
  recommended: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-navy-800">{label}</span>
        <span className="text-navy-500">{recommended}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-navy-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-600 to-navy-700 transition-all"
          style={{ width: `${Math.min(100, fillPercent)}%` }}
        />
      </div>
    </div>
  );
}
