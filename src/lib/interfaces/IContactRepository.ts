// ─── IContactRepository — Interface Segregation (SOLID: I) ────────────────────
// Defines the contract for contact data access. Concrete implementations
// can be swapped (MongoDB, PostgreSQL, in-memory) without changing consumers.

import { ContactFormData, ContactSubmission } from '@/types';

export interface IContactRepository {
  create(data: ContactFormData): Promise<ContactSubmission>;
  findAll(): Promise<ContactSubmission[]>;
  findById(id: string): Promise<ContactSubmission | null>;
  updateStatus(id: string, status: ContactSubmission['status']): Promise<ContactSubmission | null>;
}
