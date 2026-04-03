import type { CityTier } from "@/lib/constants/city-tiers";
import type { TaxRegime } from "./salary.types";

/** Editable row in the offer comparison tool (also stored in recent history). */
export interface OfferDraft {
  id: string;
  companyName: string;
  annualCTC: number;
  cityTier: CityTier;
  taxRegime: TaxRegime;
  joiningBonus: number;
  esopValue: number;
  /** Populated when row came from mock document parse */
  documentFileName?: string;
}

export interface OfferInput {
  id: string;
  companyName: string;
  annualCTC: number;
  cityTier: CityTier;
  taxRegime: TaxRegime;
  joiningBonus?: number;
  esopValue?: number;
}

export interface OfferComparison {
  offer: OfferInput;
  monthlyInHand: number;
  annualTax: number;
  totalValue: number;
  score: number;
}
