import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/savora/About";
import { Chef } from "@/components/savora/Chef";
import { Contact } from "@/components/savora/Contact";
import { Experience } from "@/components/savora/Experience";
import { Footer } from "@/components/savora/Footer";
import { Gallery } from "@/components/savora/Gallery";
import { Hero } from "@/components/savora/Hero";
import { MenuSection } from "@/components/savora/MenuSection";
import { Navbar } from "@/components/savora/Navbar";
import { Reservation } from "@/components/savora/Reservation";
import { SignatureDishes } from "@/components/savora/SignatureDishes";
import { Testimonials } from "@/components/savora/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAVORA | Fine Dining in Pune" },
      { name: "description", content: "Experience modern Indian fine dining, seasonal menus, and warm hospitality at SAVORA in Pune." },
      { property: "og:title", content: "SAVORA | Fine Dining in Pune" },
      { property: "og:description", content: "Modern Indian fine dining shaped by memory, season, and craft." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <MenuSection />
      <Chef />
      <Experience />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
