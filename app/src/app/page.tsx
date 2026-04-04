import type { Metadata } from "next";
import { MarketingLanding } from "@/components/features/landing/marketing-landing";

export const metadata: Metadata = {
  title: "InHand — Know your real in-hand salary | Indian salary calculator",
  description:
    "Calculate your exact monthly take-home from CTC. Free Indian salary calculator—PF, TDS, old vs new tax regime, offer comparison, and wealth forecasting. No sign-up required.",
  keywords: [
    "salary calculator india",
    "in-hand salary calculator",
    "ctc to in-hand calculator",
    "take home salary india",
    "new vs old tax regime calculator",
    "pf tds salary calculator",
    "indian salary breakup",
    "offer comparison salary india",
    "ctc calculator india",
    "monthly in-hand salary",
  ],
  openGraph: {
    title: "InHand — Know your real in-hand salary",
    description:
      "From CTC to take-home in seconds. Free Indian salary calculator with full deduction breakup, PF, TDS, and tax regime comparison.",
    type: "website",
    locale: "en_IN",
    siteName: "InHand",
  },
  twitter: {
    card: "summary_large_image",
    title: "InHand — Know your real in-hand salary",
    description:
      "Your CTC in. Your actual take-home out. India's cleanest salary calculator—free, no sign-up needed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "InHand",
  description:
    "Indian salary calculator that converts CTC to exact in-hand pay with full deduction breakup, PF, TDS, and tax regime comparison.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      name: "Free plan",
      description: "Salary calculator with full breakup, PF, TDS, and tax regime comparison",
    },
    {
      "@type": "Offer",
      price: "199",
      priceCurrency: "INR",
      billingIncrement: "P1M",
      name: "Premium plan",
      description: "Offer comparison, wealth forecasting, EMI analyzer",
    },
  ],
  featureList: [
    "CTC to in-hand salary calculation",
    "PF and TDS automatic breakdown",
    "Old vs new tax regime comparison",
    "Salary offer comparison tool",
    "Long-term wealth forecasting",
    "EMI affordability stress-test",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Indian salaried professionals",
    geographicArea: { "@type": "Country", name: "India" },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingLanding />
    </>
  );
}
