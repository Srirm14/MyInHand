import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";

export default function PrivacyRoute() {
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
        title="Privacy Policy"
        subtitle="Simple, India-first privacy notice for InHand. Last updated: April 6, 2026."
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
          <h2 className="text-label text-navy-400">Introduction</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            InHand is a salary estimation and decision-support web app for Indian employees. It helps you estimate in-hand salary and
            understand your salary structure through high-level calculations and planning views. InHand is not investment advice, loan
            broking, tax filing software, or payroll processing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>
              <span className="font-semibold">Account data</span>: email and authentication (via Supabase Auth).
            </li>
            <li>
              <span className="font-semibold">Profile data</span>: display name, company, role (optional).
            </li>
            <li>
              <span className="font-semibold">Salary inputs</span>: salary structure/CTC components, assumptions, offer comparison
              inputs you enter.
            </li>
            <li>
              <span className="font-semibold">Uploaded documents (optional)</span>: salary/offer PDFs you select for in-browser
              extraction/review.
            </li>
            <li>
              <span className="font-semibold">Session continuity</span>: first-party cookies used to restore your last active
              workspace (e.g. <code className="rounded bg-navy-50 px-1.5 py-0.5 text-[12px]">inhand_last_salary_session</code>).
            </li>
            <li>
              <span className="font-semibold">Billing identifiers (Premium)</span>: Razorpay subscription/payment identifiers and
              status needed to enable Premium.
            </li>
          </ul>

          <div className="rounded-xl border border-navy-200/60 bg-navy-50/40 px-4 py-3 text-sm text-navy-800">
            <p className="font-semibold">DPDPA consent notice</p>
            <p className="mt-1 text-xs leading-relaxed text-navy-600">
              If you choose to upload/select a document or enter salary data, you consent to InHand processing that data solely for
              salary estimation, comparisons, and related decision-support features. You may withdraw consent by deleting your account
              and/or requesting erasure.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Provide salary estimations, breakdowns, comparisons, and planners.</li>
            <li>Account management (sign-in, profile) and Premium entitlement.</li>
            <li>Security, fraud prevention, and service reliability.</li>
          </ul>
          <p className="text-xs text-navy-600">
            We do not sell your personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Razorpay Payments</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            We use Razorpay for secure payments. When you pay:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Razorpay collects card/UPI details directly.</li>
            <li>We only receive payment confirmation (amount, status) and identifiers.</li>
            <li>You consent to sharing necessary payment data with Razorpay for processing.</li>
            <li>
              Razorpay’s privacy policy applies:{" "}
              <a className="font-semibold" href="https://razorpay.com/privacy" target="_blank" rel="noreferrer noopener">
                razorpay.com/privacy
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Your Rights (DPDPA)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Access: request a summary/copy of personal data we process about you.</li>
            <li>Correction: update inaccurate profile information.</li>
            <li>Erasure: request deletion/erasure of your personal data (subject to lawful billing retention).</li>
            <li>Withdraw consent: delete account and/or request erasure.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Data Security</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            We use HTTPS for data in transit and apply access controls and least-privilege practices. Payment instruments are handled
            by Razorpay and are not stored by InHand.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Grievance Contact</h2>
          <div className="rounded-xl border border-teal-200/70 bg-teal-50/40 px-4 py-3">
            <p className="text-sm font-semibold text-teal-950">
              sriram.venkatachalam@vyzifytech.com
            </p>
            <p className="mt-1 text-xs leading-relaxed text-teal-900/80">
              Disputes, complaints, and DPDPA data requests. We aim to respond within <span className="font-semibold">24–48 hours</span>.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Changes to Policy</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            We may update this policy from time to time. We will update the “Last updated” date and may provide notice in-product.
          </p>
        </section>
      </div>
    </PageShell>
  );
}

