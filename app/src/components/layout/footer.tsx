"use client";

import Link from "next/link";
import { Award, Lock, Receipt, Scale, Shield, ShieldCheck } from "lucide-react";
import { InhandLogoMark } from "@/components/layout/inhand-logo-mark";
import { useTieredPremiumLinks } from "@/lib/hooks/use-tiered-premium-links";
import { cn } from "@/lib/utils";

const legalLinks = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Security" },
];

export function Footer() {
  const { toolHref } = useTieredPremiumLinks();

  const productLinks = [
    { href: "/salary", label: "Calculator" },
    { href: "/#pricing", label: "Pricing" },
    { href: toolHref("forecast"), label: "Forecast" },
    { href: toolHref("offers"), label: "Compare" },
  ];

  return (
    <footer className="border-t border-navy-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <InhandLogoMark height={32} className="h-8 w-auto" aria-hidden />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight text-navy-900">
                  InHand
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-navy-500">
                  Know your real take-home
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-navy-500 leading-relaxed">
              Salary intelligence for Indian employees—in-hand clarity,
              breakups, tax context, and decisions without the fluff.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-label text-navy-400 mb-3">Product</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-500 hover:text-navy-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-label text-navy-400 mb-3">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-500 hover:text-navy-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product highlights — accurate to InHand; icon chips align with salary KPI styling */}
        <div className="mt-12 border-t border-navy-200/60 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">
            Why InHand
          </p>
          <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
            Real take-home clarity—not a generic CTC guess
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-600">
            Every figure below matches what the app actually helps you do: line-level
            salary math, regime choice, and privacy without bank linking.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <div className="h-full rounded-2xl border border-navy-200/50 bg-gradient-to-b from-white to-teal-50/25 p-5 shadow-sm">
                <div
                  className={cn(
                    "mb-4 inline-flex rounded-lg p-2.5 ring-1 ring-inset",
                    "bg-teal-100/85 text-teal-700 ring-teal-200/60"
                  )}
                  aria-hidden
                >
                  <Receipt className="size-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold leading-snug text-navy-900">
                  Full pay breakup
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  PF, deductions, professional tax, and income-tax estimates on your
                  CTC—so you see estimated monthly in-hand, not just the package
                  headline.
                </p>
              </div>
            </li>
            <li>
              <div className="h-full rounded-2xl border border-navy-200/50 bg-gradient-to-b from-white to-teal-50/20 p-5 shadow-sm">
                <div
                  className={cn(
                    "mb-4 inline-flex rounded-lg p-2.5 ring-1 ring-inset",
                    "bg-teal-100/85 text-teal-700 ring-teal-200/60"
                  )}
                  aria-hidden
                >
                  <Scale className="size-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold leading-snug text-navy-900">
                  Old vs new regime
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Model Old and New tax treatment in the same flow. Handy for
                  comparing which structure you’re using—not a full ITR filing
                  wizard.
                </p>
              </div>
            </li>
            <li>
              <div className="h-full rounded-2xl border border-navy-200/50 bg-gradient-to-b from-white to-navy-50/40 p-5 shadow-sm">
                <div
                  className={cn(
                    "mb-4 inline-flex rounded-lg p-2.5 ring-1 ring-inset",
                    "bg-navy-100/80 text-navy-600 ring-navy-200/55"
                  )}
                  aria-hidden
                >
                  <ShieldCheck className="size-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold leading-snug text-navy-900">
                  Private by design
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Enter CTC and assumptions yourself—no bank linking or payroll
                  import. On premium, you can keep a saved list on this device to
                  jump between scenarios without retyping everything.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-navy-200/60 pt-6">
          <div className="flex items-center gap-6 text-xs text-navy-400">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5" /> 256-BIT SSL
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="size-3.5" /> ISO CERTIFIED
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="size-3.5" /> GDPR COMPLIANT
            </span>
          </div>
          <p className="text-xs text-navy-400">
            &copy; {new Date().getFullYear()} InHand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
