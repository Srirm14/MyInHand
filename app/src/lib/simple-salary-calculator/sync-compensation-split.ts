/** Keep fixed + variable aligned with total CTC edits (free calculator). */

function clampRupee(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.round(n));
}

/**
 * User set total headline CTC — treat it as fixed pay; variable clears until they add it
 * (matches premium / offer CTC behavior).
 */
export function reconcileAfterTotalCtc(totalCtc: number): {
  annualFixedPay: number;
  annualVariablePay: number;
} {
  const t = clampRupee(totalCtc);
  return { annualFixedPay: t, annualVariablePay: 0 };
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
