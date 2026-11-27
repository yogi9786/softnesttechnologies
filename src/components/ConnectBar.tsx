import { Mail, Calendar, Send } from 'lucide-react';
import { COMPANY } from '../constants';
import { useCalendly } from '../context/CalendlyContext';

interface ConnectBarProps {
  label?: string;
  onInquiryClick?: () => void;
  surface?: 'light' | 'dark';
}

export default function ConnectBar({
  label = 'CONNECT',
  onInquiryClick,
  surface = 'light',
}: ConnectBarProps) {
  const { openCalendly } = useCalendly();

  const tileBase =
    surface === 'dark'
      ? 'flex h-10 w-10 items-center justify-center rounded-xs border border-white/25 bg-[#131C2E]/90 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-[3px_3px_0px_#155EEF] cursor-pointer'
      : 'flex h-10 w-10 items-center justify-center rounded-xs border border-border-dark bg-white transition-all duration-150 hover:-translate-y-0.5 hover:border-primary hover:shadow-[3px_3px_0px_#155EEF] cursor-pointer';

  const blueIcon = surface === 'dark' ? 'text-blue-400' : 'text-primary';
  const greenIcon = surface === 'dark' ? 'text-emerald-400' : 'text-accent';

  return (
    <div
      className={`border-t pt-6 ${
        surface === 'dark' ? 'border-white/15' : 'border-border-light'
      }`}
    >
      <div className="flex flex-wrap items-center gap-4">
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
            surface === 'dark' ? 'text-gray-300' : 'text-text-secondary'
          }`}
        >
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={`mailto:${COMPANY.email}`}
            title={`Email ${COMPANY.email}`}
            aria-label="Email The Softnest Technologies"
            className={`${tileBase} ${blueIcon}`}
          >
            <Mail className="h-4.5 w-4.5" />
          </a>

          <button
            type="button"
            onClick={openCalendly}
            title="Schedule a Meeting"
            aria-label="Schedule a Meeting"
            className={`${tileBase} ${blueIcon}`}
          >
            <Calendar className="h-4.5 w-4.5" />
          </button>

          {onInquiryClick && (
            <button
              type="button"
              onClick={onInquiryClick}
              title="Send an Inquiry"
              aria-label="Go to contact form"
              className={`${tileBase} ${greenIcon} hover:border-accent hover:shadow-[3px_3px_0px_#16A36A]`}
            >
              <Send className="h-4.25 w-4.25" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
