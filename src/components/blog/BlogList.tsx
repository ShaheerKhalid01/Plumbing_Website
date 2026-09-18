'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogCategories, type BlogPostMeta } from '@/lib/data/blog-posts';
import { primaryKeyword } from '@/lib/site-config';

interface Props {
  posts: BlogPostMeta[];
}

export default function BlogList({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Categories */}
      <section className="py-6 bg-slate-900 border-y border-slate-800 sticky top-20 z-30">
        <div className="container-max">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                    : 'border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No articles in this category yet.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                View all articles
              </button>
            </div>
          ) : (
            <>
              {featured.length > 0 && (
                <>
                  <h2 className="text-2xl font-black text-white mb-8">Featured Articles</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {featured.map((post) => (
                      <PostCard key={post.slug} post={post} featured />
                    ))}
                  </div>
                </>
              )}

              {rest.length > 0 && (
                <>
                  <h2 className="text-2xl font-black text-white mb-8">
                    {featured.length > 0 ? 'All Articles' : 'Articles'}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {rest.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function PostCard({ post, featured = false }: { post: BlogPostMeta; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group glass rounded-2xl overflow-hidden card-hover"
    >
        <div className="aspect-video overflow-hidden">
        <img
          src={post.imageUrl}
          alt={`${post.title} — ${primaryKeyword} | drain cleaning, emergency plumbing, slab leaks`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className={featured ? 'p-6' : 'p-5'}>
        <div className="flex items-center gap-3 mb-3">
          {featured ? (
            <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-medium">
              {post.category}
            </span>
          ) : (
            <>
              <Tag size={12} className="text-blue-400" />
              <span className="text-xs text-blue-400 font-medium">{post.category}</span>
            </>
          )}
          <span className={`text-slate-500 text-xs ${featured ? '' : 'ml-auto'}`}>
            {post.readTime}
          </span>
        </div>
        <h3
          className={`text-white font-bold leading-snug group-hover:text-blue-400 transition-colors ${featured ? 'text-lg mb-3' : 'text-sm mb-2'}`}
        >
          {post.title}
        </h3>
        <p
          className={`text-slate-400 leading-relaxed ${featured ? 'text-sm mb-4' : 'text-xs line-clamp-2 mb-0'}`}
        >
          {post.excerpt}
        </p>
        {featured && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <Calendar size={12} />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read more <ArrowRight size={14} />
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
