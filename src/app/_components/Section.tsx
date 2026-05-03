interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  numeral?: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "paper" | "paper-2" | "ink";
}

export default function Section({
  id,
  title,
  subtitle,
  numeral,
  kicker,
  children,
  className = "",
  variant = "paper",
}: SectionProps) {
  const variantStyles = {
    paper: "bg-[var(--paper)]",
    "paper-2": "bg-[var(--paper-2)]",
    ink: "bg-[var(--ink)] text-[var(--paper)]",
  };

  const isDark = variant === "ink";

  return (
    <section
      id={id}
      className={`relative px-4 sm:px-6 md:px-10 py-20 md:py-32 ${variantStyles[variant]} ${className}`}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Top rule with micro-label */}
        <div className="mb-10 flex items-center gap-4">
          <span
            className={`micro-label ${isDark ? "text-[var(--paper-3)]" : "text-[var(--ink-3)]"}`}
          >
            {numeral ?? "§"}
          </span>
          <div
            className={`h-px flex-1 ${isDark ? "bg-[var(--paper-3)]/30" : "bg-[var(--rule)]"}`}
          />
          {kicker && (
            <span
              className={`micro-label ${isDark ? "text-[var(--paper-3)]" : "text-[var(--ink-3)]"}`}
            >
              {kicker}
            </span>
          )}
        </div>

        {/* Title block */}
        <div className="mb-14 md:mb-20 grid grid-cols-12 gap-6 md:gap-8 items-end">
          <h2
            className={`font-display col-span-12 md:col-span-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight ${isDark ? "text-[var(--paper)]" : "text-[var(--ink)]"}`}
            style={{ fontVariationSettings: '"SOFT" 50, "WONK" 0, "opsz" 144' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`col-span-12 md:col-span-4 text-base md:text-lg leading-relaxed text-pretty ${isDark ? "text-[var(--paper-3)]" : "text-[var(--ink-2)]"} md:border-l md:border-[var(--rule)] md:pl-6`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
}
