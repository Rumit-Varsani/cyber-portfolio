import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rumitvarsani.vercel.app"),
  title: {
    default: translations.de.meta.title,
    template: "%s | Rumit Varsani",
  },
  description: translations.de.meta.description,
  keywords: [
    "Cybersecurity",
    "Networking",
    "IT Security",
    "Berlin",
    "Germany",
    "Rumit Varsani",
  ],
  authors: [{ name: "Rumit Varsani" }],
  openGraph: {
    title: translations.de.meta.title,
    description: translations.de.meta.description,
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
    url: "https://rumitvarsani.vercel.app",
    siteName: "Rumit Varsani",
    images: [
      {
        url: "/og-portfolio.png",
        width: 1200,
        height: 628,
        alt: "Rumit Varsani — IT Support, Networking & Security Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: translations.de.meta.title,
    description: translations.de.meta.description,
    images: ["/og-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="terminal-bg flex min-h-full flex-col font-mono">
        <LanguageProvider>
          <div className="scan-bar" aria-hidden />
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-[var(--bg-panel)] focus:px-3 focus:py-2 focus:text-[var(--green)]"
          >
            Skip to content
          </a>
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
