/**
 * Public auth callback: establishes a session from Supabase email links and sets auth cookies.
 *
 * Supabase can redirect back with either:
 * - `?code=` (PKCE code exchange flow) → `exchangeCodeForSession(code)`
 * - `?token_hash=&type=` (OTP verification flow) → `verifyOtp({ token_hash, type })`
 *
 * Auth model: unauthenticated caller arriving from Supabase hosted links; identity established only by the one-time code/token.
 * See docs/adr/ADR-004-next-api-routes-auth.md — this route is intentionally public.
 */
import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { sanitizeInternalAuthRedirect } from "@/lib/auth/sanitize-internal-redirect";
import type { Database } from "@/lib/supabase/database.types";
import { getSupabaseAnonKey, getSupabaseUrl, isSupabaseConfigured } from "@/lib/supabase/env";

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.redirect(new URL("/login?error=auth", request.url));
  }

  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const nextRaw = searchParams.get("next");
  const safeNext = sanitizeInternalAuthRedirect(nextRaw) ?? "/salary";

  const cookieStore = await cookies();

  const supabase = createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        );
      },
    },
  });

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const target = new URL(safeNext, request.nextUrl.origin);
      return NextResponse.redirect(target);
    }
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: type as never,
    });
    if (!error) {
      const target = new URL(safeNext, request.nextUrl.origin);
      return NextResponse.redirect(target);
    }
  }

  return NextResponse.redirect(new URL("/login?error=auth", request.url));
}
