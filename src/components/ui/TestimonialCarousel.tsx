"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { StarRating } from "./StarRating";

type Testimonial = {
  quote: string;
  name: string;
  rating: number;
};

const TESTIMONIAL_IMAGE = "/images/dentist-1920.jpg";

export function TestimonialCarousel({ items }: { items: readonly Testimonial[] }) {
  // A ref (not just state) so navigation always reads the true latest index
  // synchronously — a value captured in a click handler's closure can go
  // stale under rapid/continuous clicks.
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const step = useCallback(
    (delta: 1 | -1) => {
      const next = (activeIndexRef.current + delta + items.length) % items.length;
      activeIndexRef.current = next;
      setActiveIndex(next);
    },
    [items.length]
  );

  const item = items[activeIndex];

  return (
    <div>
      <div className="grid overflow-hidden border-y border-border bg-white lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-8 p-8 sm:p-12 lg:p-16 xl:p-20">
          <Quote className="size-9 text-primary-bright/40" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name + item.quote.slice(0, 12)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="balance font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
            >
              &ldquo;{item.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>

          <div className="border-l-4 border-primary-bright pl-5">
            <p className="font-display text-lg font-semibold text-foreground">{item.name}</p>
            <StarRating rating={item.rating} className="mt-1.5" />
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={TESTIMONIAL_IMAGE}
                alt="A patient smiling during a visit at Idea Dental"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => step(-1)}
          className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Next testimonial"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
