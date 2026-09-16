"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { hero, heroHighlights, introduction } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const easing = [0.22, 1, 0.36, 1] as const;
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Natural pixel size of hero.backgroundImage — needed to replicate `object-fit: cover`
// math by hand, so the sharp lens can be given the exact same background-size/position
// as the blurred layer and land on the identical crop of the source photo.
const IMAGE_NATURAL_WIDTH = 1600;
const IMAGE_NATURAL_HEIGHT = 998;
// percent — tuned per-layout so the sharp lens lands on the teeth. The lens sits in a
// different spot on screen at each layout (centered in normal flow on mobile, pinned to
// the right corner at lg+), so one fixed focal point can't land on the teeth for both.
const BACKGROUND_OBJECT_POSITION_MOBILE = { x: 52, y: 50 };
const BACKGROUND_OBJECT_POSITION_DESKTOP = { x: 1, y: 62 };
const DESKTOP_BREAKPOINT = 1024; // matches Tailwind's `lg`
const BACKGROUND_ZOOM = 1.3; // the "slightly zoomed" atmospheric look

function splitLastWord(phrase: string): [string, string] {
  const idx = phrase.lastIndexOf(" ");
  return idx === -1 ? ["", phrase] : [phrase.slice(0, idx), phrase.slice(idx + 1)];
}

// Layout-only position, walking the offsetParent chain — deliberately ignores CSS
// transforms (unlike getBoundingClientRect), so it reports the lens's true resting
// position even while its animated ancestor is mid-scale. Every element between the
// lens and the section is explicitly `position: relative`/`absolute`, so this chain
// resolves cleanly with no skipped/unpositioned ancestors.
function offsetFrom(el: HTMLElement, ancestor: HTMLElement): { x: number; y: number } {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== ancestor) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

