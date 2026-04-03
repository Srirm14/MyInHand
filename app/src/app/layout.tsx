import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthSync } from "@/components/providers/auth-sync";
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
          <AuthSync />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
