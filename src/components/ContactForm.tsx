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
  'Email Marketing',
  'LinkedIn Prospecting',
  'Appointment Setting',
  'Data Research',
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
}

export default function ContactForm({
  title = 'Send Us an Inquiry',
  subtitle = 'Share your target audience and goals, and we will follow up within one business day.',
  idPrefix = 'contact',
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
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
    `w-full rounded-[2px] border px-4 py-2.5 text-sm text-dark placeholder:text-text-tertiary transition-colors focus:outline-none focus:ring-2 ${
      hasError
        ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-red-200'
        : 'border-border-dark bg-white focus:border-primary focus:ring-primary/20'
    }`;

  return (
    <Card hover={false} className="border-border-dark shadow-[6px_6px_0px_#E4E7EC]">
      {status === 'success' ? (
        <div className="flex flex-col items-center py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-[2px] border border-accent/30 bg-accent-light">
            <CheckCircle2 className="h-7 w-7 text-accent" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-dark">Message Sent Successfully</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
            Thank you for contacting The Softnest Technologies. Our team will review your inquiry and respond within one business day.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-6"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-border-light pb-4">
            <h3 className="text-xl font-bold text-dark">{title}</h3>
            <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
          </div>

          {status === 'error' && (
            <div
              role="alert"
              className="flex items-center gap-2.5 rounded-[2px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                Something went wrong while submitting your inquiry. Please try again or reach out via email or WhatsApp.
              </span>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${idPrefix}-name`}
                className="mb-1.5 block text-sm font-medium text-dark"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id={`${idPrefix}-name`}
                name="name"
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={getInputClasses(errors.name)}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label
                htmlFor={`${idPrefix}-email`}
                className="mb-1.5 block text-sm font-medium text-dark"
              >
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className={getInputClasses(errors.email)}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${idPrefix}-phone`}
                className="mb-1.5 block text-sm font-medium text-dark"
              >
                Phone Number
              </label>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                className={getInputClasses()}
              />
            </div>
            <div>
              <label
                htmlFor={`${idPrefix}-company`}
                className="mb-1.5 block text-sm font-medium text-dark"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id={`${idPrefix}-company`}
                name="company"
                type="text"
                required
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                className={getInputClasses(errors.company)}
              />
              {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-service`}
              className="mb-1.5 block text-sm font-medium text-dark"
            >
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select
              id={`${idPrefix}-service`}
              name="service"
              required
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
            {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-message`}
              className="mb-1.5 block text-sm font-medium text-dark"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              required
              rows={4}
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              className={`${getInputClasses(errors.message)} resize-y`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>

          <Button
            type="submit"
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
