"use client";

export function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-6">
        <Field id="name" label="Name" required />
        <Field id="email" label="Email" type="email" required />
        <Field id="phone" label="Phone" type="tel" />
        <Field id="city" label="City" />
      </div>

      <div>
        <label htmlFor="interest" className="block smallcaps text-xs text-ink/70 mb-2">
          Interested in
        </label>
        <select
          id="interest"
          className="w-full bg-paper border border-ink/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-teal-600"
        >
          <option>PMS — Flexicap</option>
          <option>PMS — Small &amp; Midcap</option>
          <option>PMS — Blend</option>
          <option>AIF — Alpha Fund I</option>
          <option>Not sure yet — recommend</option>
        </select>
      </div>

      <Field
        id="message"
        label="Message"
        textarea
        placeholder="Investment horizon, ticket size, any specific questions…"
      />

      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" className="mt-1 accent-teal-600" />
        <label htmlFor="consent" className="text-sm text-ink/70 leading-relaxed">
          I authorise MoneyGrow Asset Private Limited to contact me by phone or email. I have read
          the <a href="/privacy" className="link-underline text-teal-600">privacy policy</a>.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream rounded-md font-medium hover:bg-teal-700 transition group"
      >
        Send message
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  textarea,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block smallcaps text-xs text-ink/70 mb-2">
        {label}
        {required && <span className="text-teal-600">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          className="w-full bg-paper border border-ink/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-teal-600 placeholder:text-ink/30 resize-y"
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full bg-paper border border-ink/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-teal-600 placeholder:text-ink/30"
        />
      )}
    </div>
  );
}
