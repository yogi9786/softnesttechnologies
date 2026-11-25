import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Monitor,
  Mail,
  Phone,
  CalendarCheck,
  Database,
  UserPlus,
  CheckCircle2,
  Calendar,
  Zap,
  Shield,
  BarChart3,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import IconBox from '../components/ui/IconBox';
import ConnectBar from '../components/ConnectBar';
import PlatformMarquee from '../components/PlatformMarquee';
import ServiceVisual from '../components/ServiceVisual';
import ContactForm from '../components/ContactForm';
import EnterpriseCTA from '../components/EnterpriseCTA';
import { useCalendly } from '../context/CalendlyContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { COMPANY, SERVICES } from '../constants';

const iconMap: Record<string, typeof Target> = {
  Target,
  Monitor,
  Mail,
  UserPlus,
  CalendarCheck,
  Database,
};

const whyChooseUs = [
  {
    title: 'Precision Targeting',
    description: 'Data-driven strategies to reach the right decision-makers.',
    icon: Target,
    borderAccent: 'border-t-primary',
    iconVariant: 'primary-solid' as const,
  },
  {
    title: 'Verified Leads',
    description: 'Every lead is validated and enriched for accuracy.',
    icon: Shield,
    borderAccent: 'border-t-accent',
    iconVariant: 'accent-solid' as const,
  },
  {
    title: 'Measurable Results',
    description: 'Transparent reporting with clear ROI metrics.',
    icon: BarChart3,
    borderAccent: 'border-t-primary',
    iconVariant: 'primary-solid' as const,
  },
  {
    title: 'Fast Turnaround',
    description: 'Rapid delivery without compromising on quality.',
    icon: Zap,
    borderAccent: 'border-t-accent',
    iconVariant: 'accent-solid' as const,
  },
];

