import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import CardNav, { type CardNavItem } from "./_components/CardNav";

export const metadata: Metadata = {
  title: "Vulkanen Mors",
  description: "Et nyt kapitel for Ørding - Læs mere om Vulkanen Mors",
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
        { label: "Status", href: "/#status", ariaLabel: "Gå til Status" },
        { label: "Finansieringsplan", href: "/#finansieringsplan", ariaLabel: "Gå til Finansieringsplan" },
      ],
    },
    {
      label: "Aktiviteter",
      bgColor: "#F25F26",
      textColor: "#ffffff",
      links: [
        { label: "Et VÆRKsted", href: "/#vaerksted", ariaLabel: "Gå til Et VÆRKsted" },
        { label: "VELO Mors", href: "/#velo-mors", ariaLabel: "Gå til VELO Mors" },
      ],
    },
    {
      label: "Støt Vulkanen",
      bgColor: "#ff904b",
      textColor: "#ffffff",
      links: [
        { label: "Andele i Vulkanen", href: "/#andele", ariaLabel: "Gå til Andele i Vulkanen" },
        { label: "Kontakt bestyrelsen", href: "/#kontakt-bestyrelsen", ariaLabel: "Gå til Kontakt bestyrelsen" },
      ],
    },
  ];
  return (
    <html lang="da" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <CardNav
            logo="/vulkan-logo-hvid.png"
            logoAlt="Vulkanen"
            items={navItems}
            baseColor="#ffffff"
            menuColor="#111827"
            buttonBgColor="#ff904b"
            buttonTextColor="#ffffff"
          />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
