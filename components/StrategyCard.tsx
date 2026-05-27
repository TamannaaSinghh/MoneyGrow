import Link from "next/link";
import type { Strategy } from "@/lib/strategies";

const Arrow = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    className="text-teal-600 group-hover:translate-x-1 transition-transform"
    aria-hidden
  >
    <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function StrategyCard({
  strategy,
  index,
  wide = false,
}: {
  strategy: Strategy;
  index: number;
  wide?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  const href =
    strategy.category === "PMS"
      ? `/investment-offerings/pms/strategies/${strategy.slug}`
      : `/strategies/${strategy.slug}`;

  const meta = (
    <dl className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <dt className="text-ink/50 mb-1 smallcaps text-xs">Cap mix</dt>
        <dd className="text-ink/85 font-medium">{strategy.marketCap}</dd>
      </div>
      <div>
        <dt className="text-ink/50 mb-1 smallcaps text-xs">Horizon</dt>
        <dd className="text-ink/85 font-medium tabular">{strategy.horizon}</dd>
      </div>
    </dl>
  );

  const cta = (
    <div className="flex items-center justify-between">
      <span className="text-base font-medium text-teal-600 group-hover:translate-x-1 transition-transform">
        View strategy
      </span>
      <Arrow />
    </div>
  );

  if (wide) {
    return (
      <Link
        href={href}
        className="group block bg-paper border border-ink/10 rounded-md p-8 lg:p-10 hover:border-teal-600 hover:shadow-soft hover:-translate-y-0.5 transition-all relative overflow-hidden"
      >
        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-ink/50 tabular">/ {num}</span>
              <span className="text-xs smallcaps text-teal-600 bg-teal-50 px-2.5 py-1 rounded">
                {strategy.category}
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl leading-tight tracking-tightish text-ink mt-5">
              {strategy.name}
            </h3>
            <p className="mt-4 text-base text-ink/75 leading-relaxed max-w-2xl">
              {strategy.pitch}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 lg:border-l lg:border-ink/10 lg:pl-10">
            {meta}
            {cta}
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 rounded-full bg-gold-100/30 group-hover:bg-gold-100/60 transition-all blur-2xl pointer-events-none" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-paper border border-ink/10 rounded-md p-8 hover:border-teal-600 hover:shadow-soft hover:-translate-y-0.5 transition-all relative overflow-hidden"
    >
      <div className="flex-1">
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

        <div className="mt-8">{meta}</div>
      </div>

      <div className="mt-8 pt-6 border-t border-ink/5">{cta}</div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold-100/30 group-hover:bg-gold-100/60 transition-all blur-2xl pointer-events-none" />
    </Link>
  );
}
