"use client";

import { useEffect, useRef } from "react";
import { useDelayedTrue } from "@/lib/hooks/use-delayed-true";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import {
  useSalarySessionDetailQuery,
  useTouchSalarySessionMutation,
  useUpdateSalarySessionMutation,
} from "@/lib/supabase/hooks/use-salary-sessions";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

/**
 * URL `?session=`, hydrate from Supabase detail, debounced PATCH, and last_opened touch.
 */
export function useSalaryBreakdownCloudSync() {
  const user = useAuthStore((s) => s.user);
  const persist = shouldPersistSessions(user);
  const searchParams = useSearchParams();
  const urlSession = searchParams.get("session");

  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActive = useSalaryStore((s) => s.setActiveSalaryHistoryId);
  const setInput = useSalaryStore((s) => s.setInput);
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);

  const hydrateLifestyle = useLifestyleStore((s) => s.hydrateFromJson);

  useEffect(() => {
    if (urlSession && persist) {
      setActive(urlSession);
    }
  }, [urlSession, persist, setActive]);

  const effectiveId = activeId;
  const { data: detail, isPending } = useSalarySessionDetailQuery(
    effectiveId,
    Boolean(persist && effectiveId)
  );

  const lastHydratedSig = useRef<string | null>(null);
  const skipNextSave = useRef(false);

  useEffect(() => {
    if (!persist || !detail?.session || !effectiveId) return;
    if (detail.session.id !== effectiveId) return;
    const sig = `${detail.session.id}:${detail.session.updated_at}`;
    if (lastHydratedSig.current === sig) return;
    lastHydratedSig.current = sig;
    skipNextSave.current = true;

    const nextInput = detail.session.input_json as unknown as SalaryInput;
    const nextBreakdown = detail.session.breakdown_json as unknown as SalaryBreakdown;
    setInput(nextInput);
    useSalaryStore.setState({ breakdown: nextBreakdown });

    const lj = detail.planning?.lifestyle_json;
    if (lj && typeof lj === "object" && !Array.isArray(lj)) {
      hydrateLifestyle(lj as Partial<LifestyleExpenses>);
    }
  }, [detail, effectiveId, persist, setInput, hydrateLifestyle]);

  const updateMut = useUpdateSalarySessionMutation();
  const touchMut = useTouchSalarySessionMutation();
  const touchedId = useRef<string | null>(null);

  useEffect(() => {
    if (!persist || !effectiveId) return;
    if (touchedId.current === effectiveId) return;
    touchedId.current = effectiveId;
    touchMut.mutate(effectiveId);
  }, [effectiveId, persist, touchMut]);

  const inputSnapshot = JSON.stringify(input);
  const breakdownSnapshot = breakdown ? JSON.stringify(breakdown) : "";

  useEffect(() => {
    if (!persist || !effectiveId || !breakdown || input.annualCTC < 100_000) return;
    if (skipNextSave.current) {
      skipNextSave.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      updateMut.mutate({ id: effectiveId, input, breakdown });
    }, 1000);
    return () => window.clearTimeout(t);
  }, [
    persist,
    effectiveId,
    inputSnapshot,
    breakdownSnapshot,
    updateMut,
    input,
    breakdown,
  ]);

  const cloudHydrating =
    persist && Boolean(effectiveId) && isPending && detail == null;

  const cloudSavingVisible = useDelayedTrue(updateMut.isPending, 450);

  return {
    cloudHydrating,
    /** True while autosave mutation is in flight (delayed to avoid flicker on fast writes). */
    cloudSaving: cloudSavingVisible,
  };
}
