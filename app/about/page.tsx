import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Brew & Co",
  description:
    "Meet James and Priya Caldwell — the couple who left corporate London to open the coffee shop they always wished existed.",
};

const VALUES = [
  {
    title: "Sourced with Intention",
    description:
      "Every bean we use is traceable to its farm. We partner directly with cooperatives in Ethiopia, Colombia and Guatemala — paying fair prices that reach the farmers, not just the middlemen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Community First",
    description:
      "We host free weekly events — open mic nights, coffee tastings, neighbourhood meetups. The shop is a place to belong, not just a place to buy coffee.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "No Compromise on Quality",
    description:
      "Our baristas train for months before pulling their first shot on the floor. Every drink is made to order. We don't have a hot-hold station — if it's not fresh, it doesn't go out.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sustainability in Every Cup",
    description:
      "All our packaging is compostable. Milk alternatives come at no extra charge. We donate unsold food at close of business to a local food bank every day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a7 7 0 1 0 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 2l-10 10M22 2h-6M22 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bg">
      {/* ── Hero banner ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg"
          alt="Inside the Brew & Co café — warm lighting and wooden tables"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(30,14,2,0.55)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-12">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-accent mb-2">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-cream">
            Made with Love,<br />Served with Heart
          </h1>
        </div>
      </section>

      {/* ── Founders story ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="James and Priya Caldwell behind the counter at Brew & Co"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              quality={80}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
                The Founders
              </span>
              <h2 className="font-display text-4xl font-extrabold leading-tight text-text">
                James &amp; Priya Caldwell
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-body text-base leading-relaxed text-text-body">
              <p>
                In 2019, James was a product manager burning through his third
                flat white of the day at a sterile chain café. Priya, a pastry
                chef who had just left a Michelin-starred kitchen in Mayfair,
                was baking croissants at 4am for a wholesale account that barely
                covered costs. One evening over a bottle of natural wine, they
                made a decision that terrified them both: open the coffee shop
                they always wished existed.
              </p>
              <p>
                They spent six months tasting beans, visiting roasters, and
                eating their way through the best independent cafés in London,
                Melbourne and Copenhagen. Priya refined her laminated dough
                recipe until James declared the almond croissant &ldquo;probably
                the best thing I&apos;ve ever eaten.&rdquo; They found a narrow
                Victorian shopfront in Bermondsey and signed the lease on a
                Tuesday morning.
              </p>
              <p>
                Brew &amp; Co opened on a rainy March morning in 2020 — four
                days before lockdown. They pivoted to takeaway within 48 hours,
                delivered pastry boxes on bicycles, and kept the neighbourhood
                fed through the worst of it. When restrictions lifted, the queue
                outside was longer than ever. The community had found them.
              </p>
              <p>
                Today James still pulls shots alongside the team every morning,
                and Priya bakes fresh every day before 6am. They haven&apos;t
                taken a Saturday off in five years. They wouldn&apos;t change a
                thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-3 max-w-xl">
            <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-text">
              Our Values
            </h2>
            <p className="font-body text-base text-text-body">
              These aren&apos;t wall decorations — they&apos;re the decisions
              we make every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="rounded-xl bg-bg p-6 shadow-warm-sm flex flex-col gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {val.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-extrabold text-text">
                    {val.title}
                  </h3>
                  <p className="font-body text-base text-text-body leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit us CTA ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-80">
            <Image
              src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
              alt="Inviting café exterior on a sunny day"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              quality={75}
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(30,14,2,0.65)" }}
              aria-hidden="true"
            />
            <div className="relative h-full flex flex-col items-center justify-center gap-6 text-center px-6">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-cream leading-tight">
                Come Find Us
              </h2>
              <p className="font-body text-base text-cream/80 max-w-md">
                Monday–Friday 7am–6pm · Saturday &amp; Sunday 8am–5pm<br />
                14 Maltby Street, Bermondsey, London SE1 3PA
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-body font-medium text-cream hover:bg-accent-dark active:scale-95 transition-all"
                >
                  Browse the Menu
                </Link>
                <a
                  href="https://maps.google.com/?q=14+Maltby+Street+London+SE1+3PA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-base font-body font-medium text-cream hover:bg-cream/10 active:scale-95 transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
