"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfigureSupabaseMessage } from "@/components/auth/configure-supabase-message";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { tryGetBrowserSupabase } from "@/lib/supabase/client";
import { AUTH_UI } from "@/lib/constants/auth-ui";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/schemas/auth.schema";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = useMemo(() => tryGetBrowserSupabase(), []);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setError(null);
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }
    const origin = globalThis.location?.origin ?? "";
    const { error: e } = await supabase.auth.resetPasswordForEmail(
      data.email,
      {
        redirectTo: origin ? `${origin}/auth/reset-password` : undefined,
      }
    );
    if (e) {
      setError(e.message);
      return;
    }
    setSent(true);
  };

  if (!supabase) {
    return (
      <AuthPageShell
        footer={
          <Link href="/login" className="font-semibold text-teal-600 hover:underline">
            Back to sign in
          </Link>
        }
      >
        <h1 className="text-h2 text-navy-800 font-semibold text-center mb-2">
          {AUTH_UI.configureTitle}
        </h1>
        <p className="mb-3 text-center text-sm text-navy-600">
          {AUTH_UI.configureForgotPassword}
        </p>
        <ConfigureSupabaseMessage />
      </AuthPageShell>
    );
  }

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
          <span className="font-semibold">{form.getValues("email")}</span>, check
          your inbox for a link to set a new password.
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {error ? (
            <p className="text-sm text-danger-600 text-center bg-danger-50 rounded-lg px-3 py-2">
              {error}
            </p>
          ) : null}
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
            disabled={form.formState.isSubmitting}
            aria-busy={form.formState.isSubmitting}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2
                  className="size-4 shrink-0 animate-spin motion-reduce:animate-none"
                  aria-hidden
                />
                Sending…
              </>
            ) : (
              "Send reset link"
            )}
          </Button>
        </form>
      )}
    </AuthPageShell>
  );
}
