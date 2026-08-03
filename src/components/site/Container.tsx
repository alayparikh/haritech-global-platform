import { cn } from "@/lib/utils";

/**
 * The single horizontal rhythm for the whole site.
 * Every section's content must sit inside one of these so left edges line up.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6", className)}>{children}</div>;
}
