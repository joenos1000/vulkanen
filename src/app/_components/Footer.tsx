import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--ink)] text-[var(--paper-3)] overflow-hidden">
      {/* Giant typographic mark */}
      <div className="absolute -bottom-10 md:-bottom-24 left-0 right-0 pointer-events-none select-none">
        <p
          className="font-display text-[22vw] leading-[0.8] text-[var(--paper)]/5 whitespace-nowrap text-center"
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
        >
          Vulkanen·Mors
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-20 pb-10">
        {/* Masthead */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-5">
            <Link href="/" aria-label="Vulkanen logo" className="inline-flex items-center gap-4 mb-6 group">
              <div className="relative h-16 w-16 transition-transform group-hover:rotate-[-6deg]">
                <Image
                  src="/vulkanen-favicon.png"
                  alt="Vulkanen logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="font-display text-4xl text-[var(--paper)]"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 96' }}
              >
                Vulkanen
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-[var(--paper-3)]/80">
              Vulkanen På Mors — Et nyt kapitel for Ørding. Vi skaber et levende
              møde- og lærested for kreativitet, bevægelse og fællesskab.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="micro-label text-[var(--paper-3)]/60 mb-4">Indeks</p>
            <ul className="space-y-2 text-[var(--paper)] font-display text-lg">
              <li>
                <Link href="#finansieringsplan" className="link-reveal">
                  Finansieringsplan
                </Link>
              </li>
              <li>
                <Link href="#status og nyheder" className="link-reveal">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#vaerksted" className="link-reveal">
                  VÆRKsted
                </Link>
              </li>
              <li>
                <Link href="#velo-mors" className="link-reveal">
                  Velo Mors
                </Link>
              </li>
              <li>
                <Link href="#vaerdier" className="link-reveal">
                  Værdier
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="link-reveal">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="micro-label text-[var(--paper-3)]/60 mb-4">
              Find os
            </p>
            <address className="not-italic text-[var(--paper)] font-display text-lg leading-snug mb-6">
              Skolesvinget 9
              <br />
              7990 Øster Assels
            </address>
            <Link
              href="#kontakt"
              className="btn-ember !bg-[var(--paper)] !text-[var(--ink)] !border-[var(--paper)] hover:!bg-[var(--ember)] hover:!border-[var(--ember)] hover:!text-[var(--ink)]"
            >
              Tegn Anpart →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[var(--paper-3)]/20 mb-6" />

        {/* Colophon */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="micro-label text-[var(--paper-3)]/60">
            © {currentYear} · Vulkanen På Mors · Alle rettigheder forbeholdes
          </p>
          <p className="micro-label text-[var(--paper-3)]/60">
            Hjemmeside &amp; design af{" "}
            <Link
              href="https://www.linkedin.com/in/jonaspipper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--moss)] hover:text-[var(--paper)] transition-colors"
            >
              Jonas Pipper
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
