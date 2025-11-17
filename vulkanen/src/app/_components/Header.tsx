"use client";

import Image from "next/image";
import { useState } from "react";

interface NavItem {
  id: string;
  number: number;
  label: string;
}

const navItems: NavItem[] = [
  { id: "finansieringsplan", number: 1, label: "Finansieringsplan" },
  { id: "status", number: 2, label: "Status" },
  { id: "vaerksted", number: 3, label: "VÆRKsted" },
  { id: "velo-mors", number: 4, label: "Velo Mors" },
  { id: "vaerdier", number: 5, label: "Værdier" },
  { id: "kontakt", number: 6, label: "Kontakt Bestyrelsen" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Left: Tegn anpart button */}
        <a
          href="#kontakt"
          onClick={scrollToContact}
          className="bg-[#ff904b] hover:bg-[#e67d3a] text-white font-medium px-4 py-2 sm:px-6 sm:py-2 rounded transition-colors duration-200 text-sm sm:text-base"
        >
          Tegn anpart
        </a>
        
        {/* Center: Logo */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <Image
              src="/vulkanen-favicon.png"
              alt="Vulkanen logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Menu button (hamburger on mobile) */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gray-100 rounded-lg px-4 py-2 hover:bg-[#ff904b] hover:text-white transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="text-xl font-bold">☰</span>
            <span className="text-base font-medium hidden sm:inline">Menu</span>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div
              className="absolute top-full mt-2 right-0 bg-gray-100/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden origin-top-right"
              style={{
                animation: 'slideDown 0.2s ease-out'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="transition-all duration-300"
                style={{
                  padding: isHovered ? '1.5rem' : '1rem'
                }}
              >
                <div
                  className="transition-all duration-300"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isHovered ? '1rem' : '0.5rem'
                  }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full text-left transition-all duration-200 group hover:scale-105"
                      style={{
                        gap: isHovered ? '1rem' : '0.5rem'
                      }}
                    >
                      {/* Number */}
                      <span
                        className="font-bold text-gray-400 group-hover:text-[#ff904b] transition-all duration-200"
                        style={{
                          fontSize: isHovered ? '1.5rem' : '1.25rem'
                        }}
                      >
                        {item.number}
                      </span>

                      {/* Line */}
                      <div
                        className="h-0.5 flex-1 bg-gray-400 group-hover:bg-[#ff904b] transition-all duration-200"
                        style={{
                          minWidth: isHovered ? '128px' : '80px',
                          maxWidth: isHovered ? '128px' : '80px'
                        }}
                      />

                      {/* Label */}
                      <span
                        className="font-medium whitespace-nowrap text-gray-600 group-hover:text-[#ff904b] transition-all duration-200"
                        style={{
                          fontSize: isHovered ? '1.125rem' : '1rem'
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
