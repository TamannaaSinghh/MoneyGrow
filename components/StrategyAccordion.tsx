"use client";

import { useState } from "react";
import { FourPGrid } from "@/components/FourPGrid";
import { FeesTerms } from "@/components/FeesTerms";
import { Eyebrow } from "@/components/Section";
import type { Strategy } from "@/lib/strategies";

export function StrategyAccordion({
  strategy: s,
  defaultOpen = false,
}: {
  strategy: Strategy;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `strategy-panel-${s.slug}`;

  return (
    <div className="border border-ink/10 rounded-md bg-paper overflow-hidden">
      {/* Header — click to expand */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-6 text-left px-6 lg:px-9 py-7 hover:bg-mist/40 transition"
      >
        <div>
          <p className="smallcaps text-xs text-teal-600 font-medium mb-2">
            {s.category} · Strategy
          </p>
          <h2 className="font-display text-3xl lg:text-4xl tracking-tighter2 leading-tight">
            {s.name}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ink/70 leading-relaxed">
            {s.pitch}
          </p>
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <dt className="smallcaps text-[11px] text-ink/50">Cap mix</dt>
              <dd className="font-medium tabular text-sm">{s.marketCap}</dd>
            </div>
            <div>
              <dt className="smallcaps text-[11px] text-ink/50">Horizon</dt>
              <dd className="font-medium tabular text-sm">{s.horizon}</dd>
            </div>
            <div>
              <dt className="smallcaps text-[11px] text-ink/50">Benchmark</dt>
              <dd className="font-medium text-sm">{s.benchmark}</dd>
            </div>
          </dl>
        </div>
        <span
          className={`shrink-0 grid place-items-center w-11 h-11 rounded-full border transition-all ${
            open
              ? "rotate-180 bg-teal-50 border-teal-200 text-teal-700"
              : "border-ink/15 text-ink/60"
          }`}
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Expandable details */}
      {open && (
        <div
          id={panelId}
          className="border-t border-ink/10 px-6 lg:px-9 py-9 lg:py-11 space-y-12 animate-fade-up"
        >
          <p className="max-w-3xl text-base lg:text-lg text-ink/75 leading-relaxed">
            {s.longPitch}
          </p>

          {/* Why this strategy */}
          <div>
            <Eyebrow>Why {s.name}</Eyebrow>
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              {s.whyPoints.map((w) => (
                <div
                  key={w.title}
                  className="bg-mist/50 border border-ink/10 rounded-md p-6"
                >
                  <span className="inline-block w-2 h-2 rotate-45 bg-teal-600" aria-hidden />
                  <h3 className="font-display text-xl lg:text-2xl mt-3 tracking-tightish">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm lg:text-base text-ink/70 leading-relaxed">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment philosophy / 4P */}
          <div>
            <Eyebrow>Investment philosophy</Eyebrow>
            <div className="mt-6">
              <FourPGrid items={s.philosophy} />
            </div>
          </div>

          {/* Emerging themes (if any) */}
          {s.emergingThemes && (
            <div>
              <Eyebrow>Emerging themes</Eyebrow>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.emergingThemes.map((t) => (
                  <li
                    key={t}
                    className="border border-ink/10 rounded-md px-5 py-4 text-base flex items-center gap-3 bg-mist/40"
                  >
                    <span className="font-mono text-sm text-teal-600 tabular">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fees & terms */}
          {s.terms && <FeesTerms strategy={s} />}
        </div>
      )}
    </div>
  );
}
