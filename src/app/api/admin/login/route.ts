import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, getAdminPassword } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  const adminPassword = getAdminPassword();

  if (!adminPassword) {
    return NextResponse.json(
      { success: false, error: 'Admin access is not configured. Set ADMIN_PASSWORD in .env.local' },
      { status: 503 }
    );
  }

  const { password } = await req.json();

  if (password !== adminPassword) {
    return NextResponse.json({ success: false, error: 'Invalid password.' }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, adminPassword, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
