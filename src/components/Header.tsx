import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../constants';
import { useCalendly } from '../context/CalendlyContext';

export default function Header() {
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const { pathname } = useLocation();
  const { openCalendly } = useCalendly();
  const mobileOpen = openPathname === pathname;

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenPathname(null);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  const handleScheduleClick = () => {
    setOpenPathname(null);
    openCalendly();
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        {/* Floating Rounded Pill Header */}
        <div className="flex h-14 items-center justify-between gap-2 rounded-full border border-border-dark/80 bg-white/95 px-3 shadow-[0_10px_30px_rgba(16,24,40,0.12)] backdrop-blur-md sm:h-16 sm:px-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center px-2 py-1 focus:outline-none"
            onClick={() => setOpenPathname(null)}
            aria-label={`${COMPANY.name} Home`}
          >
            <img
              src="/logo.png"
              alt={COMPANY.name}
              className="h-7 w-auto object-contain sm:h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors xl:px-3.5 xl:text-sm ${
                    isActive
                      ? 'bg-primary-light text-primary'
                      : 'text-dark-secondary hover:bg-bg-light hover:text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Pill CTA */}
          <div className="hidden shrink-0 items-center lg:flex">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-white shadow-xs transition-all duration-150 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 xl:px-5 xl:py-2.5 xl:text-sm"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Meeting
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpenPathname(mobileOpen ? null : pathname)}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-dark bg-bg-light text-dark transition-colors hover:bg-primary-light hover:text-primary lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile & Tablet Floating Dropdown */}
        {mobileOpen && (
          <div className="mt-2.5 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-border-dark/80 bg-white/98 p-4 shadow-[0_16px_40px_rgba(16,24,40,0.16)] backdrop-blur-md lg:hidden">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpenPathname(null)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-light text-primary'
                        : 'text-dark-secondary hover:bg-bg-light hover:text-dark'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 border-t border-border-light pt-3">
              <button
                type="button"
                onClick={handleScheduleClick}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
