import { z } from "zod";

export const offerSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  annualCTC: z
    .number({ required_error: "CTC is required" })
    .min(100000, "CTC must be at least ₹1,00,000"),
  cityTier: z.enum(["tier1", "tier2", "tier3"]),
  taxRegime: z.enum(["old", "new"]),
  joiningBonus: z.number().min(0).optional(),
  esopValue: z.number().min(0).optional(),
});

export type OfferFormData = z.infer<typeof offerSchema>;
