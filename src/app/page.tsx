import HeroSection from "@/app/components/HeroSection";
import HowItWorks from "@/app/components/HowItWorks";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
