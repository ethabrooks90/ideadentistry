import Image from "next/image";
import { Play, ScanLine, Sparkle } from "lucide-react";
import { technology } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const icons = [ScanLine, Sparkle];

export function TechnologySection() {
  return (
    <section className="bg-background-subtle py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Modern Equipment"
          title="We have the newest technology"
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {technology.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.name}>
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-bright/40 hover:shadow-lift"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-foreground">
                    <Image
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt={item.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lift transition-transform duration-300 ease-out group-hover:scale-110">
                        <Play className="size-6 translate-x-0.5 fill-current" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-1 items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-foreground">{item.name}</p>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
