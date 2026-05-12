import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = { title: "AIF Regulatory Disclosures" };

const docs = [
  "AIF Private Placement Memorandum",
  "Investor Charter — AIF",
  "Statement of Complaints — AIF",
  "Grievance Redressal Policy — AIF",
  "Annual Compliance Report — AIF",
  "Risk Management Policy",
];

export default function AifDisclosuresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Regulatory · AIF"
        title={
          <>
            AIF Regulatory{" "}
            <span className="italic font-light text-teal-700">Disclosures.</span>
          </>
        }
        intro="All SEBI-mandated disclosure documents for our Cat-III Alternative Investment Fund, kept current."
      />

      <Section>
        <div className="border border-ink/10 rounded-md overflow-hidden bg-paper">
          {docs.map((d, i) => (
            <a
              key={d}
              href="#"
              className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-ink/5 last:border-0 hover:bg-mist/60 transition group items-center"
            >
              <span className="col-span-1 font-mono text-sm text-ink/50 tabular">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-7 lg:col-span-8 font-medium text-ink text-base">
                {d}
              </span>
              <span className="col-span-3 lg:col-span-2 text-sm text-ink/60 tabular hidden lg:block">
                PDF · &lt; 2 MB
              </span>
              <span className="col-span-1 text-right text-teal-600 group-hover:translate-x-1 transition-transform">
                ↓
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/60 max-w-2xl leading-relaxed">
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
