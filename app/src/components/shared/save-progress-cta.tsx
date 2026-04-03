"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Shown after the free salary / monthly plan flow for anonymous users — nudges account (History is premium-only). */
export function SaveProgressCta({
  returnTo,
  className,
}: {
  returnTo: string;
  className?: string;
}) {
  const user = useAuthStore((s) => s.user);
  if (user) return null;

  const from = encodeURIComponent(returnTo);

  return (
    <div
      className={cn(
        "rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/90 to-white p-5 shadow-sm",
        className
      )}
    >
      <p className="text-sm font-semibold text-navy-800">
        Save your activity and continue anytime
      </p>
      <p className="mt-1.5 text-xs text-navy-600 leading-relaxed max-w-xl">
        Create a free account to keep your profile and pick up this workspace
        on your next visit. Recent activity history is available on Premium.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={`/login?from=${from}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5"
          )}
        >
          Log in
        </Link>
        <Link
          href={`/signup?from=${from}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full border-navy-200 font-semibold px-5"
          )}
        >
          Sign up free
        </Link>
      </div>
    </div>
  );
}
