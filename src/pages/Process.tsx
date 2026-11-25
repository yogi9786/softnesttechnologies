import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useCalendly } from '../context/CalendlyContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PROCESS_STEPS } from '../constants';

export default function Process() {
  const { openCalendly } = useCalendly();

  usePageMeta({
    title: 'Our Process | The Softnest Technologies',
    description:
      'Discover our structured five-step B2B lead generation process: Understand Requirements, Identify Target Audience, Research Prospects, Verify Information, and Deliver Qualified Leads.',
  });

  return (
    <>
      {/* 1. Page Header — Dark (#101828) */}
      <section className="border-b border-dark-secondary bg-dark bg-dot-grid-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-[2px] border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-200">
              <span className="h-1.5 w-1.5 bg-accent" />
              Our Process
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              How We{' '}
              <span className="text-primary">Deliver Results</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              A structured, transparent five-step process designed to deliver
              qualified leads efficiently and consistently.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Process Steps — Soft Light Slate Dot-Grid */}
      <Section bg="light" className="border-b border-border-light bg-dot-grid">
        <SectionHeading
          label="Five-Step Process"
          title="From Research to Results"
          description="Every engagement follows a proven process to ensure quality and consistency."
          tone="tint"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-border-dark md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-6 md:space-y-10">
            {PROCESS_STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isAccent = step.step === 5 || step.step === 4;

              return (
                <div
                  key={step.step}
                  className="relative flex items-start gap-4 md:items-center md:gap-0"
                >
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isLeft ? 'md:pr-10' : 'md:order-3 md:pl-10'
                    }`}
                  >
                    <Card className={isLeft ? 'md:text-right' : 'md:text-left'}>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${
                          isAccent ? 'text-accent' : 'text-primary'
                        }`}
                      >
                        Step 0{step.step}
                      </span>
                      <h3 className="mt-1.5 text-lg font-bold text-dark">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </Card>
                  </div>

                  <div className="relative z-10 flex shrink-0 md:order-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[2px] border-2 border-white text-base font-bold text-white shadow-[3px_3px_0px_#101828] ${
                        isAccent ? 'bg-accent' : 'bg-primary'
                      }`}
                    >
                      0{step.step}
                    </div>
                  </div>

                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:order-3' : ''}`} />

                  <div className="flex-1 md:hidden">
                    <Card>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${
                          isAccent ? 'text-accent' : 'text-primary'
                        }`}
                      >
                        Step 0{step.step}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-dark">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. CTA — Primary Blue (#155EEF) */}
      <Section bg="primary" className="bg-dot-grid-dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-100">
            Book a call to discuss your requirements and see how our process works for your business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              as={Link}
              to="/contact"
              variant="secondary"
              surface="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              surface="primary"
              size="lg"
              onClick={openCalendly}
              className="w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
