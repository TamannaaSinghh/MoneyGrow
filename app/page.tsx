import Link from "next/link";
import { Hero } from "@/components/Hero";
import { KPIStrip } from "@/components/KPIStrip";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { StrategyCard } from "@/components/StrategyCard";
import { ComplianceStrip } from "@/components/ComplianceStrip";
import { CTAStrip } from "@/components/CTAStrip";
import { strategies } from "@/lib/strategies";
import { team } from "@/lib/team";
import { letters } from "@/lib/newsletters";
import { site } from "@/lib/site";

const pms = strategies.filter((s) => s.category === "PMS");
const aif = strategies.find((s) => s.slug === "alpha-fund");

export default function Home() {
  const latest = letters[0];
  return (
    <>
      <Hero />
      <ComplianceStrip />

      <KPIStrip
        items={[
          { value: site.aum.value, label: "Total AUM", sub: `as on ${site.aum.asOn}` },
          { value: "23+", label: "Years lead-PM experience" },
          { value: "3 – 5", label: "Year typical horizon" },
          { value: "4P", label: "Investment framework" },
        ]}
      />

      {/* About Us */}
      <Section id="about">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Eyebrow>About MoneyGrow</Eyebrow>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tighter2">
              A professionally run asset manager.{" "}
              <span className="italic font-light text-teal-700">Aligned with you.</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg text-ink/75 leading-relaxed">
              We are a SEBI-licensed Portfolio Management Service and Investment
              Manager to MoneyGrow Alpha Fund I (Cat-III AIF). Our team has substantial
              net worth invested alongside clients — so we win when you win.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-ink/80 leading-relaxed">
            <p>
              We are a professionally run asset manager with a highly experienced
              and motivated team.
            </p>
            <p>
              <strong className="text-ink">AIF.</strong> We are the Investment
              Manager to MoneyGrow AIF Trust for managing MoneyGrow Alpha Fund I
              (Category III AIF).
            </p>
            <p>
              <strong className="text-ink">PMS.</strong> We are a SEBI-licensed
              Portfolio Management Service.
            </p>
            <p>
              We manage a total AUM of{" "}
              <span className="font-display text-teal-700 tabular">{site.aum.value}</span>{" "}
              as on <span className="tabular">{site.aum.asOn}</span>.
            </p>
            <p>
              Our Investment Team has substantial net worth invested in the various
              strategies alongside the investors, thus ensuring complete alignment
              of interest with our clients.
            </p>
            <p>
              We have a long-term approach towards investing. We invest in
              businesses that are run by high-quality managements and where we
              expect robust growth over the next 3 – 5 years. Stock prices have
              been and will continue to fluctuate for various intrinsic and
              extrinsic reasons, and we generally do not attempt to predict
              short-term fluctuations.
            </p>
            <p>
              Our core investments are fundamentally sound, cash-flow generating,
              well-run and growing businesses led by trustworthy and highly
              competent management teams.
            </p>
            <p>
              We also invest in special situations — i.e. in businesses that may
              not be performing as per their true potential at the moment but are
              likely to reach that potential in 1 – 2 years and match up to the
              standards of the core investments once their true potential is
              achieved. Often such businesses are undergoing a management change
              or balance sheet restructuring / sale of a part or the entire
              business.
            </p>
          </div>
        </div>
      </Section>

      {/* Two kinds of conviction */}
      <Section className="bg-mist border-y border-ink/10">
        <SectionTitle kicker="Our approach">
          Two kinds of conviction,{" "}
          <span className="italic font-light">one portfolio.</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-paper border border-ink/10 rounded-md p-9">
            <p className="font-mono text-sm text-teal-600 tabular">/01</p>
            <h3 className="font-display text-3xl mt-2 tracking-tightish">
              Core compounders
            </h3>
            <p className="mt-4 text-base text-ink/75 leading-relaxed">
              Fundamentally sound, cash-flow generating, well-run and growing
              businesses led by trustworthy and highly competent management teams.
              We hold them through cycles.
            </p>
          </div>
          <div className="bg-paper border border-ink/10 rounded-md p-9">
            <p className="font-mono text-sm text-gold-500 tabular">/02</p>
            <h3 className="font-display text-3xl mt-2 tracking-tightish">
              Special situations
            </h3>
            <p className="mt-4 text-base text-ink/75 leading-relaxed">
              Businesses currently underperforming their true potential — often
              undergoing a management change or balance-sheet restructuring — that
              we expect to re-rate over 1 – 2 years.
            </p>
          </div>
        </div>
      </Section>

      {/* Strategies */}
      <Section className="bg-cream">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <SectionTitle kicker="Investment Offerings">
            Three PMS strategies. <br />
            <span className="italic font-light text-teal-700">One Cat-III AIF.</span>
          </SectionTitle>
          <p className="max-w-md text-base text-ink/70">
            Pick a strategy that matches your risk tolerance and time horizon.
            Every approach is anchored in our 4P framework — Promoter, Product,
            Profitability, Price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pms.map((s, i) => (
            <StrategyCard key={s.slug} strategy={s} index={i} />
          ))}
        </div>

        {aif && (
          <Link
            href={`/strategies/${aif.slug}`}
            className="mt-6 grid lg:grid-cols-12 gap-8 bg-ink text-cream rounded-md p-6 lg:p-10 group hover:bg-teal-800 transition relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />
            <div className="relative lg:col-span-2">
              <p className="font-mono text-sm text-gold-300/80 tabular">/ AIF</p>
              <p className="smallcaps text-xs text-cream/50 mt-2">Cat-III</p>
            </div>
            <div className="relative lg:col-span-7">
              <h3 className="font-display text-3xl lg:text-5xl tracking-tighter2 leading-tight">
                {aif.name}
              </h3>
              <p className="mt-4 text-cream/75 max-w-xl text-base lg:text-lg">
                {aif.pitch}
              </p>
            </div>
            <div className="relative lg:col-span-3 flex flex-col justify-end gap-4">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-cream/50 mb-1 smallcaps text-xs">Cap mix</dt>
                  <dd className="text-cream/90 font-medium">Dynamic</dd>
                </div>
                <div>
                  <dt className="text-cream/50 mb-1 smallcaps text-xs">Horizon</dt>
                  <dd className="text-cream/90 font-medium tabular">{aif.horizon}</dd>
                </div>
              </dl>
              <span className="text-base font-medium text-gold-300 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Explore Alpha Fund I →
              </span>
            </div>
          </Link>
        )}
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <SectionTitle kicker="Team">
            Investors with operating{" "}
            <span className="italic font-light">grit.</span>
          </SectionTitle>
          <Link
            href="/team"
            className="text-base font-medium text-teal-600 link-underline"
          >
            Meet the full team →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <Link
              key={m.slug}
              href={`/team#${m.slug}`}
              className="group bg-paper border border-ink/10 rounded-md p-7 hover:border-teal-600 hover:shadow-soft transition"
            >
              <div className="aspect-square mb-6 rounded bg-gradient-to-br from-teal-700 to-teal-900 grain grid place-items-center text-cream font-display text-6xl tracking-tighter3 overflow-hidden">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  m.initials
                )}
              </div>
              <p className="smallcaps text-base text-teal-600 font-medium">{m.role}</p>
              <h3 className="font-display text-2xl mt-1 tracking-tightish">
                {m.name}
              </h3>
              <p className="mt-3 text-base text-ink/70 line-clamp-2">{m.bio[0]}</p>
            </Link>
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
