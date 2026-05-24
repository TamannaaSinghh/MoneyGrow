type Kpi = { value: string; label: string; sub?: string };

export function KPIStrip({ items, dataHref }: { items: Kpi[]; dataHref?: string }) {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-3 lg:py-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 lg:flex lg:flex-1 lg:items-baseline lg:divide-x lg:divide-ink/10">
            {items.map((kpi, i) => (
              <div key={i} className="lg:px-7 first:lg:pl-0">
                <p className="flex items-baseline gap-1.5">
                  <span className="font-display tabular text-2xl lg:text-3xl tracking-tighter2 text-ink leading-none">
                    {kpi.value}
                  </span>
                </p>
                <p className="mt-1.5 text-[11px] lg:text-xs smallcaps text-ink/55 leading-tight">
                  {kpi.label}
                  {kpi.sub ? <span className="text-ink/40"> · {kpi.sub}</span> : null}
                </p>
              </div>
            ))}
          </div>

          {dataHref && (
            <a
              href={dataHref}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 lg:ml-8 lg:pl-8 lg:border-l lg:border-ink/10 text-sm font-medium text-teal-600 hover:text-teal-700 transition"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M12 3v12m0 0-4-4m4 4 4-4" />
                <path d="M5 21h14" />
              </svg>
              Download data sheet
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
