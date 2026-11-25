import type { ReactNode } from 'react';

type SectionBg = 'white' | 'light' | 'blue-tint' | 'primary' | 'dark';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: SectionBg;
  id?: string;
}

const bgStyles: Record<SectionBg, string> = {
  white: 'bg-white text-dark',
  light: 'bg-bg-light text-dark',
  'blue-tint': 'bg-[#EEF4FF] text-dark',
  primary: 'bg-primary text-white',
  dark: 'bg-dark text-white',
};

export default function Section({ children, className = '', bg = 'white', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${bgStyles[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
