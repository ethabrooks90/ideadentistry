import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section className="bg-background-subtle py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Why Idea Dental
            </p>
            <h2 className="balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              A patient-first philosophy, in a spa-like setting
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.patientFirst}</p>
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {about.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-2.5 text-[0.95rem] text-foreground/85">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-bright" aria-hidden="true" />
                  {feature}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15} className="mt-9">
            <Button as={Link} href="/about" withArrow>
              Learn More About Us
            </Button>
          </Reveal>
        </div>

        <Reveal className="relative order-first lg:order-last">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift">
            <Image
              src="/uploads/2020/11/galleryIDEA.jpg"
              alt="Idea Dental's clean, modern office"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
