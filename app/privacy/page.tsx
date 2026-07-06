import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={<>Privacy policy.</>}
        intro="How we collect, use and safeguard your personal information."
      />
      <Section>
        <article className="max-w-3xl space-y-8 text-ink/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Information we collect</h2>
            <p>
              We collect information you voluntarily provide — such as your name, email, phone
              number, city and message — when you fill out a form, subscribe to our newsletter, or
              engage with our team. We also collect basic technical information (browser, device,
              pages visited) for analytics.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">How we use it</h2>
            <p>
              We use your information to respond to enquiries, send you our newsletter (if you
              subscribed), comply with regulatory obligations, and improve the website. We do not
              sell or rent your information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Cookies</h2>
            <p>
              We use minimal first-party cookies to remember your preferences. We do not run
              third-party advertising trackers. You can disable cookies in your browser settings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Data retention &amp; security</h2>
            <p>
              We retain personal data for as long as needed to deliver services or as required by
              law. We use industry-standard safeguards to protect data in transit and at rest.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at
              any time by writing to{" "}
              <a className="text-teal-700 link-underline" href="mailto:sales@moneygrowindia.com">
                sales@moneygrowindia.com
              </a>
              .
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
