import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { CTAStrip } from "@/components/CTAStrip";
import { DownloadIcon } from "@/components/DownloadIcon";
import { strategies } from "@/lib/strategies";
import { site } from "@/lib/site";

export const metadata = { title: "PMS · Portfolio Management Services" };

const pms = strategies.filter((s) => s.category === "PMS");

const pmsDisclosures = [
  "PMS Disclosure Document",
  "PMS Quarterly Disclosure",
  "Form C — Statement of complaints",
  "Investor Charter — PMS",
  "Grievance Redressal Policy",
  "Code of Conduct — PMS",
  "Conflict of Interest Policy",
  "SEBI Circulars Compliance",
];

const pmsMid = Math.ceil(pmsDisclosures.length / 2);
const pmsColumns = [pmsDisclosures.slice(0, pmsMid), pmsDisclosures.slice(pmsMid)];

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

      {/* Strategy feature sections */}
      {pms.map((s, idx) => {
        const shown = s.whyPoints.slice(0, 4);
        const odd = shown.length % 2 === 1;
        return (
          <Section
            key={s.slug}
            className={idx % 2 === 0 ? "bg-mist border-y border-ink/10" : ""}
          >
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <Eyebrow>{s.category} · Strategy</Eyebrow>
                <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
                  {s.name}
                </h2>
                <p className="mt-6 text-base lg:text-lg text-ink/75 leading-relaxed">
                  {s.longPitch}
                </p>

                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                  <div>
                    <dt className="smallcaps text-xs text-ink/50 mb-1.5">Cap mix</dt>
                    <dd className="font-medium tabular">{s.marketCap}</dd>
                  </div>
                  <div>
                    <dt className="smallcaps text-xs text-ink/50 mb-1.5">Horizon</dt>
                    <dd className="font-medium tabular">{s.horizon}</dd>
                  </div>
                  <div>
                    <dt className="smallcaps text-xs text-ink/50 mb-1.5">Benchmark</dt>
                    <dd className="font-medium">{s.benchmark}</dd>
                  </div>
                </dl>

                <Link
                  href={`/investment-offerings/pms/strategies/${s.slug}`}
                  className="inline-flex items-center gap-2 mt-9 px-6 py-3.5 border border-ink/15 rounded-md text-base font-medium text-ink hover:border-teal-600 hover:text-teal-700 transition group"
                >
                  Read more about {s.name}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 auto-rows-fr">
                {shown.map((w, i, arr) => (
                  <div
                    key={w.title}
                    className={`bg-paper border border-ink/10 rounded-md p-7 ${odd && i === arr.length - 1 ? "sm:col-span-2" : ""
                      }`}
                  >
                    <p className="font-mono text-sm text-teal-600 tabular">
                      /{String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-xl lg:text-2xl mt-2 tracking-tightish">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-base text-ink/70 leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* Regulatory disclosures */}
      <Section id="disclosures" className="bg-mist border-y border-ink/10">
        <p className="smallcaps text-base text-teal-600 font-medium">Regulatory</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-3 tracking-tighter2 leading-tight">
          PMS Regulatory{" "}
          <span className="italic font-light text-teal-700">Disclosures.</span>
        </h2>
        <p className="mt-5 text-base lg:text-lg text-ink/75 leading-relaxed max-w-2xl">
          SEBI-mandated disclosure documents, investor charter, complaints
          statement, code of conduct, and grievance policy — kept current.
        </p>
        <p className="mt-3 font-mono text-sm text-ink/55 tabular">
          PMS SEBI Reg. No. {site.legal.sebiPms}
        </p>

        {/* Disclosure documents */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {pmsColumns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="border border-ink/10 rounded-md overflow-hidden bg-paper"
            >
              {col.map((d, j) => {
                const n = colIdx * pmsMid + j + 1;
                return (
                  <a
                    key={d}
                    href="#"
                    className="flex items-center gap-3 px-5 py-4 border-b border-ink/5 last:border-0 hover:bg-mist/60 transition group"
                  >
                    <span className="font-mono text-sm text-ink/50 tabular shrink-0">
                      /{String(n).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-ink text-base flex-1 min-w-0">
                      {d}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 shrink-0">
                      <DownloadIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      <span className="hidden sm:inline">Download</span>
                    </span>
                  </a>
                );
              })}
            </div>
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
