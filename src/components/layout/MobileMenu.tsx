"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { nav } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Portal to <body> — a solid/blurred header (backdrop-filter) becomes a containing
  // block for its fixed-position descendants, which would otherwise trap this
  // fixed inset-0 overlay inside the header's own (much shorter) box. Guarding on
  // `document` (rather than an effect-driven mount flag) keeps this a plain client-only
  // render check: SSR renders nothing here, and the portal target isn't part of
  // hydration's DOM diff, so there's nothing to reconcile.
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-foreground/40 lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-white shadow-lift"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-lg font-semibold text-foreground">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-background-subtle"
                aria-label="Close menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile">
              {nav
                .filter((item) => item.label !== "Contact")
                .map((item) =>
                item.children ? (
                  <div key={item.href} className="border-b border-border/70">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-4 text-left text-[1.05rem] font-medium text-foreground"
                      onClick={() => setServicesExpanded((v) => !v)}
                      aria-expanded={servicesExpanded}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("size-4 transition-transform duration-200", servicesExpanded && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-3 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="rounded-lg px-3 py-2.5 text-[0.95rem] text-muted-foreground hover:bg-accent-soft hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-border/70 px-3 py-4 text-[1.05rem] font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex flex-col gap-3 border-t border-border px-5 py-5">
              <Button as={Link} href="/contact" onClick={onClose} withArrow className="w-full">
                Contact
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
