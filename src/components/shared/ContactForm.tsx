'use client';
import { useState } from 'react';
import { Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig, telHref } from '@/lib/site-config';

const services = [
  'Drain Cleaning', 'Leak Repair', 'Water Heater', 'Pipe Repair',
  'Sewer Line', 'Emergency Plumbing', 'Bathroom Remodel', 'Other',
];

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        service: form.service,
        message: form.message,
        ...(form.email.trim() ? { email: form.email.trim() } : {}),
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage(data.message ?? 'Thank you! We will contact you shortly.');
        setForm({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please call us.');
      }
    } catch {
      setStatus('error');
      setMessage(`Network error. Please call ${siteConfig.phoneDisplay} directly.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number *</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(214) 555-0100"
            className="input-field"
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Email (optional)</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@email.com"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Service Needed *</label>
          <select
            id="contact-service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">Describe Your Issue *</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe the plumbing issue you're experiencing..."
          className="input-field resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
          <CheckCircle size={18} />
          <span className="text-sm">{message}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle size={18} />
          <span className="text-sm">{message}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          id="contact-submit"
          disabled={status === 'loading'}
          className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <><Loader2 size={16} className="animate-spin" /> Sending...</>
          ) : (
            'Get Free Estimate'
          )}
        </button>
        <a href={telHref} className="btn-accent flex-1 justify-center">
          <Phone size={16} />
          Call Now
        </a>
      </div>

      <p className="text-slate-500 text-xs text-center">
        🔒 Your information is private and will never be shared.
      </p>
    </form>
  );
}
