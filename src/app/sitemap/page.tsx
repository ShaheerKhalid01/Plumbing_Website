import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, telHref } from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  topic: 'HTML Sitemap',
  services:
    'complete site navigation for all McKinney plumbing pages, services, blog articles & contact resources',
  path: '/sitemap',
});

const siteMap = [
  {
    section: 'Main Pages',
    links: [
      { label: 'Home', href: '/', desc: 'Main homepage with all services overview' },
      { label: 'About Us', href: '/about', desc: 'Our story, team, and certifications' },
      { label: 'Services', href: '/services', desc: 'All plumbing services we offer' },
      { label: 'Plumber in McKinney, TX', href: '/mckinney-plumbing', desc: 'McKinney city landing page — all neighborhoods' },
      { label: 'Blog', href: '/blog', desc: 'Plumbing tips and expert articles' },
      { label: 'Privacy Policy', href: '/privacy-policy', desc: 'Our data privacy practices' },
      { label: 'HTML Sitemap', href: '/sitemap', desc: 'You are here' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Drain Cleaning', href: '/services#drain-cleaning', desc: 'Professional drain cleaning and hydro-jetting' },
      { label: 'Leak Repair & Detection', href: '/services#leak-repair', desc: 'Pipe, slab, and fixture leak services' },
      { label: 'Water Heater Services', href: '/services#water-heater', desc: 'Tank and tankless water heater installation' },
      { label: 'Pipe Repair & Repiping', href: '/services#pipe-repair', desc: 'Burst pipes and whole-house repiping' },
      { label: 'Sewer Line Services', href: '/services#sewer-line', desc: 'Sewer line inspection, repair, and replacement' },
      { label: 'Emergency Plumbing', href: '/services#emergency', desc: '24/7 emergency plumbing response' },
      { label: 'Bathroom Remodeling', href: '/services#bathroom', desc: 'Full bathroom plumbing for renovations' },
    ],
  },
  {
    section: 'Service Locations',
    links: [
      { label: 'Plumber in McKinney, TX', href: '/mckinney-plumbing', desc: 'Primary service area — Collin County' },
      { label: 'Plumber in Craig Ranch', href: '/mckinney-plumbing#neighborhoods', desc: 'Craig Ranch plumbing services' },
      { label: 'Plumber in Stonebridge Ranch', href: '/mckinney-plumbing', desc: 'Stonebridge Ranch plumbing' },
      { label: 'Plumber in Adriatica', href: '/mckinney-plumbing', desc: 'Adriatica slab leak & drain services' },
      { label: 'Plumber in Tucker Hill', href: '/mckinney-plumbing', desc: 'Tucker Hill fixture installation' },
    ],
  },
  {
    section: 'Blog Articles',
    links: [
      { label: '5 Signs Your Drains Need Cleaning', href: '/blog/5-signs-you-need-drain-cleaning', desc: 'Drain cleaning warning signs' },
      { label: 'Tankless vs. Tank Water Heater', href: '/blog/tankless-vs-tank-water-heater', desc: 'Water heater comparison guide' },
      { label: 'How to Prevent Slab Leaks', href: '/blog/how-to-prevent-slab-leaks', desc: 'Protect your North Texas home' },
      { label: 'Hard Water in McKinney, TX', href: '/blog/hard-water-effects-mckinney', desc: 'Effects of hard water on plumbing' },
      { label: 'When to Call an Emergency Plumber', href: '/blog/when-to-call-emergency-plumber', desc: '7 situations requiring immediate help' },
      { label: 'Bathroom Remodel Plumbing Guide', href: '/blog/bathroom-remodel-plumbing-guide', desc: 'Complete remodel plumbing guide' },
    ],
  },
  {
    section: 'Contact & Info',
    links: [
      { label: 'Contact Us', href: '/#contact', desc: 'Send us a message or request an estimate' },
      { label: 'Google Maps Listing', href: siteConfig.googleMapsUrl, desc: 'Find us on Google Maps' },
      { label: `Call ${siteConfig.phoneDisplay}`, href: telHref, desc: '24/7 emergency line' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="pt-28 section-padding bg-slate-950">
      <div className="container-max">
        <div className="section-badge mb-4">Site Navigation</div>
        <h1 className="text-4xl font-black text-white mb-4">HTML Sitemap</h1>
        <p className="text-slate-400 mb-12 max-w-xl">
          A complete list of all pages on the McKinney Plumbing & Drain Clean Services website for easy navigation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {siteMap.map((section) => (
            <div key={section.section} className="glass rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-5 pb-3 border-b border-slate-700/50">
                {section.section}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-2 hover:text-blue-400 transition-colors"
                      {...(link.href.startsWith('http') || link.href.startsWith('tel') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="text-blue-500 mt-0.5">→</span>
                      <div>
                        <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                          {link.label}
                        </div>
                        <div className="text-slate-500 text-xs">{link.desc}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
