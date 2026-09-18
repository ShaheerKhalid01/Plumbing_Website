import ContactForm from '@/components/shared/ContactForm';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { siteConfig, telHref } from '@/lib/site-config';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phoneDisplay,
    href: telHref,
    sub: 'Call or text anytime',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '24/7 Emergency Service',
    href: null,
    sub: 'Office: Mon–Sat 7am–7pm',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: `${siteConfig.city}, TX & Collin County`,
    href: siteConfig.googleMapsUrl,
    sub: 'Serving DFW North Suburbs',
  },
  {
    icon: Mail,
    label: 'Online',
    value: 'Submit the form below',
    href: null,
    sub: 'We reply within 30 minutes',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-badge">📞 Contact Us</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Get In Touch Today
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready to schedule service or have a question? Contact us now — we&apos;re here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
              <div key={label} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-blue-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-white font-semibold">{value}</div>
                  )}
                  <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/20 p-6 text-center">
              <div className="text-2xl mb-2">🚨</div>
              <div className="text-white font-bold text-lg mb-1">Plumbing Emergency?</div>
              <div className="text-slate-300 text-sm mb-4">Don&apos;t wait — call us right now!</div>
              <a href={telHref} className="btn-accent w-full justify-center">
                <Phone size={18} />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 glass rounded-2xl p-7 sm:p-8">
            <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
