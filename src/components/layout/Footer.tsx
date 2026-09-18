import Link from 'next/link';
import { Phone, MapPin, Droplets, Facebook, Instagram, Twitter, Star } from 'lucide-react';
import { siteConfig, telHref } from '@/lib/site-config';

const services = [
  'Drain Cleaning', 'Leak Repair', 'Water Heater', 'Pipe Repair',
  'Sewer Line', 'Emergency Plumbing', 'Bathroom Remodel',
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'McKinney Plumbing', href: '/mckinney-plumbing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  ].filter((s) => s.href);

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Droplets size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold leading-tight">{siteConfig.shortName}</div>
                <div className="text-blue-400 text-xs">{siteConfig.tagline}</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted plumbing experts in {siteConfig.city}, {siteConfig.state}. Serving Collin County with
              fast, reliable, and affordable plumbing solutions since day one.
            </p>
            <div className="flex items-center gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-slate-400 text-sm ml-1">5.0 — Google Rated</span>
            </div>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-slate-400 text-xs mb-0.5">Phone</div>
                  <a href={telHref} className="text-white font-semibold hover:text-blue-400 transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-slate-400 text-xs mb-0.5">Service Area</div>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.city}, TX & Collin County
                  </a>
                </div>
              </div>
              <div className="glass-light rounded-xl p-4 mt-4">
                <div className="text-orange-400 font-bold text-sm mb-1">🚨 24/7 Emergency</div>
                <a href={telHref} className="text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
                <div className="text-slate-400 text-xs mt-1">Available around the clock</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <span>© {year} {siteConfig.businessName}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
