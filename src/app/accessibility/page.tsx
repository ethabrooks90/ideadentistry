import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { accessibilityStatement, business } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Idea Dental's accessibility statement and tips for a more accessible browsing experience.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">{accessibilityStatement.intro}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {accessibilityStatement.ssaIntro}
            </p>
          </Reveal>

          <StaggerGroup className="mt-6 space-y-2.5" stagger={0.05}>
            {accessibilityStatement.tips.map((tip) => (
              <StaggerItem key={tip}>
                <div className="flex items-start gap-2.5 text-[0.98rem] text-foreground/85">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-bright" aria-hidden="true" />
                  {tip}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {accessibilityStatement.speechNote}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {accessibilityStatement.closing} Contact us at{" "}
              <a href={business.phoneHref} className="font-semibold text-primary">
                {business.phone}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
