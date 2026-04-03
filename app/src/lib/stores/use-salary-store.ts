import { create } from "zustand";
import type { SalaryInput, SalaryBreakdown } from "@/lib/types/salary.types";
import type { CityTier } from "@/lib/constants/city-tiers";
import type { TaxRegime } from "@/lib/types/salary.types";
import {
  aggregateBreakdownTotals,
  calculateSalaryBreakdown,
} from "@/lib/utils/calculate-salary";
import { mockParseSalaryDocument } from "@/lib/mocks/parse-salary-document.mock";

interface SalaryState {
  input: SalaryInput;
  breakdown: SalaryBreakdown | null;
  setInput: (input: Partial<SalaryInput>) => void;
  calculateBreakdown: () => void;
  /** After mock document parse — sets input + breakdown */
  applyParsedSalaryDocument: (file: File) => Promise<void>;
  /** User edits a monthly cell in breakup table */
  updateBreakdownComponentMonthly: (id: string, monthlyValue: number) => void;
  reset: () => void;
}

const defaultInput: SalaryInput = {
  fullName: "",
  email: "",
  annualCTC: 1_200_000,
  cityTier: "tier1" as CityTier,
  taxRegime: "old" as TaxRegime,
};

export const useSalaryStore = create<SalaryState>((set, get) => ({
  input: defaultInput,
  breakdown: null,

  setInput: (partial) =>
    set((state) => ({
      input: { ...state.input, ...partial },
    })),

  calculateBreakdown: () => {
    const { input } = get();
    if (input.annualCTC <= 0) return;

    const isDoc = input.resultSource === "document_parsed";
    const breakdown = calculateSalaryBreakdown(
      input.annualCTC,
      input.cityTier,
      input.taxRegime,
      {
        resultSource: isDoc ? "document_parsed" : "manual_estimated",
        documentFileName: isDoc ? input.documentFileName : undefined,
        componentsAdjusted: false,
      }
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
    const { breakdown, input } = get();
    if (!breakdown) return;
    const v = Math.max(0, monthlyValue);
    const nextComponents = breakdown.components.map((c) =>
      c.id === id
        ? {
            ...c,
            monthlyValue: v,
            annualValue: Math.round(v * 12),
          }
        : c
    );
    const totals = aggregateBreakdownTotals(nextComponents, input.annualCTC);
    set({
      breakdown: {
        ...breakdown,
        components: nextComponents,
        ...totals,
        meta: {
          ...breakdown.meta,
          resultSource:
            breakdown.meta?.resultSource ?? "manual_estimated",
          componentsAdjusted: true,
        },
      },
    });
  },

  reset: () => set({ input: defaultInput, breakdown: null }),
}));
