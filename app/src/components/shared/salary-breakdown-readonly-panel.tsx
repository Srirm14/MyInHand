"use client";

import { useMemo, type ReactNode } from "react";
import {
  Banknote,
  Info,
  PiggyBank,
  Receipt,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { CashPathInteractiveRow } from "@/components/shared/cash-path-interactive-row";
import { StatCard } from "@/components/shared/stat-card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
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
import {
  buildBreakdownAccordionSectionIds,
  salaryAccordionSectionTotals,
  SalaryBreakdownAccordionProvider,
  SalaryBreakdownAccordionSection,
  SalaryBreakdownAccordionToolbar,
  SalaryBreakdownTableColgroup,
} from "@/components/shared/salary-breakdown-accordion";
import { getSalaryComponentTooltip } from "@/lib/constants/salary-component-catalog";
import type {
  SalaryBreakdown,
  SalaryBreakdownSection,
  SalaryComponent,
  SalaryComponentGroup,
} from "@/lib/types/salary.types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";
import { splitInrFormattedParts } from "@/components/ui/inr-money-input";

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

export type SalaryBreakdownReadonlyInsights = {
  leadMonthlyInHand?: boolean;
  leadFirstYearValue?: boolean;
  deltaMonthlyVsBest?: number;
  deltaFirstYearVsBest?: number;
  /** This offer’s annual variable cash vs max peer (same field from engine) */
  annualVariableCashTotal?: number;
  peerMaxVariableCashAnnual?: number;
  employerContributionsAnnual?: number;
  peerMaxEmployerAnnual?: number;
};

function InrStaticAmount({
  amount,
  emphasis = "md",
  variant = "default",
}: {
  amount: number;
  emphasis?: "md" | "lg";
  variant?: "default" | "danger";
}) {
  const { whole, decimals } = splitInrFormattedParts(amount);
  const sym = variant === "danger" ? "text-danger-400" : "text-navy-400";
  const main =
    variant === "danger"
      ? emphasis === "lg"
        ? "text-base font-bold text-danger-700"
        : "text-sm font-bold text-danger-700"
      : emphasis === "lg"
        ? "text-base font-bold text-navy-800"
        : "text-sm font-bold text-navy-800";
  const dec =
    variant === "danger"
      ? "text-[11px] font-medium text-danger-400"
      : "text-[11px] font-medium text-navy-400";
  return (
    <span className="tabular-nums tracking-tight">
      <span className={cn("text-[11px] font-semibold", sym)}>₹</span>
      <span className={main}>{whole}</span>
      <span className={dec}>{decimals}</span>
    </span>
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
    <TableRow className="border-b border-navy-100/60 bg-navy-50/45 hover:bg-navy-50/55">
      <TableCell className="pl-5 py-2.5 text-xs font-semibold tracking-wide text-navy-500">
        {label}
      </TableCell>
      <TableCell className="py-2.5 text-right">
        <InrStaticAmount amount={monthly} emphasis="lg" />
      </TableCell>
      <TableCell className="py-2.5 text-right">
        <InrStaticAmount amount={annual} emphasis="lg" />
      </TableCell>
      <TableCell className="pr-5" />
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
    return "You set this figure; linked lines may still move until you adjust them too.";
  }
  if (row.lineSource === "parsed") {
    return "Carried from your upload — spot-check against the file.";
  }
  return "Model default — align with your offer or payslip.";
}

function fixedOrVariableLabel(row: SalaryComponent): string {
  if (row.section === "variable_pay")
    return "Variable / conditional (not fixed monthly)";
  if (row.tags?.includes("conditional"))
    return "May be conditional or employer-specific";
  return "Fixed recurring (in this structure)";
}

function ComponentTooltipBody({ row }: { row: SalaryComponent }) {
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

function ReadonlyEarningRow({ row }: { row: SalaryComponent }) {
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
    parsed: "From doc",
    user_edited: "Adjusted",
  }[row.lineSource];

  const inrFieldClass =
    row.type === "tax-free" ? "text-emerald-800" : undefined;

  return (
    <TableRow
      className={cn(
        "group/erow border-b border-navy-100/60 align-top transition-colors duration-200 hover:bg-white/80",
        row.isCustom && "bg-teal-50/[0.18]"
      )}
    >
      <TableCell className="pl-5 py-3.5">
        <div className="flex items-start gap-2">
          <div className="flex shrink-0 pt-0.5">
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
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <span className="font-medium text-navy-800 leading-snug block">
              {row.name}
            </span>
            <p className="text-[11px] leading-snug text-navy-500/95">
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
      <TableCell
        className={cn(
          "bg-white/40 px-2 py-3 align-middle text-right group-hover/erow:bg-white/70",
          inrFieldClass
        )}
      >
        <InrStaticAmount amount={row.monthlyValue} emphasis="md" />
      </TableCell>
      <TableCell
        className={cn(
          "bg-white/30 px-2 py-3 align-middle text-right group-hover/erow:bg-white/65",
          inrFieldClass
        )}
      >
        <InrStaticAmount amount={row.annualValue} emphasis="md" />
      </TableCell>
      <TableCell className="pr-5 align-middle">
        <div className="flex justify-end">
          <Badge
            variant="secondary"
            className={cn("font-semibold text-[10px]", typeBadge)}
          >
            {typeLabel}
          </Badge>
        </div>
      </TableCell>
    </TableRow>
  );
}

function ReadonlySimpleRow({ row }: { row: SalaryComponent }) {
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
    parsed: "From doc",
    user_edited: "Adjusted",
  }[row.lineSource];

  return (
    <TableRow className="group/srow border-b border-navy-100/60 align-top transition-colors duration-200 hover:bg-white/70">
      <TableCell className="pl-5 py-3.5">
        <div className="flex items-start gap-2">
          <Tooltip>
            <TooltipTrigger
              type="button"
              className="mt-0.5 shrink-0 rounded-full p-0.5 text-navy-400 transition-colors hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
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
            <p className="text-[11px] leading-snug text-navy-500/95">
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
      <TableCell className="bg-white/40 px-2 py-3 align-middle text-right group-hover/srow:bg-white/80">
        <InrStaticAmount
          amount={row.monthlyValue}
          emphasis="md"
          variant={isDeduction ? "danger" : "default"}
        />
      </TableCell>
      <TableCell className="px-2 py-3 align-middle text-right">
        <span className="inline-flex min-w-[7.5rem] justify-end">
          <InrStaticAmount
            amount={row.annualValue}
            emphasis="md"
            variant={isDeduction ? "danger" : "default"}
          />
        </span>
      </TableCell>
      <TableCell className="pr-5 align-middle">
        <div className="flex justify-end">
          <Badge
            variant="secondary"
            className={cn("font-semibold text-[10px]", typeBadge)}
          >
            {typeLabel}
          </Badge>
        </div>
      </TableCell>
    </TableRow>
  );
}

