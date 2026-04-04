"use client";

import { useEffect, useRef } from "react";
import { useDelayedTrue } from "@/lib/hooks/use-delayed-true";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { createSaveFlightSequence } from "@/lib/persistence/save-flight-sequence";
import {
  salaryDraftSignature,
  salaryStoreMatchesServerPayload,
} from "@/lib/salary/session-save/salary-session-save-logic";
import { appToast } from "@/lib/notify/app-notify";
import { deferExecution } from "@/lib/scheduling/defer-execution";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import {
  useSalarySessionDetailQuery,
  useUpdateSalarySessionMutation,
} from "@/lib/supabase/hooks/use-salary-sessions";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

/**
 * URL `?session=`, hydrate from query, coalesced autosave with dirty baseline,
 * partial PATCH via mutation, save-flight sequencing, no last_opened touch.
 */
export function useSalaryBreakdownCloudSync() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const persist = shouldPersistSessions(user);
  const searchParams = useSearchParams();
  const urlSession = searchParams.get("session");

  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActive = useSalaryStore((s) => s.setActiveSalaryHistoryId);
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);

  const hydrateLifestyle = useLifestyleStore((s) => s.hydrateFromJson);

  const saveFlightRef = useRef<ReturnType<
    typeof createSaveFlightSequence
  > | null>(null);
  saveFlightRef.current ??= createSaveFlightSequence();
  const saveFlight = saveFlightRef.current;

  useEffect(() => {
    if (urlSession && persist) {
      setActive(urlSession);
    }
  }, [urlSession, persist, setActive]);

  /** URL wins on first paint so the detail query runs without waiting for `setActive` in an effect. */
  const effectiveId =
    persist && urlSession ? urlSession : activeId;

  const { data: detail, isPending, isError } = useSalarySessionDetailQuery(
    effectiveId,
    Boolean(persist && effectiveId)
  );

  const lastHydratedSig = useRef<string | null>(null);
  const skipNextFlush = useRef(false);
  const lastPersistedSalarySig = useRef<string | null>(null);
  const lastPersistedInputRef = useRef<SalaryInput | null>(null);
  const lastPersistedBreakdownRef = useRef<SalaryBreakdown | null>(null);

  useEffect(() => {
    saveFlight.reset();
    lastPersistedSalarySig.current = null;
    lastPersistedInputRef.current = null;
    lastPersistedBreakdownRef.current = null;
  }, [effectiveId, saveFlight]);

  useEffect(() => {
    if (!persist || !effectiveId || !isError) return;
    setActive(null);
    lastHydratedSig.current = null;
    if (pathname.startsWith("/salary/breakdown")) {
      router.replace("/salary");
    }
  }, [persist, effectiveId, isError, setActive, router, pathname]);

  useEffect(() => {
    if (!persist || !detail?.session || !effectiveId) return;
    if (detail.session.id !== effectiveId) return;
    const sig = `${detail.session.id}:${detail.session.updated_at}`;
    if (lastHydratedSig.current === sig) return;
    lastHydratedSig.current = sig;
    skipNextFlush.current = true;

    const nextInput = detail.session.input_json as unknown as SalaryInput;
    const nextBreakdown = detail.session.breakdown_json as unknown as SalaryBreakdown;

    const storeInput = useSalaryStore.getState().input;
    const storeBreakdown = useSalaryStore.getState().breakdown;
    const { input: sameInput, breakdown: sameBreakdown } =
      salaryStoreMatchesServerPayload(
        storeInput,
        storeBreakdown,
        nextInput,
        nextBreakdown
      );

    if (!sameInput || !sameBreakdown) {
      // Full replace — setInput() merges partials and can leave stale keys vs
      // server JSON, which then diverges from lastPersisted* and retriggers PATCH.
      useSalaryStore.setState({
        input: nextInput,
        breakdown: nextBreakdown,
      });
    }

    const st = useSalaryStore.getState();
    const bd = st.breakdown;
    if (bd) {
      lastPersistedInputRef.current = st.input;
      lastPersistedBreakdownRef.current = bd;
      lastPersistedSalarySig.current = salaryDraftSignature(st.input, bd);
    }

    const lj = detail.planning?.lifestyle_json;
    if (lj && typeof lj === "object" && !Array.isArray(lj)) {
      hydrateLifestyle(lj as Partial<LifestyleExpenses>);
    }
  }, [detail, effectiveId, persist, hydrateLifestyle]);

  const updateMut = useUpdateSalarySessionMutation();

  const inputRef = useRef(input);
  const breakdownRef = useRef(breakdown);
  inputRef.current = input;
  breakdownRef.current = breakdown;

  const inputSnapshot = JSON.stringify(input);
  const breakdownSnapshot = breakdown ? JSON.stringify(breakdown) : "";

  useEffect(() => {
    if (!persist || !effectiveId || !breakdown || input.annualCTC < 100_000) return;
    if (detail?.session?.id !== effectiveId) return;
    if (skipNextFlush.current) {
      skipNextFlush.current = false;
      return;
    }
    const currentSig = `${inputSnapshot}|${breakdownSnapshot}`;
    if (
      lastPersistedSalarySig.current != null &&
      currentSig === lastPersistedSalarySig.current
    ) {
      return;
    }
    return deferExecution(1000, () => {
      const curInput = inputRef.current;
      const curBreakdown = breakdownRef.current;
      if (!curBreakdown || curInput.annualCTC < 100_000) return;

      const sigNow = salaryDraftSignature(curInput, curBreakdown);
      if (
        lastPersistedSalarySig.current != null &&
        sigNow === lastPersistedSalarySig.current
      ) {
        return;
      }

      const baselineInput = lastPersistedInputRef.current ?? curInput;
      const baselineBreakdown = lastPersistedBreakdownRef.current ?? curBreakdown;

      const flightId = saveFlight.next();
      updateMut.mutate(
        {
          id: effectiveId,
          input: curInput,
          breakdown: curBreakdown,
          baselineInput,
          baselineBreakdown,
        },
        {
          onSuccess: (result) => {
            if (!saveFlight.isLatest(flightId)) return;
            if (result.didWrite) appToast.salarySession.autosaved();
            lastPersistedInputRef.current = curInput;
            lastPersistedBreakdownRef.current = curBreakdown;
            lastPersistedSalarySig.current = salaryDraftSignature(
              curInput,
              curBreakdown
            );
          },
        }
      );
    });
  // Snapshots + session id only — omit `detail.session` (new object on every
  // setQueryData) so PATCH success does not reset the 1s debounce and re-queue saves.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    persist,
    effectiveId,
    detail?.session?.id,
    inputSnapshot,
    breakdownSnapshot,
    updateMut,
    saveFlight,
  ]);

  const cloudHydrating =
    persist && Boolean(effectiveId) && isPending && detail == null;

  /** Detail row is in cache for this session — store may hydrate next microtask. */
  const cloudDetailReady =
    persist &&
    Boolean(effectiveId) &&
    detail?.session != null &&
    detail.session.id === effectiveId;

  const cloudSavingVisible = useDelayedTrue(updateMut.isPending, 450);

  return {
    cloudHydrating,
    cloudSaving: cloudSavingVisible,
    /** True while we have server data to merge but Zustand may not reflect it yet (avoid empty redirect). */
    cloudDetailReady,
  };
}
