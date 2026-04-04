import type { Database } from "@/lib/supabase/database.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

type SalarySessionRow = Database["public"]["Tables"]["salary_sessions"]["Row"];

export function salaryDraftSignature(
  input: SalaryInput,
  breakdown: SalaryBreakdown
): string {
  return `${JSON.stringify(input)}|${JSON.stringify(breakdown)}`;
}

export function baselineFromSalarySessionRow(row: SalarySessionRow): {
  input: SalaryInput;
  breakdown: SalaryBreakdown;
} {
  return {
    input: row.input_json as unknown as SalaryInput,
    breakdown: row.breakdown_json as unknown as SalaryBreakdown,
  };
}

export function salaryStoreMatchesServerPayload(
  storeInput: SalaryInput,
  storeBreakdown: SalaryBreakdown | null,
  serverInput: SalaryInput,
  serverBreakdown: SalaryBreakdown
): { input: boolean; breakdown: boolean } {
  return {
    input: JSON.stringify(storeInput) === JSON.stringify(serverInput),
    breakdown:
      storeBreakdown != null &&
      JSON.stringify(storeBreakdown) === JSON.stringify(serverBreakdown),
  };
}
