import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";

export function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="A full range of dental services, under one roof"
          description="You and your family can take advantage of a full range of dental services here at Idea Dental — trained professionals providing top-quality preventive and restorative care."
        />
      </Container>

      <ServicesMarquee />
    </section>
  );
}
