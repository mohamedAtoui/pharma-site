import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarlhandson.com"),
  title: {
    default: "HandSon - Innovative Pharmaceutical Solutions",
    template: "%s | HandSon",
  },
  description:
    "HandSon - Innovative pharmaceutical solutions including dietary supplements for memory, cognitive function and mental vitality.",
  keywords: [
    "HandSon",
    "pharmaceutical",
    "supplements",
    "Synapgen",
    "Magnesium",
    "memory",
    "cognitive function",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    alternateLocale: ["en_US"],
    url: "https://www.sarlhandson.com",
    siteName: "HandSon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}