import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../constants';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        {/* Row 1: Brand + Navigation */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5">
            <Link to="/" className="inline-block w-fit focus:outline-none">
              <img
                src="/logo-dark.png"
                alt={COMPANY.name}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-text-tertiary">
              B2B Lead Generation &amp; Technology Services
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Row 2: Copyright + Direct Contact Links */}
        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-text-tertiary">
            &copy; {CURRENT_YEAR} {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-white sm:text-sm"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-blue-400" />
              <span className="break-all">{COMPANY.email}</span>
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-white sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-blue-400" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xs border border-emerald-400/35 bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-400 transition-colors hover:bg-accent hover:text-white"
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              WhatsApp
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
