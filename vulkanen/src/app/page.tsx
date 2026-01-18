"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "./_components/Section";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  const [showOlderNews, setShowOlderNews] = useState(false);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSupport = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('stoet-vulkanen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToStatusNyheder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('status og nyheder');
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
            href="#status og nyheder"
            onClick={scrollToStatusNyheder}
            className="block group"
          >
            {/* Event Details Card with Circle */}
            <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-xs border-l-4 border-[#ff904b] transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              {/* Green Animated Circle - Top Right Corner */}
              <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg animate-pulse-enhanced"></div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Status & Nyheder
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                Læs om det aktuelle der sker på Vulkanen Mors
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
            Vulkanen Mors
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
              Din opbakning er vigtig​
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Tegne Andel Button */}
              <a
                href="#stoet-vulkanen"
                onClick={scrollToSupport}
                className="inline-block bg-[#ff904b] hover:bg-[#e67d3a] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md cursor-pointer"
              >
                Støt Økonomisk
              </a>
              
              {/* Book Vulkanen Button */}
              <a
                href="#book-vulkanen"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('book-vulkanen');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md cursor-pointer"
              >
                Book Vulkanen
              </a>
            </div>
          </div>
        </div>

        {/* AKTUELT Event Card - Mobile only */}
        <div className="block md:hidden mx-auto px-4 py-4">
          <a
            href="#status og nyheder"
            onClick={scrollToStatusNyheder}
            className="block group"
          >
            {/* Event Details Card with Circle */}
            <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-xs border-l-4 border-[#ff904b] transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              {/* Green Animated Circle - Top Right Corner */}
              <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg animate-pulse-enhanced"></div>
               
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Status & Nyheder
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                Læs om det aktuelle der sker på Vulkanen Mors
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
        <div className="hidden md:flex justify-center py-4 mt-auto animate-bounce">
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

      {/* Status & Nyheder Section */}
      <Section
        id="status og nyheder"
        title="Status & Nyheder"
        subtitle="Hvor er vi i processen?"
        className="bg-white"
      >
        {/* Nyhedsbrev 2 - 15-01-2025 */}
        <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] mb-6">
          {/* NEW Badge */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-enhanced">
            NYT
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nyhedsbrev 2 - 15. januar 2025</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Læs det seneste nyhedsbrev fra Vulkanen Mors med opdateringer om foreningens aktiviteter og fremtidsplaner.
          </p>
          <div className="flex justify-end">
            <a
              href="/dokumenter/Vulkanen - nyhedsbrev 2 - 15-01-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ff904b] hover:bg-[#e67d3a] text-white font-semibold text-base px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center">
                Læs mere
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Vedtægter Vulkanen Mors */}
        <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-teal-500 mb-6">
          {/* For Nyligt Badge */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            For Nyligt
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vedtægter Vulkanen Mors</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Læs foreningens vedtægter og få indblik i formål, medlemskab, bestyrelse og meget mere.
          </p>
          <div className="flex justify-end">
            <a
              href="/dokumenter/vedtægter-vulkanen.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center">
                Læs mere
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* General Status */}
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-blue-500 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Andel Status</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vi er i gang med at samle opbakning og tegne andele. Følg med her for opdateringer om projektets fremskridt.
          </p>
        </div>

        {/* Toggle Button for Older News */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowOlderNews(!showOlderNews)}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-base px-6 py-3 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105"
          >
            <span>{showOlderNews ? 'Skjul' : 'Læs'} tidligere nyheder og information</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${showOlderNews ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Collapsible Older News Section */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            showOlderNews ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {/* Latest News */}
          <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] mb-6">
            {/* For Nyligt Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              For Nyligt
            </div>
            
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Velkommen til Vulkanen!</h3>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">15. november 2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vulkanen slår dørene op på vid gab og byder alle velkommen. Styregruppen for etableringen ser frem til stiftende generalforsamling for Vulkanen Mors mandag den 24/11. Kom og være med, begynder med fællesspisning kl. 17.30. Her er plads til alle ideer og forslag der kan skabe liv og fællesskab i disse fantastiske rammer der nu er i borgernes hænder.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Vi ses
            </p>
            <p className="text-base text-gray-600 mt-2">
              - Johannes Jørgensen
            </p>
          </div>

          {/* Fællesspisning Event */}
          <div id="faellesspisning" className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-teal-500 mb-6">
            {/* For Nyligt Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              For Nyligt
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fællesspisning den 24/11</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vi skal fejre, at vi i fællesskab har købt Friskolens bygninger. - <strong>Vulkanen er tændt!</strong>
            </p>
            <div className="flex justify-end">
              <a
                href="/dokumenter/fællesspisning-24-nov.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center">
                  Læs mere
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Section>

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
            href="#stoet-vulkanen"
            onClick={scrollToSupport}
            className="inline-block bg-[#ff904b] hover:bg-[#e67d3a] text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md cursor-pointer"
          >
            Tegn anpart
          </a>
        </div>
      </Section>

      {/* VÆRKsted Section */}
      <Section
        id="vaerksted"
        title="VÆRKsted"
        subtitle="Et fristed for skabende mennesker - Især børn og unge"
        className="bg-gray-50"
      >
        {/* Kerneidéer and Image - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Værk Image - First on mobile, second on desktop */}
          <div className="flex items-center justify-center md:order-2">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/værk-hvid.png"
                alt="Værk logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Kerneidéer - Second on mobile, first on desktop */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] md:order-1">
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
        {/* Kerneidéer and Image - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Velo Mors Image - First on mobile, second on desktop */}
          <div className="flex items-center justify-center md:order-2">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="/velo-mors-hvid.png"
                alt="Velo Mors logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Kerneidéer - Second on mobile, first on desktop */}
          <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] md:order-1">
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

      {/* Book Vulkanen Section */}
      <Section
        id="book-vulkanen"
        title="Book Vulkanen"
        subtitle="Book Vulkanen til din event"
        className="bg-white"
      >
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#ff904b] mb-6">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Ønsker du at booke lokaler i Vulkanen så kontakt Johannes Jørgensen
          </p>
          
          {/* Johannes Contact Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-green-500 max-w-md mx-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-green-500 mb-2">Kasserer</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Johannes Jørgensen</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 23 39 46 41
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:Minna.Johannes61@gmail.com" className="text-green-500 hover:underline">
                Minna.Johannes61@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Støt Vulkanen Section */}
      <Section
        id="stoet-vulkanen"
        title="Støt Vulkanen"
        subtitle="Din støtte gør en forskel"
        className="bg-gray-50"
      >
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border-l-4 border-[#ff904b] text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Kunne du tænke dig at støtte op om projekt Vulkanen Mors med økonomisk støtte?
            Der er mulighed for at købe indskudsbeviser à <strong>2.500 kr.</strong> eller give en gave.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 md:p-10 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Betalingsoplysninger</h3>
            
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-[#049133] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-600 mb-2">Bankoverførsel</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Frøslev Mollerup Sparekasse</p>
                <p className="text-2xl md:text-3xl font-mono font-bold text-gray-900 mb-6">9133 - 1070028</p>
                <p className="text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">Ved betaling bedes du oplyse dit navn, adresse og telefonnummer på overførslen, så vi kan spore betalingen.</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 italic">
            Tak for din støtte til Vulkanen Mors!
            <br />
            Kontakt bestyrelsen herunder hvis du har spørgsmål
          </p>
        </div>
      </Section>

      {/* Bestyrelsen Section */}
      <Section
        id="kontakt"
        title="Bestyrelsen"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Formand */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#ff904b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-[#ff904b] mb-2">Formand</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Søren Nygaard</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 40 76 78 87
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:srnygaard@hotmail.com" className="text-[#ff904b] hover:underline">
                srnygaard@hotmail.com
              </a>
            </div>
          </div>

          {/* Næstformand */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-blue-500 mb-2">Næstformand</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Martin Bay-Mortensen</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 60 15 82 90
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:mamo@danishagro.dk" className="text-blue-500 hover:underline">
                mamo@danishagro.dk
              </a>
            </div>
          </div>

          {/* Kasserer */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-green-500 mb-2">Kasserer</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Johannes Jørgensen</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 23 39 46 41
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:Minna.Johannes61@gmail.com" className="text-green-500 hover:underline">
                Minna.Johannes61@gmail.com
              </a>
            </div>
          </div>

          {/* Medlem - Kirsten Pedersen */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-purple-500 mb-2">Medlem</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Kirsten Pedersen</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 51 55 77 40
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:npkp65@gmail.com" className="text-purple-500 hover:underline">
                npkp65@gmail.com
              </a>
            </div>
          </div>

          {/* Medlem - Morten Pipper */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-purple-500 mb-2">Medlem</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Morten Pipper</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 26 81 93 81
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:mortenpipper@hotmail.com" className="text-purple-500 hover:underline">
                mortenpipper@hotmail.com
              </a>
            </div>
          </div>

          {/* Medlem - Søren Lyndrup */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-purple-500 mb-2">Medlem</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Søren Lyndrup</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 30 70 38 09
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:sl@sorenlyndrup.dk" className="text-purple-500 hover:underline">
                sl@sorenlyndrup.dk
              </a>
            </div>
          </div>

          {/* Medlem - Anna Marie L. Klysner */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-semibold text-purple-500 mb-2">Medlem</div>
            <div className="text-2xl font-bold text-gray-900 mb-3">Anna Marie L. Klysner</div>
            <div className="text-lg text-gray-700 mb-2">
              <strong>Tlf:</strong> 20 44 96 58
            </div>
            <div className="text-lg text-gray-700">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:Anna-tingholm@hotmail.com" className="text-purple-500 hover:underline">
                Anna-tingholm@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
