import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import {
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
  isSupabaseServiceRoleConfigured,
} from "@/lib/supabase/env";

/**
 * Server-only Supabase admin client (service role).
 * Never import this from client components.
 */
export function createSupabaseAdminClient() {
  if (!isSupabaseServiceRoleConfigured()) {
    throw new Error("Supabase service role is not configured.");
  }
  return createClient<Database>(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

