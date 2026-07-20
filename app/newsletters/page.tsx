import Image from "next/image";
import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { groupByYear, type Letter } from "@/lib/newsletters";
import { getNewsletters } from "@/lib/wp";

export const metadata = { title: "Newsletters" };

// Re-fetch the WordPress Media Library on this cadence so newly uploaded
// newsletter PDFs appear automatically, without a redeploy.
export const revalidate = 3600;

function LetterRow({ letter }: { letter: Letter }) {
  return (
    <a
      href={letter.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${letter.title} — ${letter.monthLong} ${letter.year}`}
      className="group flex items-center gap-5 sm:gap-7 lg:gap-9 py-6 border-b border-ink/10 transition-colors hover:bg-mist/70"
    >
      {/* Cover / image */}
      <div className="relative shrink-0 w-24 sm:w-28 lg:w-36 aspect-square rounded-md overflow-hidden bg-gradient-to-br from-teal-50 via-cream to-teal-100 ring-1 ring-teal-700/10 grain transition-shadow group-hover:shadow-soft">
        {letter.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={letter.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gold-200/60 blur-2xl transition-colors group-hover:bg-teal-300/60" />
            <div className="absolute left-3.5 top-3.5 h-px w-7 bg-teal-700/30 transition-all group-hover:w-10 group-hover:bg-teal-700" />
            <div className="relative flex h-full flex-col items-center justify-center p-3.5 text-center">
              <p className="font-display text-3xl lg:text-4xl leading-none tracking-tight text-teal-800">
                {letter.monthShort}
              </p>
              <p className="mt-2 font-mono text-xs text-gold-600 tabular tracking-wide">
                {letter.year}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-2xl lg:text-3xl tracking-tightish text-ink transition-colors group-hover:text-teal-700">
          {letter.title}
        </h3>
        <p className="mt-2 smallcaps font-medium text-teal-700 text-sm tracking-wide">
          {letter.monthLong} {letter.year}
        </p>
        <p className="mt-2 max-w-2xl text-sm lg:text-base leading-relaxed text-ink/70 line-clamp-2">
          {letter.blurb}
        </p>
      </div>

      {/* Action */}
      <div className="hidden shrink-0 items-center gap-3 self-center pr-1 text-teal-700 sm:flex">
        <span className="hidden font-medium lg:inline">Read letter</span>
        <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-teal-600 group-hover:bg-teal-700 group-hover:text-cream">
          →
        </span>
      </div>
    </a>
  );
}

export default async function NewslettersPage() {
  const letters = await getNewsletters();
  const { lettersByYear, years } = groupByYear(letters);

  return (
    <>
      <section className="relative overflow-hidden pt-8 lg:pt-10 pb-6 lg:pb-8 grain border-b border-ink/10">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />
        <div className="relative max-w-container mx-auto px-6 lg:px-10 flex flex-col items-center text-center">
          <p className="smallcaps text-lg text-teal-700 mb-6 flex items-center gap-3 font-medium">
            <span className="inline-block w-8 h-px bg-teal-600/60" />
            Newsletters
            <span className="inline-block w-8 h-px bg-teal-600/60" />
          </p>
          <Image
            src="/MoneyGrow Reflections Logo 1.png"
            alt="MoneyGrow Reflections"
            width={833}
            height={97}
            priority
            className="h-12 lg:h-20 w-auto"
          />
          <h1 className="mt-5 font-display text-3xl lg:text-4xl tracking-tightish italic font-light text-teal-700">
            our monthly note.
          </h1>
          <p className="mt-8 max-w-2xl text-base lg:text-lg text-ink/75 leading-relaxed">
            Every month we share what we&rsquo;re seeing across portfolios, sectors, and the broader market. The full archive is below.
          </p>
        </div>
      </section>

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
                  <p className="text-sm text-ink/70 smallcaps tabular">
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

      <section className="py-6 lg:py-8">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="relative bg-teal-700 text-cream rounded-md overflow-hidden p-8 lg:p-12 grain">
            <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
            <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tighter2">
                  Don&rsquo;t miss the next letter.
                  <br />
                  <span className="italic font-light text-gold-300">Subscribe.</span>
                </h2>
                <p className="mt-6 text-cream/85 max-w-xl text-base lg:text-lg">
                  Reflections — straight to your inbox once a month. Unsubscribe anytime.
                </p>
              </div>
              <div className="lg:col-span-5 w-full lg:justify-self-end">
                <SubscribeForm variant="onDark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
