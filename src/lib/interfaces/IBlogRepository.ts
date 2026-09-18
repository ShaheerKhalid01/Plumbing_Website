// ─── IBlogRepository — Interface Segregation (SOLID: I) ───────────────────────
// Separate interface for blog data access, keeping concerns segregated.

import { BlogPost } from '@/types';

export interface IBlogRepository {
  findAll(): Promise<BlogPost[]>;
  findBySlug(slug: string): Promise<BlogPost | null>;
  findFeatured(): Promise<BlogPost[]>;
  findByCategory(category: string): Promise<BlogPost[]>;
  create(post: Omit<BlogPost, '_id'>): Promise<BlogPost>;
}
