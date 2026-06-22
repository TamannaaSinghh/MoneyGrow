import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { LetterRow } from "@/components/LetterRow";
import { ComplianceStrip } from "@/components/ComplianceStrip";
import { team } from "@/lib/team";
import { letters } from "@/lib/newsletters";
import { site } from "@/lib/site";

export default function Home() {
  const latest = letters[0];
  return (
    <>
      <Hero />
      <ComplianceStrip />

      {/* About Us */}
      <Section id="about">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>About MoneyGrow</Eyebrow>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tighter2">
              A professionally run asset manager.{" "}
              <span className="italic font-light text-teal-700">Aligned with you.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base lg:text-lg text-ink/75 leading-relaxed">
              A SEBI-licensed PMS and Investment Manager to MoneyGrow Alpha Fund I
              (Cat-III AIF). We back fundamentally sound, cash-flow-generating
              businesses for the long term — with our own net worth invested
              alongside yours.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-paper border border-ink/10 rounded-md p-6 hover:border-teal-600 transition">
                <p className="font-mono text-sm text-teal-600 tabular">PMS</p>
                <p className="mt-3 text-base text-ink/75 leading-relaxed">
                  SEBI-licensed Portfolio Management Service.
                </p>
              </div>
              <div className="bg-paper border border-ink/10 rounded-md p-6 hover:border-gold-400 transition">
                <p className="font-mono text-sm text-gold-500 tabular">AIF</p>
                <p className="mt-3 text-base text-ink/75 leading-relaxed">
                  Investment Manager to MoneyGrow Alpha Fund I (Cat-III).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why MoneyGrow */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionTitle kicker="Why MoneyGrow">
              Built for investors with a long view.
            </SectionTitle>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {[
              {
                k: "01",
                title: "Skin in the game",
                body:
                  "Our investment team has substantial net worth invested in the very same strategies we run for clients — ensuring complete alignment of interest.",
              },
              {
                k: "02",
                title: "Long-term, by design",
                body:
                  "We invest in businesses we expect to compound for 3 – 5 years. We don't try to predict short-term price moves, and we don't churn portfolios chasing them.",
              },
              {
                k: "03",
                title: "The 4P framework",
                body:
                  "Promoter, Product, Profitability, Price — every position has to clear all four filters. We pair core compounders with selective special-situation bets.",
              },
            ].map((b) => (
              <div
                key={b.k}
                className="grid grid-cols-12 gap-6 pb-6 border-b border-ink/10 last:border-0 last:pb-0"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="inline-block mt-2.5 w-2.5 h-2.5 rotate-45 bg-teal-600" aria-hidden />
                </div>
                <div className="col-span-10 lg:col-span-11">
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tightish">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-base text-ink/75 leading-relaxed max-w-2xl">
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" className="bg-mist">
        <Eyebrow>Team</Eyebrow>
        <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tighter2 lg:whitespace-nowrap">
          Meet the mind behind <span className="italic font-light text-teal-700">investment.</span>
        </h2>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((m, i) => (
            <TeamCard key={m.slug} member={m} index={i} />
          ))}
        </div>
      </Section>

      {/* Marketing presentation */}
      <Section>
        <a
          href={site.documents.marketingPresentation}
          target="_blank"
          rel="noreferrer"
          className="group grid lg:grid-cols-12 gap-10 items-center bg-[#D0DED2] border border-[#BCCFBF] text-ink rounded-md p-6 lg:p-10 hover:border-teal-600 transition relative overflow-hidden"
        >
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
          <div className="relative lg:col-span-8">
            <p className="smallcaps text-base text-teal-700 font-medium">Marketing presentation</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tighter2 leading-tight">
              <span className="sm:whitespace-nowrap">Strategies, performance, philosophy</span>
              <br />
              <span className="italic font-light text-teal-700">in one deck.</span>
            </h3>
          </div>
          <div className="relative lg:col-span-4 lg:text-right">
            <span className="inline-flex items-center gap-2 text-base font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              Open presentation →
            </span>
          </div>
        </a>
      </Section>

      {/* Latest letter */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-10">
          <div>
            <Eyebrow>Latest letter</Eyebrow>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tighter2 lg:whitespace-nowrap">
              Reflections — {latest.dateLabel}
            </h2>
          </div>
          <Link
            href="/newsletters"
            className="shrink-0 text-base font-medium text-teal-600 link-underline"
          >
            View all newsletters →
          </Link>
        </div>

        <div className="mt-6 border-t border-ink/10">
          <LetterRow letter={latest} />
        </div>
      </Section>
    </>
  );
}
