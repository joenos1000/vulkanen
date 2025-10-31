"use client";

import { useState, useEffect } from "react";

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

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]!.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeItem = navItems.find((item) => item.id === activeSection);

  return (
    <nav
      className="fixed top-8 right-8 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100/95 backdrop-blur-sm rounded-lg shadow-lg p-4 hover:bg-[#ff904b] hover:text-white transition-all duration-300 flex items-center gap-3 group"
      >
        <span className="text-2xl font-bold group-hover:text-white transition-colors duration-300">
          {activeItem?.number || "☰"}
        </span>
        <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">
          {isOpen ? "✕" : "Menu"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="mt-2 bg-gray-100/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden origin-top-right"
          style={{
            animation: 'slideDown 0.2s ease-out'
          }}
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
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full text-left transition-all duration-200 group"
                  style={{
                    gap: isHovered ? '1rem' : '0.5rem'
                  }}
                >
                  {/* Number */}
                  <span
                    className={`font-bold transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-[#ff904b]"
                        : "text-gray-400 group-hover:text-[#ff904b]"
                    }`}
                    style={{
                      fontSize: isHovered ? '1.5rem' : '1.25rem'
                    }}
                  >
                    {item.number}
                  </span>

                  {/* Line */}
                  <div
                    className={`h-0.5 flex-1 transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-[#ff904b]"
                        : "bg-gray-400 group-hover:bg-[#ff904b]"
                    }`}
                    style={{
                      minWidth: isHovered ? '128px' : '80px',
                      maxWidth: isHovered ? '128px' : '80px'
                    }}
                  />

                  {/* Label */}
                  <span
                    className={`font-medium whitespace-nowrap transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-[#ff904b]"
                        : "text-gray-600 group-hover:text-[#ff904b]"
                    }`}
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
    </nav>
  );
}