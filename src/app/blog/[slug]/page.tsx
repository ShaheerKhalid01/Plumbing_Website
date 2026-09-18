import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import { getPostBySlug, getAllSlugs } from '@/lib/data/blog-posts';
import { markdownToHtml } from '@/lib/markdown';
import { siteConfig, telHref, primaryKeyword } from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      topic: 'Blog Post',
      services: 'expert plumbing tips and advice for McKinney homeowners',
      path: `/blog/${slug}`,
    });
  }

  return buildPageMetadata({
    topic: post.title,
    services: `${post.category.toLowerCase()} tips and expert plumbing advice`,
    path: `/blog/${slug}`,
    description: `${primaryKeyword} — ${post.excerpt} Call ${siteConfig.phoneDisplay} for professional help in McKinney, TX.`,
    keywords: ['plumber McKinney TX', post.category, post.slug.replace(/-/g, ' ')],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-36 section-padding text-center">
        <div className="text-6xl mb-6">📄</div>
        <h1 className="text-3xl font-black text-white mb-4">Article Not Found</h1>
        <p className="text-slate-400 mb-8">This article may have been moved or doesn&apos;t exist.</p>
        <Link href="/blog" className="btn-primary">← Back to Blog</Link>
      </div>
    );
  }

  const htmlContent = markdownToHtml(post.content);

  return (
    <div className="pt-28">
      <div className="section-padding bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="section-badge mb-4">{post.category}</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-slate-400 text-sm mb-10 pb-8 border-b border-slate-700/50">
            <span>{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />

          <div className="mt-12 glass rounded-2xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Need Plumbing Help in McKinney?</h3>
            <p className="text-slate-400 mb-6">Call or text us anytime — we respond fast!</p>
            <a href={telHref} className="btn-accent text-base px-8 py-4">
              <Phone size={18} /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
