import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  openGraph: {
    type: "website",
    locale: "en_US",
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
    <html lang="fr" data-lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var l=localStorage.getItem('hs_lang');if(l==='en'||l==='fr'){document.documentElement.dataset.lang=l;document.documentElement.lang=l;}}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}