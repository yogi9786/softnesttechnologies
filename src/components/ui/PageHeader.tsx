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
    <section className="relative overflow-hidden border-b border-dark-secondary bg-[#0B1220] bg-dot-grid-dark py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute -bottom-24 left-1/5 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-[2px] border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-200 backdrop-blur-xs">
            <span className="h-1.5 w-1.5 bg-accent" />
            {badge}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {titlePrefix}{' '}
            <span className="text-blue-400">{titleHighlight}</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
