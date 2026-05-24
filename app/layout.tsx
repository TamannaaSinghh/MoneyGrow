import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-cream focus:px-3 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
