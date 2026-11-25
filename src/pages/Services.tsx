import { Link } from 'react-router-dom';
import {
  Target,
  Monitor,
  Mail,
  UserPlus,
  CalendarCheck,
  Database,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import IconBox from '../components/ui/IconBox';
import ServiceVisual from '../components/ServiceVisual';
import EnterpriseCTA from '../components/EnterpriseCTA';
import { usePageMeta } from '../hooks/usePageMeta';
import { SERVICES } from '../constants';

const iconMap: Record<string, typeof Target> = {
  Target,
  Monitor,
  Mail,
  UserPlus,
  CalendarCheck,
  Database,
};

const serviceDetails: Record<string, string[]> = {
  'b2b-lead-generation': [
    'Ideal Customer Profile (ICP) development',
    'Multi-channel prospecting',
    'Account-based lead generation',
    'Lead scoring and qualification',
  ],
  'it-saas-lead-generation': [
    'Technology buyer targeting',
    'SaaS-specific outreach strategies',
    'Product-market fit analysis',
    'Pipeline acceleration',
  ],
  'email-marketing': [
    'Campaign strategy and planning',
    'Email copywriting and design',
    'A/B testing and optimization',
    'Deliverability management',
  ],
  'linkedin-prospecting': [
    'Profile optimization',
    'Connection request campaigns',
    'InMail outreach sequences',
    'Engagement and follow-up',
  ],
  'appointment-setting': [
    'Outbound calling campaigns',
    'Multi-touch scheduling',
    'Calendar coordination',
    'Meeting confirmation and reminders',
  ],
  'data-research': [
    'Contact data collection',
    'Email and phone verification',
    'Company intelligence research',
    'CRM data enrichment',
  ],
};

export default function Services() {
  usePageMeta({
    title: 'Our Services | The Softnest Technologies',
    description:
      'Explore B2B Lead Generation, IT & SaaS Lead Generation, Email Marketing, LinkedIn Prospecting, Appointment Setting, and Data Research services.',
  });

  return (
    <>
      <PageHeader
        badge="Our Services"
        titlePrefix="Lead Generation"
        titleHighlight="Solutions"
        description="Comprehensive B2B lead generation services designed to connect you with decision-makers and accelerate your sales pipeline."
      />

      {/* Services Showcase Cards — Cool Slate (#F3F6FB) with Crisp White Cards */}
      <Section bg="slate">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            const details = serviceDetails[service.id] || [];
            const serviceNumber = String(index + 1).padStart(2, '0');

            return (
              <Card key={service.id} className="flex h-full flex-col border-border-dark/60">
                <div className="flex items-center justify-between">
                  <IconBox icon={Icon} variant={index % 2 === 0 ? 'primary' : 'accent'} size="lg" />
                  <span className="rounded-[2px] border border-border-dark bg-bg-light px-2.5 py-1 text-xs font-bold tracking-wider text-dark">
                    {serviceNumber}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-dark">
                  {service.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>

                <div className="mt-5">
                  <ServiceVisual serviceId={service.id} />
                </div>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-border-light pt-5">
                  {details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Request this service
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <EnterpriseCTA
        bg="white"
        title="Need a Custom Solution?"
        description="Every business is unique. Let's discuss how we can tailor our services to meet your specific goals."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
