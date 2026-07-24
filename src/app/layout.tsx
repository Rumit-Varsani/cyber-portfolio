import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { site } from "@/data/content";
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
    default: `${site.name} | Cybersecurity & Networking Portfolio`,
    template: `%s | ${site.name}`,
  },
  description:
    "Portfolio of Rumit Varsani — cybersecurity & networking enthusiast based in Berlin. Labs, writeups, skills, and contact.",
  keywords: [
    "cybersecurity",
    "networking",
    "portfolio",
    "Rumit Varsani",
    "Berlin",
    "SOC",
    "network security",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | Cyber Ops Portfolio`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="terminal-bg min-h-full flex flex-col font-mono">
        <div className="scan-bar" aria-hidden />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