export function ComparisonInsightStrip({
  insights,
}: {
  insights: SalaryBreakdownReadonlyInsights;
}) {
  type InsightLine = { id: string; node: ReactNode };
  const lines: InsightLine[] = [];
  if (insights.leadMonthlyInHand) {
    lines.push({
      id: "lead-monthly",
      node: (
        <span className="text-teal-800 font-medium">
          Leads on monthly in-hand (fixed cash path) in this set.
        </span>
      ),
    });
  } else if (
    insights.deltaMonthlyVsBest !== undefined &&
    insights.deltaMonthlyVsBest < 0
  ) {
    lines.push({
      id: "delta-monthly",
      node: (
        <span className="text-navy-600">
          {formatCurrency(Math.abs(insights.deltaMonthlyVsBest))}/mo below the
          best in-hand here.
        </span>
      ),
    });
  }
  if (insights.leadFirstYearValue) {
    lines.push({
      id: "lead-1y",
      node: (
        <span className="text-emerald-800 font-medium">
          Leads on first-year score (table formula).
        </span>
      ),
    });
  } else if (
    insights.deltaFirstYearVsBest !== undefined &&
    insights.deltaFirstYearVsBest < 0
  ) {
    lines.push({
      id: "delta-1y",
      node: (
        <span className="text-navy-600">
          {formatCurrency(Math.abs(insights.deltaFirstYearVsBest))} below the
          best first-year value in this set.
        </span>
      ),
    });
  }
  const v = insights.annualVariableCashTotal ?? 0;
  const vmax = insights.peerMaxVariableCashAnnual ?? 0;
  if (vmax > 0 && v === vmax) {
    lines.push({
      id: "max-variable",
      node: (
        <span className="text-navy-600">
          Largest variable cash slice in this comparison — confirm what is
          guaranteed vs target-based.
        </span>
      ),
    });
  }
  const e = insights.employerContributionsAnnual ?? 0;
  const emax = insights.peerMaxEmployerAnnual ?? 0;
  if (emax > 0 && e === emax && e > 0) {
    lines.push({
      id: "max-employer",
      node: (
        <span className="text-navy-600">
          Largest employer-side CTC block here — inflates package vs bank
          salary.
        </span>
      ),
    });
  }
  if (lines.length === 0) return null;
  return (
    <div className="mb-4 rounded-xl border border-teal-100/80 bg-teal-50/30 px-4 py-3 text-[12px] leading-relaxed text-navy-700">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-500 mb-2">
        Versus other offers
      </p>
      <ul className="list-disc pl-4 space-y-1 marker:text-teal-500">
        {lines.map((line) => (
          <li key={line.id}>{line.node}</li>
        ))}
      </ul>
    </div>
  );
}

