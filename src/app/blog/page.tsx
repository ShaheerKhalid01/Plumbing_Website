import type { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';
import { primaryKeyword } from '@/lib/site-config';
import { blogPosts } from '@/lib/data/blog-posts';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  topic: 'Plumbing Tips & Blog',
  services:
    'expert plumbing tips, drain cleaning advice, slab leak prevention, water heater guides & emergency plumbing help',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="pt-28">
      <section className="section-padding gradient-hero">
        <div className="container-max text-center">
          <div className="section-badge">📝 Blog & Tips</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {primaryKeyword} — Plumbing Tips & <span className="gradient-text">Expert Advice</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Straight-talk plumbing advice from McKinney&apos;s most trusted plumbers. No fluff, just helpful tips.
          </p>
        </div>
      </section>

      <BlogList posts={blogPosts} />
    </div>
  );
}
