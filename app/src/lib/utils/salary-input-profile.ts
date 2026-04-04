import type { UserProfile } from "@/lib/types/user.types";
import type { SalaryInput } from "@/lib/types/salary.types";

/** Fill identity on `SalaryInput` from the signed-in profile when the form omits name/email. */
export function mergeSalaryInputWithProfile(
  input: SalaryInput,
  user: UserProfile | null
): SalaryInput {
  if (!user) {
    return {
      ...input,
      fullName: input.fullName?.trim() ?? "",
      email: input.email?.trim() ?? "",
    };
  }
  return {
    ...input,
    fullName:
      input.fullName?.trim() || user.displayName?.trim() || "",
    email: input.email?.trim() || user.email?.trim() || "",
  };
}

/** Nav / list row title: snapshot name, else profile display name, else CTC label. */
export function salarySessionListTitle(
  input: SalaryInput,
  user: UserProfile | null
): string {
  const fromInput = input.fullName?.trim();
  if (fromInput) return fromInput;
  const fromProfile = user?.displayName?.trim();
  if (fromProfile) return fromProfile;
  return `₹${(input.annualCTC / 100_000).toFixed(1)}L CTC`;
}
