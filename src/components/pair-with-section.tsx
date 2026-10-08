"use client";

const PAIRS = [
  {
    src: "/sigi-images/Sigi Hot Chilli Paste Hero Shot.png",
    label: "01. POULTRY",
    title: "FLAME GRILLED",
    desc: "Sigi cuts through the fat of flame-grilled chicken with a citrus-forward tamarind punch.",
    delay: "0ms",
  },
  {
    src: "/sigi-images/Sigi Hot Chilli Paste Still Life.png",
    label: "02. STREET SOUL",
    title: "THE ROLEX",
    desc: "Elevate the Ugandan staple with a heat profile that honors its street origins but demands luxury.",
    delay: "200ms",
  },
  {
    src: "/sigi-images/Sigi Hot Chilli Paste Duo.png",
    label: "03. GLOBAL CLASSIC",
    title: "ARTISAN PIZZA",
    desc: "A drizzle of Sigi over hot cheese and honey creates a sweet-heat symphony that lingers.",
    delay: "400ms",
  },
];

/** Pair With Section — exactly from code.html */
export function PairWithSection() {
  return (
    <section
      id="pairing"
      className="relative py-section-gap px-margin-desktop bg-surface-dim"
    >
      <div className="max-w-container-max mx-auto">

        {/* Section Header */}
        <div className="flex justify-between items-end mb-20 scroll-reveal">
          <div>
            <span className="font-label-caps text-label-caps text-secondary">
              CULINARY COMPANIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg mt-4">
              THE PERFECT PAIR
            </h2>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-2 font-label-caps text-label-caps border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors">
              VIEW RECIPES{" "}
              <span className="material-symbols-outlined">north_east</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIRS.map((card) => (
            <div
              key={card.title}
              className="group relative aspect-[3/4] overflow-hidden bg-black scroll-reveal"
              style={{ transitionDelay: card.delay }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                src={card.src}
                alt={card.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="font-label-caps text-label-caps text-primary">
                  {card.label}
                </span>
                <h3 className="font-headline-md text-headline-md mt-2">
                  {card.title}
                </h3>
                <p className="mt-4 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
