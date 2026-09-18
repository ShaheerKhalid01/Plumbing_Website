import { Phone, Shield, Clock, Star } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';
import { siteConfig, telHref, primaryKeywordPlural } from '@/lib/site-config';

const trustBadges = [
  { icon: Clock, label: '24/7 Emergency' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: Phone, label: 'Free Estimates' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headlines */}
          <div className="animate-fade-up">
            <div className="section-badge">📍 {siteConfig.city}, {siteConfig.state}</div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              {primaryKeywordPlural}:{' '}
              <span className="gradient-text">{siteConfig.shortName}</span>{' '}
              {siteConfig.tagline}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Fast, reliable, and affordable plumbing services for McKinney homeowners and businesses.
              Available 24/7 for all your emergency plumbing and drain cleaning needs.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="glass rounded-xl p-3 flex flex-col items-center gap-1.5 text-center">
                  <Icon size={20} className="text-blue-400" />
                  <span className="text-xs text-slate-300 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={telHref} id="hero-call-btn" className="btn-accent text-base py-4 px-8">
                <Phone size={20} />
                {siteConfig.phoneDisplay}
              </a>
              <a href="#services" className="btn-secondary text-base py-4 px-8">
                View All Services →
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/50 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Get a Free Estimate</h2>
              <p className="text-slate-400 text-sm">We typically respond within 30 minutes!</p>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
