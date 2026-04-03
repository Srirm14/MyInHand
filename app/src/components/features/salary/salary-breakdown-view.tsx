"use client";

import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  startTransition,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Banknote,
  Info,
  PiggyBank,
  Plus,
  Receipt,
  Sparkles,
  Trash2,
  TrendingUp,
  Upload,
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SaveProgressCta } from "@/components/shared/save-progress-cta";
import { getSalaryComponentTooltip } from "@/lib/constants/salary-component-catalog";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type {
  SalaryBreakdownSection,
  SalaryComponent,
  SalaryComponentGroup,
} from "@/lib/types/salary.types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

const GROUP_TITLES: Record<SalaryComponentGroup, string> = {
  earnings: "Earnings & salary components",
  employer_contributions: "Employer contributions (CTC — not monthly cash)",
  deductions: "Deductions",
};

const GROUP_ORDER: SalaryComponentGroup[] = [
  "earnings",
  "employer_contributions",
  "deductions",
];

const TAG_LABELS: Record<string, string> = {
  employer_side: "Employer-side",
  one_time: "One-time",
  tax_sensitive: "Tax-sensitive",
  conditional: "Conditional",
  recurring: "Recurring",
};

export function SalaryBreakdownView() {
  const router = useRouter();
  const { toolHref } = useTieredPremiumLinks();
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const patchBreakdownComponent = useSalaryStore(
    (s) => s.patchBreakdownComponent
  );
  const addBreakdownAllowanceRow = useSalaryStore(
    (s) => s.addBreakdownAllowanceRow
  );
  const addBreakdownVariableRow = useSalaryStore(
    (s) => s.addBreakdownVariableRow
  );
  const removeBreakdownComponent = useSalaryStore(
    (s) => s.removeBreakdownComponent
  );
  const applyParsedSalaryDocument = useSalaryStore(
    (s) => s.applyParsedSalaryDocument
  );

  const fileRef = useRef<HTMLInputElement>(null);
  const [docBusy, setDocBusy] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);

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

  const earningsBySection = useMemo(() => {
    if (!breakdown) {
      return {
        fixed_core: [] as SalaryComponent[],
        allowance: [] as SalaryComponent[],
        variable_pay: [] as SalaryComponent[],
      };
    }
    const earnings = breakdown.components.filter((c) => c.group === "earnings");
    const pick = (section: SalaryBreakdownSection) =>
      earnings.filter((c) => c.section === section);
    return {
      fixed_core: pick("fixed_core"),
      allowance: pick("allowance"),
      variable_pay: pick("variable_pay"),
    };
  }, [breakdown]);

  const nonEarningsGroups = useMemo(() => {
    if (!breakdown) return [];
    const map = new Map<SalaryComponentGroup, SalaryComponent[]>();
    for (const g of GROUP_ORDER) map.set(g, []);
    for (const c of breakdown.components) {
      if (c.group !== "earnings") {
        map.get(c.group)?.push(c);
      }
    }
    return GROUP_ORDER.filter((g) => g !== "earnings")
      .map((group) => ({
        group,
        rows: map.get(group) ?? [],
      }))
      .filter((s) => s.rows.length > 0);
  }, [breakdown]);

  const fixedCashMonthly = useMemo(() => {
    if (!breakdown) return 0;
    return breakdown.components
      .filter(
        (c) =>
          c.group === "earnings" &&
          c.section !== "variable_pay"
      )
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown]);

  const variableCashMonthly = useMemo(() => {
    if (!breakdown) return 0;
    return breakdown.components
      .filter((c) => c.group === "earnings" && c.section === "variable_pay")
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown]);

  const deductionsMonthly = useMemo(() => {
    if (!breakdown) return 0;
    return breakdown.components
      .filter((c) => c.group === "deductions")
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown]);

  const employerMonthly = useMemo(() => {
    if (!breakdown) return 0;
    return breakdown.components
      .filter((c) => c.group === "employer_contributions")
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown]);

  const annualInHandExclVar = breakdown
    ? breakdown.monthlyInHandExcludingVariable * 12
    : 0;
  const annualInHandInclVar = breakdown
    ? breakdown.monthlyInHandIncludingVariable * 12
    : 0;

  const onStructureUpload = async (list: FileList | null) => {
    const file = list?.[0];
    if (!file) return;
    setDocError(null);
    setDocBusy(true);
    try {
      await applyParsedSalaryDocument(file);
    } catch {
      setDocError(
        "We couldn’t read that file. Try a clear PDF or image, or adjust rows manually below."
      );
    } finally {
      setDocBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

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
  const editBasis = breakdown.meta?.breakdownEditBasis;

  return (
    <PageShell className="py-8 md:py-10">
      <div className="mb-6 rounded-2xl border border-navy-200/60 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Upload className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-800">
                Upload salary structure
              </p>
              <p className="text-xs text-navy-500 mt-0.5 max-w-xl leading-relaxed">
                Replace this breakdown with a mock parse from your offer letter
                or payslip (same engine as the salary page). Verify numbers after
                upload.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch sm:items-end gap-2 shrink-0">
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,image/*,application/pdf"
              className="hidden"
              onChange={(e) => onStructureUpload(e.target.files)}
            />
            <Button
              type="button"
              variant="outline"
              disabled={docBusy}
              onClick={() => fileRef.current?.click()}
              className="rounded-full border-teal-200 text-teal-800 hover:bg-teal-50"
            >
              {docBusy ? "Reading…" : "Choose file"}
            </Button>
            {docError && (
              <p className="text-xs text-danger-600 text-right max-w-xs">
                {docError}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 space-y-3">
        {isDocument ? (
          <div className="rounded-xl border border-teal-200 bg-teal-50/90 px-4 py-3 text-sm text-navy-800">
            <span className="font-semibold text-teal-800">Document-based results</span>
            {breakdown.meta?.documentFileName && (
              <span className="text-navy-600">
                {" "}
                — parsed from{" "}
                <cite className="not-italic font-medium">
                  {breakdown.meta.documentFileName}
                </cite>
              </span>
            )}
            . Figures use the same tax engine with extracted CTC hints; confirm
            components against your letter before deciding.
          </div>
        ) : (
          <div className="rounded-xl border border-navy-200 bg-navy-50/80 px-4 py-3 text-sm text-navy-700">
            <span className="font-semibold text-navy-800">Estimated breakdown</span>{" "}
            — illustrative Indian payroll structure only. CTC includes
            employer contributions and accruals that are{" "}
            <strong className="font-semibold text-navy-800">not</strong> paid as
            monthly bank salary. Compare with your payslip for accuracy.
          </div>
        )}
        {breakdown.meta?.componentsAdjusted && (
          <div
            className={cn(
              "rounded-lg border px-3 py-2 text-xs leading-relaxed",
              editBasis === "user_edited_after_parse"
                ? "border-teal-200 bg-teal-50/80 text-teal-900"
                : "border-amber-200 bg-amber-50/80 text-amber-950"
            )}
          >
            <span className="font-semibold">Edited values applied</span>
            {editBasis === "user_edited_after_parse"
              ? " — started from your uploaded document; summaries and tax estimates now follow the table (formulas refresh lines you didn’t override)."
              : " — summaries, tax, PF-linked lines, and special allowance residual update live from your rows."}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <SectionHeader
            title="Salary Breakdown"
            subtitle="Fixed pay and allowances mirror common Indian CTC layouts — add or rename allowance lines to match your employer. Variable pay stays separate from predictable monthly in-hand. Info icons explain each row; not tax or legal advice."
          />
        </div>
        <div
          key={breakdown.monthlyInHand}
          className="rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm max-w-md lg:mt-4 transition-colors duration-200"
        >
          <div className="flex gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Sparkles className="size-5" />
            </div>
            <p className="text-sm text-navy-600 leading-relaxed">
              You take home about{" "}
              <span className="font-semibold text-navy-800">
                {breakdown.takeHomePercent}%
              </span>{" "}
              of stated CTC as estimated monthly in-hand{" "}
              <span className="font-medium text-navy-700">excluding variable pay</span>
              . Employer-only CTC lines and variable components are shown
              separately so the monthly view stays practical.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Est. monthly in-hand (excl. variable)"
          amount={breakdown.monthlyInHandExcludingVariable}
          sublabel={`~${formatCurrency(annualInHandExclVar)} / yr take-home`}
          sentiment="positive"
          icon={Banknote}
        />
        <StatCard
          label="Monthly in-hand (incl. variable)"
          amount={breakdown.monthlyInHandIncludingVariable}
          sublabel="If variable were spread ÷12 — illustrative"
          sentiment="positive"
          icon={TrendingUp}
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
          sublabel={`Employer CTC ~${formatCurrency(employerMonthly * 12)} / yr`}
          sentiment="neutral"
          icon={Receipt}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-navy-200/60 bg-navy-50/40 px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-500 mb-3">
          Annual cash &amp; CTC (from current rows)
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm tabular-nums">
          <div>
            <p className="text-navy-500 text-xs">Annual fixed salary (cash)</p>
            <p className="font-semibold text-navy-800">
              {formatCurrency(breakdown.annualFixedCashTotal)}
            </p>
          </div>
          <div>
            <p className="text-navy-500 text-xs">Annual variable pay (cash)</p>
            <p className="font-semibold text-navy-800">
              {formatCurrency(breakdown.annualVariableCashTotal)}
            </p>
          </div>
          <div>
            <p className="text-navy-500 text-xs">Total annual cash (fixed + variable)</p>
            <p className="font-semibold text-navy-800">
              {formatCurrency(breakdown.annualCashCompensation)}
            </p>
          </div>
          <div>
            <p className="text-navy-500 text-xs">Stated annual CTC (input)</p>
            <p className="font-semibold text-teal-800">
              {formatCurrency(breakdown.statedAnnualCTC)}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-navy-400 mt-3 leading-relaxed">
          Modeled package (earnings + employer lines):{" "}
          <span className="font-medium text-navy-600">
            {formatCurrency(breakdown.modeledAnnualPackage)}
          </span>
          . Edit rows above to align with your offer; summaries recalculate automatically.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-h3 text-navy-800">Component breakup</h2>
            <p className="text-xs text-navy-400 mt-1 max-w-2xl leading-relaxed">
              Edit monthly or annual on each line — the other field updates. Allowances
              and variable lines can be added or removed (where shown). Special
              allowance stays the residual to your stated CTC unless you override it.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
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
              <TableHead className="text-label text-navy-400 pl-4 w-[42%]">
                Component
              </TableHead>
              <TableHead className="text-label text-navy-400 text-right tabular-nums text-navy-600">
                Monthly (₹)
              </TableHead>
              <TableHead className="text-label text-navy-400 text-right tabular-nums">
                Annual (₹)
              </TableHead>
              <TableHead className="text-label text-navy-400 pr-4">
                Category
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <SectionTableHeaderRow
              title="Fixed salary components"
              subtitle="Basic, HRA, DA — recurring fixed heads before flexible allowances."
            />
            {earningsBySection.fixed_core.map((row) => (
              <EditableEarningRow
                key={row.id}
                row={row}
                patchComponent={patchBreakdownComponent}
              />
            ))}
            <GroupSubtotalRow
              rows={earningsBySection.fixed_core}
              label="Subtotal — fixed core"
            />

            <SectionTableHeaderRow
              title="Allowances"
              subtitle="Rename defaults or add rows (vehicle, washing, telephone, etc.). Remove optional lines if your employer does not use them."
            />
            {earningsBySection.allowance.map((row) => (
              <EditableEarningRow
                key={row.id}
                row={row}
                patchComponent={patchBreakdownComponent}
                onRemove={
                  row.removable ? removeBreakdownComponent : undefined
                }
              />
            ))}
            <AddComponentRowButton
              label="Add allowance"
              onClick={addBreakdownAllowanceRow}
            />
            <GroupSubtotalRow
              rows={earningsBySection.allowance}
              label="Subtotal — allowances"
            />

            <SectionTableHeaderRow
              title="Variable pay"
              subtitle="Performance bonus, variable CTC, joining / retention — kept out of predictable monthly in-hand."
            />
            {earningsBySection.variable_pay.length === 0 ? (
              <TableRow className="border-navy-100">
                <TableCell
                  colSpan={4}
                  className="pl-4 py-3 text-xs text-navy-500 leading-relaxed"
                >
                  No variable lines yet. Use{" "}
                  <span className="font-medium text-navy-700">
                    Add variable / bonus line
                  </span>{" "}
                  below, or enter a fixed + variable split on the salary page.
                </TableCell>
              </TableRow>
            ) : (
              earningsBySection.variable_pay.map((row) => (
                <EditableEarningRow
                  key={row.id}
                  row={row}
                  patchComponent={patchBreakdownComponent}
                  onRemove={
                    row.removable ? removeBreakdownComponent : undefined
                  }
                />
              ))
            )}
            <AddComponentRowButton
              label="Add variable / bonus line"
              onClick={addBreakdownVariableRow}
            />
            <GroupSubtotalRow
              rows={earningsBySection.variable_pay}
              label="Subtotal — variable pay"
            />

            {nonEarningsGroups.map(({ group, rows }) => (
              <Fragment key={group}>
                <SectionTableHeaderRow
                  title={GROUP_TITLES[group]}
                  subtitle={
                    group === "employer_contributions"
                      ? "In CTC — not modeled as monthly bank salary."
                      : "Statutory and payroll deductions from fixed monthly cash."
                  }
                />
                {rows.map((row) => (
                  <EditableSimpleComponentRow
                    key={row.id}
                    row={row}
                    onMonthlyChange={(id, v) =>
                      patchBreakdownComponent(id, { monthlyValue: v })
                    }
                  />
                ))}
                <GroupSubtotalRow rows={rows} />
              </Fragment>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50/40 px-4 py-4 text-sm text-navy-700">
          <p className="font-semibold text-navy-800 text-xs uppercase tracking-wide mb-2">
            Net in-hand (this model)
          </p>
          <div className="space-y-1.5 tabular-nums text-right sm:text-left">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">
                Fixed monthly cash (excl. variable pay)
              </span>
              <span className="font-semibold text-navy-800">
                {formatCurrency(fixedCashMonthly)}
              </span>
            </div>
            {variableCashMonthly > 0 && (
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-navy-500">
                  Variable pay (÷12 display only)
                </span>
                <span className="font-semibold text-navy-700">
                  {formatCurrency(variableCashMonthly)}
                </span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">Less deductions</span>
              <span className="font-semibold text-danger-600">
                −{formatCurrency(deductionsMonthly)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-2 border-t border-teal-100">
              <span className="font-semibold text-navy-800">
                Est. monthly in-hand (excl. variable)
              </span>
              <span className="font-bold text-teal-800 text-base">
                {formatCurrency(breakdown.monthlyInHandExcludingVariable)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">
                Monthly in-hand if variable ÷12 (illustrative)
              </span>
              <span className="font-semibold text-navy-800">
                {formatCurrency(breakdown.monthlyInHandIncludingVariable)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">
                Annual take-home excl. variable (×12)
              </span>
              <span className="font-semibold text-navy-800 tabular-nums">
                {formatCurrency(annualInHandExclVar)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">
                Annual take-home incl. variable (×12)
              </span>
              <span className="font-semibold text-navy-800 tabular-nums">
                {formatCurrency(annualInHandInclVar)}
              </span>
            </div>
            <p className="text-[11px] text-navy-400 pt-2 leading-relaxed text-left">
              Employer contributions are excluded from this cash path — they
              still count toward CTC. Variable pay is uneven in real life; ÷12 is
              only for comparison.
            </p>
          </div>
        </div>

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
          <p className="text-h3 text-navy-800 mb-2">Explore scenarios</p>
          <p className="mt-2 text-sm text-navy-500 leading-relaxed">
            Compare regimes, savings, and growth assumptions in the wealth
            forecast — numbers here are illustrative until you tune inputs.
          </p>
          <Link
            href={toolHref("forecast")}
            className="mt-4 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            Open forecast →
          </Link>
        </div>
      </div>

      <SaveProgressCta returnTo="/salary/breakdown" className="mt-12" />
    </PageShell>
  );
}

function GroupSubtotalRow({
  rows,
  label = "Subtotal",
}: {
  rows: SalaryComponent[];
  label?: string;
}) {
  const monthly = rows.reduce((s, r) => s + r.monthlyValue, 0);
  const annual = rows.reduce((s, r) => s + r.annualValue, 0);
  return (
    <TableRow className="border-navy-100 bg-navy-50/40 hover:bg-navy-50/40">
      <TableCell className="pl-4 py-2 text-xs font-semibold text-navy-600">
        {label}
      </TableCell>
      <TableCell className="text-right py-2 text-sm font-bold tabular-nums text-navy-800">
        {formatCurrency(monthly)}
      </TableCell>
      <TableCell className="text-right py-2 text-sm font-bold tabular-nums text-navy-800">
        {formatCurrency(annual)}
      </TableCell>
      <TableCell className="pr-4" />
    </TableRow>
  );
}

function sectionInHandNote(row: SalaryComponent): string {
  if (row.section === "variable_pay") {
    return "Excluded from “monthly in-hand (excluding variable pay)”; included in annual package views.";
  }
  if (row.group === "employer_contributions") {
    return "Employer-side CTC only — not modeled as monthly bank salary.";
  }
  if (row.group === "deductions") {
    return "Reduces monthly in-hand after fixed gross.";
  }
  return "Counts toward fixed monthly cash before deductions.";
}

function provenanceLine(row: SalaryComponent): string {
  if (row.lineSource === "user_edited") {
    return "You edited this line; linked formula rows may refresh until you override them too.";
  }
  if (row.lineSource === "parsed") {
    return "Parsed from your upload — verify against the original document.";
  }
  return "Model estimate — adjust to match your offer or payslip.";
}

function fixedOrVariableLabel(row: SalaryComponent): string {
  if (row.section === "variable_pay") return "Variable / conditional (not fixed monthly)";
  if (row.tags?.includes("conditional")) return "May be conditional or employer-specific";
  return "Fixed recurring (in this structure)";
}

function ComponentTooltipBody({
  row,
}: {
  row: SalaryComponent;
}) {
  const tip =
    getSalaryComponentTooltip(row.id) ?? {
      summary: row.description,
      classification: "See type badge for category.",
      cashImpact:
        row.group === "employer_contributions"
          ? "Counted in CTC; not modeled as monthly cash in-hand."
          : row.group === "deductions"
            ? "Reduces monthly in-hand."
            : "Contributes to monthly cash inflow in this estimate.",
      applicability: "Employers differ; confirm on your payslip or HR letter.",
    };

  return (
    <div className="max-w-xs space-y-2 text-left font-sans font-normal normal-case text-white">
      <p className="text-xs leading-relaxed text-white/95">{tip.summary}</p>
      <p className="text-[11px] text-white/85">
        <span className="font-semibold text-white">Fixed vs variable: </span>
        {fixedOrVariableLabel(row)}
      </p>
      <p className="text-[11px] text-white/85">
        <span className="font-semibold text-white">Type: </span>
        {tip.classification}
      </p>
      <p className="text-[11px] text-white/85">
        <span className="font-semibold text-white">Monthly in-hand: </span>
        {sectionInHandNote(row)}
      </p>
      <p className="text-[11px] text-white/85">
        <span className="font-semibold text-white">Cash & CTC: </span>
        {tip.cashImpact}
      </p>
      {tip.calculationNote && (
        <p className="text-[11px] text-white/80 border-t border-white/20 pt-2">
          <span className="font-semibold">Model: </span>
          {tip.calculationNote}
        </p>
      )}
      <p className="text-[11px] text-white/75 border-t border-white/20 pt-2">
        <span className="font-semibold text-white">Source: </span>
        {provenanceLine(row)}
      </p>
      <p className="text-[11px] text-white/75">{tip.applicability}</p>
    </div>
  );
}

function SectionTableHeaderRow({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <TableRow className="border-navy-100 bg-navy-50/70 hover:bg-navy-50/70">
      <TableCell colSpan={4} className="py-3 pl-4">
        <p className="font-semibold text-[11px] uppercase tracking-wide text-navy-500">
          {title}
        </p>
        {subtitle ? (
          <p className="text-[11px] text-navy-400 mt-1 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </TableCell>
    </TableRow>
  );
}

function AddComponentRowButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <TableRow className="border-navy-100/80 border-dashed">
      <TableCell colSpan={4} className="py-1.5 pl-3">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onClick}
          className="h-8 rounded-full text-teal-700 hover:bg-teal-50 hover:text-teal-800 -ml-1"
        >
          <Plus className="size-4 mr-1 shrink-0" strokeWidth={2} />
          {label}
        </Button>
      </TableCell>
    </TableRow>
  );
}

type PatchFn = (
  id: string,
  patch: { monthlyValue?: number; annualValue?: number; name?: string }
) => void;

function EditableEarningRow({
  row,
  patchComponent,
  onRemove,
}: {
  row: SalaryComponent;
  patchComponent: PatchFn;
  onRemove?: (id: string) => void;
}) {
  const typeBadge = {
    earning: "bg-emerald-50 text-emerald-700 border-0",
    deduction: "bg-danger-50 text-danger-600 border-0",
    "tax-free": "bg-teal-50 text-teal-700 border-0",
    employer: "bg-navy-100 text-navy-700 border-0",
  }[row.type];

  const typeLabel = {
    earning: "Earning",
    deduction: "Deduction",
    "tax-free": "Tax-free (cash)",
    employer: "Employer (CTC)",
  }[row.type];

  const sourceBadge = {
    estimated: "bg-navy-100 text-navy-600",
    parsed: "bg-teal-100 text-teal-800",
    user_edited: "bg-amber-50 text-amber-800",
  }[row.lineSource];

  const sourceLabel = {
    estimated: "Estimated",
    parsed: "Parsed",
    user_edited: "Override",
  }[row.lineSource];

  const [monthlyText, setMonthlyText] = useState(() =>
    row.monthlyValue === 0 ? "" : String(row.monthlyValue)
  );
  const [annualText, setAnnualText] = useState(() =>
    row.annualValue === 0 ? "" : String(row.annualValue)
  );
  const [nameText, setNameText] = useState(row.name);

  const monthlyFocusedRef = useRef(false);
  const annualFocusedRef = useRef(false);
  const monthlyDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const annualDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (monthlyFocusedRef.current) return;
    const next = row.monthlyValue === 0 ? "" : String(row.monthlyValue);
    startTransition(() => setMonthlyText(next));
  }, [row.monthlyValue]);

  useEffect(() => {
    if (annualFocusedRef.current) return;
    const next = row.annualValue === 0 ? "" : String(row.annualValue);
    startTransition(() => setAnnualText(next));
  }, [row.annualValue]);

  useEffect(
    () => () => {
      if (monthlyDebounceRef.current) clearTimeout(monthlyDebounceRef.current);
      if (annualDebounceRef.current) clearTimeout(annualDebounceRef.current);
    },
    []
  );

  const flushMonthly = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    const n = digits ? parseInt(digits, 10) : 0;
    if (n !== row.monthlyValue) patchComponent(row.id, { monthlyValue: n });
  };

  const flushAnnual = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    const n = digits ? parseInt(digits, 10) : 0;
    if (n !== row.annualValue) patchComponent(row.id, { annualValue: n });
  };

  const showRemove = Boolean(onRemove && row.removable);

  return (
    <TableRow
      className={cn(
        "border-navy-100 align-top",
        row.isCustom && "bg-teal-50/20"
      )}
    >
      <TableCell className="pl-4 py-3">
        <div className="flex items-start gap-2">
          <div className="flex shrink-0 flex-col gap-0.5 pt-0.5">
            <Tooltip>
              <TooltipTrigger
                type="button"
                className="rounded-full p-0.5 text-navy-400 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label={`About ${row.name}`}
              >
                <Info className="size-4" strokeWidth={2} />
              </TooltipTrigger>
              <TooltipContent
                side="right"
                align="start"
                className="max-w-sm border-0 bg-navy-900 px-3 py-2.5 text-background shadow-lg"
              >
                <ComponentTooltipBody row={row} />
              </TooltipContent>
            </Tooltip>
            {showRemove ? (
              <button
                type="button"
                className="rounded-full p-0.5 text-navy-300 hover:text-danger-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label={`Remove ${row.name}`}
                onClick={() => onRemove!(row.id)}
              >
                <Trash2 className="size-4" strokeWidth={2} />
              </button>
            ) : null}
          </div>
          <div className="min-w-0 space-y-1 flex-1">
            {row.isCustom ? (
              <input
                type="text"
                value={nameText}
                aria-label="Component name"
                className="w-full max-w-md rounded-lg border border-navy-200 bg-white px-2 py-1 text-sm font-medium text-navy-800 outline-none focus:ring-2 focus:ring-teal-200"
                onBlur={() => {
                  patchComponent(row.id, {
                    name: nameText.trim() || row.name,
                  });
                }}
                onChange={(e) => setNameText(e.target.value)}
              />
            ) : (
              <span className="font-medium text-navy-800 leading-snug block">
                {row.name}
              </span>
            )}
            <p className="text-[11px] text-navy-500 leading-snug">
              {row.description}
            </p>
            {row.isCustom ? (
              <p className="text-[10px] text-navy-400">
                Custom line — rename to match your payslip.
              </p>
            ) : null}
            <div className="flex flex-wrap gap-1 pt-1">
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",
                  sourceBadge
                )}
              >
                {sourceLabel}
              </span>
              {row.isCustom ? (
                <span className="text-[10px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                  Custom row
                </span>
              ) : null}
              {row.tags?.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium text-navy-500 bg-navy-100/80 px-2 py-0.5 rounded-full"
                >
                  {TAG_LABELS[t] ?? t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="p-2 align-middle text-right bg-teal-50/15">
        <input
          type="text"
          inputMode="numeric"
          value={monthlyText}
          aria-label={`${row.name} monthly`}
          className={cn(
            "w-full min-w-[6.5rem] rounded-lg border border-navy-200 bg-white px-2 py-1.5 text-sm font-semibold tabular-nums outline-none focus:ring-2 focus:ring-teal-200 ml-auto block text-right",
            row.type === "tax-free" && "text-emerald-700"
          )}
          onFocus={() => {
            monthlyFocusedRef.current = true;
          }}
          onBlur={(e) => {
            if (monthlyDebounceRef.current) {
              clearTimeout(monthlyDebounceRef.current);
              monthlyDebounceRef.current = null;
            }
            monthlyFocusedRef.current = false;
            const v = e.target.value.replace(/\D/g, "");
            const n = v ? parseInt(v, 10) : 0;
            setMonthlyText(n === 0 ? "" : String(n));
            flushMonthly(e.target.value);
          }}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "");
            setMonthlyText(v);
            if (monthlyDebounceRef.current)
              clearTimeout(monthlyDebounceRef.current);
            monthlyDebounceRef.current = setTimeout(() => {
              monthlyDebounceRef.current = null;
              flushMonthly(v);
            }, 140);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
        />
      </TableCell>
      <TableCell className="p-2 align-middle text-right bg-teal-50/10">
        <input
          type="text"
          inputMode="numeric"
          value={annualText}
          aria-label={`${row.name} annual`}
          className="w-full min-w-[6.5rem] rounded-lg border border-navy-200 bg-white px-2 py-1.5 text-sm font-semibold tabular-nums text-navy-800 outline-none focus:ring-2 focus:ring-teal-200 ml-auto block text-right"
          onFocus={() => {
            annualFocusedRef.current = true;
          }}
          onBlur={(e) => {
            if (annualDebounceRef.current) {
              clearTimeout(annualDebounceRef.current);
              annualDebounceRef.current = null;
            }
            annualFocusedRef.current = false;
            const v = e.target.value.replace(/\D/g, "");
            const n = v ? parseInt(v, 10) : 0;
            setAnnualText(n === 0 ? "" : String(n));
            flushAnnual(e.target.value);
          }}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "");
            setAnnualText(v);
            if (annualDebounceRef.current)
              clearTimeout(annualDebounceRef.current);
            annualDebounceRef.current = setTimeout(() => {
              annualDebounceRef.current = null;
              flushAnnual(v);
            }, 140);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
        />
      </TableCell>
      <TableCell className="pr-4 align-middle">
        <Badge variant="secondary" className={cn("font-semibold text-[10px]", typeBadge)}>
          {typeLabel}
        </Badge>
      </TableCell>
    </TableRow>
  );
}

function EditableSimpleComponentRow({
  row,
  onMonthlyChange,
}: {
  row: SalaryComponent;
  onMonthlyChange: (id: string, monthly: number) => void;
}) {
  const isDeduction = row.type === "deduction";
  const typeBadge = {
    earning: "bg-emerald-50 text-emerald-700 border-0",
    deduction: "bg-danger-50 text-danger-600 border-0",
    "tax-free": "bg-teal-50 text-teal-700 border-0",
    employer: "bg-navy-100 text-navy-700 border-0",
  }[row.type];

  const typeLabel = {
    earning: "Earning",
    deduction: "Deduction",
    "tax-free": "Tax-free (cash)",
    employer: "Employer (CTC)",
  }[row.type];

  const sourceBadge = {
    estimated: "bg-navy-100 text-navy-600",
    parsed: "bg-teal-100 text-teal-800",
    user_edited: "bg-amber-50 text-amber-800",
  }[row.lineSource];

  const sourceLabel = {
    estimated: "Estimated",
    parsed: "Parsed",
    user_edited: "Override",
  }[row.lineSource];

  const [text, setText] = useState(() =>
    row.monthlyValue === 0 ? "" : String(row.monthlyValue)
  );
  const focusedRef = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (focusedRef.current) return;
    const next = row.monthlyValue === 0 ? "" : String(row.monthlyValue);
    startTransition(() => setText(next));
  }, [row.monthlyValue]);

  useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    },
    []
  );

  const flushCommit = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    const n = digits ? parseInt(digits, 10) : 0;
    if (n !== row.monthlyValue) onMonthlyChange(row.id, n);
  };

  return (
    <TableRow className="border-navy-100 align-top">
      <TableCell className="pl-4 py-3">
        <div className="flex items-start gap-2">
          <Tooltip>
            <TooltipTrigger
              type="button"
              className="mt-0.5 shrink-0 rounded-full p-0.5 text-navy-400 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label={`About ${row.name}`}
            >
              <Info className="size-4" strokeWidth={2} />
            </TooltipTrigger>
            <TooltipContent
              side="right"
              align="start"
              className="max-w-sm border-0 bg-navy-900 px-3 py-2.5 text-background shadow-lg"
            >
              <ComponentTooltipBody row={row} />
            </TooltipContent>
          </Tooltip>
          <div className="min-w-0 space-y-1">
            <span className="font-medium text-navy-800 leading-snug block">
              {row.name}
            </span>
            <p className="text-[11px] text-navy-500 leading-snug">
              {row.description}
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",
                  sourceBadge
                )}
              >
                {sourceLabel}
              </span>
              {row.tags?.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium text-navy-500 bg-navy-100/80 px-2 py-0.5 rounded-full"
                >
                  {TAG_LABELS[t] ?? t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="p-2 align-middle text-right bg-teal-50/15">
        <input
          type="text"
          inputMode="numeric"
          value={text}
          aria-label={`${row.name} monthly`}
          className={cn(
            "w-full min-w-[6.5rem] rounded-lg border border-navy-200 bg-white px-2 py-1.5 text-sm font-semibold tabular-nums outline-none focus:ring-2 focus:ring-teal-200 ml-auto block text-right",
            isDeduction && "text-danger-600",
            row.type === "tax-free" && "text-emerald-700",
            row.type === "employer" && "text-navy-700"
          )}
          onFocus={() => {
            focusedRef.current = true;
          }}
          onBlur={(e) => {
            if (debounceRef.current) {
              clearTimeout(debounceRef.current);
              debounceRef.current = null;
            }
            focusedRef.current = false;
            const v = e.target.value.replace(/\D/g, "");
            const n = v ? parseInt(v, 10) : 0;
            setText(n === 0 ? "" : String(n));
            flushCommit(e.target.value);
          }}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "");
            setText(v);
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
              debounceRef.current = null;
              flushCommit(v);
            }, 140);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
        />
      </TableCell>
      <TableCell className="text-navy-700 tabular-nums text-right align-middle font-medium">
        {formatCurrency(row.annualValue)}
      </TableCell>
      <TableCell className="pr-4 align-middle">
        <Badge variant="secondary" className={cn("font-semibold text-[10px]", typeBadge)}>
          {typeLabel}
        </Badge>
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
