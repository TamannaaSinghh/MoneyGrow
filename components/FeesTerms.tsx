import { Eyebrow } from "@/components/Section";
import type { Strategy } from "@/lib/strategies";

export function FeesTerms({ strategy }: { strategy: Strategy }) {
  const t = strategy.terms;
  if (!t) return null;

  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <Eyebrow>Fees & terms</Eyebrow>
        <h2 className="font-display text-4xl lg:text-5xl tracking-tighter2 leading-tight">
          Transparent, <span className="italic font-light text-teal-700">aligned fees</span>.
        </h2>
        <p className="mt-5 text-base text-ink/75 leading-relaxed">
          Pick the fee option that suits you. Performance fees apply only above the
          hurdle — without catch-up, and subject to annual compounding of the hurdle
          and a high-watermark.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-w-md">
          <div>
            <dt className="smallcaps text-xs text-ink/70 mb-1.5">Minimum investment</dt>
            <dd className="font-medium tabular">{t.minInvestment}</dd>
          </div>
          <div>
            <dt className="smallcaps text-xs text-ink/70 mb-1.5">Lock-in</dt>
            <dd className="font-medium tabular">{t.lockIn}</dd>
          </div>
          <div className="col-span-2">
            <dt className="smallcaps text-xs text-ink/70 mb-1.5">Exit load</dt>
            <dd className="font-medium">{t.exitLoad}</dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-7">
        <div className="border border-ink/10 rounded-md overflow-hidden bg-paper">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-ink/10 text-left text-ink/70 text-xs smallcaps">
                <th className="px-5 py-3 font-medium">Fee option</th>
                <th className="px-5 py-3 font-medium">Fixed fee</th>
                <th className="px-5 py-3 font-medium">Hurdle</th>
                <th className="px-5 py-3 font-medium text-right">Performance fee</th>
              </tr>
            </thead>
            <tbody>
              {t.feeOptions.map((f, i) => (
                <tr key={i} className="border-b border-ink/5 last:border-0 hover:bg-mist/40">
                  <td className="px-5 py-4 text-ink font-medium">{f.label}</td>
                  <td className="px-5 py-4 text-ink/80 tabular">{f.fixedFee}</td>
                  <td className="px-5 py-4 text-ink/80 tabular">{f.hurdle}</td>
                  <td className="px-5 py-4 text-right text-teal-700 font-medium tabular">{f.performanceFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-5 py-3 text-sm text-ink/70 border-t border-ink/10 leading-relaxed">
            Plus statutory GST and standard custody, fund-accounting, audit and
            account-opening charges at actuals. The applicable schedule is confirmed
            in your client agreement.
          </p>
        </div>
      </div>
    </div>
  );
}
