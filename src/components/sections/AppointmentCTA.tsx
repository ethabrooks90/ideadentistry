import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-white sm:py-28">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/office-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/95 to-foreground/70" />

      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="balance max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ready for a beautiful, healthy smile?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-lg text-lg text-white/75">
            Request an appointment online, or call us — our team is ready to help.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button as={Link} href="/appointments" variant="bright" size="lg" withArrow>
            Request Appointment
          </Button>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/70"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phone}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
