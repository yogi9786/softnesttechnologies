import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { COMPANY } from '../constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const serviceOptions = [
  'B2B Lead Generation',
  'IT & SaaS Lead Generation',
  'LinkedIn Prospecting',
  'Appointment Setting',
  'Data Research',
  'Web Development',
  'Other',
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Full name is required.';
  }
  if (!data.email.trim()) {
    errors.email = 'Business email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone.trim()) {
    const digits = data.phone.replace(/\D/g, '');
    if (!/^[+\d\s().-]+$/.test(data.phone.trim()) || digits.length < 7) {
      errors.phone = 'Please enter a valid phone number.';
    }
  }
  if (!data.company.trim()) {
    errors.company = 'Company name is required.';
  }
  if (!data.service) {
    errors.service = 'Please select a service.';
  }
  if (!data.message.trim()) {
    errors.message = 'Please tell us about your requirements.';
  }

  return errors;
}

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  idPrefix?: string;
  cardClassName?: string;
}

export default function ContactForm({
  title = 'Send Us an Inquiry',
  subtitle = 'Share your target audience and goals, and we will follow up within one business day.',
  idPrefix = 'contact',
  cardClassName = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(COMPANY.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormData);
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const getInputClasses = (hasError?: string) =>
    `w-full rounded-xs border px-4 py-2.5 text-base sm:text-sm text-dark placeholder:text-text-secondary transition-colors focus:outline-none focus:ring-2 ${
      hasError
        ? 'border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-rose-300'
        : 'border-white/25 bg-white focus:border-blue-400 focus:ring-primary/40'
    }`;

  return (
    <Card
      hover={false}
      surface="dark"
      className={`border-t-2 border-t-accent shadow-[6px_6px_0px_#16A36A] ${cardClassName}`}
    >
      {status === 'success' ? (
        <div role="status" aria-live="polite" className="flex flex-col items-center py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xs border border-emerald-400/40 bg-emerald-500/20">
            <CheckCircle2 className="h-7 w-7 text-emerald-400" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-white">Message Sent Successfully</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-300">
            Thank you for contacting The Softnest Technologies. Our team will review your inquiry and respond within one business day.
          </p>
          <Button
            type="button"
            variant="outline"
            surface="dark"
            size="sm"
            className="mt-6"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/15 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{subtitle}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-xs border border-emerald-400/35 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Direct Inquiry
            </span>
          </div>

          {status === 'error' && (
            <div
              role="alert"
              className="flex items-center gap-2.5 rounded-xs border border-rose-400/40 bg-rose-950/60 px-4 py-3 text-sm text-rose-200"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                Something went wrong while submitting your inquiry. Please try again or email us directly.
              </span>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${idPrefix}-name`}
                className="mb-1.5 block text-sm font-medium text-gray-100"
              >
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id={`${idPrefix}-name`}
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={getInputClasses(errors.name)}
              />
              {errors.name && (
                <p id={`${idPrefix}-name-error`} className="mt-1 text-xs text-rose-300">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`${idPrefix}-email`}
                className="mb-1.5 block text-sm font-medium text-gray-100"
              >
                Business Email <span className="text-rose-400">*</span>
              </label>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className={getInputClasses(errors.email)}
              />
              {errors.email && (
                <p id={`${idPrefix}-email-error`} className="mt-1 text-xs text-rose-300">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${idPrefix}-phone`}
                className="mb-1.5 block text-sm font-medium text-gray-100"
              >
                Phone Number
              </label>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                className={getInputClasses(errors.phone)}
              />
              {errors.phone && (
                <p id={`${idPrefix}-phone-error`} className="mt-1 text-xs text-rose-300">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`${idPrefix}-company`}
                className="mb-1.5 block text-sm font-medium text-gray-100"
              >
                Company Name <span className="text-rose-400">*</span>
              </label>
              <input
                id={`${idPrefix}-company`}
                name="company"
                type="text"
                autoComplete="organization"
                required
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? `${idPrefix}-company-error` : undefined}
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                className={getInputClasses(errors.company)}
              />
              {errors.company && (
                <p id={`${idPrefix}-company-error`} className="mt-1 text-xs text-rose-300">
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-service`}
              className="mb-1.5 block text-sm font-medium text-gray-100"
            >
              Service Interested In <span className="text-rose-400">*</span>
            </label>
            <select
              id={`${idPrefix}-service`}
              name="service"
              required
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? `${idPrefix}-service-error` : undefined}
              value={formData.service}
              onChange={handleChange}
              className={getInputClasses(errors.service)}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id={`${idPrefix}-service-error`} className="mt-1 text-xs text-rose-300">
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-message`}
              className="mb-1.5 block text-sm font-medium text-gray-100"
            >
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              required
              rows={4}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              className={`${getInputClasses(errors.message)} resize-y`}
            />
            {errors.message && (
              <p id={`${idPrefix}-message-error`} className="mt-1 text-xs text-rose-300">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="accent"
            surface="dark"
            size="lg"
            className="w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending Inquiry...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </Card>
  );
}
