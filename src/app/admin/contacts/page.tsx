'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, Mail, RefreshCw, LogOut, Loader2, Inbox } from 'lucide-react';
import { ContactSubmission } from '@/types';

const statusColors: Record<ContactSubmission['status'], string> = {
  new: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  contacted: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  closed: 'bg-green-500/20 text-green-300 border-green-500/30',
};

export default function AdminContactsPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/contacts');
      if (res.status === 401) {
        router.push('/admin');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data ?? []);
      } else {
        setError(data.error ?? 'Failed to load submissions.');
      }
    } catch {
      setError('Network error.');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const updateStatus = async (id: string, status: ContactSubmission['status']) => {
    const res = await fetch('/api/admin/contacts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) fetchSubmissions();
  };

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin');
  };

  const formatDate = (date: Date | string) =>
    new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white mb-1">Contact Submissions</h1>
          <p className="text-slate-400 text-sm">{submissions.length} total submissions</p>
        </div>
        <div className="flex gap-3">
          <button onClick={fetchSubmissions} className="btn-secondary text-sm py-2.5">
            <RefreshCw size={16} /> Refresh
          </button>
          <button onClick={logout} className="btn-secondary text-sm py-2.5">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-slate-400">
          <Loader2 size={24} className="animate-spin mr-2" /> Loading submissions...
        </div>
      ) : error ? (
        <div className="glass rounded-2xl p-8 text-center text-red-400">{error}</div>
      ) : submissions.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center">
          <Inbox size={48} className="text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">No contact submissions yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div key={String(sub._id)} className="glass rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-white font-bold text-lg">{sub.name}</h2>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium capitalize ${statusColors[sub.status]}`}>
                      {sub.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs">{formatDate(sub.createdAt)}</p>
                </div>
                <select
                  value={sub.status}
                  onChange={(e) => updateStatus(String(sub._id), e.target.value as ContactSubmission['status'])}
                  className="input-field w-auto text-sm py-2"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <a href={`tel:${sub.phone}`} className="hover:text-blue-400">{sub.phone}</a>
                </div>
                {sub.email && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail size={14} className="text-blue-400 shrink-0" />
                    <a href={`mailto:${sub.email}`} className="hover:text-blue-400 truncate">{sub.email}</a>
                  </div>
                )}
                <div className="text-slate-400">
                  Service: <span className="text-slate-200">{sub.service}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/50 rounded-xl p-4">
                {sub.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
