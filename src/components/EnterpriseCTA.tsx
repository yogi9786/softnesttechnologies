import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { useCalendly } from '../context/CalendlyContext';

interface EnterpriseCTAProps {
  title: string;
  description: string;
  bg?: 'white' | 'slate';
  primaryLabel?: string;
  showSchedule?: boolean;
  showTrustRow?: boolean;
}

export default function EnterpriseCTA({
  title,
  description,
  bg = 'slate',
  primaryLabel = 'Contact Us',
  showSchedule = true,
  showTrustRow = false,
}: EnterpriseCTAProps) {
  const { openCalendly } = useCalendly();

  return (
    <Section bg={bg} className="border-t border-border-light">
      <div className="relative overflow-hidden rounded-[3px] border border-dark bg-[#0B1220] bg-dot-grid-dark px-6 py-12 text-center shadow-[8px_8px_0px_#155EEF] sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/25 blur-[100px]" />
          <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            {description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              surface="dark"
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {showSchedule && (
              <Button
                type="button"
                variant="outline"
                surface="dark"
                size="lg"
                onClick={openCalendly}
                className="w-full sm:w-auto"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </Button>
            )}
          </div>

          {showTrustRow && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Quick turnaround
              </span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
