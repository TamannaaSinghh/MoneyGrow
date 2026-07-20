import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppShell } from "@/components/AppShell";
import { getMarketingPresentation } from "@/sanity/lib/marketingPresentation";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moneygrowindia.com"),
  title: {
    default: "MoneyGrow India — SEBI-licensed PMS & Cat-III AIF",
    template: "%s · MoneyGrow India",
  },
  description:
    "MoneyGrow Asset is a SEBI-licensed Portfolio Management Service and Investment Manager to MoneyGrow Alpha Fund I (Cat-III AIF). Long-horizon investing in fundamentally sound Indian businesses.",
  openGraph: {
    title: "MoneyGrow India — SEBI-licensed PMS & Cat-III AIF",
    description:
      "Long-horizon investing in fundamentally sound Indian businesses.",
    url: "https://moneygrowindia.com",
    siteName: "MoneyGrow India",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/* EnableStack accessibility widget. The config must exist on `window` before
   the widget script runs, so it ships as a beforeInteractive script; the
   widget itself loads afterInteractive so it never blocks first paint.
   Runtime config takes precedence over the colour baked into the bundle. */
const ENABLESTACK_CONFIG = {
  colors: { primary: "#166E41" }, // teal-700 — matches the site's CTAs
  icon: "default",
  widgetPosition: { side: "right" },
  accessibilityStatementUrl: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const marketingPresentation = await getMarketingPresentation();
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <AppShell
          header={
            <div className="sticky top-0 z-40">
              <TopBar />
              <Header marketingPresentation={marketingPresentation} />
            </div>
          }
          footer={<Footer marketingPresentation={marketingPresentation} />}
        >
          {children}
        </AppShell>

        <Script
          id="enablestack-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.ENABLESTACK_CONFIG=${JSON.stringify(ENABLESTACK_CONFIG)};`,
          }}
        />
        <Script src="/enablestack-widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
