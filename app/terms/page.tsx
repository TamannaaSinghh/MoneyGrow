import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={<>Terms &amp; conditions.</>}
        intro="The rules governing your use of moneygrowindia.com."
      />
      <Section>
        <article className="max-w-3xl space-y-8 text-ink/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Acceptance</h2>
            <p>
              By accessing this website you agree to be bound by these Terms &amp; Conditions, our
              Disclaimer and our Privacy Policy. If you do not agree, please do not use this
              website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">No advice</h2>
            <p>
              Nothing on this website constitutes investment, legal, accounting or tax advice.
              Always consult a qualified professional before making any financial decision.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Intellectual property</h2>
            <p>
              All content is owned by MoneyGrow Asset Private Limited or its licensors. You may
              view and print pages for personal, non-commercial use only.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, MoneyGrow shall not be liable for any direct,
              indirect, incidental or consequential losses arising from your use of this website
              or reliance on its content.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tightish mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts in Mumbai.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
