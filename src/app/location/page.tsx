import { redirect } from 'next/navigation';

// Redirect old /location URL to SEO-optimized /mckinney-plumbing (Baker Brothers URL pattern)
export default function LocationPage() {
  redirect('/mckinney-plumbing');
}
