import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Monitor,
  Mail,
  Code,
  CalendarCheck,
  Database,
  UserPlus,
  CheckCircle2,
  Calendar,
  Zap,
  Shield,
  BarChart3,
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
import { useCalendly } from '../context/CalendlyContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { COMPANY, SERVICES } from '../constants';

const iconMap: Record<string, typeof Target> = {
  Target,
  Monitor,
  Code,
  UserPlus,
  CalendarCheck,
  Database,
};

const whyChooseUs = [
  {
    id: 'targeting',
    number: '01',
    title: 'Precision Targeting',
    description: 'Data-driven strategies to reach the right decision-makers.',
    icon: Target,
    borderAccent: 'border-t-accent shadow-[4px_4px_0px_#16A36A]',
    iconVariant: 'accent' as const,
    visualLabel: 'ICP Mapping',
    visualTag: 'Role Fit',
  },
  {
    id: 'verified',
    number: '02',
    title: 'Verified Leads',
    description: 'Every lead is validated and enriched for accuracy.',
    icon: Shield,
    borderAccent: 'border-t-primary shadow-[4px_4px_0px_#155EEF]',
    iconVariant: 'primary' as const,
    visualLabel: 'Multi-Check Validation',
    visualTag: 'Verified',
  },
  {
    id: 'results',
    number: '03',
    title: 'Measurable Results',
    description: 'Transparent reporting with clear ROI metrics.',
    icon: BarChart3,
    borderAccent: 'border-t-accent shadow-[4px_4px_0px_#16A36A]',
    iconVariant: 'accent' as const,
    visualLabel: 'Pipeline Clarity',
    visualTag: 'Weekly View',
  },
  {
    id: 'turnaround',
    number: '04',
    title: 'Fast Turnaround',
    description: 'Rapid delivery without compromising on quality.',
    icon: Zap,
    borderAccent: 'border-t-primary shadow-[4px_4px_0px_#155EEF]',
    iconVariant: 'primary' as const,
    visualLabel: 'Rapid Delivery',
    visualTag: 'Active',
  },
];

const HERO_HIGHLIGHTS = [
  'Qualified Leads',
  'Decision Makers',
  'Booked Meetings',
] as const;

