import type { Metadata } from "next";
import Link from "next/link";
import { Gift } from "lucide-react";
import { specials } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Specials",
  description: "Dental specials and offers from Idea Dental in Houston, TX.",
  alternates: { canonical: "/specials" },
};

export default function SpecialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Specials"
        title={specials.heading}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Specials" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-primary">
              <Gift className="size-6" aria-hidden="true" />
            </span>
            <p className="text-lg leading-relaxed text-muted-foreground">{specials.message}</p>
            <Button as={Link} href="/contact" withArrow>
              Contact Us
            </Button>
          </Reveal>
        </Container>
      </section>

      <AppointmentCTA />
    </>
  );
}
