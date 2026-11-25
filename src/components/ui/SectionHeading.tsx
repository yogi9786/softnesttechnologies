interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  tone?: 'light' | 'dark' | 'primary' | 'tint';
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
    tint: 'border-primary/25 bg-white text-primary',
    dark: 'border-white/20 bg-white/10 text-white',
    primary: 'border-white/30 bg-white/15 text-white',
  }[resolvedTone];

  const dotClasses = {
    light: 'bg-accent',
    tint: 'bg-accent',
    dark: 'bg-accent',
    primary: 'bg-white',
  }[resolvedTone];

  const titleClasses = {
    light: 'text-dark',
    tint: 'text-dark',
    dark: 'text-white',
    primary: 'text-white',
  }[resolvedTone];

  const descClasses = {
    light: 'text-text-secondary',
    tint: 'text-dark-secondary',
    dark: 'text-gray-300',
    primary: 'text-blue-100',
  }[resolvedTone];

  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} mb-12 lg:mb-14`}
    >
      {label && (
        <span
          className={`mb-3 inline-flex items-center gap-2 rounded-[2px] border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${labelClasses}`}
        >
          <span className={`h-1.5 w-1.5 ${dotClasses}`} />
          {label}
        </span>
      )}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${titleClasses}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descClasses}`}>
          {description}
        </p>
      )}
    </div>
  );
}
