"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setMessage(
          data.already
            ? "You’re already on the list — thank you."
            : data.status === "pending"
            ? "Almost there — check your inbox to confirm."
            : "You’re in. Watch your inbox for the next letter."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const isLoading = status === "loading";

  return (
    <div className="w-full max-w-md">
      <form className="flex w-full gap-2.5" onSubmit={onSubmit} noValidate>
        <label htmlFor="footer-email" className="sr-only">
          Email
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          disabled={isLoading || status === "success"}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          aria-invalid={status === "error"}
          className="flex-1 bg-paper border border-ink/15 rounded-md px-4 py-3 text-base text-ink placeholder:text-ink/40 shadow-sm transition-colors focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isLoading || status === "success"}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-cream shadow-soft transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Spinner />
              Subscribing…
            </>
          ) : status === "success" ? (
            "Subscribed ✓"
          ) : (
            <>
              Subscribe
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </>
          )}
        </button>
      </form>

      <p
        aria-live="polite"
        className={`mt-2.5 min-h-[1.25rem] text-sm ${
          status === "error"
            ? "text-red-700"
            : status === "success"
            ? "text-teal-700"
            : "text-transparent"
        }`}
      >
        {message || " "}
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-90"
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
