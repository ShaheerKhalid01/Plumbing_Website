import { siteConfig, primaryKeyword } from '@/lib/site-config';

export default function LocalBusinessSchema() {
  const sameAs = [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.twitter].filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${siteConfig.siteUrl.replace(/\/+$/,'')}/#localBusiness`,
    name: siteConfig.businessName,
    image: `${siteConfig.siteUrl.replace(/\/+$/,'')}/og-image.jpg`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress || undefined,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.stateAbbr,
      postalCode: siteConfig.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.1972,
      longitude: -96.6388,
    },
    openingHours: ['Mo-Su 00:00-23:59'],
    sameAs: sameAs.length ? sameAs : undefined,
    areaServed: [
      'Craig Ranch',
      'Stonebridge Ranch',
      'Adriatica',
      'Tucker Hill',
      'Historic Downtown McKinney',
      'Collin County'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneDisplay,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
    description: `${primaryKeyword ?? 'Plumber in McKinney TX'} — 24/7 emergency plumbing, drain cleaning, slab leak repair, water filtration systems in Craig Ranch, Stonebridge Ranch, Adriatica, Tucker Hill & all McKinney neighborhoods. Call ${siteConfig.phoneDisplay} for same-day service!`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
