import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import EnterpriseCTA from '../components/EnterpriseCTA';
import { usePageMeta } from '../hooks/usePageMeta';
import { PROCESS_STEPS } from '../constants';

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

      {/* Process Steps — Crisp White Dot-Grid */}
      <Section bg="white" className="bg-dot-grid">
        <SectionHeading
          label="Five-Step Process"
          title="From Research to Results"
          description="Every engagement follows a proven process to ensure quality and consistency."
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
                    <Card className={`border-border-dark/60 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
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
                    <Card className="border-border-dark/60">
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

      <EnterpriseCTA
        bg="slate"
        title="Ready to Get Started?"
        description="Book a call to discuss your requirements and see how our process works for your business."
      />
    </>
  );
}
