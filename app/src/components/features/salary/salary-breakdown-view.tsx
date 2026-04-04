"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  startTransition,
} from "react";
import {
  clearSalaryBreakdownScrollSave,
  persistSalaryBreakdownScrollNow,
  useSalaryBreakdownScrollRestoration,
} from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { useTotalsSectionFlash } from "@/lib/hooks/use-totals-section-flash";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  ChevronLeft,
  Info,
  PiggyBank,
  Plus,
  Receipt,
  Sparkles,
  Trash2,
  LineChart,
  Scale,
  TrendingUp,
  Upload,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { StatCard } from "@/components/shared/stat-card";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { CashPathInteractiveRow } from "@/components/shared/cash-path-interactive-row";
import { SaveProgressCta } from "@/components/shared/save-progress-cta";
import { ExportDropdown } from "@/components/shared/export/export-dropdown";
import { getSalaryComponentTooltip } from "@/lib/constants/salary-component-catalog";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { useSalaryBreakdownCloudSync } from "@/lib/hooks/use-salary-breakdown-cloud-sync";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type { LucideIcon } from "lucide-react";
import type {
  SalaryBreakdownSection,
  SalaryComponent,
  SalaryComponentGroup,
} from "@/lib/types/salary.types";
import { formatCurrency } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainer,
  VIEWPORT,
} from "@/lib/motion/marketing-motion";
import {
  InrMoneyInput,
  splitInrFormattedParts,
} from "@/components/ui/inr-money-input";
import { SalaryBreakdownSkeleton } from "@/components/shared/loading-skeletons";
import { TaxRegimeToggle } from "@/components/shared/tax-regime-toggle";
import { RegimeTaxSlabReferenceCard } from "@/components/features/salary/regime-tax-slab-reference-card";
import {
  buildBreakdownAccordionSectionIds,
  salaryAccordionSectionTotals,
  SalaryBreakdownAccordionProvider,
  SalaryBreakdownAccordionSection,
  SalaryBreakdownAccordionToolbar,
  SalaryBreakdownTableColgroup,
} from "@/components/shared/salary-breakdown-accordion";

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
  const searchParams = useSearchParams();
  const urlSession = searchParams.get("session");
  const authReady = useAuthStore((s) => s.authReady);
  const { toolHref } = useTieredPremiumLinks();
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const setTaxRegime = useSalaryStore((s) => s.setTaxRegime);
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
  const skipBreakdownScrollPersistRef = useRef(false);
  const [docBusy, setDocBusy] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);

  const { cloudHydrating, cloudSaving, cloudDetailReady } =
    useSalaryBreakdownCloudSync();

  useSalaryBreakdownScrollRestoration(!!breakdown, {
    skipNextPersistRef: skipBreakdownScrollPersistRef,
  });

  useEffect(() => {
    if (!breakdown && input.annualCTC >= 100_000) {
      calculateBreakdown();
    }
  }, [breakdown, input.annualCTC, calculateBreakdown]);

  useEffect(() => {
    if (!authReady) return;
    const userNow = useAuthStore.getState().user;
    // Cloud `?session=` loads async; do not bounce to /salary before tier + query resolve.
    if (urlSession && shouldPersistSessions(userNow)) {
      return;
    }
    if (cloudHydrating) return;
    if (cloudDetailReady && useSalaryStore.getState().breakdown == null) return;
    const st = useSalaryStore.getState();
    if (!st.breakdown && st.input.annualCTC < 100_000) {
      skipBreakdownScrollPersistRef.current = true;
      clearSalaryBreakdownScrollSave();
      router.replace("/salary");
    }
  }, [
    breakdown,
    input.annualCTC,
    router,
    cloudHydrating,
    cloudDetailReady,
    authReady,
    urlSession,
  ]);

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

  const accordionSectionIds = useMemo(
    () => buildBreakdownAccordionSectionIds(nonEarningsGroups),
    [nonEarningsGroups]
  );

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

  const totalsSignature = useMemo(() => {
    if (!breakdown) return "";
    return [
      breakdown.monthlyInHandExcludingVariable,
      breakdown.monthlyInHandIncludingVariable,
      breakdown.annualFixedCashTotal,
      breakdown.annualVariableCashTotal,
      breakdown.annualCashCompensation,
      breakdown.statedAnnualCTC,
      breakdown.totalMonthlyDeductions,
      breakdown.annualIncomeTax,
      breakdown.takeHomePercent,
    ].join("|");
  }, [breakdown]);

  const {
    flashActive: totalsFlashActive,
    stripFlashClass: totalsStripFlashClass,
    onTotalsFlashEnd,
  } = useTotalsSectionFlash(totalsSignature);

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

  if (cloudHydrating || !breakdown) {
    return <SalaryBreakdownSkeleton />;
  }

  const regimeLabel = input.taxRegime === "old" ? "Old Regime" : "New Regime";
  const source = breakdown.meta?.resultSource ?? "manual_estimated";
  const isDocument = source === "document_parsed";
  const editBasis = breakdown.meta?.breakdownEditBasis;

  return (
    <PageShell className="py-8 md:py-10">
      {cloudSaving ? (
        <div
          className="mb-3 flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-wide text-navy-400"
          aria-live="polite"
        >
          <Loader2 className="size-3.5 shrink-0 animate-spin text-teal-600" aria-hidden />
          Saving session…
        </div>
      ) : null}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.06)}
      >
        <motion.div variants={fadeUp}>
          <Link
            href="/salary"
            onClick={() => {
              skipBreakdownScrollPersistRef.current = true;
              clearSalaryBreakdownScrollSave();
            }}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group -ml-1.5 mb-1 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
            )}
            aria-label="Back to salary inputs"
          >
            <ChevronLeft
              className="size-3.5 opacity-70 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
              aria-hidden
            />
            Back to salary inputs
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-1 mb-5 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm"
        >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Upload className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-800">
                Replace from file
              </p>
              <p className="mt-0.5 max-w-xl text-xs leading-relaxed text-navy-500">
                Mock-parse a PDF or image (same flow as the salary page). Spot-check
                amounts after upload.
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
              {docBusy ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                  Reading…
                </>
              ) : (
                "Choose file"
              )}
            </Button>
            {docError && (
              <p className="text-xs text-danger-600 text-right max-w-xs">
                {docError}
              </p>
            )}
          </div>
        </div>
        </motion.div>

      <motion.div
        variants={fadeUp}
        className={cn(
          "mb-6 rounded-xl border px-4 py-2.5 text-[13px] leading-snug",
          isDocument
            ? "border-teal-200/60 bg-teal-50/35 text-navy-800"
            : "border-navy-200/70 bg-navy-50/30 text-navy-700",
          breakdown.meta?.componentsAdjusted &&
            "border-l-[3px] border-l-teal-500/35 pl-[13px]"
        )}
      >
        {isDocument ? (
          <>
            <span className="font-semibold text-teal-900">Document-based</span>
            {breakdown.meta?.documentFileName ? (
              <span className="text-navy-700">
                {" "}
                ·{" "}
                <cite className="not-italic font-medium text-navy-800">
                  {breakdown.meta.documentFileName}
                </cite>
              </span>
            ) : null}
            <span className="text-navy-600">
              {" "}
              Verify line items on your original. Same tax engine as manual entry.
            </span>
          </>
        ) : (
          <>
            <span className="font-semibold text-navy-800">Estimated</span>
            <span className="text-navy-600">
              {" "}
              — Typical private-sector split. Employer and accrual slices are{" "}
              <strong className="font-semibold text-navy-800">not</strong> monthly
              bank pay.
            </span>
          </>
        )}
        {breakdown.meta?.componentsAdjusted ? (
          <span
            className={cn(
              "mt-1.5 block text-[12px] leading-snug",
              isDocument ? "text-teal-900/90" : "text-navy-600"
            )}
          >
            {editBasis === "user_edited_after_parse"
              ? "Summaries and tax follow this table; other lines still auto-fill where you haven’t overridden them."
              : "Summaries and tax follow this table — edit any row to steer the model."}
          </span>
        ) : null}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10"
      >
        <header className="min-w-0 max-w-2xl">
          <h1 className="text-h1 text-navy-800">Salary Breakdown</h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-navy-500">
            Tune rows to your offer. Variable pay is kept apart from the monthly
            figure you plan around. Row tooltips add context — not tax advice.
          </p>
        </header>
        <aside
          className={cn(
            "max-w-sm shrink-0 rounded-xl border border-navy-200/60 bg-white p-4 shadow-sm transition-[background-color,box-shadow] duration-500 ease-out lg:mt-1",
            totalsFlashActive && "bg-teal-50/20 shadow-md shadow-teal-900/[0.04]"
          )}
          aria-label="Take-home snapshot"
        >
          <div className="flex gap-2.5">
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
        </aside>
      </motion.div>
      </motion.div>

      <div
        className={cn(
          "mt-10 space-y-6 rounded-2xl p-2 -mx-2 transition-[background-color,box-shadow] duration-500 ease-out md:-mx-0 md:p-0",
          totalsStripFlashClass
        )}
        onAnimationEnd={onTotalsFlashEnd}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="rounded-xl border border-navy-200/65 bg-white px-4 py-3.5 shadow-sm shadow-navy-900/[0.02]"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="flex min-w-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-navy-800 whitespace-nowrap">
                  Tax regime
                </p>
                <Tooltip>
                  <TooltipTrigger
                    type="button"
                    className="text-navy-400 hover:text-navy-600 shrink-0"
                    aria-label="Tax regime info"
                  >
                    <Info className="size-3.5" aria-hidden />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs text-left text-xs">
                    Old regime applies illustrative PF + 80C-style deduction in this
                    model. New regime uses wider slabs with fewer deductions. Switching
                    recomputes TDS from your current table—row edits are kept.
                  </TooltipContent>
                </Tooltip>
              </div>
              <TaxRegimeToggle
                value={input.taxRegime}
                onChange={setTaxRegime}
                size="compact"
              />
            </div>
            <p className="text-[11px] leading-relaxed text-navy-500 lg:max-w-md lg:text-right">
              FY 2025-26 slabs below. Changing regime updates the annual tax card and
              in-hand figures using your breakdown rows.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={staggerContainer(0.08)}
        >
          <motion.div variants={fadeUp}>
            <StatCard
              label="Monthly in-hand · excl. variable"
              amount={breakdown.monthlyInHandExcludingVariable}
              sublabel={`~${formatCurrency(annualInHandExclVar)} / yr`}
              sentiment="positive"
              icon={Banknote}
              className={cn(
                "transition-shadow duration-500",
                totalsFlashActive && "shadow-md shadow-teal-900/[0.06]"
              )}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCard
              label="Monthly in-hand · incl. variable"
              amount={breakdown.monthlyInHandIncludingVariable}
              sublabel="÷12 spread — illustrative only"
              sentiment="positive"
              icon={TrendingUp}
              className="transition-shadow duration-500"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCard
              label="Annual income tax (TDS)"
              amount={breakdown.annualIncomeTax}
              sublabel={`${regimeLabel} · ÷12 for monthly TDS`}
              sentiment="negative"
              icon={PiggyBank}
              className="transition-shadow duration-500"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCard
              label="Monthly deductions"
              amount={breakdown.totalMonthlyDeductions}
              sublabel={`Employer CTC ~${formatCurrency(employerMonthly * 12)} / yr`}
              sentiment="neutral"
              icon={Receipt}
              className="transition-shadow duration-500"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6"
        >
          <RegimeTaxSlabReferenceCard
            regime={input.taxRegime}
            engineNotes="breakdown"
            className="min-w-0 w-full lg:h-full"
          />
          <div className="flex min-w-0 flex-col rounded-2xl border border-navy-200/50 bg-white px-5 py-4 shadow-sm lg:h-full">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-400 mb-1">
              Annual picture
            </p>
            <p className="text-xs text-navy-500 mb-4 max-w-3xl leading-relaxed">
              Fixed vs variable cash, then how it compares to your stated CTC. Figures
              follow the table — change a row and totals refresh together.
            </p>
            <div className="grid flex-1 grid-cols-2 gap-3 text-sm sm:gap-4">
              <div className="rounded-lg bg-navy-50/50 px-3 py-2.5 ring-1 ring-navy-100/80">
                <p className="text-[11px] font-medium text-navy-500">
                  Annual fixed (cash)
                </p>
                <p className="mt-0.5 text-base font-semibold tabular-nums text-navy-800">
                  {formatCurrency(breakdown.annualFixedCashTotal)}
                </p>
              </div>
              <div className="rounded-lg bg-navy-50/50 px-3 py-2.5 ring-1 ring-navy-100/80">
                <p className="text-[11px] font-medium text-navy-500">
                  Annual variable (cash)
                </p>
                <p className="mt-0.5 text-base font-semibold tabular-nums text-navy-800">
                  {formatCurrency(breakdown.annualVariableCashTotal)}
                </p>
              </div>
              <div className="rounded-lg bg-teal-50/40 px-3 py-2.5 ring-1 ring-teal-100/70">
                <p className="text-[11px] font-medium text-teal-800/90">
                  Total cash (fixed + variable)
                </p>
                <p className="mt-0.5 text-base font-semibold tabular-nums text-navy-900">
                  {formatCurrency(breakdown.annualCashCompensation)}
                </p>
              </div>
              <div className="rounded-lg bg-white px-3 py-2.5 ring-1 ring-teal-200/60">
                <p className="text-[11px] font-medium text-teal-700">
                  Stated CTC (your input)
                </p>
                <p className="mt-0.5 text-base font-semibold tabular-nums text-teal-800">
                  {formatCurrency(breakdown.statedAnnualCTC)}
                </p>
              </div>
            </div>
            <p className="text-[11px] text-navy-400 mt-3 leading-relaxed lg:mt-auto lg:pt-3">
              Full modeled package (cash + employer lines):{" "}
              <span className="font-medium text-navy-600 tabular-nums">
                {formatCurrency(breakdown.modeledAnnualPackage)}
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1 max-w-2xl">
            <h2 className="text-h3 text-navy-800">Component breakup</h2>
            <p className="mt-2 text-sm text-navy-500 leading-relaxed max-w-xl">
              Earnings, deductions, and employer lines—edit to match your payslip.
              Focus a cell to type digits; use + under Allowances or Variable pay to
              add rows. Special allowance can bridge to your stated CTC until you
              set your own figure.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/lifestyle"
                onPointerDownCapture={() => persistSalaryBreakdownScrollNow()}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-8 gap-1.5 cursor-pointer rounded-full border-navy-200/90 bg-white px-3 text-xs font-semibold text-teal-700 hover:border-teal-200 hover:bg-teal-50"
                )}
              >
                <CalendarDays className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                Monthly plan
              </Link>
              <Link
                href={toolHref("emi")}
                onPointerDownCapture={() => persistSalaryBreakdownScrollNow()}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-8 gap-1.5 cursor-pointer rounded-full border-navy-200/90 bg-white px-3 text-xs font-semibold text-teal-700 hover:border-teal-200 hover:bg-teal-50"
                )}
              >
                <Scale className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                EMI planner
              </Link>
              <Link
                href={toolHref("forecast")}
                onPointerDownCapture={() => persistSalaryBreakdownScrollNow()}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-8 gap-1.5 cursor-pointer rounded-full border-navy-200/90 bg-white px-3 text-xs font-semibold text-teal-700 hover:border-teal-200 hover:bg-teal-50"
                )}
              >
                <LineChart className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                Wealth forecast
              </Link>
            </div>
          </div>
          <div className="shrink-0 lg:pt-1">
            <ExportDropdown breakdown={breakdown} input={input} />
          </div>
        </div>

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
                  <TableHead className="text-label text-navy-400 px-2 text-right tabular-nums text-navy-500 py-3 h-auto align-bottom font-semibold">
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
                  <EditableEarningRow
                    key={row.id}
                    row={row}
                    patchComponent={patchBreakdownComponent}
                    editableName={false}
                  />
                ))}
                <GroupSubtotalRow
                  rows={earningsBySection.fixed_core}
                  label="Subtotal — fixed core"
                />
              </SalaryBreakdownAccordionSection>

              <SalaryBreakdownAccordionSection
                sectionId="allowance"
                title="Allowances"
                subtitle="Align names and amounts with your payslip. Optional rows can be removed; add your own heads with +."
                sectionTotals={salaryAccordionSectionTotals(
                  earningsBySection.allowance
                )}
                actions={
                  <SectionAddControl
                    ariaLabel="Add allowance row"
                    tooltip="Add allowance row"
                    onClick={addBreakdownAllowanceRow}
                  />
                }
              >
                {earningsBySection.allowance.map((row) => (
                  <EditableEarningRow
                    key={row.id}
                    row={row}
                    patchComponent={patchBreakdownComponent}
                    editableName
                    onRemove={
                      row.removable ? removeBreakdownComponent : undefined
                    }
                  />
                ))}
                <GroupSubtotalRow
                  rows={earningsBySection.allowance}
                  label="Subtotal — allowances"
                />
              </SalaryBreakdownAccordionSection>

              <SalaryBreakdownAccordionSection
                sectionId="variable_pay"
                title="Variable pay"
                subtitle="Bonuses and variable CTC — excluded from the monthly in-hand figure above."
                sectionTotals={salaryAccordionSectionTotals(
                  earningsBySection.variable_pay
                )}
                actions={
                  <SectionAddControl
                    ariaLabel="Add variable or bonus row"
                    tooltip="Add variable or bonus row"
                    onClick={addBreakdownVariableRow}
                  />
                }
              >
                {earningsBySection.variable_pay.length === 0 ? (
                  <TableRow className="border-navy-100/70 hover:bg-navy-50/30">
                    <TableCell
                      colSpan={4}
                      className="pl-5 py-4 text-xs text-navy-500 leading-relaxed"
                    >
                      No variable lines yet. Tap{" "}
                      <span className="font-medium text-navy-700">+</span> in the
                      header, or use{" "}
                      <span className="font-medium text-navy-700">
                        Fixed + variable
                      </span>{" "}
                      on the salary page.
                    </TableCell>
                  </TableRow>
                ) : (
                  earningsBySection.variable_pay.map((row) => (
                    <EditableEarningRow
                      key={row.id}
                      row={row}
                      patchComponent={patchBreakdownComponent}
                      editableName
                      onRemove={
                        row.removable ? removeBreakdownComponent : undefined
                      }
                    />
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
                    <EditableSimpleComponentRow
                      key={row.id}
                      row={row}
                      onMonthlyChange={(id, v) =>
                        patchBreakdownComponent(id, { monthlyValue: v })
                      }
                    />
                  ))}
                  <GroupSubtotalRow rows={rows} />
                </SalaryBreakdownAccordionSection>
              ))}
            </Table>
          </div>
        </SalaryBreakdownAccordionProvider>

        <div
          className={cn(
            "mt-6 rounded-xl border border-teal-100/90 bg-gradient-to-b from-teal-50/50 to-white px-4 py-4 text-sm text-navy-700 transition-[background-color,box-shadow] duration-500 ease-out",
            totalsFlashActive && "shadow-sm shadow-teal-900/[0.06] ring-1 ring-teal-200/40"
          )}
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-500">
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
              package value. Real variable pay rarely arrives in twelve equal
              slices — the ÷12 view is for comparison only.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-12 space-y-8">
        <div className="max-w-lg">
          <div className="rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm">
            <h3 className="text-h3 text-navy-800 mb-1">Allocation benchmarks</h3>
            <p className="text-xs text-navy-500 mb-5 leading-relaxed">
              Illustrative 50/30/20-style split for sense-checking. For real
              numbers, use the planning cards below.
            </p>
            <div className="space-y-5">
              <BenchmarkBar
                label="Essential Needs"
                fillPercent={48}
                recommended="50% Recommended"
              />
              <BenchmarkBar
                label="Wants & extras"
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
        </div>

        <div className="max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-400">
            Plan from this breakdown
          </p>
          <p className="mt-1 text-sm text-navy-500 max-w-2xl leading-relaxed">
            Monthly surplus, loan stress, then a longer-range view—same flow as
            the quick links at the top of this section.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <BreakdownNextStepCard
              icon={CalendarDays}
              title="Monthly plan"
              description="Rent, food, transport, and more—see how much room you have after essentials each month."
              cta="Open monthly plan"
              href="/lifestyle"
            />
            <BreakdownNextStepCard
              icon={Scale}
              title="EMI & affordability"
              description="Model home, car, or personal loans against in-hand pay and your Monthly plan."
              cta="Open EMI planner"
              href={toolHref("emi")}
            />
            <BreakdownNextStepCard
              icon={LineChart}
              title="Wealth forecast"
              description="Project wealth over time from today’s model—not advice, just a clearer picture."
              cta="View wealth forecast"
              href={toolHref("forecast")}
            />
          </div>
        </div>
      </div>

      <SaveProgressCta returnTo="/salary/breakdown" className="mt-12" />
    </PageShell>
  );
}

