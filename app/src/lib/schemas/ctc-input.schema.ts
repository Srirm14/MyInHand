import { z } from "zod";

export const ctcInputSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  annualCTC: z
    .number({ required_error: "Annual CTC is required" })
    .min(100000, "CTC must be at least ₹1,00,000")
    .max(100000000, "CTC cannot exceed ₹10,00,00,000"),
  cityTier: z.enum(["tier1", "tier2", "tier3"], {
    required_error: "Select a city tier",
  }),
  taxRegime: z.enum(["old", "new"], {
    required_error: "Select a tax regime",
  }),
});

export type CTCInputFormData = z.infer<typeof ctcInputSchema>;
