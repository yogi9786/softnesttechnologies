import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../constants';
import ConnectBar from './ConnectBar';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company */}
          <div>
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/logo-dark.png"
                alt={COMPANY.name}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
              We help B2B companies accelerate growth with qualified leads, strategic outreach, and verified prospect data.
            </p>
            <div className="mt-6">
              <ConnectBar label="CHANNELS" surface="dark" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Contact Details
            </h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-2.5 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={`https://wa.me/${COMPANY.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-accent/40 bg-accent/15 px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  WhatsApp Us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-secondary pt-8 sm:flex-row">
          <p className="text-xs text-text-tertiary">
            &copy; {CURRENT_YEAR} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            B2B Lead Generation &amp; Technology Services
          </p>
        </div>
      </div>
    </footer>
  );
}
