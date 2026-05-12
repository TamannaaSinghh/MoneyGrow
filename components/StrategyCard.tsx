import Link from "next/link";
import type { Strategy } from "@/lib/strategies";

export function StrategyCard({ strategy, index }: { strategy: Strategy; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Link
      href={`/strategies/${strategy.slug}`}
      className="group block bg-paper border border-ink/10 rounded-md p-8 hover:border-teal-600 hover:shadow-soft transition-all relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-8">
        <span className="font-mono text-sm text-ink/50 tabular">/ {num}</span>
        <span className="text-xs smallcaps text-teal-600 bg-teal-50 px-2.5 py-1 rounded">
          {strategy.category}
        </span>
      </div>

      <h3 className="font-display text-3xl lg:text-4xl leading-tight tracking-tightish text-ink">
        {strategy.name}
      </h3>

      <p className="mt-5 text-base text-ink/75 leading-relaxed line-clamp-3">
        {strategy.pitch}
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-ink/50 mb-1 smallcaps text-xs">Cap mix</dt>
          <dd className="text-ink/85 font-medium">{strategy.marketCap}</dd>
        </div>
        <div>
          <dt className="text-ink/50 mb-1 smallcaps text-xs">Horizon</dt>
          <dd className="text-ink/85 font-medium tabular">{strategy.horizon}</dd>
        </div>
      </dl>

      <div className="mt-8 pt-6 border-t border-ink/5 flex items-center justify-between">
        <span className="text-base font-medium text-teal-600 group-hover:translate-x-1 transition-transform">
          View strategy
        </span>
        <svg width="20" height="14" viewBox="0 0 20 14" className="text-teal-600 group-hover:translate-x-1 transition-transform" aria-hidden>
          <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold-100/30 group-hover:bg-gold-100/60 transition-all blur-2xl pointer-events-none" />
    </Link>
  );
}
