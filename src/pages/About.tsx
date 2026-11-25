import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Eye,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Handshake,
} from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import IconBox from '../components/ui/IconBox';
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
    title: 'Research-Driven',
    description: 'Every campaign starts with deep market research and data analysis.',
    icon: Lightbulb,
  },
  {
    title: 'Precision Targeting',
    description: 'We focus on reaching the right people at the right companies.',
    icon: Target,
  },
  {
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, aligned with your goals.',
    icon: Handshake,
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
      {/* 1. Page Header — Dark (#101828) */}
      <section className="border-b border-dark-secondary bg-dark bg-dot-grid-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-[2px] border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-200">
              <span className="h-1.5 w-1.5 bg-accent" />
              About Us
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building Growth Through{' '}
              <span className="text-primary">Quality Leads</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              We are a specialized B2B lead generation and technology services company
              committed to helping businesses grow with verified, qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Overview — Crisp White */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-[2px] border border-primary/20 bg-primary-light/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 bg-accent" />
              Company Overview
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
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
              { label: 'Core Focus', value: 'B2B Lead Gen' },
              { label: 'Specialization', value: 'IT & SaaS' },
              { label: 'Methodology', value: 'Data-Driven' },
              { label: 'Standard', value: 'Quality First' },
            ].map((item, idx) => (
              <div
                key={item.label}
                className="rounded-[2px] border border-border-dark bg-bg-light p-6 text-center shadow-[4px_4px_0px_#E4E7EC]"
              >
                <p
                  className={`text-lg font-bold ${
                    idx % 2 === 0 ? 'text-primary' : 'text-accent'
                  }`}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Mission & Vision — Soft Blue Tint (#EEF4FF) */}
      <Section bg="blue-tint" className="border-y border-primary/15">
        <div className="grid gap-6 md:grid-cols-2">
          <Card hover={false} className="border-l-4 border-l-primary shadow-[5px_5px_0px_#D0D5DD]">
            <h2 className="text-xl font-bold text-dark">Our Mission</h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              To empower B2B businesses with high-quality, verified leads that drive
              meaningful conversations and measurable revenue growth.
            </p>
          </Card>
          <Card hover={false} className="border-l-4 border-l-accent shadow-[5px_5px_0px_#D0D5DD]">
            <h2 className="text-xl font-bold text-dark">Our Vision</h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              To be the most trusted lead generation partner for technology companies
              worldwide, known for accuracy, transparency, and results.
            </p>
          </Card>
        </div>
      </Section>

      {/* 4. Values — Corporate Dark (#101828) Contrast Band */}
      <Section bg="dark" className="border-b border-dark-secondary bg-dot-grid-dark">
        <SectionHeading
          label="Company Values"
          title="Principles That Guide Us"
          description="These core values shape how we work, how we serve our clients, and how we grow."
          tone="dark"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, idx) => {
            const Icon = iconMap[value.icon] || Shield;
            return (
              <div
                key={value.title}
                className="rounded-[3px] border border-white/15 bg-dark-secondary p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 sm:p-7"
              >
                <div className="mx-auto flex justify-center">
                  <IconBox
                    icon={Icon}
                    variant={idx % 2 === 0 ? 'accent-solid' : 'primary-solid'}
                  />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 5. Business Approach — Light Slate (#F7F9FC) */}
      <Section bg="light">
        <SectionHeading
          label="Our Business Approach"
          title="How We Work"
          description="A structured, results-driven approach to every engagement."
          tone="tint"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {approaches.map((approach, idx) => (
            <Card key={approach.title}>
              <IconBox icon={approach.icon} variant={idx === 1 ? 'accent' : 'primary'} />
              <h3 className="mt-4 text-lg font-bold text-dark">{approach.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {approach.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. CTA — Primary Blue (#155EEF) */}
      <Section bg="primary" className="bg-dot-grid-dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-100">
            Ready to build a stronger sales pipeline? Get in touch with our team.
          </p>
          <div className="mt-8">
            <Button as={Link} to="/contact" variant="secondary" surface="primary" size="lg">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
