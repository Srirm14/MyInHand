import { create } from "zustand";
import type {
  SalaryInput,
  SalaryBreakdown,
  SalaryComponent,
  TaxRegime,
} from "@/lib/types/salary.types";
import type { CityTier } from "@/lib/constants/city-tiers";
import {
  calculateSalaryBreakdown,
  recalculateBreakdownFromComponents,
} from "@/lib/utils/calculate-salary";
import type { CompensationPdfParseResult } from "@/lib/salary/pdf/salary-pdf-parse.types";
import type { SalaryPdfReviewSelection } from "@/lib/salary/pdf/apply-salary-pdf-to-state";
import { buildSalaryStateFromPdfReview } from "@/lib/salary/pdf/apply-salary-pdf-to-state";
import { buildBreakdownRecalcContext } from "@/lib/stores/salary-breakdown-recalc-context";

interface SalaryState {
  input: SalaryInput;
  breakdown: SalaryBreakdown | null;
  /** Last salary history entry applied from nav/history (for highlighting). */
  activeSalaryHistoryId: string | null;
  setActiveSalaryHistoryId: (id: string | null) => void;
  setInput: (input: Partial<SalaryInput>) => void;
  /** Updates regime and recomputes tax from the current component table (preserves edits). */
  setTaxRegime: (taxRegime: TaxRegime) => void;
  calculateBreakdown: () => void;
  /** After PDF review — sets input + breakdown from structured parse */
  applySalaryPdfReview: (
    parse: CompensationPdfParseResult,
    selection: SalaryPdfReviewSelection,
    env: { cityTier: CityTier; taxRegime: TaxRegime }
  ) => void;
  /** User edits a monthly cell in breakup table */
  updateBreakdownComponentMonthly: (id: string, monthlyValue: number) => void;
  patchBreakdownComponent: (
    id: string,
    patch: {
      monthlyValue?: number;
      annualValue?: number;
      name?: string;
      verificationDismissed?: boolean;
    }
  ) => void;
  addBreakdownAllowanceRow: () => void;
  addBreakdownVariableRow: () => void;
  removeBreakdownComponent: (id: string) => void;
  reset: () => void;
}

/** Clean slate for “new in-hand check” / salary input step (no default CTC). */
export const emptySalaryInput: SalaryInput = {
  fullName: "",
  email: "",
  annualCTC: 0,
  compensationMode: "total_only",
  fixedAnnual: 0,
  variableAnnual: 0,
  cityTier: "tier1" as CityTier,
  taxRegime: "old" as TaxRegime,
  resultSource: "manual_estimated",
  documentFileName: undefined,
};