export function HeroSection() {
  const [leadRest, leadAccent] = splitLastWord(hero.headlineLead);
  const [brandRest, brandAccent] = splitLastWord(hero.headlineBrand);

  const sectionRef = useRef<HTMLElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [backgroundStyle, setBackgroundStyle] = useState<CSSProperties>({});
  const [lensStyle, setLensStyle] = useState<CSSProperties>({});

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const lens = lensRef.current;
    if (!section || !lens) return;

    function align() {
      if (!section || !lens) return;
      // Section itself never has a transform applied to it, so its rendered
      // (untransformed) box is what the "cover" math should be based on.
      const sectionRect = section.getBoundingClientRect();

      const objectPosition =
        window.innerWidth >= DESKTOP_BREAKPOINT
          ? BACKGROUND_OBJECT_POSITION_DESKTOP
          : BACKGROUND_OBJECT_POSITION_MOBILE;

      const coverScale = Math.max(
        sectionRect.width / IMAGE_NATURAL_WIDTH,
        sectionRect.height / IMAGE_NATURAL_HEIGHT
      );
      const scale = coverScale * BACKGROUND_ZOOM;
      const bgWidth = IMAGE_NATURAL_WIDTH * scale;
      const bgHeight = IMAGE_NATURAL_HEIGHT * scale;
      const offsetX = (sectionRect.width - bgWidth) * (objectPosition.x / 100);
      const offsetY = (sectionRect.height - bgHeight) * (objectPosition.y / 100);
      const size = `${bgWidth}px ${bgHeight}px`;

      setBackgroundStyle({
        backgroundImage: `url(${hero.backgroundImage})`,
        backgroundSize: size,
        backgroundPosition: `${offsetX}px ${offsetY}px`,
        backgroundRepeat: "no-repeat",
      });

      // The lens's own layout position/size — NOT getBoundingClientRect, so the
      // entrance animation's scale(2.1 → 1) transform on its ancestor can't skew this
      // toward the enlarged transient state. This always resolves to the lens's true
      // resting position, so the sharp window stays locked to the same spot on the
      // blurred photo throughout the whole transition, not just after it settles.
      const { x: lensLeftInSection, y: lensTopInSection } = offsetFrom(lens, section);

      setLensStyle({
        backgroundImage: `url(${hero.backgroundImage})`,
        backgroundSize: size,
        backgroundPosition: `${offsetX - lensLeftInSection}px ${offsetY - lensTopInSection}px`,
        backgroundRepeat: "no-repeat",
      });
    }

    align();

    const observer = new ResizeObserver(align);
    observer.observe(section);
    observer.observe(lens);
    window.addEventListener("resize", align);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", align);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-foreground text-white"
    >
      {/* Preload hint for the LCP background image, since it's now a CSS background-image
          rather than next/image (which otherwise added this automatically via `priority`). */}
      <link rel="preload" as="image" href={hero.backgroundImage} />

      <div
        className="absolute inset-0 blur-[5px] saturate-[1.3] contrast-[1.12] brightness-[1.05]"
        style={backgroundStyle}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex w-full flex-col items-center py-32 text-center sm:py-40">
        {/* Headline row + centered "magnifying glass" window — the square overlaps
            the headline at lg+ via absolute + inset-0 + m-auto centering, sized
            against this wrapper's min-height. Below lg it just flows normally. */}
        <div className="relative w-full lg:min-h-[480px] xl:min-h-[580px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easing }}
            className="balance flex flex-col items-center gap-2 font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:items-start lg:text-5xl lg:leading-none xl:text-6xl 2xl:text-7xl"
          >
            <span className="lg:whitespace-nowrap">
              {leadRest} <em className="italic">{leadAccent}</em>
            </span>{" "}
            <span className="lg:whitespace-nowrap">
              {brandRest} <em className="italic">{brandAccent}</em>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 2.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: easing }}
            className="relative mt-8 flex flex-col items-center lg:absolute lg:right-12 lg:-top-8 lg:bottom-4 lg:my-auto lg:h-fit lg:w-fit xl:right-20"
          >
            <div
              ref={lensRef}
              className="relative aspect-[4/5] w-64 overflow-hidden rounded-2xl shadow-lift sm:w-72 lg:w-80 xl:w-96"
            >
              <div className="absolute inset-0" style={lensStyle} aria-hidden="true" />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center px-4 lg:hidden">
                <Button
                  as={Link}
                  href={hero.ctaPrimary.href}
                  variant="light"
                  size="sm"
                  className="relative overflow-hidden whitespace-nowrap hover:bg-white"
                >
                  <span
                    className="absolute inset-0 origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover/btn:scale-y-100"
                    aria-hidden="true"
                  />
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white">
                    <CalendarCheck className="size-4" aria-hidden="true" />
                    {hero.ctaPrimary.label}
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easing }}
            className="mt-8 max-w-xl text-lg text-white/80 lg:mt-6 lg:text-left"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easing }}
            className="mt-8 hidden max-w-xl grid-cols-1 justify-items-center gap-y-5 border-t border-white/15 pt-6 lg:grid lg:grid-cols-3 lg:justify-items-stretch lg:gap-x-4 lg:divide-x lg:divide-white/20"
          >
            {heroHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 sm:pl-4 sm:first:pl-0">
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 shrink-0 opacity-90 [filter:brightness(0)_invert(1)]"
                  aria-hidden="true"
                />
                <p className="text-left text-sm font-semibold leading-snug text-white">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easing }}
            className="mt-8 hidden w-full max-w-xl flex-wrap items-center gap-4 lg:flex lg:justify-start"
          >
            <Button
              as={Link}
              href={hero.ctaPrimary.href}
              variant="light"
              size="md"
              className="relative overflow-hidden hover:bg-white"
            >
              <span
                className="absolute inset-0 origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover/btn:scale-y-100"
                aria-hidden="true"
              />
              <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white">
                <CalendarCheck className="size-4" aria-hidden="true" />
                {hero.ctaPrimary.label}
              </span>
            </Button>
            <Button as={Link} href={introduction.cta.href} variant="outline" size="md" className="border-white/40 text-white hover:border-white hover:text-white" withArrow>
              {introduction.cta.label}
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute inset-x-0 bottom-14 z-10 hidden justify-center sm:flex"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
