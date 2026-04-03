import Link from "next/link";
import type { ReactNode } from "react";

/** Centered auth card on neutral background — keeps marketing chrome out of the focus area. */
export function AuthPageShell({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
      <div className="mb-8 text-center">
        <Link
          href="/"
          className="font-display text-xl font-bold text-teal-600 hover:text-teal-700"
        >
          The Fluid Ledger
        </Link>
      </div>
      <div className="w-full max-w-[400px] rounded-2xl border border-navy-200/60 bg-white p-8 shadow-sm">
        {children}
      </div>
      {footer && <div className="mt-8 text-center text-sm text-navy-500">{footer}</div>}
    </div>
  );
}
