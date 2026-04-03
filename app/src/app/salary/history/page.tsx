"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Trash2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import {
  useHistoryStore,
  SALARY_HISTORY_MAX_ENTRIES,
} from "@/lib/stores/use-history-store";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { formatCTCAsLPA, formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import { cn } from "@/lib/utils";

export default function SalaryHistoryPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const salaryContexts = useHistoryStore((s) => s.salaryContexts);
  const historyFull =
    salaryContexts.length >= SALARY_HISTORY_MAX_ENTRIES;
  const removeSalaryContext = useHistoryStore((s) => s.removeSalaryContext);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );
  const resetSalary = useSalaryStore((s) => s.reset);
  const activeId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const input = useSalaryStore((s) => s.input);

  const [pendingDelete, setPendingDelete] = useState<SalaryHistoryEntry | null>(
    null
  );

  const allowed = Boolean(user) && PREMIUM_UNLOCKED;

  useEffect(() => {
    if (!allowed) {
      router.replace("/salary");
    }
  }, [allowed, router]);

  const handleStartNew = useCallback(() => {
    resetSalary();
    clearSalaryBreakdownScrollSave();
    router.push("/salary");
  }, [resetSalary, router]);

  const confirmRemoveEntry = useCallback(() => {
    const entry = pendingDelete;
    if (!entry) return;
    const wasActive =
      entry.id === activeId ||
      (activeId == null && isSalaryInputEquivalent(entry.snapshot, input));

    removeSalaryContext(entry.id);
    setPendingDelete(null);

    const remaining = useHistoryStore.getState().salaryContexts;
    if (wasActive) {
      const next = remaining[0];
      if (next) {
        setInput(coerceSalarySnapshot(next.snapshot));
        calculateBreakdown();
        setActiveSalaryHistoryId(next.id);
        router.push("/salary/breakdown");
      } else {
        resetSalary();
        clearSalaryBreakdownScrollSave();
        router.push("/salary");
      }
    }
  }, [
    pendingDelete,
    activeId,
    input,
    removeSalaryContext,
    setInput,
    calculateBreakdown,
    setActiveSalaryHistoryId,
    resetSalary,
    router,
  ]);

  if (!allowed) {
    return (
      <PageShell className="py-20">
        <p className="text-center text-sm text-navy-500">Redirecting…</p>
      </PageShell>
    );
  }

  return (
    <PageShell className="py-8 md:py-10">
      <Link
        href="/salary"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group -ml-1.5 mb-6 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800"
        )}
      >
        <ChevronLeft
          className="size-3.5 opacity-70 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={2}
          aria-hidden
        />
        Back to salary
      </Link>

      <header className="max-w-2xl">
        <h1 className="text-h1 text-navy-800">Saved salaries</h1>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">
          Up to {SALARY_HISTORY_MAX_ENTRIES} calculations on this device—switch,
          tidy the list, or start a clean in-hand check. Nothing here changes your
          bank or payroll data.
        </p>
      </header>

      {historyFull ? (
        <div
          className="mt-6 max-w-xl rounded-xl border border-amber-200/90 bg-amber-50/85 px-4 py-3.5 text-sm text-amber-950 shadow-sm shadow-amber-900/[0.03]"
          aria-live="polite"
        >
          <p className="font-semibold">History limit reached</p>
          <p className="mt-1 text-xs text-amber-900/90 leading-relaxed">
            Remove a saved salary below before you can run a new check from the
            salary page. This keeps your list manageable.
          </p>
        </div>
      ) : null}

      <div className="mt-8 max-w-xl">
        <Button
          type="button"
          variant="outline"
          className="h-10 w-full rounded-full border-teal-200 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:w-auto sm:px-6"
          onClick={handleStartNew}
        >
          New in-hand check
        </Button>
      </div>

      {salaryContexts.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-navy-200/80 bg-navy-50/30 px-6 py-12 text-center">
          <p className="text-sm font-medium text-navy-700">No saved entries yet</p>
          <p className="mt-2 text-xs text-navy-500 leading-relaxed max-w-sm mx-auto">
            Each breakdown you run from the salary page can be saved here (up to{" "}
            {SALARY_HISTORY_MAX_ENTRIES}) so you can switch back anytime.
          </p>
          <Button
            type="button"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "mt-6 h-10 rounded-full px-6 text-sm font-semibold"
            )}
            onClick={handleStartNew}
          >
            New in-hand check
          </Button>
        </div>
      ) : (
        <ul className="mt-8 max-w-xl space-y-2">
          {salaryContexts.map((entry) => {
            const active = entry.id === activeId;
            return (
              <li key={entry.id}>
                <div
                  className={cn(
                    "flex flex-col gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between",
                    active
                      ? "border-teal-300/80 ring-1 ring-teal-100"
                      : "border-navy-200/60"
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-navy-800">
                      {formatCTCAsLPA(entry.annualCTC)}
                      {active ? (
                        <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                          Active
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-0.5 text-xs text-navy-500">
                      {entry.regimeLabel} · In-hand{" "}
                      {formatCurrency(entry.monthlyInHand)}/mo ·{" "}
                      {formatRelativeTime(entry.at)}
                    </p>
                    {entry.title ? (
                      <p className="mt-1 truncate text-[11px] text-navy-400">
                        {entry.title}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-9 rounded-lg text-navy-400 hover:bg-danger-50 hover:text-danger-600"
                      aria-label={`Remove saved salary ${formatCTCAsLPA(entry.annualCTC)}`}
                      onClick={() => setPendingDelete(entry)}
                    >
                      <Trash2 className="size-4" strokeWidth={2} />
                    </Button>
                    <Button
                      type="button"
                      variant={active ? "secondary" : "default"}
                      className="h-9 rounded-full px-4 text-xs font-semibold"
                      disabled={active}
                      onClick={() => {
                        setInput(coerceSalarySnapshot(entry.snapshot));
                        calculateBreakdown();
                        setActiveSalaryHistoryId(entry.id);
                        router.push("/salary/breakdown");
                      }}
                    >
                      {active ? "Current" : "Use this salary"}
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <Dialog
        open={pendingDelete != null}
        onOpenChange={(next) => {
          if (!next) setPendingDelete(null);
        }}
      >
        <DialogContent
          showCloseButton
          className="sm:max-w-[420px] gap-0 p-6 pt-7"
        >
          <DialogHeader className="space-y-3 text-left pr-10">
            <DialogTitle className="text-base font-semibold text-navy-800 font-heading leading-snug">
              Remove this saved salary?
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-navy-600">
              {pendingDelete ? (
                <>
                  <span className="block">
                    <span className="font-semibold text-navy-800 tabular-nums">
                      {formatCTCAsLPA(pendingDelete.annualCTC)}
                    </span>{" "}
                    will be permanently removed from this device. This cannot be
                    undone.
                  </span>
                  <span className="mt-3 block text-xs leading-relaxed text-navy-500">
                    If this was your active salary, we&apos;ll load the next saved
                    entry or take you to a clean salary form.
                  </span>
                </>
              ) : null}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex flex-col-reverse gap-2.5 border-t border-navy-100 pt-5 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="h-10 rounded-full px-5"
              onClick={() => setPendingDelete(null)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="default"
              className="h-10 rounded-full bg-danger-600 px-5 hover:bg-danger-700"
              onClick={confirmRemoveEntry}
            >
              Remove saved salary
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
