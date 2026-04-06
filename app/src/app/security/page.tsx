import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";

export default function SecurityRoute() {
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
        title="Security"
        subtitle="How we protect accounts, saved workspaces, and Premium billing metadata. Last updated: April 6, 2026."
      />

      <div className="rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-8">
        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Encryption</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            We use HTTPS to protect data in transit between your browser and our servers and vendors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Authentication & access control</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-navy-700">
            <li>Authentication is handled via Supabase Auth.</li>
            <li>Database access is protected with Row Level Security (RLS) so users can access only their own rows.</li>
            <li>Server-only secrets are kept on the server; the client uses a public anon key scoped to the project.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Payment security (Razorpay)</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            Payments are processed by Razorpay. We do not store card/UPI credentials. We verify Razorpay signatures server-side before
            enabling Premium access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-label text-navy-400">Vulnerability disclosure</h2>
          <p className="text-sm leading-relaxed text-navy-700">
            If you believe you’ve found a security issue, please email{" "}
            <a className="font-semibold text-teal-700 hover:underline" href="mailto:sriram.venkatachalam@vyzifytech.com">
              sriram.venkatachalam@vyzifytech.com
            </a>{" "}
            with details. Please avoid public disclosure until we have a reasonable chance to investigate and fix.
          </p>
        </section>
      </div>
    </PageShell>
  );
}

