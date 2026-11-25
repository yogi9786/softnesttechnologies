import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { useCalendly } from '../context/CalendlyContext';

interface EnterpriseCTAProps {
  title: string;
  description: string;
  bg?: 'white' | 'slate' | 'soft-blue';
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
    <Section bg={bg} compact className="border-t border-border-light">
      <div className="relative overflow-hidden rounded-[3px] border border-dark border-t-2 border-t-accent bg-[#0B1220] px-5 py-9 text-center shadow-[5px_5px_0px_#16A36A] sm:px-10 sm:py-12 sm:shadow-[8px_8px_0px_#16A36A]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/25 blur-[100px]" />
          <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute -top-8 right-10 h-36 w-36 rotate-12 border border-emerald-400/15" />
          <div className="absolute -bottom-8 left-10 h-32 w-32 -rotate-6 border border-white/8" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-xs border border-emerald-400/35 bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Next Step
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:mt-4 sm:text-base">
            {description}
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              as={Link}
              to="/contact"
              variant="accent"
              surface="dark"
              size="lg"
              mobileCompact
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
                mobileCompact
                onClick={openCalendly}
                className="w-full sm:w-auto"
              >
                <Calendar className="h-4 w-4 text-blue-400" />
                Schedule a Meeting
              </Button>
            )}
          </div>

          {showTrustRow && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-300 sm:mt-8 sm:text-sm">
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
