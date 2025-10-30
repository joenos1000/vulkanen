interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#ff904b] rounded-full"></div>
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
}