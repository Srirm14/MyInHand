import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

/** Minimal placeholders: three-tone grey sweep, quiet on neutral-bg */
export function ShimmerBlock({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("inhand-skeleton-shimmer rounded-xl", className)}
      {...props}
    />
  );
}

/** Login / signup Suspense fallbacks — mirrors AuthPageShell form rhythm */
export function AuthFormSkeleton({ fields = 3 }: { fields?: number }) {
  return (
    <>
      <ShimmerBlock className="mx-auto mb-2 h-8 w-40 max-w-full rounded-lg" />
      <ShimmerBlock className="mx-auto mb-8 h-4 w-full max-w-[280px] rounded-md" />
      <div className="space-y-5">
        {Array.from({ length: fields }).map((_, i) => (
          <div key={i} className="space-y-2">
            <ShimmerBlock className="h-3.5 w-16 rounded" />
            <ShimmerBlock className="h-10 w-full rounded-xl" />
          </div>
        ))}
        <ShimmerBlock className="h-11 w-full rounded-full" />
      </div>
    </>
  );
}

export function NavbarAuthSkeleton() {
  return <ShimmerBlock className="h-9 w-24 shrink-0 rounded-full" aria-hidden />;
}

export function NavbarSuspenseFallback() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-200/60 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <ShimmerBlock className="h-9 w-36 rounded-lg" />
        <div className="hidden gap-8 md:flex">
          <ShimmerBlock className="h-4 w-20 rounded" />
          <ShimmerBlock className="h-4 w-28 rounded" />
        </div>
        <NavbarAuthSkeleton />
      </div>
    </header>
  );
}

