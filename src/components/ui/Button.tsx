import type { ReactNode, ElementType } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonSurface = 'light' | 'dark' | 'primary';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  surface?: ButtonSurface;
  className?: string;
  as?: ElementType;
  [key: string]: unknown;
}

const lightVariantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border border-primary-dark shadow-[4px_4px_0px_#101828] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[5px_5px_0px_#101828] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#101828]',
  secondary:
    'bg-dark text-white border border-dark shadow-[4px_4px_0px_#155EEF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-dark-secondary hover:shadow-[5px_5px_0px_#155EEF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#155EEF]',
  outline:
    'bg-white text-dark border border-dark shadow-[4px_4px_0px_#101828] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-bg-light hover:shadow-[5px_5px_0px_#155EEF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#101828]',
  accent:
    'bg-accent text-white border border-accent-dark shadow-[4px_4px_0px_#101828] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[5px_5px_0px_#101828] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#101828]',
  ghost:
    'bg-transparent text-text-secondary border border-transparent hover:bg-bg-light hover:text-dark',
};

const darkVariantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border border-primary shadow-[4px_4px_0px_#16A36A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[5px_5px_0px_#16A36A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#16A36A]',
  secondary:
    'bg-white text-dark border border-white shadow-[4px_4px_0px_#155EEF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-bg-light hover:shadow-[5px_5px_0px_#155EEF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#155EEF]',
  outline:
    'bg-dark-secondary text-white border border-white/80 shadow-[4px_4px_0px_#155EEF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[5px_5px_0px_#155EEF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#155EEF]',
  accent:
    'bg-accent text-white border border-accent shadow-[4px_4px_0px_#155EEF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[5px_5px_0px_#155EEF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#155EEF]',
  ghost:
    'bg-transparent text-gray-300 border border-transparent hover:bg-white/10 hover:text-white',
};

const primarySurfaceVariantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-primary border border-white shadow-[4px_4px_0px_#101828] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-bg-light hover:shadow-[5px_5px_0px_#101828] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#101828]',
  secondary:
    'bg-dark text-white border border-dark shadow-[4px_4px_0px_#FFFFFF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-dark-secondary hover:shadow-[5px_5px_0px_#FFFFFF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#FFFFFF]',
  outline:
    'bg-transparent text-white border border-white/85 shadow-[4px_4px_0px_#101828] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[5px_5px_0px_#101828] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#101828]',
  accent:
    'bg-accent text-white border border-accent-dark shadow-[4px_4px_0px_#101828] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[5px_5px_0px_#101828] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#101828]',
  ghost:
    'bg-transparent text-blue-100 border border-transparent hover:bg-white/15 hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  surface = 'light',
  className = '',
  as: Component = 'button',
  ...props
}: ButtonProps) {
  const variantClasses =
    surface === 'dark'
      ? darkVariantStyles[variant]
      : surface === 'primary'
      ? primarySurfaceVariantStyles[variant]
      : lightVariantStyles[variant];

  return (
    <Component
      className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[2px] font-semibold tracking-tight transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
