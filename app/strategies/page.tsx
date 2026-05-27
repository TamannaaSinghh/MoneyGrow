import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { StrategyCard } from "@/components/StrategyCard";
import { CTAStrip } from "@/components/CTAStrip";
import { strategies } from "@/lib/strategies";

export const metadata = { title: "Strategies" };

const pms = strategies.filter((s) => s.category === "PMS");
const aif = strategies.filter((s) => s.category === "AIF");

export default function StrategiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment offerings"
        title={
          <>
            Pick the strategy
            <br />
            <span className="italic font-light text-teal-700">that fits your horizon.</span>
          </>
        }
        intro="Two Portfolio Management Service strategies plus a Cat-III AIF. All anchored in the same 4P framework — Promoter, Product, Profitability, Price."
      />

      {/* PMS */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>PMS</Eyebrow>
            <h2 className="font-display text-3xl lg:text-5xl tracking-tightish">
              Portfolio Management Services
            </h2>
          </div>
          <p className="shrink-0 font-mono text-sm text-ink/55 tabular">
            {pms.length} strategies · SEBI-licensed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pms.map((s, i) => (
            <StrategyCard key={s.slug} strategy={s} index={i} />
          ))}
        </div>
      </Section>

      {/* AIF */}
      <Section className="bg-mist border-y border-ink/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>AIF</Eyebrow>
            <h2 className="font-display text-3xl lg:text-5xl tracking-tightish">
              Alternative Investment Fund
            </h2>
          </div>
          <p className="shrink-0 font-mono text-sm text-ink/55 tabular">
            {aif.length} fund · Cat-III long-only
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {aif.map((s, i) => (
            <StrategyCard key={s.slug} strategy={s} index={pms.length + i} wide />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle kicker="The framework">
          Four filters, every position must pass.
        </SectionTitle>
        <div className="mt-12 rounded-md border border-ink/10 overflow-hidden bg-paper">
          <Image
            src="/4P%20strategy.png"
            alt="The 4P framework — Promoter, Product, Profitability, Price"
            width={1888}
            height={723}
            className="w-full h-auto"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </Section>

      <CTAStrip
        title={
          <>
            Not sure which strategy fits?
            <br />
            <span className="italic font-light text-gold-300">Let&rsquo;s talk.</span>
          </>
        }
        body="A 30-minute call with a portfolio manager. We'll review your goals, risk tolerance and horizon, and recommend the right combination."
      />
    </>
  );
}
