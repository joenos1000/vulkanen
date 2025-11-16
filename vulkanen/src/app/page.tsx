"use client";

import Image from "next/image";
import Section from "./_components/Section";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col bg-white overflow-hidden pt-24">
        {/* AKTUELT Event Card - Desktop only: positioned on the left, same level as hero image */}
        <div className="hidden md:block absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="/dokumenter/fællesspisning-24-nov.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            {/* Event Details Card with Circle */}
            <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-xs border-l-4 border-[#ff904b] transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              {/* Green Animated Circle - Top Right Corner */}
              <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg animate-pulse-enhanced"></div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Fællesspisning den 24/11
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                Vi skal fejre, at vi i fællesskab har købt Friskolens bygninger. Vulkanen er tændt!
              </p>
              <div className="text-[#ff904b] font-semibold text-base flex items-center">
                <span>Læs mere</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-center mb-8 tracking-tight">
            Vulkanen På Mors
          </h1>

          {/* Bestyrelse Image */}
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full max-w-4xl h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/billeder/bestyrelse-foran-vulkanen.JPEG"
                alt="Bestyrelsen foran Vulkanen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Call to Action Text */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 max-w-4xl mx-auto leading-relaxed mb-8">
              Vi er i gang med at tegne andele - Din opbakling er vigtig​
            </h2>
            
            {/* Tegne Andel Button */}
            <a
              href="#kontakt"
              onClick={scrollToContact}
              className="inline-block bg-[#ff904b] hover:bg-[#e67d3a] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md cursor-pointer"
            >
              Tegn anpart
            </a>
          </div>
        </div>

        {/* AKTUELT Event Card - Mobile only */}
        <div className="block md:hidden mx-auto px-4 py-4">
          <a
            href="/dokumenter/fællesspisning-24-nov.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            {/* Event Details Card with Circle */}
            <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-xs border-l-4 border-[#ff904b] transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              {/* Green Animated Circle - Top Right Corner */}
              <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg animate-pulse-enhanced"></div>
               
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Fællesspisning den 24/11
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                Vi skal fejre, at vi i fællesskab har købt Friskolens bygninger. Vulkanen er tændt!
              </p>
              <div className="text-[#ff904b] font-semibold text-base flex items-center">
                <span>Læs mere</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center py-4 mt-auto animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Finansieringsplan Section */}
      <Section
        id="finansieringsplan"
        title="Finansieringsplan"
        subtitle="Det bliver centralt at sikre en overgangsperiode på op til 2 år mens visionen formes og realiseres."
        className="bg-gray-50"
      >
        {/* Finansieringsmodel */}
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Finansieringsmodel</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Der dannes en forening eller selskab som overtager bygningerne.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Foreningen/selskabet står selv for drift i 2 år, evt. med understøttelse.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Vi tegner andele af 2500kr/styk</span>
            </li>
          </ul>
        </div>

        {/* Fordele og Udfordringer */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Fordele */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fordele</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl font-bold">+</span>
                <span>Lokal handlekraft og frihed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl font-bold">+</span>
                <span>Sponsorater og anparter kan inddrages</span>
              </li>
            </ul>
          </div>

          {/* Udfordringer */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-amber-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Udfordringer</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 text-2xl font-bold">-</span>
                <span>Kræver kapital og driftssikring i 2 år</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Kontakt Bestyrelsen – og tegn anparter. Så støtter du finansieringsplanen
          </p>
          <a
            href="#kontakt"
            onClick={scrollToContact}
            className="inline-block bg-[#ff904b] hover:bg-[#e67d3a] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md cursor-pointer"
          >
            Tegn anpart
          </a>
        </div>
      </Section>

      {/* Status Section */}
      <Section
        id="status"
        title="Status"
        subtitle="Hvor er vi i processen?"
        className="bg-white"
      >
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Vi er i gang med at samle opbakning og tegne andele. Følg med her for opdateringer om projektets fremskridt.
          </p>
        </div>
      </Section>

      {/* VÆRKsted Section */}
      <Section
        id="vaerksted"
        title="VÆRKsted"
        subtitle="Et fristed for skabende mennesker - Især børn og unge"
        className="bg-gray-50"
      >
        {/* Værk Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/værk-hvid.png"
              alt="Værk logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Kerneidéer */}
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Kerneidéer</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Plads til dem der falder udenfor traditionelle læringsrum</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Fokus på proces frem for præstation</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Kreativitet som vej til styrke, tilhørighed og udvikling</span>
            </li>
          </ul>
        </div>

        {/* Mål and Finansieringspotentiale - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Mål */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mål</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At skabe et sted, hvor kreativitet og forskellighed bliver styrker – og hvor relationer og identitet kan vokse i takt med de kunstneriske udtryk.
            </p>
          </div>

          {/* Finansieringspotentiale */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Finansieringspotentiale</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fonde der støtter social inklusion, læring og kreativ udvikling (fx Spar Nord, Egmont, Nordea-fonden).
            </p>
          </div>
        </div>

        {/* Konkrete elementer og synergier */}
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Konkrete elementer og synergier</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Kreative værksteder: keramik, tekstil, billedkunst, musik, digitalt design</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Øvelokaler og teatermiljø</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Rå og upolerede rammer til eksperimenterende kunst og formidling</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Uderum med bålplads, kunsthaver, sansestier og lydkunst i naturen</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Workshops og kreative lejrskoler (fx Farv med planter, Lyde fra skoven)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Udstillinger, events og festivaler – kreative i naturen</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Udlejning af rum og samarbejde med kunstnere, skoler og sociale aktører</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Overnatningsmuligheder for større grupper</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Samarbejde med Ørding Købmandsgaard om forplejning</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Velo Mors Section */}
      <Section
        id="velo-mors"
        title="Velo Mors"
        subtitle="Et cykelunivers i bevægelse"
        className="bg-white"
      >
        {/* Velo Mors Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/velo-mors-hvid.png"
              alt="Velo Mors logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Kerneidéer */}
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Kerneidéer</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Cyklen som adgang til naturen og lokalt fællesskab</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Aktiviteter for alle niveauer og aldre</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ff904b] mr-3 mt-1">•</span>
              <span>Bevægelse som socialt og sanseligt anker</span>
            </li>
          </ul>
        </div>

        {/* Mål and Finansieringspotentiale - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Mål */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mål</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At skabe et fysisk og socialt rum, hvor mennesker samles om bevægelse og naturoplevelser – og hvor det handler om at være sammen på vej, ikke hurtigst.
            </p>
          </div>

          {/* Finansieringspotentiale */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Finansieringspotentiale</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Støtte fra fonde der prioriterer friluftsliv, fællesskab og lokaludvikling (fx Nordea-fonden).
            </p>
          </div>
        </div>

        {/* Konkrete elementer og synergier */}
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Konkrete elementer og synergier</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Udlejning af mange typer cykler (elcykler, gravelbikes, børnecykler m.m.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Guidede ture og temaruter (fx Cykel + Fjordtur, Cykel + Bålmad)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Tekniktræning, unicycling, cykelværksted og opbevaring</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Lejrskolepakker med kombination af cykling, læring og naturformidling</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Overnatningsmuligheder for større grupper</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Samarbejde med Ørding Købmandsgaard om forplejning</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Fællesspisning, events og festivaler – fx Tour de Kultur</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Trafiklegeplads til børn</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">•</span>
              <span>Mulighed for udvikling af VELO-brand og merchandise</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Værdier Section */}
      <Section
        id="vaerdier"
        title="Værdier"
        subtitle="Uanset hvilken retning vi bevæger os i, er der enighed om nogle centrale værdier og hensyn​"
        className="bg-gray-50"
      >
        {/* Introductory Text */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Området skal være et levende møde- og lærested, der rummer mennesker på tværs af alder og baggrund.​
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tilhørighed og samskabelse er fundamentet for både aktiviteter, drift og stemning.​
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tilgængelighed</h3>
            <p className="text-gray-700">
              Aktiviteter og udstyr skal være familievenlige og imødekommende – både fysisk og socialt.​
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bevarelse af udearealer</h3>
            <p className="text-gray-700">
              Legepladsen og de grønne områder omkring skolen skal bevares og være en integreret del af visionen – som rum for leg, læring og samvær.​
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bevarelse af aktiviteter</h3>
            <p className="text-gray-700">
              Skolen rummer i dag mange foreninger og aktiviteter, disse skal bevares og få den plads og rum der er brug for, så vi sikrer et ligeså godt tilbud til byens børn og voksne.​
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nærhed til naturen</h3>
            <p className="text-gray-700">
              Den særlige placering tæt på fjord, skov og strand skal udnyttes aktivt til oplevelser og som identitetsskabende element.​
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lokal forankring</h3>
            <p className="text-gray-700">
              Visionerne skal udvikles i samarbejde og bygger på ønsket om at bevare liv og aktivitet i Ørding og omegn.​
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bæredygtighed – også økonomisk</h3>
            <p className="text-gray-700">
              Bæredygtighed sikres gennem så vidt mulig genbrug, rene råvarer og et princip om gældsfrihed.​
            </p>
          </div>
        </div>
      </Section>

      {/* Kontakt Bestyrelsen Section */}
      <Section
        id="kontakt"
        title="Kontakt Bestyrelsen"
        subtitle="Konktakt os for at tegne anpart"
        className="bg-white"
      >
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm mb-6">
          <p className="text-lg text-gray-700 leading-relaxed text-center font-semibold">
            Vi tegner andele af 2500kr/styk
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          </p>
          <div className="bg-[#ff904b] text-white rounded-lg p-6 text-center shadow-lg space-y-4">
            <div className="text-xl font-semibold">
              <span className="block"><strong>Søren Lyndrup</strong></span>
              <span>Tlf: <a href="tel:30703809" className="underline text-white font-normal">30 70 38 09</a></span>
            </div>
            <div className="text-xl font-semibold">
              <span className="block"><strong>Søren Nygaard</strong></span>
              <span>Tlf: <a href="tel:40767887" className="underline text-white font-normal">40 76 78 87</a></span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
