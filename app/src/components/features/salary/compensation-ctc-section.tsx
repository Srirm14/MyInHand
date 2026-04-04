"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { Control, UseFormSetValue } from "react-hook-form";
import { useWatch } from "react-hook-form";
import type { CTCInputFormData } from "@/lib/schemas/ctc-input.schema";
import type { CompensationMode } from "@/lib/types/salary.types";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { DerivedCompField } from "@/lib/utils/compensation-split";
import {
  applyFixedInSplit,
  applyTotalInSplit,
  applyVariableInSplit,
  initialSplitFromTotal,
} from "@/lib/utils/compensation-split";
import { formatIndianNumber } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

type FormErrors = Partial<
  Record<keyof CTCInputFormData, { message?: string } | undefined>
>;

/** Manual salary form: wired to RHF + Zod. */
export function CompensationCtcSectionForm({
  control,
  setValue,
  errors,
}: {
  control: Control<CTCInputFormData>;
  setValue: UseFormSetValue<CTCInputFormData>;
  errors?: FormErrors;
}) {
  const mode = useWatch({ control, name: "compensationMode" });
  const annualCTC = useWatch({ control, name: "annualCTC" }) ?? 0;
  const fixedAnnual = useWatch({ control, name: "fixedAnnual" }) ?? 0;
  const variableAnnual = useWatch({ control, name: "variableAnnual" }) ?? 0;
  const [derived, setDerived] = useState<DerivedCompField>("variable");

  const sync = useCallback(
    (patch: Partial<CTCInputFormData>) => {
      (Object.entries(patch) as [keyof CTCInputFormData, unknown][]).forEach(
        ([key, val]) => {
          setValue(key, val as never, {
            shouldDirty: true,
            shouldValidate: true,
          });
        }
      );
    },
    [setValue]
  );

  const onModeChange = (next: CompensationMode) => {
    if (next === "fixed_variable") {
      const { fixedAnnual: f, variableAnnual: v } =
        initialSplitFromTotal(annualCTC);
      sync({
        compensationMode: next,
        fixedAnnual: f,
        variableAnnual: v,
      });
      setDerived("variable");
    } else {
      sync({
        compensationMode: next,
        fixedAnnual: 0,
        variableAnnual: 0,
      });
    }
  };

  const onTotalChange = (raw: number) => {
    const n = Math.max(0, raw);
    if (mode === "total_only") {
      sync({ annualCTC: n });
      return;
    }
    const out = applyTotalInSplit(n);
    sync({
      annualCTC: out.annualCTC,
      fixedAnnual: out.fixedAnnual,
      variableAnnual: out.variableAnnual,
    });
    setDerived(out.derived);
  };

  const onFixedChange = (raw: number) => {
    if (mode !== "fixed_variable") return;
    const out = applyFixedInSplit(annualCTC, raw);
    sync({
      annualCTC: out.annualCTC,
      fixedAnnual: out.fixedAnnual,
      variableAnnual: out.variableAnnual,
    });
    setDerived(out.derived);
  };

  const onVariableChange = (raw: number) => {
    if (mode !== "fixed_variable") return;
    const out = applyVariableInSplit(annualCTC, raw);
    sync({
      annualCTC: out.annualCTC,
      fixedAnnual: out.fixedAnnual,
      variableAnnual: out.variableAnnual,
    });
    setDerived(out.derived);
  };

  return (
    <CompensationCtcInputs
      mode={mode}
      annualCTC={annualCTC}
      fixedAnnual={fixedAnnual}
      variableAnnual={variableAnnual}
      derived={derived}
      onModeChange={onModeChange}
      onTotalChange={onTotalChange}
      onFixedChange={onFixedChange}
      onVariableChange={onVariableChange}
      errors={errors}
      compact={false}
    />
  );
}

