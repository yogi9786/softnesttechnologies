import {
  Shield,
  Eye,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Handshake,
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import IconBox from '../components/ui/IconBox';
import EnterpriseCTA from '../components/EnterpriseCTA';
import { usePageMeta } from '../hooks/usePageMeta';
import { VALUES } from '../constants';

const iconMap: Record<string, typeof Shield> = {
  Shield,
  Eye,
  TrendingUp,
  Users,
};

const approaches = [
  {
    number: '01',
    title: 'Research-Driven',
    description: 'Every campaign starts with deep market research and data analysis.',
    icon: Lightbulb,
    tag: 'Market Signals',
  },
  {
    number: '02',
    title: 'Precision Targeting',
    description: 'We focus on reaching the right people at the right companies.',
    icon: Target,
    tag: 'Account Fit',
  },
  {
    number: '03',
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, aligned with your goals.',
    icon: Handshake,
    tag: 'Aligned Sync',
  },
];

export default function About() {
  usePageMeta({
    title: 'About Us | The Softnest Technologies',
    description:
      'Learn about The Softnest Technologies — our mission, vision, values, and research-driven B2B lead generation approach.',
  });

  return (
    <>
      <PageHeader
        badge="About Us"
        titlePrefix="Building Growth Through"
        titleHighlight="Quality Leads"
        description="We are a specialized B2B lead generation and technology services company committed to helping businesses grow with verified, qualified leads."
      />

      {/* Company Overview — Crisp White */}
      <Section bg="white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-xs border border-primary/20 bg-primary-light/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Company Overview
            </span>
            <h2 className="text-xl font-bold tracking-tight text-dark sm:text-3xl">
              Focused on What Matters — Your Growth
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              The Softnest Technologies was founded with a clear mission: to help B2B
              companies build predictable, scalable sales pipelines. We combine deep
              market research with strategic outreach to deliver leads that convert into
              real business.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Our team specializes in IT and SaaS industries, bringing domain expertise
              and a results-first approach to every engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '01', label: 'Core Focus', value: 'B2B Lead Gen' },
              { num: '02', label: 'Specialization', value: 'IT & SaaS' },
              { num: '03', label: 'Methodology', value: 'Data-Driven' },
              { num: '04', label: 'Standard', value: 'Quality First' },
            ].map((item, idx) => {
              const isAccent = idx % 2 === 1;

              return (
                <div
                  key={item.label}
                  className={`rounded-xs border border-border-dark border-t-2 bg-bg-light p-4 sm:p-5 ${
                    isAccent
                      ? 'border-t-accent shadow-[4px_4px_0px_#16A36A]'
                      : 'border-t-primary shadow-[4px_4px_0px_#155EEF]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-xs border px-1.5 py-0.5 text-[10px] font-bold tracking-wider ${
                        isAccent
                          ? 'border-accent/30 bg-accent-light text-accent-dark'
                          : 'border-primary/25 bg-primary-light/60 text-primary-dark'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
                      />
                      {item.num}
                    </span>
                    <span
                      className={`h-1.5 w-8 rounded-full ${
                        isAccent ? 'bg-accent/35' : 'bg-primary/35'
                      }`}
                    />
                  </div>
                  <p
                    className={`mt-3 text-base font-bold sm:text-lg ${
                      isAccent ? 'text-accent-dark' : 'text-primary'
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-text-secondary sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Mission & Vision — Cool Slate (#F3F6FB) */}
      <Section bg="slate" className="border-y border-border-light">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            hover={false}
            className="flex h-full flex-col border-border-dark/70 border-t-2 border-t-primary shadow-[5px_5px_0px_#155EEF]"
          >
            <div className="flex items-center justify-between gap-2">
              <IconBox icon={Target} variant="primary" />
              <span className="inline-flex items-center gap-1.5 rounded-xs border border-primary/25 bg-primary-light/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                01 · Mission
              </span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-dark">Our Mission</h2>
            <p className="mt-2.5 flex-1 text-base leading-relaxed text-text-secondary">
              To empower B2B businesses with high-quality, verified leads that drive
              meaningful conversations and measurable revenue growth.
            </p>
            <div className="mt-5 flex items-center justify-between rounded-xs border border-border-light bg-bg-light px-3 py-2 text-xs font-semibold text-dark">
              <span>Focus: Verified Decision-Makers</span>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
          </Card>

          <Card
            hover={false}
            className="flex h-full flex-col border-border-dark/70 border-t-2 border-t-accent shadow-[5px_5px_0px_#16A36A]"
          >
            <div className="flex items-center justify-between gap-2">
              <IconBox icon={Eye} variant="accent" />
              <span className="inline-flex items-center gap-1.5 rounded-xs border border-accent/30 bg-accent-light px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                02 · Vision
              </span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-dark">Our Vision</h2>
            <p className="mt-2.5 flex-1 text-base leading-relaxed text-text-secondary">
              To be the most trusted lead generation partner for technology companies
              worldwide, known for accuracy, transparency, and results.
            </p>
            <div className="mt-5 flex items-center justify-between rounded-xs border border-border-light bg-bg-light px-3 py-2 text-xs font-semibold text-dark">
              <span>Standard: Accuracy &amp; Transparency</span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
          </Card>
        </div>
      </Section>

      {/* Values — Dark Slate Architectural Canvas */}
      <Section bg="dark-slate" className="border-b border-white/10">
        <SectionHeading
          label="Company Values"
          title="Principles That Guide Us"
          description="These core values shape how we work, how we serve our clients, and how we grow."
          tone="dark"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, idx) => {
            const Icon = iconMap[value.icon] || Shield;
            const isAccent = idx % 2 === 0;
            const num = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={value.title}
                className={`flex h-full flex-col rounded-xs border border-white/15 border-t-2 bg-[#0B1220]/85 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  isAccent
                    ? 'border-t-accent shadow-[4px_4px_0px_#16A36A]'
                    : 'border-t-primary shadow-[4px_4px_0px_#155EEF]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <IconBox
                    icon={Icon}
                    variant={isAccent ? 'accent-solid' : 'primary-solid'}
                  />
                  <span
                    className={`inline-flex items-center gap-1 rounded-xs border px-2 py-0.5 text-[11px] font-bold tracking-wider ${
                      isAccent
                        ? 'border-emerald-400/35 bg-emerald-500/15 text-emerald-300'
                        : 'border-blue-400/35 bg-blue-500/15 text-blue-300'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isAccent ? 'bg-emerald-400' : 'bg-blue-400'
                      }`}
                    />
                    {num}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{value.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Business Approach — Crisp White */}
      <Section bg="white">
        <SectionHeading
          label="Our Business Approach"
          title="How We Work"
          description="A structured, results-driven approach to every engagement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {approaches.map((approach, idx) => {
            const isAccent = idx % 2 === 0;

            return (
              <Card
                key={approach.title}
                className={`flex h-full flex-col border-border-dark/70 border-t-2 ${
                  isAccent
                    ? 'border-t-accent shadow-[4px_4px_0px_#16A36A]'
                    : 'border-t-primary shadow-[4px_4px_0px_#155EEF]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <IconBox icon={approach.icon} variant={isAccent ? 'accent' : 'primary'} />
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
                    {approach.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-dark">{approach.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {approach.description}
                </p>
                <div className="mt-5 flex items-center justify-between rounded-xs border border-border-light bg-bg-light px-3 py-2 text-xs font-semibold text-dark">
                  <span>{approach.tag}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <EnterpriseCTA
        bg="slate"
        title="Let's Work Together"
        description="Ready to build a stronger sales pipeline? Get in touch with our team."
      />
    </>
  );
}
