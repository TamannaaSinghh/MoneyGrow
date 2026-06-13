import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-16 pb-6 lg:pb-8 grain">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 animate-fade-up">
            <h1 className="font-display text-[36px] sm:text-5xl lg:text-[70px] leading-[0.95] tracking-tighter3 text-ink">
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
                href="/investment-offerings/pms"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 text-cream rounded-md font-medium hover:bg-teal-800 transition group"
              >
                Explore PMS
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/investment-offerings/aif"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-teal-600/40 text-teal-700 rounded-md font-medium hover:bg-teal-50 hover:border-teal-600 transition group"
              >
                Explore AIF
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

      </div>
    </section>
  );
}