export default function Home() {
  const { openCalendly } = useCalendly();
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % HERO_HIGHLIGHTS.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  usePageMeta({
    title: 'The Softnest Technologies – B2B Lead Generation & Technology Services',
    description:
      'Accelerate your B2B growth with verified leads, IT & SaaS lead generation, LinkedIn prospecting, appointment setting, data research, and web development.',
  });

  const scrollToHomeContact = () => {
    const el = document.getElementById('home-contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Hero Section — Deep Dark Blurred Enterprise Canvas */}
      <section className="relative overflow-hidden border-b border-dark-secondary bg-[#0B1220] pt-24 pb-12 text-white sm:pt-28 sm:pb-16 lg:pt-30 lg:pb-18">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-28 -right-16 h-96 w-96 rounded-full bg-primary/25 blur-[130px]" />
          <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
          <div className="absolute -top-10 right-16 h-64 w-64 rotate-12 border border-white/6" />
          <div className="absolute -bottom-12 left-10 h-56 w-56 -rotate-6 border border-blue-400/10" />
          <div className="mx-auto hidden h-full max-w-7xl border-x border-white/5 lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <span className="mb-4 inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-200 backdrop-blur-xs sm:mb-5 sm:px-3.5 sm:py-1.5 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 sm:h-2 sm:w-2" />
                B2B Lead Generation &amp; Technology Services
              </span>
              <h1 className="hero-title-reveal text-[1.65rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                <span className="block">Accelerate Your Growth</span>
                <span className="mt-1 block">
                  with{' '}
                  <span
                    key={highlightIndex}
                    className="hero-word-enter relative inline-block text-blue-400"
                  >
                    {HERO_HIGHLIGHTS[highlightIndex]}
                    <span
                      className="hero-underline-sweep absolute -bottom-1 left-0 h-0.75 w-full bg-primary"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
                We help B2B, IT, and SaaS companies build predictable sales pipelines through
                targeted prospecting, verified contact intelligence, and qualified appointment setting.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
                <Button
                  as={Link}
                  to="/contact"
                  variant="accent"
                  surface="dark"
                  size="lg"
                  mobileCompact
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
                  mobileCompact
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
              <div className="rounded-[3px] border border-white/20 border-t-2 border-t-accent bg-[#131C2E]/85 p-5 shadow-[8px_8px_0px_#155EEF] backdrop-blur-md sm:p-7">
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

                <div className="relative mt-5">
                  {/* Continuous vertical emerald spine connecting 01-04 */}
                  <div
                    className="pointer-events-none absolute top-4 bottom-4 left-4.5 w-px bg-emerald-400/35"
                    aria-hidden="true"
                  />

                  <ul className="space-y-3">
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
                        className="group relative flex items-start gap-3.5 rounded-xs border border-white/10 bg-[#0B1220]/70 p-3 transition-colors hover:border-emerald-400/45"
                      >
                        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xs border border-emerald-300/60 bg-accent text-xs font-extrabold tracking-tight text-white shadow-[3px_3px_0px_#155EEF]">
                          {pillar.step}
                          <span
                            className="absolute -top-1 -right-1 h-2 w-2 border border-[#0B1220] bg-emerald-300"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-white">{pillar.title}</p>
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80 transition-transform group-hover:scale-125" />
                          </div>
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
        </div>
      </section>

      {/* 2. Who We Are — Minimal Content with Architectural Frame & Repeating Platform Marquee */}
      <Section bg="white" className="border-b border-border-light">
        <div className="relative mx-auto max-w-4xl rounded-[3px] border border-border-dark bg-white px-5 py-8 text-center shadow-[6px_6px_0px_#EBF1FF] sm:px-10 sm:py-10">
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

      {/* 3. Services Overview — Rich Dark Slate-Navy (#131D31) */}
      <Section bg="dark-slate" className="border-b border-white/10">
        <SectionHeading
          label="Our Services"
          title="Lead Generation Solutions"
          description="Comprehensive services designed to fuel your sales pipeline with high-quality prospects."
          tone="dark"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            const serviceNum = String(index + 1).padStart(2, '0');
            const isAccent = index % 2 === 1;

            return (
              <Card
                key={service.id}
                compactMobile
                className={`flex h-full flex-col border-white/20 border-t-2 ${
                  isAccent
                    ? 'border-t-accent shadow-[4px_4px_0px_#16A36A] sm:shadow-[5px_5px_0px_#16A36A]'
                    : 'border-t-primary shadow-[4px_4px_0px_#155EEF] sm:shadow-[5px_5px_0px_#155EEF]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <IconBox icon={Icon} variant={isAccent ? 'accent' : 'primary'} size="sm" />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-xs border px-2 py-0.5 text-[10px] font-bold tracking-wider sm:px-2.5 sm:py-1 sm:text-xs ${
                      isAccent
                        ? 'border-accent/30 bg-accent-light text-accent-dark'
                        : 'border-primary/25 bg-primary-light/60 text-primary-dark'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
                    />
                    {serviceNum}
                  </span>
                </div>

                <h3 className="mt-3.5 text-sm font-bold text-dark sm:mt-5 sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-text-secondary sm:block">
                  {service.description}
                </p>

                <div className="mt-auto pt-3 sm:mt-5 sm:pt-0">
                  <ServiceVisual serviceId={service.id} compact />
                </div>

                <div className="mt-3.5 border-t border-border-light pt-3 sm:mt-5 sm:pt-4">
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                      isAccent
                        ? 'text-accent-dark hover:text-accent'
                        : 'text-primary hover:text-primary-dark'
                    }`}
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
          <Button as={Link} to="/services" variant="accent" surface="dark" size="md">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* 4. Why Choose Us / Built for Results — Cool Light Slate (#F3F6FB) */}
      <Section bg="slate" className="border-b border-border-light">
        <SectionHeading
          label="Why Choose Us"
          title="Built for Results"
          description="We focus on delivering measurable outcomes that drive real business growth."
          tone="slate"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const isAccent = item.iconVariant === 'accent';

            return (
              <Card
                key={item.title}
                className={`flex h-full flex-col border-t-2 border-border-dark/70 ${item.borderAccent}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <IconBox icon={item.icon} variant={item.iconVariant} />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-xs border px-2 py-0.5 text-[11px] font-bold tracking-wider ${
                      isAccent
                        ? 'border-accent/30 bg-accent-light text-accent-dark'
                        : 'border-primary/25 bg-primary-light/60 text-primary-dark'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
                    />
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-dark">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>

                <div className="mt-5 rounded-xs border border-border-light bg-bg-light p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-dark">{item.visualLabel}</span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-xs border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        item.id === 'verified' || isAccent
                          ? 'border-accent/30 bg-accent-light text-accent-dark'
                          : 'border-primary/25 bg-primary-light/70 text-primary-dark'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.id === 'verified' || isAccent ? 'bg-accent' : 'bg-primary'
                        }`}
                      />
                      {item.visualTag}
                    </span>
                  </div>

                  {item.id === 'targeting' && (
                    <div className="mt-2.5 space-y-2">
                      <div className="grid grid-cols-3 gap-1.5">
                        {['Industry', 'Role', 'Region'].map((tag, tagIdx) => (
                          <span
                            key={tag}
                            className={`rounded-xs border px-1.5 py-0.5 text-center text-[10px] font-semibold ${
                              tagIdx < 2
                                ? 'border-accent/30 bg-accent-light/70 text-accent-dark'
                                : 'border-border-dark bg-white text-text-secondary'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-light">
                        <div className="h-full w-4/5 rounded-full bg-accent" />
                      </div>
                    </div>
                  )}

                  {item.id === 'verified' && (
                    <div className="mt-2.5 space-y-1.5">
                      {['Domain & MX Check', 'Direct Role Match'].map((check) => (
                        <div
                          key={check}
                          className="flex items-center justify-between rounded-xs border border-border-light bg-white px-2 py-1"
                        >
                          <span className="text-[11px] font-medium text-text-secondary">{check}</span>
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.id === 'results' && (
                    <div className="mt-2.5 flex h-9 items-end gap-1.5 pt-1">
                      {[
                        { h: 'h-3.5', tone: 'bg-primary/25' },
                        { h: 'h-5', tone: 'bg-primary/50' },
                        { h: 'h-6', tone: 'bg-accent/60' },
                        { h: 'h-7', tone: 'bg-accent/85' },
                        { h: 'h-8', tone: 'bg-accent' },
                      ].map((bar, barIdx) => (
                        <div
                          key={barIdx}
                          className={`flex-1 rounded-t-xs ${bar.h} ${bar.tone}`}
                        />
                      ))}
                    </div>
                  )}

                  {item.id === 'turnaround' && (
                    <div className="mt-2.5 flex items-center justify-between gap-1 rounded-xs border border-border-light bg-white px-2.5 py-2">
                      {['Brief', 'Build', 'Deliver'].map((step, stepIdx) => (
                        <div key={step} className="flex items-center gap-1.5">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              stepIdx < 2 ? 'bg-accent' : 'bg-primary'
                            }`}
                          />
                          <span className="text-[11px] font-semibold text-dark">{step}</span>
                          {stepIdx < 2 && <span className="ml-0.5 h-px w-3 bg-accent/40" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
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
              className="border-border-dark border-t-2 border-t-accent bg-white shadow-[6px_6px_0px_#16A36A]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-light pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent-dark">
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
                Submit an inquiry using the form, email us directly, or schedule a discovery call.
              </p>

              <div className="mt-5 space-y-3.5">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 rounded-xs border border-border-dark border-l-2 border-l-primary bg-bg-light p-3.5 transition-colors hover:border-primary hover:bg-primary-light/30"
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

                <div className="pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={openCalendly}
                    className="w-full"
                  >
                    <Calendar className="h-4 w-4 text-accent-dark" />
                    Schedule a Meeting
                  </Button>
                </div>

                <div className="mt-4 rounded-xs border border-accent/25 bg-accent-light/40 p-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent-dark">
                    What Happens Next
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {[
                      { step: '01', label: 'Submit your target criteria & goals' },
                      { step: '02', label: 'Receive a tailored outreach strategy' },
                      { step: '03', label: 'Launch verified prospect delivery' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-6 shrink-0 items-center justify-center rounded-xs border border-accent/35 bg-white text-[10px] font-bold text-accent-dark">
                          {item.step}
                        </span>
                        <span className="text-xs font-medium text-dark">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <ContactForm
              idPrefix="home-contact"
              title="Send Us an Inquiry"
              subtitle="Complete the form below and our lead generation team will get back to you promptly."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
