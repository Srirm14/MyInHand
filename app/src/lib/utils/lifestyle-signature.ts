import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";

const KEYS: (keyof LifestyleExpenses)[] = [
  "rent",
  "food",
  "transport",
  "misc",
  "utilities",
  "shopping",
  "savings",
  "investments",
];

function roundMoney(n: number): number {
  return Math.max(0, Math.round(Number(n) || 0));
}

/**
 * Canonical compare key for lifestyle JSON vs Zustand — avoids infinite autosave
 * when server JSON key order differs from client object insertion order.
 */
export function stableLifestyleSignature(e: LifestyleExpenses): string {
  return KEYS.map((k) => `${k}:${roundMoney(e[k])}`).join("|");
}

/** Normalize planning `lifestyle_json` (unknown shape from Supabase) for comparison. */
export function stableLifestyleSignatureFromPlanningJson(
  lj: unknown
): string {
  if (!lj || typeof lj !== "object" || Array.isArray(lj)) {
    return KEYS.map((k) => `${k}:0`).join("|");
  }
  const o = lj as Record<string, unknown>;
  return KEYS.map((k) => `${k}:${roundMoney(Number(o[k as string]))}`).join(
    "|"
  );
}
