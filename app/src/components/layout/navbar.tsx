"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/salary", label: "Salary" },
  { href: "/premium/offer-comparison", label: "Offers" },
  { href: "/premium/wealth-forecast", label: "Forecast" },
  { href: "/premium/emi-analyzer", label: "EMI" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-navy-200/60 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-teal-600">
            The Fluid Ledger
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600"
                    : "text-navy-500 hover:text-navy-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-teal-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-700"
          >
            Premium
          </Button>
          <button className="p-2 text-navy-400 hover:text-navy-600 transition-colors">
            <Bell className="size-5" />
          </button>
          <button className="p-2 text-navy-400 hover:text-navy-600 transition-colors">
            <User className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
