"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const PresentationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M3 4h18" />
    <rect x="4" y="4" width="16" height="11" rx="1.5" />
    <path d="M12 15v4m0 0-3 2m3-2 3 2" />
    <path d="M8.5 11.5 11 9l2 2 2.5-3" />
  </svg>
);

const iconLinks = [
  {
    label: "Marketing Presentation",
    short: "Marketing Presentation",
    href: site.documents.marketingPresentation,
    Icon: PresentationIcon,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const isActive = useIsActive();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-ink/10">
      <div className="max-w-container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative text-base font-medium transition hover:text-teal-600 ${
                  active ? "text-teal-700" : "text-ink/80"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1.5 h-0.5 rounded-full bg-teal-600 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {iconLinks.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-ink text-cream text-sm font-medium hover:bg-teal-700 transition"
            >
              <Icon className="w-5 h-5" />
              {label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden grid place-items-center w-10 h-10 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-px bg-ink relative before:content-[''] before:absolute before:w-5 before:h-px before:bg-ink before:-top-1.5 after:content-[''] after:absolute after:w-5 after:h-px after:bg-ink after:top-1.5" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-cream">
          <div className="max-w-container mx-auto px-6 py-4 flex flex-col">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2.5 py-3 text-base font-medium border-b border-ink/5 transition ${
                    active ? "text-teal-700" : "text-ink/80"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-teal-600 transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-5">
              {iconLinks.map(({ label, short, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-ink/80 bg-mist hover:text-teal-600 transition"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{short}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
