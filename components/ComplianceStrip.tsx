import { site } from "@/lib/site";

export function ComplianceStrip() {
  return (
    <div className="border-y border-ink/10 bg-mist/60">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-4 flex flex-col lg:flex-row gap-3 lg:gap-8 items-start lg:items-center text-sm text-ink/70">
        <span className="smallcaps text-ink/90 text-base font-semibold">SEBI Registered</span>
        <span className="hidden lg:inline-block w-px h-4 bg-ink/15" />
        <span>PMS — Portfolio Management Service</span>
        <span className="hidden lg:inline-block w-px h-4 bg-ink/15" />
        <span>AIF — Investment Manager to MoneyGrow Alpha Fund I (Cat-III)</span>
        <span className="hidden lg:inline-block w-px h-4 bg-ink/15" />
        <span className="font-mono tabular">CIN {site.legal.cin}</span>
      </div>
    </div>
  );
}
