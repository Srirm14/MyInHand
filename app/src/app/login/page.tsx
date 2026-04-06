"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { AuthErrorAlert } from "@/components/auth/auth-error-alert";
import { Button } from "@/components/ui/button";
import { AuthFormSkeleton } from "@/components/shared/loading-skeletons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sanitizeInternalAuthRedirect } from "@/lib/auth/sanitize-internal-redirect";
import { checkEmailExists } from "@/lib/auth/email-exists";
import { useResendCooldown } from "@/lib/hooks/use-resend-cooldown";
import { loginSchema, type LoginFormData } from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/stores/use-auth-store";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from =
    sanitizeInternalAuthRedirect(searchParams.get("from")) ?? "/salary";
  const authError = searchParams.get("error");
  const login = useAuthStore((s) => s.login);
  const resendSignupEmail = useAuthStore((s) => s.resendSignupEmail);
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);

  const [showUnconfirmedHelp, setShowUnconfirmedHelp] = useState(false);
  const [resendMsg, setResendMsg] = useState<string | null>(null);
  const { canSend, secondsLeft, startCooldown } = useResendCooldown(60_000);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (!authReady) return;
    if (user?.email) {
      router.replace(from);
    }
  }, [authReady, user, from, router]);

  if (!authReady) {
    return (
      <AuthPageShell
        footer={
          <>
            Don&apos;t have an account?{" "}
            <Link
              href={
                from === "/salary"
                  ? "/signup"
                  : `/signup?from=${encodeURIComponent(from)}`
              }
              className="font-semibold text-teal-600 hover:underline"
            >
              Sign up
            </Link>
          </>
        }
      >
        <AuthFormSkeleton fields={2} />
      </AuthPageShell>
    );
  }

  const onSubmit = async (data: LoginFormData) => {
    setShowUnconfirmedHelp(false);
    setResendMsg(null);
    const preflight = await checkEmailExists(data.email);
    if (!preflight.ok) {
      form.setError("root", { message: preflight.error });
      return;
    }
    if (!preflight.exists) {
      form.setError("root", {
        message: "No account found for this email. Create one from Sign up.",
      });
      return;
    }
    const result = await login(data.email, data.password);
    if (!result.ok) {
      form.setError("root", { message: result.error });
      if (result.unconfirmedEmail) {
        setShowUnconfirmedHelp(true);
      }
      return;
    }
    router.replace(from);
    router.refresh();
  };

  const onResendConfirmation = async () => {
    const email = form.getValues("email").trim();
    if (!email || !canSend) return;
    setResendMsg(null);
    const r = await resendSignupEmail(email);
    if (!r.ok) {
      setResendMsg(r.error ?? "Could not resend.");
      return;
    }
    setResendMsg("Check your inbox for a new confirmation link.");
    startCooldown();
  };

  return (
    <AuthPageShell
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href={
              from === "/salary"
                ? "/signup"
                : `/signup?from=${encodeURIComponent(from)}`
            }
            className="font-semibold text-teal-600 hover:underline"
          >
            Sign up
          </Link>
        </>
      }
    >
      <h1 className="text-h2 text-navy-800 font-semibold text-center mb-1">
        Sign in
      </h1>
      <p className="text-sm text-navy-500 text-center mb-8">
        Use your work email to continue to your salary workspace.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {authError === "auth" ? (
          <AuthErrorAlert message="That link expired or is invalid. Try signing in again, or request a fresh email from the relevant screen." />
        ) : null}
        {form.formState.errors.root && (
          <AuthErrorAlert message={form.formState.errors.root.message ?? ""} />
        )}
        {showUnconfirmedHelp ? (
          <div className="rounded-xl border border-teal-100 bg-teal-50/60 px-3 py-3 text-sm text-navy-800 space-y-2">
            <p className="font-medium">Email not confirmed yet</p>
            <p className="text-navy-600 text-xs leading-relaxed">
              Confirm your email from the link we sent, or resend the confirmation email.
            </p>
            {resendMsg ? (
              <p className="text-xs text-teal-800">{resendMsg}</p>
            ) : null}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full rounded-full"
              disabled={!canSend}
              onClick={() => void onResendConfirmation()}
            >
              {canSend
                ? "Resend confirmation email"
                : `Resend in ${secondsLeft}s`}
            </Button>
          </div>
        ) : null}
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
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
        <div className="space-y-2">
          <div className="flex justify-between items-center gap-2">
            <Label htmlFor="login-password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-teal-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="login-password"
            type="password"
            autoComplete="current-password"
            className="rounded-xl h-10"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-xs text-danger-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-11 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
              Signing in…
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </AuthPageShell>
  );
}

function LoginFallback() {
  return (
    <AuthPageShell>
      <AuthFormSkeleton fields={2} />
    </AuthPageShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}
