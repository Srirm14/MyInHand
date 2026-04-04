import { PageShell } from "@/components/layout/page-shell";
import { Skeleton } from "@/components/ui/skeleton";

/** Login / signup Suspense fallbacks — mirrors AuthPageShell form rhythm */
export function AuthFormSkeleton({ fields = 3 }: { fields?: number }) {
  return (
    <>
      <Skeleton className="mx-auto mb-2 h-8 w-40 max-w-full rounded-lg" />
      <Skeleton className="mx-auto mb-8 h-4 w-full max-w-[280px] rounded-md" />
      <div className="space-y-5">
        {Array.from({ length: fields }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-3.5 w-16 rounded" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        ))}
        <Skeleton className="h-11 w-full rounded-full" />
      </div>
    </>
  );
}

export function NavbarAuthSkeleton() {
  return <Skeleton className="h-9 w-24 shrink-0 rounded-full" aria-hidden />;
}

export function NavbarSuspenseFallback() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-200/60 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Skeleton className="h-9 w-36 rounded-lg" />
        <div className="hidden gap-8 md:flex">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-28 rounded" />
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
        <Skeleton className="h-9 w-40 rounded-lg" />
        <Skeleton className="h-4 w-full max-w-md rounded" />
      </div>
      <div className="space-y-8 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm md:p-8">
        <div className="space-y-2">
          <Skeleton className="h-3 w-12 rounded" />
          <Skeleton className="h-5 w-24 rounded" />
          <Skeleton className="h-3 w-full max-w-sm rounded" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-14 rounded" />
          <Skeleton className="h-5 w-48 rounded" />
        </div>
        <div className="space-y-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-3.5 w-20 rounded" />
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-28 rounded-full" />
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
        <Skeleton className="h-8 w-44 rounded-lg" />
      </div>
      <div className="mb-5 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Skeleton className="size-10 shrink-0 rounded-xl" />
            <div className="min-w-0 flex-1 space-y-2">
              <Skeleton className="h-4 w-40 rounded" />
              <Skeleton className="h-3 w-full max-w-md rounded" />
            </div>
          </div>
          <Skeleton className="h-9 w-28 shrink-0 rounded-full self-end sm:self-center" />
        </div>
      </div>
      <Skeleton className="mb-6 h-14 w-full rounded-xl" />
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="max-w-2xl flex-1 space-y-2">
          <Skeleton className="h-10 w-56 rounded-lg" />
          <Skeleton className="h-4 w-full max-w-lg rounded" />
          <Skeleton className="h-4 w-4/5 max-w-lg rounded" />
        </div>
        <Skeleton className="h-28 w-full max-w-sm shrink-0 rounded-xl lg:mt-1" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm"
          >
            <Skeleton className="mb-3 h-3 w-24 rounded" />
            <Skeleton className="h-8 w-36 rounded-md" />
            <Skeleton className="mt-2 h-3 w-28 rounded" />
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-navy-200/50 bg-white px-5 py-4 shadow-sm">
        <Skeleton className="mb-4 h-3 w-28 rounded" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-16 rounded-lg" />
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-3 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm">
        <Skeleton className="h-4 w-48 rounded" />
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    </PageShell>
  );
}

/** Offer comparison — sticky header strip + two offer panels */
export function OfferComparisonSkeleton() {
  return (
    <PageShell className="py-6 pb-28 md:py-10 md:pb-10">
      <div className="overflow-hidden rounded-3xl border border-navy-200/60 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_50px_-24px_rgba(15,23,42,0.1)]">
        <div className="border-b border-navy-100/90 px-4 py-4 md:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1 space-y-2">
              <Skeleton className="h-3 w-40 rounded" />
              <Skeleton className="h-6 w-56 rounded-md" />
              <Skeleton className="h-4 w-48 rounded" />
              <Skeleton className="hidden h-3 w-full max-w-xl rounded sm:block" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-11 w-36 rounded-full" />
              <Skeleton className="h-11 w-28 rounded-full" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-navy-200/50 bg-navy-50/20 p-4"
            >
              <Skeleton className="mb-4 h-5 w-32 rounded" />
              <div className="space-y-3">
                <Skeleton className="h-10 w-full rounded-xl" />
                <Skeleton className="h-10 w-full rounded-xl" />
                <Skeleton className="h-24 w-full rounded-xl" />
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
    <ul className="mt-8 max-w-xl space-y-3" aria-busy aria-label="Loading saved salaries">
      {Array.from({ length: rows }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-[5.5rem] w-full rounded-xl" />
        </li>
      ))}
    </ul>
  );
}

/** Saved salaries list */
export function SalaryHistoryListSkeleton() {
  return (
    <PageShell className="py-8 md:py-10">
      <Skeleton className="mb-6 h-8 w-36 rounded-lg" />
      <div className="max-w-2xl space-y-2">
        <Skeleton className="h-10 w-64 rounded-lg" />
        <Skeleton className="h-4 w-full max-w-lg rounded" />
      </div>
      <Skeleton className="mt-8 h-10 w-full max-w-xs rounded-full" />
      <ul className="mt-8 max-w-xl space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>
            <div className="flex items-center gap-3 rounded-xl border border-navy-200/50 bg-white p-4 shadow-sm">
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-[72%] max-w-xs rounded" />
                <Skeleton className="h-3 w-[88%] max-w-sm rounded" />
              </div>
              <Skeleton className="size-9 shrink-0 rounded-lg" />
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
              <Skeleton className="h-4 flex-1 rounded" />
              <Skeleton className="h-3 w-14 shrink-0 rounded" />
            </div>
            <Skeleton className="h-3 w-full max-w-[280px] rounded" />
            <Skeleton className="h-3 w-24 rounded" />
          </div>
          <Skeleton className="size-10 shrink-0 self-center rounded-lg" />
        </div>
      ))}
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
            <Skeleton className="size-4 rounded" />
            <Skeleton className="h-4 w-40 rounded" />
          </div>
          <ul className="space-y-2">
            {[1, 2, 3].map((row) => (
              <li key={row}>
                <Skeleton className="h-[4.5rem] w-full rounded-xl" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
