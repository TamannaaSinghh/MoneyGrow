import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { StrategyAccordion } from "@/components/StrategyAccordion";
import { CTAStrip } from "@/components/CTAStrip";
import { strategies } from "@/lib/strategies";
import { site } from "@/lib/site";

export const metadata = { title: "PMS · Portfolio Management Services" };

const pms = strategies.filter((s) => s.category === "PMS");

export default function PmsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment Offerings · PMS"
        title={
          <>
            Portfolio Management
            <br />
            <span className="italic font-light text-teal-700">Services.</span>
          </>
        }
        intro="A SEBI-licensed Portfolio Management Service. Two strategies — Large Midcap and Small Midcap — both anchored in our 4P framework: Promoter, Product, Profitability, Price."
        meta={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 max-w-3xl">
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Strategies</p>
              <p className="font-medium">Large · Small Midcap</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Framework</p>
              <p className="font-medium tabular">4P</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Min. investment</p>
              <p className="font-medium tabular">₹50 lakhs</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">SEBI Reg. No.</p>
              <p className="font-medium tabular">{site.legal.sebiPms}</p>
            </div>
          </div>
        }
      />

      {/* Strategies — click to expand full details */}
      <Section>
        <div className="space-y-5">
          {pms.map((s, idx) => (
            <StrategyAccordion key={s.slug} strategy={s} defaultOpen={idx === 0} />
          ))}
        </div>
      </Section>

      {/* Regulatory + Login band */}
      <Section className="bg-mist border-y border-ink/10">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/disclosures/pms"
            className="group block bg-paper border border-ink/10 rounded-md p-10 hover:border-teal-600 hover:shadow-soft transition"
          >
            <p className="smallcaps text-base text-teal-700 font-medium">Regulatory</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tightish">
              PMS Regulatory Disclosures
            </h3>
            <p className="mt-4 text-ink/70 text-base">
              SEBI-mandated disclosure documents, investor charter, complaints
              statement, code of conduct, and grievance policy.
            </p>
            <p className="mt-3 font-mono text-sm text-ink/55 tabular">
              PMS SEBI Reg. No. {site.legal.sebiPms}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-base font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              View disclosures →
            </span>
          </Link>

          <a
            href={site.logins.pms}
            target="_blank"
            rel="noreferrer"
            className="group block bg-paper border border-ink/10 rounded-md p-10 hover:border-teal-600 hover:shadow-soft transition"
          >
            <p className="smallcaps text-base text-teal-700 font-medium">Client area</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tightish">
              PMS Client Login
            </h3>
            <p className="mt-4 text-ink/70 text-base">
              Hosted by Kotak Wealthspectrum. Access portfolio statements,
              transactions and reports.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-base font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              Open Wealthspectrum →
            </span>
          </a>
        </div>
      </Section>

      <CTAStrip
        title={
          <>
            Ready to start with our PMS?
            <br />
            <span className="italic font-light text-gold-300">Let&rsquo;s set up a call.</span>
          </>
        }
        primary={{ label: `WhatsApp ${site.contact.phone}`, href: site.contact.whatsappHref }}
        secondary={{ label: "Download disclosure (PDF)", href: site.documents.disclosure }}
      />
    </>
  );
}
