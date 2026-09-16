import { testimonials } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

export function TestimonialsSection() {
  return (
    <section className="bg-background-subtle py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Patient Stories"
          title="Smiles that speak for themselves"
          align="center"
          className="mx-auto"
        />
      </Container>

      <Reveal delay={0.1} className="mt-12">
        <TestimonialCarousel items={testimonials} />
      </Reveal>
    </section>
  );
}
