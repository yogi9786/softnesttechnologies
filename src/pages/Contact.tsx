import { Mail, Phone, MessageSquare, ArrowUpRight, Calendar } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
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
      <PageHeader
        badge="Contact Us"
        titlePrefix="Let's Start a"
        titleHighlight="Conversation"
        description="Ready to grow your sales pipeline? Get in touch with our team to discuss how we can help."
      />

      {/* Contact Content — Crisp White */}
      <Section bg="white">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-dark sm:text-2xl">Get in Touch</h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              Reach out through any of the channels below, or submit your inquiry and our team will respond promptly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-start gap-3.5 rounded-xs border border-border-dark border-l-2 border-l-primary bg-white p-4 transition-colors hover:border-primary hover:bg-bg-light"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs border border-primary/25 bg-primary-light text-primary">
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
                className="group flex items-start gap-3.5 rounded-xs border border-border-dark border-l-2 border-l-accent bg-white p-4 transition-colors hover:border-accent hover:bg-accent-light/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs border border-accent/30 bg-accent-light text-accent-dark">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">Call Us</p>
                  <p className="mt-0.5 text-sm font-medium text-accent-dark group-hover:underline">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <div className="rounded-xs border border-accent/40 border-t-2 border-t-accent bg-accent-light/50 p-4 shadow-[4px_4px_0px_#16A36A]">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs border border-accent-dark bg-accent text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-dark">WhatsApp</p>
                      <span className="inline-flex items-center gap-1 rounded-xs border border-accent/35 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-dark">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Fast Reply
                      </span>
                    </div>
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

            <Card className="mt-6 border-border-dark border-t-2 border-t-accent bg-bg-light shadow-[4px_4px_0px_#D1FAE5]">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs border border-accent-dark bg-accent text-white">
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

            <div className="mt-5 rounded-xs border border-accent/30 bg-accent-light/40 p-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent-dark">
                Outreach Onboarding Flow
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { step: '01', label: 'Submit Inquiry' },
                  { step: '02', label: 'Discovery Review' },
                  { step: '03', label: 'Outreach Plan' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xs border border-accent/25 bg-white p-2.5"
                  >
                    <span className="inline-flex h-5 items-center rounded-xs border border-accent/30 bg-accent-light px-1.5 text-[10px] font-bold text-accent-dark">
                      {item.step}
                    </span>
                    <p className="mt-1.5 text-xs font-semibold leading-snug text-dark">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <ConnectBar label="CONNECT" onInquiryClick={scrollToForm} />
            </div>
          </div>

          <div className="scroll-mt-24 lg:col-span-3" id="contact-form">
            <ContactForm idPrefix="contact" />
          </div>
        </div>
      </Section>

      {/* Inline Schedule a Meeting Section — Cool Slate (#F3F6FB) */}
      <Section bg="soft-blue" className="scroll-mt-24 border-t border-primary/15" id="schedule-meeting">
        <SectionHeading
          label="Schedule a Meeting"
          title="Book a Strategy Consultation"
          description="Prefer a live conversation? Schedule a meeting directly with our team."
          tone="light-blue"
        />
        <div className="mx-auto max-w-3xl">
          <CalendlyEmbed heightClass="h-155" />
        </div>
      </Section>
    </>
  );
}
