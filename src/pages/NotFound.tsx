import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | The Softnest Technologies',
    description: 'The requested page could not be found on The Softnest Technologies website.',
  });

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-bg-light px-6 pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="max-w-md rounded-[3px] border border-border-dark border-t-2 border-t-accent bg-white p-7 text-center shadow-[6px_6px_0px_#16A36A] sm:p-12">
        <span className="inline-flex items-center gap-1.5 rounded-xs border border-accent/30 bg-accent-light px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Error 404
        </span>
        <p className="mt-4 text-6xl font-bold text-primary sm:text-7xl">404</p>
        <h1 className="mt-3 text-xl font-bold text-dark sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-2.5 text-sm text-text-secondary sm:mt-3 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-7 sm:mt-8">
          <Button as={Link} to="/" variant="accent" size="md">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
