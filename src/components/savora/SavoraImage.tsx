import storyGrid from "@/assets/savora-story-grid.jpg";
import dishGrid from "@/assets/savora-dishes-grid.jpg";
import { cn } from "@/lib/utils";

type Grid = "story" | "dish";
type Quadrant = "tl" | "tr" | "bl" | "br";

const positions: Record<Quadrant, string> = {
  tl: "left-0 top-0",
  tr: "right-0 top-0",
  bl: "bottom-0 left-0",
  br: "bottom-0 right-0",
};

export function SavoraImage({
  grid,
  quadrant,
  alt,
  className,
  eager = false,
}: {
  grid: Grid;
  quadrant: Quadrant;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={grid === "story" ? storyGrid : dishGrid}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        width={1920}
        height={1920}
        className={cn("absolute max-w-none object-cover", positions[quadrant])}
        style={{ width: "200%", height: "200%" }}
      />
    </div>
  );
}