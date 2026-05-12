import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle } from "@/components/Section";
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
        intro="Three Portfolio Management Service strategies plus a Cat-III AIF. All anchored in the same 4P framework — Promoter, Product, Profitability, Price."
      />

      <Section>
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl lg:text-4xl tracking-tightish">
            Portfolio Management Services
          </h2>
          <p className="text-sm text-ink/60 hidden lg:block">3 strategies · SEBI-licensed PMS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pms.map((s, i) => (
            <StrategyCard key={s.slug} strategy={s} index={i} />
          ))}
        </div>
      </Section>

      <Section className="bg-mist border-t border-ink/10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl lg:text-4xl tracking-tightish">
            Alternative Investment Fund
          </h2>
          <p className="text-sm text-ink/60 hidden lg:block">Cat-III · Long-only equities</p>
        </div>
        {aif.map((s) => (
          <Link
            key={s.slug}
            href={`/strategies/${s.slug}`}
            className="block group bg-ink text-cream rounded-md p-10 lg:p-14 hover:bg-teal-800 transition relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-2">
                <p className="font-mono text-xs text-gold-300/80 tabular">/ AIF</p>
                <p className="smallcaps text-xs text-cream/40 mt-2">Cat-III</p>
              </div>
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl lg:text-5xl tracking-tighter2 leading-tight">
                  {s.name}
                </h3>
                <p className="mt-4 text-cream/70 max-w-xl text-sm lg:text-base">{s.pitch}</p>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-end gap-4">
                <dl className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-cream/40 mb-1 smallcaps text-xs">Cap mix</dt>
                    <dd className="text-cream/90 font-medium">Dynamic</dd>
                  </div>
                  <div>
                    <dt className="text-cream/40 mb-1 smallcaps text-xs">Horizon</dt>
                    <dd className="text-cream/90 font-medium tabular">{s.horizon}</dd>
                  </div>
                </dl>
                <span className="text-sm font-medium text-gold-300 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Section>

      <Section>
        <SectionTitle kicker="The framework">
          Four filters, every position must pass.
        </SectionTitle>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
          {["Promoter", "Product", "Profitability", "Price"].map((p, i) => (
            <div key={p} className="bg-paper p-8 lg:p-10">
              <p className="font-mono text-xs text-teal-600 tabular">/{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tighter2">{p}</h3>
            </div>
          ))}
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
