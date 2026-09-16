import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Idea Dental in Houston, TX. Call (832) 664-8640 or send us a message — Hablamos Español.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Idea Dental"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
