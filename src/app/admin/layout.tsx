import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...buildPageMetadata({
    topic: 'Admin',
    services: 'internal admin dashboard',
    path: '/admin',
    noIndex: true,
  }),
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-16">
      <div className="container-max px-4">{children}</div>
    </div>
  );
}
