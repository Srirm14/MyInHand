import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AuthSync } from "@/components/providers/auth-sync";
import { QueryProvider } from "@/components/providers/query-provider";
import { PremiumPlansModalHost } from "@/components/providers/premium-plans-modal-host";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InHand — Salary intelligence for Indian employees",
  description:
    "From CTC to in-hand clarity: breakups, deductions, tax impact, lifestyle affordability, offer comparison, and wealth scenarios—built for Indian payroll.",
  icons: {
    icon: [{ url: "/brand/inhand-logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/inhand-logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-bg">
        <TooltipProvider>
          <QueryProvider>
            <Toaster />
            <AuthSync />
            <Navbar />
            <Suspense fallback={null}>
              <PremiumPlansModalHost />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Footer />
          </QueryProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
