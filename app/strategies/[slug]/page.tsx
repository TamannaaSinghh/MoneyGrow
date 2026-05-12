import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { FourPGrid } from "@/components/FourPGrid";
import { PerformanceTable } from "@/components/PerformanceTable";
import { CTAStrip } from "@/components/CTAStrip";
import { strategies, getStrategy } from "@/lib/strategies";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return strategies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getStrategy(params.slug);
  return { title: s?.name ?? "Strategy" };
}

export default function StrategyDetail({ params }: { params: { slug: string } }) {
  const s = getStrategy(params.slug);
  if (!s) notFound();

  const isAif = s.category === "AIF";
  const indicativeRows = [
    { period: "1 Year", strategy: "—", benchmark: "—", alpha: "—" },
    { period: "3 Years", strategy: "—", benchmark: "—", alpha: "—" },
    { period: "5 Years", strategy: "—", benchmark: "—", alpha: "—" },
    { period: "Since Inception", strategy: "—", benchmark: "—", alpha: "—" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`${s.category} · Strategy`}
        title={
          <>
            {s.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic font-light text-teal-700">{s.name.split(" ").slice(-1)}</span>
          </>
        }
        intro={s.longPitch}
        meta={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 max-w-3xl">
            <div>
              <p className="smallcaps text-xs text-ink/60 mb-2">Cap mix</p>
              <p className="font-medium tabular">{s.marketCap}</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/60 mb-2">Horizon</p>
              <p className="font-medium tabular">{s.horizon}</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/60 mb-2">Benchmark</p>
              <p className="font-medium">{s.benchmark}</p>
            </div>
            <div>
              <p className="smallcaps text-xs text-ink/60 mb-2">Category</p>
              <p className="font-medium">{isAif ? "Cat-III AIF" : "SEBI PMS"}</p>
            </div>
          </div>
        }
      />

      {/* Performance */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Performance</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
              Indicative <span className="italic font-light">returns</span>.
            </h2>
            <p className="mt-5 text-base text-ink/75 leading-relaxed">
              Detailed performance figures are shared on request and are subject to the latest
              SEBI-mandated disclosures. We are happy to walk you through them on a call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-base font-medium text-teal-600 link-underline"
            >
              Request the latest factsheet →
            </Link>
          </div>
          <div className="lg:col-span-7">
            <PerformanceTable
              asOn={site.aum.asOn}
              strategyLabel={s.name}
              benchmarkLabel={s.benchmark}
              rows={indicativeRows}
            />
          </div>
        </div>
      </Section>

      {/* Why this strategy */}
      <Section className="bg-mist border-y border-ink/10">
        <SectionTitle kicker={`Why ${s.name}`}>
          What makes this <span className="italic font-light">distinct</span>.
        </SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {s.whyPoints.map((w, i) => (
            <div key={w.title} className="bg-paper border border-ink/10 rounded-md p-9">
              <p className="font-mono text-sm text-teal-600 tabular">/{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-2xl lg:text-3xl mt-3 tracking-tightish">{w.title}</h3>
              <p className="mt-4 text-ink/75 leading-relaxed text-base">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy / framework */}
      <Section>
        <SectionTitle kicker="Investment philosophy">
          {s.slug === "flexicap"
            ? "The 4P framework, in detail."
            : s.slug === "alpha-fund"
            ? "Building Alpha Fund I."
            : "Four lenses, every position must clear."}
        </SectionTitle>
        <div className="mt-12">
          <FourPGrid items={s.philosophy} />
        </div>
      </Section>

      {/* Emerging themes (if any) */}
      {s.emergingThemes && (
        <Section className="bg-ink text-cream">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <Eyebrow>Emerging themes</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
                Where we&rsquo;re looking <span className="italic font-light text-gold-300">next.</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.emergingThemes.map((t) => (
                  <li
                    key={t}
                    className="border border-cream/15 rounded-md px-5 py-4 text-base flex items-center gap-3"
                  >
                    <span className="font-mono text-sm text-gold-300 tabular">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* Suitability */}
      <Section className="bg-mist">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Suitability</Eyebrow>
            <h2 className="font-display text-4xl tracking-tighter2 leading-tight">
              Is {s.name} <span className="italic font-light">right for you?</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <div className="bg-paper border border-teal-200 rounded-md p-7">
              <p className="smallcaps text-sm text-teal-600 mb-3">Built for</p>
              <ul className="space-y-3 text-base text-ink/85">
                <li className="flex gap-3">
                  <span className="text-teal-600">✓</span>
                  Investors with a {s.horizon} horizon
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600">✓</span>
                  Looking to compound through full market cycles
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600">✓</span>
                  Comfortable with equity-market volatility
                </li>
                {isAif && (
                  <li className="flex gap-3">
                    <span className="text-teal-600">✓</span>
                    Eligible AIF investors (min. ticket per SEBI AIF rules)
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-paper border border-ink/10 rounded-md p-7">
              <p className="smallcaps text-sm text-ink/60 mb-3">Not for you if</p>
              <ul className="space-y-3 text-base text-ink/75">
                <li className="flex gap-3">
                  <span className="text-ink/40">✕</span>
                  You need certain monthly cash flows
                </li>
                <li className="flex gap-3">
                  <span className="text-ink/40">✕</span>
                  You can&rsquo;t tolerate interim drawdowns
                </li>
                <li className="flex gap-3">
                  <span className="text-ink/40">✕</span>
                  Your horizon is under 2 years
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTAStrip
        title={
          <>
            Ready to start with {s.name}?
            <br />
            <span className="italic font-light text-gold-300">Let&rsquo;s set up a call.</span>
          </>
        }
        body="Speak directly with a portfolio manager about onboarding, fees and how the strategy fits your portfolio."
        secondary={{ label: "Download disclosure (PDF)", href: site.documents.disclosure }}
      />
    </>
  );
}
