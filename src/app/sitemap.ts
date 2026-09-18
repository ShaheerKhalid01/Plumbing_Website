import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { getAllSlugs } from '@/lib/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, '');

  const staticPages = [
    { path: '', priority: 1.0 },
    { path: '/mckinney-plumbing', priority: 0.95 },
    { path: '/services', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/blog', priority: 0.7 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/sitemap', priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }));

  const blogPages = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
