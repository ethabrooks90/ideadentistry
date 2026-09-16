import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-0.5 text-primary-bright", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4"
          fill={i < rating ? "currentColor" : "none"}
          strokeWidth={i < rating ? 0 : 1.5}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
