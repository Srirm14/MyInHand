import { CtcInputForm } from "@/components/features/salary/ctc-input-form";
import { SalaryCalculatorScreen } from "@/components/features/salary-calculator/salary-calculator-screen";
import { userHasPremiumEntitlement } from "@/lib/server/premium-access";

/**
 * Free tier: quick fixed/variable calculator.
 * Premium (env override or DB `plan_tier`): full CTC + name flow → breakdown.
 */
export default async function SalaryInputPage() {
  if (await userHasPremiumEntitlement()) {
    return <CtcInputForm />;
  }
  return <SalaryCalculatorScreen />;
}
