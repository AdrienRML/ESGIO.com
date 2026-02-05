import UrgencyBanner from "@/components/UrgencyBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import TrustBadges from "@/components/TrustBadges";
import FAQSection from "@/components/FAQSection";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <UrgencyBanner />
      <Navbar />
      <Hero />
      <PainSection />
      <SolutionSection />
      <BenefitsSection />
      <FeaturesSection />
      <ComparisonSection />
      <SocialProof />
      <PricingSection />
      <TrustBadges />
      <FAQSection />
      <DemoForm />
      <Footer />
      <FloatingCTA />
    </>
  );
}
