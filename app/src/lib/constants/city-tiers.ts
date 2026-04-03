export type CityTier = "tier1" | "tier2" | "tier3";

export interface CityTierConfig {
  value: CityTier;
  label: string;
  sublabel: string;
  /** HRA percentage of Basic Salary */
  hraPercent: number;
}

export const CITY_TIERS: CityTierConfig[] = [
  { value: "tier1", label: "Tier 1", sublabel: "Metro", hraPercent: 0.5 },
  { value: "tier2", label: "Tier 2", sublabel: "Urban", hraPercent: 0.4 },
  { value: "tier3", label: "Tier 3", sublabel: "Semi-Urban", hraPercent: 0.3 },
];
