"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  startTransition,
  type RefObject,
} from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Check, Trash2 } from "lucide-react";
import { useSalaryStore } from "@/lib/stores/use-salary-store";
import { useHistoryStore } from "@/lib/stores/use-history-store";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { hasPremiumProductAccess } from "@/lib/access/product-access";
import { shouldPersistSessions } from "@/lib/supabase/persistence-gate";
import { useSalarySessionsListQuery } from "@/lib/supabase/hooks/use-salary-sessions";
import { formatCTCAsLPA, formatCurrency } from "@/lib/utils/format-currency";
import { formatRelativeTime } from "@/lib/utils/format-relative-time";
import { coerceSalarySnapshot } from "@/lib/utils/coerce-salary-snapshot";
import { isSalaryInputEquivalent } from "@/lib/utils/salary-context-match";
import { clearSalaryBreakdownScrollSave } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { Separator } from "@/components/ui/separator";
import { RemoveSalaryEntryDialog } from "@/components/layout/remove-salary-entry-dialog";
import { useSalaryHistoryDelete } from "@/lib/hooks/use-salary-history-delete";
import { appToast } from "@/lib/notify/app-notify";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";
import { cn } from "@/lib/utils";

const DROPDOWN_LIMIT = 5;
/** Match CTC form floor — below this, treat as no meaningful salary for nav label. */
const MIN_CTC_FOR_LABEL = 100_000;

/**
 * Premium salary entry switcher. Mounted with `key={pathname}` so `open` resets on
 * navigation without syncing state in an effect (avoids cascading render lint).
 */
