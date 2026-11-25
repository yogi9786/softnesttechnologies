import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-[3px] border border-border-light bg-white p-6 sm:p-7 ${
        hover
          ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[5px_5px_0px_#EBF1FF]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
