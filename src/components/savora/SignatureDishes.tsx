import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SavoraImage } from "./SavoraImage";
import { SectionHeading } from "./SectionHeading";

const dishes = [
  { name: "Tandoor Cauliflower", category: "Small plate", price: "₹780", quadrant: "tl" as const, alt: "Tandoor-smoked cauliflower with herbs" },
  { name: "Wild Mushroom Kulcha", category: "From the hearth", price: "₹920", quadrant: "tr" as const, alt: "Wild mushroom kulcha with shaved truffle" },
  { name: "Kashmiri Lamb", category: "Signature", price: "₹1,650", quadrant: "bl" as const, alt: "Slow-cooked lamb with rich sauce" },
  { name: "Saffron Reverie", category: "Dessert", price: "₹690", quadrant: "br" as const, alt: "Saffron pistachio dessert with gold leaf" },
];

export function SignatureDishes() {
  return (
    <section className="section-shell bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading light eyebrow="A taste of SAVORA" title="Signature plates." description="Ingredients at their peak, transformed with fire, patience, and a respect for origin." />
          <Button variant="goldOutline" size="lg" className="self-start border-cream/30 text-cream sm:self-auto" onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>View full menu</Button>
        </div>
        <div className="mt-14 grid gap-px bg-cream/15 md:grid-cols-2 xl:grid-cols-4">
          {dishes.map((dish) => (
            <article key={dish.name} className="dish-card group relative min-h-[480px] overflow-hidden bg-ink">
              <SavoraImage grid="dish" quadrant={dish.quadrant} alt={dish.alt} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 sm:p-7">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-primary"><span>{dish.category}</span><span>{dish.price}</span></div>
                <h3 className="mt-3 font-display text-3xl">{dish.name}</h3>
                <p className="mt-3 max-h-0 overflow-hidden text-xs leading-6 text-cream-muted opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">A precise balance of smoke, texture, brightness, and aromatic spice.</p>
                <Button variant="ghost" size="sm" className="mt-3 px-0 text-primary opacity-100 hover:bg-transparent hover:text-cream md:opacity-0 md:group-hover:opacity-100" onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>View details <ArrowUpRight /></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}