import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Idea Dental believes a smile tells a thousand words. Learn about our patient-first philosophy and spa-like offices in Houston, TX.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Idea Dental"
        title="A smile tells a thousand words"
        image="/uploads/2020/11/galleryIDEA.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">{about.intro}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.patientFirst}</p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {about.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background-subtle/50 px-4 py-3 text-[0.95rem] text-foreground/85">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-bright" aria-hidden="true" />
                  {feature}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <p className="mt-10 text-lg leading-relaxed text-muted-foreground">{about.closing}</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8">
            <Button as={Link} href="/appointments" withArrow>
              Request Appointment
            </Button>
          </Reveal>
        </Container>
      </section>

      <DoctorsSection />
      <AppointmentCTA />
    </>
  );
}
