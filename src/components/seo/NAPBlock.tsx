import { MapPin, Phone, Clock, Shield } from 'lucide-react';
import { siteConfig, telHref, fullAddress } from '@/lib/site-config';

export default function NAPBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`glass rounded-2xl ${compact ? 'p-5' : 'p-8'}`}>
      <h2 className="text-white font-bold text-lg mb-4">
        Your Trusted Plumber in {siteConfig.city}, {siteConfig.stateAbbr}
      </h2>
      <div className="space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-blue-400 mt-0.5 shrink-0" />
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Address</div>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-blue-400 transition-colors"
            >
              {fullAddress}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={18} className="text-blue-400 mt-0.5 shrink-0" />
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Phone</div>
            <a href={telHref} className="text-white font-bold text-xl hover:text-blue-400 transition-colors">
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={18} className="text-blue-400 mt-0.5 shrink-0" />
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">Hours</div>
            <div className="text-slate-300">{siteConfig.hours}</div>
          </div>
        </div>
        {siteConfig.licenseNumber && (
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-blue-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wide mb-0.5">License</div>
              <div className="text-slate-300">{siteConfig.licenseNumber}</div>
            </div>
          </div>
        )}
      </div>
      <a href={telHref} className="btn-accent w-full justify-center mt-6">
        <Phone size={18} />
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
