"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { ConfigureSupabaseMessage } from "@/components/auth/configure-supabase-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUTH_UI } from "@/lib/constants/auth-ui";
import { tryGetBrowserSupabase } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const supabase = tryGetBrowserSupabase();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!supabase) return;
    if (password.length < 8) {
      setMessage("Use at least 8 characters.");
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      setMessage(error ? error.message : "Password updated. You can sign in.");
    } finally {
      setBusy(false);
    }
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
        Set new password
      </h1>
      <p className="text-sm text-navy-500 text-center mb-8">
        Choose a new password for your account.
      </p>
      <form onSubmit={onSubmit} className="space-y-5">
        {message ? (
          <p className="text-sm text-center rounded-lg px-3 py-2 bg-teal-50 text-navy-800">
            {message}
          </p>
        ) : null}
        <div className="space-y-2">
          <Label htmlFor="npw">New password</Label>
          <Input
            id="npw"
            type="password"
            autoComplete="new-password"
            className="rounded-xl h-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          disabled={busy}
          className="w-full h-11 rounded-full font-semibold bg-teal-600 hover:bg-teal-700"
        >
          {busy ? (
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
