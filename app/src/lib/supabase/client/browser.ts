import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/supabase/database.types";
import { getSupabaseAnonKey, getSupabaseUrl, isSupabaseConfigured } from "@/lib/supabase/env";

let browserClient: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function getBrowserSupabase() {
  if (!isSupabaseConfigured()) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }
  if (!browserClient) {
    browserClient = createBrowserClient<Database>(
      getSupabaseUrl(),
      getSupabaseAnonKey()
    );
  }
  return browserClient;
}

/** Returns null when env is missing (e.g. forgot-password placeholder UI). */
export function tryGetBrowserSupabase() {
  if (!isSupabaseConfigured()) return null;
  try {
    return getBrowserSupabase();
  } catch {
    return null;
  }
}

export const createBrowserSupabaseClient = getBrowserSupabase;
