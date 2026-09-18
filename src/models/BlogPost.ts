import mongoose, { Schema, Document, Model } from 'mongoose';
import { BlogPost } from '@/types';

export interface IBlogDocument extends Omit<BlogPost, '_id'>, Document {}

const BlogPostSchema = new Schema<IBlogDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, maxlength: 300 },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true, default: 'McKinney Plumbing Team' },
    tags: [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
    featured: { type: Boolean, default: false },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

BlogPostSchema.index({ category: 1 });
BlogPostSchema.index({ publishedAt: -1 });

const BlogPostModel: Model<IBlogDocument> =
  mongoose.models.BlogPost ?? mongoose.model<IBlogDocument>('BlogPost', BlogPostSchema);

export default BlogPostModel;
