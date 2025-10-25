import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />

      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
