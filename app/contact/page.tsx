import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Talk to a portfolio manager <span className="italic font-light text-teal-700">— directly.</span>
          </>
        }
        intro="Tell us a bit about yourself and what you'd like to discuss. A portfolio manager will get back within one working day."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-paper border border-ink/10 rounded-md p-7">
              <p className="smallcaps text-base text-teal-600 mb-4 font-medium">Office</p>
              <p className="font-display text-xl tracking-tightish leading-snug">
                MoneyGrow Asset Private Limited
              </p>
              <address className="not-italic text-base text-ink/75 leading-relaxed mt-3">
                {site.contact.address}
              </address>
            </div>

            <div className="bg-paper border border-ink/10 rounded-md p-7 space-y-4">
              <div>
                <p className="smallcaps text-xs text-ink/50 mb-1">Phone</p>
                <a href={site.contact.phoneHref} className="font-display text-2xl tabular tracking-tightish text-ink hover:text-teal-700">
                  {site.contact.phone}
                </a>
              </div>
              <div className="hairline" />
              <div>
                <p className="smallcaps text-xs text-ink/50 mb-1">Email</p>
                <a href={site.contact.emailHref} className="font-display text-2xl tracking-tightish text-ink hover:text-teal-700 break-all">
                  {site.contact.email}
                </a>
              </div>
            </div>

            <div className="bg-ink text-cream rounded-md p-7">
              <p className="smallcaps text-base text-gold-300 mb-3 font-medium">Existing investor?</p>
              <ul className="space-y-3 text-base">
                <li>
                  <a href={site.logins.pms} className="link-underline">PMS Login (Kotak Wealthspectrum) →</a>
                </li>
                <li>
                  <a href={site.logins.aif} className="link-underline">AIF Login →</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
