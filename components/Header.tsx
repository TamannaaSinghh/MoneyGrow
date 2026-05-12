"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-ink/10">
      <div className="max-w-container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-base font-medium text-ink/80 hover:text-teal-600 transition flex items-center gap-1"
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-60">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="bg-paper border border-ink/10 rounded-md shadow-soft min-w-[260px] py-2">
                    {item.children.map((c) =>
                      c.external ? (
                        <a
                          key={c.href}
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block px-4 py-2.5 text-sm text-ink/80 hover:text-teal-600 hover:bg-mist transition"
                        >
                          {c.label}
                        </a>
                      ) : (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 text-sm text-ink/80 hover:text-teal-600 hover:bg-mist transition"
                        >
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-ink/80 hover:text-teal-600 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-base font-medium px-4 py-2 rounded-md bg-ink text-cream hover:bg-teal-700 transition"
          >
            Talk to us
          </Link>
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
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-ink/5 last:border-0">
                  <button
                    onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium"
                    aria-expanded={mobileSub === item.label}
                  >
                    {item.label}
                    <span className="text-ink/40">{mobileSub === item.label ? "−" : "+"}</span>
                  </button>
                  {mobileSub === item.label && (
                    <div className="pb-3 pl-4 flex flex-col gap-2">
                      <Link href={item.href} onClick={() => setOpen(false)} className="text-sm text-ink/70 py-1">
                        Overview
                      </Link>
                      {item.children.map((c) =>
                        c.external ? (
                          <a
                            key={c.href}
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setOpen(false)}
                            className="text-sm text-ink/70 py-1"
                          >
                            {c.label}
                          </a>
                        ) : (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="text-sm text-ink/70 py-1"
                          >
                            {c.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium border-b border-ink/5 last:border-0"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 pt-5">
              <Link
                href="/contact"
                className="text-base font-medium text-center px-4 py-2.5 rounded-md bg-ink text-cream"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
