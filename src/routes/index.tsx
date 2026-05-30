import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  MapPin,
  Shield,
  Truck,
} from "lucide-react";

import { Counter } from "@/components/site/Counter";
import { EuropeMap } from "@/components/site/EuropeMap";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why us", href: "#why" },
  { label: "Quote", href: "#quote" },
];

const services = [
  {
    icon: Truck,
    title: "FTL & groupage",
    body: "Full truckloads or consolidated pallets — scheduled departures from Vienna daily.",
  },
  {
    icon: Clock,
    title: "Time-critical",
    body: "Express lanes to Berlin, Milan, and Amsterdam with live ETA updates.",
  },
  {
    icon: Shield,
    title: "Insured cargo",
    body: "CMR coverage up to €500k per shipment. Temperature-controlled on request.",
  },
  {
    icon: MapPin,
    title: "Last-mile ready",
    body: "Liftgate, appointment windows, and POD photos at every delivery.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-offwhite/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="font-display text-xl font-extrabold uppercase tracking-wide text-navy-deep">
            Alpine <span className="text-amber-signal">Routes</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-steel transition-colors hover:text-navy-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="hidden bg-navy-deep px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-offwhite transition-colors hover:bg-navy md:inline-flex"
          >
            Get a quote
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-navy-deep text-offwhite">
        <div className="absolute inset-0 bg-grid-navy opacity-60" />
        <div className="absolute inset-0 bg-topo" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-signal">
              Vienna · European road freight
            </p>
            <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Move freight
              <br />
              <span className="text-amber-signal">across Europe</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-offwhite/80">
              Alpine Routes connects manufacturers and distributors to 11 EU hubs from our Vienna
              operations center — transparent pricing, no hidden surcharges.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-amber-signal px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-navy-deep transition-colors hover:bg-amber-signal/90"
              >
                Request a quote
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center gap-2 border border-offwhite/30 px-7 py-4 font-display text-sm font-bold uppercase tracking-wider transition-colors hover:border-amber-signal hover:text-amber-signal"
              >
                View coverage
              </a>
            </div>
          </div>
          <div className="text-amber-signal/90">
            <EuropeMap className="w-full max-w-md mx-auto lg:max-w-none" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {[
            { to: 2400, suffix: "+", label: "Shipments / year" },
            { to: 11, suffix: "", label: "EU hub cities" },
            { to: 98, suffix: "%", label: "On-time delivery" },
            { to: 48, suffix: "h", label: "Avg. hub-to-hub" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl font-black text-navy-deep md:text-5xl">
                <Counter to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-steel">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="divider-amber" />
          <h2 className="mt-4 font-display text-4xl font-bold uppercase text-navy-deep">
            Services built for EU lanes
          </h2>
          <p className="mt-4 text-steel">
            From Vienna we run scheduled departures west to Iberia and north to Scandinavia — one
            carrier, one invoice, one point of contact.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <Icon className="size-8 text-amber-signal" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-navy-deep">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="coverage" className="bg-muted bg-topo-light">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="divider-amber" />
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-navy-deep">
              Hub & spoke from Vienna
            </h2>
            <p className="mt-4 text-steel">
              Our network radiates from HQ with daily linehauls. Add Zagreb, Bucharest, or Athens as
              extensions on the same booking.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-navy-deep">
              {["Berlin", "Paris", "Amsterdam", "Madrid", "Lisbon", "Rome", "Copenhagen"].map(
                (city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-amber-signal" />
                    {city}
                  </li>
                ),
              )}
            </ul>
          </div>
          <EuropeMap className="w-full text-navy-deep" />
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <span className="divider-amber" />
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-navy-deep">
              Why Alpine Routes
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                "Single CMR and customs paperwork for multi-country moves",
                "Dedicated account manager — no call-center queue",
                "Carbon reporting per lane for your ESG disclosures",
              ].map((item) => (
                <li key={item} className="flex gap-4 text-steel">
                  <ArrowRight className="mt-0.5 size-5 shrink-0 text-amber-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 border border-border bg-navy-deep p-10 text-offwhite lg:order-2">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-amber-signal">
              Operations desk
            </p>
            <p className="mt-4 font-display text-3xl font-bold uppercase leading-tight">
              Mon–Fri 06:00–22:00 CET
            </p>
            <p className="mt-4 text-offwhite/75">
              +43 1 234 5678
              <br />
              ops@alpineroutes.eu
            </p>
            <p className="mt-8 text-sm text-offwhite/60">
              Praterstraße 1, 1020 Wien, Austria
            </p>
          </div>
        </div>
      </section>

      <section id="quote" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="divider-amber" />
              <h2 className="mt-4 font-display text-4xl font-bold uppercase text-navy-deep">
                Request a quote
              </h2>
              <p className="mt-4 text-steel">
                Tell us origin, destination, and cargo type. We respond within two business hours
                with lane pricing and earliest pickup.
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy-deep px-6 py-10 text-center text-sm text-offwhite/60">
        <p className="font-display font-bold uppercase tracking-wide text-offwhite">
          Alpine Routes
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Alpine Routes GmbH · Vienna, Austria</p>
      </footer>
    </div>
  );
}
