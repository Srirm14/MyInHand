"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { AuthErrorAlert, AuthSuccessPanel } from "@/components/auth/auth-error-alert";
import { ConfigureSupabaseMessage } from "@/components/auth/configure-supabase-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updatePassword } from "@/lib/auth/auth-operations";
import { AUTH_UI } from "@/lib/constants/auth-ui";
import {
  newPasswordSchema,
  type NewPasswordFormData,
} from "@/lib/schemas/auth.schema";
import { tryGetBrowserSupabase } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = tryGetBrowserSupabase();
  const [sessionChecked, setSessionChecked] = useState(() => !supabase);
  const [hasRecoverySession, setHasRecoverySession] = useState(false);

  const form = useForm<NewPasswordFormData>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    void (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!cancelled) {
        setHasRecoverySession(Boolean(session));
        setSessionChecked(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const onSubmit = async (data: NewPasswordFormData) => {
    const result = await updatePassword(data.password);
    if (!result.ok) {
      form.setError("root", { message: result.error ?? "Update failed." });
      return;
    }
    form.reset();
    router.replace("/login");
    router.refresh();
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

  if (!sessionChecked) {
    return (
      <AuthPageShell
        footer={
          <Link href="/login" className="font-semibold text-teal-600 hover:underline">
            Back to sign in
          </Link>
        }
      >
        <div className="flex justify-center py-8">
          <Loader2 className="size-8 animate-spin text-teal-600" aria-hidden />
        </div>
        <p className="text-center text-sm text-navy-500">Loading…</p>
      </AuthPageShell>
    );
  }

  if (!hasRecoverySession) {
    return (
      <AuthPageShell
        footer={
          <Link href="/login" className="font-semibold text-teal-600 hover:underline">
            Back to sign in
          </Link>
        }
      >
        <h1 className="text-h2 text-navy-800 font-semibold text-center mb-1">
          Link invalid or expired
        </h1>
        <p className="text-sm text-navy-500 text-center mb-6">
          Open the reset link from your email on this device, or request a new
          link from the forgot password page.
        </p>
        <Link
          href="/forgot-password"
          className="inline-flex w-full justify-center rounded-full bg-teal-600 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Request a new link
        </Link>
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
        Set new password
      </h1>
      <p className="text-sm text-navy-500 text-center mb-8">
        Choose a new password for your account.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {form.formState.errors.root ? (
          <AuthErrorAlert message={form.formState.errors.root.message ?? ""} />
        ) : null}
        <div className="space-y-2">
          <Label htmlFor="npw">New password</Label>
          <Input
            id="npw"
            type="password"
            autoComplete="new-password"
            className="rounded-xl h-10"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-xs text-danger-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="npw2">Confirm password</Label>
          <Input
            id="npw2"
            type="password"
            autoComplete="new-password"
            className="rounded-xl h-10"
            {...form.register("confirmPassword")}
          />
          {form.formState.errors.confirmPassword && (
            <p className="text-xs text-danger-600">
              {form.formState.errors.confirmPassword.message}
            </p>
          )}
        </div>
        <AuthSuccessPanel className="text-xs text-left">
          After you save, you&apos;ll be redirected to sign in with your new password.
        </AuthSuccessPanel>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-11 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
              Updating…
            </>
          ) : (
            "Update password"
          )}
        </Button>
      </form>
    </AuthPageShell>
  );
}
