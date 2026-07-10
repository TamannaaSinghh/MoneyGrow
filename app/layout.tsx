import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