/** Offer comparison cards: same UX, local offer state. */
export function CompensationCtcSectionControlled({
  offer,
  onPatch,
  compact = true,
}: {
  offer: OfferDraft;
  onPatch: (patch: Partial<OfferDraft>) => void;
  compact?: boolean;
}) {
  const { compensationMode: mode, annualCTC, fixedAnnual, variableAnnual } =
    offer;
  const [derived, setDerived] = useState<DerivedCompField>("variable");

  const onModeChange = (next: CompensationMode) => {
    if (next === "fixed_variable") {
      const init = initialSplitFromTotal(annualCTC);
      onPatch({
        compensationMode: next,
        fixedAnnual: init.fixedAnnual,
        variableAnnual: init.variableAnnual,
      });
      setDerived("variable");
    } else {
      onPatch({
        compensationMode: next,
        fixedAnnual: 0,
        variableAnnual: 0,
      });
    }
  };

  const onTotalChange = (raw: number) => {
    const n = Math.max(0, raw);
    if (mode === "total_only") {
      onPatch({ annualCTC: n });
      return;
    }
    const out = applyTotalInSplit(n);
    onPatch({
      annualCTC: out.annualCTC,
      fixedAnnual: out.fixedAnnual,
      variableAnnual: out.variableAnnual,
    });
    setDerived(out.derived);
  };

  const onFixedChange = (raw: number) => {
    if (mode !== "fixed_variable") return;
    const out = applyFixedInSplit(annualCTC, raw);
    onPatch({
      annualCTC: out.annualCTC,
      fixedAnnual: out.fixedAnnual,
      variableAnnual: out.variableAnnual,
    });
    setDerived(out.derived);
  };

  const onVariableChange = (raw: number) => {
    if (mode !== "fixed_variable") return;
    const out = applyVariableInSplit(annualCTC, raw);
    onPatch({
      annualCTC: out.annualCTC,
      fixedAnnual: out.fixedAnnual,
      variableAnnual: out.variableAnnual,
    });
    setDerived(out.derived);
  };

  return (
    <CompensationCtcInputs
      mode={mode}
      annualCTC={annualCTC}
      fixedAnnual={fixedAnnual}
      variableAnnual={variableAnnual}
      derived={derived}
      onModeChange={onModeChange}
      onTotalChange={onTotalChange}
      onFixedChange={onFixedChange}
      onVariableChange={onVariableChange}
      compact={compact}
    />
  );
}

