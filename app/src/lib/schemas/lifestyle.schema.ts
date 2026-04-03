import { z } from "zod";

export const lifestyleSchema = z.object({
  rent: z.number().min(0).max(150000),
  food: z.number().min(0).max(50000),
  transport: z.number().min(0).max(30000),
  misc: z.number().min(0).max(25000),
});

export type LifestyleFormData = z.infer<typeof lifestyleSchema>;
