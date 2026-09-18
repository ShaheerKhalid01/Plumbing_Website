// ─── TypeScript Types & Interfaces ────────────────────────────────────────────
// Centralised type definitions for the entire application

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  createdAt?: Date;
}

export interface ContactSubmission extends ContactFormData {
  _id?: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: Date;
}

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  tags: string[];
  publishedAt: Date;
  updatedAt?: Date;
  featured: boolean;
  imageUrl?: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
