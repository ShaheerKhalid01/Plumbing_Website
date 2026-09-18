import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'admin_session';

export function getAdminPassword(): string | undefined {
  return process.env.ADMIN_PASSWORD;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const password = getAdminPassword();
  if (!password) return false;

  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE);
  return session?.value === password;
}
