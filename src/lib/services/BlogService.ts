import { IBlogRepository } from '@/lib/interfaces/IBlogRepository';
import { BlogPost, ApiResponse } from '@/types';

export class BlogService {
  constructor(private readonly repo: IBlogRepository) {}

  async getAllPosts(): Promise<ApiResponse<BlogPost[]>> {
    try {
      const data = await this.repo.findAll();
      return { success: true, data };
    } catch {
      return { success: false, error: 'Failed to fetch blog posts.' };
    }
  }

  async getPostBySlug(slug: string): Promise<ApiResponse<BlogPost>> {
    try {
      const data = await this.repo.findBySlug(slug);
      if (!data) return { success: false, error: 'Post not found.' };
      return { success: true, data };
    } catch {
      return { success: false, error: 'Failed to fetch post.' };
    }
  }

  async getFeaturedPosts(): Promise<ApiResponse<BlogPost[]>> {
    try {
      const data = await this.repo.findFeatured();
      return { success: true, data };
    } catch {
      return { success: false, error: 'Failed to fetch featured posts.' };
    }
  }
}
