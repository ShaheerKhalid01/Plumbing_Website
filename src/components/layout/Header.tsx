'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Droplets } from 'lucide-react';
import { siteConfig, telHref } from '@/lib/site-config';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'McKinney Plumbing', href: '/mckinney-plumbing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-blue-950/50' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-blue-900/80 border-b border-blue-800/40 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <span className="text-blue-200">📍 {siteConfig.city}, {siteConfig.state} — Serving Collin County</span>
          <a
            href={telHref}
            className="flex items-center gap-1.5 text-orange-400 font-semibold hover:text-orange-300 transition-colors"
          >
            <Phone size={14} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <Droplets size={20} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-base leading-tight">{siteConfig.shortName}</div>
            <div className="text-blue-400 text-xs font-medium">{siteConfig.tagline}</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-slate-300 text-sm font-medium hover:text-white hover:bg-blue-500/10 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={telHref} className="btn-accent text-sm py-2.5 px-5">
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-blue-500/10 transition-all"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-blue-800/30 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-300 font-medium hover:text-white border-b border-slate-800/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href={telHref} className="btn-accent w-full justify-center mt-4">
            <Phone size={16} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
