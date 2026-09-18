import { NextRequest, NextResponse } from 'next/server';
import { BlogRepository } from '@/lib/repositories/BlogRepository';
import { BlogService } from '@/lib/services/BlogService';

const repo = new BlogRepository();
const service = new BlogService(repo);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  try {
    if (slug) {
      const result = await service.getPostBySlug(slug);
      return NextResponse.json(result, { status: result.success ? 200 : 404 });
    }

    const result = await service.getAllPosts();
    return NextResponse.json(result);
  } catch (err) {
    console.error('[GET /api/blog]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
