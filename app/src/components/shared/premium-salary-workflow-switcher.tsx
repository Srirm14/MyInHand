"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  LineChart,
  Scale,
  Table2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SALARY_PREMIUM_BREAKDOWN,
  SALARY_PREMIUM_EMI_ANALYZER,
  SALARY_PREMIUM_LIFESTYLE,
  SALARY_PREMIUM_WEALTH_FORECAST,
  salaryPremiumBreakdownHref,
} from "@/lib/config/salary-premium-paths";
import { persistSalaryBreakdownScrollNow } from "@/lib/hooks/use-salary-breakdown-scroll-restoration";
import { cn } from "@/lib/utils";

type WorkflowItem = {
  id: string;
  label: string;
  description: string;
  path: string;
  icon: LucideIcon;
};

const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    id: "breakdown",
    label: "Breakdown",
    description: "Component table & in-hand model",
    path: SALARY_PREMIUM_BREAKDOWN,
    icon: Table2,
  },
  {
    id: "monthly",
    label: "Monthly plan",
    description: "Cash against essentials & spend",
    path: SALARY_PREMIUM_LIFESTYLE,
    icon: CalendarDays,
  },
  {
    id: "emi",
    label: "EMI planner",
    description: "Affordability & loan stress",
    path: SALARY_PREMIUM_EMI_ANALYZER,
    icon: Scale,
  },
  {
    id: "forecast",
    label: "Wealth forecast",
    description: "Longer-range trajectory view",
    path: SALARY_PREMIUM_WEALTH_FORECAST,
    icon: LineChart,
  },
];

function workflowHref(item: WorkflowItem, sessionId: string | null): string {
  if (item.path === SALARY_PREMIUM_BREAKDOWN) {
    return salaryPremiumBreakdownHref(sessionId);
  }
  return item.path;
}

function isWorkflowRoute(pathname: string): boolean {
  return WORKFLOW_ITEMS.some((r) => pathname === r.path);
}

export function PremiumSalaryWorkflowSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!isWorkflowRoute(pathname)) return null;

  const sessionId = searchParams.get("session");
  const sessionForBreakdown =
    sessionId != null && sessionId.length > 0 ? sessionId : null;

  return (
    <PremiumSalaryWorkflowSwitcherInner
      key={pathname}
      pathname={pathname}
      sessionForBreakdown={sessionForBreakdown}
    />
  );
}

function PremiumSalaryWorkflowSwitcherInner({
  pathname,
  sessionForBreakdown,
}: Readonly<{
  pathname: string;
  sessionForBreakdown: string | null;
}>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const onPointerDownNavigate = useCallback(() => {
    if (pathname === SALARY_PREMIUM_BREAKDOWN) {
      persistSalaryBreakdownScrollNow();
    }
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const active = WORKFLOW_ITEMS.find((r) => r.path === pathname);

  return (
    <div
      ref={rootRef}
      className={cn(
        "pointer-events-none fixed z-[45] flex flex-col items-end",
        "bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))]",
        "md:bottom-8 md:right-8"
      )}
    >
      <section
        id={panelId}
        aria-label="Premium salary tools"
        aria-hidden={!open}
        className={cn(
          "mb-2 w-[min(calc(100vw-2rem),17.5rem)] origin-bottom-right",
          "rounded-2xl border border-navy-200/70 bg-white/98 p-1.5 shadow-lg shadow-navy-900/[0.08] ring-1 ring-navy-900/[0.04] backdrop-blur-md",
          "motion-safe:transition-[opacity,transform] motion-safe:duration-200",
          open
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-1 opacity-0"
        )}
      >
        <p className="px-2.5 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-400">
          Salary workspace
        </p>
        <ul className="flex list-none flex-col gap-0.5 p-0">
          {WORKFLOW_ITEMS.map((item) => {
            const Icon = item.icon;
            const href = workflowHref(item, sessionForBreakdown);
            const isActive = pathname === item.path;
            return (
              <li key={item.id}>
                {isActive ? (
                  <div
                    className={cn(
                      "flex cursor-default items-start gap-2.5 rounded-xl px-2.5 py-2",
                      "bg-teal-50/90 ring-1 ring-teal-100/80"
                    )}
                    aria-current="page"
                  >
                    <div
                      className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-100/80 text-teal-700"
                      aria-hidden
                    >
                      <Icon className="size-4" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-tight text-teal-900">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-teal-800/80">
                        {item.description}
                      </p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-teal-700/90">
                        Current
                      </p>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={href}
                    onPointerDownCapture={onPointerDownNavigate}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-start gap-2.5 rounded-xl px-2.5 py-2 transition-colors",
                      "hover:bg-navy-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2"
                    )}
                  >
                    <div
                      className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600 ring-1 ring-navy-100/80"
                      aria-hidden
                    >
                      <Icon className="size-4" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-tight text-navy-800">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-navy-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "pointer-events-auto flex h-11 items-center gap-2 rounded-full border px-3.5 backdrop-blur-sm",
          "border-teal-200/85 bg-gradient-to-br from-white via-teal-50/55 to-teal-50/90",
          "shadow-md shadow-teal-900/[0.07] ring-1 ring-teal-100/50",
          "transition-[border-color,box-shadow,ring-color] hover:border-teal-300/90 hover:shadow-lg hover:shadow-teal-900/[0.09]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
        )}
      >
        <span
          className="inhand-premium-launcher-icon flex size-9 shrink-0 items-center justify-center rounded-full text-teal-800"
          aria-hidden
        >
          <LayoutGrid className="relative z-[1] size-[17px]" strokeWidth={2.25} />
        </span>
        <span className="max-w-[7.5rem] truncate text-left sm:max-w-[9rem]">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-700">
            Tools
          </span>
          <span className="block text-xs font-semibold leading-tight tracking-tight text-navy-900">
            {active?.label ?? "Salary"}
          </span>
        </span>
        {open ? (
          <ChevronDown
            className="size-4 shrink-0 text-teal-600/90"
            strokeWidth={2.25}
            aria-hidden
          />
        ) : (
          <ChevronUp
            className="size-4 shrink-0 text-teal-600/90"
            strokeWidth={2.25}
            aria-hidden
          />
        )}
      </button>
    </div>
  );
}
