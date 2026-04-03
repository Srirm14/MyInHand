import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { HistoryEntry } from "@/lib/types/history.types";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { SalaryInput } from "@/lib/types/salary.types";
import type { TaxRegime } from "@/lib/types/salary.types";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";

const MAX_MIXED_ENTRIES = 5;
/** Premium nav + history page — salary-only contexts (not offer rows). */
const MAX_SALARY_CONTEXTS = 40;

function regimeLabel(regime: TaxRegime): string {
  return regime === "old" ? "Old regime" : "New regime";
}

interface HistoryState {
  entries: HistoryEntry[];
  /** Salary runs only — newest first; powers nav switcher & /salary/history. */
  salaryContexts: SalaryHistoryEntry[];
  pushSalaryCalculation: (input: SalaryInput, monthlyInHand: number) => string;
  pushOfferComparison: (
    offers: OfferDraft[],
    validCompanies: {
      companyName: string;
      monthlyInHand: number;
      firstYearValue: number;
    }[]
  ) => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      entries: [],
      salaryContexts: [],

      pushSalaryCalculation: (input, monthlyInHand) => {
        const id = crypto.randomUUID();
        const title =
          input.fullName?.trim() ||
          `₹${(input.annualCTC / 100000).toFixed(1)}L CTC`;
        const entry: SalaryHistoryEntry = {
          kind: "salary",
          id,
          at: Date.now(),
          title,
          annualCTC: input.annualCTC,
          monthlyInHand,
          regimeLabel: regimeLabel(input.taxRegime),
          snapshot: { ...input },
          resultSource: input.resultSource,
        };
        set((s) => ({
          entries: [entry, ...s.entries].slice(0, MAX_MIXED_ENTRIES),
          salaryContexts: [entry, ...s.salaryContexts].slice(0, MAX_SALARY_CONTEXTS),
        }));
        return id;
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
          entries: [entry, ...s.entries].slice(0, MAX_MIXED_ENTRIES),
        }));
      },
    }),
    {
      name: "inhand-history",
      partialize: (s) => ({
        entries: s.entries,
        salaryContexts: s.salaryContexts,
      }),
      merge: (persisted, current) => {
        const p = persisted as Partial<HistoryState> | undefined;
        const entries = p?.entries ?? current.entries;
        const salaryContexts =
          p?.salaryContexts && p.salaryContexts.length > 0
            ? p.salaryContexts
            : entries.filter((e): e is SalaryHistoryEntry => e.kind === "salary");
        return {
          ...current,
          ...p,
          entries,
          salaryContexts,
        };
      },
    }
  )
);
