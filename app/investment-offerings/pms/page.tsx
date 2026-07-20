import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { CTAStrip } from "@/components/CTAStrip";
import { ComplianceContact } from "@/components/ComplianceContact";
import { DownloadIcon } from "@/components/DownloadIcon";
import { StrategyInline } from "@/components/StrategyInline";
import { strategies } from "@/lib/strategies";
import { site } from "@/lib/site";
import { getPmsDisclosures } from "@/sanity/lib/pmsDisclosures";
import { getMarketingPresentation } from "@/sanity/lib/marketingPresentation";

export const metadata = { title: "PMS · Portfolio Management Services" };

const pms = strategies.filter((s) => s.category === "PMS");

export default async function PmsPage() {
  const pmsDisclosures = [...(await getPmsDisclosures())].sort(
    (a, b) =>
      (a.status === "pending" ? 1 : 0) - (b.status === "pending" ? 1 : 0)
  );
  const marketingPresentation = await getMarketingPresentation();
  const pmsMid = Math.ceil(pmsDisclosures.length / 2);
  const pmsColumns = [
    pmsDisclosures.slice(0, pmsMid),
    pmsDisclosures.slice(pmsMid),
  ];

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
              <p className="smallcaps text-xs text-ink/70 mb-2">Strategies</p>
              <p className="font-medium">Large · Small Midcap</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/70 mb-2">Framework</p>
              <p className="font-medium tabular">4P</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/70 mb-2">Min. investment</p>
              <p className="font-medium tabular">₹50 lakhs</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/70 mb-2">SEBI Reg. No.</p>
              <p className="font-medium tabular">{site.legal.sebiPms}</p>
            </div>
          </div>
        }
      />

      {/* Strategy detail — full information inline (no separate pages) */}
      {pms.map((s) => (
        <StrategyInline key={s.slug} strategy={s} />
      ))}

      {/* Regulatory disclosures */}
      <Section id="disclosures" className="bg-mist border-y border-ink/10">
        <p className="smallcaps text-base text-teal-700 font-medium">Regulatory</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-3 tracking-tighter2 leading-tight">
          PMS Regulatory{" "}
          <span className="italic font-light text-teal-700">Disclosures.</span>
        </h2>
        <p className="mt-5 text-base lg:text-lg text-ink/75 leading-relaxed max-w-2xl">
          SEBI-mandated disclosure documents, investor charter, complaints
          statement, investor education, and grievance policy — kept current.
        </p>
        <p className="mt-3 font-mono text-sm text-ink/70 tabular">
          PMS SEBI Reg. No. {site.legal.sebiPms}
        </p>

        {/* Disclosure documents */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {pmsColumns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="border border-ink/10 rounded-md overflow-hidden bg-paper"
            >
              {col.map((d) => {
                if (d.status === "pending") {
                  return (
                    <div
                      key={d.label}
                      className="flex items-center gap-3 px-5 py-4 border-b border-ink/5 last:border-0"
                    >
                      <span className="font-medium text-ink text-base flex-1 min-w-0">
                        {d.label}
                      </span>
                      <span className="text-sm font-medium text-ink/70 shrink-0">
                        Under Preparation
                      </span>
                    </div>
                  );
                }
                return (
                  <a
                    key={d.label}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 border-b border-ink/5 last:border-0 hover:bg-mist/60 transition group"
                  >
                    <span className="font-medium text-ink text-base flex-1 min-w-0">
                      {d.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 shrink-0">
                      <DownloadIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      <span className="hidden sm:inline">Download</span>
                    </span>
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <ComplianceContact
          scope="PMS"
          officer={{
            name: "Prachi Kadam",
            email: "compliance.pms@moneygrowindia.com",
          }}
        />
      </Section>

      {/* PMS Client Login banner */}
      <Section className="bg-ink text-cream">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-10">
          <div>
            <p className="smallcaps text-base text-gold-300 font-medium">Client area</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tightish">
              PMS Client Login
            </h3>
            <p className="mt-4 text-cream/70 text-base max-w-xl">
              Hosted by Kotak Wealthspectrum. Access portfolio statements,
              transactions and reports.
            </p>
          </div>
          <a
            href={site.logins.pms}
            target="_blank"
            rel="noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-gold-400 text-ink rounded-md text-base font-medium hover:bg-gold-300 transition"
          >
            Open Wealthspectrum
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </Section>

      {/* PMS UPI payment QR */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-center gap-8 p-10 border border-ink/10 rounded-lg">
          <Image
            src="/pms-upi-qr.png"
            alt="UPI QR code for PMS payments to moneygrow.pms@validkpay"
            width={267}
            height={300}
            className="shrink-0 w-48 h-auto"
          />
          <div>
            <Eyebrow>Payments</Eyebrow>
            <h3 className="font-display text-3xl lg:text-4xl tracking-tightish">
              Scan to pay via UPI
            </h3>
            <p className="mt-4 text-base max-w-xl">
              Scan the QR code with any UPI app, or pay directly to the UPI ID{" "}
              <strong className="font-medium">moneygrow.pms@validkpay</strong>.
            </p>
          </div>
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
        secondary={{ label: "Marketing Presentation", href: marketingPresentation }}
      />
    </>
  );
}
