import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/zh`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/en/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/zh/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/en/docs/quick-start`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/zh/docs/quick-start`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/en/docs/api`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/zh/docs/api`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/en/docs/faq`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/zh/docs/faq`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 }
  ];
}
