import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import experienceImage from "@/assets/savora-experience.jpg";
import { SavoraImage } from "./SavoraImage";
import { SectionHeading } from "./SectionHeading";

const experiences = [
  ["01", "Fine Dining", "An intimate evening paced entirely around you.", "tl"],
  ["02", "Private Dining", "A secluded room for up to sixteen guests.", "bl"],
  ["03", "Chef's Table", "Seven seats with a view into our creative process.", "tr"],
  ["04", "Celebrations", "Personalised menus for your defining occasions.", "br"],
] as const;

export function Experience() {
  return (
    <>
      <section id="experience" className="section-shell bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Beyond the table" title="The SAVORA Experience" description="Choose the setting. We compose the details—from a spontaneous dinner to the celebration you will remember for years." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {experiences.map(([number, title, copy, quadrant], index) => (
              <article key={title} className={`experience-tile group relative overflow-hidden ${index === 0 || index === 3 ? "md:min-h-[600px]" : "md:min-h-[440px]"}`}>
                <SavoraImage grid="story" quadrant={quadrant} alt={`${title} at SAVORA`} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream sm:p-9"><span className="text-[10px] tracking-widest text-primary">{number}</span><h3 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h3><p className="mt-2 max-w-sm text-xs leading-6 text-cream-muted">{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="parallax-section relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink px-5 text-center text-cream">
        <img src={experienceImage} alt="SAVORA dining room overlooking Pune at dusk" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-[115%] w-full object-cover" />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative z-10 max-w-4xl"><p className="section-kicker">Stay awhile</p><h2 className="mt-5 font-display text-5xl leading-none sm:text-7xl lg:text-8xl">Crafted for moments worth remembering.</h2><Button variant="goldOutline" size="lg" className="mt-9 border-cream/50 text-cream" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Explore the experience <ArrowUpRight /></Button></div>
      </section>
    </>
  );
}