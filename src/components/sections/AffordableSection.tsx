import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { affordability } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AffordableSection() {
  return (
    <section className="bg-background-subtle py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/office-hero.jpg"
              alt="Close-up of a bright, healthy smile"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary px-6 py-5 text-white shadow-lift sm:block">
            <p className="font-display text-3xl font-bold leading-none">50%</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/80">
              less than other dentists
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Affordable Dental Care
            </p>
            <h2 className="balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              {affordability.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {affordability.body}
            </p>
          </Reveal>

          <StaggerGroup className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3" stagger={0.04}>
            {affordability.services.map((service) => (
              <StaggerItem key={service}>
                <div className="flex items-center gap-2 text-[0.92rem] text-foreground/85">
                  <Check className="size-4 shrink-0 text-primary-bright" aria-hidden="true" />
                  {service}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15} className="mt-9">
            <Button as={Link} href={affordability.cta.href} withArrow>
              {affordability.cta.label}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
