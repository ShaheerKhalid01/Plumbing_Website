'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How quickly can you respond to a plumbing emergency in McKinney?',
    answer: 'We typically respond to emergency calls within 30–60 minutes anywhere in McKinney and the surrounding Collin County area. Our emergency line is available 24 hours a day, 7 days a week, 365 days a year — including holidays.',
  },
  {
    id: 2,
    question: 'Do you offer free estimates?',
    answer: 'Yes! We offer free phone consultations and estimates for most standard plumbing jobs. For complex issues like slab leaks or sewer line problems, we may need to do a diagnostic inspection first, which we will always discuss with you upfront before any charges.',
  },
  {
    id: 3,
    question: 'Are your plumbers licensed and insured in Texas?',
    answer: 'Absolutely. All of our plumbers hold valid Texas plumbing licenses issued by the Texas State Board of Plumbing Examiners (TSBPE). We are also fully insured with liability and workers\' compensation coverage to protect you and your property.',
  },
  {
    id: 4,
    question: 'What areas do you serve near McKinney, TX?',
    answer: 'We primarily serve McKinney and all of Collin County, including Frisco, Allen, Plano, Prosper, Celina, Anna, and surrounding communities. Call us to confirm service availability in your specific area.',
  },
  {
    id: 5,
    question: 'Can you fix a drain that other plumbers couldn\'t clear?',
    answer: 'Yes! We use professional-grade hydro-jetting equipment that cuts through even the toughest grease, root, and mineral buildup that standard snakes can\'t handle. We also use video camera inspection to pinpoint the exact location and cause of the blockage.',
  },
  {
    id: 6,
    question: 'How do I know if I have a slab leak?',
    answer: 'Common signs of a slab leak include an unexplained spike in your water bill, the sound of running water when all fixtures are off, warm spots on your floor, cracked tiles or flooring, or mold and mildew in unexpected areas. If you suspect a slab leak, call us immediately — they can cause serious structural damage.',
  },
  {
    id: 7,
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), checks, and digital payments including Venmo and Zelle. We also offer financing options for larger projects. Ask us about payment plans when you call.',
  },
  {
    id: 8,
    question: 'Do you provide a warranty on your plumbing work?',
    answer: 'Yes. All of our labor comes with a minimum 1-year warranty. Parts and fixtures carry the manufacturer\'s warranty, which can range from 1 to 10+ years depending on the brand. We stand behind our work completely.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-badge">❓ FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have questions about our plumbing services in McKinney, TX? Find answers below or call us anytime.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${open === faq.id ? 'border-blue-500/30' : 'border-slate-700/30'} border`}
            >
              <button
                id={`faq-${faq.id}`}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === faq.id}
              >
                <span className="text-white font-semibold text-base pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-blue-400 shrink-0 transition-transform duration-300 ${open === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              {open === faq.id && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-slate-700/50 mb-4" />
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
