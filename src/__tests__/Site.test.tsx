import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from '../App';
import ContactForm from '../components/ContactForm';
import { COMPANY } from '../constants';

describe('The Softnest Technologies Website & Contact Form', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('renders all six primary routes and updates document title', () => {
    const routes = [
      { path: '/', title: 'The Softnest Technologies – B2B Lead Generation & Technology Services', heading: /Accelerate Your Growth/i },
      { path: '/services', title: 'Our Services | The Softnest Technologies', heading: /Lead Generation Solutions/i },
      { path: '/about', title: 'About Us | The Softnest Technologies', heading: /Building Growth Through Quality Leads/i },
      { path: '/industries', title: 'Industries We Serve | The Softnest Technologies', heading: /Industries We Serve/i },
      { path: '/process', title: 'Our Process | The Softnest Technologies', heading: /How We Deliver Results/i },
      { path: '/contact', title: 'Contact Us | The Softnest Technologies', heading: /Let's Start a Conversation/i },
    ];

    for (const route of routes) {
      render(
        <MemoryRouter initialEntries={[route.path]}>
          <App />
        </MemoryRouter>,
      );
      expect(document.title).toBe(route.title);
      expect(screen.getByRole('heading', { level: 1, name: route.heading })).toBeInTheDocument();
      cleanup();
    }
  });

  it('includes Home contact form after Built for Results and PlatformMarquee in Who We Are', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Platforms We Use To Generate Leads/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Built for Results/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Request Qualified B2B Leads/i })).toBeInTheDocument();

    const mailLinks = screen.getAllByRole('link', { name: new RegExp(COMPANY.email, 'i') });
    expect(mailLinks.some((link) => link.getAttribute('href') === `mailto:${COMPANY.email}`)).toBe(true);

    const phoneLinks = screen.getAllByRole('link', { name: /\+91 7624 866 645/i });
    expect(phoneLinks.some((link) => link.getAttribute('href') === `tel:${COMPANY.phoneRaw}`)).toBe(true);
  });

  it('toggles mobile navigation drawer and opens Calendly scheduling dialog', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const toggleButton = screen.getByRole('button', { name: /Toggle navigation menu/i });
    await user.click(toggleButton);
    expect(screen.getByRole('navigation', { name: /Mobile navigation/i })).toBeInTheDocument();

    const scheduleButtons = screen.getAllByRole('button', { name: /Schedule a Meeting/i });
    await user.click(scheduleButtons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Book a Discovery Consultation/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Close scheduling dialog/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('validates required fields, email format, and optional phone format without calling fetch', async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(globalThis, 'fetch');

    render(<ContactForm idPrefix="test" />);

    await user.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(screen.getByText('Full name is required.')).toBeInTheDocument();
    expect(screen.getByText('Business email is required.')).toBeInTheDocument();
    expect(screen.getByText('Company name is required.')).toBeInTheDocument();
    expect(screen.getByText('Please select a service.')).toBeInTheDocument();
    expect(screen.getByText('Please tell us about your requirements.')).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();

    await user.type(screen.getByLabelText(/Full Name/i), 'Test User');
    await user.type(screen.getByLabelText(/Business Email/i), 'invalid-email');
    await user.type(screen.getByLabelText(/Phone Number/i), 'abc');
    await user.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid phone number.')).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('submits valid inquiry to Formspree endpoint with loading and success states', async () => {
    const user = userEvent.setup();
    let resolveFetch: ((value: Response) => void) | undefined;
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        }),
    );

    render(<ContactForm idPrefix="test-submit" />);

    await user.type(screen.getByLabelText(/Full Name/i), '  Aarav Mehta  ');
    await user.type(screen.getByLabelText(/Business Email/i), 'aarav@acme.io');
    await user.type(screen.getByLabelText(/Phone Number/i), '+91 98765 43210');
    await user.type(screen.getByLabelText(/Company Name/i), 'Acme SaaS');
    await user.selectOptions(screen.getByLabelText(/Service Interested In/i), 'IT & SaaS Lead Generation');
    await user.type(screen.getByLabelText(/Message/i), 'Need B2B SaaS outbound leads.');

    await user.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(screen.getByRole('button', { name: /Sending Inquiry/i })).toBeDisabled();
    expect(fetchSpy).toHaveBeenCalledWith(
      COMPANY.formspreeEndpoint,
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: 'Aarav Mehta',
          email: 'aarav@acme.io',
          phone: '+91 98765 43210',
          company: 'Acme SaaS',
          service: 'IT & SaaS Lead Generation',
          message: 'Need B2B SaaS outbound leads.',
        }),
      }),
    );

    resolveFetch?.(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    await waitFor(() => {
      expect(screen.getByText('Message Sent Successfully')).toBeInTheDocument();
    });
  });

  it('displays an error alert when Formspree returns a failed response', async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ error: 'Submission failed' }), { status: 500 }),
    );

    render(<ContactForm idPrefix="test-error" />);

    await user.type(screen.getByLabelText(/Full Name/i), 'Priya Nair');
    await user.type(screen.getByLabelText(/Business Email/i), 'priya@cloudtech.in');
    await user.type(screen.getByLabelText(/Company Name/i), 'CloudTech');
    await user.selectOptions(screen.getByLabelText(/Service Interested In/i), 'B2B Lead Generation');
    await user.type(screen.getByLabelText(/Message/i), 'Looking for enterprise leads.');

    await user.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('Priya Nair');
  });
});
