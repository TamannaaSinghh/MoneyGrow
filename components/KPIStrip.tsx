type Kpi = { value: string; label: string; sub?: string };

export function KPIStrip({ items }: { items: Kpi[] }) {
  return (
    <section className="border-y border-ink/10 bg-paper">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink/10">
          {items.map((kpi, i) => (
            <div key={i} className="py-4 lg:py-5 px-4 lg:px-8 first:pl-0 last:pr-0">
              <p className="font-display tabular text-3xl lg:text-5xl tracking-tighter2 text-ink leading-none">
                {kpi.value}
              </p>
              <p className="mt-3 text-base font-medium text-ink/85">{kpi.label}</p>
              {kpi.sub && (
                <p className="mt-1 text-sm text-ink/60 tabular">{kpi.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
