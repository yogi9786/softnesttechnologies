import { Mail, Phone, MessageSquare, ArrowUpRight, Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ConnectBar from '../components/ConnectBar';
import ContactForm from '../components/ContactForm';
import { CalendlyEmbed } from '../components/CalendlyWidget';
import { useCalendly } from '../context/CalendlyContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { COMPANY } from '../constants';

export default function Contact() {
  const { openCalendly } = useCalendly();

  usePageMeta({
    title: 'Contact Us | The Softnest Technologies',
    description:
      'Get in touch with The Softnest Technologies. Send an inquiry, call +91 7624 866 645, connect on WhatsApp, or schedule a meeting.',
  });

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Page Header — Dark (#101828) */}
      <section className="border-b border-dark-secondary bg-dark bg-dot-grid-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-[2px] border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-200">
              <span className="h-1.5 w-1.5 bg-accent" />
              Contact Us
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Start a{' '}
              <span className="text-primary">Conversation</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              Ready to grow your sales pipeline? Get in touch with our team to
              discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Content — Clean White */}
      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-dark">Get in Touch</h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              Reach out through any of the channels below, or submit your inquiry and our team will respond promptly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-start gap-3.5 rounded-[2px] border border-border-dark bg-white p-4 transition-colors hover:border-primary hover:bg-bg-light"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-primary/25 bg-primary-light text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-dark">Email Us</p>
                  <p className="mt-0.5 break-all text-sm text-primary group-hover:underline">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="group flex items-start gap-3.5 rounded-[2px] border border-border-dark bg-white p-4 transition-colors hover:border-primary hover:bg-bg-light"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-primary/25 bg-primary-light text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">Call Us</p>
                  <p className="mt-0.5 text-sm text-primary group-hover:underline">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <div className="rounded-[2px] border border-accent/35 bg-accent-light/50 p-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-accent-dark bg-accent text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-dark">WhatsApp</p>
                    <p className="mt-0.5 text-sm text-text-secondary">{COMPANY.whatsapp}</p>
                    <Button
                      as="a"
                      href={`https://wa.me/${COMPANY.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="accent"
                      size="sm"
                      className="mt-3"
                    >
                      Chat on WhatsApp
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Meeting Card */}
            <Card className="mt-6 bg-bg-light">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-primary-dark bg-primary text-white">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-dark">Schedule a Meeting</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    Book a dedicated time to review your lead generation goals.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={openCalendly}
                    className="mt-4"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </Card>

            <div className="mt-6">
              <ConnectBar label="CONNECT" onInquiryClick={scrollToForm} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" id="contact-form">
            <ContactForm idPrefix="contact" />
          </div>
        </div>
      </Section>

      {/* 3. Inline Schedule a Meeting Section — Soft Blue Tint (#EEF4FF) */}
      <Section bg="blue-tint" className="border-t border-primary/15" id="schedule-meeting">
        <SectionHeading
          label="Schedule a Meeting"
          title="Book a Strategy Consultation"
          description="Prefer a live conversation? Schedule a meeting directly with our team."
          tone="tint"
        />
        <div className="mx-auto max-w-3xl">
          <CalendlyEmbed heightClass="h-[620px]" />
        </div>
      </Section>
    </>
  );
}
