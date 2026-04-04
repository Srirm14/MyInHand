import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { salarySessionListTitle } from "@/lib/utils/salary-input-profile";
import type { HistoryEntry } from "@/lib/types/history.types";
import type { OfferDraft } from "@/lib/types/offer.types";
import type { SalaryInput } from "@/lib/types/salary.types";
import type { TaxRegime } from "@/lib/types/salary.types";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";

const MAX_MIXED_ENTRIES = 5;
/** Max salary runs stored on device (nav shows 5 most recent; full list on /salary/history). */
export const SALARY_HISTORY_MAX_ENTRIES = 40;

function regimeLabel(regime: TaxRegime): string {
  return regime === "old" ? "Old regime" : "New regime";
}

interface HistoryState {
  entries: HistoryEntry[];
  /** Salary runs only — newest first; powers nav switcher & /salary/history. */
  salaryContexts: SalaryHistoryEntry[];
  /** Remove one saved salary from nav/history (and matching mixed `entries` row). */
  removeSalaryContext: (id: string) => void;
  /** Remove one offer-comparison row from mixed `entries` only. */
  removeOfferComparisonEntry: (id: string) => void;
  pushSalaryCalculation: (
    input: SalaryInput,
    monthlyInHand: number
  ) => string | null;
  pushOfferComparison: (
    offers: OfferDraft[],
    validCompanies: {
      companyName: string;
      monthlyInHand: number;
      firstYearValue: number;
    }[]
  ) => string | undefined;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set, get) => ({
      entries: [],
      salaryContexts: [],

      removeSalaryContext: (id) =>
        set((s) => ({
          salaryContexts: s.salaryContexts.filter((e) => e.id !== id),
          entries: s.entries.filter(
            (e) => !(e.kind === "salary" && e.id === id)
          ),
        })),

      removeOfferComparisonEntry: (id) =>
        set((s) => ({
          entries: s.entries.filter(
            (e) => !(e.kind === "offer_comparison" && e.id === id)
          ),
        })),

      pushSalaryCalculation: (input, monthlyInHand) => {
        const { salaryContexts } = get();
        if (salaryContexts.length >= SALARY_HISTORY_MAX_ENTRIES) {
          return null;
        }
        const id = crypto.randomUUID();
        const title = salarySessionListTitle(
          input,
          useAuthStore.getState().user
        );
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
          salaryContexts: [entry, ...s.salaryContexts].slice(
            0,
            SALARY_HISTORY_MAX_ENTRIES
          ),
        }));
        return id;
      },

      pushOfferComparison: (offers, validCompanies) => {
        if (validCompanies.length < 2) return undefined;

        const first = validCompanies[0]!;
        const bestHand = validCompanies.reduce(
          (a, b) => (b.monthlyInHand > a.monthlyInHand ? b : a),
          first
        );
        const bestVal = validCompanies.reduce(
          (a, b) => (b.firstYearValue > a.firstYearValue ? b : a),
          first
        );
        let winnerSummary: string;
        if (bestHand.companyName === bestVal.companyName) {
          winnerSummary = `${bestHand.companyName} leads on in-hand & 1Y value`;
        } else {
          winnerSummary = `${bestHand.companyName} best in-hand · ${bestVal.companyName} best 1Y value`;
        }

        const id = crypto.randomUUID();
        const entry: HistoryEntry = {
          kind: "offer_comparison",
          id,
          at: Date.now(),
          title: `Compare ${validCompanies.length} offers`,
          offerCount: validCompanies.length,
          winnerSummary,
          offersSnapshot: offers.map((o) => ({ ...o })),
        };

        set((s) => ({
          entries: [entry, ...s.entries].slice(0, MAX_MIXED_ENTRIES),
        }));
        return id;
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
        const salaryContextsRaw =
          p?.salaryContexts && p.salaryContexts.length > 0
            ? p.salaryContexts
            : entries.filter((e): e is SalaryHistoryEntry => e.kind === "salary");
        const salaryContexts = salaryContextsRaw.slice(
          0,
          SALARY_HISTORY_MAX_ENTRIES
        );
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
