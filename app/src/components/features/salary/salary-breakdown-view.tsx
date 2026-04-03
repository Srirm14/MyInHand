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
  Receipt,
  Sparkles,
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
  const updateBreakdownComponentMonthly = useSalaryStore(
    (s) => s.updateBreakdownComponentMonthly
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

  const grouped = useMemo(() => {
    if (!breakdown) return [];
    const map = new Map<SalaryComponentGroup, SalaryComponent[]>();
    for (const g of GROUP_ORDER) map.set(g, []);
    for (const c of breakdown.components) {
      map.get(c.group)?.push(c);
    }
    return GROUP_ORDER.map((group) => ({
      group,
      rows: map.get(group) ?? [],
    })).filter((s) => s.rows.length > 0);
  }, [breakdown]);

  const cashMonthly = useMemo(() => {
    if (!breakdown) return 0;
    return breakdown.components
      .filter((c) => c.group === "earnings")
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

  const annualInHand = breakdown ? breakdown.monthlyInHand * 12 : 0;

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
            subtitle="Grouped earnings, employer CTC items, and deductions. Hover the info icon on each line for plain-language context — not tax or legal advice."
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
              of stated CTC in this model — employer-only lines (e.g. employer
              PF, gratuity accrual) sit in CTC but outside monthly cash in-hand.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <StatCard
          label="Monthly In-hand"
          amount={breakdown.monthlyInHand}
          sublabel={`~${formatCurrency(annualInHand)} / yr`}
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
          sublabel={`Employer CTC slice ~${formatCurrency(employerMonthly * 12)} / yr`}
          sentiment="neutral"
          icon={Receipt}
        />
      </div>

      <div className="mt-10 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-h3 text-navy-800">Component breakup</h2>
            <p className="text-xs text-navy-400 mt-1 max-w-xl leading-relaxed">
              Amounts update in real time. Annual column is ×12 from monthly.
              Formulas refresh linked lines unless you override them (badge:
              Override).
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
              <TableHead className="text-label text-navy-400 pl-4 w-[40%]">
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
            {grouped.map(({ group, rows }) => (
              <Fragment key={group}>
                <TableRow className="border-navy-100 bg-navy-50/60 hover:bg-navy-50/60">
                  <TableCell
                    colSpan={4}
                    className="py-3 pl-4 font-semibold text-[11px] uppercase tracking-wide text-navy-500"
                  >
                    {GROUP_TITLES[group]}
                  </TableCell>
                </TableRow>
                {rows.map((row) => (
                  <EditableComponentRow
                    key={row.id}
                    row={row}
                    onMonthlyChange={(id, v) =>
                      updateBreakdownComponentMonthly(id, v)
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
                Monthly cash from earnings (incl. reimbursements)
              </span>
              <span className="font-semibold text-navy-800">
                {formatCurrency(cashMonthly)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">Less deductions</span>
              <span className="font-semibold text-danger-600">
                −{formatCurrency(deductionsMonthly)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-2 border-t border-teal-100">
              <span className="font-semibold text-navy-800">
                ≈ Monthly in-hand
              </span>
              <span className="font-bold text-teal-800 text-base">
                {formatCurrency(breakdown.monthlyInHand)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-navy-500">Annual in-hand (×12)</span>
              <span className="font-semibold text-navy-800 tabular-nums">
                {formatCurrency(annualInHand)}
              </span>
            </div>
            <p className="text-[11px] text-navy-400 pt-2 leading-relaxed text-left">
              Employer contributions (middle group) are excluded from this cash
              path — they still count toward CTC and long-term benefits.
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

function GroupSubtotalRow({ rows }: { rows: SalaryComponent[] }) {
  const monthly = rows.reduce((s, r) => s + r.monthlyValue, 0);
  const annual = rows.reduce((s, r) => s + r.annualValue, 0);
  return (
    <TableRow className="border-navy-100 bg-navy-50/40 hover:bg-navy-50/40">
      <TableCell className="pl-4 py-2 text-xs font-semibold text-navy-600">
        Subtotal
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
        <span className="font-semibold text-white">Type: </span>
        {tip.classification}
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
        {tip.applicability}
      </p>
    </div>
  );
}

function EditableComponentRow({
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
