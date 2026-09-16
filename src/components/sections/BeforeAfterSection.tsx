import Link from "next/link";
import { galleryItems } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/ui/GalleryLightbox";

export function BeforeAfterSection() {
  const preview = galleryItems.slice(0, 8);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Real Results"
            title="Before & After Gallery"
            description="Real transformations from real Idea Dental patients. Tap any photo for a closer look."
          />
          <Reveal delay={0.1}>
            <Button as={Link} href="/before-after-gallery" variant="outline" withArrow className="shrink-0">
              View Full Gallery
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <GalleryGrid items={preview} />
        </Reveal>
      </Container>
    </section>
  );
}
