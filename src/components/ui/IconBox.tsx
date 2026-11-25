import type { LucideIcon } from 'lucide-react';

interface IconBoxProps {
  icon: LucideIcon;
  variant?: 'primary' | 'accent' | 'dark' | 'primary-solid' | 'accent-solid';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary:
    'border-primary/25 bg-primary-light/70 text-primary shadow-[3px_3px_0px_#EBF1FF]',
  accent:
    'border-accent/25 bg-accent-light/80 text-accent shadow-[3px_3px_0px_#ECFDF3]',
  dark:
    'border-dark bg-dark text-white shadow-[3px_3px_0px_#155EEF]',
  'primary-solid':
    'border-primary bg-primary text-white shadow-[3px_3px_0px_#101828]',
  'accent-solid':
    'border-accent bg-accent text-white shadow-[3px_3px_0px_#101828]',
};

const sizeStyles = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-12 w-12',
};

const iconSizeStyles = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export default function IconBox({ icon: Icon, variant = 'primary', size = 'md' }: IconBoxProps) {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center rounded-[2px] border ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      <Icon className={iconSizeStyles[size]} />
    </div>
  );
}
