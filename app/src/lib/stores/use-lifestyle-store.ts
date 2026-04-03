import { create } from "zustand";
import type { LifestyleExpenses, SurplusResult } from "@/lib/types/lifestyle.types";

interface LifestyleState {
  expenses: LifestyleExpenses;
  setExpense: (key: keyof LifestyleExpenses, value: number) => void;
  calculateSurplus: (monthlyInHand: number) => SurplusResult;
  reset: () => void;
}

const defaultExpenses: LifestyleExpenses = {
  rent: 45_000,
  food: 12_000,
  transport: 8_500,
  misc: 5_000,
};

export const useLifestyleStore = create<LifestyleState>((set, get) => ({
  expenses: defaultExpenses,

  setExpense: (key, value) =>
    set((state) => ({
      expenses: { ...state.expenses, [key]: value },
    })),

  calculateSurplus: (monthlyInHand: number): SurplusResult => {
    const { expenses } = get();
    const totalExpenses =
      expenses.rent + expenses.food + expenses.transport + expenses.misc;
    const surplus = monthlyInHand - totalExpenses;
    const surplusPercent =
      monthlyInHand > 0
        ? Number(((surplus / monthlyInHand) * 100).toFixed(1))
        : 0;

    return {
      totalExpenses,
      netIncome: monthlyInHand,
      surplus,
      surplusPercent,
      isDeficit: surplus < 0,
    };
  },

  reset: () => set({ expenses: defaultExpenses }),
}));
