import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#065a78] shadow-soft",
  bright:
    "bg-primary-bright text-white hover:brightness-95 shadow-soft",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-foreground hover:bg-background-subtle",
  light: "bg-white text-primary hover:bg-white/90",
} as const;

const sizeClasses = {
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
  sm: "h-10 px-5 text-sm",
} as const;

type ButtonOwnProps = {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | "as">;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";
  return (
    <Component
      className={cn(
        "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Component>
  );
}

export function LinkButton({
  href,
  ...props
}: ButtonOwnProps & { href: string; className?: string }) {
  return <Button as={Link} href={href} {...props} />;
}
