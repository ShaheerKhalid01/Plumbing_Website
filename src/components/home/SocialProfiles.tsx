import { Facebook, Instagram, Twitter, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const profiles = [
  {
    name: 'Facebook',
    handle: '@McKinneyPlumbing',
    envKey: 'facebook' as const,
    icon: Facebook,
    color: 'from-blue-600 to-blue-700',
    bg: 'hover:border-blue-500/50',
    followers: '800+ Followers',
    description: 'Like our page for tips, promotions, and community updates.',
  },
  {
    name: 'Instagram',
    handle: '@mckinney.plumbing',
    envKey: 'instagram' as const,
    icon: Instagram,
    color: 'from-pink-500 via-rose-500 to-orange-400',
    bg: 'hover:border-pink-500/50',
    followers: '400+ Followers',
    description: 'Before & after transformations and behind-the-scenes content.',
  },
  {
    name: 'Twitter / X',
    handle: '@McKinneyPlumb',
    envKey: 'twitter' as const,
    icon: Twitter,
    color: 'from-slate-600 to-slate-800',
    bg: 'hover:border-slate-500/50',
    followers: '200+ Followers',
    description: 'Quick tips, local news, and plumbing advice.',
  },
  {
    name: 'Google Business',
    handle: 'McKinney Plumbing & Drain',
    envKey: null,
    href: siteConfig.googleMapsUrl,
    icon: MapPin,
    color: 'from-green-500 to-blue-500',
    bg: 'hover:border-green-500/50',
    followers: '5.0 ★ Rating',
    description: 'Find us on Google Maps and leave us a review!',
  },
];

export default function SocialProfiles() {
  return (
    <section id="social" className="section-padding bg-slate-900/60">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-badge">📱 Follow Us</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Connect With Us Online
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Stay connected for plumbing tips, special offers, and updates from your local McKinney plumbers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            const href =
              profile.envKey === null
                ? profile.href!
                : siteConfig.social[profile.envKey] || null;

            const inner = (
              <>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-bold">{profile.name}</h3>
                  {href && (
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                  )}
                </div>
                <div className="text-blue-400 text-sm font-medium mb-2">{profile.handle}</div>
                <div className="text-slate-500 text-xs mb-3">{profile.followers}</div>
                <p className="text-slate-400 text-sm leading-relaxed mt-auto">{profile.description}</p>
                {!href && profile.envKey && (
                  <p className="text-slate-500 text-xs mt-2 italic">Link coming soon</p>
                )}
              </>
            );

            if (href) {
              return (
                <a
                  key={profile.name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group glass rounded-2xl p-6 border border-slate-700/50 ${profile.bg} card-hover flex flex-col`}
                >
                  {inner}
                </a>
              );
            }

            return (
              <div
                key={profile.name}
                className={`group glass rounded-2xl p-6 border border-slate-700/50 ${profile.bg} flex flex-col opacity-90`}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
