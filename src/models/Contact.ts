import mongoose, { Schema, Document, Model } from 'mongoose';
import { ContactSubmission } from '@/types';

// ─── Mongoose Document interface ──────────────────────────────────────────────
export interface IContactDocument extends Omit<ContactSubmission, '_id'>, Document {}

// ─── Schema ───────────────────────────────────────────────────────────────────
const ContactSchema = new Schema<IContactDocument>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxlength: [20, 'Phone cannot exceed 20 characters'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => !v || /^\S+@\S+\.\S+$/.test(v),
        message: 'Please enter a valid email',
      },
    },
    service: {
      type: String,
      required: [true, 'Service type is required'],
      enum: [
        'Drain Cleaning',
        'Leak Repair',
        'Water Heater',
        'Pipe Repair',
        'Sewer Line',
        'Emergency Plumbing',
        'Bathroom Remodel',
        'Other',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

// ─── Model (prevents OverwriteModelError in dev hot-reload) ───────────────────
const Contact: Model<IContactDocument> =
  mongoose.models.Contact ??
  mongoose.model<IContactDocument>('Contact', ContactSchema);

export default Contact;
