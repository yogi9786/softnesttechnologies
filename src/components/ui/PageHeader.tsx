interface PageHeaderProps {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
}

export default function PageHeader({
  badge,
  titlePrefix,
  titleHighlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-dark-secondary bg-[#0B1220] pt-22 pb-10 sm:pt-28 sm:pb-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute -bottom-24 left-1/5 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute -top-10 right-16 h-56 w-56 rotate-12 border border-emerald-400/12" />
        <div className="absolute -bottom-12 left-10 h-48 w-48 -rotate-6 border border-white/6" />
        <div className="mx-auto hidden h-full max-w-7xl border-x border-white/5 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/45 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-2.5 inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-200 backdrop-blur-xs sm:mb-3 sm:px-3 sm:py-1 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {badge}
          </span>
          <h1 className="hero-title-reveal text-[1.45rem] leading-[1.2] font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {titlePrefix}{' '}
            <span className="relative inline-block text-blue-400">
              {titleHighlight}
              <span
                className="hero-underline-sweep absolute -bottom-0.5 left-0 h-0.75 w-full bg-accent sm:-bottom-1"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-3 text-[13px] leading-relaxed text-gray-300 sm:mt-4 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
