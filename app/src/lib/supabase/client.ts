/** Browser-only barrel — do not re-export `client/server` here (breaks client bundles). */
export {
  getBrowserSupabase,
  tryGetBrowserSupabase,
  createBrowserSupabaseClient,
} from "@/lib/supabase/client/browser";
