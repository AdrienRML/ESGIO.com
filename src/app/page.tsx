import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainSection />
      <SolutionSection />
      <BenefitsSection />
      <FeaturesSection />
      <SocialProof />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
