import type { Metadata } from "next";
import { services } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategoryCard } from "@/components/services/ServiceCategoryCard";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore Idea Dental's full range of dental services in Houston, TX: general, restorative, cosmetic, and orthodontic care.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Dental Services in Houston, TX"
        description="You and your family can take advantage of a full range of dental services here at Idea Dental. During each visit, you will be treated by trained professionals who will provide top quality care to prevent dental problems and treat current conditions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCategoryCard key={service.slug} service={service} delay={i * 0.05} />
            ))}
          </div>
        </Container>
      </section>

      <AppointmentCTA />
    </>
  );
}
