import {
  HeroSection,
  ServicesSection,
  AboutSection,
  TeamSection,
  BlogSection,
  ProcessSection,
  FocusAreasSection,
  CTASection
} from '@/components';

// Functional Requirements:
// - Render the marketing landing page sections sequentially inside a themed container.
// - Maintain a responsive minimum viewport height that inherits the current background theme.

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <BlogSection />
      <ProcessSection />
      <FocusAreasSection />
      <CTASection />
    </div>
  );
}
