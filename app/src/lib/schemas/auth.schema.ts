import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const signupSchema = z.object({
  displayName: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Use at least 8 characters")
    .max(128),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

export const profileUpdateSchema = z.object({
  displayName: z.string().min(1, "Name is required").max(120),
  company: z.string().max(200).optional(),
  role: z.string().max(120).optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;
