import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { siteConfig, telHref, primaryKeyword } from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  topic: 'Plumbing Services',
  services:
    'drain cleaning, leak repair, water heater installation, pipe repair, sewer line, emergency plumbing & bathroom remodeling',
  path: '/services',
});

const services = [
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    icon: '🌊',
    description: 'Clogged drains are one of the most common plumbing issues in McKinney homes. We use professional hydro-jetting and motorized drain snaking to completely clear blockages — not just push them further down the line.',
    features: [
      'Kitchen and bathroom drain cleaning',
      'Hydro-jetting for severe clogs',
      'Video camera inspection',
      'Root intrusion removal',
      'Preventive maintenance plans',
    ],
  },
  {
    id: 'leak-repair',
    title: 'Leak Repair & Detection',
    icon: '🔧',
    description: 'Hidden leaks can cause thousands of dollars in damage. Our leak detection specialists use advanced acoustic equipment and thermal imaging to locate leaks behind walls, under slabs, and underground.',
    features: [
      'Pipe leak repair',
      'Slab leak detection & repair',
      'Fixture leak repair',
      'Water line leak repair',
      'Emergency leak response',
    ],
  },
  {
    id: 'water-heater',
    title: 'Water Heater Services',
    icon: '🔥',
    description: 'No hot water? We service, repair, and install all major brands of tank and tankless water heaters. Same-day installation available in most cases.',
    features: [
      'Tank water heater installation',
      'Tankless water heater installation',
      'Water heater repair',
      'Anode rod replacement',
      'Flushing & maintenance',
    ],
  },
  {
    id: 'pipe-repair',
    title: 'Pipe Repair & Repiping',
    icon: '🪛',
    description: 'From a single broken pipe to a complete whole-house repipe, our team handles it all. We work with copper, PEX, CPVC, and other modern piping materials.',
    features: [
      'Burst pipe repair',
      'Corroded pipe replacement',
      'Whole-house repiping',
      'PEX repiping',
      'Pipe insulation',
    ],
  },
  {
    id: 'sewer-line',
    title: 'Sewer Line Services',
    icon: '🏗️',
    description: 'Sewer line problems can affect your entire home. We offer video sewer inspections, hydro-jetting, traditional and trenchless sewer line repair and replacement.',
    features: [
      'Video sewer inspection',
      'Sewer line cleaning',
      'Trenchless sewer repair',
      'Sewer line replacement',
      'Root removal',
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    icon: '🚨',
    description: '24/7 emergency plumbing response for McKinney and Collin County. Burst pipes, sewage backups, major leaks — we dispatch immediately, any time of day or night.',
    features: [
      '24/7 availability',
      'Fast response (< 60 min)',
      'Burst pipe repair',
      'Sewage backup cleanup',
      'Flood shutoff assistance',
    ],
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    icon: '🛁',
    description: 'Planning a bathroom upgrade? Our plumbers handle all the rough-in and finish plumbing for bathroom remodels — toilet, tub, shower, sink, and more.',
    features: [
      'Toilet installation',
      'Tub & shower installation',
      'Vanity & sink installation',
      'Rough-in plumbing',
      'Fixture upgrades',
    ],
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance',
    icon: '🛡️',
    description: 'Protect your home from costly plumbing failures with our preventive maintenance program. Annual inspections, water heater flushing, and more.',
    features: [
      'Annual plumbing inspection',
      'Water heater service',
      'Drain cleaning tune-up',
      'Pressure testing',
      'Shutoff valve check',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-max text-center">
          <div className="section-badge">Our Services</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {primaryKeyword} — <span className="gradient-text">Complete Plumbing Services</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            From drain cleaning to full bathroom remodels — your local McKinney plumbing team handles it all.
            Licensed, insured, and available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={telHref} className="btn-accent text-lg px-8 py-4">
              <Phone size={20} /> {siteConfig.phoneDisplay}
            </a>
            <Link href="/#contact" className="btn-secondary text-lg px-8 py-4">Free Estimate</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-slate-950">
        <div className="container-max">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`glass rounded-3xl p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-black text-white mb-4">{service.title}</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                  <a href={telHref} className="btn-primary">
                    <Phone size={16} /> Call for Service
                  </a>
                </div>
                <div className={`glass-light rounded-2xl p-6 ${idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                        <span className="text-green-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-900/60 to-blue-800/40 border-y border-blue-700/30">
        <div className="container-max text-center">
          <h2 className="text-3xl font-black text-white mb-4">Don&apos;t See Your Service?</h2>
          <p className="text-slate-300 mb-8">Call us — we handle almost every residential and commercial plumbing need.</p>
          <a href={telHref} className="btn-accent text-lg px-10 py-4">
            <Phone size={20} /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
