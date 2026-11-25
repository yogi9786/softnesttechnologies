import {
  Server,
  Cloud,
  Code,
  Rocket,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import IconBox from '../components/ui/IconBox';
import EnterpriseCTA from '../components/EnterpriseCTA';
import { usePageMeta } from '../hooks/usePageMeta';
import { INDUSTRIES } from '../constants';

const iconMap: Record<string, typeof Server> = {
  Server,
  Cloud,
  Code,
  Rocket,
  Globe,
};

const industryBenefits: Record<string, string[]> = {
  'it-services': [
    'Target CIOs, CTOs, and IT directors',
    'Managed services prospect lists',
    'Technology solution buyer identification',
  ],
  'saas-companies': [
    'Product-market fit prospect targeting',
    'Free trial and demo lead generation',
    'Subscription revenue pipeline building',
  ],
  'software-development': [
    'Custom development project leads',
    'Enterprise buyer outreach',
    'Technology stack-based targeting',
  ],
  'technology-startups': [
    'Seed to Series B company targeting',
    'Strategic partner identification',
    'Growth-stage lead strategies',
  ],
  'digital-agencies': [
    'Brand and marketing decision-makers',
    'Agency-to-client prospect matching',
    'Retainer-based opportunity sourcing',
  ],
};

export default function Industries() {
  usePageMeta({
    title: 'Industries We Serve | The Softnest Technologies',
    description:
      'Specialized B2B lead generation for IT Services, SaaS Companies, Software Development firms, Technology Startups, and Digital Agencies.',
  });

  return (
    <>
      <PageHeader
        badge="Industries"
        titlePrefix="Industries"
        titleHighlight="We Serve"
        description="Specialized lead generation solutions tailored for technology-driven industries and high-growth sectors."
      />

      {/* Industries Grid — Cool Slate (#F3F6FB) with Crisp White Cards */}
      <Section bg="slate">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Server;
            const benefits = industryBenefits[industry.id] || [];

            return (
              <Card key={industry.id} className="flex h-full flex-col border-border-dark/60">
                <div className="flex items-center justify-between">
                  <IconBox icon={Icon} variant={index % 2 === 0 ? 'primary' : 'accent'} size="lg" />
                  <span className="rounded-[2px] border border-border-light bg-bg-light px-2.5 py-1 text-xs font-bold tracking-wider text-text-secondary">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-bold text-dark">{industry.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {industry.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-border-light pt-5">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <EnterpriseCTA
        bg="white"
        title="Don't See Your Industry?"
        description="Our approach is adaptable. Let's discuss how we can support your specific market and audience."
        primaryLabel="Talk to Us"
      />
    </>
  );
}
