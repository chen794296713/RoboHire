import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('privacy.seo.title', 'Privacy Policy')}
        description={t('privacy.seo.description', 'Learn how RoboHire collects, uses, and protects your personal information. Our privacy policy covers data storage, your rights under GDPR and CCPA, and more.')}
        url="https://robohire.io/privacy"
      />

      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="pt-24 lg:pt-28">
          <div className="mx-auto max-w-4xl px-4 pt-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: t('breadcrumb.home', 'Home'), href: '/' }, { label: t('breadcrumb.privacy', 'Privacy Policy') }]} />
          </div>
          {/* Hero */}
          <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 landing-display sm:text-5xl">
                {t('privacy.title', 'Privacy Policy')}
              </h1>
              <p className="text-sm text-slate-500">
                {t('privacy.lastUpdated', 'Last updated: March 2026')}
              </p>
            </div>
          </section>

          {/* Content */}
          <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.collect.title', '1. Information We Collect')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.collect.content.p1', 'We collect information you provide directly to us, including your name, email address, company name, and any other information you choose to provide when creating an account or using our services.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('privacy.sections.collect.content.p2', 'When you use RoboHire to process candidates, we collect resumes, job descriptions, interview recordings, and evaluation data that you upload or generate through our platform. We also automatically collect technical data such as your IP address, browser type, device information, and usage patterns.')}
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.use.title', '2. How We Use Your Information')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.use.content.p1', 'We use the information we collect to provide, maintain, and improve our services, including AI-powered resume matching, interview evaluation, and candidate screening. Your data is processed by our AI models solely to deliver the recruitment features you request.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('privacy.sections.use.content.p2', 'We also use your information to communicate with you about your account, respond to support requests, send service-related announcements, and — with your consent — provide information about new features and updates.')}
              </p>
            </section>

            {/* Data Storage & Security */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.storage.title', '3. Data Storage & Security')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.storage.content.p1', 'Your data is stored on secure servers with enterprise-grade encryption. All data in transit is protected with TLS 1.3 encryption, and data at rest is encrypted using AES-256. We employ strict access controls and regular security audits to protect your information.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('privacy.sections.storage.content.p2', 'We retain your personal data only for as long as necessary to provide our services or as required by law. Candidate data uploaded for processing is retained according to your account settings and can be deleted at your request.')}
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.thirdParty.title', '4. Third-Party Services')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.thirdParty.content.p1', 'We use trusted third-party services to operate our platform, including cloud hosting providers, payment processors (Stripe), authentication services, and AI model providers. These providers are contractually obligated to protect your data and process it only as we instruct.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('privacy.sections.thirdParty.content.p2', 'We do not sell your personal information to third parties. We do not share candidate data with anyone other than the account holder who uploaded it.')}
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.rights.title', '5. Your Rights (GDPR, CCPA)')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.rights.content.p1', 'Depending on your location, you may have certain rights regarding your personal data under the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), or other applicable privacy laws.')}
              </p>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.rights.content.p2', 'These rights may include the right to access, correct, or delete your personal data; the right to restrict or object to processing; the right to data portability; and the right to withdraw consent. For CCPA-covered consumers, you have the right to know what data we collect, request deletion, and opt out of any sale of personal information.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('privacy.sections.rights.content.p3', 'To exercise any of these rights, please contact us at privacy@robohire.io. We will respond to your request within 30 days.')}
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.cookies.title', '6. Cookies')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.cookies.content.p1', 'We use essential cookies to operate our platform, including session cookies for authentication and preference cookies for language settings. These cookies are strictly necessary for the service to function.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('privacy.sections.cookies.content.p2', 'We may also use analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings. Disabling essential cookies may prevent you from using certain features of our platform.')}
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('privacy.sections.contact.title', '7. Contact Us')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('privacy.sections.contact.content.p1', 'If you have any questions about this Privacy Policy or our data practices, please contact us at:')}
              </p>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm text-slate-700">
                  {t('privacy.sections.contact.content.email', 'Email: privacy@robohire.io')}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {t('privacy.sections.contact.content.address', 'RoboHire Inc.')}
                </p>
              </div>
            </section>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
              <Link
                to="/terms"
                className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                {t('privacy.nav.terms', 'Terms of Service')}
              </Link>
              <Link
                to="/"
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(37,99,235,0.9)] transition-all hover:-translate-y-0.5"
              >
                {t('privacy.nav.home', 'Back to Home')}
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
