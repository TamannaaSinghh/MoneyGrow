import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTAStrip } from "@/components/CTAStrip";
import { LetterRow } from "@/components/LetterRow";
import { lettersByYear, years } from "@/lib/newsletters";

export const metadata = { title: "Newsletters" };

export default function NewslettersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletters"
        title={
          <span className="lg:whitespace-nowrap lg:text-6xl">
            Reflections —{" "}
            <span className="italic font-light text-teal-700">our monthly note.</span>
          </span>
        }
        intro="Every month we share what we&rsquo;re seeing across portfolios, sectors, and the broader market. The full archive is below."
      />

      <Section>
        <div className="space-y-16">
          {years.map((y) => {
            const yearLetters = lettersByYear[y];
            return (
              <div key={y}>
                <div className="flex items-end justify-between border-b-2 border-ink/80 pb-4 mb-2">
                  <h2 className="font-display text-5xl lg:text-7xl tracking-tighter3 tabular text-ink">
                    {y}
                  </h2>
                  <p className="text-sm text-ink/60 smallcaps tabular">
                    {yearLetters.length} letter{yearLetters.length > 1 ? "s" : ""}
                  </p>
                </div>

                <div>
                  {yearLetters.map((l) => (
                    <LetterRow key={l.serial + l.date} letter={l} />
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
