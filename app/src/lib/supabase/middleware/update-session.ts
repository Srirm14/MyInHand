import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/lib/supabase/database.types";
import { getSupabaseAnonKey, getSupabaseUrl, isSupabaseConfigured } from "@/lib/supabase/env";

export type SessionUpdateResult = {
  response: NextResponse;
  user: User | null;
  /** Same client that ran `getUser` — safe for follow-up reads like `profiles`. */
  supabase: SupabaseClient<Database> | null;
};

/**
 * Refreshes the auth cookie and returns the current user.
 * Per Supabase: avoid logic between createServerClient and getUser().
 */
export async function updateSession(request: NextRequest): Promise<SessionUpdateResult> {
  if (!isSupabaseConfigured()) {
    return { response: NextResponse.next({ request }), user: null, supabase: null };
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response: supabaseResponse, user, supabase };
}
