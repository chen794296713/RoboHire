import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('landing.testimonials.items.0.quote', 'RoboHire cut our screening time by 85%. We went from spending 3 days reviewing resumes to getting matched candidates in hours.'),
      name: t('landing.testimonials.items.0.name', 'Sarah Chen'),
      role: t('landing.testimonials.items.0.role', 'Head of Talent'),
      company: t('landing.testimonials.items.0.company', 'TechFlow'),
    },
    {
      quote: t('landing.testimonials.items.1.quote', 'The API integration was seamless. We built AI hiring into our platform in a single sprint. The documentation is excellent.'),
      name: t('landing.testimonials.items.1.name', 'Marcus Weber'),
      role: t('landing.testimonials.items.1.role', 'CTO'),
      company: t('landing.testimonials.items.1.company', 'ScaleUp GmbH'),
    },
    {
      quote: t('landing.testimonials.items.2.quote', 'Multilingual support was a game-changer for our global hiring. The AI conducts interviews in Japanese just as well as English.'),
      name: t('landing.testimonials.items.2.name', 'Yuki Tanaka'),
      role: t('landing.testimonials.items.2.role', 'HR Director'),
      company: t('landing.testimonials.items.2.company', 'NexGen'),
    },
    {
      quote: t('landing.testimonials.items.3.quote', 'The evaluation reports are incredibly detailed. They\'ve helped us make more objective hiring decisions and reduce bias.'),
      name: t('landing.testimonials.items.3.name', 'Ana Costa'),
      role: t('landing.testimonials.items.3.role', 'Recruitment Lead'),
      company: t('landing.testimonials.items.3.company', 'Rapido'),
    },
  ];

  const companies = ['TechFlow', 'ScaleUp GmbH', 'NexGen', 'Rapido'];

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RoboHire',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((item) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: item.name,
      },
      reviewBody: item.quote,
    })),
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent" />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {t('landing.testimonials.badge', 'Testimonials')}
          </p>
          <h2 className="landing-display mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            {t('landing.testimonials.title', 'Trusted by Hiring Teams Worldwide')}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="group landing-gradient-stroke rounded-[28px] bg-white p-6 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-32px_rgba(15,23,42,0.6)] sm:p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-base leading-relaxed text-slate-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-semibold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">
                    {item.role} @ {item.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg font-semibold tracking-tight text-slate-300 transition-colors hover:text-slate-400 sm:text-xl"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
