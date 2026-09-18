'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'David & Karen W.',
    location: 'McKinney, TX',
    rating: 5,
    text: 'We had a major sewer line backup on a Sunday morning. Called McKinney Plumbing and they were at our door in 45 minutes. Cleared the line and explained everything clearly. Best plumbing experience we\'ve ever had!',
    service: 'Sewer Line Repair',
    avatar: 'DK',
  },
  {
    id: 2,
    name: 'Priya S.',
    location: 'Frisco, TX',
    rating: 5,
    text: 'I was quoted $800 by another company for a leak repair. McKinney Plumbing came out, diagnosed the real issue, and fixed it for $220. Honest pricing and quality work. I tell everyone about them!',
    service: 'Leak Repair',
    avatar: 'PS',
  },
  {
    id: 3,
    name: 'Tom & Beth A.',
    location: 'Allen, TX',
    rating: 5,
    text: 'Had them repipe our entire house. It was a big job but they managed it perfectly. The crew was professional, kept the house clean, and finished ahead of schedule. Absolutely recommend!',
    service: 'Full Repiping',
    avatar: 'TB',
  },
  {
    id: 4,
    name: 'Carla M.',
    location: 'McKinney, TX',
    rating: 5,
    text: 'My water heater died on a cold winter morning. They installed a new tankless unit same day. The technician was friendly, fast, and explained how to operate it. Fantastic service!',
    service: 'Water Heater',
    avatar: 'CM',
  },
  {
    id: 5,
    name: 'Eric J.',
    location: 'Plano, TX',
    rating: 5,
    text: 'Kitchen drain backing up for weeks. Other companies said I needed major work. McKinney Plumbing hydro-jetted it and it\'s been perfect ever since. Saved me $2,000!',
    service: 'Drain Cleaning',
    avatar: 'EJ',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-badge">💬 Testimonials</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Real Stories From Real Customers
          </h2>
        </div>

        {/* Featured */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center relative">
            {/* Quote mark */}
            <div className="text-8xl text-blue-500/20 font-serif leading-none absolute top-6 left-8 select-none">&ldquo;</div>

            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-lg shadow-blue-500/30">
              {t.avatar}
            </div>

            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={18} className={i <= t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'} />
              ))}
            </div>

            <blockquote className="text-slate-200 text-lg leading-relaxed mb-6 italic relative z-10">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="text-white font-bold text-lg">{t.name}</div>
            <div className="text-slate-400 text-sm">{t.location}</div>
            <span className="inline-block mt-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              {t.service}
            </span>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} aria-label="Previous testimonial" className="w-10 h-10 rounded-full glass border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 transition-all">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-blue-500 w-6' : 'bg-slate-600 hover:bg-slate-500'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} aria-label="Next testimonial" className="w-10 h-10 rounded-full glass border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