function SalaryNavHistoryDropdown({
  open,
  onOpenChange,
  recentSalaries,
  isEntryActive,
  onSelectEntry,
  containerRef,
  hasMeaningfulCtc,
  breakdownExists,
  salaryWorkspaceHref,
  historySource,
}: Readonly<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recentSalaries: SalaryHistoryEntry[];
  isEntryActive: (entry: SalaryHistoryEntry) => boolean;
  onSelectEntry: (entry: SalaryHistoryEntry) => void;
  containerRef: RefObject<HTMLDivElement | null>;
  hasMeaningfulCtc: boolean;
  breakdownExists: boolean;
  salaryWorkspaceHref: string;
  historySource: "cloud" | "local";
}>) {
  const [pendingDelete, setPendingDelete] = useState<SalaryHistoryEntry | null>(
    null
  );
  const router = useRouter();
  const resetSalary = useSalaryStore((s) => s.reset);
  const { applyRemove } = useSalaryHistoryDelete(
    useCallback(() => {
      onOpenChange(false);
    }, [onOpenChange])
  );

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onOpenChange(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, containerRef, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onOpenChange]);

  const handleStartNew = useCallback(() => {
    resetSalary();
    clearSalaryBreakdownScrollSave();
    onOpenChange(false);
    router.push("/salary");
  }, [resetSalary, router, onOpenChange]);

  const confirmRemoveEntry = useCallback(async () => {
    if (!pendingDelete) return;
    await applyRemove(pendingDelete);
  }, [pendingDelete, applyRemove]);

  return (
    <>
      {open ? (
        <div
          id="salary-entry-menu"
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

          {breakdownExists && hasMeaningfulCtc ? (
            <div className="px-3 pb-2">
              <Link
                href={salaryWorkspaceHref}
                className="block rounded-lg px-3 py-2 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-50/80"
                onClick={() => onOpenChange(false)}
              >
                Open current workspace →
              </Link>
            </div>
          ) : null}

          <Separator className="my-1 bg-navy-100" />

          <p className="px-3 pt-2 text-[10px] font-semibold uppercase tracking-wide text-navy-400">
            {historySource === "cloud" ? "Saved to your account" : "Saved on this device"}
          </p>
          <p className="px-3 pb-1 text-[11px] text-navy-400 leading-snug">
            Last five shown here (newest first).
            {hasMeaningfulCtc
              ? " Your LPA in the nav is the run you’re on."
              : " Pick a saved run below or keep entering a new CTC on this page."}
          </p>
          <ul className="max-h-[min(50vh,280px)] overflow-y-auto py-1 px-1">
            {recentSalaries.length === 0 ? (
              <li className="px-3 py-3 text-center text-xs text-navy-500 leading-relaxed">
                {historySource === "cloud"
                  ? "No saved sessions yet. Run a breakdown to create one in your account."
                  : "No saved entries yet. Run another breakdown to add one—up to 40 are kept on this device."}
              </li>
            ) : (
              recentSalaries.map((entry) => {
                const current = isEntryActive(entry);
                return (
                  <li key={entry.id} className="px-0.5">
                    <div className="flex items-stretch gap-1 rounded-lg pr-1 hover:bg-navy-50/50">
                      {historySource === "cloud" ? (
                        <Link
                          href={`/salary/breakdown?session=${encodeURIComponent(entry.id)}`}
                          scroll={false}
                          role="option"
                          aria-selected={current}
                          onClick={() => {
                            onSelectEntry(entry);
                            onOpenChange(false);
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
                        </Link>
                      ) : (
                        <button
                          type="button"
                          role="option"
                          aria-selected={current}
                          onClick={() => {
                            onSelectEntry(entry);
                            onOpenChange(false);
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
                      )}
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
              onClick={() => onOpenChange(false)}
            >
              Manage saved salaries
            </Link>
          </div>
        </div>
      ) : null}

      <RemoveSalaryEntryDialog
        entry={pendingDelete}
        open={pendingDelete != null}
        onOpenChange={(next) => {
          if (!next) setPendingDelete(null);
        }}
        onConfirm={confirmRemoveEntry}
        variant="nav"
      />
    </>
  );
}

/**
 * Context-aware Salary nav (primary item):
 * - Before a completed run: label `Salary`, link → `/salary`
 * - After breakdown exists: `Salary (25 LPA)` via formatCTCAsLPA, link → `/salary/breakdown`
 * - Premium access (env or `profiles.plan_tier`): label + chevron menu (switch runs, new check).
 *   Otherwise: plain Salary link only—no history switcher in nav.
 */
export function SalaryNavItem() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const persist = shouldPersistSessions(user);

  const annualCTC = useSalaryStore((s) => s.input.annualCTC);
  const input = useSalaryStore((s) => s.input);
  const breakdown = useSalaryStore((s) => s.breakdown);
  const setInput = useSalaryStore((s) => s.setInput);
  const calculateBreakdown = useSalaryStore((s) => s.calculateBreakdown);
  const activeSalaryHistoryId = useSalaryStore((s) => s.activeSalaryHistoryId);
  const setActiveSalaryHistoryId = useSalaryStore(
    (s) => s.setActiveSalaryHistoryId
  );

  const salaryContexts = useHistoryStore((s) => s.salaryContexts);
  const { data: cloudSalaries = [] } = useSalarySessionsListQuery(persist);

  const isActive =
    pathname === "/salary" || pathname.startsWith("/salary/");

  const hasMeaningfulCtc =
    breakdown != null && annualCTC >= MIN_CTC_FOR_LABEL;
  const ctcLabel = hasMeaningfulCtc ? formatCTCAsLPA(annualCTC) : "";

  const recentSalaries = (persist ? cloudSalaries : salaryContexts).slice(
    0,
    DROPDOWN_LIMIT
  );
  const historySource = persist ? "cloud" : "local";

  /** Env premium or account premium — same as other premium chrome. */
  const hasDropdown = hasPremiumProductAccess(user?.planTier);

  const salaryHref =
    breakdown && activeSalaryHistoryId && persist
      ? `/salary/breakdown?session=${encodeURIComponent(activeSalaryHistoryId)}`
      : breakdown
        ? "/salary/breakdown"
        : "/salary";

  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

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
      setActiveSalaryHistoryId(entry.id);
      if (persist) {
        appToast.salarySession.opened();
        return;
      }
      setInput(coerceSalarySnapshot(entry.snapshot));
      calculateBreakdown();
      router.push("/salary/breakdown");
      appToast.salarySession.opened();
    },
    [setInput, calculateBreakdown, setActiveSalaryHistoryId, router, persist]
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
    <div ref={containerRef} className="relative inline-flex items-center">
      {hasDropdown ? (
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className={cn(
            linkClass,
            "inline-flex items-center gap-1 cursor-pointer border-0 bg-transparent p-0"
          )}
          aria-expanded={menuOpen}
          aria-haspopup="listbox"
          aria-controls="salary-entry-menu"
          id="salary-nav-menu-trigger"
        >
          <span>{labelText}</span>
          <ChevronDown
            className={cn(
              "size-3.5 shrink-0 text-navy-500 transition-transform duration-150",
              menuOpen && "rotate-180",
              isActive ? "text-navy-600" : "text-navy-400"
            )}
            aria-hidden
          />
        </button>
      ) : (
        <Link href={salaryHref} className={linkClass}>
          {labelText}
        </Link>
      )}

      {hasDropdown ? (
        <SalaryNavHistoryDropdown
          key={pathname}
          open={menuOpen}
          onOpenChange={setMenuOpen}
          recentSalaries={recentSalaries}
          isEntryActive={isEntryActive}
          onSelectEntry={handleSelectEntry}
          containerRef={containerRef}
          hasMeaningfulCtc={hasMeaningfulCtc}
          breakdownExists={breakdown != null}
          salaryWorkspaceHref={salaryHref}
          historySource={historySource}
        />
      ) : null}
    </div>
  );
}
