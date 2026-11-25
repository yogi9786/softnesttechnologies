interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  tone?: 'light' | 'dark' | 'slate' | 'light-blue';
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = false,
  tone,
}: SectionHeadingProps) {
  const resolvedTone = tone ?? (dark ? 'dark' : 'light');

  const labelClasses = {
    light: 'border-primary/20 bg-primary-light/70 text-primary',
    slate: 'border-primary/25 bg-white text-primary',
    'light-blue': 'border-primary/30 bg-white text-primary shadow-[2px_2px_0px_#D6E4FF]',
    dark: 'border-white/20 bg-white/10 text-white',
  }[resolvedTone];

  const titleClasses = {
    light: 'text-dark',
    slate: 'text-dark',
    'light-blue': 'text-dark',
    dark: 'text-white',
  }[resolvedTone];

  const descClasses = {
    light: 'text-text-secondary',
    slate: 'text-dark-secondary',
    'light-blue': 'text-dark-secondary',
    dark: 'text-gray-300',
  }[resolvedTone];

  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} mb-8 lg:mb-10`}
    >
      {label && (
        <span
          className={`mb-2.5 inline-flex items-center gap-2 rounded-xs border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${labelClasses}`}
        >
          <span className="h-1.5 w-1.5 bg-accent" />
          {label}
        </span>
      )}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${titleClasses}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed sm:text-lg ${descClasses}`}>
          {description}
        </p>
      )}
    </div>
  );
}
