import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import CardNav, { type CardNavItem } from "./_components/CardNav";

export const metadata: Metadata = {
  title: "Vulkanen Mors",
  description: "Vulkanen hjemmeside",
  icons: [{ rel: "icon", url: "/VULKANEN-ICON-LOGO.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const navItems: CardNavItem[] = [
    {
      label: "Om Vulkanen",
      bgColor: "#BB3822",
      textColor: "#ffffff",
      links: [
        { label: "Vision", href: "/#vision", ariaLabel: "Gå til Vision" },
        { label: "Om os", href: "/#Om", ariaLabel: "Gå til Hold" },
      ],
    },
    {
      label: "Aktiviteter",
      bgColor: "#F25F26",
      textColor: "#ffffff",
      links: [
        { label: "Begivenheder", href: "/#events", ariaLabel: "Gå til Begivenheder" },
        { label: "Workshops", href: "/#workshops", ariaLabel: "Gå til Workshops" },
      ],
    },
    {
      label: "Støt os",
      bgColor: "#C6331D",
      textColor: "#ffffff",
      links: [
        { label: "Donér", href: "/#donate", ariaLabel: "Gå til Donér" },
        { label: "Kontakt", href: "/#contact", ariaLabel: "Gå til Kontakt" },
      ],
    },
  ];
  return (
    <html lang="da" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <CardNav
            logo="/VULKANEN-ICON-LOGO.png"
            logoAlt="Vulkanen"
            items={navItems}
            baseColor="#ffffff"
            menuColor="#111827"
            buttonBgColor="#111827"
            buttonTextColor="#ffffff"
          />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
