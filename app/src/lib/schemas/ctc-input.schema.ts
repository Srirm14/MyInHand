import { z } from "zod";

export const ctcInputSchema = z
  .object({
    fullName: z.string().optional(),
    email: z
      .union([z.literal(""), z.string().email("Enter a valid email")])
      .optional(),
    annualCTC: z
      .number({ error: "Annual CTC is required" })
      .min(100_000, "CTC must be at least ₹1,00,000")
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
