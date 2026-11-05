import type { MetadataRoute } from 'next';
import { ventures } from './data/ventures';
import { absoluteUrl, siteConfig } from './lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1, images: [absoluteUrl(siteConfig.ogImage)] },
    { url: absoluteUrl('/ventures'), changeFrequency: 'weekly', priority: 0.9, images: ventures.map((v) => absoluteUrl(v.image)) },
    { url: absoluteUrl('/about'), changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('/contact'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/privacy'), changeFrequency: 'yearly', priority: 0.2 },
  ];

  const venturePages: MetadataRoute.Sitemap = ventures.map((venture) => ({
    url: absoluteUrl(`/ventures/${venture.slug}`),
    changeFrequency: 'weekly',
    priority: 0.9,
    images: [absoluteUrl(venture.image)],
  }));

  return [...pages, ...venturePages];
}
