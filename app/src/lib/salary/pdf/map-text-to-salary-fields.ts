import type {
  ExtractedSalaryField,
  PdfFieldConfidence,
  PdfTextLine,
  SalaryPdfSemanticKey,
} from "@/lib/salary/pdf/salary-pdf-parse.types";
import {
  inferMonthlyAnnualPair,
  parseMoneyTokens,
  pickPrimaryAmount,
} from "@/lib/salary/pdf/parse-money-from-text";

type LabelRule = {
  key: SalaryPdfSemanticKey;
  patterns: RegExp[];
  /** Prefer annual vs monthly when both appear */
  defaultPeriod: "annual" | "monthly" | "either";
  confidence: PdfFieldConfidence;
  /** Skip if amount above this (likely invoice ids) */
  maxAmount?: number;
  minAmount?: number;
};

const LABEL_RULES: LabelRule[] = [
  {
    key: "annualCTC",
    patterns: [
      /\bannual\s+ctc\s*\(/i,
      /\b(?:annual\s*)?ctc\b/i,
      /\bcost\s+to\s+company\b/i,
      /\btotal\s+(?:cost|ctc|compensation|remuneration|package)\b/i,
      /\bannual\s+(?:package|compensation|ctc)\b/i,
      /\bgross\s+annual\b/i,
    ],
    defaultPeriod: "annual",
    confidence: "high",
    minAmount: 50_000,
  },
  {
    key: "fixedAnnual",
    patterns: [
      /\bannual\s+fixed\s+salary\b/i,
      /\bfixed\s+(?:ctc|pay|compensation|salary)\b/i,
      /\bannual\s+fixed\b/i,
    ],
    defaultPeriod: "annual",
    confidence: "medium",
    minAmount: 50_000,
  },
  {
    key: "variableAnnual",
    patterns: [
      /\bvariable\s+(?:pay|component|ctc|bonus|payment)\b/i,
      /\bperformance\s+pay\b/i,
      /\bincentive\s+pay\b/i,
    ],
    defaultPeriod: "annual",
    confidence: "medium",
    minAmount: 1_000,
  },
  {
    key: "basic",
    patterns: [
      /\bbasic\s+salary\b/i,
      /\bbasic\s+pay\b/i,
      /^basic\b/i,
      /\bbasic\s*\(/i,
    ],
    defaultPeriod: "either",
    confidence: "high",
    minAmount: 1_000,
  },
  {
    key: "hra",
    patterns: [
      /\bhra\b/i,
      /\bhouse\s+rent\s+allowance\b/i,
    ],
    defaultPeriod: "either",
    confidence: "high",
    minAmount: 100,
  },
  {
    key: "specialAllowance",
    patterns: [
      /\bspecial\s+allowance\b/i,
      /\bflexi(?:ble)?\s+allowance\b/i,
      /\bother\s+allowance\b/i,
      /\bretention\s+allowance\b/i,
    ],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
  },
  {
    key: "vehicleAllowance",
    patterns: [
      /\bvehicle\s+allowance\b/i,
      /\bconveyance\s+allowance\b/i,
      /\btransport\s+allowance\b/i,
      /\bfuel\s+allowance\b/i,
    ],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
  },
  {
    key: "washingAllowance",
    patterns: [/\bwashing\s+allowance\b/i, /\buniform\s+allowance\b/i],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 50,
  },
  {
    key: "ltaAllowance",
    patterns: [/\bleave\s+travel\s+allowance\b/i, /\blta\s*\(/i, /\blta\b(?=\s|:|\(|,)/i],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 0,
  },
  {
    key: "variablePay",
    patterns: [
      /\bvariable\s+pay\b/i,
      /\bvp\b(?=\s|:|\d)/i,
    ],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
  },
  {
    key: "bonus",
    patterns: [
      /\bperformance\s+bonus\b/i,
      /\bpb\b(?=\s|:|\(|on\s+rating)/i,
      /\bsign[\s-]*on\s+bonus\b/i,
      /\bjoining\s+bonus\b/i,
      /\bretention\s+bonus\b/i,
      /\bannual\s+bonus\b/i,
    ],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
  },
  {
    key: "profitIncentive",
    patterns: [
      /\bprofit\s+incentive\b/i,
      /\bpi\b(?=\s|:|\(|,)/i,
      /\bperformance\s+incentive\b/i,
    ],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
  },
  {
    key: "joiningBonus",
    patterns: [/\bjoining\s+bonus\b/i, /\bsign[\s-]*on\s+bonus\b/i],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
  },
  {
    key: "employeePf",
    patterns: [
      /\bemployee\s+(?:pf|provident)\b/i,
      /\bemployee'?s?\s+(?:share\s+of\s+)?pf\b/i,
      /\bepf\b(?=\s|:|\d)/i,
      /\bpf\s*\(?employee/i,
      /\bstatutory\s+deductions?\s*\(?pf/i,
      /\bpf\s+deduction\b/i,
    ],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
    maxAmount: 200_000,
  },
  {
    key: "employerPf",
    patterns: [
      /\bemployers?\s+contribution\s+to\s+pf\b/i,
      /\bemployer'?s?\s+contribution\s+to\s+(?:the\s+)?pf\b/i,
      /\bemployer\s+(?:pf|provident)\b/i,
      /\bpf\s*\(?employer/i,
      /\bcompany\s+pf\b/i,
      /\bedlis\b/i,
    ],
    defaultPeriod: "either",
    confidence: "high",
    minAmount: 100,
    maxAmount: 500_000,
  },
  {
    key: "gratuity",
    patterns: [/\bgratuity\b/i],
    defaultPeriod: "either",
    confidence: "medium",
    minAmount: 100,
    maxAmount: 500_000,
  },
  {
    key: "professionalTax",
    patterns: [/\bprofessional\s+tax\b/i, /\bprof\.?\s*tax\b/i],
    defaultPeriod: "monthly",
    confidence: "medium",
    minAmount: 50,
    maxAmount: 50_000,
  },
  {
    key: "monthlyGross",
    patterns: [/\bmonthly\s+gross\b/i],
    defaultPeriod: "monthly",
    confidence: "medium",
    minAmount: 5_000,
  },
  {
    key: "monthlyInHand",
    patterns: [
      /\bnet\s+pay\b/i,
      /\btake[\s-]*home\b/i,
      /\bin[\s-]*hand\b/i,
      /\bnet\s+salary\b/i,
    ],
    defaultPeriod: "monthly",
    confidence: "low",
    minAmount: 1_000,
  },
  {
    key: "annualGross",
    patterns: [
      /\bgross\s+salary\s*\(?\s*a\s*\)?/i,
      /\bgross\s+salary\b/i,
      /\bannual\s+gross\b/i,
    ],
    defaultPeriod: "either",
    confidence: "high",
    minAmount: 50_000,
  },
  {
    key: "deductionsTotal",
    patterns: [/\btotal\s+deductions?\b/i],
    defaultPeriod: "either",
    confidence: "low",
    minAmount: 100,
  },
  {
    key: "employeeName",
    patterns: [
      /^\s*name\s*:/i,
      /\bemployee\s*name\s*:/i,
      /\b(?:mr|ms|mrs)\.?\s+[a-z]/i,
      /\bemployee\s*:/i,
    ],
    defaultPeriod: "either",
    confidence: "low",
    minAmount: undefined,
  },
  {
    key: "employerName",
    patterns: [/\bemployer\s*:/i, /\bcompany\s*:/i, /\borganization\s*:/i],
    defaultPeriod: "either",
    confidence: "low",
    minAmount: undefined,
  },
];

const CONFIDENCE_RANK: Record<PdfFieldConfidence, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

function betterConfidence(
  a: PdfFieldConfidence,
  b: PdfFieldConfidence
): PdfFieldConfidence {
  return CONFIDENCE_RANK[a] >= CONFIDENCE_RANK[b] ? a : b;
}

function normalizeLabelLine(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function extractNameAfterColon(text: string): string | null {
  const m = text.match(/:\s*(.+)$/);
  if (!m) return null;
  const v = m[1]!.trim();
  if (v.length < 2 || /\d{4,}/.test(v)) return null;
  return v.slice(0, 120);
}

function ruleForLine(text: string): LabelRule | null {
  const t = text.toLowerCase();
  for (const rule of LABEL_RULES) {
    if (rule.patterns.some((p) => p.test(t))) return rule;
  }
  return null;
}

function amountForRule(
  rule: LabelRule,
  tokens: number[],
  lineText: string
): Pick<ExtractedSalaryField, "amountAnnual" | "amountMonthly" | "confidence"> {
  const lower = lineText.toLowerCase();
  const hintsAnnual =
    /\b(p\.?a\.?|per\s*annum|annually|annual|yearly|yly)\b/i.test(lower);
  const hintsMonthly =
    /\b(p\.?m\.?|per\s*month|monthly|month)\b/i.test(lower);

  const pair = inferMonthlyAnnualPair(tokens);
  if (pair && (rule.defaultPeriod === "either" || hintsAnnual || hintsMonthly)) {
    if (hintsMonthly && !hintsAnnual) {
      return {
        amountMonthly: pair.monthly,
        amountAnnual: pair.annual,
        confidence: betterConfidence(rule.confidence, "high"),
      };
    }
    if (hintsAnnual && !hintsMonthly) {
      return {
        amountMonthly: pair.monthly,
        amountAnnual: pair.annual,
        confidence: betterConfidence(rule.confidence, "high"),
      };
    }
    if (rule.defaultPeriod === "annual") {
      return {
        amountAnnual: pair.annual,
        amountMonthly: pair.monthly,
        confidence: betterConfidence(rule.confidence, "high"),
      };
    }
    return {
      amountMonthly: pair.monthly,
      amountAnnual: pair.annual,
      confidence: betterConfidence(rule.confidence, "high"),
    };
  }

  const primary = pickPrimaryAmount(tokens, {
    minPlausible: rule.minAmount ?? 100,
  });
  if (primary == null) {
    return { confidence: rule.confidence };
  }

  if (rule.maxAmount != null && primary > rule.maxAmount) {
    return { confidence: "low" };
  }

  if (hintsMonthly && !hintsAnnual) {
    return {
      amountMonthly: primary,
      confidence: rule.confidence,
    };
  }
  if (hintsAnnual && !hintsMonthly) {
    return {
      amountAnnual: primary,
      confidence: rule.confidence,
    };
  }

  if (rule.defaultPeriod === "monthly") {
    return { amountMonthly: primary, confidence: rule.confidence };
  }
  if (rule.defaultPeriod === "annual") {
    return { amountAnnual: primary, confidence: rule.confidence };
  }

  // either: infer from magnitude
  if (primary >= 100_000) {
    return { amountAnnual: primary, confidence: downgrade(rule.confidence) };
  }
  return { amountMonthly: primary, confidence: downgrade(rule.confidence) };
}

function downgrade(c: PdfFieldConfidence): PdfFieldConfidence {
  if (c === "high") return "medium";
  if (c === "medium") return "low";
  return "low";
}

/**
 * Walk structured lines (in reading order) and emit semantic field candidates.
 */
export function mapPdfLinesToSalaryFields(lines: PdfTextLine[]): ExtractedSalaryField[] {
  const merged = mergeContinuationLines(lines);
  const fields: ExtractedSalaryField[] = [];

  for (let i = 0; i < merged.length; i++) {
    const line = merged[i]!;
    const text = normalizeLabelLine(line.text);
    if (text.length < 2) continue;

    const rule = ruleForLine(text);
    if (!rule) continue;

    if (
      rule.key === "employeeName" ||
      rule.key === "employerName"
    ) {
      const name = extractNameAfterColon(text);
      if (name) {
        fields.push({
          key: rule.key,
          labelMatched: text.slice(0, 80),
          confidence: "low",
          rawSnippet: name,
        });
      }
      continue;
    }

    let scanText = text;
    const next = merged[i + 1];
    if (next) {
      const nextTokens = parseMoneyTokens(next.text);
      if (parseMoneyTokens(text).length === 0 && nextTokens.length > 0) {
        const nextRule = ruleForLine(next.text);
        if (!nextRule) {
          scanText = `${text} ${next.text}`;
        }
      }
    }

    const tokens = parseMoneyTokens(scanText);
    const amounts = amountForRule(rule, tokens, scanText);

    if (
      amounts.amountAnnual == null &&
      amounts.amountMonthly == null
    ) {
      continue;
    }

    fields.push({
      key: rule.key,
      labelMatched: text.slice(0, 120),
      confidence: amounts.confidence,
      amountAnnual: amounts.amountAnnual,
      amountMonthly: amounts.amountMonthly,
      rawSnippet: scanText.slice(0, 200),
    });
  }

  return dedupeFieldsByKey(aggregateMultiLineKeys(fields));
}

/** Annexures often repeat labels (e.g. two variable lines) — sum amounts per key before global dedupe. */
const KEYS_AGGREGATE_MULTIPLE_LINES = new Set<SalaryPdfSemanticKey>([
  "bonus",
  "joiningBonus",
  "variablePay",
  "variableAnnual",
  "profitIncentive",
  "specialAllowance",
  "vehicleAllowance",
  "washingAllowance",
  "ltaAllowance",
]);

function aggregateMultiLineKeys(
  fields: ExtractedSalaryField[]
): ExtractedSalaryField[] {
  const buckets = new Map<SalaryPdfSemanticKey, ExtractedSalaryField[]>();
  const rest: ExtractedSalaryField[] = [];
  for (const f of fields) {
    if (KEYS_AGGREGATE_MULTIPLE_LINES.has(f.key)) {
      const b = buckets.get(f.key) ?? [];
      b.push(f);
      buckets.set(f.key, b);
    } else {
      rest.push(f);
    }
  }
  const merged: ExtractedSalaryField[] = [];
  for (const arr of buckets.values()) {
    if (arr.length === 0) continue;
    merged.push(combineAggregatedFields(arr));
  }
  return [...rest, ...merged];
}

function combineAggregatedFields(
  arr: ExtractedSalaryField[]
): ExtractedSalaryField {
  const key = arr[0]!.key;
  let aSum = 0;
  let mSum = 0;
  let hasA = false;
  let hasM = false;
  for (const f of arr) {
    if (f.amountAnnual != null) {
      aSum += f.amountAnnual;
      hasA = true;
    }
    if (f.amountMonthly != null) {
      mSum += f.amountMonthly;
      hasM = true;
    }
  }
  let conf: PdfFieldConfidence = "low";
  for (const f of arr) {
    conf = betterConfidence(conf, f.confidence);
  }
  return {
    key,
    labelMatched: arr
      .map((x) => x.labelMatched)
      .join(" · ")
      .slice(0, 200),
    confidence: conf,
    amountAnnual: hasA ? Math.round(aSum) : undefined,
    amountMonthly: hasM ? Math.round(mSum) : undefined,
    rawSnippet: arr
      .map((x) => x.rawSnippet)
      .join(" | ")
      .slice(0, 300),
  };
}

function mergeContinuationLines(lines: PdfTextLine[]): PdfTextLine[] {
  const out: PdfTextLine[] = [];
  for (const line of lines) {
    const t = normalizeLabelLine(line.text);
    const prev = out[out.length - 1];
    const prevTokens = prev ? parseMoneyTokens(prev.text) : [];
    const curTokens = parseMoneyTokens(t);
    if (
      prev &&
      prevTokens.length === 0 &&
      curTokens.length > 0 &&
      /:$/.test(prev.text.trim()) === false &&
      prev.text.length < 60
    ) {
      prev.text = normalizeLabelLine(`${prev.text} ${t}`);
      prev.xMax = Math.max(prev.xMax, line.xMax);
    } else {
      out.push({ ...line, text: t });
    }
  }
  return out;
}

function dedupeFieldsByKey(fields: ExtractedSalaryField[]): ExtractedSalaryField[] {
  const best = new Map<SalaryPdfSemanticKey, ExtractedSalaryField>();
  for (const f of fields) {
    const cur = best.get(f.key);
    if (!cur) {
      best.set(f.key, f);
      continue;
    }
    const rankDiff =
      CONFIDENCE_RANK[f.confidence] - CONFIDENCE_RANK[cur.confidence];
    if (rankDiff > 0) {
      best.set(f.key, f);
    } else if (rankDiff === 0) {
      const fAmt = Math.max(f.amountAnnual ?? 0, (f.amountMonthly ?? 0) * 12);
      const cAmt = Math.max(cur.amountAnnual ?? 0, (cur.amountMonthly ?? 0) * 12);
      if (fAmt > cAmt) best.set(f.key, f);
    }
  }
  return [...best.values()];
}
