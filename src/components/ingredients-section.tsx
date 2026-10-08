"use client";

/** Ingredients Section — honest, visual, no invented claims. */
export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      className="relative py-32 px-6 md:px-12 bg-surface-dim overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main question */}
        <div className="mb-24">
          <h2
            className="font-headline-lg uppercase heading-reveal"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 7rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            WHAT&apos;S IN SIGI?
          </h2>
        </div>

        {/* Two ingredients with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

          {/* CHILLI */}
          <div className="flex flex-col scroll-reveal">
            <div className="relative h-56 flex items-center justify-start mb-8 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sigi-images/ingredient_tamarind.png"
                alt="Tamarind"
                className="h-48 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                style={{ filter: "drop-shadow(0 8px 24px rgba(255,100,0,0.3))" }}
              />
            </div>
            <p className="font-label-caps text-label-caps text-primary tracking-widest mb-3">CHILLI</p>
            <h3 className="font-headline-lg uppercase mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: 1 }}>
              THE HEAT
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The heat that wakes everything up.
            </p>
          </div>

          {/* TAMARIND */}
          <div className="flex flex-col scroll-reveal" style={{ transitionDelay: "150ms" }}>
            <div className="relative h-56 flex items-center justify-start mb-8 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sigi-images/ingredient_garlic.png"
                alt="Garlic"
                className="h-48 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                style={{ filter: "drop-shadow(0 8px 24px rgba(200,150,50,0.3))" }}
              />
            </div>
            <p className="font-label-caps text-label-caps text-secondary tracking-widest mb-3">TAMARIND</p>
            <h3 className="font-headline-lg uppercase mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: 1 }}>
              THE TANG
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The natural tang that makes it linger.
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-20 pt-12 border-t border-white/10 scroll-reveal">
          <p
            className="font-headline-lg uppercase"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 3rem)",
              color: "var(--color-primary)",
              lineHeight: 1.1,
            }}
          >
            REAL INGREDIENTS. REAL HEAT.
          </p>
        </div>

      </div>
    </section>
  );
}
