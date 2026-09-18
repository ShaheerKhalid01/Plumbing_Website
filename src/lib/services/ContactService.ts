// ─── ContactService — Single Responsibility (SOLID: S) ────────────────────────
// Handles ONLY business logic for contact submissions.
// Depends on IContactRepository interface, not concrete class (DIP).

import { IContactRepository } from '@/lib/interfaces/IContactRepository';
import { ContactFormData, ContactSubmission, ApiResponse } from '@/types';

export class ContactService {
  constructor(private readonly repo: IContactRepository) {}

  async submitContact(data: ContactFormData): Promise<ApiResponse<ContactSubmission>> {
    // Business rule: sanitize phone number
    const sanitized: ContactFormData = {
      ...data,
      phone: data.phone.replace(/\D/g, ''),
      name: data.name.trim(),
      message: data.message.trim(),
      ...(data.email?.trim() ? { email: data.email.trim().toLowerCase() } : {}),
    };

    // Business rule: validate phone length
    if (sanitized.phone.length < 10) {
      return { success: false, error: 'Please enter a valid phone number (at least 10 digits).' };
    }

    try {
      const submission = await this.repo.create(sanitized);
      return { success: true, data: submission, message: 'Thank you! We will contact you shortly.' };
    } catch {
      return { success: false, error: 'Failed to submit. Please call us directly.' };
    }
  }

  async getSubmissions(): Promise<ApiResponse<ContactSubmission[]>> {
    try {
      const data = await this.repo.findAll();
      return { success: true, data };
    } catch {
      return { success: false, error: 'Failed to fetch submissions.' };
    }
  }
}
