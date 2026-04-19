"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  number: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "finansieringsplan", number: "01", label: "Finansieringsplan" },
  { id: "status og nyheder", number: "02", label: "Status & Nyheder" },
  { id: "vaerksted", number: "03", label: "VÆRKsted" },
  { id: "velo-mors", number: "04", label: "Velo Mors" },
  { id: "vaerdier", number: "05", label: "Værdier" },
  { id: "book-vulkanen", number: "06", label: "Book Vulkanen" },
  { id: "stoet-vulkanen", number: "07", label: "Støt Vulkanen" },
  { id: "kontakt", number: "08", label: "Bestyrelsen" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--paper)]/85 backdrop-blur-md border-b border-[var(--rule)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:px-10 py-3">
          {/* Left: Logo lockup */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative h-12 w-12 md:h-14 md:w-14 transition-transform duration-500 group-hover:rotate-[-6deg]">
              <Image
                src="/vulkanen-favicon.png"
                alt="Vulkanen logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col items-start leading-none">
              <span
                className="font-display text-xl md:text-2xl text-[var(--ink)] leading-none"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 48' }}
              >
                Vulkanen
              </span>
              <span className="micro-label text-[var(--ink-3)] mt-1">
                Mors · Ørding
              </span>
            </div>
          </button>

          {/* Middle dateline */}
          <div className="hidden lg:flex items-center gap-4 micro-label text-[var(--ink-3)]">
            <span className="blink-dot h-1.5 w-1.5 rounded-full bg-[var(--forest)]" />
            <span>Et nyt kapitel for Ørding</span>
          </div>

          {/* Right: CTA + Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#stoet-vulkanen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("stoet-vulkanen");
              }}
              className="btn-ember hidden sm:inline-flex !py-2 !px-4 !text-[0.7rem]"
            >
              Støt Økonomisk
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 border border-[var(--ink)] bg-transparent px-3 py-2 transition-all duration-300 hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              aria-label="Åbn menu"
            >
              <div className="flex flex-col gap-1">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-3 bg-current group-hover:w-5 transition-all" />
              </div>
              <span className="micro-label">Indeks</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-page menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[var(--ink)] transition-opacity duration-500 ${
            isMenuOpen ? "opacity-98" : "opacity-0"
          }`}
          style={{ opacity: isMenuOpen ? 0.98 : 0 }}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`relative z-10 h-full w-full flex flex-col transition-all duration-700 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-5 border-b border-[var(--paper-3)]/20">
            <span className="micro-label text-[var(--paper-3)]">
              Indeks — Vulkanen Mors
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 text-[var(--paper)]"
              aria-label="Luk menu"
            >
              <span className="micro-label">Luk</span>
              <span className="relative block h-5 w-5">
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="block h-px w-6 bg-current rotate-45" />
                  <span className="absolute block h-px w-6 bg-current -rotate-45" />
                </span>
              </span>
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-8 md:py-14">
            <ul className="mx-auto max-w-5xl space-y-1">
              {navItems.map((item, i) => (
                <li
                  key={item.id}
                  className="rise-in"
                  style={{ animationDelay: `${0.08 * i}s` }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="group flex w-full items-baseline gap-4 sm:gap-8 border-b border-[var(--paper-3)]/15 py-3 sm:py-5 text-left transition-colors hover:border-[var(--ember)]"
                  >
                    <span className="micro-label text-[var(--paper-3)] w-10 shrink-0 pt-2 group-hover:text-[var(--ember)] transition-colors">
                      {item.number}
                    </span>
                    <span
                      className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-[var(--paper)] group-hover:translate-x-3 group-hover:italic transition-all duration-500"
                      style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
                    >
                      {item.label}
                    </span>
                    <span className="ml-auto self-center text-[var(--paper-3)] group-hover:text-[var(--ember)] transition-colors">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu footer */}
          <div className="px-4 sm:px-6 md:px-10 py-6 border-t border-[var(--paper-3)]/20 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <p className="micro-label text-[var(--paper-3)]">
              Skolesvinget 9 · 7990 Øster Assels
            </p>
            <a
              href="#stoet-vulkanen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("stoet-vulkanen");
                setIsMenuOpen(false);
              }}
              className="inline-flex items-center gap-3 text-[var(--paper)] micro-label hover:text-[var(--ember)] transition-colors"
            >
              Støt Vulkanen Økonomisk →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
