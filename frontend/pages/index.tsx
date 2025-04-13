"use client";
import { Navbar } from "../components/home/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { PartnersSection } from "../components/home/PartnersSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { ValueSection } from "../components/home/ValueSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { PricingSection } from "../components/home/PricingSection";
import { FaqSection } from "../components/home/FaqSection";
import { CtaSection } from "../components/home/CtaSection";
import { Footer } from "../components/home/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <ValueSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
