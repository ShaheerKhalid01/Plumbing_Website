import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { buildPageMetadata } from '@/lib/seo';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import GoogleReviews from '@/components/home/GoogleReviews';
import VideoSection from '@/components/home/VideoSection';
import SocialProfiles from '@/components/home/SocialProfiles';
import Testimonials from '@/components/home/Testimonials';
import CTAPoints from '@/components/home/CTAPoints';
import FAQSection from '@/components/home/FAQSection';
import GoogleMap from '@/components/home/GoogleMap';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = buildPageMetadata({
  topic: siteConfig.businessName,
  services:
    '24/7 emergency plumbing, drain cleaning, slab leak repair, water heaters, sewer line repair & leak detection',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <ServicesOverview />
      <CTAPoints />
      <GoogleReviews />
      <Testimonials />
      <VideoSection />
      <SocialProfiles />
      <FAQSection />
      <GoogleMap />
      <ContactSection />
    </>
  );
}
