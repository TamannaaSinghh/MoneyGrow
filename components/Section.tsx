import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-6 lg:py-8 ${className}`}>
      <div className="max-w-container mx-auto px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="smallcaps text-lg text-teal-700 mb-4 flex items-center gap-3 font-medium">
      <span className="inline-block w-8 h-px bg-teal-600/60" />
      {children}
    </p>
  );
}

export function SectionTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="max-w-3xl">
      {kicker && <Eyebrow>{kicker}</Eyebrow>}
      <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tighter2">
        {children}
      </h2>
    </div>
  );
}
