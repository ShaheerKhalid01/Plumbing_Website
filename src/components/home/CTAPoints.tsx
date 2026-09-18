import { Shield, Clock, DollarSign, ThumbsUp, Award, Phone, Wrench, MapPin } from 'lucide-react';
import { siteConfig, telHref } from '@/lib/site-config';

const points = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Plumbing emergencies don\'t wait for business hours. We\'re on call around the clock, 365 days a year.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No hidden fees. No surprise charges. You get a clear estimate before any work begins.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'All our plumbers are fully licensed, background-checked, and insured for your protection.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Award,
    title: '5-Star Reputation',
    description: 'Hundreds of 5-star Google reviews from satisfied McKinney homeowners and businesses.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Wrench,
    title: 'Latest Technology',
    description: 'We use hydro-jetting, video inspection cameras, and trenchless techniques for superior results.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every job. If you\'re not satisfied, we make it right — no questions asked.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: MapPin,
    title: 'Local Experts',
    description: 'We live and work in McKinney. We know the local plumbing systems, soil, and infrastructure.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Phone,
    title: 'Fast Response',
    description: 'Most calls are answered within minutes. Emergency dispatch is typically under 60 minutes.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
  },
];

export default function CTAPoints() {
  return (
    <section id="why-us" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-badge">✅ Why Choose Us</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            The McKinney Plumbing Difference
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just fix pipes — we earn your trust with every visit.
            Here&apos;s why thousands of McKinney homeowners choose us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="glass rounded-2xl p-6 card-hover">
                <div className={`w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={point.color} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900/60 to-blue-800/40 border border-blue-700/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-black mb-2">Ready to Get Started?</h3>
            <p className="text-slate-300">Call now for a free estimate — same-day service available.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={telHref} className="btn-accent text-base px-8 py-4">
              <Phone size={18} />
              {siteConfig.phoneDisplay}
            </a>
            <a href="#contact" className="btn-secondary text-base px-8 py-4">
              Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