export default function Home() {
  const { openCalendly } = useCalendly();

  usePageMeta({
    title: 'The Softnest Technologies – B2B Lead Generation & Technology Services',
    description:
      'Accelerate your B2B growth with verified leads, IT & SaaS lead generation, email marketing, LinkedIn prospecting, appointment setting, and data research.',
  });

  const scrollToHomeContact = () => {
    const el = document.getElementById('home-contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Hero Section — Deep Dark Blurred Enterprise Canvas */}
      <section className="relative overflow-hidden border-b border-dark-secondary bg-[#0B1220] bg-dot-grid-dark pt-24 pb-12 text-white sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-28 -right-16 h-96 w-96 rounded-full bg-primary/30 blur-[130px]" />
          <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <span className="mb-5 inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-200 backdrop-blur-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                B2B Lead Generation &amp; Technology Services
              </span>
              <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Accelerate Your Growth with{' '}
                <span className="text-blue-400">Qualified Leads</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                We help B2B companies build predictable revenue pipelines through
                targeted lead generation, strategic outreach, and verified prospect data.
              </p>

              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  surface="dark"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  surface="dark"
                  size="lg"
                  onClick={openCalendly}
                  className="w-full sm:w-auto"
                >
                  <Calendar className="h-4 w-4 text-blue-400" />
                  Schedule a Meeting
                </Button>
              </div>

              <div className="mt-8">
                <ConnectBar
                  label="CONNECT"
                  surface="dark"
                  onInquiryClick={scrollToHomeContact}
                />
              </div>
            </div>

            {/* Frosted Dark Enterprise Delivery Framework Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[3px] border border-white/20 bg-[#131C2E]/85 p-6 shadow-[8px_8px_0px_#155EEF] backdrop-blur-md sm:p-8">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                      Enterprise Delivery Framework
                    </p>
                    <p className="mt-1 text-base font-bold text-white">
                      Structured Pipeline Execution
                    </p>
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xs border border-emerald-400/40 bg-emerald-500/15 text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Ideal Customer Profiling',
                      detail: 'Industry, company size, technology stack & role mapping',
                    },
                    {
                      step: '02',
                      title: 'Multi-Channel Outreach',
                      detail: 'Targeted email campaigns & strategic LinkedIn prospecting',
                    },
                    {
                      step: '03',
                      title: 'Verified Contact Intelligence',
                      detail: 'Validated emails, direct phone numbers & enriched records',
                    },
                    {
                      step: '04',
                      title: 'Sales-Ready Meetings',
                      detail: 'Qualified appointments scheduled directly on your calendar',
                    },
                  ].map((pillar) => (
                    <li
                      key={pillar.title}
                      className="flex items-start gap-3.5 border-b border-white/10 pb-3.5 last:border-b-0 last:pb-0"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xs border border-blue-400/40 bg-primary text-xs font-bold text-white">
                        {pillar.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{pillar.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-gray-300">
                          {pillar.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are — Minimal Content with Architectural Frame & Repeating Platform Marquee */}
      <Section bg="white" className="border-b border-border-light">
        <div className="relative mx-auto max-w-4xl rounded-[3px] border border-border-dark bg-white bg-dot-grid px-5 py-8 text-center shadow-[6px_6px_0px_#EBF1FF] sm:px-10 sm:py-10">
          <div
            className="pointer-events-none absolute top-0 left-0 h-1 w-24 bg-primary"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-0 right-0 h-1 w-14 bg-accent"
            aria-hidden="true"
          />
          <span className="mb-3 inline-flex items-center gap-2 rounded-xs border border-primary/20 bg-primary-light/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 bg-accent" />
            Who We Are
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl lg:text-4xl">
            Your Growth Partner in B2B Lead Generation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            The Softnest Technologies is a specialized B2B lead generation and technology
            services company. We combine data-driven research with strategic outreach to
            deliver verified, qualified leads that convert into real business opportunities.
          </p>
        </div>

        {/* Continuous Horizontal Platform Scroller */}
        <PlatformMarquee />
      </Section>

      {/* 3. Services Overview — Very Light Corporate Blue Blueprint Grid (#E9F1FF) */}
      <Section bg="light-blue" className="border-b border-primary/15">
        <SectionHeading
          label="Our Services"
          title="Lead Generation Solutions"
          description="Comprehensive services designed to fuel your sales pipeline with high-quality prospects."
          tone="light-blue"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            const serviceNum = String(index + 1).padStart(2, '0');

            return (
              <Card
                key={service.id}
                className="flex h-full flex-col border-primary/20 shadow-[4px_4px_0px_#D6E4FF]"
              >
                <div className="flex items-center justify-between">
                  <IconBox icon={Icon} variant={index % 2 === 0 ? 'primary' : 'accent'} />
                  <span className="rounded-xs border border-border-light bg-bg-light px-2.5 py-1 text-xs font-bold tracking-wider text-text-secondary">
                    {serviceNum}
                  </span>
                </div>

                <div className="mt-5">
                  <ServiceVisual serviceId={service.id} compact />
                </div>

                <h3 className="mt-5 text-lg font-bold text-dark">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>

                <div className="mt-5 border-t border-border-light pt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Explore service
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-9 text-center">
          <Button as={Link} to="/services" variant="outline" size="md">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* 4. Why Choose Us / Built for Results — Deep Dark Blurred Canvas */}
      <Section bg="dark" className="border-b border-dark-secondary bg-dot-grid-dark">
        <SectionHeading
          label="Why Choose Us"
          title="Built for Results"
          description="We focus on delivering measurable outcomes that drive real business growth."
          tone="dark"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className={`rounded-[3px] border border-white/15 border-t-2 ${item.borderAccent} bg-[#131C2E]/90 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 sm:p-7`}
            >
              <IconBox icon={item.icon} variant={item.iconVariant} />
              <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Home Contact Form Section — Soft Architectural Blue Surface */}
      <Section bg="soft-blue" className="scroll-mt-24 border-b border-primary/15" id="home-contact">
        <SectionHeading
          label="Start a Conversation"
          title="Request Qualified B2B Leads"
          description="Tell us about your target market and service goals, or connect with us directly."
          tone="light-blue"
        />
        <div className="grid gap-7 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-5 lg:col-span-2">
            <Card
              hover={false}
              className="border-border-dark border-t-2 border-t-primary bg-white shadow-[6px_6px_0px_#D6E4FF]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-light pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    Direct Access
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-dark">Direct Contact Channels</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-xs border border-accent/30 bg-accent-light px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  1-Day Reply
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Reach our team directly via email, phone, or WhatsApp, or schedule a discovery call.
              </p>

              <div className="mt-5 space-y-3.5">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 rounded-xs border border-border-dark bg-bg-light p-3.5 transition-colors hover:border-primary hover:bg-primary-light/30"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Email
                    </p>
                    <p className="mt-0.5 break-all text-sm font-semibold text-primary">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-start gap-3 rounded-xs border border-border-dark bg-bg-light p-3.5 transition-colors hover:border-primary hover:bg-primary-light/30"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Phone
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-dark">{COMPANY.phone}</p>
                  </div>
                </a>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:flex-col">
                  <Button
                    as="a"
                    href={`https://wa.me/${COMPANY.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    size="md"
                    className="w-full"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp Us
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={openCalendly}
                    className="w-full"
                  >
                    <Calendar className="h-4 w-4 text-primary" />
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <ContactForm
              idPrefix="home-contact"
              title="Send Us an Inquiry"
              subtitle="Complete the form below and our lead generation team will get back to you promptly."
              cardClassName="border-t-2 border-t-accent shadow-[6px_6px_0px_#D6E4FF]"
            />
          </div>
        </div>
      </Section>

      {/* 6. Final CTA Box inside Crisp White Band */}
      <EnterpriseCTA
        bg="white"
        title="Ready to Scale Your Sales Pipeline?"
        description="Let us help you connect with the right prospects and grow your business."
        showTrustRow
      />
    </>
  );
}
