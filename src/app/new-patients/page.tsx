import type { Metadata } from "next";
import Link from "next/link";
import { newPatients } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "What to expect as a new patient at Idea Dental in Houston, TX — quality dental care, excellent customer service, and a relaxing environment.",
  alternates: { canonical: "/new-patients" },
};

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New Patients"
        title="We love meeting new patients"
        image="/images/dentist-1920.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "New Patients" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="mx-auto max-w-2xl">
          <div className="space-y-5">
            {newPatients.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <Button as={Link} href="/appointments" withArrow>
              Request an Appointment
            </Button>
          </Reveal>
        </Container>
      </section>

      <AppointmentCTA />
    </>
  );
}
