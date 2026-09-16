"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { doctors } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function DoctorsSection() {
  const [index, setIndex] = useState(0);
  const doctor = doctors[index];
  const goTo = (i: number) => setIndex((i + doctors.length) % doctors.length);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Meet our Doctors"
          title="We employ only experienced dental specialists"
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="grid overflow-hidden rounded-3xl border border-border shadow-lift lg:grid-cols-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[620px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col justify-center gap-8 bg-background-subtle/40 p-8 sm:p-12 lg:p-16">
              <div className="border-l-4 border-primary-bright pl-5">
                <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  {doctor.role}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  Specialization:
                </p>
                <p className="mt-3 font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                  {doctor.highlight}
                </p>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
                  {doctor.excerpt}
                </p>
              </div>

              <Button as={Link} href="/appointments" variant="outline" withArrow className="w-fit">
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book An Appointment
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous doctor"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-3">
              {doctors.map((d, i) => (
                <div key={d.name} className="flex items-center gap-3">
                  {i > 0 && <span className="text-border">/</span>}
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    className={cn(
                      "font-display text-lg font-semibold tabular-nums transition-colors",
                      i === index ? "text-primary" : "text-border hover:text-muted-foreground"
                    )}
                    aria-label={`View ${d.name}`}
                    aria-current={i === index}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next doctor"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
