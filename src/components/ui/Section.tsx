import type { ReactNode } from 'react';

type SectionBg = 'white' | 'light' | 'slate' | 'light-blue' | 'soft-blue' | 'dark';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: SectionBg;
  compact?: boolean;
  id?: string;
}

const bgStyles: Record<SectionBg, string> = {
  white: 'bg-white text-dark',
  light: 'bg-bg-light text-dark',
  slate: 'bg-[#F3F6FB] text-dark',
  'light-blue': 'relative overflow-hidden bg-blueprint-blue text-dark',
  'soft-blue': 'relative overflow-hidden bg-[#EFF5FF] bg-dot-grid text-dark',
  dark: 'relative overflow-hidden bg-[#0B1220] text-white',
};

export default function Section({
  children,
  className = '',
  bg = 'white',
  compact = false,
  id,
}: SectionProps) {
  const paddingClass = compact
    ? 'py-10 sm:py-12 lg:py-14'
    : 'py-12 sm:py-14 lg:py-16';

  return (
    <section id={id} className={`${paddingClass} ${bgStyles[bg]} ${className}`}>
      {bg === 'dark' && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
        </div>
      )}
      {bg === 'light-blue' && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-white/75 blur-[90px]" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />
        </div>
      )}
      {bg === 'soft-blue' && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 right-1/5 h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
          <div className="absolute -bottom-20 left-1/5 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
