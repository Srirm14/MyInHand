import { create } from "zustand";
import type { HistoryEntry } from "@/lib/types/history.types";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { SalaryInput } from "@/lib/types/salary.types";
import type { TaxRegime } from "@/lib/types/salary.types";

const MAX = 5;

function regimeLabel(regime: TaxRegime): string {
  return regime === "old" ? "Old regime" : "New regime";
}

interface HistoryState {
  entries: HistoryEntry[];
  pushSalaryCalculation: (input: SalaryInput, monthlyInHand: number) => void;
  pushOfferComparison: (
    offers: OfferDraft[],
    validCompanies: { companyName: string; monthlyInHand: number; firstYearValue: number }[]
  ) => void;
}

export const useHistoryStore = create<HistoryState>((set) => ({
  entries: [],

  pushSalaryCalculation: (input, monthlyInHand) => {
    const title =
      input.fullName?.trim() ||
      `₹${(input.annualCTC / 100000).toFixed(1)}L CTC`;
    const entry: HistoryEntry = {
      kind: "salary",
      id: crypto.randomUUID(),
      at: Date.now(),
      title,
      annualCTC: input.annualCTC,
      monthlyInHand,
      regimeLabel: regimeLabel(input.taxRegime),
      snapshot: { ...input },
    };
    set((s) => ({
      entries: [entry, ...s.entries].slice(0, MAX),
    }));
  },

  pushOfferComparison: (offers, validCompanies) => {
    if (validCompanies.length < 2) return;

    const bestHand = validCompanies.reduce((a, b) =>
      b.monthlyInHand > a.monthlyInHand ? b : a
    );
    const bestVal = validCompanies.reduce((a, b) =>
      b.firstYearValue > a.firstYearValue ? b : a
    );
    let winnerSummary: string;
    if (bestHand.companyName === bestVal.companyName) {
      winnerSummary = `${bestHand.companyName} leads on in-hand & 1Y value`;
    } else {
      winnerSummary = `${bestHand.companyName} best in-hand · ${bestVal.companyName} best 1Y value`;
    }

    const entry: HistoryEntry = {
      kind: "offer_comparison",
      id: crypto.randomUUID(),
      at: Date.now(),
      title: `Compare ${validCompanies.length} offers`,
      offerCount: validCompanies.length,
      winnerSummary,
      offersSnapshot: offers.map((o) => ({ ...o })),
    };

    set((s) => ({
      entries: [entry, ...s.entries].slice(0, MAX),
    }));
  },
}));
