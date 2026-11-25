import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  compactMobile?: boolean;
  surface?: 'light' | 'dark';
}

export default function Card({
  children,
  className = '',
  hover = true,
  compactMobile = false,
  surface = 'light',
}: CardProps) {
  const paddingClass = compactMobile ? 'p-3.5 sm:p-6' : 'p-6 sm:p-7';
  const surfaceClass =
    surface === 'dark'
      ? 'border-white/15 bg-[#131D31] text-white'
      : 'border-border-light bg-white';

  return (
    <div
      className={`rounded-[3px] border ${surfaceClass} ${paddingClass} ${
        hover
          ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[5px_5px_0px_#EBF1FF]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
