import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { FourPGrid } from "@/components/FourPGrid";
import type { Strategy } from "@/lib/strategies";

/**
 * Full per-strategy detail rendered inline on an offering page —
 * everything the old standalone strategy detail page used to show,
 * minus the page-level header and CTA.
 */
export function StrategyInline({ strategy: s }: { strategy: Strategy }) {
  const isAif = s.category === "AIF";

  return (
    <>
      {/* Intro */}
      <Section className="border-t border-ink/10">
        <Eyebrow>{s.category} · Strategy</Eyebrow>
        <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
          {s.name}
        </h2>
        <p className="mt-6 max-w-3xl text-base lg:text-lg text-ink/75 leading-relaxed">
          {s.longPitch}
        </p>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6 max-w-3xl">
          <div>
            <dt className="smallcaps text-xs text-ink/70 mb-2">Cap mix</dt>
            <dd className="font-medium tabular">{s.marketCap}</dd>
          </div>
          <div>
            <dt className="smallcaps text-xs text-ink/70 mb-2">Horizon</dt>
            <dd className="font-medium tabular">{s.horizon}</dd>
          </div>
          <div>
            <dt className="smallcaps text-xs text-ink/70 mb-2">Benchmark</dt>
            <dd className="font-medium">{s.benchmark}</dd>
          </div>
          <div>
            <dt className="smallcaps text-xs text-ink/70 mb-2">Category</dt>
            <dd className="font-medium">{isAif ? "Cat-III AIF" : "SEBI PMS"}</dd>
          </div>
        </dl>
      </Section>

      {/* Why this strategy */}
      <Section className="bg-mist border-y border-ink/10">
        <SectionTitle kicker={`Why ${s.name}`}>
          What makes this <span className="italic font-light">distinct</span>.
        </SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {s.whyPoints.map((w) => (
            <div key={w.title} className="bg-paper border border-ink/10 rounded-md p-9">
              <h3 className="font-display text-2xl lg:text-3xl tracking-tightish">{w.title}</h3>
              <p className="mt-4 text-ink/75 leading-relaxed text-base">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy / framework */}
      <Section>
        <SectionTitle kicker="Investment philosophy">
          {s.slug === "large-midcap"
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
        <Section>
          <div>
            <Eyebrow>Emerging themes</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
              Where we&rsquo;re looking <span className="italic font-light">next.</span>
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {s.emergingThemes.map((t) => (
              <li
                key={t}
                className="border border-ink/10 rounded-md px-5 py-4 text-base flex items-center gap-3 bg-white"
              >
                <span className="font-mono text-sm text-teal-700 tabular">→</span>
                {t}
              </li>
            ))}
          </ul>
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
              <p className="smallcaps text-sm text-teal-700 mb-3">Built for</p>
              <ul className="space-y-3 text-base text-ink/85">
                <li className="flex gap-3">
                  <span className="text-teal-700">✓</span>
                  Investors with a {s.horizon} horizon
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700">✓</span>
                  Looking to compound through full market cycles
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700">✓</span>
                  Comfortable with equity-market volatility
                </li>
                {isAif && (
                  <li className="flex gap-3">
                    <span className="text-teal-700">✓</span>
                    Eligible AIF investors (min. ticket per SEBI AIF rules)
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-paper border border-ink/10 rounded-md p-7">
              <p className="smallcaps text-sm text-ink/70 mb-3">Not for you if</p>
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
    </>
  );
}
