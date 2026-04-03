import { z } from "zod";

export const ctcInputSchema = z.object({
  fullName: z.string().optional(),
  email: z
    .union([z.literal(""), z.string().email("Enter a valid email")])
    .optional(),
  annualCTC: z
    .number({ error: "Annual CTC is required" })
    .min(100_000, "CTC must be at least ₹1,00,000")
    .max(100_000_000, "CTC cannot exceed ₹10,00,00,000"),
  cityTier: z.enum(["tier1", "tier2", "tier3"], {
    error: "Select a city tier",
  }),
  taxRegime: z.enum(["old", "new"], {
    error: "Select a tax regime",
  }),
});

export type CTCInputFormData = z.infer<typeof ctcInputSchema>;
