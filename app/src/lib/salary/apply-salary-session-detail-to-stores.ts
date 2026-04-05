import { useLifestyleStore } from "@/lib/stores/use-lifestyle-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import type { SalarySessionDetail } from "@/lib/supabase/queries/salary-sessions";
import { salaryStoreMatchesServerPayload } from "@/lib/salary/session-save/salary-session-save-logic";
import type { LifestyleExpenses } from "@/lib/types/lifestyle.types";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

let lastAppliedHydrationSig: string | null = null;
let pendingSkipNextSalaryFlush = false;

/** Call on sign-out so the next session can hydrate cleanly. */
export function resetSalarySessionClientHydration(): void {
  lastAppliedHydrationSig = null;
  pendingSkipNextSalaryFlush = false;
}

/** Breakdown autosave: skip one debounced flush after server-driven hydrate. */
export function consumeSkipNextSalaryFlush(): boolean {
  const v = pendingSkipNextSalaryFlush;
  pendingSkipNextSalaryFlush = false;
  return v;
}

/**
 * Merge `SalarySessionDetail` into salary + lifestyle stores (deduped by
 * session id + updated_at). Sets a flag so coalesced PATCH skips once.
 */
export function applySalarySessionDetailToStores(
  detail: SalarySessionDetail | null | undefined,
  effectiveId: string
): void {
  if (!detail?.session || detail.session.id !== effectiveId) return;
  const sig = `${detail.session.id}:${detail.session.updated_at}`;
  if (lastAppliedHydrationSig === sig) return;
  lastAppliedHydrationSig = sig;
  pendingSkipNextSalaryFlush = true;

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
    useSalaryStore.setState({
      input: nextInput,
      breakdown: nextBreakdown,
    });
  }

  const lj = detail.planning?.lifestyle_json;
  if (lj && typeof lj === "object" && !Array.isArray(lj)) {
    useLifestyleStore.getState().hydrateFromJson(lj as Partial<LifestyleExpenses>);
  }
}