export const useSalaryStore = create<SalaryState>((set, get) => ({
  input: { ...emptySalaryInput },
  breakdown: null,
  activeSalaryHistoryId: null,

  setActiveSalaryHistoryId: (id) => set({ activeSalaryHistoryId: id }),

  setInput: (partial) =>
    set((state) => ({
      input: { ...state.input, ...partial },
    })),

  setTaxRegime: (taxRegime) =>
    set((state) => {
      const nextInput = { ...state.input, taxRegime };
      return {
        input: nextInput,
        breakdown:
          state.breakdown != null
            ? recalculateBreakdownFromComponents(
                state.breakdown.components,
                buildBreakdownRecalcContext(nextInput)
              )
            : state.breakdown,
      };
    }),

  calculateBreakdown: () => {
    const { input } = get();
    if (input.annualCTC <= 0) return;

    const isDoc = input.resultSource === "document_parsed";
    const variableAnnual =
      input.compensationMode === "fixed_variable"
        ? (input.variableAnnual ?? 0)
        : 0;
    const breakdown = calculateSalaryBreakdown(
      input.annualCTC,
      input.cityTier,
      input.taxRegime,
      {
        resultSource: isDoc ? "document_parsed" : "manual_estimated",
        documentFileName: isDoc ? input.documentFileName : undefined,
        componentsAdjusted: false,
      },
      { variableAnnual }
    );
    set({ breakdown });
  },

  applySalaryPdfReview: (parse, selection, env) => {
    const { input, breakdown } = buildSalaryStateFromPdfReview(
      parse,
      selection,
      env
    );
    set({ input, breakdown });
  },

  updateBreakdownComponentMonthly: (id, monthlyValue) => {
    get().patchBreakdownComponent(id, { monthlyValue });
  },

  patchBreakdownComponent: (id, patch) => {
    const { breakdown, input } = get();
    if (!breakdown) return;

    const amountTouch =
      patch.monthlyValue !== undefined || patch.annualValue !== undefined;
    const nameTouch = patch.name !== undefined;
    const verifyTouch = patch.verificationDismissed === true;
    if (!amountTouch && !nameTouch && !verifyTouch) return;

    const next = breakdown.components.map((c) => {
      if (c.id !== id) return c;

      if (verifyTouch && !amountTouch && !nameTouch) {
        return {
          ...c,
          verificationDismissed: true,
          needsVerification: false,
        };
      }

      let nextC: SalaryComponent = { ...c };

      if (amountTouch) {
        let monthly = c.monthlyValue;
        let annual = c.annualValue;
        if (patch.monthlyValue !== undefined) {
          monthly = Math.max(0, Math.round(patch.monthlyValue));
          annual = monthly * 12;
        } else if (patch.annualValue !== undefined) {
          annual = Math.max(0, Math.round(patch.annualValue));
          monthly = Math.round(annual / 12);
        }
        nextC = {
          ...nextC,
          monthlyValue: monthly,
          annualValue: annual,
          lineSource: "user_edited",
          needsVerification: false,
          verificationDismissed: true,
        };
      }

      if (nameTouch) {
        nextC = {
          ...nextC,
          name: patch.name!.trim() || c.name,
          ...(!amountTouch ? { lineSource: "user_edited" as const } : {}),
        };
      }

      return nextC;
    });
    set({
      breakdown: recalculateBreakdownFromComponents(
        next,
        buildBreakdownRecalcContext(input)
      ),
    });
  },

  addBreakdownAllowanceRow: () => {
    const { breakdown, input } = get();
    if (!breakdown) return;
    const id = `allow_${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
    const row: SalaryComponent = {
      id,
      name: "Custom allowance",
      description: "Rename to match your payslip (e.g. vehicle, washing)",
      monthlyValue: 0,
      annualValue: 0,
      type: "earning",
      group: "earnings",
      section: "allowance",
      lineSource: "user_edited",
      isCustom: true,
      removable: true,
      tags: ["recurring", "tax_sensitive"],
    };
    set({
      breakdown: recalculateBreakdownFromComponents(
        [...breakdown.components, row],
        buildBreakdownRecalcContext(input)
      ),
    });
  },

  addBreakdownVariableRow: () => {
    const { breakdown, input } = get();
    if (!breakdown) return;
    const id = `var_${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
    const row: SalaryComponent = {
      id,
      name: "Variable / bonus line",
      description: "Joining bonus, retention, profit share, etc.",
      monthlyValue: 0,
      annualValue: 0,
      type: "earning",
      group: "earnings",
      section: "variable_pay",
      lineSource: "user_edited",
      isCustom: true,
      removable: true,
      tags: ["conditional", "one_time"],
    };
    set({
      breakdown: recalculateBreakdownFromComponents(
        [...breakdown.components, row],
        buildBreakdownRecalcContext(input)
      ),
    });
  },

  removeBreakdownComponent: (id) => {
    const { breakdown, input } = get();
    if (!breakdown) return;
    const row = breakdown.components.find((c) => c.id === id);
    if (!row?.removable) return;
    set({
      breakdown: recalculateBreakdownFromComponents(
        breakdown.components.filter((c) => c.id !== id),
        buildBreakdownRecalcContext(input)
      ),
    });
  },

  reset: () =>
    set({
      input: { ...emptySalaryInput },
      breakdown: null,
      activeSalaryHistoryId: null,
    }),
}));