function BreakdownNextStepCard({
  icon: Icon,
  title,
  description,
  cta,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      onPointerDownCapture={() => persistSalaryBreakdownScrollNow()}
      className={cn(
        "group flex min-h-[8.5rem] cursor-pointer flex-col rounded-xl border border-navy-200/70 bg-gradient-to-b from-white to-navy-50/30 p-4 shadow-sm transition-all",
        "hover:border-teal-200/90 hover:shadow-md hover:shadow-teal-900/[0.04]"
      )}
    >
      <div className="flex size-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600 ring-1 ring-teal-100/80">
        <Icon className="size-4" strokeWidth={2} aria-hidden />
      </div>
      <p className="mt-3 text-sm font-semibold text-navy-800">{title}</p>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-navy-500">
        {description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
        {cta}
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}

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
      <TableCell className="px-2 py-2.5 text-right align-middle">
        <InrStaticAmount amount={monthly} emphasis="lg" />
      </TableCell>
      <TableCell className="px-2 py-2.5 text-right align-middle">
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

function SectionAddControl({
  onClick,
  ariaLabel,
  tooltip,
}: {
  onClick: () => void;
  ariaLabel: string;
  tooltip: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        onClick={onClick}
        className="inline-flex size-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-navy-400 transition-all duration-200 hover:bg-teal-50/90 hover:text-teal-700 hover:ring-1 hover:ring-teal-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-1"
        aria-label={ariaLabel}
      >
        <Plus className="size-3.5" strokeWidth={2.5} />
      </TooltipTrigger>
      <TooltipContent side="left" className="max-w-xs text-xs font-normal">
        {tooltip}
      </TooltipContent>
    </Tooltip>
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
  editableName = false,
}: {
  row: SalaryComponent;
  patchComponent: PatchFn;
  onRemove?: (id: string) => void;
  editableName?: boolean;
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
    parsed: "From doc",
    user_edited: "Adjusted",
  }[row.lineSource];

  const [nameText, setNameText] = useState(row.name);
  const nameEditingRef = useRef(false);

  useEffect(() => {
    if (nameEditingRef.current) return;
    startTransition(() => setNameText(row.name));
  }, [row.name]);

  const showRemove = Boolean(onRemove && row.removable);
  const inrFieldClass =
    row.type === "tax-free" ? "[&_input]:text-emerald-800" : undefined;
  const userTouched = row.lineSource === "user_edited";

  return (
    <TableRow
      className={cn(
        "group/erow border-b border-navy-100/60 align-top transition-[background-color,box-shadow] duration-200",
        "hover:bg-white/80",
        userTouched && "shadow-[inset_3px_0_0_0_rgba(13,148,136,0.3)]",
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
            {editableName ? (
              <input
                type="text"
                value={nameText}
                aria-label="Component name"
                className="w-full max-w-md rounded-lg border border-navy-200 bg-white px-2 py-1 text-sm font-medium text-navy-800 outline-none focus:ring-2 focus:ring-teal-200"
                onFocus={() => {
                  nameEditingRef.current = true;
                }}
                onBlur={() => {
                  nameEditingRef.current = false;
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
            <p className="text-[11px] leading-snug text-navy-500/95">
              {row.description}
            </p>
            {row.isCustom ? (
              <p className="text-[10px] text-navy-400">
                Custom — rename to match your structure.
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
          {showRemove ? (
            <div className="flex shrink-0 self-start pt-0.5">
              <Tooltip>
                <TooltipTrigger
                  type="button"
                  className={cn(
                    "rounded-md border-0 bg-transparent p-1.5 text-danger-500/70 transition-all duration-200",
                    "opacity-[0.28] hover:bg-danger-50/90 hover:text-danger-600 hover:opacity-100",
                    "group-hover/erow:opacity-100 group-focus-within/erow:opacity-100",
                    "focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-200/80"
                  )}
                  aria-label={`Remove ${row.name}`}
                  onClick={() => onRemove!(row.id)}
                >
                  <Trash2 className="size-3.5" strokeWidth={2} />
                </TooltipTrigger>
                <TooltipContent side="left" className="text-xs">
                  Remove this row
                </TooltipContent>
              </Tooltip>
            </div>
          ) : null}
        </div>
      </TableCell>
      <TableCell className="bg-white/40 px-2 py-3 align-middle text-right transition-colors group-hover/erow:bg-white/70">
        <InrMoneyInput
          value={row.monthlyValue}
          onCommit={(n) => patchComponent(row.id, { monthlyValue: n })}
          aria-label={`${row.name} monthly`}
          className={cn("ml-auto", inrFieldClass)}
          debounceMs={160}
        />
      </TableCell>
      <TableCell className="bg-white/30 px-2 py-3 align-middle text-right transition-colors group-hover/erow:bg-white/65">
        <InrMoneyInput
          value={row.annualValue}
          onCommit={(n) => patchComponent(row.id, { annualValue: n })}
          aria-label={`${row.name} annual`}
          className={cn("ml-auto", inrFieldClass)}
          debounceMs={160}
        />
      </TableCell>
      <TableCell className="pr-5 align-middle">
        <div className="flex justify-end">
          <Badge variant="secondary" className={cn("font-semibold text-[10px]", typeBadge)}>
            {typeLabel}
          </Badge>
        </div>
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
    parsed: "From doc",
    user_edited: "Adjusted",
  }[row.lineSource];

  return (
    <TableRow
      className={cn(
        "group/srow border-b border-navy-100/60 align-top transition-[background-color,box-shadow] duration-200 hover:bg-white/70",
        row.lineSource === "user_edited" &&
          "shadow-[inset_3px_0_0_0_rgba(13,148,136,0.3)]"
      )}
    >
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
      <TableCell className="bg-white/40 px-2 py-3 align-middle text-right transition-colors group-hover/srow:bg-white/80">
        <InrMoneyInput
          value={row.monthlyValue}
          onCommit={(n) => onMonthlyChange(row.id, n)}
          aria-label={`${row.name} monthly`}
          className={cn(
            "ml-auto",
            row.type === "employer" && "[&_input]:text-navy-700"
          )}
          deductionStyle={isDeduction}
          debounceMs={160}
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
          <Badge variant="secondary" className={cn("font-semibold text-[10px]", typeBadge)}>
            {typeLabel}
          </Badge>
        </div>
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
