import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('terms.seo.title', 'Terms of Service')}
        description={t('terms.seo.description', 'Read the Terms of Service for RoboHire. Understand the rules and guidelines governing use of our AI-powered recruitment platform.')}
        url="https://robohire.io/terms"
      />

      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="pt-24 lg:pt-28">
          <div className="mx-auto max-w-4xl px-4 pt-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: t('breadcrumb.home', 'Home'), href: '/' }, { label: t('breadcrumb.terms', 'Terms of Service') }]} />
          </div>
          {/* Hero */}
          <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 landing-display sm:text-5xl">
                {t('terms.title', 'Terms of Service')}
              </h1>
              <p className="text-sm text-slate-500">
                {t('terms.lastUpdated', 'Last updated: March 2026')}
              </p>
            </div>
          </section>

          {/* Content */}
          <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
            {/* Acceptance of Terms */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.acceptance.title', '1. Acceptance of Terms')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.acceptance.content.p1', 'By accessing or using RoboHire ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.acceptance.content.p2', 'We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the revised Terms. We encourage you to review this page periodically.')}
              </p>
            </section>

            {/* Description of Service */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.service.title', '2. Description of Service')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.service.content.p1', 'RoboHire is an AI-powered recruitment platform that provides resume matching, automated interviews, candidate evaluation, and related hiring tools. The Service is available through our web application and API.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.service.content.p2', 'We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.')}
              </p>
            </section>

            {/* User Accounts */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.accounts.title', '3. User Accounts')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.accounts.content.p1', 'To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.accounts.content.p2', 'You must provide accurate and complete information when creating your account and keep your account information up to date. You must notify us immediately of any unauthorized use of your account or any other breach of security.')}
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.use.title', '4. Acceptable Use')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.use.content.p1', 'You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service to discriminate against candidates on the basis of race, gender, age, religion, disability, or any other protected characteristic.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.use.content.p2', 'You may not attempt to gain unauthorized access to any part of the Service, reverse-engineer any aspect of the Service, or use the Service to transmit malware, spam, or any content that is unlawful, harmful, or violates the rights of others.')}
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.ip.title', '5. Intellectual Property')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.ip.content.p1', 'The Service and its original content, features, and functionality are owned by RoboHire and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.ip.content.p2', 'You retain ownership of all data you upload to the Service, including resumes, job descriptions, and evaluation criteria. By using the Service, you grant us a limited license to process this data solely for the purpose of providing the Service.')}
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.liability.title', '6. Limitation of Liability')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.liability.content.p1', 'To the maximum extent permitted by law, RoboHire shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use or inability to use the Service.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.liability.content.p2', 'AI-generated evaluations and recommendations are provided as decision-support tools and should not be the sole basis for employment decisions. You are responsible for making final hiring decisions in compliance with applicable employment laws.')}
              </p>
            </section>

            {/* Termination */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.termination.title', '7. Termination')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.termination.content.p1', 'You may terminate your account at any time by contacting us or through your account settings. We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or third parties.')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('terms.sections.termination.content.p2', 'Upon termination, your right to use the Service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.')}
              </p>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t('terms.sections.contact.title', '8. Contact')}
              </h2>
              <p className="mb-3 text-slate-600 leading-relaxed">
                {t('terms.sections.contact.content.p1', 'If you have any questions about these Terms of Service, please contact us at:')}
              </p>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm text-slate-700">
                  {t('terms.sections.contact.content.email', 'Email: legal@robohire.io')}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {t('terms.sections.contact.content.address', 'RoboHire Inc.')}
                </p>
              </div>
            </section>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
              <Link
                to="/privacy"
                className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                {t('terms.nav.privacy', 'Privacy Policy')}
              </Link>
              <Link
                to="/"
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(37,99,235,0.9)] transition-all hover:-translate-y-0.5"
              >
                {t('terms.nav.home', 'Back to Home')}
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
