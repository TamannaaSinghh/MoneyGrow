"use client";

export function SubscribeForm() {
  return (
    <form
      className="flex w-full max-w-md gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 bg-paper border border-ink/15 rounded-md px-4 py-3 text-base placeholder:text-ink/40 focus:outline-none focus:border-teal-600"
      />
      <button
        type="submit"
        className="px-5 py-3 rounded-md bg-gold-400 text-ink text-sm font-medium hover:bg-gold-300 transition"
      >
        Subscribe
      </button>
    </form>
  );
}
