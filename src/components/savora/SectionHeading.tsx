import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <header className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className={cn("mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl", light ? "text-cream" : "text-foreground")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-6 max-w-xl text-sm leading-7", light ? "text-cream-muted" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </header>
  );
}