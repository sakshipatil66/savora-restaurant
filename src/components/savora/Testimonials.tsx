import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  ["Ananya Mehta", "The food has confidence without spectacle. Every plate felt considered, and the room made a Tuesday evening feel like an occasion."],
  ["Rohan & Mira", "Our anniversary dinner was beautifully paced. The chef's tasting menu moved from familiar memories to completely new flavours."],
  ["Devika Shah", "Rarely does a restaurant balance warmth and precision so naturally. SAVORA is already part of our Pune ritual."],
] as const;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active] ?? testimonials[0];
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 6000); return () => window.clearInterval(timer); }, []);
  const change = (direction: number) => setActive((value) => (value + direction + testimonials.length) % testimonials.length);
  return <section className="section-shell bg-cream"><div className="mx-auto max-w-5xl px-5 text-center sm:px-8"><Quote className="mx-auto h-9 w-9 text-primary" /><div key={active} className="animate-menu-in"><div className="mt-7 flex justify-center gap-1 text-primary" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-3 w-3 fill-current" />)}</div><blockquote className="mx-auto mt-8 max-w-4xl font-display text-3xl leading-tight sm:text-5xl">“{testimonial[1]}”</blockquote><p className="mt-7 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{testimonial[0]} · Pune</p></div><div className="mt-10 flex justify-center gap-3"><Button variant="goldOutline" size="icon" onClick={() => change(-1)} aria-label="Previous testimonial"><ChevronLeft /></Button><Button variant="goldOutline" size="icon" onClick={() => change(1)} aria-label="Next testimonial"><ChevronRight /></Button></div></div></section>;
}