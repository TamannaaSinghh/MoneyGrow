import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = { title: "Regulatory Disclosures" };

export default function DisclosuresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Regulatory · Disclosures"
        title={
          <>
            Regulatory Disclosures,{" "}
            <span className="italic font-light text-teal-700">in one place.</span>
          </>
        }
        intro="All SEBI-mandated disclosure documents for our PMS and AIF businesses, kept current."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/investment-offerings/pms#disclosures"
            className="group block bg-paper border border-ink/10 rounded-md p-10 lg:p-12 hover:border-teal-600 hover:shadow-soft transition relative overflow-hidden"
          >
            <p className="font-mono text-sm text-teal-600 tabular">/PMS</p>
            <h2 className="font-display text-3xl lg:text-4xl mt-3 tracking-tighter2 leading-tight">
              PMS Regulatory Disclosures
            </h2>
            <p className="mt-4 text-ink/70 text-base">
              Disclosure document, quarterly disclosure, investor charter, statement
              of complaints, code of conduct, and grievance redressal policy.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-base font-medium text-teal-600 group-hover:translate-x-1 transition-transform">
              View PMS disclosures →
            </span>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-teal-50 group-hover:bg-gold-100/60 transition pointer-events-none" />
          </Link>

          <Link
            href="/investment-offerings/aif#disclosures"
            className="group block bg-ink text-cream rounded-md p-10 lg:p-12 hover:bg-teal-800 transition relative overflow-hidden"
          >
            <p className="font-mono text-sm text-gold-600 tabular">/AIF</p>
            <h2 className="font-display text-3xl lg:text-4xl mt-3 tracking-tighter2 leading-tight">
              AIF Regulatory Disclosures
            </h2>
            <p className="mt-4 text-ink/70 text-base">
              Private placement memorandum, investor charter, statement of
              complaints, grievance redressal, compliance and risk policies.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-base font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              View AIF disclosures →
            </span>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gold-400/15 blur-2xl pointer-events-none" />
          </Link>
        </div>

        <p className="mt-12 text-sm text-ink/60 max-w-2xl leading-relaxed">
          Disclosure documents are kept up to date as per SEBI requirements. For
          investor grievances, please email{" "}
          <a className="text-teal-600 link-underline" href="mailto:sales@moneygrowindia.com">
            sales@moneygrowindia.com
          </a>{" "}
          or escalate through{" "}
          <a
            className="text-teal-600 link-underline"
            href="https://scores.gov.in"
            target="_blank"
            rel="noreferrer"
          >
            SCORES
          </a>
          .
        </p>
      </Section>
    </>
  );
}
