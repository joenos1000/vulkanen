import "~/styles/globals.css";

import { type Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  metadataBase: new URL('https://vulkanenmors.dk'), // Update this to your actual domain
  title: {
    default: "Vulkanen Mors - Et nyt kapitel for Ørding",
    template: "%s | Vulkanen Mors"
  },
  description: "Vulkanen Mors er et fællesskabsprojekt i Ørding på Mors. Vi skaber et levende møde- og lærested med VÆRKsted for kreative mennesker og Velo Mors cykelunivers. Tegn anpart og vær med til at forme fremtiden.",
  keywords: ["Vulkanen Mors", "Ørding", "Mors", "VÆRKsted", "Velo Mors", "fællesskab", "kreativitet", "cykling", "anpart", "lokalsamfund"],
  authors: [{ name: "Vulkanen Mors" }],
  creator: "Vulkanen Mors",
  publisher: "Vulkanen Mors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [{ rel: "icon", url: "/vulkanen-favicon.png" }],
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://vulkanenmors.dk",
    title: "Vulkanen Mors - Et nyt kapitel for Ørding",
    description: "Vulkanen Mors er et fællesskabsprojekt i Ørding på Mors. Vi skaber et levende møde- og lærested med VÆRKsted for kreative mennesker og Velo Mors cykelunivers.",
    siteName: "Vulkanen Mors",
    images: [
      {
        url: "/billeder/bestyrelsen.JPG",
        width: 1200,
        height: 630,
        alt: "Bestyrelsen foran Vulkanen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vulkanen Mors - Et nyt kapitel for Ørding",
    description: "Vulkanen Mors er et fællesskabsprojekt i Ørding på Mors. Vi skaber et levende møde- og lærested med VÆRKsted for kreative mennesker og Velo Mors cykelunivers.",
    images: ["/billeder/bestyrelsen.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you get it
    // google: 'your-verification-code',
  },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="da"
      className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>
        <TRPCReactProvider>
          <Analytics />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
