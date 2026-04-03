import { create } from "zustand";
import type { SalaryInput, SalaryBreakdown } from "@/lib/types/salary.types";
import type { CityTier } from "@/lib/constants/city-tiers";
import type { TaxRegime } from "@/lib/types/salary.types";
import { calculateSalaryBreakdown } from "@/lib/utils/calculate-salary";

interface SalaryState {
  // Input
  input: SalaryInput;
  // Derived
  breakdown: SalaryBreakdown | null;
  // Actions
  setInput: (input: Partial<SalaryInput>) => void;
  calculateBreakdown: () => void;
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

    const breakdown = calculateSalaryBreakdown(
      input.annualCTC,
      input.cityTier,
      input.taxRegime
    );
    set({ breakdown });
  },

  reset: () => set({ input: defaultInput, breakdown: null }),
}));
