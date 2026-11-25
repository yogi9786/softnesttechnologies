import { createContext, useContext } from 'react';

export interface CalendlyContextValue {
  isOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

export const CalendlyContext = createContext<CalendlyContextValue | undefined>(undefined);

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) {
    throw new Error('useCalendly must be used inside CalendlyProvider');
  }
  return ctx;
}
