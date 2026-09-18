import { IBlogRepository } from '@/lib/interfaces/IBlogRepository';
import { BlogPost } from '@/types';
import BlogPostModel from '@/models/BlogPost';
import { connectDB } from '@/lib/db/mongodb';

export class BlogRepository implements IBlogRepository {
  async findAll(): Promise<BlogPost[]> {
    await connectDB();
    const docs = await BlogPostModel.find().sort({ publishedAt: -1 }).lean();
    return docs as unknown as BlogPost[];
  }

  async findBySlug(slug: string): Promise<BlogPost | null> {
    await connectDB();
    const doc = await BlogPostModel.findOne({ slug }).lean();
    return doc ? (doc as unknown as BlogPost) : null;
  }

  async findFeatured(): Promise<BlogPost[]> {
    await connectDB();
    const docs = await BlogPostModel.find({ featured: true }).sort({ publishedAt: -1 }).limit(3).lean();
    return docs as unknown as BlogPost[];
  }

  async findByCategory(category: string): Promise<BlogPost[]> {
    await connectDB();
    const docs = await BlogPostModel.find({ category }).sort({ publishedAt: -1 }).lean();
    return docs as unknown as BlogPost[];
  }

  async create(post: Omit<BlogPost, '_id'>): Promise<BlogPost> {
    await connectDB();
    const doc = await BlogPostModel.create(post);
    return doc.toObject() as unknown as BlogPost;
  }
}