function CompensationCtcInputs({
  mode,
  annualCTC,
  fixedAnnual,
  variableAnnual,
  derived,
  onModeChange,
  onTotalChange,
  onFixedChange,
  onVariableChange,
  errors,
  compact,
}: {
  mode: CompensationMode;
  annualCTC: number;
  fixedAnnual: number;
  variableAnnual: number;
  derived: DerivedCompField;
  onModeChange: (m: CompensationMode) => void;
  onTotalChange: (n: number) => void;
  onFixedChange: (n: number) => void;
  onVariableChange: (n: number) => void;
  errors?: FormErrors;
  compact?: boolean;
}) {
  const totalErr = errors?.annualCTC?.message;
  const fixedErr = errors?.fixedAnnual?.message;
  const varErr = errors?.variableAnnual?.message;

  const [totalFocused, setTotalFocused] = useState(false);
  const [totalDraft, setTotalDraft] = useState("");
  const totalInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (totalFocused) return;
    setTotalDraft("");
  }, [annualCTC, totalFocused]);

  const displayTotal = totalFocused
    ? totalDraft
    : annualCTC > 0
      ? formatIndianNumber(annualCTC)
      : "";

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <LabelRow compact={compact} htmlFor="comp-total">
            Annual CTC
          </LabelRow>
          <p className="text-[11px] text-navy-400 mt-0.5 max-w-md leading-snug">
            Know your salary split? Use fixed + variable — totals stay in sync
            automatically.
          </p>
        </div>
        <div className="inline-flex rounded-lg border border-navy-200 bg-navy-50/50 p-0.5 shrink-0">
          {(
            [
              { id: "total_only" as const, label: "Total only" },
              { id: "fixed_variable" as const, label: "Fixed + variable" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onModeChange(tab.id)}
              className={cn(
                "cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                mode === tab.id
                  ? "border border-teal-600/30 bg-teal-100 text-teal-900 shadow-sm"
                  : "text-navy-500 hover:bg-white/70 hover:text-navy-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "flex items-stretch gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-teal-200 focus-within:border-teal-400",
          compact && "py-2.5"
        )}
      >
        <span
          className={cn(
            "flex items-center font-semibold text-navy-600",
            compact ? "text-lg" : "text-xl"
          )}
        >
          ₹
        </span>
        <input
          ref={totalInputRef}
          id="comp-total"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="00,00,000"
          aria-label="Annual CTC in rupees"
          className={cn(
            "min-w-0 flex-1 border-0 bg-transparent font-bold text-navy-800 outline-none placeholder:text-navy-300 placeholder:font-semibold",
            compact ? "text-xl" : "text-2xl md:text-3xl"
          )}
          value={displayTotal}
          onFocus={() => {
            setTotalFocused(true);
            setTotalDraft(annualCTC > 0 ? String(annualCTC) : "");
            requestAnimationFrame(() => {
              const el = totalInputRef.current;
              if (el && document.activeElement === el) {
                const len = el.value.length;
                el.setSelectionRange(len, len);
              }
            });
          }}
          onBlur={(e) => {
            setTotalFocused(false);
            const raw = e.target.value.replace(/\D/g, "");
            const n = Number.parseInt(raw || "0", 10);
            onTotalChange(Number.isFinite(n) ? n : 0);
          }}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "");
            if (totalFocused) {
              setTotalDraft(raw);
            }
            onTotalChange(raw ? Number(raw) : 0);
          }}
        />
        <span className="flex items-center rounded-full bg-teal-50 px-3 text-[10px] font-semibold text-teal-700 uppercase tracking-wide">
          INR / Year
        </span>
      </div>
      {totalErr && <p className="text-xs text-danger-500">{totalErr}</p>}

      {mode === "fixed_variable" && (
        <div className="rounded-xl border border-navy-100 bg-navy-50/40 p-4 space-y-3">
          <p className="text-[11px] font-medium text-navy-500 uppercase tracking-wide">
            Salary structure
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <SplitField
              id="comp-fixed"
              label="Fixed (annual)"
              hint={derived === "fixed" ? "Auto" : "You edit"}
              muted={derived === "fixed"}
              value={fixedAnnual}
              onChange={onFixedChange}
              error={fixedErr}
              compact={compact}
            />
            <SplitField
              id="comp-variable"
              label="Variable (annual)"
              hint={derived === "variable" ? "Auto" : "You edit"}
              muted={derived === "variable"}
              value={variableAnnual}
              onChange={onVariableChange}
              error={varErr}
              compact={compact}
            />
          </div>
          <p className="text-[11px] text-navy-400 tabular-nums">
            Fixed + variable ={" "}
            <span className="font-semibold text-navy-600">
              {formatIndianNumber(fixedAnnual + variableAnnual)}
            </span>
            {annualCTC > 0 &&
              Math.abs(fixedAnnual + variableAnnual - annualCTC) <= 1 && (
                <span className="text-emerald-600 font-medium ml-1">
                  ✓ matches total
                </span>
              )}
          </p>
        </div>
      )}
    </div>
  );
}

function LabelRow({
  htmlFor,
  children,
  compact,
}: {
  htmlFor: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "font-semibold text-navy-800",
        compact ? "text-sm" : "text-base"
      )}
    >
      {children}
    </label>
  );
}

function SplitField({
  id,
  label,
  hint,
  muted,
  value,
  onChange,
  error,
  compact,
  amountPlaceholder = "00,00,000",
}: {
  id: string;
  label: string;
  hint: string;
  muted: boolean;
  value: number;
  onChange: (n: number) => void;
  error?: string;
  compact?: boolean;
  amountPlaceholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-xs font-semibold text-navy-700">
          {label}
        </label>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",
            muted
              ? "bg-navy-100 text-navy-500"
              : "bg-teal-100 text-teal-800"
          )}
        >
          {hint}
        </span>
      </div>
        <div
        className={cn(
          "flex items-stretch gap-2 rounded-lg border bg-white px-3 py-2",
          muted ? "border-navy-100 bg-navy-50/30" : "border-navy-200",
          "focus-within:ring-2 focus-within:ring-teal-200"
        )}
      >
        <span className="text-sm font-medium text-navy-500">₹</span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder={value > 0 ? undefined : amountPlaceholder}
          aria-label={label}
          className={cn(
            "min-w-0 flex-1 border-0 bg-transparent text-sm font-semibold tabular-nums outline-none placeholder:text-navy-300 placeholder:font-semibold",
            compact ? "text-sm" : "text-base"
          )}
          value={value ? formatIndianNumber(value) : ""}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "");
            onChange(raw ? Number(raw) : 0);
          }}
        />
      </div>
      {error && <p className="text-xs text-danger-500">{error}</p>}
    </div>
  );
}
