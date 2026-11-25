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
  Calendar,
} from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import IconBox from '../components/ui/IconBox';
import ServiceVisual from '../components/ServiceVisual';
import { useCalendly } from '../context/CalendlyContext';
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
  const { openCalendly } = useCalendly();

  usePageMeta({
    title: 'Our Services | The Softnest Technologies',
    description:
      'Explore B2B Lead Generation, IT & SaaS Lead Generation, Email Marketing, LinkedIn Prospecting, Appointment Setting, and Data Research services.',
  });

  return (
    <>
      {/* 1. Page Header — Dark (#101828) */}
      <section className="border-b border-dark-secondary bg-dark bg-dot-grid-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-[2px] border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-200">
              <span className="h-1.5 w-1.5 bg-accent" />
              Our Services
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Lead Generation{' '}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              Comprehensive B2B lead generation services designed to connect you
              with decision-makers and accelerate your sales pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Showcase Cards — Soft Blue Tint (#EEF4FF) with Crisp White Cards */}
      <Section bg="blue-tint" className="border-b border-primary/15">
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

      {/* 3. CTA — Primary Blue (#155EEF) */}
      <Section bg="primary" className="bg-dot-grid-dark">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Need a Custom Solution?"
            description="Every business is unique. Let's discuss how we can tailor our services to meet your specific goals."
            tone="primary"
          />
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              as={Link}
              to="/contact"
              variant="secondary"
              surface="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get in Touch
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
