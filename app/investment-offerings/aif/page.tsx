import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { FourPGrid } from "@/components/FourPGrid";
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
        <div className="bg-ink text-cream rounded-md p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Eyebrow>About the fund</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
                A long-only Cat-III AIF
                <br />
                <span className="italic font-light text-gold-300">
                  for the long compounder.
                </span>
              </h2>
              <p className="mt-6 text-cream/75 leading-relaxed text-base lg:text-lg max-w-2xl">
                {s.pitch}
              </p>
            </div>
            <div className="lg:col-span-5">
              <dl className="space-y-5">
                <div className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                  <dt className="smallcaps text-xs text-cream/60">Category</dt>
                  <dd className="font-medium text-cream">Cat-III AIF</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                  <dt className="smallcaps text-xs text-cream/60">Style</dt>
                  <dd className="font-medium text-cream">Long-only equity</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                  <dt className="smallcaps text-xs text-cream/60">Horizon</dt>
                  <dd className="font-medium text-cream tabular">{s.horizon}</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                  <dt className="smallcaps text-xs text-cream/60">Benchmark</dt>
                  <dd className="font-medium text-cream">{s.benchmark}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="smallcaps text-xs text-cream/60">AUM (firm)</dt>
                  <dd className="font-medium text-cream tabular">{site.aum.value}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Why */}
      <Section className="bg-mist border-y border-ink/10">
        <SectionTitle kicker="Why Alpha Fund I">
          What makes this <span className="italic font-light">distinct</span>.
        </SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {s.whyPoints.map((w, i) => (
            <div key={w.title} className="bg-paper border border-ink/10 rounded-md p-9">
              <p className="font-mono text-sm text-teal-600 tabular">
                /{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl lg:text-3xl mt-3 tracking-tightish">
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

      {/* Regulatory band */}
      <Section className="bg-ink text-cream">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Regulatory</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
              AIF Regulatory
              <br />
              <span className="italic font-light text-gold-300">Disclosures.</span>
            </h2>
            <p className="mt-5 text-cream/70 leading-relaxed max-w-xl text-base">
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
        body="Speak directly with a portfolio manager about onboarding, fees and how Alpha Fund I fits your portfolio."
        secondary={{ label: "Download disclosure (PDF)", href: site.documents.disclosure }}
      />
    </>
  );
}
