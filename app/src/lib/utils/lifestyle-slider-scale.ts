/** Hard ceiling for typed monthly amounts (sanity guard, not a product “plan limit”). */
export const LIFESTYLE_MONTHLY_MAX_RUPEES = 10_00_00_000;

const NICE_UPPER_BOUNDS: readonly number[] = [
  5_000, 10_000, 15_000, 20_000, 25_000, 30_000, 35_000, 40_000, 45_000, 50_000,
  60_000, 70_000, 75_000, 80_000, 90_000, 1_00_000, 1_25_000, 1_50_000,
  1_75_000, 2_00_000, 2_25_000, 2_50_000, 3_00_000, 3_50_000, 4_00_000,
  5_00_000, 6_00_000, 7_50_000, 8_00_000, 10_00_000, 12_00_000, 15_00_000,
  20_00_000, 25_00_000, 30_00_000, 40_00_000, 50_00_000, 75_00_000,
  1_00_00_000, 2_00_00_000, 5_00_00_000, LIFESTYLE_MONTHLY_MAX_RUPEES,
];

export function clampLifestyleMonthlyRupees(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.min(
    Math.max(0, Math.round(n)),
    LIFESTYLE_MONTHLY_MAX_RUPEES
  );
}

/**
 * Slider track max: starts from category `suggestedMax`, grows with the current
 * value so typing a large number never hits a “stuck” thumb at 100%.
 */
export function computeLifestyleSliderMax(
  suggestedMax: number,
  value: number,
  step: number
): number {
  const s = Math.max(0, suggestedMax);
  const v = Math.max(0, value);
  const st = Math.max(1, step);
  const baseline = Math.max(s, st);
  const headroom = Math.max(v * 1.08 + st * 2, baseline);
  const raw = Math.max(headroom, v + st);
  const snappedUp = Math.ceil(raw / st) * st;
  const pick = NICE_UPPER_BOUNDS.find((x) => x >= snappedUp);
  if (pick !== undefined) return pick;
  const ladder =
    Math.ceil(snappedUp / 10_00_000) * 10_00_000;
  return Math.min(
    Math.max(ladder, snappedUp),
    LIFESTYLE_MONTHLY_MAX_RUPEES
  );
}

/** Short label for the high end of the slider track (not a typed-amount cap). */
export function formatLifestyleScaleHigh(rupees: number): string {
  if (rupees >= 100_000) {
    const lakhs = rupees / 100_000;
    const t = Number.isInteger(lakhs)
      ? String(lakhs)
      : lakhs.toFixed(1).replace(/\.?0+$/, "");
    return `₹${t}L`;
  }
  if (rupees >= 1000) return `₹${Math.round(rupees / 1000)}K`;
  return `₹${rupees.toLocaleString("en-IN")}`;
}
