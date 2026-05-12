import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata = { title: "AIF Client Login" };

export default function AifLoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client area · AIF"
        title={
          <>
            AIF Client{" "}
            <span className="italic font-light text-teal-700">Login.</span>
          </>
        }
        intro="Investors in MoneyGrow Alpha Fund I — access fund statements, capital calls and distributions."
      />

      <Section>
        <div className="max-w-xl">
          <div className="bg-ink text-cream rounded-md p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />
            <p className="font-mono text-sm text-gold-300/80 tabular">/AIF</p>
            <h2 className="font-display text-4xl mt-4 tracking-tighter2 leading-tight">
              Sign in
            </h2>
            <p className="mt-4 text-cream/70 text-base">
              The AIF investor portal is rolling out shortly. In the meantime,
              please email us for statements and reports.
            </p>
            <a
              href={site.contact.emailHref}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-gold-400 text-ink rounded-md font-medium hover:bg-gold-300 transition"
            >
              Request statements →
            </a>
          </div>

          <p className="mt-10 text-sm text-ink/60 max-w-2xl leading-relaxed">
            Trouble signing in? Email{" "}
            <a className="text-teal-600 link-underline" href="mailto:sales@moneygrowindia.com">
              sales@moneygrowindia.com
            </a>{" "}
            or call <span className="tabular">{site.contact.phone}</span>.
          </p>
        </div>
      </Section>
    </>
  );
}
