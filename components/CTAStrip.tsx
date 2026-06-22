import Link from "next/link";
import { ReactNode } from "react";

export function CTAStrip({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-6 lg:py-8">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="relative bg-teal-700 text-cream rounded-md overflow-hidden p-8 lg:p-12 grain">
          <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
          <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tighter2">
                {title}
              </h2>
              {body && <p className="mt-6 text-cream/80 max-w-xl text-base lg:text-lg">{body}</p>}
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              {primary && (
                <Link
                  href={primary.href}
                  {...(primary.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cream text-ink rounded-md font-medium hover:bg-gold-300 transition group"
                >
                  {primary.label}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  {...(secondary.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-cream/20 text-cream rounded-md font-medium hover:border-cream/60 transition"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
