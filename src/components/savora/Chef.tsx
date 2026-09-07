import { SavoraImage } from "./SavoraImage";
import { SectionHeading } from "./SectionHeading";

export function Chef() {
  return (
    <section className="section-shell bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
        <SavoraImage grid="story" quadrant="tr" alt="Executive Chef Aarya Deshmukh plating a dish" className="aspect-[4/5] w-full shadow-editorial" />
        <div>
          <SectionHeading eyebrow="Meet our chef" title="Aarya Deshmukh" description="Chef Aarya's cooking is grounded in memory: family kitchens, Konkan markets, and the scent of spices warming over a low flame. Fifteen years across Mumbai, Copenhagen, and Singapore sharpened a philosophy built on restraint." />
          <blockquote className="mt-8 border-l border-primary pl-6 font-display text-2xl italic leading-snug text-foreground">“Technique should never speak louder than the ingredient.”</blockquote>
          <dl className="mt-10 grid grid-cols-2 gap-7 border-t border-border pt-7"><div><dt className="text-[9px] uppercase tracking-widest text-muted-foreground">Experience</dt><dd className="mt-2 font-display text-2xl">15 years</dd></div><div><dt className="text-[9px] uppercase tracking-widest text-muted-foreground">Philosophy</dt><dd className="mt-2 font-display text-2xl">Memory, refined</dd></div></dl>
        </div>
      </div>
    </section>
  );
}