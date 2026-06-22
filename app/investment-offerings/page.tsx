import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { StrategyCard } from "@/components/StrategyCard";
import { CTAStrip } from "@/components/CTAStrip";
import { strategies } from "@/lib/strategies";
import { site } from "@/lib/site";

export const metadata = { title: "Investment Offerings" };

const pms = strategies.filter((s) => s.category === "PMS");
const aif = strategies.filter((s) => s.category === "AIF");

export default function InvestmentOfferingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment Offerings"
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow>PMS</Eyebrow>
            <h2 className="font-display text-3xl lg:text-5xl tracking-tightish">
              Portfolio Management Services
            </h2>
          </div>
          <Link
            href="/investment-offerings/pms"
            className="text-base font-medium text-teal-600 link-underline self-start"
          >
            Read the full PMS page →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pms.map((s, i) => (
            <StrategyCard key={s.slug} strategy={s} index={i} />
          ))}
        </div>
      </Section>

      <Section className="bg-mist border-t border-ink/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow>AIF</Eyebrow>
            <h2 className="font-display text-3xl lg:text-5xl tracking-tightish">
              Alternative Investment Fund
            </h2>
          </div>
          <Link
            href="/investment-offerings/aif"
            className="text-base font-medium text-teal-600 link-underline self-start"
          >
            Read the full AIF page →
          </Link>
        </div>
        {aif.map((s) => (
          <Link
            key={s.slug}
            href="/investment-offerings/aif"
            className="block group bg-mist border border-ink/10 text-ink rounded-md p-10 lg:p-14 hover:border-teal-600 hover:bg-cream transition relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-2">
                <p className="font-mono text-sm text-gold-600 tabular">/ AIF</p>
                <p className="smallcaps text-xs text-ink/50 mt-2">Cat-III</p>
              </div>
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl lg:text-5xl tracking-tighter2 leading-tight">
                  {s.name}
                </h3>
                <p className="mt-4 text-ink/70 max-w-xl text-base">{s.pitch}</p>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-end gap-4">
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-ink/50 mb-1 smallcaps text-xs">Cap mix</dt>
                    <dd className="text-ink/85 font-medium">Dynamic</dd>
                  </div>
                  <div>
                    <dt className="text-ink/50 mb-1 smallcaps text-xs">Horizon</dt>
                    <dd className="text-ink/85 font-medium tabular">{s.horizon}</dd>
                  </div>
                </dl>
                <span className="text-base font-medium text-teal-700 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
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
          {["Promoter", "Product", "Profitability", "Price"].map((p) => (
            <div key={p} className="bg-paper p-8 lg:p-10">
              <span className="inline-block w-2 h-2 rotate-45 bg-teal-600" aria-hidden />
              <h3 className="font-display text-3xl lg:text-4xl mt-4 tracking-tighter2">{p}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-mist border-y border-ink/10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Marketing presentation</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
              Strategies, performance, philosophy
              <br />
              <span className="italic font-light text-teal-700">in one deck.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <a
              href={site.documents.marketingPresentation}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold-400 text-ink rounded-md font-medium hover:bg-gold-300 transition"
            >
              Open marketing presentation →
            </a>
          </div>
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
