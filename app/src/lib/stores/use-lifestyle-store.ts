import { create } from "zustand";
import type { LifestyleExpenses, SurplusResult } from "@/lib/types/lifestyle.types";

interface LifestyleState {
  expenses: LifestyleExpenses;
  setExpense: (key: keyof LifestyleExpenses, value: number) => void;
  /** Merge remote JSON into expenses (e.g. after loading a salary session). */
  hydrateFromJson: (patch: Partial<LifestyleExpenses> | null | undefined) => void;
  calculateSurplus: (monthlyInHand: number) => SurplusResult;
  reset: () => void;
}

const defaultExpenses: LifestyleExpenses = {
  rent: 45_000,
  food: 12_000,
  transport: 8_500,
  misc: 5_000,
  utilities: 0,
  shopping: 0,
  savings: 0,
  investments: 0,
};

export const useLifestyleStore = create<LifestyleState>((set, get) => ({
  expenses: defaultExpenses,

  setExpense: (key, value) =>
    set((state) => ({
      expenses: { ...state.expenses, [key]: Math.max(0, Math.round(value)) },
    })),

  hydrateFromJson: (patch) =>
    set((state) => ({
      expenses: {
        ...state.expenses,
        ...(patch ?? {}),
      },
    })),

  calculateSurplus: (monthlyInHand: number): SurplusResult => {
    const e = get().expenses;
    const livingExpenses =
      e.rent +
      e.food +
      e.transport +
      e.misc +
      e.utilities +
      e.shopping;
    const plannedSavings = e.savings;
    const plannedInvestments = e.investments;
    const totalMonthlyOutflow =
      livingExpenses + plannedSavings + plannedInvestments;
    const surplus = monthlyInHand - totalMonthlyOutflow;
    const surplusPercent =
      monthlyInHand > 0
        ? Number(((surplus / monthlyInHand) * 100).toFixed(1))
        : 0;

    return {
      livingExpenses,
      plannedSavings,
      plannedInvestments,
      totalMonthlyOutflow,
      totalExpenses: livingExpenses,
      netIncome: monthlyInHand,
      surplus,
      surplusPercent,
      isDeficit: surplus < 0,
    };
  },

  reset: () => set({ expenses: defaultExpenses }),
}));
