"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setSessionEmailCookie } from "@/lib/auth/session-cookie";
import { signupSchema, type SignupFormData } from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/stores/use-auth-store";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/salary";
  const signup = useAuthStore((s) => s.signup);
  const [hydrated, setHydrated] = useState(
    () =>
      globalThis.window !== undefined && useAuthStore.persist.hasHydrated()
  );

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { displayName: "", email: "", password: "" },
  });

  useEffect(() => {
    return useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const user = useAuthStore.getState().user;
    if (user?.email) {
      setSessionEmailCookie(user.email);
      router.replace(from.startsWith("/") ? from : "/salary");
    }
  }, [hydrated, from, router]);

  const loginHref =
    from && from !== "/salary"
      ? `/login?from=${encodeURIComponent(from)}`
      : "/login";

  const onSubmit = (data: SignupFormData) => {
    const result = signup(data.email, data.password, data.displayName);
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
          className="w-full h-11 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
        >
          Create account
        </Button>
      </form>
    </AuthPageShell>
  );
}

function SignupFallback() {
  return (
    <AuthPageShell>
      <div className="h-8 w-48 mx-auto rounded-lg bg-navy-100 animate-pulse mb-8" />
      <div className="space-y-5">
        <div className="h-10 w-full rounded-xl bg-navy-100 animate-pulse" />
        <div className="h-10 w-full rounded-xl bg-navy-100 animate-pulse" />
        <div className="h-10 w-full rounded-xl bg-navy-100 animate-pulse" />
        <div className="h-11 w-full rounded-full bg-navy-100 animate-pulse" />
      </div>
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
