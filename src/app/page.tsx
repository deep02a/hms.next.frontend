import HeroSection from "@/app/components/HeroSection";
import HowItWorks from "@/app/components/HowItWorks";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
