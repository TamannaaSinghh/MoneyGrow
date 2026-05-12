import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs text-teal-600 tabular smallcaps">/404</p>
        <h1 className="font-display text-7xl lg:text-8xl tracking-tighter3 mt-4">
          Not <span className="italic font-light text-teal-700">found.</span>
        </h1>
        <p className="mt-6 text-ink/60">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream rounded-md font-medium hover:bg-teal-700 transition group"
        >
          Back home
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
}
