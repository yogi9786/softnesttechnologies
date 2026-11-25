import { Link } from 'react-router-dom';
import {
  Server,
  Cloud,
  Code,
  Rocket,
  Globe,
  CheckCircle2,
  ArrowRight,
  Target,
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

      {/* Industries Grid — Cool Slate (#F3F6FB) with Home-Styled Architectural Cards */}
      <Section bg="slate">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Server;
            const benefits = industryBenefits[industry.id] || [];
            const isAccent = index % 2 === 1;

            return (
              <Card
                key={industry.id}
                className={`flex h-full flex-col border-border-dark/70 border-t-2 ${
                  isAccent
                    ? 'border-t-accent shadow-[5px_5px_0px_#16A36A]'
                    : 'border-t-primary shadow-[5px_5px_0px_#155EEF]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <IconBox icon={Icon} variant={isAccent ? 'accent' : 'primary'} size="md" />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-xs border px-2.5 py-1 text-xs font-bold tracking-wider ${
                      isAccent
                        ? 'border-accent/30 bg-accent-light text-accent-dark'
                        : 'border-primary/25 bg-primary-light/60 text-primary-dark'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
                    />
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
                <div className="mt-5 border-t border-border-light pt-4">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isAccent
                        ? 'text-accent-dark hover:text-accent'
                        : 'text-primary hover:text-primary-dark'
                    }`}
                  >
                    Explore outreach
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}

          <Card className="flex h-full flex-col border-border-dark/70 border-t-2 border-t-accent bg-accent-light/30 shadow-[5px_5px_0px_#16A36A]">
            <div className="flex items-center justify-between gap-2">
              <IconBox icon={Target} variant="accent" size="md" />
              <span className="inline-flex items-center gap-1.5 rounded-xs border border-accent/30 bg-white px-2.5 py-1 text-xs font-bold tracking-wider text-accent-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                06
              </span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-dark">Custom B2B Verticals</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
              Adaptable ICP research and multi-channel prospecting tailored to your specialized B2B market and buyer personas.
            </p>
            <ul className="mt-5 flex-1 space-y-2.5 border-t border-accent/20 pt-5">
              {[
                'Custom industry & territory mapping',
                'Role-specific contact enrichment',
                'Targeted appointment setting',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-accent/20 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark transition-colors hover:text-accent"
              >
                Discuss your market
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>
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
