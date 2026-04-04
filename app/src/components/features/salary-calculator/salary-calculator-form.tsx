"use client";

import type { Ref } from "react";
import { Plus, RotateCcw, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InrMoneyInput } from "@/components/ui/inr-money-input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TaxRegime } from "@/lib/types/salary.types";
import {
  defaultSimpleSalaryInput,
  type SimpleSalaryDeductionRow,
  type SimpleSalaryInput,
} from "@/lib/simple-salary-calculator/types";
import {
  annualPackageTotal,
  reconcileAfterFixedPay,
  reconcileAfterTotalCtc,
  reconcileAfterVariablePay,
} from "@/lib/simple-salary-calculator/sync-compensation-split";
import { formatIndianNumber } from "@/lib/utils/format-currency";

interface SalaryCalculatorFormProps {
  value: SimpleSalaryInput;
  onChange: (next: SimpleSalaryInput) => void;
  className?: string;
  /** Ref to the headline Annual CTC input (for scroll-into-view + focus on entry). */
  annualCtcInputRef?: Ref<HTMLInputElement | null>;
}

function RegimeSwitcher({
  value,
  onChange,
}: {
  value: TaxRegime;
  onChange: (r: TaxRegime) => void;
}) {
  return (
    <div className="rounded-xl border border-navy-200 bg-white p-1 shadow-sm">
      <div className="grid grid-cols-2 gap-1">
        <button
          type="button"
          onClick={() => onChange("old")}
          className={cn(
            "rounded-lg px-3 py-2.5 text-left transition-colors",
            value === "old"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-navy-600 hover:bg-navy-50"
          )}
        >
          <span className="block text-sm font-semibold">Old regime</span>
          <span
            className={cn(
              "mt-0.5 block text-[10px] leading-snug",
              value === "old" ? "text-white/90" : "text-navy-400"
            )}
          >
            Slabs + rebates (no 80C/HRA in this quick calc)
          </span>
        </button>
        <button
          type="button"
          onClick={() => onChange("new")}
          className={cn(
            "rounded-lg px-3 py-2.5 text-left transition-colors",
            value === "new"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-navy-600 hover:bg-navy-50"
          )}
        >
          <span className="block text-sm font-semibold">New regime</span>
          <span
            className={cn(
              "mt-0.5 block text-[10px] leading-snug",
              value === "new" ? "text-white/90" : "text-navy-400"
            )}
          >
            Lower slabs; standard deduction only here
          </span>
        </button>
      </div>
    </div>
  );
}

