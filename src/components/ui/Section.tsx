import type { ReactNode } from 'react';

type SectionBg = 'white' | 'light' | 'slate' | 'soft-blue' | 'dark' | 'dark-slate';

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
  'soft-blue': 'relative overflow-hidden bg-[#EFF5FF] text-dark',
  dark: 'relative overflow-hidden bg-[#0B1220] text-white',
  'dark-slate': 'relative overflow-hidden bg-[#131D31] text-white',
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
      {(bg === 'dark' || bg === 'dark-slate') && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />
          {bg === 'dark-slate' && (
            <>
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-primary/40 via-emerald-400/50 to-primary/40" />
              <div className="absolute top-10 -left-16 h-64 w-64 rotate-12 border border-emerald-400/15" />
              <div className="absolute bottom-10 -right-12 h-72 w-72 -rotate-6 border border-emerald-400/12" />
              <div className="mx-auto hidden h-full max-w-7xl border-x border-white/5 lg:block" />
            </>
          )}
        </div>
      )}
      {bg === 'soft-blue' && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 right-1/5 h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
          <div className="absolute -bottom-20 left-1/5 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/35 to-transparent" />
          <div className="absolute top-8 -right-12 h-56 w-56 rotate-12 border border-accent/15" />
          <div className="absolute bottom-8 -left-12 h-48 w-48 -rotate-6 border border-primary/12" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
