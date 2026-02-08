import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" aria-label="Vulkanen logo" className="inline-block">
              <Image
                src="/vulkanen-favicon.png"
                alt="Vulkanen logo"
                width={128}
                height={128}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Vulkanen På Mors - Et nyt kapitel for Ørding. Vi skaber et levende møde- og lærested for kreativitet, bevægelse og fællesskab.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#finansieringsplan" className="hover:text-[#ff904b] transition-colors duration-200">
                  Finansieringsplan
                </Link>
              </li>
              <li>
                <Link href="#status" className="hover:text-[#ff904b] transition-colors duration-200">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#vaerksted" className="hover:text-[#ff904b] transition-colors duration-200">
                  VÆRKsted
                </Link>
              </li>
              <li>
                <Link href="#velo-mors" className="hover:text-[#ff904b] transition-colors duration-200">
                  Velo Mors
                </Link>
              </li>
              <li>
                <Link href="#vaerdier" className="hover:text-[#ff904b] transition-colors duration-200">
                  Værdier
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="hover:text-[#ff904b] transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#ff904b] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm">
                  <p>Skolesvinget 9</p>
                  <p>7990 Øster Assels</p>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="#kontakt"
                className="inline-block bg-[#ff904b] hover:bg-[#e67d3a] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Tegn Anpart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Vulkanen På Mors. Alle rettigheder forbeholdes.
            </p>
            <p>
              Hjemmeside og design udarbejdet af <Link href="https://www.linkedin.com/in/jonaspipper/" target="_blank" rel="noopener noreferrer" className="text-[#00bba6] hover:underline">Jonas Pipper</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}