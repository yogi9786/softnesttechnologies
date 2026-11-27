import {
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Calendar, Mail, ArrowRight, Clock } from 'lucide-react';
import { COMPANY } from '../constants';
import { CalendlyContext } from '../context/CalendlyContext';
import Button from './ui/Button';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function loadCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    if (window.Calendly) {
      resolve();
      return;
    }

    const existingCss = document.querySelector('link[data-calendly-css]');
    if (!existingCss) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.dataset.calendlyCss = 'true';
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-calendly-js]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.dataset.calendlyJs = 'true';
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

interface CalendlyWidgetProps {
  heightClass?: string;
  onAction?: () => void;
}

export function CalendlyEmbed({ heightClass = 'h-145', onAction }: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const hasUrl = Boolean(COMPANY.calendlyUrl.trim());

  useEffect(() => {
    if (!hasUrl || !containerRef.current) return;

    let cancelled = false;
    const container = containerRef.current;
    container.innerHTML = '';

    loadCalendlyAssets().then(() => {
      if (cancelled || !container || !window.Calendly) return;
      window.Calendly.initInlineWidget({
        url: COMPANY.calendlyUrl,
        parentElement: container,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [hasUrl]);

  if (hasUrl) {
    return (
      <div
        ref={containerRef}
        className={`w-full overflow-hidden rounded-xs border border-border-dark bg-white ${heightClass}`}
      />
    );
  }

  return (
    <div className="rounded-xs border border-border-dark bg-white p-6 shadow-[5px_5px_0px_#D0D5DD] sm:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xs border border-primary-dark bg-primary text-white">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-dark">Book a Discovery Consultation</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
              Speak directly with our lead generation specialists to review your target audience, campaign goals, and timeline.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-xs border border-accent/30 bg-accent-light px-3 py-1 text-xs font-semibold text-accent-dark">
              <Clock className="h-3.5 w-3.5" />
              30-Minute Strategy Call
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border-light pt-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${COMPANY.email}?subject=Meeting%20Request%20-%20The%20Softnest%20Technologies`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="break-all">{COMPANY.email}</span>
          </a>
          {pathname === '/contact' ? (
            <Button
              type="button"
              size="sm"
              onClick={() => {
                onAction?.();
                const el = document.getElementById('contact-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Send Inquiry Instead
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              as={Link}
              to="/contact"
              size="sm"
              onClick={onAction}
            >
              Request a Time Slot
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <CalendlyContext.Provider
      value={{
        isOpen,
        openCalendly: () => setIsOpen(true),
        closeCalendly: () => setIsOpen(false),
      }}
    >
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/65 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendly-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[3px] border border-dark bg-white shadow-[8px_8px_0px_#155EEF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border-light px-6 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xs border border-primary/25 bg-primary-light text-primary">
                  <Calendar className="h-4 w-4" />
                </div>
                <h2 id="calendly-modal-title" className="text-base font-semibold text-dark">
                  Schedule a Meeting
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-xs border border-transparent p-1.5 text-text-secondary transition-colors hover:border-border-light hover:bg-bg-light hover:text-dark"
                aria-label="Close scheduling dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <CalendlyEmbed heightClass="h-110 sm:h-130" onAction={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </CalendlyContext.Provider>
  );
}
