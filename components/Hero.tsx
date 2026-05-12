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
              Patient capital,
              <br />
              <span className="italic font-light text-teal-700">compounded</span> in
              <br />
              India&rsquo;s best businesses.
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-ink/70 leading-relaxed">
              We invest in fundamentally sound, cash-flow-generating Indian businesses run by
              high-quality managements — and stay invested across cycles. {site.aum.value} of
              long-horizon capital, managed alongside our own.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream rounded-md font-medium hover:bg-teal-700 transition group"
              >
                Talk to us
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/strategies"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/20 text-ink rounded-md font-medium hover:border-ink/60 transition"
              >
                Explore strategies
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-paper border border-ink/10 rounded-md p-7 shadow-soft animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <p className="smallcaps text-xs text-ink/70">AUM Live · Snapshot</p>
              </div>
              <p className="font-display tabular text-6xl tracking-tighter3 text-ink leading-none">
                {site.aum.value}
              </p>
              <p className="text-sm text-ink/60 mt-3 tabular">
                Total AUM · as on {site.aum.asOn}
              </p>
              <div className="mt-6 pt-5 border-t border-ink/10 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-display text-2xl tabular text-teal-700">3</p>
                  <p className="text-xs text-ink/60 mt-1 smallcaps">PMS strats</p>
                </div>
                <div>
                  <p className="font-display text-2xl tabular text-teal-700">1</p>
                  <p className="text-xs text-ink/60 mt-1 smallcaps">Cat-III AIF</p>
                </div>
                <div>
                  <p className="font-display text-2xl tabular text-teal-700">23+</p>
                  <p className="text-xs text-ink/60 mt-1 smallcaps">Yrs lead PM</p>
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
