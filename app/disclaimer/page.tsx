import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={<>Disclaimer.</>}
        intro="Please read carefully before using this website or engaging with any of our services."
      />
      <Section>
        <article className="prose-content max-w-3xl space-y-6 text-ink/80 leading-relaxed">
          <p>
            The information on this website is provided by MoneyGrow Asset Private Limited
            (&ldquo;MoneyGrow&rdquo;) for general informational purposes only. Nothing on this
            website constitutes investment advice, an offer to sell, or a solicitation to buy any
            securities or financial instruments.
          </p>
          <p>
            Investments in securities are subject to market risks. Read all scheme-related and
            offer documents carefully before investing. Past performance is not necessarily
            indicative of future returns and is not guaranteed. There is no assurance that the
            investment objectives of any strategy will be achieved.
          </p>
          <p>
            MoneyGrow is registered with the Securities and Exchange Board of India (SEBI) as a
            Portfolio Manager and as the Investment Manager to the MoneyGrow AIF Trust for
            MoneyGrow Alpha Fund I (Cat-III AIF). Registration does not imply that SEBI guarantees
            the performance of any strategy or fund.
          </p>
          <p>
            All content on this website — including text, graphics, logos and the underlying
            design — is the intellectual property of MoneyGrow and is protected under applicable
            copyright laws. Unauthorised use, reproduction or distribution is strictly prohibited.
          </p>
          <p>
            Links to third-party sites (including Kotak Wealthspectrum) are provided for
            convenience only. MoneyGrow is not responsible for the content, security or privacy
            practices of those sites.
          </p>
          <p>
            By using this website you agree to the terms of this disclaimer. If you do not agree,
            please do not use the website.
          </p>
        </article>
      </Section>
    </>
  );
}
