"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Check, Trash2 } from "lucide-react";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { PREMIUM_UNLOCKED } from "@/lib/config/access-mode";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { formatCTCAsLPA, formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import type { SalaryInput } from "@/lib/types/salary.types";
import { cn } from "@/lib/utils";

const DROPDOWN_LIMIT = 5;
/** Match CTC form floor — below this, treat as no meaningful salary for nav label. */
const MIN_CTC_FOR_LABEL = 100_000;

/**
 * Premium salary entry switcher. Mounted with `key={pathname}` so `open` resets on
 * navigation without syncing state in an effect (avoids cascading render lint).
 */
function SalaryNavHistoryDropdown({
  recentSalaries,
  input,
  isEntryActive,
  onSelectEntry,
  containerRef,
}: Readonly<{
  recentSalaries: SalaryHistoryEntry[];
  input: SalaryInput;
  isEntryActive: (entry: SalaryHistoryEntry) => boolean;
  onSelectEntry: (entry: SalaryHistoryEntry) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}>) {
  const [open, setOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<SalaryHistoryEntry | null>(
    null
  );
  const router = useRouter();
  const removeSalaryContext = useHistoryStore((s) => s.removeSalaryContext);
  const resetSalary = useSalaryStore((s) => s.reset);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, containerRef]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const handleStartNew = useCallback(() => {
    resetSalary();
    clearSalaryBreakdownScrollSave();
    setOpen(false);
    router.push("/salary");
  }, [resetSalary, router]);

  const confirmRemoveEntry = useCallback(() => {
    const entry = pendingDelete;
    if (!entry) return;
    const wasActive =
      entry.id === activeSalaryHistoryId ||
      (activeSalaryHistoryId == null &&
        isSalaryInputEquivalent(entry.snapshot, input));

    removeSalaryContext(entry.id);
    setPendingDelete(null);
    setOpen(false);

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
    activeSalaryHistoryId,
    input,
    removeSalaryContext,
    setInput,
    calculateBreakdown,
    setActiveSalaryHistoryId,
    resetSalary,
    router,
  ]);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center rounded p-0.5 transition-colors",
          "text-navy-500 hover:text-navy-800",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Salary entry menu"
      >
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-150",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-3 w-[min(100vw-2rem,320px)]",
            "rounded-2xl border border-navy-200/60 bg-white py-2 shadow-lg",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"
          )}
          role="listbox"
          aria-label="Salary entry menu"
        >
          <div className="px-3 pb-2 pt-1">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-400">
              New check
            </p>
            <button
              type="button"
              role="option"
              aria-selected={false}
              onClick={handleStartNew}
              className={cn(
                "mt-1.5 w-full rounded-xl border border-dashed border-teal-200/90 bg-teal-50/40 px-3 py-2.5 text-left transition-colors",
                "hover:bg-teal-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              )}
            >
              <span className="text-sm font-semibold text-teal-800">
                New in-hand check
              </span>
              <span className="mt-0.5 block text-[11px] text-navy-500 leading-snug">
                Clear the form and start a fresh CTC from zero—nothing carried
                over.
              </span>
            </button>
          </div>

          <Separator className="my-1 bg-navy-100" />

          <p className="px-3 pt-2 text-[10px] font-semibold uppercase tracking-wide text-navy-400">
            Saved on this device
          </p>
          <p className="px-3 pb-1 text-[11px] text-navy-400 leading-snug">
            Last five shown here (newest first). Your active salary stays in the
            nav label above.
          </p>
          <ul className="max-h-[min(50vh,280px)] overflow-y-auto py-1">
            {recentSalaries.length === 0 ? (
              <li className="px-3 py-3 text-center text-xs text-navy-500 leading-relaxed">
                No saved entries yet. Run another breakdown to add one—up to 40
                are kept on this device.
              </li>
            ) : (
              recentSalaries.map((entry) => {
                const current = isEntryActive(entry);
                return (
                  <li key={entry.id} className="px-1">
                    <div className="flex items-stretch gap-0.5 rounded-lg hover:bg-navy-50/50">
                      <button
                        type="button"
                        role="option"
                        aria-selected={current}
                        onClick={() => {
                          onSelectEntry(entry);
                          setOpen(false);
                        }}
                        className={cn(
                          "min-w-0 flex-1 px-2 py-2.5 text-left transition-colors rounded-lg",
                          "hover:bg-teal-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-400",
                          current && "bg-teal-50/40"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex min-w-0 items-center gap-2">
                            {current ? (
                              <Check
                                className="mt-0.5 size-3.5 shrink-0 text-teal-600"
                                aria-hidden
                              />
                            ) : (
                              <span className="w-3.5 shrink-0" aria-hidden />
                            )}
                            <div className="min-w-0">
                              <span
                                className={cn(
                                  "block text-sm font-semibold tabular-nums",
                                  current ? "text-teal-800" : "text-navy-800"
                                )}
                              >
                                {formatCTCAsLPA(entry.annualCTC)}
                              </span>
                              <span className="text-[11px] text-navy-500">
                                {current ? (
                                  <span className="font-medium text-teal-700">
                                    Active ·{" "}
                                  </span>
                                ) : null}
                                {entry.regimeLabel} · In-hand{" "}
                                {formatCurrency(entry.monthlyInHand)}/mo
                              </span>
                            </div>
                          </div>
                          <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-navy-400 tabular-nums">
                            {formatRelativeTime(entry.at)}
                          </span>
                        </div>
                      </button>
                      <button
                        type="button"
                        aria-label={`Remove saved salary ${formatCTCAsLPA(entry.annualCTC)}`}
                        className={cn(
                          "shrink-0 self-center rounded-lg p-2.5 text-navy-400 transition-colors",
                          "hover:bg-danger-50 hover:text-danger-600",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setPendingDelete(entry);
                        }}
                      >
                        <Trash2 className="size-4" strokeWidth={2} aria-hidden />
                      </button>
                    </div>
                  </li>
                );
              })
            )}
          </ul>

          <div className="border-t border-navy-100 px-3 pt-2 pb-1">
            <Link
              href="/salary/history"
              className="block py-2 text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800"
              onClick={() => setOpen(false)}
            >
              Manage saved salaries
            </Link>
          </div>
        </div>
      ) : null}

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
                    will be permanently removed from saved salaries on this
                    device. This cannot be undone.
                  </span>
                  <span className="mt-3 block text-xs leading-relaxed text-navy-500">
                    Your current workspace is unchanged until you pick another
                    entry or start a new check.
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
    </>
  );
}

