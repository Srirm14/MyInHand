import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/client/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export async function requireUser() {
  if (!isSupabaseConfigured()) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { ok: false, error: "Supabase is not configured." },
        { status: 500 }
      ),
    };
  }
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { ok: false, error: "Not signed in." },
        { status: 401 }
      ),
    };
  }
  return { ok: true as const, user };
}

