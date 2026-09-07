import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SavoraImage } from "./SavoraImage";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20 lg:px-12">
        <div className="relative min-h-[520px] sm:min-h-[650px]">
          <SavoraImage grid="story" quadrant="tl" alt="The warmly lit SAVORA dining room" className="absolute left-0 top-0 h-[78%] w-[82%] shadow-editorial" />
          <SavoraImage grid="story" quadrant="br" alt="Seasonal ingredients prepared for dinner" className="absolute bottom-0 right-0 h-[40%] w-[48%] border-[10px] border-cream shadow-editorial sm:border-[16px]" />
          <span className="absolute bottom-5 left-2 origin-left -rotate-90 text-[9px] uppercase tracking-[0.35em] text-muted-foreground sm:-left-8">Season led · locally rooted</span>
        </div>
        <div className="lg:pl-6">
          <SectionHeading eyebrow="Our story" title="More Than a Meal." description="SAVORA began with a simple belief: memorable dining happens when care is present in every detail. Our kitchen interprets India's generous culinary traditions through the clarity of modern technique and the rhythm of the seasons." />
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">From the first welcome to the final petit four, every moment is composed with warmth, restraint, and a distinctly Pune spirit.</p>
          <Button variant="ink" size="lg" className="mt-9" onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}>Discover our story <ArrowUpRight /></Button>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-foreground/15 pt-7">
            <div><strong className="font-display text-3xl font-normal">14</strong><p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Years of craft</p></div>
            <div><strong className="font-display text-3xl font-normal">28</strong><p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Seasonal plates</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}