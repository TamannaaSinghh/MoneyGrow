"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the site chrome (skip link, sticky header, footer) around page
 * content — except on the embedded Sanity Studio at /studio, which takes
 * over the full viewport on its own.
 */
export function AppShell({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-cream focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      {header}
      <main id="main" className="flex-1">
        {children}
      </main>
      {footer}
    </>
  );
}
