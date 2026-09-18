import Link from 'next/link';
import { Waves, Wrench, Flame, Cable, Shovel, Zap, Bath, Phone } from 'lucide-react';

const services = [
  {
    icon: Waves,
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning for slow or clogged drains using hydro-jetting and snaking.',
    href: '/services#drain-cleaning',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Leak Repair',
    description: 'Fast leak detection and repair for pipes, fixtures, and connections — no mess left behind.',
    href: '/services#leak-repair',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Flame,
    title: 'Water Heater',
    description: 'Installation, repair, and replacement of tank and tankless water heaters.',
    href: '/services#water-heater',
    color: 'from-orange-500 to-orange-400',
  },
  {
    icon: Cable,
    title: 'Pipe Repair',
    description: 'Burst pipes, corroded pipes, and repiping services for all home types.',
    href: '/services#pipe-repair',
    color: 'from-blue-700 to-blue-500',
  },
  {
    icon: Shovel,
    title: 'Sewer Line',
    description: 'Complete sewer line inspection, repair, and replacement using trenchless technology.',
    href: '/services#sewer-line',
    color: 'from-slate-600 to-slate-500',
  },
  {
    icon: Zap,
    title: 'Emergency Plumbing',
    description: '24/7 emergency plumbing response — we arrive fast when you need it most.',
    href: '/services#emergency',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Bath,
    title: 'Bathroom Remodel',
    description: 'Complete bathroom plumbing for remodels — fixture installation and rough-in work.',
    href: '/services#bathroom',
    color: 'from-purple-600 to-blue-500',
  },
  {
    icon: Phone,
    title: 'Free Consultation',
    description: 'Not sure what you need? Call us for a free phone consultation and diagnosis.',
    href: '/#contact',
    color: 'from-green-500 to-cyan-500',
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="section-padding bg-slate-950">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge">Our Services</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Complete Plumbing Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From routine maintenance to emergency repairs — McKinney Plumbing has you covered
            with expert service at honest prices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group glass rounded-2xl p-6 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4 text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Learn more →
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary text-base px-8 py-4">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
