import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import EnterpriseCTA from '../components/EnterpriseCTA';
import { usePageMeta } from '../hooks/usePageMeta';
import { PROCESS_STEPS } from '../constants';

const stepOutputs: Record<number, string> = {
  1: 'Discovery Brief & Goals',
  2: 'Segmented ICP Map',
  3: 'Curated Prospect List',
  4: 'Verified Email & Phone QA',
  5: 'Sales-Ready Lead Handoff',
};

function StepCard({
  stepNumber,
  title,
  description,
  isAccent,
  alignRight = false,
}: {
  stepNumber: number;
  title: string;
  description: string;
  isAccent: boolean;
  alignRight?: boolean;
}) {
  return (
    <Card
      className={`border-border-dark/70 border-t-2 ${
        isAccent
          ? 'border-t-accent shadow-[4px_4px_0px_#16A36A]'
          : 'border-t-primary shadow-[4px_4px_0px_#155EEF]'
      } ${alignRight ? 'md:text-right' : 'md:text-left'}`}
    >
      <div
        className={`flex items-center justify-between gap-2 ${
          alignRight ? 'md:flex-row-reverse' : ''
        }`}
      >
        <span
          className={`inline-flex items-center gap-1.5 rounded-xs border px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest ${
            isAccent
              ? 'border-accent/30 bg-accent-light text-accent-dark'
              : 'border-primary/25 bg-primary-light/60 text-primary-dark'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
          />
          Step 0{stepNumber}
        </span>
        <span className="text-[11px] font-semibold text-text-secondary">Phase 0{stepNumber}</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-dark">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{description}</p>
      <div
        className={`mt-4 flex items-center justify-between rounded-xs border border-border-light bg-bg-light px-3 py-1.5 text-xs font-semibold text-dark ${
          alignRight ? 'md:flex-row-reverse' : ''
        }`}
      >
        <span>{stepOutputs[stepNumber]}</span>
        <span
          className={`h-2 w-2 shrink-0 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
        />
      </div>
    </Card>
  );
}

export default function Process() {
  usePageMeta({
    title: 'Our Process | The Softnest Technologies',
    description:
      'Discover our structured five-step B2B lead generation process: Understand Requirements, Identify Target Audience, Research Prospects, Verify Information, and Deliver Qualified Leads.',
  });

  return (
    <>
      <PageHeader
        badge="Our Process"
        titlePrefix="How We"
        titleHighlight="Deliver Results"
        description="A structured, transparent five-step process designed to deliver qualified leads efficiently and consistently."
      />

      {/* Process Steps — Crisp White */}
      <Section bg="white">
        <SectionHeading
          label="Five-Step Process"
          title="From Research to Results"
          description="Every engagement follows a proven process to ensure quality and consistency."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-6 bottom-6 left-6 hidden w-px bg-linear-to-b from-primary via-accent/60 to-accent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-6 md:space-y-10">
            {PROCESS_STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isAccent = index % 2 === 1;

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
                    <StepCard
                      stepNumber={step.step}
                      title={step.title}
                      description={step.description}
                      isAccent={isAccent}
                      alignRight={isLeft}
                    />
                  </div>

                  <div className="relative z-10 flex shrink-0 md:order-2">
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-xs border text-base font-extrabold text-white ${
                        isAccent
                          ? 'border-emerald-300/60 bg-accent shadow-[3px_3px_0px_#155EEF]'
                          : 'border-blue-300/60 bg-primary shadow-[3px_3px_0px_#16A36A]'
                      }`}
                    >
                      0{step.step}
                      <span
                        className={`absolute -top-1 -right-1 h-2 w-2 border border-white ${
                          isAccent ? 'bg-emerald-300' : 'bg-blue-200'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:order-3' : ''}`} />

                  <div className="flex-1 md:hidden">
                    <StepCard
                      stepNumber={step.step}
                      title={step.title}
                      description={step.description}
                      isAccent={isAccent}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <EnterpriseCTA
        bg="slate"
        title="Ready to Get Started?"
        description="Book a call to discuss your requirements and see how our process works for your business."
      />
    </>
  );
}
