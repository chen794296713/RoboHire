import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title={t('notFound.title', 'Page Not Found')} noIndex />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg">
          <p className="text-7xl font-bold text-slate-200 landing-display">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900 landing-display">
            {t('notFound.heading', 'Page not found')}
          </h1>
          <p className="mt-3 text-base text-slate-500">
            {t('notFound.description', "The page you're looking for doesn't exist or has been moved.")}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_20px_35px_-20px_rgba(37,99,235,0.95)] transition-all hover:-translate-y-0.5"
            >
              {t('notFound.backHome', 'Back to home')}
            </Link>
            <Link
              to="/docs/overview"
              className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-700"
            >
              {t('notFound.viewDocs', 'View docs')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
