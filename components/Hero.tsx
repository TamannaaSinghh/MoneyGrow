import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 lg:pt-6 pb-6 lg:pb-8 grain">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 animate-fade-up">
            <p className="smallcaps text-lg text-teal-600 mb-5 flex items-center gap-3 font-medium">
              <span className="inline-block w-8 h-px bg-teal-600/60" />
              SEBI-licensed PMS · Cat-III AIF
            </p>
            <h1 className="font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] tracking-tighter3 text-ink">
              Discipline investing for{" "}
              <span className="italic font-light text-teal-700">long term wealth creation</span>
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-ink/70 leading-relaxed">
              We invest in fundamentally sound, cash-flow-generating Indian businesses run by
              high-quality managements — and stay invested across cycles. Long-horizon
              capital, managed alongside our own.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/strategies"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream rounded-md font-medium hover:bg-teal-700 transition group"
              >
                Explore strategies
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-paper border border-ink/10 rounded-md p-7 shadow-soft animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <p className="smallcaps text-xs text-ink/70">SEBI Registered</p>
              </div>
              <dl className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
                  <dt className="smallcaps text-xs text-ink/60">PMS Reg. No.</dt>
                  <dd className="font-mono text-sm tabular text-ink">{site.legal.sebiPms}</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
                  <dt className="smallcaps text-xs text-ink/60">AIF Reg. No.</dt>
                  <dd className="font-mono text-sm tabular text-ink">{site.legal.sebiAif}</dd>
                </div>
              </dl>
              <div className="mt-6 pt-5 border-t border-ink/10 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-display text-2xl tabular text-teal-700">4P</p>
                  <p className="text-xs text-ink/60 mt-1 smallcaps">Framework</p>
                </div>
                <div>
                  <p className="font-display text-2xl tabular text-teal-700">23+</p>
                  <p className="text-xs text-ink/60 mt-1 smallcaps">Yrs lead PM</p>
                </div>
                <div>
                  <p className="font-display text-2xl tabular text-teal-700">Nil</p>
                  <p className="text-xs text-ink/60 mt-1 smallcaps">Lock-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 hidden lg:flex items-center gap-3 text-sm text-ink/50">
          <span className="smallcaps">Scroll</span>
          <span className="block w-12 h-px bg-ink/30" />
        </div>
      </div>
    </section>
  );
}
