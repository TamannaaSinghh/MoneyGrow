import Link from "next/link";
import { Hero } from "@/components/Hero";
import { KPIStrip } from "@/components/KPIStrip";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { ComplianceStrip } from "@/components/ComplianceStrip";
import { CTAStrip } from "@/components/CTAStrip";
import { team } from "@/lib/team";
import { letters } from "@/lib/newsletters";
import { site } from "@/lib/site";

export default function Home() {
  const latest = letters[0];
  return (
    <>
      <Hero />
      <ComplianceStrip />

      <KPIStrip
        dataHref={site.documents.statsSheet}
        items={[
          { value: "23+", label: "Years lead-PM experience" },
          { value: "4P", label: "Investment framework" },
          { value: "3 – 5", label: "Year typical horizon" },
          { value: "₹50 L", label: "Minimum investment (PMS)" },
        ]}
      />

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
                  <span className="font-mono text-base text-teal-600 tabular">/{b.k}</span>
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
          Investors with operating <span className="italic font-light">grit.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base lg:text-lg text-ink/70 leading-relaxed">
          You talk to the people who manage your money — not a relationship
          manager. Two decades of sell-side, buy-side and private-equity
          experience, with our own net worth invested alongside yours.
        </p>

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
          className="group grid lg:grid-cols-12 gap-10 items-center bg-ink text-cream rounded-md p-6 lg:p-10 hover:bg-teal-800 transition relative overflow-hidden"
        >
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />
          <div className="relative lg:col-span-8">
            <p className="smallcaps text-base text-gold-300 font-medium">Marketing presentation</p>
            <h3 className="font-display text-3xl lg:text-5xl mt-3 tracking-tighter2 leading-tight">
              Strategies, performance, philosophy
              <br />
              <span className="italic font-light text-gold-300">in one deck.</span>
            </h3>
          </div>
          <div className="relative lg:col-span-4 lg:text-right">
            <span className="inline-flex items-center gap-2 text-base font-medium text-gold-300 group-hover:translate-x-1 transition-transform">
              Open presentation →
            </span>
          </div>
        </a>
      </Section>

      {/* Latest letter */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionTitle kicker="Latest letter">
              Reflections — {latest.date}
            </SectionTitle>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="/newsletters"
              className="text-base font-medium text-teal-600 link-underline"
            >
              View all newsletters →
            </Link>
          </div>
        </div>

        <Link
          href={latest.href}
          className="mt-6 group block bg-paper border border-ink/10 rounded-md p-6 lg:p-10 hover:border-teal-600 hover:shadow-soft transition relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-bl-full pointer-events-none opacity-60" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-ink rounded grid place-items-center text-cream relative overflow-hidden grain">
                <div className="text-center">
                  <p className="font-mono text-xs text-gold-300/70 tabular smallcaps">
                    Letter
                  </p>
                  <p className="font-display tabular text-3xl mt-1">
                    {latest.serial.toString().padStart(2, "0")}
                  </p>
                  <p className="text-xs text-cream/60 mt-1 font-mono tabular">
                    {latest.date}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="smallcaps text-base text-teal-600 font-medium">Reflections</p>
              <h3 className="font-display text-3xl lg:text-4xl mt-3 tracking-tighter2 leading-tight">
                {latest.title} — {latest.date}
              </h3>
              <p className="mt-4 text-base text-ink/70 max-w-xl">
                Our monthly note on markets, portfolio positioning, and what
                we&rsquo;re reading.
              </p>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <span className="inline-flex items-center gap-2 text-base font-medium text-teal-600 group-hover:translate-x-1 transition-transform">
                Read →
              </span>
            </div>
          </div>
        </Link>
      </Section>

      <CTAStrip
        title={
          <>
            Talk to a portfolio manager
            <br />
            <span className="italic font-light text-gold-300">— not a sales desk.</span>
          </>
        }
        body="Schedule a 30-minute conversation. We'll walk you through our strategies, current portfolio positioning, and what working with us looks like."
        secondary={{ label: "Download factsheet", href: site.documents.disclosure }}
      />
    </>
  );
}
