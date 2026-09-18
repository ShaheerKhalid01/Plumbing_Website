import { NextRequest, NextResponse } from 'next/server';
import { ContactRepository } from '@/lib/repositories/ContactRepository';
import { ContactService } from '@/lib/services/ContactService';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { ContactSubmission } from '@/types';

const repo = new ContactRepository();
const service = new ContactService(repo);

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const result = await service.getSubmissions();
    return NextResponse.json(result);
  } catch (err) {
    console.error('[GET /api/admin/contacts]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const { id, status } = (await req.json()) as { id: string; status: ContactSubmission['status'] };

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and status are required.' }, { status: 400 });
    }

    const updated = await repo.updateStatus(id, status);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Submission not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    console.error('[PATCH /api/admin/contacts]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
