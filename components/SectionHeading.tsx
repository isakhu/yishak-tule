interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
