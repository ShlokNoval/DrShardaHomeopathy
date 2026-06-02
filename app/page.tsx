import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import WhyHomeopathy from "@/components/home/WhyHomeopathy";
import DiseaseWidgets from "@/components/home/DiseaseWidgets";
import HowItWorks from "@/components/home/HowItWorks";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import DoctorVideoSection from "@/components/home/DoctorVideoSection";
import ExpertiseParallax from "@/components/home/ExpertiseParallax";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import BlogPreview from "@/components/home/BlogPreview";
import FAQAccordion from "@/components/home/FAQAccordion";
import MapSection from "@/components/home/MapSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <WhyHomeopathy />
      <DiseaseWidgets />
      <HowItWorks />
      <ExpertiseParallax />
      <BeforeAfterSlider />
      <DoctorVideoSection />
      <TestimonialCarousel />
      <BlogPreview />
      <FAQAccordion />
      <MapSection />
      <CTABanner />
    </>
  );
}
