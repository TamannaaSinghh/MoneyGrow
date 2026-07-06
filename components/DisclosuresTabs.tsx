"use client";

import { useState } from "react";

type Doc = { title: string; file?: string; label: string };

const docs: Record<"pms" | "aif", Doc[]> = {
  pms: [
    { title: "PMS Disclosure Document", file: "PMS Disclosure Doc.pdf", label: "PDF · 0.9 MB" },
    { title: "PMS Investor Charter", file: "PMS-Investor-Charter.pdf", label: "PDF · 177 KB" },
    {
      title: "PMS Investor Education (Prevention of Anti-Money Laundering)",
      file: "PMS-Investor-Education-PMLA.pdf",
      label: "PDF · 146 KB",
    },
    { title: "PMS Fee Calculation Tool", file: "Fee-Illustration-Tool.xlsx", label: "XLSX · 95 KB" },
    {
      title: "PMS Grievance Redressal Policy",
      file: "PMS-Investor-Grievance-Redressal.pdf",
      label: "PDF · 147 KB",
    },
    {
      title: "PMS Investor Complaints Table",
      file: "2026-05-31-PMS-SEBI-Complaints.pdf",
      label: "PDF · 126 KB",
    },
    {
      title: "SEBI Master Circular for Online Resolution of Disputes",
      file: "SEBI-Updated-Master-Circular-on-Online-Dispute-Resolution.pdf",
      label: "PDF · 539 KB",
    },
  ],
  aif: [
    { title: "AIF Private Placement Memorandum", label: "PDF · < 2 MB" },
    { title: "Investor Charter — AIF", label: "PDF · < 2 MB" },
    { title: "Statement of Complaints — AIF", label: "PDF · < 2 MB" },
    { title: "Grievance Redressal Policy — AIF", label: "PDF · < 2 MB" },
    { title: "Annual Compliance Report — AIF", label: "PDF · < 2 MB" },
    { title: "Risk Management Policy", label: "PDF · < 2 MB" },
  ],
};

export function DisclosuresTabs() {
  const [tab, setTab] = useState<"pms" | "aif">("pms");

  return (
    <>
      <div className="flex items-center gap-2 mb-10 border-b border-ink/15">
        {(["pms", "aif"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-4 text-sm font-medium transition relative ${
              tab === t ? "text-ink" : "text-ink/40 hover:text-ink/70"
            }`}
            aria-pressed={tab === t}
          >
            {t === "pms" ? "PMS" : "AIF"}
            {tab === t && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />
            )}
          </button>
        ))}
        <p className="ml-auto text-xs text-ink/70 hidden lg:block">
          Last reviewed · {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>
      </div>

      <div id={tab} className="border border-ink/10 rounded-md overflow-hidden bg-paper">
        {docs[tab].map((d) => {
          const isPdf = d.file?.toLowerCase().endsWith(".pdf");
          return (
          <a
            key={d.title}
            href={d.file ? `/${encodeURIComponent(d.file)}` : "#"}
            {...(d.file
              ? isPdf
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { download: d.file }
              : {})}
            className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-ink/5 last:border-0 hover:bg-mist/60 transition group items-center"
          >
            <span className="col-span-1 flex items-center">
              <span className="inline-block w-2 h-2 rotate-45 bg-teal-600/70" aria-hidden />
            </span>
            <span className="col-span-7 lg:col-span-8 font-medium text-ink">{d.title}</span>
            <span className="col-span-3 lg:col-span-2 text-xs text-ink/70 tabular hidden lg:block">
              {d.label}
            </span>
            <span className="col-span-1 text-right text-teal-700 group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>
          );
        })}
      </div>
    </>
  );
}
