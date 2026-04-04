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
import { loginSchema, type LoginFormData } from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/stores/use-auth-store";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/salary";
  const login = useAuthStore((s) => s.login);
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
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
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-teal-600 hover:underline">
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
    const result = await login(data.email, data.password);
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
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-teal-600 hover:underline">
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
        {form.formState.errors.root && (
          <p className="text-sm text-danger-600 text-center bg-danger-50 rounded-lg px-3 py-2">
            {form.formState.errors.root.message}
          </p>
        )}
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
