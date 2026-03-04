import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      q: t('landing.faq.items.0.q', 'What is RoboHire?'),
      a: t('landing.faq.items.0.a', 'RoboHire is an AI-powered recruitment platform that automates resume screening, conducts AI-led interviews, and delivers structured evaluation reports for every candidate.'),
    },
    {
      q: t('landing.faq.items.1.q', 'How does AI resume screening work?'),
      a: t('landing.faq.items.1.a', 'Our AI analyzes resumes against your job requirements, scoring candidates on skills, experience, and fit. It processes hundreds of resumes in minutes, identifying the best matches automatically.'),
    },
    {
      q: t('landing.faq.items.2.q', 'What languages does RoboHire support?'),
      a: t('landing.faq.items.2.a', 'RoboHire supports 7 languages: English, Chinese (Simplified & Traditional), Japanese, Spanish, French, Portuguese, and German. Both the platform interface and AI analysis work in all supported languages.'),
    },
    {
      q: t('landing.faq.items.3.q', 'Is there a free trial?'),
      a: t('landing.faq.items.3.a', 'Yes! You can start with our free Starter plan which includes resume matches and interview evaluations at no cost. No credit card required.'),
    },
    {
      q: t('landing.faq.items.4.q', 'How does the AI interview work?'),
      a: t('landing.faq.items.4.a', 'RoboHire generates customized interview questions based on the job requirements and candidate profile. The AI conducts structured interviews, evaluates responses, and produces detailed assessment reports with scoring.'),
    },
    {
      q: t('landing.faq.items.5.q', 'Is my data secure?'),
      a: t('landing.faq.items.5.a', 'Absolutely. We use industry-standard encryption for data at rest and in transit. Your recruitment data is isolated per account and never shared with third parties. We comply with GDPR and SOC 2 standards.'),
    },
    {
      q: t('landing.faq.items.6.q', 'Can I integrate RoboHire with my existing tools?'),
      a: t('landing.faq.items.6.a', 'Yes, RoboHire provides a comprehensive REST API and webhook support for seamless integration with your existing ATS, HR systems, and workflows. Check our API documentation to get started.'),
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {t('landing.faq.badge', 'FAQ')}
          </p>
          <h2 className="landing-display mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            {t('landing.faq.title', 'Frequently Asked Questions')}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="landing-gradient-stroke rounded-[28px] bg-white shadow-[0_18px_34px_-28px_rgba(15,23,42,0.75)]">
            {items.map((item, index) => (
              <div
                key={index}
                className={index < items.length - 1 ? 'border-b border-slate-100' : ''}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50/60 sm:px-8"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {item.q}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-sm leading-relaxed text-slate-600 sm:px-8 sm:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
