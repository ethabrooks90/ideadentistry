import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AffordableSection } from "@/components/sections/AffordableSection";
import { PricingComparison } from "@/components/sections/PricingComparison";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InsuranceSection } from "@/components/sections/InsuranceSection";
import { ChatSection } from "@/components/sections/ChatSection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <AffordableSection />
      <PricingComparison />
      <TechnologySection />
      <BeforeAfterSection />
      <AboutSection />
      <DoctorsSection />
      <TestimonialsSection />
      <InsuranceSection />
      <ChatSection />
      <AppointmentCTA />
      <ContactSection />
    </>
  );
}
