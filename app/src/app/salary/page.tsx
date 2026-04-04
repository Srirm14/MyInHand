import { CtcInputForm } from "@/components/features/salary/ctc-input-form";
import { SalaryCalculatorScreen } from "@/components/features/salary-calculator/salary-calculator-screen";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";

/**
 * Free tier: quick fixed/variable calculator.
 * Premium (env): legacy CTC + name flow → breakdown (same as before).
 */
export default function SalaryInputPage() {
  if (PREMIUM_UNLOCKED) {
    return <CtcInputForm />;
  }
  return <SalaryCalculatorScreen />;
}
