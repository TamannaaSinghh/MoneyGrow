import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { StrategyCard } from "@/components/StrategyCard";
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
        intro="A SEBI-licensed Portfolio Management Service. Three strategies — Flexicap, Small & Midcap, and Blend — all anchored in the 4P framework."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pms.map((s, i) => (
            <StrategyCard key={s.slug} strategy={s} index={i} />
          ))}
        </div>
      </Section>

      {/* Strategy descriptions */}
      {pms.map((s, idx) => (
        <Section
          key={s.slug}
          className={idx % 2 === 0 ? "bg-mist border-y border-ink/10" : ""}
        >
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>{s.category} · Strategy</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
                {s.name}
              </h2>
              <p className="mt-6 text-base lg:text-lg text-ink/75 leading-relaxed">
                {s.longPitch}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-w-md">
                <div>
                  <dt className="smallcaps text-xs text-ink/50 mb-1.5">Cap mix</dt>
                  <dd className="font-medium tabular">{s.marketCap}</dd>
                </div>
                <div>
                  <dt className="smallcaps text-xs text-ink/50 mb-1.5">Horizon</dt>
                  <dd className="font-medium tabular">{s.horizon}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="smallcaps text-xs text-ink/50 mb-1.5">Benchmark</dt>
                  <dd className="font-medium">{s.benchmark}</dd>
                </div>
              </dl>

              <Link
                href={`/strategies/${s.slug}`}
                className="inline-flex items-center gap-2 mt-8 text-base font-medium text-teal-600 link-underline"
              >
                Read more about {s.name} →
              </Link>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-5">
              {s.whyPoints.slice(0, 4).map((w, i) => (
                <div
                  key={w.title}
                  className="bg-paper border border-ink/10 rounded-md p-7"
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
      ))}

      {/* Regulatory + Login band */}
      <Section className="bg-ink text-cream">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/disclosures/pms"
            className="group block border border-cream/15 rounded-md p-10 hover:bg-teal-800 transition"
          >
            <p className="smallcaps text-base text-gold-300 font-medium">Regulatory</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tightish">
              PMS Regulatory Disclosures
            </h3>
            <p className="mt-4 text-cream/70 text-base">
              SEBI-mandated disclosure documents, investor charter, complaints
              statement, code of conduct, and grievance policy.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gold-300 group-hover:translate-x-1 transition-transform">
              View disclosures →
            </span>
          </Link>

          <a
            href={site.logins.pms}
            target="_blank"
            rel="noreferrer"
            className="group block border border-cream/15 rounded-md p-10 hover:bg-teal-800 transition"
          >
            <p className="smallcaps text-base text-gold-300 font-medium">Client area</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tightish">
              PMS Client Login
            </h3>
            <p className="mt-4 text-cream/70 text-base">
              Hosted by Kotak Wealthspectrum. Access portfolio statements,
              transactions and reports.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gold-300 group-hover:translate-x-1 transition-transform">
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
        body="Speak directly with a portfolio manager about onboarding, fees and how each strategy fits your portfolio."
        secondary={{ label: "Download disclosure (PDF)", href: site.documents.disclosure }}
      />
    </>
  );
}
