import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Menu", "menu"],
  ["Experience", "experience"],
  ["Gallery", "gallery"],
  ["Reservations", "reservations"],
  ["Contact", "contact"],
] as const;

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      links.forEach(([, id]) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top < 180) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navigate = (id: string) => {
    setOpen(false);
    window.setTimeout(() => goTo(id), 80);
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 border-b transition-all duration-500", scrolled || open ? "border-cream/10 bg-ink/95 py-3 backdrop-blur-xl" : "border-transparent bg-transparent py-5")}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <button type="button" onClick={() => navigate("home")} className="min-w-0 text-left text-cream" aria-label="SAVORA home">
          <span className="block font-display text-2xl leading-none">SAVORA</span>
          <span className="mt-1 block text-[8px] uppercase tracking-[0.35em] text-primary">Pune · India</span>
        </button>
        <nav aria-label="Main navigation" className="hidden items-center justify-center gap-6 lg:flex">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => navigate(id)} className={cn("nav-link", active === id && "nav-link-active")}>
              {label}
            </button>
          ))}
        </nav>
        <Button variant="gold" size="lg" className="hidden lg:inline-flex" onClick={() => navigate("reservations")}>
          Reserve a table
        </Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)} className="text-cream hover:bg-cream/10 hover:text-primary lg:hidden">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <div className={cn("mobile-menu-panel fixed inset-x-0 top-[65px] z-50 h-[calc(100dvh-65px)] px-6 transition-all duration-300 lg:hidden", open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0")}>
        <nav className="flex h-full flex-col justify-center" aria-label="Mobile navigation">
          {links.map(([label, id], index) => (
            <button key={id} type="button" onClick={() => navigate(id)} className="border-b border-cream/10 py-4 text-left font-display text-3xl text-cream transition-colors hover:text-primary">
              <span className="mr-4 font-sans text-[10px] text-primary">0{index + 1}</span>{label}
            </button>
          ))}
          <Button variant="gold" size="lg" className="mt-8" onClick={() => navigate("reservations")}>Reserve a table</Button>
        </nav>
      </div>
    </header>
  );
}