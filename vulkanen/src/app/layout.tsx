import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Vulkanen Mors",
  description: "Et nyt kapitel for Ørding - Læs mere om Vulkanen Mors",
  icons: [{ rel: "icon", url: "/vulkanen-favicon.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <Analytics />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
