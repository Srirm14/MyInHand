import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";

export default function TermsRoute() {
  return (
    <PageShell narrow className="py-8 md:py-10">
      <div className="mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
        >
          ← Back
        </Link>
      </div>

      <SectionHeader
        title="Terms of Use"
        subtitle="How InHand works, what it is (and isn’t), and Premium subscription terms. Last updated: April 6, 2026."
      />

      <div className="rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-8">
        <div className="rounded-xl border border-amber-200/70 bg-amber-50/40 px-4 py-3 text-sm text-amber-950">
          <p className="font-semibold">Accuracy disclaimer (mandatory)</p>
          <p className="mt-1 text-xs leading-relaxed text-amber-900/90">
            All calculations/estimations are approximate only and may not be accurate. Actual in-hand depends on employer payroll
            practices, tax filings, declarations, and other factors. Pro users can adjust/edit parameters to customize estimates.
            Outputs are high-level estimations for decision-support only. You must verify outputs with your employer or tax advisor.
            We are not liable for decisions or financial losses based on estimates.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Service description</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            InHand is a salary estimation and decision-support tool. It is not investment advice, loan broking, tax filing software, or
            payroll processing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Your responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Provide accurate inputs to the best of your knowledge.</li>
            <li>Verify outputs with your employer/payroll team and/or a qualified tax advisor before acting.</li>
            <li>Keep your account secure and do not share credentials.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Premium subscription (Razorpay)</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            Premium is a recurring subscription for individual users. Payments are processed by Razorpay. Razorpay may require mandate
            authorization for UPI AutoPay (where supported) and may auto-renew per plan terms.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Premium access is enabled after successful payment verification.</li>
            <li>You can cancel renewal from your account billing page.</li>
            <li>Refunds, if offered, follow applicable law and payment partner constraints.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Prohibited use</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Do not attempt to bypass Premium gating or manipulate subscription state.</li>
            <li>Do not abuse, overload, or interfere with the service.</li>
            <li>Do not use the service for unlawful purposes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Limitation of liability</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            To the maximum extent permitted by law, InHand is provided “as is” and “as available”. We are not responsible for outcomes
            from decisions based on estimated outputs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Contact</h2>
          <p className="text-sm text-navy-700">
            Support & grievances:{" "}
            <a className="font-semibold text-teal-700 hover:underline" href="mailto:sriram.venkatachalam@vyzifytech.com">
              sriram.venkatachalam@vyzifytech.com
            </a>
          </p>
        </section>
      </div>
    </PageShell>
  );
}

