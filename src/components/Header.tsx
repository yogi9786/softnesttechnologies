import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../constants';
import { useCalendly } from '../context/CalendlyContext';
import Button from './ui/Button';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { openCalendly } = useCalendly();

  const handleScheduleClick = () => {
    setMobileOpen(false);
    openCalendly();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border-light bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center focus:outline-none"
          onClick={() => setMobileOpen(false)}
          aria-label={`${COMPANY.name} Home`}
        >
          <img
            src="/logo.png"
            alt={COMPANY.name}
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap rounded-[2px] px-2.5 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
                  isActive
                    ? 'border border-primary/20 bg-primary-light/70 text-primary'
                    : 'border border-transparent text-text-secondary hover:bg-bg-light hover:text-dark'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 items-center lg:flex">
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={openCalendly}
          >
            <Calendar className="h-4 w-4" />
            Schedule a Meeting
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[2px] border border-border-dark bg-white text-dark transition-colors hover:bg-bg-light lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-[2px] px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border border-primary/25 bg-primary-light text-primary'
                      : 'text-text-secondary hover:bg-bg-light hover:text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <Button
                type="button"
                variant="primary"
                size="md"
                className="w-full"
                onClick={handleScheduleClick}
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
