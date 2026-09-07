import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/savora-hero.jpg";

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-ink text-cream md:min-h-screen">
      <img src={heroImage} alt="Seared fish plated with saffron sauce in the SAVORA dining room" width={1920} height={1200} fetchPriority="high" className="hero-image absolute inset-0 h-full w-full object-cover object-[66%_center]" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-center px-5 pb-20 pt-28 sm:px-8 md:min-h-screen lg:px-12">
        <div className="max-w-3xl animate-hero-in">
          <p className="section-kicker">Where flavor meets experience</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.88] text-cream sm:text-8xl lg:text-[8.75rem]">SAVORA</h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-cream-muted sm:text-lg">An elevated dining experience shaped by exceptional ingredients, thoughtful Indian cooking, and unforgettable moments.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" onClick={() => goTo("reservations")}>Reserve a table <ArrowDownRight /></Button>
            <Button variant="goldOutline" size="lg" className="border-cream/40 text-cream hover:border-primary" onClick={() => goTo("menu")}>Explore menu</Button>
          </div>
        </div>
        <div className="absolute bottom-7 left-5 right-5 grid grid-cols-2 gap-4 border-t border-cream/20 pt-5 text-[10px] uppercase tracking-[0.24em] text-cream-muted sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <span>Pune · Maharashtra</span>
          <span className="text-right">Open daily · 12 PM — 11 PM</span>
        </div>
      </div>
    </section>
  );
}