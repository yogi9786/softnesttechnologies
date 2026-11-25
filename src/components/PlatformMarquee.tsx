import {
  Compass,
  Database,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const PLATFORMS = [
  { name: 'LinkedIn Sales Navigator', icon: Share2, accent: 'bg-primary text-white' },
  { name: 'Apollo.io', icon: Compass, accent: 'bg-dark text-white' },
  { name: 'ZoomInfo', icon: Database, accent: 'bg-primary text-white' },
  { name: 'HubSpot CRM', icon: Users, accent: 'bg-dark text-white' },
  { name: 'Hunter.io', icon: Search, accent: 'bg-primary text-white' },
  { name: 'Lusha', icon: ShieldCheck, accent: 'bg-accent text-white' },
  { name: 'Clay', icon: Sparkles, accent: 'bg-dark text-white' },
  { name: 'Instantly', icon: Mail, accent: 'bg-primary text-white' },
] as const;

export default function PlatformMarquee() {
  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-center gap-3 px-2 text-center">
        <span className="hidden h-px w-8 bg-border-dark sm:block" aria-hidden="true" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
          Platforms We Use To Generate Leads
        </p>
        <span className="hidden h-px w-8 bg-border-dark sm:block" aria-hidden="true" />
      </div>

      <div className="marquee-wrapper relative overflow-hidden border-y border-border-light bg-bg-light/70 py-4">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-white to-transparent sm:w-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-white to-transparent sm:w-20"
          aria-hidden="true"
        />

        <div className="animate-marquee items-center">
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              aria-hidden={dupIndex === 1}
              className="flex shrink-0 items-center gap-4 pr-4"
            >
              {PLATFORMS.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={`${dupIndex}-${platform.name}`}
                    className="flex shrink-0 items-center gap-2.5 rounded-xs border border-border-dark bg-white px-4 py-2.5 shadow-[3px_3px_0px_#E4E7EC]"
                  >
                    <span
                      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-xs ${platform.accent}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="whitespace-nowrap text-xs font-semibold tracking-tight text-dark sm:text-sm">
                      {platform.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
