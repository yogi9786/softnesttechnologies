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

      {/* Services Showcase Cards — Rich Dark Slate-Navy (#131D31) */}
      <Section bg="dark-slate" className="border-b border-white/10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            const details = serviceDetails[service.id] || [];
            const serviceNumber = String(index + 1).padStart(2, '0');

            const isAccent = index % 2 === 1;

            return (
              <Card
                key={service.id}
                className={`flex h-full flex-col border-white/20 border-t-2 ${
                  isAccent
                    ? 'border-t-accent shadow-[4px_4px_0px_#16A36A] sm:shadow-[5px_5px_0px_#16A36A]'
                    : 'border-t-primary shadow-[4px_4px_0px_#155EEF] sm:shadow-[5px_5px_0px_#155EEF]'
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
                    <span className={`h-1.5 w-1.5 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`} />
                    {serviceNumber}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-bold text-dark sm:mt-5 sm:text-xl">
                  {service.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>

                <ul className="mt-4 flex-1 space-y-2 border-t border-border-light pt-4 sm:mt-5 sm:space-y-2.5 sm:pt-5">
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

                <div className="mt-5">
                  <ServiceVisual serviceId={service.id} />
                </div>

                <div className="mt-5 border-t border-border-light pt-4">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isAccent
                        ? 'text-accent-dark hover:text-accent'
                        : 'text-primary hover:text-primary-dark'
                    }`}
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
