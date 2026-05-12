import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-8 lg:pt-10 pb-6 lg:pb-8 grain border-b border-ink/10">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />
      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        {eyebrow && (
          <p className="smallcaps text-lg text-teal-600 mb-5 flex items-center gap-3 font-medium">
            <span className="inline-block w-8 h-px bg-teal-600/60" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-5xl lg:text-7xl leading-[0.98] tracking-tighter3 max-w-4xl">
          {title}
        </h1>
        {intro && (
          <div className="mt-8 max-w-2xl text-base lg:text-lg text-ink/75 leading-relaxed">
            {intro}
          </div>
        )}
        {meta && <div className="mt-10">{meta}</div>}
      </div>
    </section>
  );
}
