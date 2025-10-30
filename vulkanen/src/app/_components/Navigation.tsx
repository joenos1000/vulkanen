"use client";

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  number: number;
  label: string;
}

const navItems: NavItem[] = [
  { id: "finansieringsplan", number: 1, label: "Finansierings" },
  { id: "status", number: 2, label: "Status" },
  { id: "vaerksted", number: 3, label: "VÆRKsted" },
  { id: "velo-mors", number: 4, label: "Velo Mors" },
  { id: "vaerdier", number: 5, label: "Værdier" },
  { id: "kontakt", number: 6, label: "Kontakt Bestyrelsen" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");

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

  return (
    <nav className="fixed top-8 right-8 z-50 bg-gray-100/95 backdrop-blur-sm rounded-lg shadow-lg p-6 hidden lg:block">
      <div className="space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-4 w-full text-left transition-all duration-300 group ${
              activeSection === item.id ? "scale-105" : "hover:scale-102"
            }`}
          >
            {/* Number */}
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-gray-900"
                  : "text-gray-400 group-hover:text-gray-600"
              }`}
            >
              {item.number}
            </span>

            {/* Line */}
            <div
              className={`h-0.5 flex-1 min-w-[128px] max-w-[128px] transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gray-900"
                  : "bg-gray-400 group-hover:bg-gray-600"
              }`}
            />

            {/* Label */}
            <span
              className={`text-lg font-medium whitespace-nowrap transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-gray-900"
                  : "text-gray-600 group-hover:text-gray-800"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}