import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { FourPGrid } from "@/components/FourPGrid";
import { FeesTerms } from "@/components/FeesTerms";
import { CTAStrip } from "@/components/CTAStrip";
import { getStrategy } from "@/lib/strategies";
import { site } from "@/lib/site";

export const metadata = { title: "AIF · MoneyGrow Alpha Fund I" };

export default function AifPage() {
  const s = getStrategy("alpha-fund");
  if (!s) return null;

  return (
    <>
      <PageHeader
        eyebrow="Investment Offerings · AIF"
        title={
          <>
            MoneyGrow{" "}
            <span className="italic font-light text-teal-700">Alpha Fund I</span>
          </>
        }
        intro={s.longPitch}
        meta={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 max-w-3xl">
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Cap mix</p>
              <p className="font-medium tabular">{s.marketCap}</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Horizon</p>
              <p className="font-medium tabular">{s.horizon}</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Benchmark</p>
              <p className="font-medium">{s.benchmark}</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/50 mb-2">Category</p>
              <p className="font-medium">Cat-III AIF</p>
            </div>
          </div>
        }
      />

      {/* Hero block */}
      <Section>
        <div className="bg-mist border border-ink/10 text-ink rounded-md p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Eyebrow>About the fund</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
                A long-only Cat-III AIF
                <br />
                <span className="italic font-light text-teal-700">
                  for the long compounder.
                </span>
              </h2>
              <p className="mt-6 text-ink/75 leading-relaxed text-base lg:text-lg max-w-2xl">
                {s.pitch}
              </p>
            </div>
            <div className="lg:col-span-5">
              <dl className="space-y-5">
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                  <dt className="smallcaps text-xs text-ink/55">Category</dt>
                  <dd className="font-medium text-ink">Cat-III AIF</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                  <dt className="smallcaps text-xs text-ink/55">Style</dt>
                  <dd className="font-medium text-ink">Long-only equity</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                  <dt className="smallcaps text-xs text-ink/55">Horizon</dt>
                  <dd className="font-medium text-ink tabular">{s.horizon}</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                  <dt className="smallcaps text-xs text-ink/55">Benchmark</dt>
                  <dd className="font-medium text-ink">{s.benchmark}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="smallcaps text-xs text-ink/55">Min. investment</dt>
                  <dd className="font-medium text-ink tabular">{s.terms?.minInvestment}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Across the cap spectrum — dynamic allocation across large, mid and small caps */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Across the cap spectrum</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
              One fund, the{" "}
              <span className="italic font-light text-teal-700">whole spectrum.</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg text-ink/75 leading-relaxed">
              Alpha Fund I allocates dynamically across the market-cap spectrum in a
              single portfolio — pairing the stability of quality large-caps with the
              high-growth, alpha-generating ideas from the small-cap end of the market,
              and shifting the mix as conditions change. It can also take opportunistic
              exposure to REITs and commodities companies.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
            {[
              {
                cap: "Large caps",
                role: "Stability",
                body: "Quality leaders selected for resilience through market cycles.",
              },
              {
                cap: "Mid caps",
                role: "Upside potential",
                body: "Held for the upside as strong businesses continue to scale.",
              },
              {
                cap: "Small caps",
                role: "High growth & alpha",
                body: "Emerging and special-situation ideas for alpha generation.",
              },
            ].map((c) => (
              <div key={c.cap} className="bg-paper border border-ink/10 rounded-md p-7">
                <p className="smallcaps text-xs text-teal-600 font-medium">{c.role}</p>
                <h3 className="font-display text-2xl mt-2 tracking-tightish">{c.cap}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why */}
      <Section className="bg-mist border-y border-ink/10">
        <SectionTitle kicker="Why Alpha Fund I">
          What makes this <span className="italic font-light">distinct</span>.
        </SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {s.whyPoints.map((w) => (
            <div key={w.title} className="bg-paper border border-ink/10 rounded-md p-9">
              <span className="inline-block w-2 h-2 rotate-45 bg-teal-600" aria-hidden />
              <h3 className="font-display text-2xl lg:text-3xl mt-4 tracking-tightish">
                {w.title}
              </h3>
              <p className="mt-4 text-ink/70 leading-relaxed text-base">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <SectionTitle kicker="Investment philosophy">
          Building Alpha Fund I.
        </SectionTitle>
        <div className="mt-12">
          <FourPGrid items={s.philosophy} />
        </div>
      </Section>

      {/* Fees & terms */}
      <Section className="bg-mist border-y border-ink/10">
        <FeesTerms strategy={s} />
      </Section>

      {/* Fund structure */}
      <Section>
        <SectionTitle kicker="Fund structure">
          The fund, <span className="italic font-light text-teal-700">in full.</span>
        </SectionTitle>
        <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
          {site.aifStructure.map((row) => (
            <div key={row.label} className="border-t border-ink/10 pt-4">
              <dt className="smallcaps text-xs text-ink/50 mb-1.5">{row.label}</dt>
              <dd className="font-medium text-ink/85 leading-snug">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-ink/55">
          Detailed Private Placement Memorandum (PPM) available on request.
        </p>
      </Section>

      {/* Regulatory band */}
      <Section className="bg-mist border-y border-ink/10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Regulatory</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
              AIF Regulatory
              <br />
              <span className="italic font-light text-teal-700">Disclosures.</span>
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed max-w-xl text-base">
              Private placement memorandum, investor charter, complaints statement,
              grievance redressal, annual compliance report and risk management
              policy — all kept current.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="/disclosures/aif"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold-400 text-ink rounded-md font-medium hover:bg-gold-300 transition"
            >
              View AIF Disclosures →
            </Link>
          </div>
        </div>
      </Section>

      <CTAStrip
        title={
          <>
            Ready to start with Alpha Fund I?
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
