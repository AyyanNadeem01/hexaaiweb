import HeroSection from "@/components/HeroSection";
import RealEstateSection from "@/components/RealEstateSection";
import DentalSection from "@/components/DentalSection";
import LeadGenSection from "@/components/LeadGenSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RealEstateSection />
      <DentalSection />
      <LeadGenSection />
      <HowItWorksSection />
      <WhyUsSection />
      <CaseStudiesSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;
