import { calculateEmi, totalInterestPayable } from "@/lib/utils/calculate-emi";

export type EmiLoanInput = Readonly<{
  id?: string;
  kind: string;
  principal: number;
  rate: number;
  tenureYears: number;
}>;

export type EmiLoanComputed = EmiLoanInput &
  Readonly<{
    months: number;
    emi: number;
    interest: number;
    repayment: number;
  }>;

export function computeEmiLoan(loan: EmiLoanInput): EmiLoanComputed {
  const months = Math.max(1, Math.round(loan.tenureYears * 12));
  const principal = Math.max(0, loan.principal);
  const emi = calculateEmi(principal, loan.rate, months);
  const interest = totalInterestPayable(principal, emi, months);
  const repayment = emi * months;
  return { ...loan, principal, months, emi, interest, repayment };
}

export function computeEmiScenario(loans: readonly EmiLoanInput[]) {
  const computed = loans.map(computeEmiLoan);
  const totalEmi = computed.reduce((s, l) => s + l.emi, 0);
  const totalInterestLifetime = computed.reduce((s, l) => s + l.interest, 0);
  const totalRepaymentLifetime = computed.reduce((s, l) => s + l.repayment, 0);
  return { loans: computed, totalEmi, totalInterestLifetime, totalRepaymentLifetime };
}

