import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { business } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description: "Request an appointment at Idea Dental in Houston, TX. We'll confirm by phone.",
  alternates: { canonical: "/appointments" },
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Book A Visit"
        title="Request an Appointment"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Request Appointment" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <AppointmentForm />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 text-center">
            <p className="text-muted-foreground">
              Prefer to call?{" "}
              <a href={business.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-primary">
                <Phone className="size-4" aria-hidden="true" />
                {business.phone}
              </a>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
