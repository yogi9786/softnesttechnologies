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
    <section className="flex min-h-[60vh] items-center justify-center bg-dot-grid px-4 py-16">
      <div className="rounded-[3px] border border-border-dark bg-white p-8 text-center shadow-[6px_6px_0px_#155EEF] sm:p-12">
        <p className="text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-dark sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button as={Link} to="/" size="md">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
