import type { OfferDraft } from "./offer.types";
import type { SalaryInput, SalaryResultSource } from "./salary.types";

export interface SalaryHistoryEntry {
  kind: "salary";
  id: string;
  at: number;
  /** Primary line, e.g. name or CTC label */
  title: string;
  annualCTC: number;
  monthlyInHand: number;
  regimeLabel: string;
  snapshot: SalaryInput;
  resultSource?: SalaryResultSource;
}

export interface OfferComparisonHistoryEntry {
  kind: "offer_comparison";
  id: string;
  at: number;
  title: string;
  offerCount: number;
  winnerSummary: string;
  offersSnapshot: OfferDraft[];
}

export type HistoryEntry = SalaryHistoryEntry | OfferComparisonHistoryEntry;
