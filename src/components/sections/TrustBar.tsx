import { Languages, PiggyBank, Smile, Sparkles, Stethoscope } from "lucide-react";
import { introduction, trustPoints } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { KaraokeText } from "@/components/ui/KaraokeText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const icons = [Stethoscope, Sparkles, Smile, Languages, PiggyBank];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-20">
      <Container>
        <KaraokeText
          text={introduction.body}
          className="mx-auto max-w-4xl text-justify text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl"
        />
        <Reveal delay={0.1} className="mt-6 flex justify-center">
          <Button as={Link} href={introduction.cta.href} variant="outline" withArrow>
            {introduction.cta.label}
          </Button>
        </Reveal>

        <Reveal className="mt-14">
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
              {[...trustPoints, ...trustPoints].map((point, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={`${point.title}-${i}`}
                    className="flex h-full w-64 shrink-0 flex-col items-start gap-3 rounded-2xl border border-border bg-background-subtle/60 p-5 transition-colors hover:border-primary-bright/50 hover:bg-accent-soft sm:w-72"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="font-display text-[0.98rem] font-semibold leading-snug text-foreground">
                      {point.title}
                    </p>
                    <p className="text-[0.85rem] leading-snug text-muted-foreground">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
