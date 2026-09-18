import { MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function GoogleMap() {
  return (
    <section id="map" className="section-padding bg-slate-900/50">
      <div className="container-max">
        <div className="text-center mb-10">
          <div className="section-badge">📍 Find Us</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Serving McKinney & Collin County
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Based in McKinney, Texas — we serve the entire DFW North area including Frisco, Allen, Plano, Prosper, and beyond.
          </p>
        </div>

        <div className="glass rounded-3xl overflow-hidden border border-blue-500/10 shadow-2xl shadow-blue-950/50">
          {/* Map info bar */}
          <div className="bg-slate-800/80 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <MapPin size={16} className="text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{siteConfig.businessName}</div>
                <div className="text-slate-400 text-xs">{siteConfig.city}, {siteConfig.state} — Collin County</div>
              </div>
            </div>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors shrink-0"
            >
              Open in Google Maps <ExternalLink size={14} />
            </a>
          </div>

          {/* Map iframe */}
          <div className="relative w-full" style={{ paddingBottom: '45%', minHeight: '320px' }}>
            <iframe
              title="McKinney Plumbing Location — McKinney, Texas"
              src={siteConfig.googleMapsEmbed}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['McKinney', 'Frisco', 'Allen', 'Plano', 'Prosper', 'Celina', 'Anna', 'Murphy', 'Wylie', 'Fairview'].map((city) => (
            <span key={city} className="px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm hover:border-blue-500/40 hover:text-blue-300 transition-colors">
              {city}, TX
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
