"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { AuthErrorAlert, AuthSuccessPanel } from "@/components/auth/auth-error-alert";
import { Button } from "@/components/ui/button";
import { AuthFormSkeleton } from "@/components/shared/loading-skeletons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sanitizeInternalAuthRedirect } from "@/lib/auth/sanitize-internal-redirect";
import { checkEmailExists } from "@/lib/auth/email-exists";
import { useResendCooldown } from "@/lib/hooks/use-resend-cooldown";
import { signupSchema, type SignupFormData } from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/stores/use-auth-store";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from =
    sanitizeInternalAuthRedirect(searchParams.get("from")) ?? "/salary";
  const signup = useAuthStore((s) => s.signup);
  const resendSignupEmail = useAuthStore((s) => s.resendSignupEmail);
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);

  const [pendingEmail, setPendingEmail] = useState<string | null>(null);
  const [resendMsg, setResendMsg] = useState<string | null>(null);
  const { canSend, secondsLeft, startCooldown } = useResendCooldown(60_000);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { displayName: "", email: "", password: "" },
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
            Already have an account?{" "}
            <Link
              href={
                from && from !== "/salary"
                  ? `/login?from=${encodeURIComponent(from)}`
                  : "/login"
              }
              className="font-semibold text-teal-600 hover:underline"
            >
              Sign in
            </Link>
          </>
        }
      >
        <AuthFormSkeleton fields={3} />
      </AuthPageShell>
    );
  }

  const loginHref =
    from && from !== "/salary"
      ? `/login?from=${encodeURIComponent(from)}`
      : "/login";

  const onSubmit = async (data: SignupFormData) => {
    setResendMsg(null);
    const preflight = await checkEmailExists(data.email);
    if (!preflight.ok) {
      form.setError("root", { message: preflight.error });
      return;
    }
    if (preflight.exists) {
      form.setError("root", {
        message: "An account with this email already exists. Sign in instead.",
      });
      return;
    }
    const result = await signup(data.email, data.password, data.displayName);
    if (!result.ok) {
      form.setError("root", { message: result.error });
      return;
    }
    if (result.needsEmailConfirmation) {
      setPendingEmail(result.email);
      startCooldown();
      return;
    }
    router.replace(from);
    router.refresh();
  };

  const onResend = async () => {
    if (!pendingEmail || !canSend) return;
    setResendMsg(null);
    const r = await resendSignupEmail(pendingEmail);
    if (!r.ok) {
      setResendMsg(r.error ?? "Could not resend.");
      return;
    }
    setResendMsg("Another confirmation email is on its way.");
    startCooldown();
  };

  if (pendingEmail) {
    return (
      <AuthPageShell
        footer={
          <>
            Wrong inbox?{" "}
            <Link href={loginHref} className="font-semibold text-teal-600 hover:underline">
              Sign in
            </Link>
          </>
        }
      >
        <h1 className="text-h2 text-navy-800 font-semibold text-center mb-1">
          Check your email
        </h1>
        <p className="text-sm text-navy-500 text-center mb-6">
          We sent a confirmation link to{" "}
          <span className="font-semibold text-navy-700">{pendingEmail}</span>.
          Open it to activate your account, then sign in.
        </p>
        <AuthSuccessPanel className="mb-4">
          If you don&apos;t see it, check spam or request another email below.
        </AuthSuccessPanel>
        {resendMsg ? (
          <p className="text-sm text-center text-teal-800 mb-2">{resendMsg}</p>
        ) : null}
        <div className="flex flex-col gap-2">
          <Button
            type="button"
            variant="outline"
            className="w-full rounded-full h-11"
            disabled={!canSend}
            onClick={() => void onResend()}
          >
            {canSend
              ? "Resend confirmation email"
              : `Resend in ${secondsLeft}s`}
          </Button>
          <Link
            href={loginHref}
            className="text-center text-sm font-semibold text-teal-600 hover:underline"
          >
            Back to sign in
          </Link>
        </div>
      </AuthPageShell>
    );
  }

  return (
    <AuthPageShell
      footer={
        <>
          Already have an account?{" "}
          <Link href={loginHref} className="font-semibold text-teal-600 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <h1 className="text-h2 text-navy-800 font-semibold text-center mb-1">
        Create account
      </h1>
      <p className="text-sm text-navy-500 text-center mb-8">
        Name and email — you can add company details in Profile next.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {form.formState.errors.root && (
          <AuthErrorAlert message={form.formState.errors.root.message ?? ""} />
        )}
        <div className="space-y-2">
          <Label htmlFor="su-name">Full name</Label>
          <Input
            id="su-name"
            autoComplete="name"
            className="rounded-xl h-10"
            {...form.register("displayName")}
          />
          {form.formState.errors.displayName && (
            <p className="text-xs text-danger-600">
              {form.formState.errors.displayName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="su-email">email</Label>
          <Input
            id="su-email"
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
          <Label htmlFor="su-password">Password</Label>
          <Input
            id="su-password"
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
          <p className="text-[11px] text-navy-400">At least 8 characters.</p>
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-11 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
              Creating account…
            </>
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </AuthPageShell>
  );
}

function SignupFallback() {
  return (
    <AuthPageShell>
      <AuthFormSkeleton fields={3} />
    </AuthPageShell>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<SignupFallback />}>
      <SignupForm />
    </Suspense>
  );
}
