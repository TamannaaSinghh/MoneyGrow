import Link from "next/link";
import { Logo } from "./Logo";
import { SubscribeForm } from "./SubscribeForm";
import { site } from "@/lib/site";

type IconProps = React.SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const BuildingIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...p}>
    <path d="M3 21h18" />
    <path d="M6 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17" />
    <path d="M15 21V9h3a1 1 0 0 1 1 1v11" />
    <path d="M9 7h3M9 11h3M9 15h3" />
  </svg>
);

const MapPinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const PhoneIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...p}>
    <path d="M5 4h3l1.8 4.5-2 1.3a11 11 0 0 0 5 5l1.3-2L19 16v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

const ArrowIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...stroke} {...p}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#D0DED2] text-ink/80 border-t border-[#BCCFBF] mt-4">
      <div className="max-w-container mx-auto px-6 lg:px-10 pt-8 pb-6">
        {/* Subscribe band */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-8 border-b border-ink/10">
          <div className="max-w-xl">
            <p className="smallcaps text-teal-700 text-xs">Newsletter</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 leading-tight text-ink sm:whitespace-nowrap">
              Subscribe to our email.
            </h3>
            <p className="text-sm text-ink/60 mt-3">
              Reflections, monthly — straight to your inbox. Unsubscribe any time.
            </p>
          </div>
          <SubscribeForm />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Brand + registration */}
          <div className="lg:col-span-4 space-y-5">
            <Logo />
            <p className="text-sm text-ink/60 leading-relaxed max-w-sm">
              {site.positioning}
            </p>
            <ul className="text-sm text-ink/60 space-y-1.5 font-mono">
              <li className="flex items-center gap-2">
                <ArrowIcon className="w-3.5 h-3.5 shrink-0 text-teal-600/70" />
                CIN: {site.legal.cin}
              </li>
              <li className="flex items-center gap-2">
                <ArrowIcon className="w-3.5 h-3.5 shrink-0 text-teal-600/70" />
                PMS SEBI Reg. No: {site.legal.sebiPms}
              </li>
              <li className="flex items-center gap-2">
                <ArrowIcon className="w-3.5 h-3.5 shrink-0 text-teal-600/70" />
                AIF SEBI Reg. No: {site.legal.sebiAif}
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <nav className="lg:col-span-2" aria-label="Footer — site">
            <p className="smallcaps text-teal-700 text-xs mb-4">Sitemap</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/investment-offerings/pms" className="link-underline hover:text-teal-700">PMS</Link></li>
              <li><Link href="/investment-offerings/aif" className="link-underline hover:text-teal-700">AIF</Link></li>
              <li><a href={site.documents.marketingPresentation} target="_blank" rel="noreferrer" className="link-underline hover:text-teal-700">Marketing Presentation</a></li>
              <li><Link href="/newsletters" className="link-underline hover:text-teal-700">Newsletters</Link></li>
              <li><Link href="/#team" className="link-underline hover:text-teal-700">Team</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="lg:col-span-2" aria-label="Footer — legal">
            <p className="smallcaps text-teal-700 text-xs mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/disclaimer" className="link-underline hover:text-teal-700">Disclaimer</Link></li>
              <li><Link href="/terms" className="link-underline hover:text-teal-700">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy" className="link-underline hover:text-teal-700">Privacy Policy</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="smallcaps text-teal-700 text-xs mb-4">Get in touch</p>
            <ul className="space-y-3 text-sm text-ink/70">
              <li className="flex items-start gap-2.5">
                <BuildingIcon className="w-4 h-4 mt-0.5 shrink-0 text-ink/40" />
                <span className="text-ink/85">{site.name}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-ink/40" />
                <address className="not-italic leading-relaxed">{site.contact.address}</address>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 shrink-0 text-ink/40" />
                <a href={site.contact.phoneHref} className="link-underline hover:text-teal-700 tabular">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 shrink-0 text-ink/40" />
                <a href={site.contact.emailHref} className="link-underline hover:text-teal-700">
                  {site.contact.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp + Email quick links */}
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-ink/15 text-sm text-ink/80 hover:border-teal-600 hover:text-ink transition"
              >
                <WhatsAppIcon className="w-4 h-4 text-teal-600" />
                WhatsApp
              </a>
              <a
                href={site.contact.emailHref}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-ink/15 text-sm text-ink/80 hover:border-gold-500 hover:text-ink transition"
              >
                <MailIcon className="w-4 h-4 text-gold-600" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Risk disclaimer */}
        <div className="mt-8 pt-6 border-t border-ink/10 grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-ink/60 leading-relaxed">
          <p className="lg:col-span-9">
            Investments in securities are subject to market risks. Past performance is not indicative of future returns.
            Read all scheme-related and offer documents carefully before investing. The information on this website is for
            general purposes only and does not constitute investment advice.
          </p>
          <p className="lg:col-span-3 lg:text-right">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
