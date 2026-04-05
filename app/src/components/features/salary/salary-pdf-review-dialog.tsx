"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import type {
  CompensationPdfParseResult,
  ExtractedSalaryField,
  SalaryPdfSemanticKey,
} from "@/lib/salary/pdf/salary-pdf-parse.types";
import {
  type SalaryPdfManualLine,
  type SalaryPdfReviewSelection,
  suggestInitialAnnualCtc,
} from "@/lib/salary/pdf/apply-salary-pdf-to-state";
import {
  confidenceLabel,
  defaultIncludeExtractedField,
} from "@/lib/salary/pdf/review-defaults";
import {
  classifyParsedField,
  getMissingComponentKeys,
  inferCtcLineage,
  orderSalaryReviewKeysInGroup,
  SALARY_REVIEW_COMPONENT_KEYS,
  SALARY_REVIEW_GROUPS,
} from "@/lib/salary/pdf/salary-pdf-review-model";
import type { CtcLineage } from "@/lib/salary/pdf/salary-pdf-review-model";
import type { CompensationMode } from "@/lib/types/salary.types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils/format-currency";
import { MIN_ANNUAL_CTC_RUPEES } from "@/lib/schemas/ctc-input.schema";

type ManualRowDraft = { id: string; name: string; monthly: string };

function newManualRowDraft(): ManualRowDraft {
  return { id: crypto.randomUUID(), name: "", monthly: "" };
}

function draftsToManualLines(rows: ManualRowDraft[]): SalaryPdfManualLine[] {
  return rows
    .map((r) => ({
      name: r.name.trim(),
      monthly: Number(r.monthly),
    }))
    .filter((r) => Number.isFinite(r.monthly) && r.monthly > 0);
}

const KEY_LABELS: Record<SalaryPdfSemanticKey, string> = {
  employeeName: "Employee name",
  employerName: "Employer / company",
  annualCTC: "Annual CTC",
  fixedAnnual: "Fixed (annual)",
  variableAnnual: "Variable (annual)",
  basic: "Basic salary",
  hra: "HRA",
  specialAllowance: "Special / flexi allowance",
  vehicleAllowance: "Vehicle allowance",
  washingAllowance: "Washing allowance",
  ltaAllowance: "LTA",
  variablePay: "Variable pay",
  profitIncentive: "Profit incentive (PI)",
  esop: "ESOPs / equity (value)",
  bonus: "Bonus",
  joiningBonus: "Joining / sign-on bonus",
  employeePf: "Employee PF / EPF",
  employerPf: "Employer PF",
  gratuity: "Gratuity",
  professionalTax: "Professional tax",
  monthlyGross: "Monthly gross",
  monthlyInHand: "Monthly in-hand / net",
  annualGross: "Annual gross",
  deductionsTotal: "Total deductions",
};

/** Keep annual ↔ monthly in sync when the user edits either field. */
function applyReviewAmountPairUpdate(
  key: string,
  which: "annual" | "monthly",
  raw: string,
  setAnnualEdit: Dispatch<SetStateAction<Partial<Record<string, number>>>>,
  setMonthlyEdit: Dispatch<SetStateAction<Partial<Record<string, number>>>>
): void {
  if (raw === "") {
    setAnnualEdit((s) => {
      const n = { ...s };
      delete n[key];
      return n;
    });
    setMonthlyEdit((s) => {
      const n = { ...s };
      delete n[key];
      return n;
    });
    return;
  }
  const num = Number(raw);
  if (!Number.isFinite(num)) return;
  if (which === "annual") {
    const annual = Math.max(0, Math.round(num));
    const monthly = Math.round(annual / 12);
    setAnnualEdit((s) => ({ ...s, [key]: annual }));
    setMonthlyEdit((s) => ({ ...s, [key]: monthly }));
  } else {
    const monthly = Math.max(0, Math.round(num));
    const annual = monthly * 12;
    setMonthlyEdit((s) => ({ ...s, [key]: monthly }));
    setAnnualEdit((s) => ({ ...s, [key]: annual }));
  }
}

function ctcStatusMessage(lineage: CtcLineage): { badge: string; hint: string } {
  switch (lineage) {
    case "parsed_high":
      return {
        badge: "Parsed clearly",
        hint: "We matched an annual CTC line in the document. Please verify the amount.",
      };
    case "parsed_review":
      return {
        badge: "Needs review",
        hint: "We found a CTC-like line but couldn’t confirm it fully. Please verify.",
      };
    case "from_gross":
      return {
        badge: "Needs review",
        hint: "No explicit CTC label — we inferred from gross. Please confirm this total.",
      };
    case "from_filename":
      return {
        badge: "Needs review",
        hint: "We couldn’t read CTC from the PDF text — using a hint from the filename. Please replace with the real figure.",
      };
    default:
      return {
        badge: "Not found in document",
        hint: "Please enter your annual CTC — we couldn’t detect it in this PDF.",
      };
  }
}

