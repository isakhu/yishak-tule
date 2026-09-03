interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">{label}</p>
      <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl md:text-[2.8rem]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">{subtitle}</p>}
    </div>
  );
}
