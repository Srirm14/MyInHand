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
import { mockParseSalaryDocument } from "@/lib/mocks/parse-salary-document.mock";
import { buildBreakdownRecalcContext } from "@/lib/stores/salary-breakdown-recalc-context";

interface SalaryState {
  input: SalaryInput;
  breakdown: SalaryBreakdown | null;
  /** Last salary history entry applied from nav/history (for highlighting). */
  activeSalaryHistoryId: string | null;
  setActiveSalaryHistoryId: (id: string | null) => void;
  setInput: (input: Partial<SalaryInput>) => void;
  calculateBreakdown: () => void;
  /** After mock document parse — sets input + breakdown */
  applyParsedSalaryDocument: (file: File) => Promise<void>;
  /** User edits a monthly cell in breakup table */
  updateBreakdownComponentMonthly: (id: string, monthlyValue: number) => void;
  patchBreakdownComponent: (
    id: string,
    patch: { monthlyValue?: number; annualValue?: number; name?: string }
  ) => void;
  addBreakdownAllowanceRow: () => void;
  addBreakdownVariableRow: () => void;
  removeBreakdownComponent: (id: string) => void;
  reset: () => void;
}

const defaultInput: SalaryInput = {
  fullName: "",
  email: "",
  annualCTC: 1_200_000,
  compensationMode: "total_only",
  fixedAnnual: 0,
  variableAnnual: 0,
  cityTier: "tier1" as CityTier,
  taxRegime: "old" as TaxRegime,
};

export const useSalaryStore = create<SalaryState>((set, get) => ({
  input: defaultInput,
  breakdown: null,
  activeSalaryHistoryId: null,

  setActiveSalaryHistoryId: (id) => set({ activeSalaryHistoryId: id }),

  setInput: (partial) =>
    set((state) => ({
      input: { ...state.input, ...partial },
    })),

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

  applyParsedSalaryDocument: async (file) => {
    const { input: current } = get();
    const { input, breakdown } = await mockParseSalaryDocument(file, {
      cityTier: current.cityTier,
      taxRegime: current.taxRegime,
    });
    set({ input, breakdown });
  },

  updateBreakdownComponentMonthly: (id, monthlyValue) => {
    get().patchBreakdownComponent(id, { monthlyValue });
  },

  patchBreakdownComponent: (id, patch) => {
    const { breakdown, input } = get();
    if (!breakdown) return;
    const next = breakdown.components.map((c) => {
      if (c.id !== id) return c;
      let monthly = c.monthlyValue;
      let annual = c.annualValue;
      if (patch.monthlyValue !== undefined) {
        monthly = Math.max(0, Math.round(patch.monthlyValue));
        annual = monthly * 12;
      } else if (patch.annualValue !== undefined) {
        annual = Math.max(0, Math.round(patch.annualValue));
        monthly = Math.round(annual / 12);
      }
      const name =
        patch.name !== undefined
          ? (patch.name.trim() || c.name)
          : c.name;
      return {
        ...c,
        name,
        monthlyValue: monthly,
        annualValue: annual,
        lineSource: "user_edited" as const,
      };
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
    set({ input: defaultInput, breakdown: null, activeSalaryHistoryId: null }),
}));
