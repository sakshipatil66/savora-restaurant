import { useState, type FormEvent } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";

type FormState = "idle" | "loading" | "success";

const fieldClass = "h-12 rounded-none border-foreground/20 bg-transparent px-4 focus-visible:ring-primary";

export function Reservation() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setError("Please complete all required fields before continuing."); form.reportValidity(); return; }
    setError(""); setState("loading"); window.setTimeout(() => setState("success"), 900);
  };
  return (
    <section id="reservations" className="section-shell bg-reservation">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12">
        <div><SectionHeading eyebrow="Reservations" title="Your table awaits." description="Join us for an evening shaped around warm hospitality and the best of the season." /><div className="mt-10 border-t border-foreground/15 pt-6 text-xs leading-6 text-muted-foreground"><p>For parties of eight or more, please contact our reservations team directly.</p><a href="tel:+912067454500" className="mt-4 inline-block font-medium text-foreground hover:text-primary">+91 20 6745 4500</a></div></div>
        <div className="border border-foreground/15 bg-background p-6 shadow-editorial sm:p-10">
          {state === "success" ? <div className="flex min-h-[470px] flex-col items-center justify-center text-center" aria-live="polite"><span className="grid h-16 w-16 place-items-center rounded-full border border-primary text-primary"><Check /></span><h3 className="mt-6 font-display text-4xl">Request received.</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">Your reservation request has been received. We look forward to welcoming you.</p><Button variant="ink" size="lg" className="mt-8" onClick={() => setState("idle")}>Make another request</Button></div> : <form onSubmit={submit} noValidate><div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Full name *<Input required name="name" autoComplete="name" className={fieldClass} placeholder="Your name" /></label><label className="form-label">Email *<Input required type="email" name="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" /></label><label className="form-label">Phone *<Input required type="tel" name="phone" autoComplete="tel" className={fieldClass} placeholder="+91" /></label><label className="form-label">Date *<Input required type="date" name="date" className={fieldClass} /></label><label className="form-label">Time *<select required name="time" className={`${fieldClass} w-full border px-4 text-sm`} defaultValue=""><option value="" disabled>Select time</option><option>12:30 PM</option><option>1:30 PM</option><option>7:00 PM</option><option>8:30 PM</option><option>10:00 PM</option></select></label><label className="form-label">Guests *<select required name="guests" className={`${fieldClass} w-full border px-4 text-sm`} defaultValue=""><option value="" disabled>Select guests</option>{[1,2,3,4,5,6,7,8].map((value) => <option key={value}>{value} {value === 1 ? "guest" : "guests"}</option>)}</select></label><label className="form-label sm:col-span-2">Occasion<select name="occasion" className={`${fieldClass} w-full border px-4 text-sm`}><option>Just dining</option><option>Birthday</option><option>Anniversary</option><option>Business dinner</option><option>Other celebration</option></select></label><label className="form-label sm:col-span-2">Special request<Textarea name="request" className="min-h-28 rounded-none border-foreground/20 p-4" placeholder="Dietary preferences, accessibility needs, or anything we should know" /></label></div>{error && <p className="mt-4 text-xs text-destructive" role="alert">{error}</p>}<Button variant="gold" size="lg" type="submit" disabled={state === "loading"} className="mt-7 w-full sm:w-auto">{state === "loading" ? <><LoaderCircle className="animate-spin" /> Sending request</> : "Reserve your table"}</Button></form>}
        </div>
      </div>
    </section>
  );
}