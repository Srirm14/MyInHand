import Link from "next/link";
import type { ReactNode } from "react";
import { InhandLogoMark } from "@/components/layout/inhand-logo-mark";

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
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <Link
          href="/"
          aria-label="InHand home"
          className="flex flex-col items-center gap-2 rounded-lg outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
        >
          <InhandLogoMark height={40} className="h-10 w-auto" aria-hidden />
          <span className="font-display text-xl font-bold text-navy-900">
            InHand
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-500">
            Know your real take-home
          </span>
        </Link>
      </div>
      <div className="w-full max-w-[400px] rounded-2xl border border-navy-200/60 bg-white p-8 shadow-sm">
        {children}
      </div>
      {footer && <div className="mt-8 text-center text-sm text-navy-500">{footer}</div>}
    </div>
  );
}
