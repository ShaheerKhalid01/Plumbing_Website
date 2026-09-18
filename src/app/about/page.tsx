import type { Metadata } from 'next';
import { Phone, Shield, Award, Users, CheckCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import { siteConfig, telHref, primaryKeyword } from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  topic: siteConfig.businessName,
  services:
    'licensed & insured plumbers, 24/7 emergency service, upfront pricing & trusted local plumbing experts',
  path: '/about',
});

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We are honest about what you need and what you don\'t. No upselling, no unnecessary repairs.' },
  { icon: Award, title: 'Excellence', desc: 'Every job, big or small, is completed to the highest standard of quality and craftsmanship.' },
  { icon: Heart, title: 'Community', desc: 'We are proud McKinney locals. We treat every customer like a neighbor — because they are.' },
  { icon: Users, title: 'Teamwork', desc: 'Our team of licensed plumbers works together to solve your problem fast and efficiently.' },
];

const stats = [
  { value: '500+', label: 'Jobs Completed' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Licensed & Insured' },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-max text-center">
          <div className="section-badge">About Us</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {primaryKeyword} — <span className="gradient-text">Trusted Plumbing Team</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We are McKinney Plumbing & Drain Clean Services — a locally owned and operated plumbing company
            dedicated to providing honest, reliable, and affordable plumbing solutions to homeowners and
            businesses throughout Collin County, Texas.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-slate-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-badge">Our Story</div>
              <h2 className="text-3xl font-black text-white mb-6">
                Built on Trust, Driven by Service
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  McKinney Plumbing & Drain Clean Services was founded with one simple mission: to provide
                  the McKinney community with honest, professional plumbing services at fair prices.
                </p>
                <p>
                  We know how stressful a plumbing problem can be — a burst pipe in the middle of the night,
                  a drain that won&apos;t clear, a water heater that stops working in winter. That&apos;s why we are
                  available 24 hours a day, 7 days a week, ready to respond fast.
                </p>
                <p>
                  Every plumber on our team is fully licensed by the Texas State Board of Plumbing Examiners,
                  background-checked, and committed to treating your home with the same care and respect
                  they would give their own.
                </p>
                <p>
                  We are proud to serve the McKinney community and the surrounding Collin County area. When
                  you call us, you are not just getting a plumber — you are getting a neighbor who genuinely
                  cares about making your day better.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href={telHref} className="btn-primary">
                  <Phone size={18} />
                  Call Us Today
                </a>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-5xl mb-3">🔧</div>
                <div className="text-white font-bold">Licensed Plumbers</div>
                <div className="text-slate-400 text-sm mt-1">TSBPE Certified</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center mt-6">
                <div className="text-5xl mb-3">⚡</div>
                <div className="text-white font-bold">Fast Response</div>
                <div className="text-slate-400 text-sm mt-1">Under 60 Minutes</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-5xl mb-3">💰</div>
                <div className="text-white font-bold">Fair Pricing</div>
                <div className="text-slate-400 text-sm mt-1">No Hidden Fees</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center mt-6">
                <div className="text-5xl mb-3">🛡️</div>
                <div className="text-white font-bold">Fully Insured</div>
                <div className="text-slate-400 text-sm mt-1">Your Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="section-badge">Our Values</div>
            <h2 className="text-3xl font-black text-white mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-slate-950">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-4">Certifications & Licenses</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Texas Master Plumber License', icon: '🏆' },
              { label: 'TSBPE Certified', icon: '📜' },
              { label: 'General Liability Insurance', icon: '🛡️' },
              { label: "Workers' Comp Coverage", icon: '✅' },
            ].map((cert) => (
              <div key={cert.label} className="glass rounded-xl p-4 text-center card-hover">
                <div className="text-3xl mb-2">{cert.icon}</div>
                <div className="text-white text-sm font-medium leading-snug">{cert.label}</div>
                <CheckCircle size={14} className="text-green-400 mx-auto mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-900/60 to-blue-800/40 border-y border-blue-700/30">
        <div className="container-max text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Call now for a free estimate or fill out our contact form and we&apos;ll reach out within 30 minutes.
          </p>
          <a href={telHref} className="btn-accent text-lg px-10 py-4">
            <Phone size={20} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
