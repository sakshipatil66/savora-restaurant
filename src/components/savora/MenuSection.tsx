import { useState } from "react";
import { ArrowUpRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SavoraImage } from "./SavoraImage";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const menu = {
  Starters: [
    ["Tandoor Cauliflower", "Charred florets, cultured cashew, chilli oil", "₹780", true, "tl"],
    ["Coastal Scallops", "Raw mango, coconut, kokum and curry leaf", "₹1,150", false, "tr"],
    ["Jackfruit Galouti", "Smoked papad, mint and saffron", "₹720", true, "bl"],
  ],
  "Main Course": [
    ["Kashmiri Lamb", "Morel, turnip purée and black cardamom jus", "₹1,650", false, "bl"],
    ["Malabar Sea Bass", "Saffron velouté, pickled fennel and greens", "₹1,750", false, "tl"],
    ["Forest Mushroom Khichdi", "Millet, truffle, aged parmesan", "₹1,050", true, "tr"],
  ],
  Specials: [
    ["Chef's Tasting Menu", "Seven courses celebrating the Western Ghats", "₹4,800", false, "tr"],
    ["Monsoon Thali", "A seasonal procession of regional favourites", "₹2,400", true, "tl"],
    ["Fire & Smoke", "Charred seasonal produce from the open kitchen", "₹1,350", true, "bl"],
  ],
  Desserts: [
    ["Saffron Reverie", "Pistachio, rose, honey and gold leaf", "₹690", true, "br"],
    ["Dark Chocolate Mysore Pak", "Cocoa nib, sea salt, coffee", "₹650", true, "tr"],
    ["Tender Coconut", "Jaggery, lime leaf and toasted rice", "₹590", true, "tl"],
  ],
  Beverages: [
    ["Kokum No. 7", "Kokum, grapefruit, tonic and smoked salt", "₹450", true, "br"],
    ["Mango Leaf Highball", "Mango leaf cordial, citrus and soda", "₹480", true, "tl"],
    ["Estate Coffee", "Single-origin coffee, jaggery and spice", "₹320", true, "tr"],
  ],
} as const;

type Category = keyof typeof menu;

export function MenuSection() {
  const [category, setCategory] = useState<Category>("Starters");
  return (
    <section id="menu" className="section-shell bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="The menu" title="A seasonal expression." description="Our menu changes with the land. What remains is an exacting approach to flavour, produce, and generous hospitality." />
        <div className="mt-10 flex gap-1 overflow-x-auto border-b border-border pb-px" role="tablist" aria-label="Menu categories">
          {(Object.keys(menu) as Category[]).map((item) => <button key={item} type="button" role="tab" aria-selected={category === item} onClick={() => setCategory(item)} className={cn("shrink-0 border-b-2 px-5 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors", category === item ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}>{item}</button>)}
        </div>
        <div key={category} className="animate-menu-in mt-10 grid gap-5 lg:grid-cols-3">
          {menu[category].map(([name, description, price, vegetarian, quadrant]) => (
            <article key={name} className="group grid grid-cols-[112px_minmax(0,1fr)] gap-5 border-b border-border pb-5 lg:grid-cols-1">
              <SavoraImage grid="dish" quadrant={quadrant} alt={name} className="aspect-square w-full lg:aspect-[4/3]" />
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-3"><h3 className="font-display text-xl leading-tight sm:text-2xl">{name}</h3><span className="shrink-0 text-xs text-primary">{price}</span></div>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
                <div className="mt-4 flex items-center justify-between"><span className={cn("flex items-center gap-1 text-[9px] uppercase tracking-wider", vegetarian ? "text-vegetarian" : "text-muted-foreground")}>{vegetarian ? <Leaf className="h-3 w-3" /> : <span className="h-2 w-2 rounded-full bg-primary" />}{vegetarian ? "Vegetarian" : "Non-vegetarian"}</span><Button variant="ghost" size="sm" className="h-7 px-0 text-[9px] uppercase tracking-wider hover:bg-transparent hover:text-primary" onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}>View details <ArrowUpRight /></Button></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}