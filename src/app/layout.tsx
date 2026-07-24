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
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
