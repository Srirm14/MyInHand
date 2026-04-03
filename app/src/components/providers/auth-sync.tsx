"use client";

import { useEffect } from "react";
import { setSessionEmailCookie } from "@/lib/auth/session-cookie";
import { useAuthStore } from "@/lib/stores/use-auth-store";

/** Keeps session cookie aligned with persisted user after login / rehydrate. */
export function AuthSync() {
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (user?.email) setSessionEmailCookie(user.email);
  }, [user]);

  return null;
}