export function SalaryBreakdownReadonlyPanel({
  breakdown,
  taxRegime,
  companyLabel,
  comparisonInsights,
  topNote,
}: {
  breakdown: SalaryBreakdown;
  taxRegime: "old" | "new";
  companyLabel?: string;
  comparisonInsights?: SalaryBreakdownReadonlyInsights;
  /** Pass `null` to hide the default comparability note. */
  topNote?: ReactNode | null;
}) {
  const regimeLabel = taxRegime === "old" ? "Old Regime" : "New Regime";

  const earningsBySection = useMemo(() => {
    const earnings = breakdown.components.filter((c) => c.group === "earnings");
    const pick = (section: SalaryBreakdownSection) =>
      earnings.filter((c) => c.section === section);
    return {
      fixed_core: pick("fixed_core"),
      allowance: pick("allowance"),
      variable_pay: pick("variable_pay"),
    };
  }, [breakdown.components]);

  const nonEarningsGroups = useMemo(() => {
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
  }, [breakdown.components]);

  const accordionSectionIds = useMemo(
    () => buildBreakdownAccordionSectionIds(nonEarningsGroups),
    [nonEarningsGroups]
  );

  const fixedCashMonthly = useMemo(() => {
    return breakdown.components
      .filter(
        (c) => c.group === "earnings" && c.section !== "variable_pay"
      )
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown.components]);

  const variableCashMonthly = useMemo(() => {
    return breakdown.components
      .filter((c) => c.group === "earnings" && c.section === "variable_pay")
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown.components]);

  const deductionsMonthly = useMemo(() => {
    return breakdown.components
      .filter((c) => c.group === "deductions")
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown.components]);

  const employerMonthly = useMemo(() => {
    return breakdown.components
      .filter((c) => c.group === "employer_contributions")
      .reduce((s, c) => s + c.monthlyValue, 0);
  }, [breakdown.components]);

  const annualInHandExclVar =
    breakdown.monthlyInHandExcludingVariable * 12;
  const annualInHandInclVar =
    breakdown.monthlyInHandIncludingVariable * 12;

  const employerContributionsAnnual = useMemo(() => {
    return breakdown.components
      .filter((c) => c.group === "employer_contributions")
      .reduce((s, c) => s + c.annualValue, 0);
  }, [breakdown.components]);

  const defaultNote = (
    <p className="text-xs text-navy-500 leading-relaxed max-w-3xl">
      Same salary engine and line structure as{" "}
      <span className="font-medium text-navy-700">Salary Breakdown</span> —
      numbers are directly comparable. Edit inputs in the offer card above.
    </p>
  );

  return (
    <div className="space-y-5 text-[13px] leading-snug">
      <div className="space-y-2">
        {companyLabel ? (
          <h3 className="text-h3 text-navy-800">{companyLabel}</h3>
        ) : null}
        {topNote === null ? null : topNote !== undefined ? topNote : defaultNote}
      </div>

      {comparisonInsights ? (
        <ComparisonInsightStrip insights={comparisonInsights} />
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Monthly in-hand · excl. variable"
          amount={breakdown.monthlyInHandExcludingVariable}
          sublabel={`~${formatCurrency(annualInHandExclVar)} / yr`}
          sentiment="positive"
          icon={Banknote}
        />
        <StatCard
          label="Monthly in-hand · incl. variable"
          amount={breakdown.monthlyInHandIncludingVariable}
          sublabel="÷12 spread — illustrative only"
          sentiment="positive"
          icon={TrendingUp}
        />
        <StatCard
          label="Est. income tax (TDS)"
          amount={breakdown.annualIncomeTax}
          sublabel={regimeLabel}
          sentiment="negative"
          icon={PiggyBank}
        />
        <StatCard
          label="Monthly deductions"
          amount={breakdown.totalMonthlyDeductions}
          sublabel={`Employer CTC ~${formatCurrency(employerMonthly * 12)} / yr`}
          sentiment="neutral"
          icon={Receipt}
        />
      </div>

      <div className="rounded-xl border border-navy-200/50 bg-white px-4 py-3 shadow-sm">
        <div className="flex gap-2.5 items-start">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
            <Sparkles className="size-4" strokeWidth={2} />
          </div>
          <p className="text-[13px] leading-snug text-navy-600">
            <span className="font-semibold tabular-nums text-navy-800">
              {breakdown.takeHomePercent}%
            </span>{" "}
            of stated CTC as est. monthly in-hand,{" "}
            <span className="font-medium text-navy-700">before variable</span>.
            Employer-only and variable lines are broken out below.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-navy-200/50 bg-white px-4 py-3 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-400 mb-1">
          Annual picture
        </p>
        <p className="text-xs text-navy-500 mb-3 max-w-3xl leading-relaxed">
          Fixed vs variable cash, then how it compares to stated CTC — same
          rollup as Salary Breakdown.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div className="rounded-lg bg-navy-50/50 px-3 py-2 ring-1 ring-navy-100/80">
            <p className="text-[11px] font-medium text-navy-500">
              Annual fixed (cash)
            </p>
            <p className="mt-0.5 text-base font-semibold tabular-nums text-navy-800">
              {formatCurrency(breakdown.annualFixedCashTotal)}
            </p>
          </div>
          <div className="rounded-lg bg-navy-50/50 px-3 py-2 ring-1 ring-navy-100/80">
            <p className="text-[11px] font-medium text-navy-500">
              Annual variable (cash)
            </p>
            <p className="mt-0.5 text-base font-semibold tabular-nums text-navy-800">
              {formatCurrency(breakdown.annualVariableCashTotal)}
            </p>
          </div>
          <div className="rounded-lg bg-teal-50/40 px-3 py-2 ring-1 ring-teal-100/70">
            <p className="text-[11px] font-medium text-teal-800/90">
              Total cash (fixed + variable)
            </p>
            <p className="mt-0.5 text-base font-semibold tabular-nums text-navy-900">
              {formatCurrency(breakdown.annualCashCompensation)}
            </p>
          </div>
          <div className="rounded-lg bg-white px-3 py-2 ring-1 ring-teal-200/60">
            <p className="text-[11px] font-medium text-teal-700">
              Stated CTC (input)
            </p>
            <p className="mt-0.5 text-base font-semibold tabular-nums text-teal-800">
              {formatCurrency(breakdown.statedAnnualCTC)}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-navy-400 mt-2 leading-relaxed">
          Full modeled package (cash + employer lines):{" "}
          <span className="font-medium text-navy-600 tabular-nums">
            {formatCurrency(breakdown.modeledAnnualPackage)}
          </span>
          {employerContributionsAnnual > 0 ? (
            <>
              {" "}
              · Employer-only annual:{" "}
              <span className="font-medium text-navy-600 tabular-nums">
                {formatCurrency(employerContributionsAnnual)}
              </span>
            </>
          ) : null}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-navy-800 mb-1">
          Component breakup
        </h4>
        <p className="text-xs text-navy-500 mb-3 max-w-2xl leading-relaxed">
          Read-only mirror of the main breakdown table. Tooltips match Salary
          Breakdown.
        </p>
        <SalaryBreakdownAccordionProvider
          key={accordionSectionIds.join("\u0001")}
          sectionIds={accordionSectionIds}
        >
          <SalaryBreakdownAccordionToolbar className="mb-1 mt-1" />
          <div className="mt-3 overflow-hidden rounded-xl border border-navy-100/90 bg-navy-50/[0.2] ring-1 ring-navy-900/[0.04]">
            <Table className="table-fixed w-full text-[13px] leading-snug">
              <SalaryBreakdownTableColgroup />
              <TableHeader>
                <TableRow className="border-b border-navy-200/70 bg-navy-50/50 hover:bg-navy-50/50">
                  <TableHead className="text-label text-navy-400 pl-5 py-3 w-[40%] h-auto align-bottom font-semibold">
                    Component
                  </TableHead>
                  <TableHead className="text-label text-navy-400 px-2 text-right tabular-nums py-3 h-auto align-bottom font-semibold">
                    Monthly
                  </TableHead>
                  <TableHead className="text-label text-navy-400 px-2 text-right tabular-nums py-3 h-auto align-bottom font-semibold">
                    Annual
                  </TableHead>
                  <TableHead className="text-label text-navy-400 pr-5 py-3 text-right h-auto align-bottom font-semibold">
                    Type
                  </TableHead>
                </TableRow>
              </TableHeader>

              <SalaryBreakdownAccordionSection
                sectionId="fixed_core"
                title="Fixed salary components"
                subtitle="Basic, HRA, DA — the stable core before allowances."
                sectionTotals={salaryAccordionSectionTotals(
                  earningsBySection.fixed_core
                )}
              >
                {earningsBySection.fixed_core.map((row) => (
                  <ReadonlyEarningRow key={row.id} row={row} />
                ))}
                <GroupSubtotalRow
                  rows={earningsBySection.fixed_core}
                  label="Subtotal — fixed core"
                />
              </SalaryBreakdownAccordionSection>

              <SalaryBreakdownAccordionSection
                sectionId="allowance"
                title="Allowances"
                subtitle="Same allowance handling as Salary Breakdown."
                sectionTotals={salaryAccordionSectionTotals(
                  earningsBySection.allowance
                )}
              >
                {earningsBySection.allowance.map((row) => (
                  <ReadonlyEarningRow key={row.id} row={row} />
                ))}
                <GroupSubtotalRow
                  rows={earningsBySection.allowance}
                  label="Subtotal — allowances"
                />
              </SalaryBreakdownAccordionSection>

              <SalaryBreakdownAccordionSection
                sectionId="variable_pay"
                title="Variable pay"
                subtitle="Excluded from monthly in-hand (excluding variable) in this model."
                sectionTotals={salaryAccordionSectionTotals(
                  earningsBySection.variable_pay
                )}
              >
                {earningsBySection.variable_pay.length === 0 ? (
                  <TableRow className="border-navy-100/70 hover:bg-navy-50/30">
                    <TableCell
                      colSpan={4}
                      className="pl-5 py-3 text-xs text-navy-500 leading-relaxed"
                    >
                      No variable lines in this structure. Use{" "}
                      <span className="font-medium text-navy-700">
                        Fixed + variable
                      </span>{" "}
                      on the offer card if part of CTC is variable.
                    </TableCell>
                  </TableRow>
                ) : (
                  earningsBySection.variable_pay.map((row) => (
                    <ReadonlyEarningRow key={row.id} row={row} />
                  ))
                )}
                <GroupSubtotalRow
                  rows={earningsBySection.variable_pay}
                  label="Subtotal — variable pay"
                />
              </SalaryBreakdownAccordionSection>

              {nonEarningsGroups.map(({ group, rows }) => (
                <SalaryBreakdownAccordionSection
                  key={group}
                  sectionId={`group:${group}`}
                  title={GROUP_TITLES[group]}
                  subtitle={
                    group === "employer_contributions"
                      ? "Package value, not paid as monthly salary in this view."
                      : "Taken from fixed monthly cash in this model."
                  }
                  sectionTotals={salaryAccordionSectionTotals(rows)}
                >
                  {rows.map((row) => (
                    <ReadonlySimpleRow key={row.id} row={row} />
                  ))}
                  <GroupSubtotalRow rows={rows} />
                </SalaryBreakdownAccordionSection>
              ))}
            </Table>
          </div>
        </SalaryBreakdownAccordionProvider>
      </div>

      <div className="rounded-xl border border-teal-100/90 bg-gradient-to-b from-teal-50/50 to-white px-4 py-3 text-sm text-navy-700">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-500">
          Cash path (this model)
        </p>
        <div className="space-y-1 tabular-nums text-right sm:text-left">
          <CashPathInteractiveRow>
            <span className="text-xs text-navy-500 text-left sm:max-w-[65%]">
              Fixed gross / month · excl. variable
            </span>
            <span className="font-medium text-navy-800">
              {formatCurrency(fixedCashMonthly)}
            </span>
          </CashPathInteractiveRow>
          {variableCashMonthly > 0 && (
            <CashPathInteractiveRow>
              <span className="text-xs text-navy-500 text-left sm:max-w-[65%]">
                Variable / month (÷12 for display)
              </span>
              <span className="font-medium text-navy-700">
                {formatCurrency(variableCashMonthly)}
              </span>
            </CashPathInteractiveRow>
          )}
          <CashPathInteractiveRow>
            <span className="text-xs text-navy-500 text-left sm:max-w-[65%]">
              Deductions / month
            </span>
            <span className="font-medium text-danger-600">
              −{formatCurrency(deductionsMonthly)}
            </span>
          </CashPathInteractiveRow>
          <div className="my-2 border-t border-teal-100/80" />
          <CashPathInteractiveRow highlight className="gap-1.5">
            <span className="text-sm font-semibold text-navy-800 text-left sm:max-w-[65%]">
              Est. in-hand / month · excl. variable
            </span>
            <span className="text-lg font-bold text-teal-800 tabular-nums">
              {formatCurrency(breakdown.monthlyInHandExcludingVariable)}
            </span>
          </CashPathInteractiveRow>
          <CashPathInteractiveRow>
            <span className="text-xs text-navy-500 text-left sm:max-w-[65%]">
              In-hand / month · incl. variable (÷12)
            </span>
            <span className="font-semibold text-navy-800">
              {formatCurrency(breakdown.monthlyInHandIncludingVariable)}
            </span>
          </CashPathInteractiveRow>
          <CashPathInteractiveRow className="text-xs">
            <span className="text-navy-500 text-left sm:max-w-[65%]">
              Annual in-hand · excl. variable
            </span>
            <span className="font-semibold text-navy-800 tabular-nums">
              {formatCurrency(annualInHandExclVar)}
            </span>
          </CashPathInteractiveRow>
          <CashPathInteractiveRow className="text-xs">
            <span className="text-navy-500 text-left sm:max-w-[65%]">
              Annual in-hand · incl. variable
            </span>
            <span className="font-semibold text-navy-800 tabular-nums">
              {formatCurrency(annualInHandInclVar)}
            </span>
          </CashPathInteractiveRow>
          <p className="text-[11px] text-navy-400 pt-2 leading-relaxed text-left">
            Employer CTC lines sit outside this path but still count toward
            package value. ÷12 variable view is for comparison only.
          </p>
        </div>
      </div>
    </div>
  );
}
