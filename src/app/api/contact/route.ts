import { NextRequest, NextResponse } from 'next/server';
import { ContactRepository } from '@/lib/repositories/ContactRepository';
import { ContactService } from '@/lib/services/ContactService';
import { ContactFormData } from '@/types';

// ─── Dependency Injection (SOLID: D) ─────────────────────────────────────────
const repo = new ContactRepository();
const service = new ContactService(repo);

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Basic field validation
    if (!body.name || !body.phone || !body.service || !body.message) {
      return NextResponse.json({ success: false, error: 'All required fields must be filled.' }, { status: 400 });
    }

    const result = await service.submitContact(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 422 });
    }

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error('[POST /api/contact]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const apiKey = process.env.CONTACT_API_KEY;
  const authHeader = req.headers.get('authorization');

  if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const result = await service.getSubmissions();
    return NextResponse.json(result);
  } catch (err) {
    console.error('[GET /api/contact]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
