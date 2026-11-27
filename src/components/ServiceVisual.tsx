import { Check, Calendar, Code2, ShieldCheck, Users } from 'lucide-react';

interface ServiceVisualProps {
  serviceId: string;
  compact?: boolean;
}

export default function ServiceVisual({ serviceId, compact = false }: ServiceVisualProps) {
  const paddingClass = compact ? 'p-2 sm:p-3.5' : 'p-2 sm:p-4';
  const stageClass = `flex min-h-36 sm:h-38 flex-col justify-center rounded-xs border border-border-light bg-bg-light ${paddingClass}`;

  switch (serviceId) {
    case 'b2b-lead-generation':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between gap-1.5 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[9px] font-semibold uppercase tracking-wider text-text-secondary sm:text-[11px]">
                ICP Filter
              </span>
              <span className="h-1.5 w-10 shrink-0 overflow-hidden bg-primary/20 sm:h-2 sm:w-20">
                <span className="svc-bar-sweep block h-full bg-primary" />
              </span>
            </div>

            <div className="svc-row-blue flex items-center justify-between gap-1 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[9px] font-semibold uppercase tracking-wider text-text-secondary sm:text-[11px]">
                Decision Makers
              </span>
              <span className="shrink-0 rounded-xs bg-primary-light px-1.5 py-0.5 text-[8px] font-semibold text-primary sm:px-2 sm:text-[10px]">
                Targeted
              </span>
            </div>

            <div className="svc-row-green flex items-center justify-between gap-1 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[9px] font-semibold uppercase tracking-wider text-dark sm:text-[11px]">
                Qualified Pipeline
              </span>
              <span className="svc-check-pulse inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-xs bg-accent text-white sm:h-4 sm:w-4">
                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </span>
            </div>
          </div>
        </div>
      );

    case 'it-saas-lead-generation':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            {[
              { role: 'CTO / CIO', tag: 'Enterprise', delay: '0s' },
              { role: 'VP Eng', tag: 'Tech Stack', delay: '1.2s' },
              { role: 'Product Lead', tag: 'SaaS Buyer', delay: '2.4s' },
              { role: 'IT Director', tag: 'Cloud Ready', delay: '3.6s' },
            ].map((item) => (
              <div
                key={item.role}
                style={{ animationDelay: item.delay }}
                className="svc-tile-scan min-w-0 border border-border-light bg-white px-1.5 py-1.5 sm:px-2.5 sm:py-2"
              >
                <p className="truncate text-[9px] font-semibold text-dark sm:text-[11px]">{item.role}</p>
                <p className="mt-0.5 truncate text-[8px] font-medium text-primary sm:text-[10px]">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'web-development':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-1.5 border border-border-light bg-white px-2 py-1.5 sm:gap-2.5 sm:px-3 sm:py-2">
              <Code2 className="h-3 w-3 shrink-0 text-primary sm:h-3.5 sm:w-3.5" />
              <div className="h-1.5 flex-1 overflow-hidden bg-border-light sm:h-2">
                <div className="svc-bar-sweep h-full bg-primary" />
              </div>
              <span className="text-[9px] font-semibold text-primary sm:text-[10px]">UI</span>
            </div>

            <div className="svc-row-blue flex items-center justify-between gap-1 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[9px] font-semibold text-text-secondary sm:text-[11px]">
                Responsive &amp; Fast Build
              </span>
              <span className="shrink-0 rounded-xs bg-primary-light px-1.5 py-0.5 text-[8px] font-semibold text-primary sm:px-2 sm:text-[10px]">
                SEO
              </span>
            </div>

            <div className="svc-row-green flex items-center justify-between gap-1 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[9px] font-semibold text-dark sm:text-[11px]">
                Production Ready
              </span>
              <span className="svc-check-pulse inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-xs bg-accent text-white sm:h-4 sm:w-4">
                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </span>
            </div>
          </div>
        </div>
      );

    case 'linkedin-prospecting':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="space-y-2 sm:space-y-2.5">
            <div className="flex items-center justify-between gap-1">
              {[
                { label: 'Profile', delay: '0s', iconColor: 'text-primary' },
                { label: 'Connect', delay: '1.5s', iconColor: 'text-primary' },
                { label: 'Engage', delay: '3.0s', iconColor: 'text-accent' },
              ].map((node, idx) => (
                <div key={node.label} className="flex min-w-0 flex-1 items-center gap-1">
                  <div
                    style={{ animationDelay: node.delay }}
                    className="svc-node-step min-w-0 flex-1 border border-border-light bg-white px-0.5 py-2 text-center sm:px-1.5 sm:py-2.5"
                  >
                    <Users className={`mx-auto h-3 w-3 sm:h-3.5 sm:w-3.5 ${node.iconColor}`} />
                    <p className="mt-1 truncate text-[8px] font-semibold text-dark sm:text-[10px]">
                      {node.label}
                    </p>
                  </div>
                  {idx < 2 && <div className="hidden h-px w-2 shrink-0 bg-border-dark sm:block" />}
                </div>
              ))}
            </div>

            <div className="svc-row-green flex items-center justify-between gap-1 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[9px] font-medium text-dark sm:text-[11px]">
                Direct Decision-Maker Outreach
              </span>
              <span className="svc-check-pulse h-2 w-2 shrink-0 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      );

    case 'appointment-setting':
      return (
        <div className={stageClass} aria-hidden="true">
          <div className="border border-border-light bg-white p-2 sm:p-3">
            <div className="mb-2 flex items-center justify-between gap-1 border-b border-border-light pb-1.5 sm:mb-2.5 sm:pb-2">
              <span className="inline-flex min-w-0 items-center gap-1 text-[9px] font-semibold text-dark sm:gap-1.5 sm:text-[11px]">
                <Calendar className="h-3 w-3 shrink-0 text-primary sm:h-3.5 sm:w-3.5" />
                <span className="truncate">Sales Calendar</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 text-[8px] font-semibold text-accent sm:gap-1.5 sm:text-[10px]">
                <span className="svc-check-pulse h-1.5 w-1.5 rounded-full bg-accent" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-1.5">
              {[
                { day: 'MON', status: 'Prep', style: 'border-primary/30 bg-primary-light text-primary', delay: '0s' },
                { day: 'TUE', status: 'Booked', style: 'border-accent bg-accent text-white', delay: '1.2s' },
                { day: 'WED', status: 'Open', style: 'border-border-light bg-bg-light text-text-secondary', delay: '2.4s' },
                { day: 'THU', status: 'Booked', style: 'border-accent bg-accent text-white', delay: '3.6s' },
              ].map((slot) => (
                <div key={slot.day} className="text-center">
                  <span className="block text-[8px] font-semibold text-text-tertiary sm:text-[9px]">
                    {slot.day}
                  </span>
                  <div
                    style={{ animationDelay: slot.delay }}
                    className={`svc-cal-slot mt-0.5 border py-1 text-[9px] font-semibold sm:mt-1 sm:py-1.5 sm:text-[10px] ${slot.style}`}
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
                className="svc-row-scan flex items-center justify-between gap-1 border border-border-light bg-white px-2 py-1.5 sm:px-3 sm:py-2"
              >
                <span className="inline-flex min-w-0 items-center gap-1 text-[9px] font-medium text-dark sm:gap-1.5 sm:text-[11px]">
                  <ShieldCheck className="h-3 w-3 shrink-0 text-primary sm:h-3.5 sm:w-3.5" />
                  <span className="truncate">{row.field}</span>
                </span>
                <span
                  className={`shrink-0 rounded-xs px-1.5 py-0.5 text-[8px] font-semibold sm:px-2 sm:text-[10px] ${row.color}`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
  }
}
