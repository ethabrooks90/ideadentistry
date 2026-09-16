import type { Metadata } from "next";
import Image from "next/image";
import { doctors } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Meet Our Doctors",
  description: "Meet the dental providers at Idea Dental in Houston, TX: Stephanie Vu, DDS and Dr. Nukul Rathi.",
  alternates: { canonical: "/about/meet-our-doctors" },
};

export default function MeetOurDoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Doctors"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Meet Our Doctors" },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="mx-auto flex max-w-3xl flex-col gap-16">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-4 border-background-subtle shadow-soft">
                  <Image src={doctor.photo} alt={doctor.name} fill sizes="112px" className="object-cover" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">{doctor.name}</h2>
              </div>
              <div className="mt-6 space-y-4">
                {doctor.bio.map((paragraph, j) => (
                  <p key={j} className="text-[1.05rem] leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <AppointmentCTA />
    </>
  );
}
