import { services } from './services';
import { locations } from './locations';

const BASE_URL = 'https://dhelectricalservice.co.uk';

export const generateSitemap = () => {
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/reviews',
    '/feedback',
    '/discount',
    '/privacy-policy',
    '/cookie-policy',
    '/terms-of-service',
    '/get-quote',
  ];

  const servicePages = services.map(s => `/services/${s.slug}`);
  const locationPages = locations.map(l => `/locations/${l.slug}`);
  
  // Cross-product of locations and services
  const serviceLocationPages: string[] = [];
  locations.forEach(l => {
    services.forEach(s => {
      serviceLocationPages.push(`/locations/${l.slug}/${s.slug}`);
    });
  });

  const allPages = [...staticPages, ...servicePages, ...locationPages, ...serviceLocationPages];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/services/') || page.startsWith('/locations/') ? '0.8' : '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};
