"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "./_components/Section";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// Small editorial building blocks

function Kicker({ children, color = "var(--ember)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      <span
        className="micro-label"
        style={{ color: "var(--ink-3)" }}
      >
        {children}
      </span>
    </div>
  );
}

function BulletList({
  items,
  glyph = "◆",
  color = "var(--ember)",
}: {
  items: React.ReactNode[];
  glyph?: string;
  color?: string;
}) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 group">
          <span
            className="font-mono text-[0.7rem] mt-1.5 pt-px shrink-0 tabular-nums"
            style={{ color: "var(--ink-4)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className="mt-1.5 shrink-0 transition-transform group-hover:rotate-[30deg]"
            style={{ color }}
          >
            {glyph}
          </span>
          <span className="text-base md:text-lg leading-relaxed text-[var(--ink-2)] text-pretty flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PaperCard({
  children,
  className = "",
  accent,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`paper-card p-6 sm:p-8 md:p-10 ${className}`}
      style={accent ? ({ borderTopColor: accent, borderTopWidth: "3px" } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [showOlderNews, setShowOlderNews] = useState(false);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />

      {/* ============================== HERO ============================== */}
      <section className="relative min-h-[100vh] pt-28 md:pt-36 pb-20 px-4 sm:px-6 md:px-10">
        {/* Background ornamental type */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-24 md:top-32 text-center overflow-hidden select-none"
        >
          <p
            className="font-display text-[28vw] leading-[0.8] text-[var(--paper-3)]/50 whitespace-nowrap"
            style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
          >
            vulkanen
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Top dateline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 md:mb-16 rise-in">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--forest)] blink-dot" />
              <span className="micro-label text-[var(--ink-3)]">
                Fællesskab · Ørding · Mors
              </span>
            </div>
            <span className="micro-label text-[var(--ink-3)]">
              №{"  "}01 — Et nyt kapitel
            </span>
          </div>

          {/* Title */}
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end mb-10 md:mb-14">
            <h1
              className="col-span-12 md:col-span-9 font-display text-[clamp(3.5rem,14vw,11rem)] leading-[0.82] tracking-tight text-[var(--ink)] text-balance rise-in"
              style={{
                fontVariationSettings: '"SOFT" 100, "WONK" 0, "opsz" 144',
                animationDelay: "0.1s",
              }}
            >
              Vulkanen <em className="italic text-[var(--ember-deep)]" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}>Mors</em>
            </h1>
            <p
              className="col-span-12 md:col-span-3 md:border-l md:border-[var(--rule)] md:pl-6 text-[var(--ink-2)] text-base md:text-lg leading-relaxed text-pretty rise-in"
              style={{ animationDelay: "0.25s" }}
            >
              Et levende møde- og lærested for kreativitet, bevægelse og
              fællesskab — båret af lokal handlekraft.
            </p>
          </div>

          {/* Photo + AKTUELT card + Vulk */}
          <div className="relative grid grid-cols-12 gap-6 md:gap-8 items-stretch rise-in" style={{ animationDelay: "0.4s" }}>
            {/* AKTUELT card - desktop position */}
            <a
              href="#status og nyheder"
              onClick={scrollToSection("status og nyheder")}
              className="hidden lg:block col-span-3 self-center group"
            >
              <div className="paper-card p-7 relative overflow-hidden">
                <div className="flex items-start justify-between mb-5">
                  <span className="micro-label text-[var(--forest)]">
                    ● Aktuelt
                  </span>
                  <span className="micro-label text-[var(--ink-4)]">Nyt</span>
                </div>
                <h3
                  className="font-display text-3xl text-[var(--ink)] mb-3 leading-tight"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
                >
                  Status &amp; Nyheder
                </h3>
                <p className="text-sm leading-relaxed text-[var(--ink-2)] mb-4">
                  Læs om det aktuelle der sker på Vulkanen Mors.
                </p>
                <span className="inline-flex items-center gap-2 micro-label text-[var(--ember-deep)] group-hover:gap-4 transition-all">
                  Læs mere
                  <span>→</span>
                </span>
              </div>
            </a>

            {/* Main photo */}
            <div className="col-span-12 lg:col-span-9 relative">
              <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden border border-[var(--rule)]">
                <Image
                  src="/billeder/bestyrelse-foran-vulkanen.JPEG"
                  alt="Bestyrelsen foran Vulkanen"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Photo caption strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:p-6 flex items-end justify-between">
                  <span className="micro-label text-white/80">
                    Fig. 01 — Bestyrelsen
                  </span>
                  <span className="micro-label text-white/80 hidden sm:block">
                    Ørding, Mors
                  </span>
                </div>
              </div>

              {/* Vulk — bottom right, outside image */}
              <a
                href="#vulk"
                onClick={scrollToSection("vulk")}
                className="hidden md:flex absolute -bottom-24 right-4 md:right-8 flex-col items-center group cursor-pointer z-10"
              >
                <Image
                  src="/Vulk.png"
                  alt="Vulk nøglering"
                  width={190}
                  height={190}
                  className="drop-shadow-xl rotate-[12deg] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[4deg]"
                />
                <div className="relative -mt-3">
                  <span className="micro-label text-[var(--ink)] bg-[var(--paper)] px-2 py-1 border border-[var(--rule)]">
                    Køb en “Vulk” →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* AKTUELT card - mobile */}
          <a
            href="#status og nyheder"
            onClick={scrollToSection("status og nyheder")}
            className="block lg:hidden mt-8"
          >
            <div className="paper-card p-6 relative">
              <div className="flex items-start justify-between mb-3">
                <span className="micro-label text-[var(--forest)]">
                  ● Aktuelt · Nyt
                </span>
              </div>
              <h3
                className="font-display text-2xl text-[var(--ink)] mb-2 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Status &amp; Nyheder
              </h3>
              <p className="text-sm leading-relaxed text-[var(--ink-2)] mb-2">
                Læs om det aktuelle der sker på Vulkanen Mors.
              </p>
              <span className="micro-label text-[var(--ember-deep)]">
                Læs mere →
              </span>
            </div>
          </a>

          {/* CTA row */}
          <div
            className="mt-24 md:mt-32 rise-in"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-t border-[var(--rule)] pt-8">
              <p
                className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-[var(--ink)] max-w-xl text-balance"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 96' }}
              >
                Din opbakning er{" "}
                <em className="text-[var(--ember-deep)]">vigtig.</em>
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#stoet-vulkanen"
                  onClick={scrollToSection("stoet-vulkanen")}
                  className="btn-ember"
                >
                  Støt Økonomisk
                </a>
                <a
                  href="#book-vulkanen"
                  onClick={scrollToSection("book-vulkanen")}
                  className="btn-ember-solid"
                >
                  Book Vulkanen
                </a>
                <a
                  href="/dokumenter/vulkanen-vision-stategi-pp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Vision &amp; Strategi ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== MARQUEE ============================== */}
      <div className="relative border-y border-[var(--rule)] bg-[var(--paper-2)] py-5 overflow-hidden">
        <div className="marquee gap-10 text-[var(--ink)]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {[
                "Fællesskab",
                "Kreativitet",
                "Bevægelse",
                "Lokalsamfund",
                "VÆRKsted",
                "Velo Mors",
                "Ørding",
                "Et nyt kapitel",
              ].map((word, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-10">
                  <span
                    className="font-display italic text-3xl md:text-5xl whitespace-nowrap"
                    style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
                  >
                    {word}
                  </span>
                  <span className="ornament text-3xl md:text-4xl not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============================== STATUS & NYHEDER ============================== */}
      <Section
        id="status og nyheder"
        title="Status & Nyheder"
        subtitle="Hvor er vi i processen?"
        numeral="§ 02"
        kicker="Aktuelt"
      >
        {/* Cykelfestival 2026 — featured event */}
        <article className="paper-card p-6 sm:p-8 md:p-10 relative">
          <div className="absolute -top-3 right-6">
            <span className="inline-flex items-center gap-2 bg-[var(--ember)] text-[var(--ink)] px-3 py-1 micro-label border border-[var(--ink)]">
              ● Kommende begivenhed
            </span>
          </div>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            {/* Flyer */}
            <div className="col-span-12 md:col-span-5">
              <a
                href="/cykelfestival2026_flyer.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border border-[var(--rule)] overflow-hidden bg-[var(--paper-2)] max-w-[72%] mx-auto"
              >
                <Image
                  src="/cykelfestival2026_flyer.png"
                  alt="Cykelfestival 2026 — flyer"
                  width={1024}
                  height={1536}
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 micro-label bg-[var(--paper)] text-[var(--ink)] px-2 py-1 border border-[var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Se flyer ↗
                </span>
              </a>
            </div>

            {/* Event details */}
            <div className="col-span-12 md:col-span-7">
              <Kicker color="var(--ember)">Begivenhed · Cykelfestival 2026</Kicker>
              <h3
                className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mb-3 leading-[1.05]"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 96' }}
              >
                Hop på cyklen —{" "}
                <em className="italic text-[var(--ember-deep)]">uanset alder!</em>
              </h3>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-6 max-w-2xl">
                En dag fyldt med oplevelser, motion og fællesskab på Vulkanen.
              </p>

              {/* Meta strip: date + location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="border border-[var(--rule)] bg-[var(--paper-2)]/40 p-4">
                  <p className="micro-label text-[var(--ink-4)] mb-1">Dato</p>
                  <p className="font-display text-lg text-[var(--ink)] leading-tight"
                     style={{ fontVariationSettings: '"SOFT" 100, "opsz" 48' }}>
                    Lørdag 5. september 2026
                  </p>
                  <p className="text-sm text-[var(--ink-2)]">kl. 10–16</p>
                </div>
                <div className="border border-[var(--rule)] bg-[var(--paper-2)]/40 p-4">
                  <p className="micro-label text-[var(--ink-4)] mb-1">Sted</p>
                  <p className="font-display text-lg text-[var(--ink)] leading-tight"
                     style={{ fontVariationSettings: '"SOFT" 100, "opsz" 48' }}>
                    Vulkanen, Ørding
                  </p>
                  <p className="text-sm text-[var(--ink-2)]">Skolesvinget 9, 7990 Ø. Assels</p>
                </div>
              </div>

              {/* Activities */}
              <p className="micro-label text-[var(--ink-3)] mb-3">Aktiviteter</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {[
                  "Oplevelsestur rundt i lokalområdet",
                  "Graveltur på grus og stier",
                  "Skattejagt for de mindste",
                  "Cykelleg ved Vulkanen",
                  "Uni-cykelopvisning",
                  "Tour de cykeldyt med Skrallebang",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-2 text-[var(--ink-2)]">
                    <span className="text-[var(--ember)] mt-1.5 shrink-0">●</span>
                    <span className="leading-snug">{a}</span>
                  </li>
                ))}
              </ul>

              {/* Footer info */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-[var(--rule)] text-sm">
                <span className="text-[var(--ink-2)]">
                  <span className="micro-label text-[var(--ink-4)] mr-2">Entré</span>
                  Voksne 50 kr · Børn gratis
                </span>
                <span className="text-[var(--ink-2)]">
                  <span className="micro-label text-[var(--ink-4)] mr-2">Mad</span>
                  Foodtruck Trille
                </span>
                <span className="text-[var(--ink-2)]">
                  <span className="micro-label text-[var(--ink-4)] mr-2">Arrangør</span>
                  Vulkanen Mors
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Nyhedsbrev 2 */}
        <article className="paper-card p-6 sm:p-8 md:p-10 relative">
          <div className="absolute -top-3 right-6">
            <span className="inline-flex items-center gap-2 bg-[var(--paper-2)] text-[var(--ink)] px-3 py-1 micro-label border border-[var(--ink)]">
              ● Nyhedsbrev
            </span>
          </div>
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-3">
              <Kicker color="var(--ember)">Nyhedsbrev №02</Kicker>
              <p className="micro-label text-[var(--ink-4)]">
                15 · 01 · 2026
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Nyhedsbrev 2 — 15. januar 2026
              </h3>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-6 max-w-2xl">
                Læs det seneste nyhedsbrev fra Vulkanen Mors med opdateringer
                om foreningens aktiviteter og fremtidsplaner.
              </p>
              <a
                href="/dokumenter/Vulkanen - nyhedsbrev 2 - 15-01-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember"
              >
                Læs mere ↗
              </a>
            </div>
          </div>
        </article>

        {/* Vedtægter */}
        <article className="paper-card p-6 sm:p-8 md:p-10 relative">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-3">
              <Kicker color="var(--sky)">Dokument</Kicker>
              <p className="micro-label text-[var(--ink-4)]">For nyligt</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Vedtægter Vulkanen Mors
              </h3>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-6 max-w-2xl">
                Læs foreningens vedtægter og få indblik i formål, medlemskab,
                bestyrelse og meget mere.
              </p>
              <a
                href="/dokumenter/vedtægter-vulkanen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Læs mere ↗
              </a>
            </div>
          </div>
        </article>

        {/* Andel Status */}
        <article className="paper-card p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-3">
              <Kicker color="var(--moss)">Status</Kicker>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Andel Status
              </h3>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed max-w-2xl">
                Vi er i gang med at samle opbakning og tegne andele. Følg med
                her for opdateringer om projektets fremskridt.
              </p>
            </div>
          </div>
        </article>

        {/* Toggle */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowOlderNews(!showOlderNews)}
            className="group inline-flex items-center gap-3 micro-label text-[var(--ink-2)] border-b border-[var(--ink-3)] pb-1 hover:text-[var(--ember-deep)] hover:border-[var(--ember-deep)] transition-colors"
          >
            <span>{showOlderNews ? "Skjul" : "Læs"} tidligere nyheder</span>
            <span
              className={`transition-transform duration-500 ${
                showOlderNews ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>

        <div
          className={`transition-all duration-700 ease-out space-y-8 ${
            showOlderNews
              ? "max-h-[4000px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <article className="paper-card p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <Kicker color="var(--ember)">Arkiv</Kicker>
                <p className="micro-label text-[var(--ink-4)]">
                  15 · 11 · 2024
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3
                  className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4 leading-tight"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
                >
                  Velkommen til Vulkanen!
                </h3>
                <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-4 max-w-2xl">
                  Vulkanen slår dørene op på vid gab og byder alle velkommen.
                  Styregruppen for etableringen ser frem til stiftende
                  generalforsamling for Vulkanen Mors mandag den 24/11. Kom og
                  være med, begynder med fællesspisning kl. 17.30. Her er
                  plads til alle ideer og forslag der kan skabe liv og
                  fællesskab i disse fantastiske rammer der nu er i borgernes
                  hænder.
                </p>
                <p className="font-display italic text-xl text-[var(--ink-2)] mb-1">
                  Vi ses
                </p>
                <p className="micro-label text-[var(--ink-3)]">
                  — Johannes Jørgensen
                </p>
              </div>
            </div>
          </article>

          <article
            id="faellesspisning"
            className="paper-card p-6 sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-3">
                <Kicker color="var(--sky)">Begivenhed</Kicker>
                <p className="micro-label text-[var(--ink-4)]">Arkiv</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3
                  className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-4 leading-tight"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
                >
                  Fællesspisning den 24/11
                </h3>
                <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-6 max-w-2xl">
                  Vi skal fejre, at vi i fællesskab har købt Friskolens
                  bygninger. — <strong>Vulkanen er tændt!</strong>
                </p>
                <a
                  href="/dokumenter/fællesspisning-24-nov.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Læs mere ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* ============================== FINANSIERINGSPLAN ============================== */}
      <Section
        id="finansieringsplan"
        title="Finansieringsplan"
        subtitle="Det bliver centralt at sikre en overgangsperiode på op til 2 år mens visionen formes og realiseres."
        numeral="§ 03"
        kicker="Økonomi"
        variant="paper-2"
      >
        {/* Model */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-7">
            <PaperCard className="h-full">
              <Kicker color="var(--ember-deep)">Model</Kicker>
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-6 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Finansieringsmodel
              </h3>
              <BulletList
                glyph="▲"
                color="var(--ember-deep)"
                items={[
                  "Ørding Medborgerhus Aps overtager bygningerne",
                  "Vulkanen Mors lejer bygningerne",
                  <>
                    Man kan støtte med lån i klumper af{" "}
                    <strong className="text-[var(--ink)]">2.500 kroner</strong>
                  </>,
                ]}
              />
            </PaperCard>
          </div>

          <div className="col-span-12 lg:col-span-5 grid gap-6 md:gap-8">
            <PaperCard>
              <Kicker color="var(--forest)">Fordele</Kicker>
              <h3
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-5 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Fordele
              </h3>
              <BulletList
                glyph="+"
                color="var(--forest)"
                items={[
                  "Lokal handlekraft og frihed",
                  "Sponsorater og anparter kan inddrages",
                ]}
              />
            </PaperCard>

            <PaperCard>
              <Kicker color="var(--berry)">Udfordringer</Kicker>
              <h3
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-5 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Udfordringer
              </h3>
              <BulletList
                glyph="−"
                color="var(--berry)"
                items={["Kræver kapital og driftssikring i 2 år"]}
              />
            </PaperCard>
          </div>
        </div>

        {/* CTA banner */}
        <div className="relative mt-12 border-t border-b border-[var(--ink)] py-12 md:py-16 text-center">
          <span className="ornament text-4xl absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--paper-2)] px-4">
            ✦
          </span>
          <p
            className="font-display text-2xl md:text-4xl lg:text-5xl text-[var(--ink)] max-w-4xl mx-auto leading-[1.1] text-balance mb-8"
            style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
          >
            Kontakt Bestyrelsen — og tegn anparter.
            <br />
            <em className="text-[var(--ember-deep)]">
              Så støtter du finansieringsplanen.
            </em>
          </p>
          <a
            href="#stoet-vulkanen"
            onClick={scrollToSection("stoet-vulkanen")}
            className="btn-ember"
          >
            Støt Økonomisk
          </a>
        </div>
      </Section>

      {/* ============================== VÆRKSTED ============================== */}
      <Section
        id="vaerksted"
        title="VÆRKsted"
        subtitle="Et fristed for skabende mennesker — især børn og unge."
        numeral="§ 04"
        kicker="Spor A"
      >
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Core ideas */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <PaperCard className="h-full">
              <Kicker color="var(--ember)">Kerneidéer</Kicker>
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-6 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Kerneidéer
              </h3>
              <BulletList
                glyph="◆"
                color="var(--ember-deep)"
                items={[
                  "Plads til dem der falder udenfor traditionelle læringsrum",
                  "Fokus på proces frem for præstation",
                  "Kreativitet som vej til styrke, tilhørighed og udvikling",
                ]}
              />
            </PaperCard>
          </div>

          {/* Image */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <div className="relative h-full min-h-[260px] border border-[var(--rule)] bg-[var(--paper-3)]/30 p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute top-3 left-3 micro-label text-[var(--ink-3)]">
                Fig. A · Værksted
              </div>
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/værk-hvid.png"
                  alt="Værk logo"
                  fill
                  className="object-contain rumble"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mål & Finansiering */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div className="col-span-12 md:col-span-6">
            <PaperCard accent="var(--forest)" className="h-full">
              <Kicker color="var(--forest)">Mål</Kicker>
              <h4
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Mål
              </h4>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed">
                At skabe et sted, hvor kreativitet og forskellighed bliver
                styrker — og hvor relationer og identitet kan vokse i takt med
                de kunstneriske udtryk.
              </p>
            </PaperCard>
          </div>
          <div className="col-span-12 md:col-span-6">
            <PaperCard accent="var(--sky)" className="h-full">
              <Kicker color="var(--sky)">Finansieringspotentiale</Kicker>
              <h4
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Finansieringspotentiale
              </h4>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed">
                Fonde der støtter social inklusion, læring og kreativ udvikling
                (fx Spar Nord, Egmont, Nordea-fonden).
              </p>
            </PaperCard>
          </div>
        </div>

        {/* Konkrete elementer */}
        <PaperCard>
          <Kicker color="var(--berry)">Konkrete elementer &amp; synergier</Kicker>
          <h3
            className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-8 leading-tight"
            style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
          >
            Konkrete elementer <em className="italic text-[var(--berry)]">og</em>{" "}
            synergier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              "Kreative værksteder: keramik, tekstil, billedkunst, musik, digitalt design",
              "Øvelokaler og teatermiljø",
              "Rå og upolerede rammer til eksperimenterende kunst og formidling",
              "Uderum med bålplads, kunsthaver, sansestier og lydkunst i naturen",
              "Workshops og kreative lejrskoler (fx Farv med planter, Lyde fra skoven)",
              "Udstillinger, events og festivaler – kreative i naturen",
              "Udlejning af rum og samarbejde med kunstnere, skoler og sociale aktører",
              "Overnatningsmuligheder for større grupper",
              "Samarbejde med Ørding Købmandsgaard om forplejning",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-t border-[var(--rule)]/60">
                <span className="font-mono text-[0.7rem] tabular-nums text-[var(--ink-4)] pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base md:text-lg leading-relaxed text-[var(--ink-2)] text-pretty flex-1">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </PaperCard>
      </Section>

      {/* ============================== VELO MORS ============================== */}
      <Section
        id="velo-mors"
        title="Velo Mors"
        subtitle="Et cykelunivers i bevægelse."
        numeral="§ 05"
        kicker="Spor B"
        variant="paper-2"
      >
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <PaperCard className="h-full">
              <Kicker color="var(--sky)">Kerneidéer</Kicker>
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-6 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Kerneidéer
              </h3>
              <BulletList
                glyph="◐"
                color="var(--sky)"
                items={[
                  "Cyklen som adgang til naturen og lokalt fællesskab",
                  "Aktiviteter for alle niveauer og aldre",
                  "Bevægelse som socialt og sanseligt anker",
                ]}
              />
            </PaperCard>
          </div>

          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <div className="relative h-full min-h-[260px] border border-[var(--rule)] bg-[var(--paper-3)]/30 p-8 flex items-center justify-center">
              <div className="absolute top-3 left-3 micro-label text-[var(--ink-3)]">
                Fig. B · Velo Mors
              </div>
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/velo-mors-transparent.png"
                  alt="Velo Mors logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div className="col-span-12 md:col-span-6">
            <PaperCard accent="var(--forest)" className="h-full">
              <Kicker color="var(--forest)">Mål</Kicker>
              <h4
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Mål
              </h4>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed">
                At skabe et fysisk og socialt rum, hvor mennesker samles om
                bevægelse og naturoplevelser — og hvor det handler om at være
                sammen på vej, ikke hurtigst.
              </p>
            </PaperCard>
          </div>
          <div className="col-span-12 md:col-span-6">
            <PaperCard accent="var(--moss)" className="h-full">
              <Kicker color="var(--moss)">Finansieringspotentiale</Kicker>
              <h4
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-4 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Finansieringspotentiale
              </h4>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed">
                Støtte fra fonde der prioriterer friluftsliv, fællesskab og
                lokaludvikling (fx Nordea-fonden).
              </p>
            </PaperCard>
          </div>
        </div>

        <PaperCard>
          <Kicker color="var(--berry)">Konkrete elementer &amp; synergier</Kicker>
          <h3
            className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-8 leading-tight"
            style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
          >
            Konkrete elementer <em className="italic text-[var(--berry)]">og</em>{" "}
            synergier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {[
              "Udlejning af mange typer cykler (elcykler, gravelbikes, børnecykler m.m.)",
              "Guidede ture og temaruter (fx Cykel + Fjordtur, Cykel + Bålmad)",
              "Tekniktræning, unicycling, cykelværksted og opbevaring",
              "Lejrskolepakker med kombination af cykling, læring og naturformidling",
              "Overnatningsmuligheder for større grupper",
              "Samarbejde med Ørding Købmandsgaard om forplejning",
              "Fællesspisning, events og festivaler – fx Tour de Kultur",
              "Trafiklegeplads til børn",
              "Mulighed for udvikling af VELO-brand og merchandise",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-t border-[var(--rule)]/60">
                <span className="font-mono text-[0.7rem] tabular-nums text-[var(--ink-4)] pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base md:text-lg leading-relaxed text-[var(--ink-2)] text-pretty flex-1">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </PaperCard>
      </Section>

      {/* ============================== VÆRDIER ============================== */}
      <Section
        id="vaerdier"
        title="Værdier"
        subtitle="Uanset hvilken retning vi bevæger os i, er der enighed om nogle centrale værdier og hensyn."
        numeral="§ 06"
        kicker="Fundament"
        variant="ink"
      >
        {/* Lead text */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 mb-8">
          <div className="col-span-12 md:col-span-6">
            <p className="font-display text-2xl md:text-3xl leading-[1.15] text-[var(--paper)] text-balance"
               style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}>
              Området skal være et levende møde- og lærested, der rummer
              mennesker på tværs af alder og baggrund.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:pl-8 md:border-l md:border-[var(--paper-3)]/20">
            <p className="font-display text-2xl md:text-3xl leading-[1.15] text-[var(--paper-3)] italic text-balance"
               style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 72' }}>
              Tilhørighed og samskabelse er fundamentet for både aktiviteter,
              drift og stemning.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--paper-3)]/20 border border-[var(--paper-3)]/20">
          {[
            {
              title: "Tilgængelighed",
              body: "Aktiviteter og udstyr skal være familievenlige og imødekommende — både fysisk og socialt.",
            },
            {
              title: "Bevarelse af udearealer",
              body: "Legepladsen og de grønne områder omkring skolen skal bevares og være en integreret del af visionen — som rum for leg, læring og samvær.",
            },
            {
              title: "Bevarelse af aktiviteter",
              body: "Skolen rummer i dag mange foreninger og aktiviteter, disse skal bevares og få den plads og rum der er brug for, så vi sikrer et ligeså godt tilbud til byens børn og voksne.",
            },
            {
              title: "Nærhed til naturen",
              body: "Den særlige placering tæt på fjord, skov og strand skal udnyttes aktivt til oplevelser og som identitetsskabende element.",
            },
            {
              title: "Lokal forankring",
              body: "Visionerne skal udvikles i samarbejde og bygger på ønsket om at bevare liv og aktivitet i Ørding og omegn.",
            },
            {
              title: "Bæredygtighed — også økonomisk",
              body: "Bæredygtighed sikres gennem så vidt mulig genbrug, rene råvarer og et princip om gældsfrihed.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="group relative bg-[var(--ink)] p-8 md:p-10 transition-colors duration-500 hover:bg-[var(--ink-2)]"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="font-mono text-xs tabular-nums text-[var(--paper-3)]/50">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
                <span className="ornament text-lg not-italic text-[var(--ember)] opacity-0 group-hover:opacity-100 transition-opacity">
                  ✦
                </span>
              </div>
              <h3
                className="font-display text-2xl md:text-3xl text-[var(--paper)] mb-4 leading-tight group-hover:italic transition-all"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                {v.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--paper-3)]">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================== BOOK VULKANEN ============================== */}
      <Section
        id="book-vulkanen"
        title="Book Vulkanen"
        subtitle="Book Vulkanen til din event."
        numeral="§ 07"
        kicker="Udlejning"
      >
        <PaperCard>
          <div className="text-center mb-10">
            <p
              className="font-display text-2xl md:text-4xl text-[var(--ink)] leading-[1.15] max-w-3xl mx-auto text-balance"
              style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 96' }}
            >
              Ønsker du at booke lokaler i Vulkanen —{" "}
              <em className="text-[var(--ember-deep)]">
                så kontakt Johannes Jørgensen.
              </em>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="border border-[var(--rule)] p-6 md:p-8 bg-[var(--paper-2)]/40 transition-all hover:bg-[var(--paper-2)]">
              <div className="flex items-center justify-between mb-4">
                <span className="micro-label text-[var(--forest)]">
                  ● Kasserer
                </span>
                <span className="micro-label text-[var(--ink-4)]">Kontakt</span>
              </div>
              <h4
                className="font-display text-3xl text-[var(--ink)] mb-5 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Johannes Jørgensen
              </h4>
              <div className="space-y-2 text-base">
                <p className="text-[var(--ink-2)]">
                  <span className="micro-label text-[var(--ink-4)] mr-2">Tlf</span>
                  23 39 46 41
                </p>
                <p className="text-[var(--ink-2)]">
                  <span className="micro-label text-[var(--ink-4)] mr-2">Email</span>
                  <a
                    href="mailto:Minna.Johannes61@gmail.com"
                    className="link-reveal text-[var(--forest)]"
                  >
                    Minna.Johannes61@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border border-[var(--rule)] p-6 md:p-8 bg-[var(--paper-2)]/40 transition-all hover:bg-[var(--paper-2)]">
              <div className="flex items-center justify-between mb-4">
                <span className="micro-label text-[var(--sky)]">
                  ● Lokation
                </span>
                <span className="micro-label text-[var(--ink-4)]">Adresse</span>
              </div>
              <h4
                className="font-display text-3xl text-[var(--ink)] mb-5 leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                Skolesvinget 9
              </h4>
              <div className="space-y-2 text-base">
                <p className="text-[var(--ink-2)]">7990 Øster Assels</p>
                <p className="text-[var(--ink-4)] micro-label">Mors · Danmark</p>
              </div>
            </div>
          </div>
        </PaperCard>

        {/* Gymnastiksalens aktiviteter */}
        <PaperCard id="skema">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <Kicker color="var(--sky)">Skema</Kicker>
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] leading-tight"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Gymnastiksalens Aktiviteter
              </h3>
              <p className="text-[var(--ink-3)] mt-2">
                Ugentligt skema for faste aktiviteter i gymnastiksalen
              </p>
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--ink)]">
                  <th className="py-3 pr-4 text-left micro-label text-[var(--ink-3)] w-20">
                    Tid
                  </th>
                  {["Man", "Tir", "Ons", "Tor", "Fre"].map((d) => (
                    <th
                      key={d}
                      className="py-3 px-3 text-left micro-label text-[var(--ink-3)]"
                    >
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--rule)]/60">
                  <td className="py-3 pr-4 micro-label text-[var(--ink-4)] align-top">
                    16:00
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2">
                    <ActivityChip
                      time="16.30–18.00"
                      title="Uni cyklning"
                      who="Anne Lise"
                      color="var(--ember)"
                    />
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="border-b border-[var(--rule)]/60">
                  <td className="py-3 pr-4 micro-label text-[var(--ink-4)] align-top">
                    18:00
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2">
                    <ActivityChip
                      time="18.30–19.30"
                      title="Jumping fitness"
                      who="Karina Thøgersen"
                      color="var(--berry)"
                    />
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 micro-label text-[var(--ink-4)] align-top">
                    19:00
                  </td>
                  <td className="p-2">
                    <ActivityChip
                      time="19:00"
                      title="Badminton"
                      who="Maja Møller Jensen"
                      color="var(--forest)"
                    />
                  </td>
                  <td className="p-2">
                    <ActivityChip
                      time="Fra 19.30"
                      title="Badminton"
                      who="Susanne Nygaard"
                      color="var(--forest)"
                    />
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2">
                    <ActivityChip
                      time="19.00–20.00"
                      title="Bordtennis"
                      who="Kåre Have Jensen"
                      color="var(--sky)"
                    />
                  </td>
                  <td className="p-2">
                    <ActivityChip
                      time="19:00"
                      title="Badminton"
                      who="Morten Pipper"
                      color="var(--forest)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--rule)]">
            <p className="micro-label text-[var(--ink-3)] mb-3">
              Derudover er gymnastiksalen lejet ud:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-[var(--ink-2)]">
                <span className="text-[var(--sky)] mt-1.5">◆</span>
                <span>
                  Hver anden weekend — kontaktperson: Levi Andersen
                </span>
              </li>
              <li className="flex items-start gap-3 text-[var(--ink-2)]">
                <span className="text-[var(--sky)] mt-1.5">◆</span>
                <span>
                  En eftermiddag om ugen, skifter dag og tidspunkt hver anden
                  uge — kontaktperson: Mette Siercke
                </span>
              </li>
            </ul>
          </div>
        </PaperCard>
      </Section>

      {/* ============================== STØT VULKANEN ============================== */}
      <Section
        id="stoet-vulkanen"
        title="Støt Vulkanen"
        subtitle="Din støtte gør en forskel."
        numeral="§ 08"
        kicker="Støtte"
        variant="paper-2"
      >
        <PaperCard>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <Kicker color="var(--ember)">Om støtten</Kicker>
              <h3
                className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-6 leading-[1.1]"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 96' }}
              >
                Kunne du tænke dig at støtte op om projekt Vulkanen Mors med{" "}
                <em className="text-[var(--ember-deep)]">økonomisk støtte?</em>
              </h3>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-3">
                Det kan gøres med låneindskud eller ved at give en gave.
              </p>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed">
                Man kan støtte med lån i klumper af{" "}
                <strong className="text-[var(--ink)] font-display italic text-xl">
                  2.500 kroner
                </strong>
                .
              </p>
            </div>

            {/* Bank details — receipt style */}
            <div className="col-span-12 md:col-span-7">
              <div className="relative border-2 border-[var(--ink)] bg-[var(--paper)] p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="micro-label text-[var(--ink-3)]">
                    ● Betalingsoplysninger
                  </span>
                  <span className="micro-label text-[var(--ink-4)]">№ 01</span>
                </div>

                <p className="micro-label text-[var(--ink-3)] mb-2">
                  Bankoverførsel
                </p>
                <p
                  className="font-display text-2xl md:text-3xl text-[var(--ink)] leading-tight mb-5"
                  style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
                >
                  Frøslev Mollerup Sparekasse
                </p>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-8 py-5 border-t border-b border-[var(--ink)]">
                  <span className="micro-label text-[var(--ink-3)]">
                    Reg · Konto
                  </span>
                  <span className="font-mono text-2xl md:text-3xl text-[var(--ink)] tabular-nums tracking-tight">
                    9133 · 1070028
                  </span>
                </div>

                <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                  Ved betaling bedes du oplyse dit navn, adresse og
                  telefonnummer på overførslen, så vi kan spore betalingen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--rule)] text-center">
            <p
              className="font-display italic text-xl md:text-2xl text-[var(--ink-2)] max-w-2xl mx-auto leading-relaxed"
              style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 72' }}
            >
              Tak for din støtte til Vulkanen Mors!
              <br />
              <span className="text-[var(--ink-3)] text-base not-italic">
                Kontakt bestyrelsen herunder hvis du har spørgsmål.
              </span>
            </p>
          </div>
        </PaperCard>

        {/* Vulk mascot */}
        <div id="vulk" className="paper-card p-6 md:p-10 relative overflow-hidden">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[var(--ember)]/20 blur-2xl" />
                <Image
                  src="/Vulk.png"
                  alt="Vulk - Vulkakanistens mascot nøglering"
                  width={280}
                  height={280}
                  className="relative transition-transform duration-500 hover:scale-110 hover:rotate-6"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Kicker color="var(--ember)">Maskot</Kicker>
              <h3
                className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mb-6 leading-[1]"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
              >
                Vores Maskot —{" "}
                <em className="italic text-[var(--ember-deep)]">“Vulk”</em>
              </h3>
              <p className="text-lg text-[var(--ink-2)] leading-relaxed mb-2">
                Vores Maskot Vulkakanisten “Vulk” er sat i fabrikation. Den kan
                købes som nøglering for{" "}
                <strong className="text-[var(--ink)] font-display italic">
                  40 kr.
                </strong>{" "}
                hos <strong className="text-[var(--ink)]">Ørding Købmand</strong>{" "}
                eller ved henvendelse til{" "}
                <a
                  href="tel:23394641"
                  className="link-reveal text-[var(--ember-deep)] font-semibold"
                >
                  23 39 46 41
                </a>
                .
              </p>
              <p className="text-[var(--ink-3)] italic">
                Hele beløb går direkte til Vulkanen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================== BESTYRELSEN ============================== */}
      <Section
        id="kontakt"
        title="Bestyrelsen"
        numeral="§ 09"
        kicker="Kontakt"
        subtitle="Find os i Ørding — kom forbi, ring, eller skriv."
      >
        {/* Address banner */}
        <div className="relative border-2 border-[var(--ink)] bg-[var(--ember)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 text-[var(--ink)]">
          <span className="ornament not-italic text-2xl">✦</span>
          <p
            className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight text-center"
            style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
          >
            Skolesvinget 9, 7990 Øster Assels
          </p>
          <span className="ornament not-italic text-2xl">✦</span>
        </div>

        {/* Board members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {[
            {
              role: "Formand",
              name: "Søren Nygaard",
              tlf: "40 76 78 87",
              email: "srnygaard@hotmail.com",
              color: "var(--ember-deep)",
            },
            {
              role: "Næstformand",
              name: "Martin Bay-Mortensen",
              tlf: "60 15 82 90",
              email: "mamo@danishagro.dk",
              color: "var(--sky)",
            },
            {
              role: "Kasserer",
              name: "Johannes Jørgensen",
              tlf: "23 39 46 41",
              email: "Minna.Johannes61@gmail.com",
              color: "var(--forest)",
            },
            {
              role: "Medlem",
              name: "Kirsten Pedersen",
              tlf: "51 55 77 40",
              email: "npkp65@gmail.com",
              color: "var(--berry)",
            },
            {
              role: "Medlem",
              name: "Morten Pipper",
              tlf: "26 81 93 81",
              email: "mortenpipper@hotmail.com",
              color: "var(--berry)",
            },
            {
              role: "Medlem",
              name: "Søren Lyndrup",
              tlf: "30 70 38 09",
              email: "sl@sorenlyndrup.dk",
              color: "var(--berry)",
            },
            {
              role: "Medlem",
              name: "Anna Marie L. Klysner",
              tlf: "20 44 96 58",
              email: "Anna-tingholm@hotmail.com",
              color: "var(--berry)",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="group relative bg-[var(--paper)] p-6 md:p-8 transition-colors duration-500 hover:bg-[#faf5ea]"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="micro-label"
                  style={{ color: m.color }}
                >
                  ● {m.role}
                </span>
                <span className="micro-label text-[var(--ink-4)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4
                className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-6 leading-tight group-hover:italic transition-all"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 72' }}
              >
                {m.name}
              </h4>
              <div className="space-y-2 text-sm md:text-base">
                <p className="text-[var(--ink-2)]">
                  <span className="micro-label text-[var(--ink-4)] mr-2">
                    Tlf
                  </span>
                  {m.tlf}
                </p>
                <p className="text-[var(--ink-2)] break-all">
                  <span className="micro-label text-[var(--ink-4)] mr-2">
                    Email
                  </span>
                  <a
                    href={`mailto:${m.email}`}
                    className="link-reveal"
                    style={{ color: m.color }}
                  >
                    {m.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}

function ActivityChip({
  time,
  title,
  who,
  color,
}: {
  time: string;
  title: string;
  who: string;
  color: string;
}) {
  return (
    <div
      className="border p-2.5 transition-all hover:-translate-y-0.5"
      style={{ borderColor: color, background: `${color}10` }}
    >
      <div className="micro-label mb-0.5" style={{ color }}>
        {time}
      </div>
      <div className="font-display text-base text-[var(--ink)] leading-tight"
           style={{ fontVariationSettings: '"SOFT" 100, "opsz" 48' }}>
        {title}
      </div>
      <div className="text-xs text-[var(--ink-3)] mt-1">{who}</div>
    </div>
  );
}
