import Link from "next/link";
import { Shield, Award, Lock } from "lucide-react";
import { premiumToolHref } from "@/lib/config/access-mode";

const productLinks = [
  { href: "/salary", label: "Calculator" },
  { href: premiumToolHref("forecast"), label: "Forecast" },
  { href: premiumToolHref("offers"), label: "Compare" },
];

const legalLinks = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Security" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <span className="font-display text-lg font-bold text-teal-600">
              The Fluid Ledger
            </span>
            <p className="mt-2 text-sm text-navy-500 leading-relaxed">
              The only salary management suite engineered for Indian
              professionals. Secure, transparent, and precise.
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
            &copy; {new Date().getFullYear()} The Fluid Ledger. All rights
            reserved. Precision financial tech from Bangalore.
          </p>
        </div>
      </div>
    </footer>
  );
}
