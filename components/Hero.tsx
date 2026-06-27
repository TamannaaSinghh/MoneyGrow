import Link from "next/link";
import { getAtAGlanceMetrics } from "@/sanity/lib/atAGlance";

export async function Hero() {
  const metrics = await getAtAGlanceMetrics();
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-16 pb-6 lg:pb-8 grain">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-gold-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 animate-fade-up">
            <h1 className="font-display text-[36px] sm:text-5xl lg:text-[70px] leading-[0.95] tracking-tighter3 text-ink">
              Disciplined investing for{" "}
              <span className="italic font-light text-teal-700">long term wealth creation</span>
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-ink/70 leading-relaxed">
              A professionally run asset manager investing in fundamentally sound, growing businesses led by trustworthy high-quality management teams.
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
              {/* Key metrics */}
              <div className="grid grid-cols-2">
                {metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`px-3 py-4 text-center ${i % 2 === 0 ? "border-r border-ink/10" : ""} ${i < 2 ? "border-b border-ink/10" : ""}`}
                  >
                    <p className="font-display text-3xl tabular text-teal-700 leading-none whitespace-nowrap">
                      {m.value}
                    </p>
                    <p className="text-sm text-ink/65 mt-1.5 smallcaps">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
