import { Star, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Called at 11pm for a burst pipe and they arrived within the hour. Professional, fast, and the price was very fair. Highly recommend McKinney Plumbing!',
    date: '2 weeks ago',
    service: 'Emergency Plumbing',
  },
  {
    id: 2,
    name: 'James R.',
    rating: 5,
    text: 'Had a stubborn drain clog that two other companies couldn\'t fix. These guys cleared it completely with hydro-jetting. Amazing service!',
    date: '1 month ago',
    service: 'Drain Cleaning',
  },
  {
    id: 3,
    name: 'Linda T.',
    rating: 5,
    text: 'Replaced our 15-year-old water heater quickly and cleanly. Great price, no hidden fees. They cleaned up everything before leaving. 5 stars!',
    date: '3 weeks ago',
    service: 'Water Heater',
  },
  {
    id: 4,
    name: 'Mike D.',
    rating: 5,
    text: 'Very knowledgeable team. They found a hidden slab leak that saved us from major foundation damage. Cannot thank them enough.',
    date: '1 month ago',
    service: 'Leak Detection',
  },
  {
    id: 5,
    name: 'Angela K.',
    rating: 5,
    text: 'Used them for a full bathroom remodel plumbing. Everything was done perfectly, on time, and within budget. Will absolutely use again.',
    date: '2 months ago',
    service: 'Bathroom Remodel',
  },
  {
    id: 6,
    name: 'Robert P.',
    rating: 5,
    text: 'Honest, upfront pricing and excellent work on our sewer line. No surprises. This is the only plumber I will ever call in McKinney.',
    date: '3 months ago',
    service: 'Sewer Line',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className={i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'} />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section id="reviews" className="section-padding bg-slate-900/50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge">⭐ Google Reviews</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            What Our Customers Say
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-3xl font-black text-white">5.0</span>
            <span className="text-slate-400">/ Based on Google Reviews</span>
          </div>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            View all reviews on Google <ExternalLink size={14} />
          </a>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-slate-500 text-xs">{review.date}</div>
                  </div>
                </div>
                <div className="text-blue-400">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current opacity-60">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-3">&ldquo;{review.text}&rdquo;</p>
              <span className="text-xs text-blue-400/70 bg-blue-500/10 px-2 py-0.5 rounded-full">
                {review.service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