/**
 * Context-aware Salary nav (primary item):
 * - Before a completed run: label `Salary`, link → `/salary`
 * - After breakdown exists: `Salary (25 LPA)` via formatCTCAsLPA, link → `/salary/breakdown`
 * - Premium + meaningful CTC: chevron opens entry menu (new check + up to 5 recent + delete)
 */
export function SalaryNavItem() {
  const pathname = usePathname();
  const router = useRouter();

  const annualCTC = useSalaryStore((s) => s.input.annualCTC);
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );

  const user = useAuthStore((s) => s.user);
  const salaryContexts = useHistoryStore((s) => s.salaryContexts);

  const isActive =
    pathname === "/salary" || pathname.startsWith("/salary/");
  const loggedIn = Boolean(user);
  const premium = loggedIn && PREMIUM_UNLOCKED;

  const hasMeaningfulCtc =
    breakdown != null && annualCTC >= MIN_CTC_FOR_LABEL;
  const ctcLabel = hasMeaningfulCtc ? formatCTCAsLPA(annualCTC) : "";

  const recentSalaries = salaryContexts.slice(0, DROPDOWN_LIMIT);
  const hasDropdown = premium && hasMeaningfulCtc;

  const salaryHref = breakdown ? "/salary/breakdown" : "/salary";

  /** Bumps when the Salary link is clicked so the dropdown remounts closed (same-route navigations). */
  const [menuKey, setMenuKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isEntryActive = useCallback(
    (entry: SalaryHistoryEntry) => {
      if (entry.id === activeSalaryHistoryId) return true;
      if (activeSalaryHistoryId == null) {
        return isSalaryInputEquivalent(entry.snapshot, input);
      }
      return false;
    },
    [activeSalaryHistoryId, input]
  );

  const handleSelectEntry = useCallback(
    (entry: SalaryHistoryEntry) => {
      setInput(coerceSalarySnapshot(entry.snapshot));
      calculateBreakdown();
      setActiveSalaryHistoryId(entry.id);
      router.push("/salary/breakdown");
    },
    [setInput, calculateBreakdown, setActiveSalaryHistoryId, router]
  );

  const linkClass = cn(
    "text-sm font-medium transition-colors rounded px-0.5 -mx-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
    isActive
      ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600"
      : "text-navy-500 hover:text-navy-800"
  );

  const labelText = ctcLabel ? `Salary (${ctcLabel})` : "Salary";

  return (
    <div ref={containerRef} className="relative inline-flex items-center gap-0.5">
      <Link
        href={salaryHref}
        className={linkClass}
        onClick={() => setMenuKey((k) => k + 1)}
      >
        {labelText}
      </Link>

      {hasDropdown ? (
        <SalaryNavHistoryDropdown
          key={`${pathname}-${menuKey}`}
          recentSalaries={recentSalaries}
          input={input}
          isEntryActive={isEntryActive}
          onSelectEntry={handleSelectEntry}
          containerRef={containerRef}
        />
      ) : null}
    </div>
  );
}