/** Profile page card + form blocks */
export function ProfilePageSkeleton() {
  return (
    <PageShell narrow className="py-8 md:py-10">
      <div className="mb-8 space-y-2">
        <ShimmerBlock className="h-9 w-40 rounded-lg" />
        <ShimmerBlock className="h-4 w-full max-w-md rounded" />
      </div>
      <div className="space-y-8 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm md:p-8">
        <div className="space-y-2">
          <ShimmerBlock className="h-3 w-12 rounded" />
          <ShimmerBlock className="h-5 w-24 rounded" />
          <ShimmerBlock className="h-3 w-full max-w-sm rounded" />
        </div>
        <div className="space-y-2">
          <ShimmerBlock className="h-3 w-14 rounded" />
          <ShimmerBlock className="h-5 w-48 rounded" />
        </div>
        <div className="space-y-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <ShimmerBlock className="h-3.5 w-20 rounded" />
              <ShimmerBlock className="h-10 w-full rounded-xl" />
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <ShimmerBlock className="h-10 w-32 rounded-full" />
            <ShimmerBlock className="h-10 w-28 rounded-full" />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

/** Salary breakdown route — mirrors back link, hero card, stats grid, table strip */
export function SalaryBreakdownSkeleton() {
  return (
    <PageShell className="py-8 md:py-10">
      <div className="mb-4">
        <ShimmerBlock className="h-8 w-44 rounded-lg" />
      </div>
      <div className="mb-5 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <ShimmerBlock className="size-10 shrink-0 rounded-xl" />
            <div className="min-w-0 flex-1 space-y-2">
              <ShimmerBlock className="h-4 w-40 rounded" />
              <ShimmerBlock className="h-3 w-full max-w-md rounded" />
            </div>
          </div>
          <ShimmerBlock className="h-9 w-28 shrink-0 rounded-full self-end sm:self-center" />
        </div>
      </div>
      <ShimmerBlock className="mb-6 h-14 w-full rounded-xl" />
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="max-w-2xl flex-1 space-y-2">
          <ShimmerBlock className="h-10 w-56 rounded-lg" />
          <ShimmerBlock className="h-4 w-full max-w-lg rounded" />
          <ShimmerBlock className="h-4 w-4/5 max-w-lg rounded" />
        </div>
        <ShimmerBlock className="h-28 w-full max-w-sm shrink-0 rounded-xl lg:mt-1" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm"
          >
            <ShimmerBlock className="mb-3 h-3 w-24 rounded" />
            <ShimmerBlock className="h-8 w-36 rounded-md" />
            <ShimmerBlock className="mt-2 h-3 w-28 rounded" />
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-navy-200/50 bg-white px-5 py-4 shadow-sm">
        <ShimmerBlock className="mb-4 h-3 w-28 rounded" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <ShimmerBlock key={i} className="h-16 rounded-lg" />
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-3 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm">
        <ShimmerBlock className="h-4 w-48 rounded" />
        {[1, 2, 3, 4, 5].map((i) => (
          <ShimmerBlock key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    </PageShell>
  );
}

/** Offer comparison — sticky header strip + two offer panels */
export function OfferComparisonSkeleton() {
  return (
    <PageShell className="py-0 pt-2 pb-28 md:pt-3 md:pb-10">
      <div className="rounded-3xl border border-navy-200/60 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_50px_-24px_rgba(15,23,42,0.1)]">
        <div className="rounded-t-3xl border-b border-navy-100/90 px-4 py-2.5 md:px-6 md:py-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1 space-y-2">
              <ShimmerBlock className="h-3 w-40 rounded" />
              <ShimmerBlock className="h-6 w-56 rounded-md" />
              <ShimmerBlock className="h-4 w-48 rounded" />
              <ShimmerBlock className="hidden h-3 w-full max-w-xl rounded sm:block" />
            </div>
            <div className="flex flex-wrap gap-2">
              <ShimmerBlock className="h-11 w-36 rounded-full" />
              <ShimmerBlock className="h-11 w-28 rounded-full" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-navy-200/50 bg-navy-50/20 p-4"
            >
              <ShimmerBlock className="mb-4 h-5 w-32 rounded" />
              <div className="space-y-3">
                <ShimmerBlock className="h-10 w-full rounded-xl" />
                <ShimmerBlock className="h-10 w-full rounded-xl" />
                <ShimmerBlock className="h-24 w-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

/** Rows only — under real page header */
export function SalaryHistoryRowsSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div
      className="mt-6 w-full overflow-hidden rounded-2xl border border-navy-200/70 bg-white shadow-sm"
      aria-busy
      aria-label="Loading saved salaries"
    >
      <div className="hidden border-b border-navy-100 bg-navy-50/60 px-4 py-2.5 md:block">
        <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_minmax(0,1fr)_11.5rem] items-center gap-5">
          <span />
          <ShimmerBlock className="h-3 w-20 rounded" />
          <ShimmerBlock className="h-3 w-32 rounded" />
          <ShimmerBlock className="h-3 w-16 justify-self-end rounded" />
        </div>
      </div>
      <ul className="divide-y divide-navy-100">
        {Array.from({ length: rows }).map((_, i) => (
          <li key={i} className="px-4 py-3 md:py-2.5">
            <div className="flex items-center gap-3 md:grid md:grid-cols-[2.75rem_minmax(0,1fr)_minmax(0,1fr)_11.5rem] md:items-center md:gap-5">
              <ShimmerBlock className="size-4 shrink-0 rounded md:mx-auto" />
              <div className="min-w-0 flex-1 space-y-2 md:space-y-1.5">
                <ShimmerBlock className="h-4 w-32 rounded" />
                <ShimmerBlock className="h-3 w-48 rounded md:hidden" />
              </div>
              <ShimmerBlock className="hidden h-3 w-40 rounded md:block" />
              <div className="flex justify-end gap-2 md:justify-end">
                <ShimmerBlock className="size-9 rounded-lg" />
                <ShimmerBlock className="h-9 w-[7.5rem] rounded-full" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Saved salaries list */
export function SalaryHistoryListSkeleton() {
  return (
    <PageShell className="py-8 md:py-10">
      <ShimmerBlock className="mb-6 h-8 w-36 rounded-lg" />
      <div className="max-w-2xl space-y-2">
        <ShimmerBlock className="h-10 w-64 rounded-lg" />
        <ShimmerBlock className="h-4 w-full max-w-lg rounded" />
      </div>
      <ShimmerBlock className="mt-8 h-10 w-full max-w-xs rounded-full" />
      <ul className="mt-8 max-w-xl space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>
            <div className="flex items-center gap-3 rounded-xl border border-navy-200/50 bg-white p-4 shadow-sm">
              <div className="min-w-0 flex-1 space-y-2">
                <ShimmerBlock className="h-4 w-[72%] max-w-xs rounded" />
                <ShimmerBlock className="h-3 w-[88%] max-w-sm rounded" />
              </div>
              <ShimmerBlock className="size-9 shrink-0 rounded-lg" />
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

/** Recent activity sheet rows — matches HistoryRow height */
export function RecentHistoryRowsSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2 px-1 py-2" aria-busy aria-label="Loading recent activity">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex items-stretch gap-1 rounded-xl border border-transparent pr-1"
        >
          <div className="min-w-0 flex-1 space-y-2 rounded-xl px-3 py-3">
            <div className="flex justify-between gap-2">
              <ShimmerBlock className="h-4 flex-1 rounded" />
              <ShimmerBlock className="h-3 w-14 shrink-0 rounded" />
            </div>
            <ShimmerBlock className="h-3 w-full max-w-[280px] rounded" />
            <ShimmerBlock className="h-3 w-24 rounded" />
          </div>
          <ShimmerBlock className="size-10 shrink-0 self-center rounded-lg" />
        </div>
      ))}
    </div>
  );
}

type PlannerSplitLayout = "monthly" | "emi";

/**
 * Premium planners (EMI, monthly plan): main column + sticky sidebar while
 * `useResolvedMonthlyInHand().isRestoringSalaryContext` is true.
 */
export function PremiumPlannerSalaryContextSkeleton({
  className,
  layout = "monthly",
}: {
  className?: string;
  /** EMI uses a 380px stats column to match the live page grid. */
  layout?: PlannerSplitLayout;
}) {
  const grid =
    layout === "emi"
      ? "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-12"
      : "mt-10 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-8";

  return (
    <div
      className={cn(grid, className)}
      aria-busy
      aria-label="Loading salary context"
    >
      <div className="space-y-6">
        <ShimmerBlock className="h-3 w-28 rounded-md" />
        <ShimmerBlock className="h-4 w-full max-w-xl rounded-md" />
        <ShimmerBlock className="h-72 w-full rounded-2xl" />
        <ShimmerBlock className="h-52 w-full rounded-2xl" />
      </div>
      <aside className="space-y-5 lg:sticky lg:top-24">
        <ShimmerBlock className="h-48 w-full rounded-2xl" />
        <ShimmerBlock className="h-56 w-full rounded-2xl" />
      </aside>
    </div>
  );
}

/** Wealth forecast: two equal columns below header. */
export function WealthForecastBodySkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("mt-10 grid gap-10 lg:grid-cols-2", className)}
      aria-busy
      aria-label="Loading salary context"
    >
      <ShimmerBlock className="h-80 w-full rounded-2xl" />
      <ShimmerBlock className="h-80 w-full rounded-2xl" />
    </div>
  );
}

/** Wealth forecast: title row + horizon chips + body — avoids flashing manual in-hand UI. */
export function WealthForecastPlannerSkeleton() {
  return (
    <div
      className="mt-1 space-y-8"
      aria-busy
      aria-label="Loading salary context"
    >
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-2.5">
          <ShimmerBlock className="h-9 w-52 rounded-lg" />
          <ShimmerBlock className="h-4 w-full rounded-md" />
          <ShimmerBlock className="h-4 w-[92%] rounded-md" />
        </div>
        <div className="flex shrink-0 gap-2 lg:pt-1">
          <ShimmerBlock className="h-10 w-14 rounded-full" />
          <ShimmerBlock className="h-10 w-14 rounded-full" />
          <ShimmerBlock className="h-10 w-14 rounded-full" />
        </div>
      </div>
      <WealthForecastBodySkeleton className="mt-0" />
    </div>
  );
}

/** Salary hub recents — two columns */
export function SalaryRecentsPanelsSkeleton() {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      {[1, 2].map((col) => (
        <div key={col}>
          <div className="mb-4 flex items-center gap-2">
            <ShimmerBlock className="size-4 rounded" />
            <ShimmerBlock className="h-4 w-40 rounded" />
          </div>
          <ul className="space-y-2">
            {[1, 2, 3].map((row) => (
              <li key={row}>
                <ShimmerBlock className="h-[4.5rem] w-full rounded-xl" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
