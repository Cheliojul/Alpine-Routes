import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Truck, Route as RouteIcon, PackageCheck, MapPin, ShieldCheck, Radar, Building2, Phone, Mail, Navigation, Linkedin, Instagram, Twitter } from "lucide-react";
import { Toaster } from "sonner";
import { Counter } from "@/components/site/Counter";
import { EuropeMap } from "@/components/site/EuropeMap";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TransAlp Logistics — Fast. Reliable. Pan-European." },
      { name: "description", content: "Light freight delivery across the EU. Based in Vienna, Austria — operating sub-3.5t commercial vehicles with 24/7 support." },
      { property: "og:title", content: "TransAlp Logistics — Pan-European light freight" },
      { property: "og:description", content: "Light freight delivery across the EU. Based in Vienna, Austria." },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-offwhite">
          <div className="size-9 grid place-items-center bg-amber-signal text-navy-deep font-display font-black text-lg">TA</div>
          <div className="leading-none">
            <div className="font-display font-bold tracking-wide text-lg">TRANSALP</div>
            <div className="text-[10px] tracking-[0.25em] text-offwhite/60 uppercase">Logistics · AT</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-offwhite/80 font-medium">
          <a href="#services" className="hover:text-amber-signal transition">Services</a>
          <a href="#why" className="hover:text-amber-signal transition">Why us</a>
          <a href="#coverage" className="hover:text-amber-signal transition">Coverage</a>
          <a href="#contact" className="hover:text-amber-signal transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-amber-signal text-navy-deep px-5 py-2.5 font-display font-bold uppercase tracking-wider text-xs hover:bg-amber-signal/90 transition">
          Get a quote <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-navy-deep text-offwhite overflow-hidden">
      <div className="absolute inset-0 bg-grid-navy opacity-60" />
      <div className="absolute inset-0 bg-topo opacity-80" />
      {/* corner ticks */}
      <div className="absolute top-24 left-6 lg:left-10 text-[10px] font-display tracking-[0.3em] text-offwhite/40">
        N 48°12′ · E 16°22′
      </div>
      <div className="absolute top-24 right-6 lg:right-10 text-[10px] font-display tracking-[0.3em] text-offwhite/40">
        TA—OPS / 24·7
      </div>

      <Nav />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-32 lg:pt-56 lg:pb-44">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 text-amber-signal">
            <span className="divider-amber" />
            <span className="text-xs font-display font-semibold tracking-[0.3em] uppercase">Vienna · Austria · Est. 2014</span>
          </div>
          <h1 className="font-display font-black uppercase leading-[0.92] text-[clamp(3.5rem,9vw,8rem)]">
            Fast. Reliable.<br />
            <span className="text-amber-signal">Pan-European.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-offwhite/75 leading-relaxed">
          Light freight delivery across the EU — based in Austria, delivering everywhere. Dedicated express transport, transparent pricing, and on-time delivery for every shipment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-amber-signal text-navy-deep px-7 py-4 font-display font-bold uppercase tracking-wider text-sm hover:bg-amber-signal/90 transition">
              Get a Quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex items-center gap-3 border border-offwhite/30 px-7 py-4 font-display font-bold uppercase tracking-wider text-sm hover:border-amber-signal hover:text-amber-signal transition">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: 12, suffix: "+", label: "EU Countries" },
    { value: 500, suffix: "+", label: "Deliveries / Month" },
    { value: 3.5, suffix: "t", label: "Max Vehicle Class", float: true },
    { value: 24, suffix: "/7", label: "Operations Support" },
  ];
  return (
    <section className="bg-amber-signal text-navy-deep border-y border-navy-deep/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-navy-deep/15">
        {items.map((it, i) => (
          <div key={i} className="px-2 lg:px-8 py-10 lg:py-14 first:pl-0 last:pr-0">
            <div className="font-display font-black text-5xl lg:text-6xl leading-none tabular-nums">
              {it.float ? <>&lt;{it.value}{it.suffix}</> : <Counter to={it.value} suffix={it.suffix} />}
            </div>
            <div className="mt-3 text-[11px] lg:text-xs font-display font-semibold tracking-[0.22em] uppercase text-navy-deep/75">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 text-amber-signal mb-5">
        <span className="divider-amber" />
        <span className="text-xs font-display font-semibold tracking-[0.3em] uppercase">{kicker}</span>
      </div>
      <h2 className="font-display font-black uppercase text-5xl lg:text-6xl leading-[0.95] max-w-3xl">
        {title}
      </h2>
    </div>
  );
}

function Services() {
  const services = [
    { icon: Truck, title: "Express Delivery", desc: "Time-critical freight moved on dedicated vans — Vienna to anywhere in the EU, often same-day." },
    { icon: RouteIcon, title: "Regular Routes", desc: "Scheduled weekly corridors between Austria, DACH, Benelux and Iberia for predictable supply chains." },
    { icon: PackageCheck, title: "Last-Mile Logistics", desc: "Final-mile delivery into city centres with sub-3.5t vehicles that skip restricted-zone permits." },
  ];
  return (
    <section id="services" className="bg-offwhite bg-topo-light py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel kicker="01 · Services" title="Three ways we move your freight." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article key={title} className="group relative bg-card border border-border p-8 hover:border-amber-signal transition-colors">
              <div className="absolute top-6 right-6 font-display text-xs tracking-[0.2em] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="size-14 grid place-items-center bg-navy-deep text-amber-signal mb-8 group-hover:bg-amber-signal group-hover:text-navy-deep transition-colors">
                <Icon className="size-7" strokeWidth={1.6} />
              </div>
              <h3 className="font-display font-bold uppercase text-2xl tracking-wide">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-8 h-px bg-border group-hover:bg-amber-signal transition-colors" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: MapPin, title: "EU-wide coverage", desc: "From Lisbon to Bucharest — one operator, one invoice, one accountable team." },
    { icon: Truck, title: "Sub-3.5t fleet", desc: "Lighter vehicles mean no special permits, faster border crossings, and city-centre access." },
    { icon: Building2, title: "Austria-based operations", desc: "Central European HQ in Vienna with native German and English dispatchers around the clock." },
    { icon: Radar, title: "Real-time tracking", desc: "Live GPS on every van — share a tracking link with your customer in a single click." },
  ];
  return (
    <section id="why" className="bg-navy-deep text-offwhite py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-topo opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="flex items-center gap-3 text-amber-signal mb-5">
            <span className="divider-amber" />
            <span className="text-xs font-display font-semibold tracking-[0.3em] uppercase">02 · Why TransAlp</span>
          </div>
          <h2 className="font-display font-black uppercase text-5xl lg:text-6xl leading-[0.95]">
            Built for the<br /><span className="text-amber-signal">long haul.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="size-5 text-amber-signal" strokeWidth={1.8} />
                  <h3 className="font-display font-bold uppercase tracking-wide text-lg">{title}</h3>
                </div>
                <p className="text-sm text-offwhite/70 leading-relaxed pl-8">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[11/10] text-offwhite/85">
          <div className="absolute inset-0 border border-offwhite/10" />
          <div className="absolute top-3 left-3 text-[10px] font-display tracking-[0.3em] text-offwhite/40">
            FIG · 01 / EU NETWORK
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-display tracking-[0.3em] text-offwhite/40">
            VIE → ALL
          </div>
          <EuropeMap className="absolute inset-0 w-full h-full p-8" />
        </div>
      </div>
    </section>
  );
}

function CoverageBanner() {
  return (
    <section id="coverage" className="relative bg-amber-signal text-navy-deep py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--navy-deep) 1.2px, transparent 1.6px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <h2 className="font-display font-black uppercase text-5xl lg:text-7xl leading-[0.9] max-w-4xl">
          From Vienna to Lisbon —<br />we cover it all.
        </h2>
        <a href="#contact" className="group inline-flex items-center gap-3 bg-navy-deep text-amber-signal px-7 py-4 font-display font-bold uppercase tracking-wider text-sm hover:bg-navy-deep/90 transition self-start lg:self-end">
          Plan your route <Navigation className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 text-amber-signal mb-5">
            <span className="divider-amber" />
            <span className="text-xs font-display font-semibold tracking-[0.3em] uppercase">03 · Get in touch</span>
          </div>
          <h2 className="font-display font-black uppercase text-5xl lg:text-6xl leading-[0.95]">
            Request a quote.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Send us the route and cargo details. A dispatcher will respond within 2 business hours with a fixed all-inclusive price.
          </p>

          <div className="mt-10 space-y-5 border-l-2 border-amber-signal pl-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="size-5 text-amber-signal mt-0.5" strokeWidth={1.8} />
              <div>
                <div className="font-display font-bold uppercase tracking-wide text-sm">Headquarters</div>
                <div className="text-sm text-muted-foreground">Mariahilfer Straße 88, 1070 Vienna, Austria</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-amber-signal mt-0.5" strokeWidth={1.8} />
              <div>
                <div className="font-display font-bold uppercase tracking-wide text-sm">Dispatch · 24/7</div>
                <div className="text-sm text-muted-foreground">+43 1 890 22 14</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="size-5 text-amber-signal mt-0.5" strokeWidth={1.8} />
              <div>
                <div className="font-display font-bold uppercase tracking-wide text-sm">Email</div>
                <div className="text-sm text-muted-foreground">ops@transalp-logistics.eu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-card border border-border p-8 lg:p-12">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-offwhite/80 relative">
      <div className="absolute inset-0 bg-topo opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-9 grid place-items-center bg-amber-signal text-navy-deep font-display font-black text-lg">TA</div>
            <div className="leading-none">
              <div className="font-display font-bold tracking-wide text-lg text-offwhite">TRANSALP LOGISTICS</div>
              <div className="text-[10px] tracking-[0.25em] text-offwhite/50 uppercase">Vienna · Austria</div>
            </div>
          </div>
          <p className="text-sm max-w-sm leading-relaxed">
            Pan-European light freight, run with Austrian precision. Sub-3.5t vans, 12+ countries, one accountable team.
          </p>
        </div>
        <div>
          <div className="font-display font-bold uppercase tracking-[0.2em] text-xs text-amber-signal mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-amber-signal transition">Services</a></li>
            <li><a href="#why" className="hover:text-amber-signal transition">Why us</a></li>
            <li><a href="#coverage" className="hover:text-amber-signal transition">Coverage</a></li>
            <li><a href="#contact" className="hover:text-amber-signal transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold uppercase tracking-[0.2em] text-xs text-amber-signal mb-4">Follow</div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="size-9 grid place-items-center border border-offwhite/20 hover:border-amber-signal hover:text-amber-signal transition"><Linkedin className="size-4" /></a>
            <a href="#" aria-label="Instagram" className="size-9 grid place-items-center border border-offwhite/20 hover:border-amber-signal hover:text-amber-signal transition"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Twitter" className="size-9 grid place-items-center border border-offwhite/20 hover:border-amber-signal hover:text-amber-signal transition"><Twitter className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-offwhite/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-offwhite/50">
          <div>© {new Date().getFullYear()} TransAlp Logistics GmbH · FN 123456a · Vienna Commercial Court</div>
          <div className="font-display tracking-[0.25em] uppercase">Built in Austria · Delivered everywhere</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <CoverageBanner />
      <Contact />
      <Footer />
    </main>
  );
}