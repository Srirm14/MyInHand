import { z } from "zod";

/** Minimum annual CTC for estimated breakdown (shared with CtcInputForm gating). */
export const MIN_ANNUAL_CTC_RUPEES = 100_000;

/**
 * RHF/Zod issue message for CTC below minimum — UI shows a quiet badge, not red copy.
 */
export const CTC_MIN_FOR_BREAKDOWN_ISSUE = "CTC_MIN_FOR_BREAKDOWN";

export const ctcInputSchema = z
  .object({
    annualCTC: z
      .number({ error: "Annual CTC is required" })
      .min(0, "Enter a valid amount")
      .max(100_000_000, "CTC cannot exceed ₹10,00,00,000"),
    compensationMode: z.enum(["total_only", "fixed_variable"]),
    fixedAnnual: z.number().min(0),
    variableAnnual: z.number().min(0),
    cityTier: z.enum(["tier1", "tier2", "tier3"], {
      error: "Select a city tier",
    }),
    taxRegime: z.enum(["old", "new"], {
      error: "Select a tax regime",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.annualCTC > 0 && data.annualCTC < MIN_ANNUAL_CTC_RUPEES) {
      ctx.addIssue({
        code: "custom",
        message: CTC_MIN_FOR_BREAKDOWN_ISSUE,
        path: ["annualCTC"],
      });
    }
    if (data.compensationMode !== "fixed_variable") return;
    const sum = data.fixedAnnual + data.variableAnnual;
    if (Math.abs(sum - data.annualCTC) > 1) {
      ctx.addIssue({
        code: "custom",
        message:
          "Fixed + variable must equal total CTC. Adjust one field — the other updates automatically.",
        path: ["variableAnnual"],
      });
    }
    if (data.fixedAnnual > data.annualCTC) {
      ctx.addIssue({
        code: "custom",
        message: "Fixed pay can’t exceed total CTC.",
        path: ["fixedAnnual"],
      });
    }
    if (data.variableAnnual > data.annualCTC) {
      ctx.addIssue({
        code: "custom",
        message: "Variable pay can’t exceed total CTC.",
        path: ["variableAnnual"],
      });
    }
  });

export type CTCInputFormData = z.infer<typeof ctcInputSchema>;
