// Centralized site configuration from environment variables

export const siteConfig = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? '2148567674',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '(214) 856-7674',
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME ?? 'McKinney Plumbing & Drain Clean Services',
  shortName: 'McKinney Plumbing',
  tagline: '& Drain Clean Services',
  city: process.env.NEXT_PUBLIC_CITY ?? 'McKinney',
  state: process.env.NEXT_PUBLIC_STATE ?? 'Texas',
  stateAbbr: process.env.NEXT_PUBLIC_STATE_ABBR ?? 'TX',
  zip: process.env.NEXT_PUBLIC_ZIP ?? '75070',
  streetAddress: process.env.NEXT_PUBLIC_STREET_ADDRESS ?? '',
  licenseNumber: process.env.NEXT_PUBLIC_LICENSE_NUMBER ?? '',
  hours: process.env.NEXT_PUBLIC_HOURS ?? 'Open 24/7 for Emergencies | Mon–Sat 7am–7pm',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  googleMapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? 'https://maps.app.goo.gl/hPNVkFRpk6cqnEsT6',
  googleMapsEmbed:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ??
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53457.13566617705!2d-96.69603247226563!3d33.19735000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19cae7a2e0b9%3A0xb4170f73ed5c8be4!2sMcKinney%2C%20TX!5e0!3m2!1sen!2sus!4v1694000000000!5m2!1sen!2sus',
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? '',
  },
} as const;

export const telHref = `tel:${siteConfig.phone}`;

export const fullAddress = siteConfig.streetAddress
  ? `${siteConfig.streetAddress}, ${siteConfig.city}, ${siteConfig.stateAbbr} ${siteConfig.zip}`
  : `${siteConfig.city}, ${siteConfig.stateAbbr} ${siteConfig.zip}`;

/** Primary local SEO keyword — Baker Brothers formula: [Service] in [City] [State] */
export const primaryKeyword = `Plumber in ${siteConfig.city} ${siteConfig.stateAbbr}`;

export const primaryKeywordPlural = `Plumbers ${siteConfig.city} ${siteConfig.stateAbbr}`;
