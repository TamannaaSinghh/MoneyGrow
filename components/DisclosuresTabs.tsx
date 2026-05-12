"use client";

import { useState } from "react";

const docs = {
  pms: [
    "PMS Disclosure Document",
    "PMS Quarterly Disclosure",
    "Form C — Statement of complaints",
    "Investor Charter — PMS",
    "Grievance Redressal Policy",
    "Code of Conduct — PMS",
    "Conflict of Interest Policy",
    "SEBI Circulars Compliance",
  ],
  aif: [
    "AIF Private Placement Memorandum",
    "Investor Charter — AIF",
    "Statement of Complaints — AIF",
    "Grievance Redressal Policy — AIF",
    "Annual Compliance Report — AIF",
    "Risk Management Policy",
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
        <p className="ml-auto text-xs text-ink/50 hidden lg:block">
          Last reviewed · {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>
      </div>

      <div id={tab} className="border border-ink/10 rounded-md overflow-hidden bg-paper">
        {docs[tab].map((d, i) => (
          <a
            key={d}
            href="#"
            className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-ink/5 last:border-0 hover:bg-mist/60 transition group items-center"
          >
            <span className="col-span-1 font-mono text-xs text-ink/40 tabular">
              /{String(i + 1).padStart(2, "0")}
            </span>
            <span className="col-span-7 lg:col-span-8 font-medium text-ink">{d}</span>
            <span className="col-span-3 lg:col-span-2 text-xs text-ink/50 tabular hidden lg:block">
              PDF · &lt; 2 MB
            </span>
            <span className="col-span-1 text-right text-teal-600 group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
