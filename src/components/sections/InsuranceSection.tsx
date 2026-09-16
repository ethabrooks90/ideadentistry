import Link from "next/link";
import { HeartHandshake, Languages, ShieldCheck } from "lucide-react";
import { insurance } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function InsuranceSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-background-subtle/60 px-6 py-14 text-center sm:px-16">
        <Reveal>
          <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-primary">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {insurance.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{insurance.body}</p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap items-center justify-center gap-6 pt-2">
          <span className="flex items-center gap-2 text-[0.95rem] font-medium text-foreground/80">
            <HeartHandshake className="size-4 text-primary-bright" aria-hidden="true" />
            Flexible payment options
          </span>
          <span className="flex items-center gap-2 text-[0.95rem] font-medium text-foreground/80">
            <Languages className="size-4 text-primary-bright" aria-hidden="true" />
            {insurance.spanish}
          </span>
        </Reveal>
        <Reveal delay={0.2} className="pt-2">
          <Button as={Link} href="/contact" variant="outline" withArrow>
            Ask About Your Plan
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
