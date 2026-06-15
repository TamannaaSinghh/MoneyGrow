import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = { title: "PMS Regulatory Disclosures" };

type Doc = { title: string; file: string; label: string };

const docs: Doc[] = [
  { title: "PMS Disclosure Document", file: "PMS Disclosure Doc.pdf", label: "PDF · 0.9 MB" },
  { title: "PMS Investor Charter", file: "PMS-Investor-Charter.pdf", label: "PDF · 177 KB" },
  {
    title: "PMS Investor Education (Prevention of Anti-Money Laundering)",
    file: "PMS-Investor-Education-PMLA.pdf",
    label: "PDF · 146 KB",
  },
  { title: "PMS Fee Calculation Tool", file: "Fee-Illustration-Tool.xlsx", label: "XLSX · 95 KB" },
  {
    title: "PMS Grievance Redressal Policy",
    file: "PMS-Investor-Grievance-Redressal.pdf",
    label: "PDF · 147 KB",
  },
  {
    title: "PMS Investor Complaints Table",
    file: "2026-05-31-PMS-SEBI-Complaints.pdf",
    label: "PDF · 126 KB",
  },
  {
    title: "SEBI Master Circular for Online Resolution of Disputes",
    file: "SEBI-Updated-Master-Circular-on-Online-Dispute-Resolution.pdf",
    label: "PDF · 539 KB",
  },
];

export default function PmsDisclosuresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Regulatory · PMS"
        title={
          <>
            PMS Regulatory{" "}
            <span className="italic font-light text-teal-700">Disclosures.</span>
          </>
        }
        intro="All SEBI-mandated disclosure documents for our Portfolio Management Service business, kept current."
      />

      <Section>
        <div className="border border-ink/10 rounded-md overflow-hidden bg-paper">
          {docs.map((d) => {
            const isPdf = d.file.toLowerCase().endsWith(".pdf");
            return (
              <a
                key={d.title}
                href={`/${encodeURIComponent(d.file)}`}
                {...(isPdf
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : { download: d.file })}
                className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-ink/5 last:border-0 hover:bg-mist/60 transition group items-center"
              >
                <span className="col-span-1 flex items-center">
                  <span className="inline-block w-2 h-2 rotate-45 bg-teal-600/70" aria-hidden />
                </span>
                <span className="col-span-7 lg:col-span-8 font-medium text-ink text-base">
                  {d.title}
                </span>
                <span className="col-span-3 lg:col-span-2 text-sm text-ink/60 tabular hidden lg:block">
                  {d.label}
                </span>
                <span className="col-span-1 text-right text-teal-600 group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </a>
            );
          })}
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
