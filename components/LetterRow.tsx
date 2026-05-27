import type { Letter } from "@/lib/newsletters";

export function LetterRow({ letter }: { letter: Letter }) {
  return (
    <a
      href={letter.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-5 sm:gap-7 lg:gap-9 py-6 border-b border-ink/10 transition-colors hover:bg-mist/70"
    >
      {/* Cover / image */}
      <div className="relative shrink-0 w-24 sm:w-28 lg:w-36 aspect-square rounded-md overflow-hidden bg-ink grain">
        {letter.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={letter.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-teal-500/30 blur-2xl transition-colors group-hover:bg-gold-400/50" />
            <div className="relative flex h-full flex-col justify-between p-3.5">
              <span className="font-mono text-[11px] text-cream/55 tabular">
                /{String(letter.serial).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display text-2xl lg:text-3xl leading-none tracking-tight text-cream">
                  {letter.monthShort}
                </p>
                <p className="mt-1.5 font-mono text-xs text-gold-300 tabular">
                  {letter.year}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3 text-xs">
          <span className="smallcaps font-medium text-teal-600">Reflections</span>
          <span className="h-1 w-1 rounded-full bg-ink/20" />
          <span className="font-mono tabular text-ink/55">{letter.dateLabel}</span>
        </div>
        <h3 className="mt-2 font-display text-2xl lg:text-3xl tracking-tightish text-ink transition-colors group-hover:text-teal-700">
          {letter.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm lg:text-base leading-relaxed text-ink/65 line-clamp-2">
          {letter.blurb}
        </p>
      </div>

      {/* Action */}
      <div className="hidden shrink-0 items-center gap-3 self-center pr-1 text-teal-600 sm:flex">
        <span className="hidden font-medium lg:inline">Read letter</span>
        <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:text-cream">
          →
        </span>
      </div>
    </a>
  );
}
