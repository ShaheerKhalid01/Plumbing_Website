import type { Metadata } from 'next';
import { siteConfig, telHref } from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  topic: 'Privacy Policy',
  services:
    'privacy practices for contact form submissions and customer information at our McKinney plumbing company',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 1, 2026';

  return (
    <div className="pt-28 section-padding bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="section-badge mb-4">Legal</div>
        <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Last updated: {lastUpdated}</p>

        <div className="glass rounded-2xl p-8 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>When you contact us through our website, we may collect the following information:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-400">
              <li>Your full name</li>
              <li>Phone number</li>
              <li>Email address (optional)</li>
              <li>Service type requested</li>
              <li>Message or description of your plumbing issue</li>
            </ul>
            <p className="mt-3">
              We do not collect payment information through this website. Any payment processing is done
              securely in person or via trusted third-party payment processors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-400">
              <li>Contact you regarding your service request</li>
              <li>Schedule plumbing appointments</li>
              <li>Provide free estimates</li>
              <li>Follow up on completed services</li>
              <li>Send occasional promotional communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              information with trusted service partners only when necessary to fulfill your request
              (e.g., scheduling software). All partners are bound by confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information.
              All form submissions are stored securely in our database. We use HTTPS encryption on our
              website to protect data in transit. However, no method of internet transmission is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small text
              files stored on your device. You can disable cookies in your browser settings, though
              some website features may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Google Maps & Third-Party Services</h2>
            <p>
              Our website embeds Google Maps for location purposes. Google may collect data through this
              embed. Please review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Google&apos;s Privacy Policy</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-400">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us by phone at {siteConfig.phoneDisplay}.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal
              information from children. If you believe a child has submitted information to us, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of changes by
              updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website
              after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="mt-4 glass-light rounded-xl p-4 text-sm">
              <div className="font-semibold text-white mb-1">{siteConfig.businessName}</div>
              <div className="text-slate-400">{siteConfig.city}, {siteConfig.state}</div>
              <div className="text-slate-400">Phone: <a href={telHref} className="text-blue-400">{siteConfig.phoneDisplay}</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
