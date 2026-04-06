import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AuthErrorAlert({
  message,
  className,
}: {
  readonly message: string;
  readonly className?: string;
}) {
  return (
    <p
      role="alert"
      className={cn(
        "text-sm text-danger-600 text-center bg-danger-50 rounded-lg px-3 py-2",
        className
      )}
    >
      {message}
    </p>
  );
}

export function AuthSuccessPanel({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-teal-100 bg-teal-50/80 px-4 py-4 text-sm text-navy-800 text-center leading-relaxed",
        className
      )}
    >
      {children}
    </div>
  );
}