function StatusBadge({
  variant,
  children,
}: {
  variant: "success" | "attention" | "missing" | "muted" | "edited";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        variant === "success" &&
          "border border-emerald-200/90 bg-emerald-50/95 text-emerald-900",
        variant === "attention" &&
          "border border-amber-200/90 bg-amber-50/95 text-amber-950",
        variant === "missing" &&
          "border border-dashed border-slate-300/90 bg-slate-50/90 text-slate-700",
        variant === "muted" &&
          "border border-navy-200/80 bg-white/80 text-navy-600",
        variant === "edited" &&
          "border border-violet-200/90 bg-violet-50/90 text-violet-900"
      )}
    >
      {children}
    </span>
  );
}

interface SalaryPdfReviewDialogProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly parse: CompensationPdfParseResult | null;
  readonly onApply: (selection: SalaryPdfReviewSelection) => void | Promise<void>;
}

export function SalaryPdfReviewDialog({
  open,
  onOpenChange,
  parse,
  onApply,
}: SalaryPdfReviewDialogProps) {
  const attentionRef = useRef<HTMLDivElement>(null);
  const paySectionRef = useRef<HTMLDivElement>(null);

  const [annualCTC, setAnnualCTC] = useState(MIN_ANNUAL_CTC_RUPEES);
  const [manualAllowanceRows, setManualAllowanceRows] = useState<
    ManualRowDraft[]
  >([]);
  const [manualVariableRows, setManualVariableRows] = useState<
    ManualRowDraft[]
  >([]);
  const [compensationMode, setCompensationMode] =
    useState<CompensationMode>("total_only");
  const [fixedAnnual, setFixedAnnual] = useState(0);
  const [variableAnnual, setVariableAnnual] = useState(0);
  const [included, setIncluded] = useState<Record<string, boolean>>({});
  const [annualEdit, setAnnualEdit] = useState<Partial<Record<string, number>>>(
    {}
  );
  const [monthlyEdit, setMonthlyEdit] = useState<
    Partial<Record<string, number>>
  >({});
  const [applyBusy, setApplyBusy] = useState(false);

  const baselineRef = useRef({
    annualCTC: MIN_ANNUAL_CTC_RUPEES,
    fixedAnnual: 0,
    variableAnnual: 0,
    compensationMode: "total_only" as CompensationMode,
    annualEdit: {} as Partial<Record<string, number>>,
    monthlyEdit: {} as Partial<Record<string, number>>,
  });

  useEffect(() => {
    if (!parse || !open) return;
    const nextIncluded: Record<string, boolean> = {};
    for (const f of parse.fields) {
      nextIncluded[f.key] = defaultIncludeExtractedField(f);
    }
    for (const k of getMissingComponentKeys(parse.fields)) {
      nextIncluded[k] = false;
    }

    const seedCtc = suggestInitialAnnualCtc(parse, parse.fileName);

    const sumVariableAnnualFromFields = (): number => {
      let v = 0;
      const va = parse.fields.find((x) => x.key === "variableAnnual");
      if (va) {
        if (va.amountAnnual != null) v += va.amountAnnual;
        else if (va.amountMonthly != null) v += va.amountMonthly * 12;
      }
      for (const x of parse.fields) {
        if (x.key === "variablePay" || x.key === "profitIncentive") {
          if (x.amountAnnual != null) v += x.amountAnnual;
          else if (x.amountMonthly != null) v += x.amountMonthly * 12;
        }
      }
      return v;
    };

    const hasVar =
      sumVariableAnnualFromFields() > 0 ||
      parse.fields.some(
        (x) =>
          x.key === "fixedAnnual" &&
          (x.amountAnnual != null || x.amountMonthly != null)
      );
    const fix = parse.fields.find((x) => x.key === "fixedAnnual");

    let nextMode: CompensationMode = "total_only";
    let nextFixed = 0;
    let nextVar = 0;
    if (hasVar) {
      nextMode = "fixed_variable";
      const vAnn = sumVariableAnnualFromFields();
      const fAnn =
        fix?.amountAnnual ??
        (fix?.amountMonthly != null ? fix.amountMonthly * 12 : undefined);
      nextVar = Math.max(0, Math.round(vAnn));
      nextFixed = Math.max(
        0,
        Math.round(
          fAnn != null && fAnn > 0 ? fAnn : Math.max(0, seedCtc - vAnn)
        )
      );
    }

    const ae: Partial<Record<string, number>> = {};
    const me: Partial<Record<string, number>> = {};
    for (const f of parse.fields) {
      if (f.amountAnnual != null) ae[f.key] = Math.round(f.amountAnnual);
      if (f.amountMonthly != null) me[f.key] = Math.round(f.amountMonthly);
    }

    setIncluded(nextIncluded);
    setAnnualCTC(seedCtc);
    setManualAllowanceRows([]);
    setManualVariableRows([]);
    setCompensationMode(nextMode);
    setFixedAnnual(nextFixed);
    setVariableAnnual(nextVar);
    setAnnualEdit(ae);
    setMonthlyEdit(me);

    baselineRef.current = {
      annualCTC: seedCtc,
      fixedAnnual: nextFixed,
      variableAnnual: nextVar,
      compensationMode: nextMode,
      annualEdit: { ...ae },
      monthlyEdit: { ...me },
    };
  }, [parse, open]);

  const ctcLineage = useMemo(
    () => (parse ? inferCtcLineage(parse, parse.fileName) : "placeholder"),
    [parse]
  );

  const missingComponentKeys = useMemo(
    () => (parse ? getMissingComponentKeys(parse.fields) : []),
    [parse]
  );

  const otherParsedFields = useMemo(() => {
    if (!parse) return [];
    const skip = new Set<SalaryPdfSemanticKey>([
      "annualCTC",
      "employeeName",
      "employerName",
      "fixedAnnual",
      "variableAnnual",
      ...SALARY_REVIEW_COMPONENT_KEYS,
    ]);
    return parse.fields.filter((f) => !skip.has(f.key));
  }, [parse]);

  /** Chips align with the same buckets as the review form (not raw PDF line count). */
  const summaryModelKeys = useMemo(() => {
    return new Set<SalaryPdfSemanticKey>([
      ...SALARY_REVIEW_COMPONENT_KEYS,
      "annualCTC",
      "fixedAnnual",
      "variableAnnual",
    ]);
  }, []);

  const summary = useMemo(() => {
    if (!parse) {
      return { clear: 0, needVerification: 0, missing: 0, attentionApprox: 0 };
    }
    const clear = parse.fields.filter(
      (f) => summaryModelKeys.has(f.key) && f.confidence === "high"
    ).length;

    const parsedNeedVerification = parse.fields.filter(
      (f) =>
        summaryModelKeys.has(f.key) &&
        f.key !== "annualCTC" &&
        f.confidence !== "high"
    ).length;

    const hasHighConfidenceCtc = parse.fields.some(
      (f) => f.key === "annualCTC" && f.confidence === "high"
    );
    const ctcAttentionExtra =
      ctcLineage !== "parsed_high" && !hasHighConfidenceCtc ? 1 : 0;

    const shapeAttentionExtra =
      compensationMode === "fixed_variable" &&
      !parse.fields.some(
        (f) =>
          (f.key === "fixedAnnual" || f.key === "variableAnnual") &&
          (f.amountAnnual != null || f.amountMonthly != null)
      )
        ? 1
        : 0;

    const needVerification =
      parsedNeedVerification + ctcAttentionExtra + shapeAttentionExtra;
    const missing = missingComponentKeys.length;
    const attentionApprox = needVerification + missing;

    return {
      clear,
      needVerification,
      missing,
      attentionApprox,
    };
  }, [
    parse,
    missingComponentKeys,
    ctcLineage,
    compensationMode,
    summaryModelKeys,
  ]);

  const scrollToAttention = useCallback(() => {
    const goPay =
      missingComponentKeys.length > 0 || summary.needVerification > 0;
    const el = goPay ? paySectionRef.current : attentionRef.current;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [missingComponentKeys.length, summary.needVerification]);

  const toggle = (key: string) => {
    setIncluded((s) => ({ ...s, [key]: !s[key] }));
  };

  const isUserEditedCtc =
    parse != null && annualCTC !== baselineRef.current.annualCTC;
  const isUserEditedShape =
    parse != null &&
    (compensationMode !== baselineRef.current.compensationMode ||
      fixedAnnual !== baselineRef.current.fixedAnnual ||
      variableAnnual !== baselineRef.current.variableAnnual);

  const fieldEdited = (key: string) => {
    const a = annualEdit[key];
    const m = monthlyEdit[key];
    const ba = baselineRef.current.annualEdit[key];
    const bm = baselineRef.current.monthlyEdit[key];
    return (
      (a !== undefined && a !== ba) || (m !== undefined && m !== bm)
    );
  };

  const applyDisabled =
    !parse ||
    !Number.isFinite(annualCTC) ||
    annualCTC < MIN_ANNUAL_CTC_RUPEES;

  const handleApply = async () => {
    if (!parse) return;
    setApplyBusy(true);
    try {
      const includedKeys = new Set(
        Object.entries(included)
          .filter(([, v]) => v)
          .map(([k]) => k as SalaryPdfSemanticKey)
      );
      const amountAnnualOverride: Partial<
        Record<SalaryPdfSemanticKey, number>
      > = {};
      const amountMonthlyOverride: Partial<
        Record<SalaryPdfSemanticKey, number>
      > = {};

      const allKeys = new Set<SalaryPdfSemanticKey>([
        ...parse.fields.map((f) => f.key),
        ...SALARY_REVIEW_COMPONENT_KEYS,
      ]);
      for (const key of allKeys) {
        if (!includedKeys.has(key)) continue;
        const a = annualEdit[key];
        const m = monthlyEdit[key];
        if (a != null && Number.isFinite(a)) amountAnnualOverride[key] = a;
        if (m != null && Number.isFinite(m)) amountMonthlyOverride[key] = m;
      }

      await onApply({
        includedKeys,
        amountAnnualOverride,
        amountMonthlyOverride,
        annualCTC,
        compensationMode,
        fixedAnnual,
        variableAnnual,
        manualAllowances: draftsToManualLines(manualAllowanceRows),
        manualVariableLines: draftsToManualLines(manualVariableRows),
      });
      onOpenChange(false);
    } finally {
      setApplyBusy(false);
    }
  };

  const renderParsedOrMissingRow = (key: SalaryPdfSemanticKey) => {
    if (!parse) return null;
    const field = parse.fields.find((f) => f.key === key);
    const title = KEY_LABELS[key] ?? key;
    const isMissing = !field;
    const on = included[key] ?? false;

    const rowStatus = isMissing
      ? "missing"
      : classifyParsedField(field) === "parsed_confident"
        ? "clear"
        : "review";

    const userEdited = !isMissing && fieldEdited(key);

    const badgeVariant =
      rowStatus === "clear"
        ? "success"
        : rowStatus === "review"
          ? "attention"
          : "missing";

    const badgeText =
      rowStatus === "clear"
        ? "Parsed clearly"
        : rowStatus === "review"
          ? "Needs review"
          : "Not found in document";

    const showAnnual = field?.amountAnnual != null || isMissing;
    const showMonthly = field?.amountMonthly != null || isMissing;

    return (
      <div
        key={key}
        id={`salary-review-row-${key}`}
        className={cn(
          "rounded-xl border px-3 py-3 transition-colors sm:px-4",
          rowStatus === "clear" && on && "border-emerald-200/70 bg-emerald-50/25",
          rowStatus === "review" && "border-amber-200/80 bg-amber-50/20",
          rowStatus === "missing" && "border-dashed border-slate-300/90 bg-slate-50/40",
          !on && "opacity-90"
        )}
      >
        <label className="grid cursor-pointer grid-cols-1 gap-3 md:grid-cols-[auto_minmax(0,1fr)_minmax(8rem,11rem)_minmax(8rem,11rem)] md:items-start md:gap-x-4">
          <input
            type="checkbox"
            checked={on}
            onChange={() => toggle(key)}
            className="mt-1 size-4 rounded border-navy-300 md:mt-2"
            aria-describedby={`${key}-hint`}
          />
          <div className="min-w-0 space-y-1.5 md:col-span-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-sm font-semibold text-navy-800">{title}</span>
              <StatusBadge variant={badgeVariant}>{badgeText}</StatusBadge>
              {userEdited ? (
                <StatusBadge variant="edited">You adjusted this</StatusBadge>
              ) : null}
            </div>
            <p id={`${key}-hint`} className="text-[11px] leading-snug text-navy-600">
              {isMissing
                ? "Not found in uploaded document — enter a value if you know it, then tick include."
                : rowStatus === "review"
                  ? "Couldn’t confirm automatically — please verify against your PDF."
                  : "Spot-check against your offer letter or breakup."}
            </p>
            {!isMissing && field ? (
              <p className="text-[10px] leading-snug text-navy-400 line-clamp-2">
                {confidenceLabel(field.confidence)} · {field.rawSnippet}
              </p>
            ) : null}
          </div>

          {showAnnual ? (
            <div className="flex flex-col gap-1 md:pt-0.5">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-400">
                Annual (₹)
              </span>
              <Input
                type="number"
                inputMode="decimal"
                className="h-9 w-full min-w-0 text-xs tabular-nums"
                value={
                  annualEdit[key] === undefined
                    ? field?.amountAnnual != null
                      ? String(Math.round(field.amountAnnual))
                      : ""
                    : String(annualEdit[key])
                }
                onChange={(e) =>
                  applyReviewAmountPairUpdate(
                    key,
                    "annual",
                    e.target.value,
                    setAnnualEdit,
                    setMonthlyEdit
                  )
                }
                disabled={!on}
                placeholder={isMissing ? "Annual" : undefined}
              />
            </div>
          ) : (
            <div className="hidden md:block" aria-hidden />
          )}

          {showMonthly ? (
            <div className="flex flex-col gap-1 md:pt-0.5">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-400">
                Monthly (₹)
              </span>
              <Input
                type="number"
                inputMode="decimal"
                className="h-9 w-full min-w-0 text-xs tabular-nums"
                value={
                  monthlyEdit[key] === undefined
                    ? field?.amountMonthly != null
                      ? String(Math.round(field.amountMonthly))
                      : ""
                    : String(monthlyEdit[key])
                }
                onChange={(e) =>
                  applyReviewAmountPairUpdate(
                    key,
                    "monthly",
                    e.target.value,
                    setAnnualEdit,
                    setMonthlyEdit
                  )
                }
                disabled={!on}
                placeholder={isMissing ? "Monthly" : undefined}
              />
            </div>
          ) : (
            <div className="hidden md:block" aria-hidden />
          )}
        </label>
      </div>
    );
  };

  const renderOtherField = (f: ExtractedSalaryField) => {
    const on = included[f.key] ?? false;
    const st = classifyParsedField(f);
    return (
      <div
        key={`${f.key}-${f.labelMatched}`}
        className={cn(
          "rounded-lg border px-3 py-2.5",
          st === "parsed_confident"
            ? "border-emerald-200/60 bg-emerald-50/20"
            : "border-amber-200/70 bg-amber-50/15"
        )}
      >
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={on}
            onChange={() => toggle(f.key)}
            className="mt-1 size-4 rounded border-navy-300"
          />
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-navy-800">
                {KEY_LABELS[f.key] ?? f.key}
              </span>
              <StatusBadge variant={st === "parsed_confident" ? "success" : "attention"}>
                {st === "parsed_confident" ? "Parsed clearly" : "Needs review"}
              </StatusBadge>
            </div>
            <p className="text-[11px] text-navy-500 line-clamp-2">{f.rawSnippet}</p>
            {(f.amountAnnual != null || f.amountMonthly != null) && (
              <div className="flex flex-wrap gap-2 pt-1">
                {f.amountAnnual != null && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold uppercase text-navy-400">
                      Annual
                    </span>
                    <Input
                      type="number"
                      className="h-8 w-[120px] text-xs tabular-nums"
                      value={
                        annualEdit[f.key] === undefined
                          ? String(Math.round(f.amountAnnual))
                          : String(annualEdit[f.key])
                      }
                      onChange={(e) =>
                        applyReviewAmountPairUpdate(
                          f.key,
                          "annual",
                          e.target.value,
                          setAnnualEdit,
                          setMonthlyEdit
                        )
                      }
                      disabled={!on}
                    />
                  </div>
                )}
                {f.amountMonthly != null && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold uppercase text-navy-400">
                      Monthly
                    </span>
                    <Input
                      type="number"
                      className="h-8 w-[120px] text-xs tabular-nums"
                      value={
                        monthlyEdit[f.key] === undefined
                          ? String(Math.round(f.amountMonthly))
                          : String(monthlyEdit[f.key])
                      }
                      onChange={(e) =>
                        applyReviewAmountPairUpdate(
                          f.key,
                          "monthly",
                          e.target.value,
                          setAnnualEdit,
                          setMonthlyEdit
                        )
                      }
                      disabled={!on}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </label>
      </div>
    );
  };

  if (!parse) return null;

  const ctcMsg = ctcStatusMessage(ctcLineage);
  const shapeNeedsHint =
    compensationMode === "fixed_variable" &&
    !parse.fields.some(
      (f) =>
        (f.key === "fixedAnnual" || f.key === "variableAnnual") &&
        (f.amountAnnual != null || f.amountMonthly != null)
    );

  const splitSum = fixedAnnual + variableAnnual;
  const splitDelta = annualCTC - splitSum;
  const splitMatchesCtc =
    compensationMode !== "fixed_variable" || Math.abs(splitDelta) <= 1;

  const activateFixedVariable = () => {
    if (compensationMode === "total_only") {
      setFixedAnnual(Math.max(0, Math.round(annualCTC)));
      setVariableAnnual(0);
    }
    setCompensationMode("fixed_variable");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="flex max-h-[min(94vh,900px)] w-full max-w-[min(100%-1rem,800px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl lg:max-w-[52rem]"
      >
        <DialogHeader className="shrink-0 border-b border-navy-100 px-5 py-4 sm:px-6">
          <DialogTitle className="text-base sm:text-lg">Review what we extracted</DialogTitle>
          <DialogDescription className="text-xs leading-relaxed text-navy-600 sm:text-[13px]">
            We assisted with PDF text extraction — you stay in control. Highlighted
            items need a quick look; everything else is optional. Your profile name is
            used in the app; continue to refine the breakdown on the next screen.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto scroll-smooth px-5 py-5 pb-16 sm:px-7 sm:py-6 sm:pb-20">
          <div className="rounded-xl border border-teal-100/90 bg-gradient-to-br from-teal-50/50 to-white px-3 py-2.5">
            <p className="text-xs font-medium leading-snug text-navy-800">
              We filled what we could — review the highlighted fields before continuing.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <StatusBadge variant="success">
                {summary.clear} matched clearly
              </StatusBadge>
              <StatusBadge variant="attention">
                {summary.needVerification} need verification
              </StatusBadge>
              <StatusBadge variant="missing">
                {summary.missing} common lines not in PDF
              </StatusBadge>
              {ctcLineage !== "parsed_high" ? (
                <StatusBadge variant="attention">CTC: please verify</StatusBadge>
              ) : null}
            </div>
            {summary.attentionApprox > 0 ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="mt-2 h-8 gap-1 rounded-full px-2 text-xs font-semibold text-teal-800 hover:bg-teal-100/60"
                onClick={scrollToAttention}
              >
                {missingComponentKeys.length > 0 || summary.needVerification > 0
                  ? "Jump to pay components"
                  : "Jump to CTC"}
                <ChevronDown className="size-3.5 opacity-70" aria-hidden />
              </Button>
            ) : null}
          </div>

          {parse.warnings.length > 0 && (
            <div className="rounded-lg border border-amber-200/90 bg-amber-50/85 px-3 py-2 text-xs text-amber-950">
              {parse.warnings.map((w) => (
                <p key={w} className="leading-snug">
                  {w}
                </p>
              ))}
            </div>
          )}

          <div ref={attentionRef} className="scroll-mt-4 space-y-4">
            <div
              id="salary-review-ctc"
              className={cn(
                "space-y-2 rounded-xl border p-3",
                ctcLineage === "parsed_high"
                  ? "border-emerald-200/70 bg-emerald-50/15"
                  : "border-amber-200/75 bg-amber-50/12"
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Label className="text-xs font-semibold text-navy-800">
                  Stated annual CTC
                </Label>
                <StatusBadge
                  variant={
                    ctcLineage === "parsed_high" ? "success" : "attention"
                  }
                >
                  {ctcMsg.badge}
                </StatusBadge>
                {isUserEditedCtc ? (
                  <StatusBadge variant="edited">You adjusted this</StatusBadge>
                ) : null}
              </div>
              <Input
                type="number"
                className="h-10 tabular-nums"
                value={annualCTC}
                onChange={(e) => setAnnualCTC(Number(e.target.value))}
                aria-label="Annual CTC rupees"
              />
              <p className="text-[11px] leading-relaxed text-navy-600">{ctcMsg.hint}</p>
              <p className="text-[10px] text-navy-400">
                Required minimum ₹{MIN_ANNUAL_CTC_RUPEES.toLocaleString("en-IN")} to open the
                breakdown.
              </p>
            </div>

            <div
              id="salary-review-comp-shape"
              className={cn(
                "space-y-2 rounded-xl border p-3",
                shapeNeedsHint
                  ? "border-amber-200/75 bg-amber-50/12"
                  : "border-navy-100 bg-navy-50/15"
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold text-navy-800">Compensation shape</p>
                {shapeNeedsHint ? (
                  <StatusBadge variant="attention">Please verify</StatusBadge>
                ) : (
                  <StatusBadge variant="muted">Optional detail</StatusBadge>
                )}
                {isUserEditedShape ? (
                  <StatusBadge variant="edited">You adjusted this</StatusBadge>
                ) : null}
              </div>
              {shapeNeedsHint ? (
                <p className="text-[11px] leading-relaxed text-navy-600">
                  Fixed and variable weren’t both clear in the PDF — confirm or edit the split
                  below.
                </p>
              ) : (
                <p className="text-[11px] text-navy-500">
                  Switch only if your offer separates fixed vs variable pay.
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={compensationMode === "total_only" ? "default" : "outline"}
                  className="rounded-full text-xs"
                  onClick={() => setCompensationMode("total_only")}
                >
                  Total CTC only
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={
                    compensationMode === "fixed_variable" ? "default" : "outline"
                  }
                  className="rounded-full text-xs"
                  onClick={activateFixedVariable}
                >
                  Fixed + variable
                </Button>
              </div>
              {compensationMode === "fixed_variable" ? (
                <div className="space-y-3">
                  <p className="text-[11px] leading-relaxed text-navy-600">
                    Enter annual <strong className="font-semibold text-navy-800">fixed</strong>{" "}
                    cash and <strong className="font-semibold text-navy-800">variable</strong>{" "}
                    (bonus / performance). These drive the variable line in your breakdown.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <Label className="text-[11px] font-medium text-navy-700">
                        Fixed cash (annual)
                      </Label>
                      <Input
                        type="number"
                        inputMode="decimal"
                        className="mt-1 h-10 text-sm tabular-nums"
                        value={fixedAnnual}
                        onChange={(e) => setFixedAnnual(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-medium text-navy-700">
                        Variable / at-risk (annual)
                      </Label>
                      <Input
                        type="number"
                        inputMode="decimal"
                        className="mt-1 h-10 text-sm tabular-nums"
                        value={variableAnnual}
                        onChange={(e) => setVariableAnnual(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="rounded-lg border border-navy-200/80 bg-white/90 px-3 py-2.5 text-xs text-navy-700">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-navy-600">Fixed + variable</span>
                      <span className="font-semibold tabular-nums">
                        {formatCurrency(Math.max(0, splitSum))}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-navy-100/90 pt-1.5">
                      <span className="text-navy-600">Stated CTC (above)</span>
                      <span className="font-medium tabular-nums text-navy-800">
                        {formatCurrency(Math.max(0, annualCTC))}
                      </span>
                    </div>
                    {!splitMatchesCtc ? (
                      <p className="mt-2 rounded-md bg-amber-50/90 px-2 py-1.5 text-[11px] leading-snug text-amber-950">
                        Difference{" "}
                        <span className="font-semibold tabular-nums">
                          {formatCurrency(Math.abs(splitDelta))}
                        </span>
                        . Adjust fixed or variable so the sum matches CTC, or update CTC if the
                        letter uses a different total.
                      </p>
                    ) : (
                      <p className="mt-2 text-[11px] text-emerald-900/85">
                        Totals align with stated CTC.
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-8 rounded-full border-navy-200 text-xs font-medium"
                        onClick={() =>
                          setVariableAnnual(
                            Math.max(0, Math.round(annualCTC - fixedAnnual))
                          )
                        }
                      >
                        Set variable = CTC − fixed
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-8 rounded-full border-navy-200 text-xs font-medium"
                        onClick={() =>
                          setFixedAnnual(
                            Math.max(0, Math.round(annualCTC - variableAnnual))
                          )
                        }
                      >
                        Set fixed = CTC − variable
                      </Button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div ref={paySectionRef} id="salary-review-pay" className="scroll-mt-6 space-y-4">
            <div className="flex flex-col gap-1 border-b border-navy-100/80 pb-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-navy-800">
                  Pay components & allowances
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-navy-500">
                  Tick to push values into the next screen’s breakdown — edit annual or monthly
                  to match your letter.
                </p>
              </div>
              <span className="text-[10px] font-medium text-navy-400">
                Industry-style groupings
              </span>
            </div>
            <div className="space-y-6">
              {SALARY_REVIEW_GROUPS.map((group) => (
                <div key={group.id} className="space-y-2">
                  <div className="rounded-lg bg-navy-50/60 px-3 py-2">
                    <p className="text-xs font-semibold text-navy-800">{group.label}</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-navy-500">
                      {group.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {orderSalaryReviewKeysInGroup(
                      group.keys,
                      missingComponentKeys,
                      parse
                    ).map((k) => renderParsedOrMissingRow(k))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-xl border border-dashed border-navy-200/90 bg-navy-50/20 px-3 py-3 sm:px-4">
              <div>
                <p className="text-xs font-semibold text-navy-800">
                  Add lines the PDF missed
                </p>
                <p className="mt-0.5 text-[10px] leading-relaxed text-navy-500">
                  Use monthly amounts (₹). They become custom rows in your breakdown — you can
                  rename or remove them on the next screen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-navy-700">
                    Extra allowances
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1 rounded-full border-navy-200 px-3 text-xs font-medium"
                    onClick={() =>
                      setManualAllowanceRows((rows) => [
                        ...rows,
                        newManualRowDraft(),
                      ])
                    }
                  >
                    <Plus className="size-3.5" aria-hidden />
                    Add allowance
                  </Button>
                </div>
                {manualAllowanceRows.length === 0 ? (
                  <p className="text-[10px] text-navy-400">
                    Optional — e.g. transport, shift, or site allowance not detected in text.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {manualAllowanceRows.map((row) => (
                      <div
                        key={row.id}
                        className="flex flex-wrap items-end gap-2 rounded-lg border border-navy-100/90 bg-white/95 p-2.5"
                      >
                        <div className="min-w-[min(100%,10rem)] flex-1">
                          <Label className="text-[10px] font-medium text-navy-500">
                            Label
                          </Label>
                          <Input
                            className="mt-0.5 h-9 text-sm"
                            value={row.name}
                            onChange={(e) =>
                              setManualAllowanceRows((rows) =>
                                rows.map((x) =>
                                  x.id === row.id
                                    ? { ...x, name: e.target.value }
                                    : x
                                )
                              )
                            }
                            placeholder="e.g. Vehicle allowance"
                          />
                        </div>
                        <div className="w-[min(100%,8.5rem)]">
                          <Label className="text-[10px] font-medium text-navy-500">
                            Monthly (₹)
                          </Label>
                          <Input
                            type="number"
                            inputMode="decimal"
                            className="mt-0.5 h-9 text-sm tabular-nums"
                            value={row.monthly}
                            onChange={(e) =>
                              setManualAllowanceRows((rows) =>
                                rows.map((x) =>
                                  x.id === row.id
                                    ? { ...x, monthly: e.target.value }
                                    : x
                                )
                              )
                            }
                            placeholder="0"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-9 shrink-0 text-navy-400 hover:text-red-600"
                          aria-label="Remove allowance row"
                          onClick={() =>
                            setManualAllowanceRows((rows) =>
                              rows.filter((x) => x.id !== row.id)
                            )
                          }
                        >
                          <Trash2 className="size-4" aria-hidden />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2 border-t border-navy-100/80 pt-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-navy-700">
                    Extra variable / bonus
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1 rounded-full border-navy-200 px-3 text-xs font-medium"
                    onClick={() =>
                      setManualVariableRows((rows) => [
                        ...rows,
                        newManualRowDraft(),
                      ])
                    }
                  >
                    <Plus className="size-3.5" aria-hidden />
                    Add variable line
                  </Button>
                </div>
                {manualVariableRows.length === 0 ? (
                  <p className="text-[10px] text-navy-400">
                    Optional — e.g. retention bonus or a variable line the parser skipped.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {manualVariableRows.map((row) => (
                      <div
                        key={row.id}
                        className="flex flex-wrap items-end gap-2 rounded-lg border border-navy-100/90 bg-white/95 p-2.5"
                      >
                        <div className="min-w-[min(100%,10rem)] flex-1">
                          <Label className="text-[10px] font-medium text-navy-500">
                            Label
                          </Label>
                          <Input
                            className="mt-0.5 h-9 text-sm"
                            value={row.name}
                            onChange={(e) =>
                              setManualVariableRows((rows) =>
                                rows.map((x) =>
                                  x.id === row.id
                                    ? { ...x, name: e.target.value }
                                    : x
                                )
                              )
                            }
                            placeholder="e.g. Profit incentive"
                          />
                        </div>
                        <div className="w-[min(100%,8.5rem)]">
                          <Label className="text-[10px] font-medium text-navy-500">
                            Monthly (₹)
                          </Label>
                          <Input
                            type="number"
                            inputMode="decimal"
                            className="mt-0.5 h-9 text-sm tabular-nums"
                            value={row.monthly}
                            onChange={(e) =>
                              setManualVariableRows((rows) =>
                                rows.map((x) =>
                                  x.id === row.id
                                    ? { ...x, monthly: e.target.value }
                                    : x
                                )
                              )
                            }
                            placeholder="0"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-9 shrink-0 text-navy-400 hover:text-red-600"
                          aria-label="Remove variable row"
                          onClick={() =>
                            setManualVariableRows((rows) =>
                              rows.filter((x) => x.id !== row.id)
                            )
                          }
                        >
                          <Trash2 className="size-4" aria-hidden />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {parse.fields.some((f) => f.key === "employerName") ? (
            <div className="space-y-2 rounded-lg border border-navy-100/90 bg-navy-50/20 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-navy-500">
                Employer (reference only)
              </p>
              <p className="text-xs text-navy-600">
                {parse.fields.find((f) => f.key === "employerName")?.rawSnippet}
              </p>
              <p className="text-[10px] text-navy-400">
                Not saved to your salary profile — shown for context from the PDF.
              </p>
            </div>
          ) : null}

          {otherParsedFields.length > 0 ? (
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wide text-navy-500">
                Other amounts detected
              </p>
              <p className="text-[10px] text-navy-400">
                Include only if they should override lines in your breakdown.
              </p>
              <div className="space-y-2">{otherParsedFields.map(renderOtherField)}</div>
            </div>
          ) : null}

          <details className="rounded-lg border border-navy-100 bg-white text-xs">
            <summary className="cursor-pointer px-3 py-2 font-semibold text-navy-700">
              Raw text preview (first pages)
            </summary>
            <pre className="max-h-36 overflow-auto whitespace-pre-wrap border-t border-navy-100 p-3 text-[10px] leading-relaxed text-navy-600">
              {parse.pages
                .slice(0, 3)
                .map((p) => p.plainText)
                .join("\n\n")
                .slice(0, 2800) || "(empty)"}
            </pre>
          </details>
        </div>

        <DialogFooter className="mx-0 mb-0 mt-0 shrink-0 flex-col gap-2 border-t border-navy-100/90 bg-navy-50/35 px-5 py-5 sm:px-7 sm:py-6">
          <p className="w-full text-center text-[10px] leading-relaxed text-navy-500 sm:text-left">
            Continuing copies these numbers into your breakdown — not a final payroll
            figure. Adjust or add rows on the next screen anytime.
          </p>
          <div className="flex w-full flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-full px-6 sm:h-10"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="h-11 rounded-full px-6 sm:h-10"
              disabled={applyDisabled || applyBusy}
              onClick={() => void handleApply()}
            >
              {applyBusy ? "Continuing…" : "Continue to breakdown"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
