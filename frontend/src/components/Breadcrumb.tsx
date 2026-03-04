import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://robohire.io';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href || ''}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <ol className="flex items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <span>/</span>}
              {item.href && !isLast ? (
                <Link to={item.href} className="hover:text-slate-700">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-slate-900' : ''}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
