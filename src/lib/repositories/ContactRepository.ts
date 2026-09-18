// ─── ContactRepository — Liskov + Dependency Inversion (SOLID: L, D) ─────────
// Concrete MongoDB implementation of IContactRepository.
// Services depend on the interface, not this class directly.

import { IContactRepository } from '@/lib/interfaces/IContactRepository';
import { ContactFormData, ContactSubmission } from '@/types';
import Contact from '@/models/Contact';
import { connectDB } from '@/lib/db/mongodb';

export class ContactRepository implements IContactRepository {
  async create(data: ContactFormData): Promise<ContactSubmission> {
    await connectDB();
    const doc = await Contact.create(data);
    return doc.toObject() as unknown as ContactSubmission;
  }

  async findAll(): Promise<ContactSubmission[]> {
    await connectDB();
    const docs = await Contact.find().sort({ createdAt: -1 }).lean();
    return docs as unknown as ContactSubmission[];
  }

  async findById(id: string): Promise<ContactSubmission | null> {
    await connectDB();
    const doc = await Contact.findById(id).lean();
    return doc ? (doc as unknown as ContactSubmission) : null;
  }

  async updateStatus(id: string, status: ContactSubmission['status']): Promise<ContactSubmission | null> {
    await connectDB();
    const doc = await Contact.findByIdAndUpdate(id, { status }, { new: true }).lean();
    return doc ? (doc as unknown as ContactSubmission) : null;
  }
}
