import { Check, Calendar, Mail, ShieldCheck, Users } from 'lucide-react';

interface ServiceVisualProps {
  serviceId: string;
  compact?: boolean;
}

export default function ServiceVisual({ serviceId, compact = false }: ServiceVisualProps) {
  const heightClass = compact ? 'p-4' : 'p-5 sm:p-6';

  switch (serviceId) {
    case 'b2b-lead-generation':
      return (
        <div
          className={`rounded-[2px] border border-border-light bg-bg-light bg-dot-grid ${heightClass}`}
          aria-hidden="true"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                ICP Filter
              </span>
              <span className="h-2 w-16 bg-primary/20">
                <span className="block h-2 w-12 bg-primary" />
              </span>
            </div>
            <div className="flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                Decision Makers
              </span>
              <span className="rounded-[2px] bg-primary-light px-2 py-0.5 text-[10px] font-semibold text-primary">
                Targeted
              </span>
            </div>
            <div className="flex items-center justify-between border border-accent/30 bg-accent-light/70 px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-dark">
                Qualified Pipeline
              </span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-[2px] bg-accent text-white">
                <Check className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      );

    case 'it-saas-lead-generation':
      return (
        <div
          className={`rounded-[2px] border border-border-light bg-bg-light bg-dot-grid ${heightClass}`}
          aria-hidden="true"
        >
          <div className="grid grid-cols-2 gap-2">
            {[
              { role: 'CTO / CIO', tag: 'Enterprise' },
              { role: 'VP Eng', tag: 'Tech Stack' },
              { role: 'Product Lead', tag: 'SaaS Buyer' },
              { role: 'IT Director', tag: 'Cloud Ready' },
            ].map((item, idx) => (
              <div
                key={item.role}
                className={`border px-2.5 py-2 ${
                  idx === 0
                    ? 'border-primary/40 bg-white shadow-[2px_2px_0px_#155EEF]'
                    : 'border-border-light bg-white'
                }`}
              >
                <p className="text-[11px] font-semibold text-dark">{item.role}</p>
                <p className="mt-0.5 text-[10px] font-medium text-primary">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'email-marketing':
      return (
        <div
          className={`rounded-[2px] border border-border-light bg-bg-light bg-dot-grid ${heightClass}`}
          aria-hidden="true"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 border border-border-light bg-white px-3 py-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
              <div className="h-2 flex-1 bg-border-light">
                <div className="h-2 w-4/5 bg-primary" />
              </div>
              <span className="text-[10px] font-semibold text-primary">01</span>
            </div>
            <div className="flex items-center gap-2.5 border border-border-light bg-white px-3 py-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-dark" />
              <div className="h-2 flex-1 bg-border-light">
                <div className="h-2 w-3/5 bg-dark" />
              </div>
              <span className="text-[10px] font-semibold text-text-secondary">02</span>
            </div>
            <div className="flex items-center justify-between border border-accent/30 bg-accent-light/70 px-3 py-1.5">
              <span className="text-[11px] font-semibold text-dark">Verified Deliverability</span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      );

    case 'linkedin-prospecting':
      return (
        <div
          className={`rounded-[2px] border border-border-light bg-bg-light bg-dot-grid ${heightClass}`}
          aria-hidden="true"
        >
          <div className="flex items-center justify-between gap-2">
            {[
              { label: 'Profile', active: true },
              { label: 'Connect', active: true },
              { label: 'Engage', active: false },
            ].map((node, idx) => (
              <div key={node.label} className="flex flex-1 items-center gap-1.5">
                <div
                  className={`flex-1 border px-2 py-2.5 text-center ${
                    node.active
                      ? 'border-primary/40 bg-white shadow-[2px_2px_0px_#EBF1FF]'
                      : 'border-accent/40 bg-accent-light/70'
                  }`}
                >
                  <Users
                    className={`mx-auto h-3.5 w-3.5 ${
                      node.active ? 'text-primary' : 'text-accent'
                    }`}
                  />
                  <p className="mt-1 text-[10px] font-semibold text-dark">{node.label}</p>
                </div>
                {idx < 2 && <div className="h-px w-3 shrink-0 bg-border-dark" />}
              </div>
            ))}
          </div>
          <div className="mt-2 border border-border-light bg-white px-3 py-1.5 text-center text-[10px] font-medium text-text-secondary">
            Direct Decision-Maker Outreach
          </div>
        </div>
      );

    case 'appointment-setting':
      return (
        <div
          className={`rounded-[2px] border border-border-light bg-bg-light bg-dot-grid ${heightClass}`}
          aria-hidden="true"
        >
          <div className="border border-border-light bg-white p-2.5">
            <div className="mb-2 flex items-center justify-between border-b border-border-light pb-1.5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-dark">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                Sales Calendar
              </span>
              <span className="text-[10px] font-semibold text-accent">Booked</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {['MON', 'TUE', 'WED', 'THU'].map((day, idx) => (
                <div key={day} className="text-center">
                  <span className="block text-[9px] font-semibold text-text-tertiary">{day}</span>
                  <div
                    className={`mt-1 py-1.5 text-[10px] font-semibold ${
                      idx === 1 || idx === 3
                        ? 'border border-accent bg-accent text-white'
                        : idx === 0
                        ? 'border border-primary/30 bg-primary-light text-primary'
                        : 'border border-border-light bg-bg-light text-text-tertiary'
                    }`}
                  >
                    {idx === 1 || idx === 3 ? 'Call' : idx === 0 ? 'Prep' : 'Open'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'data-research':
    default:
      return (
        <div
          className={`rounded-[2px] border border-border-light bg-bg-light bg-dot-grid ${heightClass}`}
          aria-hidden="true"
        >
          <div className="space-y-1.5 border border-border-light bg-white p-2.5">
            {[
              { field: 'Business Email', status: 'Validated', color: 'text-accent bg-accent-light' },
              { field: 'Direct Phone', status: 'Verified', color: 'text-primary bg-primary-light' },
              { field: 'Company Profile', status: 'Enriched', color: 'text-dark bg-bg-light' },
            ].map((row) => (
              <div
                key={row.field}
                className="flex items-center justify-between border-b border-border-light pb-1.5 last:border-b-0 last:pb-0"
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-dark">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  {row.field}
                </span>
                <span className={`rounded-[2px] px-2 py-0.5 text-[10px] font-semibold ${row.color}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
  }
}
