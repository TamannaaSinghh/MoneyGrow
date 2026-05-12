import Link from "next/link";

export function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const color = tone === "cream" ? "text-cream" : "text-ink";
  const accent = tone === "cream" ? "text-gold-300" : "text-teal-600";
  return (
    <Link href="/" className={`flex items-center gap-2 group ${color}`} aria-label="MoneyGrow India home">
      <span className="relative grid place-items-center w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
          <path
            d="M8 22 L8 11 L13 17 L16 13 L19 17 L24 11 L24 22"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={accent}
          />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" className={accent} />
        </svg>
      </span>
      <span className="font-display text-[20px] font-medium tracking-tightish">
        MoneyGrow<span className={accent}>.</span>
      </span>
    </Link>
  );
}
