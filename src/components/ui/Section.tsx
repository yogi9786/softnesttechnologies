import type { ReactNode } from 'react';

type SectionBg = 'white' | 'light' | 'slate' | 'light-blue' | 'dark';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: SectionBg;
  id?: string;
}

const bgStyles: Record<SectionBg, string> = {
  white: 'bg-white text-dark',
  light: 'bg-bg-light text-dark',
  slate: 'bg-[#F3F6FB] text-dark',
  'light-blue': 'bg-[#E9F1FF] text-dark',
  dark: 'relative overflow-hidden bg-[#0B1220] text-white',
};

export default function Section({ children, className = '', bg = 'white', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${bgStyles[bg]} ${className}`}>
      {bg === 'dark' && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
