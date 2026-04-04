/** Keep fixed + variable aligned with total CTC edits (free calculator). */

function clampRupee(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.round(n));
}

/**
 * User set total CTC — keep current fixed pay where possible; variable absorbs the rest.
 * If total is below current fixed, fixed is reduced to total and variable becomes 0.
 */
export function reconcileAfterTotalCtc(
  totalCtc: number,
  currentFixedPay: number
): { annualFixedPay: number; annualVariablePay: number } {
  const t = clampRupee(totalCtc);
  const f = Math.min(clampRupee(currentFixedPay), t);
  return { annualFixedPay: f, annualVariablePay: t - f };
}

/**
 * User edited fixed pay — keep total package constant when possible; trim variable.
 * If fixed exceeds current total, package grows (variable = 0).
 */
export function reconcileAfterFixedPay(
  newFixed: number,
  currentFixed: number,
  currentVariable: number
): { annualFixedPay: number; annualVariablePay: number } {
  const F = clampRupee(newFixed);
  const total = clampRupee(currentFixed) + clampRupee(currentVariable);
  if (F <= total) {
    return { annualFixedPay: F, annualVariablePay: total - F };
  }
  return { annualFixedPay: F, annualVariablePay: 0 };
}

/**
 * User edited variable pay — keep total constant when possible; trim fixed.
 * If variable exceeds current total, package grows (fixed = 0).
 */
export function reconcileAfterVariablePay(
  newVariable: number,
  currentFixed: number,
  currentVariable: number
): { annualFixedPay: number; annualVariablePay: number } {
  const V = clampRupee(newVariable);
  const total = clampRupee(currentFixed) + clampRupee(currentVariable);
  if (V <= total) {
    return { annualFixedPay: total - V, annualVariablePay: V };
  }
  return { annualFixedPay: 0, annualVariablePay: V };
}

export function annualPackageTotal(
  fixed: number,
  variable: number
): number {
  return clampRupee(fixed) + clampRupee(variable);
}