export function SalaryCalculatorForm({
  value,
  onChange,
  className,
  annualCtcInputRef,
}: SalaryCalculatorFormProps) {
  const patch = (partial: Partial<SimpleSalaryInput>) =>
    onChange({ ...value, ...partial });

  const addDeduction = () => {
    const row: SimpleSalaryDeductionRow = {
      id: crypto.randomUUID(),
      label: "Other deduction",
      monthlyAmount: 0,
    };
    onChange({ ...value, extraDeductions: [...value.extraDeductions, row] });
  };

  const updateRow = (id: string, partial: Partial<SimpleSalaryDeductionRow>) => {
    onChange({
      ...value,
      extraDeductions: value.extraDeductions.map((r) =>
        r.id === id ? { ...r, ...partial } : r
      ),
    });
  };

  const removeRow = (id: string) => {
    onChange({
      ...value,
      extraDeductions: value.extraDeductions.filter((r) => r.id !== id),
    });
  };

  const resetToDefaults = () => {
    onChange({
      ...defaultSimpleSalaryInput,
      extraDeductions: [],
    });
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-200/60 bg-white p-5 shadow-sm md:p-7",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-bold text-navy-800 md:text-xl">
            Salary details
          </h2>
          <p className="mt-1 text-xs text-navy-500 leading-relaxed">
            Enter <strong className="font-semibold text-navy-700">total CTC</strong>{" "}
            to fill fixed pay and clear variable; add variable if part of your
            package—or edit fixed/variable directly so totals stay in sync.
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="xs"
          onClick={resetToDefaults}
          className="shrink-0 gap-1 text-[11px] font-semibold text-navy-400 hover:bg-navy-100/80 hover:text-navy-700"
          aria-label="Reset salary details to defaults"
        >
          <RotateCcw className="size-3 opacity-80" aria-hidden />
          Reset
        </Button>
      </div>

      <div className="mt-6 space-y-2">
        <Label className="text-navy-700">Tax regime</Label>
        <RegimeSwitcher
          value={value.taxRegime}
          onChange={(taxRegime) => patch({ taxRegime })}
        />
        <p className="text-[11px] leading-snug text-navy-500">
          In-hand and <span className="font-medium text-navy-700">TDS estimates</span>{" "}
          in the summary follow this regime (Old vs New slabs).
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <div
          className="rounded-xl border border-navy-200/80 bg-navy-50/40 p-4 md:p-5"
          aria-labelledby="total-ctc-heading"
        >
          <h3
            id="total-ctc-heading"
            className="text-sm font-bold text-navy-900"
          >
            Total package (CTC)
          </h3>
          <p className="mt-1 text-[11px] text-navy-500 leading-snug">
            Annual cash compensation (fixed + variable). Updating this sets fixed
            to the full amount and clears variable until you add it.
          </p>
          <div className="mt-4">
            <Label htmlFor="annual-ctc-total" className="text-navy-800">
              Annual CTC
            </Label>
            <InrMoneyInput
              ref={annualCtcInputRef}
              id="annual-ctc-total"
              value={annualPackageTotal(
                value.annualFixedPay,
                value.annualVariablePay
              )}
              onCommit={(n) => {
                const next = reconcileAfterTotalCtc(n);
                onChange({
                  ...value,
                  annualFixedPay: next.annualFixedPay,
                  annualVariablePay: next.annualVariablePay,
                });
              }}
              className="mt-1.5"
              aria-label="Annual total CTC"
            />
            <p className="mt-1.5 text-[11px] tabular-nums text-navy-400">
              Fixed ₹{formatIndianNumber(value.annualFixedPay)} + variable ₹
              {formatIndianNumber(value.annualVariablePay)} = ₹
              {formatIndianNumber(
                annualPackageTotal(
                  value.annualFixedPay,
                  value.annualVariablePay
                )
              )}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl border border-teal-200/80 bg-teal-50/25 p-4 md:p-5"
          aria-labelledby="fixed-pay-heading"
        >
          <h3
            id="fixed-pay-heading"
            className="text-sm font-bold text-teal-900"
          >
            Fixed pay
          </h3>
          <p className="mt-1 text-[11px] text-teal-900/70 leading-snug">
            Core salary you can treat as dependable monthly cash (before
            statutory deductions and TDS).
          </p>
          <div className="mt-4">
            <Label htmlFor="annual-fixed" className="text-navy-800">
              Annual fixed pay
            </Label>
            <InrMoneyInput
              id="annual-fixed"
              value={value.annualFixedPay}
              onCommit={(n) => {
                const next = reconcileAfterFixedPay(
                  n,
                  value.annualFixedPay,
                  value.annualVariablePay
                );
                onChange({
                  ...value,
                  annualFixedPay: next.annualFixedPay,
                  annualVariablePay: next.annualVariablePay,
                });
              }}
              className="mt-1.5"
              aria-label="Annual fixed pay"
            />
          </div>
        </div>

        <div
          className="rounded-xl border border-dashed border-amber-300/90 bg-amber-50/30 p-4 md:p-5"
          aria-labelledby="variable-pay-heading"
        >
          <h3
            id="variable-pay-heading"
            className="text-sm font-bold text-amber-950"
          >
            Variable pay
          </h3>
          <p className="mt-1 text-[11px] text-amber-950/75 leading-snug">
            Variable CTC, performance bonus, or incentives—often not paid every
            month and not guaranteed. We still spread it over 12 months for an
            &quot;illustrative&quot; in-hand next to your fixed-only number.
          </p>
          <div className="mt-4">
            <Label htmlFor="annual-variable" className="text-navy-800">
              Annual variable pay (expected)
            </Label>
            <InrMoneyInput
              id="annual-variable"
              value={value.annualVariablePay}
              onCommit={(n) => {
                const next = reconcileAfterVariablePay(
                  n,
                  value.annualFixedPay,
                  value.annualVariablePay
                );
                onChange({
                  ...value,
                  annualFixedPay: next.annualFixedPay,
                  annualVariablePay: next.annualVariablePay,
                });
              }}
              className="mt-1.5"
              aria-label="Annual variable pay"
            />
          </div>
        </div>

        <div className="border-t border-navy-100 pt-6">
          <p className="text-sm font-semibold text-navy-800">
            Standard monthly deductions
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-1">
            <div>
              <Label htmlFor="prof-tax" className="text-navy-700">
                Professional tax
              </Label>
              <InrMoneyInput
                id="prof-tax"
                value={value.monthlyProfessionalTax}
                onCommit={(n) => patch({ monthlyProfessionalTax: n })}
                deductionStyle
                className="mt-1.5"
                aria-label="Monthly professional tax"
              />
            </div>
            <div>
              <Label htmlFor="emp-pf" className="text-navy-700">
                Employee PF
              </Label>
              <InrMoneyInput
                id="emp-pf"
                value={value.monthlyEmployeePf}
                onCommit={(n) => patch({ monthlyEmployeePf: n })}
                deductionStyle
                className="mt-1.5"
                aria-label="Monthly employee PF"
              />
            </div>
            <div>
              <Label htmlFor="er-pf" className="text-navy-700">
                Employer PF (monthly)
              </Label>
              <InrMoneyInput
                id="er-pf"
                value={value.monthlyEmployerPf}
                onCommit={(n) => patch({ monthlyEmployerPf: n })}
                className="mt-1.5"
                aria-label="Monthly employer PF contribution"
              />
              <p className="mt-1 text-[11px] text-navy-400">
                Does not reduce in-hand; shown in the composition chart as part
                of your package.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-100 pt-5">
          {value.extraDeductions.map((row) => (
            <div
              key={row.id}
              className="mb-4 flex flex-col gap-2 rounded-xl border border-navy-100 bg-navy-50/40 p-3 sm:flex-row sm:items-end"
            >
              <div className="min-w-0 flex-1">
                <Label className="text-xs text-navy-600">Label</Label>
                <Input
                  value={row.label}
                  onChange={(e) => updateRow(row.id, { label: e.target.value })}
                  className="mt-1"
                  aria-label="Deduction label"
                />
              </div>
              <div className="w-full sm:w-44">
                <Label className="text-xs text-navy-600">Monthly</Label>
                <InrMoneyInput
                  value={row.monthlyAmount}
                  onCommit={(n) => updateRow(row.id, { monthlyAmount: n })}
                  deductionStyle
                  className="mt-1"
                  aria-label={`Monthly amount for ${row.label}`}
                />
              </div>
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="flex h-8 w-8 shrink-0 items-center justify-center self-end rounded-lg text-navy-400 transition-colors hover:bg-danger-50 hover:text-danger-600"
                aria-label="Remove deduction"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDeduction}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            <Plus className="size-4" aria-hidden />
            Add deduction
          </button>
        </div>
      </div>
    </div>
  );
}
