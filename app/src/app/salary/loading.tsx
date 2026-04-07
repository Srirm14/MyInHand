import { PageShell } from "@/components/layout/page-shell";

export default function SalaryLoading() {
  // A calm placeholder to prevent white flashes during route transitions.
  return (
    <PageShell className="py-8 md:py-12">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-48 rounded-lg bg-navy-100" />
        <div className="h-4 w-[28rem] max-w-full rounded bg-navy-100" />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(280px,420px)]">
          <div className="h-72 rounded-2xl bg-white ring-1 ring-navy-200/60" />
          <div className="h-72 rounded-2xl bg-white ring-1 ring-navy-200/60" />
        </div>
      </div>
    </PageShell>
  );
}

