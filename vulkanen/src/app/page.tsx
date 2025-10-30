import Image from "next/image";
import Section from "./_components/Section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-center mb-16 tracking-tight mt-24">
            Vulkanen På Mors
          </h1>

          {/* Three Images Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
            {/* Left: Værk */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-48 h-48 md:w-56 md:h-56 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/værk-hvid.png"
                  alt="Værk logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="black text-lg md:text-xl font-medium text-center max-w-xs">
                Fristed for skabelse
              </p>
            </div>

            {/* Center: Vulkan Logo (Larger) */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/vulkan-logo-hvid.png"
                  alt="Vulkanen logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right: Velo Mors */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-48 h-48 md:w-56 md:h-56 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/velo-mors-hvid.png"
                  alt="Velo Mors logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="black text-lg md:text-xl font-medium text-center max-w-xs">
                Centrum for Cykeluniverset på Mors
              </p>
            </div>
          </div>

          {/* Call to Action Text */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-4xl mx-auto leading-relaxed">
              Vi er p.t. i gang med at tegne andele i Vulkanen - Din opbakning er vigtig​
            </h2>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
        <div className="bg-[#ff904b] text-white rounded-lg p-8 text-center shadow-lg mt-8">
          <p className="text-xl md:text-2xl font-semibold">
            Kontakt Bestyrelsen – og tegn anparter. Så støtter du finansieringsplanen
          </p>
        </div>
      </Section>
    </main>
  );
}
