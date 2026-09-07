import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SavoraImage } from "./SavoraImage";
import { SectionHeading } from "./SectionHeading";

const gallery = [
  ["story", "tl", "The main dining room"],
  ["dish", "bl", "Slow-cooked Kashmiri lamb"],
  ["story", "tr", "Chef Aarya at the pass"],
  ["dish", "br", "Saffron pistachio dessert"],
  ["story", "bl", "Private candlelit dining"],
  ["dish", "tr", "Wild mushroom kulcha"],
] as const;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const activeImage = active === null ? undefined : gallery[active];
  const change = (direction: number) => setActive((value) => value === null ? 0 : (value + direction + gallery.length) % gallery.length);
  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); if (event.key === "ArrowRight") change(1); if (event.key === "ArrowLeft") change(-1); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  return (
    <section id="gallery" className="section-shell bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading light eyebrow="In the room" title="An evening at SAVORA." description="A glimpse of the craft, company, and quiet theatre that unfolds each night." />
        <div className="mt-14 grid auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
          {gallery.map(([grid, quadrant, alt], index) => <button type="button" onClick={() => setActive(index)} key={alt} aria-label={`View ${alt}`} className={`group relative overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 3 ? "row-span-2" : ""}`}><SavoraImage grid={grid} quadrant={quadrant} alt={alt} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/35"><Expand className="h-6 w-6 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" /></span></button>)}
        </div>
      </div>
      {activeImage && active !== null && <div role="dialog" aria-modal="true" aria-label="Gallery lightbox" className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4 sm:p-10"><Button variant="ghost" size="icon" className="absolute right-4 top-4 z-10 text-cream hover:bg-cream/10" onClick={() => setActive(null)} aria-label="Close gallery"><X /></Button><Button variant="ghost" size="icon" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-cream hover:bg-cream/10 sm:left-8" onClick={() => change(-1)} aria-label="Previous image"><ChevronLeft /></Button><SavoraImage grid={activeImage[0]} quadrant={activeImage[1]} alt={activeImage[2]} className="h-[75vh] w-[min(100%,1100px)]" /><Button variant="ghost" size="icon" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-cream hover:bg-cream/10 sm:right-8" onClick={() => change(1)} aria-label="Next image"><ChevronRight /></Button><p className="absolute bottom-5 text-xs uppercase tracking-widest text-cream-muted">{activeImage[2]} · {active + 1}/{gallery.length}</p></div>}
    </section>
  );
}