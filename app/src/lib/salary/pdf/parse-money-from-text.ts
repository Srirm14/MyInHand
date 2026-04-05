/**
 * Parse rupee-style amounts from noisy PDF text (commas, ₹, lakhs/crores).
 * Returns integer rupees (rounded).
 */
export function parseMoneyTokens(text: string): number[] {
  const t = text.replace(/\u00a0/g, " ");
  const out: number[] = [];

  const lakhRe = /(\d+(?:[.,]\d+)?)\s*l(?:akhs?)?\b/gi;
  for (const m of t.matchAll(lakhRe)) {
    const n = parseFloat(m[1]!.replace(/,/g, ""));
    if (Number.isFinite(n)) out.push(Math.round(n * 100_000));
  }

  const crRe = /(\d+(?:[.,]\d+)?)\s*cr(?:ore)?s?\b/gi;
  for (const m of t.matchAll(crRe)) {
    const n = parseFloat(m[1]!.replace(/,/g, ""));
    if (Number.isFinite(n)) out.push(Math.round(n * 10_000_000));
  }

  const moneyRe =
    /(?:₹|Rs\.?|INR)\s*([\d,]+(?:\.\d{1,2})?)|([\d,]+(?:\.\d{1,2})?)\s*(?:₹|\/-)?/gi;
  for (const m of t.matchAll(moneyRe)) {
    const raw = (m[1] ?? m[2] ?? "").replace(/,/g, "");
    if (!raw) continue;
    const n = parseFloat(raw);
    if (Number.isFinite(n)) out.push(Math.round(n));
  }

  const plain = t.replace(/[₹RsINR]/gi, " ");
  const digitRuns = plain.match(/\b\d[\d,]*(?:\.\d{1,2})?\b/g) ?? [];
  for (const run of digitRuns) {
    const n = parseFloat(run.replace(/,/g, ""));
    if (!Number.isFinite(n)) continue;
    if (n >= 1000 || run.includes(",")) {
      out.push(Math.round(n));
    }
  }

  return dedupeSorted(out);
}

function dedupeSorted(nums: number[]): number[] {
  const u = [...new Set(nums)].sort((a, b) => b - a);
  return u;
}

/** Pick the right token for a row: prefer values that look like comp line items. */
export function pickPrimaryAmount(
  tokens: number[],
  opts?: { minPlausible?: number }
): number | null {
  const minP = opts?.minPlausible ?? 100;
  const plausible = tokens.filter((n) => n >= minP);
  if (plausible.length === 0) return null;
  return plausible[0]!;
}

/** If two amounts look like monthly + annual (ratio ~12), return both. */
export function inferMonthlyAnnualPair(
  tokens: number[]
): { monthly: number; annual: number } | null {
  const u = [...new Set(tokens)].sort((a, b) => a - b);
  if (u.length < 2) return null;
  for (let i = 0; i < u.length; i++) {
    for (let j = i + 1; j < u.length; j++) {
      const a = u[i]!;
      const b = u[j]!;
      if (a <= 0) continue;
      const ratio = b / a;
      if (ratio > 11 && ratio < 13) {
        return { monthly: Math.round(a), annual: Math.round(b) };
      }
    }
  }
  return null;
}
