"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/schemas/auth.schema";

/**
 * ASSUMPTION: No email provider wired yet. This flow confirms intent only.
 * Production: call your API to send a secure reset link.
 */
export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = () => {
    setSent(true);
  };

  return (
    <AuthPageShell
      footer={
        <Link href="/login" className="font-semibold text-teal-600 hover:underline">
          Back to sign in
        </Link>
      }
    >
      <h1 className="text-h2 text-navy-800 font-semibold text-center mb-1">
        Reset password
      </h1>
      <p className="text-sm text-navy-500 text-center mb-8">
        We&apos;ll email a reset link if an account exists for this address.
      </p>

      {sent ? (
        <div className="rounded-xl bg-teal-50 border border-teal-100 px-4 py-4 text-sm text-navy-700 text-center">
          If an account exists for{" "}
          <span className="font-semibold">{form.getValues("email")}</span>,
          you&apos;ll receive reset instructions shortly.{" "}
          <span className="block mt-2 text-xs text-navy-500">
            (Demo: email delivery is not connected yet.)
          </span>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fp-email">Email</Label>
            <Input
              id="fp-email"
              type="email"
              autoComplete="email"
              className="rounded-xl h-10"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-danger-600">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full h-11 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
          >
            Send reset link
          </Button>
        </form>
      )}
    </AuthPageShell>
  );
}
