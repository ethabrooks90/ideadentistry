"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { nav } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent py-5"
          : "border-b border-border bg-white/85 py-3 shadow-soft backdrop-blur-md"
      )}
    >
      <div className="container-content flex items-center justify-between gap-4">
        <Link href="/" className="relative z-10 flex shrink-0 items-center" aria-label="Idea Dental — Home">
          <Image
            src="/images/logo.png"
            alt="Idea Dental"
            width={190}
            height={70}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav
            .filter((item) => item.label !== "Contact")
            .map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-[0.925rem] font-medium transition-colors",
                    transparent ? "text-white/95 hover:text-white" : "text-foreground/85 hover:text-primary"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onFocus={() => setServicesOpen(true)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("size-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                      role="menu"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="group/item rounded-xl p-3 transition-colors hover:bg-accent-soft"
                          >
                            <p className="font-display text-[0.98rem] font-semibold text-foreground group-hover/item:text-primary">
                              {child.label}
                            </p>
                            <p className="mt-1 text-sm leading-snug text-muted-foreground">
                              {child.description}
                            </p>
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
                className={cn(
                  "rounded-full px-4 py-2 text-[0.925rem] font-medium transition-colors",
                  transparent ? "text-white/95 hover:text-white" : "text-foreground/85 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as={Link} href="/contact" variant={transparent ? "bright" : "primary"} size="sm" withArrow>
            Contact
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className={cn(
            "flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden",
            transparent ? "border-white/40 text-white" : "border-border text-foreground"
          )}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
