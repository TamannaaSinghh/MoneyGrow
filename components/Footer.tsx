import Link from "next/link";
import { Logo } from "./Logo";
import { SubscribeForm } from "./SubscribeForm";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream/90 mt-4">
      <div className="max-w-container mx-auto px-6 lg:px-10 pt-8 pb-6">
        {/* Subscribe band */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-8 border-b border-cream/10">
          <div className="max-w-xl">
            <p className="smallcaps text-gold-300 text-xs">Newsletter</p>
            <h3 className="font-display text-3xl lg:text-4xl mt-3 leading-tight">
              Reflections, monthly. Straight to your inbox.
            </h3>
            <p className="text-sm text-cream/60 mt-3">
              Subscribe to our mail. Unsubscribe any time.
            </p>
          </div>
          <SubscribeForm />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          <div className="lg:col-span-4 space-y-5">
            <Logo tone="cream" />
            <p className="text-sm text-cream/60 leading-relaxed max-w-sm">
              {site.positioning}
            </p>
            <div className="text-sm text-cream/60 space-y-1 font-mono">
              <div>CIN · {site.legal.cin}</div>
              <div>GSTIN · {site.legal.gstin}</div>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer — site">
            <p className="smallcaps text-gold-300/80 text-xs mb-4">Sitemap</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/investment-offerings/pms" className="link-underline hover:text-cream">PMS</Link></li>
              <li><Link href="/investment-offerings/aif" className="link-underline hover:text-cream">AIF</Link></li>
              <li><a href={site.documents.marketingPresentation} target="_blank" rel="noreferrer" className="link-underline hover:text-cream">Marketing Presentation</a></li>
              <li><Link href="/newsletters" className="link-underline hover:text-cream">Newsletters</Link></li>
              <li><Link href="/team" className="link-underline hover:text-cream">Team</Link></li>
              <li><Link href="/contact" className="link-underline hover:text-cream">Contact</Link></li>
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Footer — regulatory">
            <p className="smallcaps text-gold-300/80 text-xs mb-4">Regulatory &amp; Login</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/disclosures/pms" className="link-underline hover:text-cream">PMS Regulatory Disclosures</Link></li>
              <li><Link href="/disclosures/aif" className="link-underline hover:text-cream">AIF Regulatory Disclosures</Link></li>
              <li><a href={site.logins.pms} target="_blank" rel="noreferrer" className="link-underline hover:text-cream">PMS Client Login</a></li>
              <li><Link href="/login/aif" className="link-underline hover:text-cream">AIF Client Login</Link></li>
              <li><Link href="/disclaimer" className="link-underline hover:text-cream">Disclaimer</Link></li>
              <li><Link href="/privacy" className="link-underline hover:text-cream">Privacy Policy</Link></li>
              <li><Link href="/terms" className="link-underline hover:text-cream">Terms &amp; Conditions</Link></li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="smallcaps text-gold-300/80 text-xs mb-4">Office</p>
            <address className="not-italic text-sm text-cream/70 leading-relaxed">
              {site.contact.address}
            </address>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={site.contact.phoneHref} className="link-underline hover:text-cream tabular">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="link-underline hover:text-cream">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Risk disclaimer */}
        <div className="mt-8 pt-6 border-t border-cream/10 grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-cream/60 leading-relaxed">
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
