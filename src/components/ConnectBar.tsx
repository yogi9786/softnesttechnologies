import { Mail, Phone, Calendar, Send } from 'lucide-react';
import { COMPANY } from '../constants';
import { useCalendly } from '../context/CalendlyContext';

interface ConnectBarProps {
  label?: string;
  onInquiryClick?: () => void;
  surface?: 'light' | 'dark';
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3 1.8 2.2 3.7 4 4l1.2-.8c.4-.2.9-.1 1.2.2l.9.9c.3.3.3.8 0 1.1-.6.7-1.6 1-2.6.8-2.6-.5-5.6-3.5-6.1-6.1-.2-1 .1-2 .8-2.6.3-.3.8-.3 1.1 0l.9.9c.3.3.4.8.2 1.2l-.6.4z" />
    </svg>
  );
}

export default function ConnectBar({
  label = 'CONNECT',
  onInquiryClick,
  surface = 'light',
}: ConnectBarProps) {
  const { openCalendly } = useCalendly();

  const tileBase =
    surface === 'dark'
      ? 'flex h-10 w-10 items-center justify-center rounded-[2px] border border-white/20 bg-dark-secondary transition-all duration-150 hover:-translate-y-0.5 hover:border-primary hover:shadow-[3px_3px_0px_#155EEF] cursor-pointer'
      : 'flex h-10 w-10 items-center justify-center rounded-[2px] border border-border-dark bg-white transition-all duration-150 hover:-translate-y-0.5 hover:border-primary hover:shadow-[3px_3px_0px_#155EEF] cursor-pointer';

  return (
    <div
      className={`border-t pt-6 ${
        surface === 'dark' ? 'border-white/10' : 'border-border-light'
      }`}
    >
      <div className="flex flex-wrap items-center gap-4">
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
            surface === 'dark' ? 'text-text-tertiary' : 'text-text-secondary'
          }`}
        >
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={`mailto:${COMPANY.email}`}
            title={`Email ${COMPANY.email}`}
            aria-label="Email The Softnest Technologies"
            className={`${tileBase} text-primary`}
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>

          <a
            href={`tel:${COMPANY.phoneRaw}`}
            title={`Call ${COMPANY.phone}`}
            aria-label="Call The Softnest Technologies"
            className={`${tileBase} ${surface === 'dark' ? 'text-white' : 'text-dark'}`}
          >
            <Phone className="h-[18px] w-[18px]" />
          </a>

          <a
            href={`https://wa.me/${COMPANY.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Message on WhatsApp"
            aria-label="WhatsApp The Softnest Technologies"
            className={`${tileBase} text-accent hover:border-accent hover:shadow-[3px_3px_0px_#16A36A]`}
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>

          <button
            type="button"
            onClick={openCalendly}
            title="Schedule a Meeting"
            aria-label="Schedule a Meeting"
            className={`${tileBase} text-primary`}
          >
            <Calendar className="h-[18px] w-[18px]" />
          </button>

          {onInquiryClick && (
            <button
              type="button"
              onClick={onInquiryClick}
              title="Send an Inquiry"
              aria-label="Go to contact form"
              className={`${tileBase} text-accent hover:border-accent hover:shadow-[3px_3px_0px_#16A36A]`}
            >
              <Send className="h-[17px] w-[17px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
