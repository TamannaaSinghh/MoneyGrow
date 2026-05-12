type Row = { period: string; strategy: string; benchmark: string; alpha: string };

export function PerformanceTable({
  rows,
  asOn,
  benchmarkLabel,
  strategyLabel,
}: {
  rows: Row[];
  asOn: string;
  benchmarkLabel: string;
  strategyLabel: string;
}) {
  return (
    <div className="border border-ink/10 rounded-md overflow-hidden bg-paper">
      <div className="px-6 py-4 border-b border-ink/10 flex items-center justify-between text-sm">
        <p className="smallcaps text-ink/70">Indicative performance</p>
        <p className="text-ink/60 tabular">As on {asOn}</p>
      </div>
      <table className="w-full text-base tabular">
        <thead>
          <tr className="border-b border-ink/10 text-left text-ink/60 text-xs smallcaps">
            <th className="px-6 py-3 font-medium">Period</th>
            <th className="px-6 py-3 font-medium">{strategyLabel}</th>
            <th className="px-6 py-3 font-medium">{benchmarkLabel}</th>
            <th className="px-6 py-3 font-medium text-right">Alpha</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-ink/5 last:border-0 hover:bg-mist/40">
              <td className="px-6 py-4 text-ink/80 font-medium">{r.period}</td>
              <td className="px-6 py-4 text-ink">{r.strategy}</td>
              <td className="px-6 py-4 text-ink/60">{r.benchmark}</td>
              <td className="px-6 py-4 text-right text-teal-600 font-medium">{r.alpha}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-6 py-3 text-sm text-ink/60 border-t border-ink/10 leading-relaxed">
        Past performance is not indicative of future returns. Returns above 1 year are CAGR; below 1 year are absolute. Net of fees and taxes are subject to investor-specific calculations.
      </p>
    </div>
  );
}
