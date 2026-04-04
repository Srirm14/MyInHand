"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getBrowserSupabase } from "@/lib/supabase/client/browser";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { queryKeys } from "@/lib/supabase/query-keys";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { clearAllWorkspaceSessionCookies } from "@/lib/persistence/workspace-session-cookies";

/** Hydrates auth user from Supabase session and keeps TanStack session caches in sync. */
export function AuthSync() {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      useAuthStore.getState().markAuthReady();
      return;
    }

    const supabase = getBrowserSupabase();
    void useAuthStore.getState().refreshProfileFromAuthUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session?.user) {
        clearAllWorkspaceSessionCookies();
        useAuthStore.getState().setSessionUser(null);
        useSalaryStore.getState().reset();
        queryClient.removeQueries({ queryKey: queryKeys.salarySessions.root });
        queryClient.removeQueries({ queryKey: queryKeys.offerSessions.root });
        useAuthStore.getState().markAuthReady();
        return;
      }
      void useAuthStore.getState().refreshProfileFromAuthUser();
      if (event === "TOKEN_REFRESHED") {
        return;
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.salarySessions.root });
      queryClient.invalidateQueries({ queryKey: queryKeys.offerSessions.root });
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return null;
}
