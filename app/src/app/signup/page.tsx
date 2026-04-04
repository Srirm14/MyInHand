"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { AuthFormSkeleton } from "@/components/shared/loading-skeletons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupSchema, type SignupFormData } from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/stores/use-auth-store";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/salary";
  const signup = useAuthStore((s) => s.signup);
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { displayName: "", email: "", password: "" },
  });

  useEffect(() => {
    if (!authReady) return;
    if (user?.email) {
      router.replace(from.startsWith("/") ? from : "/salary");
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
    const result = await signup(data.email, data.password, data.displayName);
    if (!result.ok) {
      form.setError("root", { message: result.error });
      return;
    }
    router.replace(from.startsWith("/") ? from : "/salary");
    router.refresh();
  };

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
          <p className="text-sm text-danger-600 text-center bg-danger-50 rounded-lg px-3 py-2">
            {form.formState.errors.root.message}
          </p>
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
          <Label htmlFor="su-email">Work email</Label>
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
