import type { Metadata } from "next";
import { galleryItems } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/ui/GalleryLightbox";
import { PageHero } from "@/components/sections/PageHero";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: "Real before and after smile transformations from Idea Dental patients in Houston, TX.",
  alternates: { canonical: "/before-after-gallery" },
};

export default function BeforeAfterGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Results"
        title="Before & After Gallery"
        description="Real transformations from real Idea Dental patients. Tap any photo for a closer look."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Before & After Gallery" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <GalleryGrid items={galleryItems} />
          </Reveal>
        </Container>
      </section>

      <AppointmentCTA />
    </>
  );
}
