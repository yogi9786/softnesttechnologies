import { Check, Calendar, Mail, ShieldCheck, Users } from 'lucide-react';

interface ServiceVisualProps {
  serviceId: string;
  compact?: boolean;
}

export default function ServiceVisual({ serviceId, compact = false }: ServiceVisualProps) {
  const paddingClass = compact ? 'p-3 sm:p-3.5' : 'p-3.5 sm:p-4';
  const stageClass = `flex h-38 flex-col justify-center rounded-xs border border-border-light bg-bg-light bg-dot-grid ${paddingClass}`;

  switch (serviceId) {
    case 'b2b-lead-generation':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-2">
            <div className="flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                ICP Filter
              </span>
              <span className="h-2 w-20 overflow-hidden bg-primary/20">
                <span className="svc-bar-sweep block h-2 bg-primary" />
              </span>
            </div>

            <div className="svc-row-blue flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                Decision Makers
              </span>
              <span className="rounded-xs bg-primary-light px-2 py-0.5 text-[10px] font-semibold text-primary">
                Targeted
              </span>
            </div>

            <div className="svc-row-green flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-dark">
                Qualified Pipeline
              </span>
              <span className="svc-check-pulse inline-flex h-4 w-4 items-center justify-center rounded-xs bg-accent text-white">
                <Check className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      );

    case 'it-saas-lead-generation':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="grid grid-cols-2 gap-2">
            {[
              { role: 'CTO / CIO', tag: 'Enterprise', delay: '0s' },
              { role: 'VP Eng', tag: 'Tech Stack', delay: '1.2s' },
              { role: 'Product Lead', tag: 'SaaS Buyer', delay: '2.4s' },
              { role: 'IT Director', tag: 'Cloud Ready', delay: '3.6s' },
            ].map((item) => (
              <div
                key={item.role}
                style={{ animationDelay: item.delay }}
                className="svc-tile-scan border border-border-light bg-white px-2.5 py-2"
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
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 border border-border-light bg-white px-3 py-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
              <div className="h-2 flex-1 overflow-hidden bg-border-light">
                <div className="svc-bar-sweep h-2 bg-primary" />
              </div>
              <span className="text-[10px] font-semibold text-primary">01</span>
            </div>

            <div className="flex items-center gap-2.5 border border-border-light bg-white px-3 py-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-dark" />
              <div className="h-2 flex-1 overflow-hidden bg-border-light">
                <div className="svc-bar-sweep-late h-2 bg-dark" />
              </div>
              <span className="text-[10px] font-semibold text-text-secondary">02</span>
            </div>

            <div className="svc-row-green flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-semibold text-dark">Verified Deliverability</span>
              <span className="svc-check-pulse h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      );

    case 'linkedin-prospecting':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-1.5">
              {[
                { label: 'Profile', delay: '0s', iconColor: 'text-primary' },
                { label: 'Connect', delay: '1.5s', iconColor: 'text-primary' },
                { label: 'Engage', delay: '3.0s', iconColor: 'text-accent' },
              ].map((node, idx) => (
                <div key={node.label} className="flex min-w-0 flex-1 items-center gap-1">
                  <div
                    style={{ animationDelay: node.delay }}
                    className="svc-node-step min-w-0 flex-1 border border-border-light bg-white px-1.5 py-2.5 text-center"
                  >
                    <Users className={`mx-auto h-3.5 w-3.5 ${node.iconColor}`} />
                    <p className="mt-1 truncate text-[10px] font-semibold text-dark">{node.label}</p>
                  </div>
                  {idx < 2 && <div className="h-px w-2 shrink-0 bg-border-dark" />}
                </div>
              ))}
            </div>

            <div className="svc-row-green flex items-center justify-between border border-border-light bg-white px-3 py-2">
              <span className="text-[11px] font-medium text-dark">
                Direct Decision-Maker Outreach
              </span>
              <span className="svc-check-pulse h-2 w-2 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      );

    case 'appointment-setting':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="border border-border-light bg-white p-3">
            <div className="mb-2.5 flex items-center justify-between border-b border-border-light pb-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-dark">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                Sales Calendar
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-accent">
                <span className="svc-check-pulse h-1.5 w-1.5 rounded-full bg-accent" />
                Live Booking
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {[
                { day: 'MON', status: 'Prep', style: 'border-primary/30 bg-primary-light text-primary', delay: '0s' },
                { day: 'TUE', status: 'Booked', style: 'border-accent bg-accent text-white', delay: '1.2s' },
                { day: 'WED', status: 'Open', style: 'border-border-light bg-bg-light text-text-secondary', delay: '2.4s' },
                { day: 'THU', status: 'Booked', style: 'border-accent bg-accent text-white', delay: '3.6s' },
              ].map((slot) => (
                <div key={slot.day} className="text-center">
                  <span className="block text-[9px] font-semibold text-text-tertiary">
                    {slot.day}
                  </span>
                  <div
                    style={{ animationDelay: slot.delay }}
                    className={`svc-cal-slot mt-1 border py-1.5 text-[10px] font-semibold ${slot.style}`}
                  >
                    {slot.status}
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
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-1.5">
            {[
              {
                field: 'Business Email',
                status: 'Validated',
                color: 'text-accent bg-accent-light',
                delay: '0s',
              },
              {
                field: 'Direct Phone',
                status: 'Verified',
                color: 'text-primary bg-primary-light',
                delay: '1.5s',
              },
              {
                field: 'Company Profile',
                status: 'Enriched',
                color: 'text-dark bg-bg-light border border-border-light',
                delay: '3.0s',
              },
            ].map((row) => (
              <div
                key={row.field}
                style={{ animationDelay: row.delay }}
                className="svc-row-scan flex items-center justify-between border border-border-light bg-white px-3 py-2"
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-dark">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  {row.field}
                </span>
                <span className={`rounded-xs px-2 py-0.5 text-[10px] font-semibold ${row.color}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
  }
}
