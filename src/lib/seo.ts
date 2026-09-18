import type { Metadata } from 'next';
import { siteConfig, primaryKeyword } from '@/lib/site-config';

/** Default local SEO keywords used across the site */
export const defaultKeywords = [
  'plumber McKinney TX',
  'plumbers McKinney Texas',
  'McKinney plumbing services',
  'emergency plumber McKinney',
  'drain cleaning McKinney TX',
  'slab leak repair McKinney',
  'plumber Craig Ranch',
  'plumber Stonebridge Ranch',
  'plumbing Collin County',
] as const;

const neighborhoods = 'Craig Ranch, Stonebridge Ranch, Adriatica, Tucker Hill & all McKinney neighborhoods';

/** Baker Brothers formula: [Keyword]: [Topic or Brand] */
export function seoTitle(topic: string): string {
  return `${primaryKeyword}: ${topic}`;
}

/** Baker Brothers formula: keyword + services + neighborhoods + phone */
export function seoDescription(services: string): string {
  return `${primaryKeyword} — ${services} in ${neighborhoods}. Call ${siteConfig.phoneDisplay} for same-day service!`;
}

interface BuildMetadataOptions {
  /** Page topic after the colon, e.g. "Plumbing Services" or business name for home */
  topic: string;
  /** Service-focused description body (inserted into seoDescription template) */
  services: string;
  /** URL path e.g. "/about" */
  path: string;
  /** Override full description if needed */
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/** Build complete page metadata with Open Graph + Twitter cards */
export function buildPageMetadata({
  topic,
  services,
  path,
  description,
  keywords,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const title = seoTitle(topic);
  const desc = description ?? seoDescription(services);
  const url = `${siteConfig.siteUrl.replace(/\/$/, '')}${path}`;

  return {
    title,
    description: desc,
    keywords: keywords ?? [...defaultKeywords],
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: siteConfig.businessName,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
    },
  };
}
