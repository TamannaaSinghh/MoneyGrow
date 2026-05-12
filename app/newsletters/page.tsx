import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTAStrip } from "@/components/CTAStrip";
import { lettersByYear, years } from "@/lib/newsletters";

export const metadata = { title: "Newsletters" };

export default function NewslettersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletters"
        title={
          <>
            Reflections —{" "}
            <span className="italic font-light text-teal-700">our monthly note.</span>
          </>
        }
        intro="Every month we share what we&rsquo;re seeing across portfolios, sectors, and the broader market. The full archive is below."
      />

      <Section>
        <div className="space-y-12">
          {years.map((y) => {
            const yearLetters = lettersByYear[y];
            return (
              <div key={y}>
                <div className="flex items-end justify-between border-b border-ink/15 pb-5 mb-8">
                  <h2 className="font-display text-5xl lg:text-7xl tracking-tighter3 tabular text-ink">
                    {y}
                  </h2>
                  <p className="text-sm text-ink/60 smallcaps tabular">
                    {yearLetters.length} letter{yearLetters.length > 1 ? "s" : ""}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {yearLetters.map((l) => (
                    <a
                      key={l.serial + l.date}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group bg-paper border border-ink/10 rounded-md p-7 hover:border-teal-600 hover:shadow-soft transition relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <span className="font-mono text-sm text-ink/50 tabular">
                          /{String(l.serial).padStart(2, "0")}
                        </span>
                        <span className="text-xs smallcaps text-teal-600">
                          Reflections
                        </span>
                      </div>

                      <p className="font-display text-3xl tracking-tightish leading-tight">
                        {l.title}
                      </p>
                      <p className="text-sm text-ink/60 mt-3 tabular font-mono">
                        {l.date}
                      </p>

                      <div className="mt-8 pt-5 border-t border-ink/5 flex items-center justify-between">
                        <span className="text-base font-medium text-teal-600">
                          View letter
                        </span>
                        <span className="text-teal-600 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>

                      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-teal-50 group-hover:bg-gold-100/60 transition pointer-events-none" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CTAStrip
        title={
          <>
            Don&rsquo;t miss the next letter.
            <br />
            <span className="italic font-light text-gold-300">Subscribe.</span>
          </>
        }
        body="Reflections — straight to your inbox once a month. Unsubscribe anytime."
        primary={{ label: "Subscribe", href: "#footer-email" }}
      />
    </>
  );
}
