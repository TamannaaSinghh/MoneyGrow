import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata = { title: "Client Login" };

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client area"
        title={
          <>
            Welcome back. <span className="italic font-light text-teal-700">Sign in.</span>
          </>
        }
        intro="Choose your portal. PMS investors access through Kotak Wealthspectrum. AIF investors use the dedicated AIF login."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href={site.logins.pms}
            target="_blank"
            rel="noreferrer"
            className="group block bg-paper border border-ink/10 rounded-md p-10 lg:p-12 hover:border-teal-600 hover:shadow-soft transition relative overflow-hidden"
          >
            <p className="font-mono text-xs text-teal-700 tabular">/PMS</p>
            <h2 className="font-display text-4xl mt-4 tracking-tighter2 leading-tight">
              PMS Login
            </h2>
            <p className="mt-4 text-ink/70 text-sm">
              Hosted by Kotak Wealthspectrum. Access portfolio statements, transactions and reports.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              Open Wealthspectrum →
            </span>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-teal-50 group-hover:bg-gold-100/60 transition pointer-events-none" />
          </a>

          <a
            href="#"
            className="group block bg-mist border border-ink/10 text-ink rounded-md p-10 lg:p-12 hover:border-teal-600 hover:bg-cream transition relative overflow-hidden"
          >
            <p className="font-mono text-xs text-gold-600 tabular">/AIF</p>
            <h2 className="font-display text-4xl mt-4 tracking-tighter2 leading-tight">
              AIF Login
            </h2>
            <p className="mt-4 text-ink/70 text-sm">
              Investors in MoneyGrow Alpha Fund I — access fund statements, capital calls and
              distributions.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              Continue →
            </span>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gold-400/15 blur-2xl pointer-events-none" />
          </a>
        </div>

        <p className="mt-12 text-xs text-ink/70 max-w-2xl leading-relaxed">
          Trouble signing in? Email{" "}
          <a className="text-teal-700 link-underline" href="mailto:sales@moneygrowindia.com">
            sales@moneygrowindia.com
          </a>{" "}
          or call <span className="tabular">{site.contact.phone}</span>.
        </p>
      </Section>
    </>
  );
}
