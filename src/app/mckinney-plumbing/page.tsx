import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import {
  siteConfig,
  telHref,
  primaryKeyword,
  primaryKeywordPlural,
  fullAddress,
} from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';
import { mckinneyNeighborhoods, collinsCountyCities } from '@/lib/data/mckinney-neighborhoods';
import { mckinneyServiceSections } from '@/lib/data/mckinney-services-seo';
import NAPBlock from '@/components/seo/NAPBlock';
import ContactForm from '@/components/shared/ContactForm';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = buildPageMetadata({
  topic: siteConfig.businessName,
  services:
    '24/7 emergency plumbing, drain cleaning, hydro-jetting, slab leak repair, water heaters & sewer line service',
  path: '/mckinney-plumbing',
});

const serviceList = [
  'Emergency Plumbing', 'Drain Cleaning', 'Hydro-Jetting', 'Slab Leak Repair',
  'Water Heater Repair', 'Water Heater Installation', 'Sewer Line Repair',
  'Trenchless Sewer Repair', 'Leak Detection', 'Pipe Repair', 'Repiping',
  'Bathroom Remodel Plumbing', 'Toilet Repair', 'Fixture Installation',
];

export default function McKinneyPlumbingPage() {
  return (
    <>
      <LocalBusinessSchema />

      <div className="pt-28">
        {/* Hero — Baker Brothers formula: H1 = Plumbers [City] [State]: [Brand] */}
        <section className="section-padding gradient-hero">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Licensed & Insured', 'Background Checked', '24/7 Emergency'].map((badge) => (
                    <span key={badge} className="section-badge">{badge}</span>
                  ))}
                </div>

                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white leading-tight mb-6">
                  {primaryKeywordPlural}:{' '}
                  <span className="gradient-text">{siteConfig.businessName}</span>
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Local McKinney plumbing experts with your best interests in mind.
                  Same-day service available on most calls. Upfront pricing before we start — no surprises.
                </p>

                <a href={telHref} className="btn-accent text-lg px-8 py-4 inline-flex mb-8">
                  <Phone size={20} />
                  {siteConfig.phoneDisplay}
                </a>

                <NAPBlock compact />
              </div>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-1">Get a Free Estimate</h2>
                <p className="text-slate-400 text-sm mb-6">We respond within 30 minutes!</p>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </section>

        {/* Local story — Baker Brothers case study pattern */}
        <section className="section-padding bg-slate-950">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-6">
              Hassle-Free Plumbing Service in McKinney, TX
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Last month, we got a call from a homeowner in <strong className="text-white">Craig Ranch</strong> whose
                water heater started making loud banging sounds. By the time our team arrived, water was pooling in the
                garage. The family had no hot water and kids getting ready for school. We had a new unit installed by
                lunchtime.
              </p>
              <p>
                That&apos;s what we do at {siteConfig.businessName}. We solve plumbing problems that can&apos;t wait.
                We work in homes across <strong className="text-white">Stonebridge Ranch, Adriatica, Eldorado,
                Tucker Hill, Trinity Falls,</strong> and Historic Downtown McKinney. We help homeowners near
                State Highway 121 and throughout North Collin County who need reliable McKinney plumbing services.
              </p>
              <p>
                We show up on time. We explain what&apos;s wrong in plain English. We fix it right the first time.
                We don&apos;t upsell. We treat your home the way we&apos;d treat our own. Whether you&apos;re dealing
                with a burst pipe, a water heater failure, or a backed-up drain — one call to{' '}
                <a href={telHref} className="text-blue-400 hover:text-blue-300">{siteConfig.phoneDisplay}</a>{' '}
                handles it all.
              </p>
            </div>
          </div>
        </section>

        {/* Service H2 sections — long-form topical authority */}
        <section className="section-padding bg-slate-900/50">
          <div className="container-max max-w-4xl">
            {mckinneyServiceSections.map((section) => (
              <article key={section.id} id={section.id} className="mb-14 last:mb-0">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">{section.title}</h2>
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed mb-4">{paragraph}</p>
                ))}
                <a href={telHref} className="btn-primary text-sm mt-2">
                  <Phone size={16} />
                  Call for {section.title.split(' in ')[0]}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Neighborhood targeting */}
        <section id="neighborhoods" className="section-padding bg-slate-950">
          <div className="container-max">
            <div className="text-center mb-12">
              <div className="section-badge">McKinney Neighborhoods</div>
              <h2 className="text-3xl font-black text-white mb-4">
                Plumber Serving Every McKinney Community
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Hyper-local plumbing service throughout McKinney, TX — from Craig Ranch to Historic Downtown.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mckinneyNeighborhoods.map((n) => (
                <div key={n.name} className="glass rounded-xl p-5 card-hover">
                  <h3 className="text-white font-bold mb-1">Plumber in {n.name}</h3>
                  <p className="text-slate-400 text-sm">{n.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service list + Collin County */}
        <section className="section-padding bg-slate-900/50">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black text-white mb-6">
                  Plumbing Services in {siteConfig.city}, {siteConfig.stateAbbr}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceList.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle size={14} className="text-green-400 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white mb-6">
                  Also Serving Collin County
                </h2>
                <div className="flex flex-wrap gap-2">
                  {collinsCountyCities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm"
                    >
                      Plumber in {city}, TX
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm mt-6 leading-relaxed">
                  Leaks, water heaters, drain clogs, and sewer lines — our licensed plumbers handle it all
                  across McKinney. Same-day service on most calls. Upfront pricing before we start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map + NAP */}
        <section className="section-padding bg-slate-950">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="glass rounded-2xl overflow-hidden">
                <iframe
                  title={`Plumber in ${siteConfig.city}, ${siteConfig.stateAbbr}`}
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="360"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <NAPBlock />
            </div>
            <p className="text-slate-500 text-sm text-center mt-8">
              For your trusted plumber in {siteConfig.city} {siteConfig.stateAbbr}: {fullAddress}
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-gradient-to-r from-blue-900/60 to-blue-800/40 border-y border-blue-700/30">
          <div className="container-max text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Need a {primaryKeyword} Now?
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Don&apos;t let plumbing problems disrupt your day. Call now for same-day plumbing
              services throughout McKinney. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={telHref} className="btn-accent text-lg px-10 py-4">
                <Phone size={20} />
                {siteConfig.phoneDisplay}
              </a>
              <Link href="/#contact" className="btn-secondary text-lg px-10 py-4">
                Free Estimate Online
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
