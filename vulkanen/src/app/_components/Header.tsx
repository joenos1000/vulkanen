"use client";

import Image from "next/image";

export default function Header() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="relative w-32 h-12">
          <Image
            src="/vulkan-logo-hvid.png"
            alt="Vulkanen logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <a
          href="#kontakt"
          onClick={scrollToContact}
          className="bg-[#ff904b] hover:bg-[#e67d3a] text-white font-medium px-6 py-2 rounded transition-colors duration-200"
        >
          Tegn anpart
        </a>
      </div>
    </header>
  );
}
