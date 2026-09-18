import { videos } from '@/lib/data/videos';
import { primaryKeyword } from '@/lib/site-config';

export default function VideoSection() {
  return (
    <section id="videos" className="section-padding bg-slate-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-badge">📹 Watch & Learn</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            See Our Experts in Action
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Watch our licensed plumbers tackle real jobs in McKinney, Texas. Transparent service you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group glass rounded-2xl overflow-hidden card-hover">
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  title={`${video.title} — placeholder ${primaryKeyword}`}
                  className="w-full h-full"
                  srcDoc={`<style>body{margin:0;background:#0f1724;color:#cbd5e1;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif}h3{margin:0 0 6px 0;font-size:18px}p{margin:0;font-size:13px}</style><div style="text-align:center;padding:20px"><h3>Video coming soon</h3><p>Placeholder only — no external YouTube embeds</p></div>`}
                />
                <span className="absolute bottom-3 right-3 bg-slate-950/80 text-white text-xs px-2 py-0.5 rounded-md">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
