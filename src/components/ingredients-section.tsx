"use client";

/** Ingredients Section — Pure, elegant typography matching the editorial layout */
export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      className="relative py-32 px-6 md:px-12 bg-surface-dim overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">

        {/* Left: Heading */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-4 scroll-reveal">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest">
                THE ANATOMY
              </span>
            </div>
            <h2 className="font-headline-lg uppercase heading-reveal text-5xl md:text-7xl mb-12">
              WHAT&apos;S IN<br />SIGI?
            </h2>
          </div>
          
          <div className="hidden md:block scroll-reveal">
            <p
              className="font-headline-lg uppercase"
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                color: "var(--color-primary)",
                lineHeight: 1.1,
              }}
            >
              REAL INGREDIENTS.<br />REAL HEAT.
            </p>
          </div>
        </div>

        {/* Right: Ingredients List */}
        <div className="w-full md:w-1/2 flex flex-col gap-16 pt-4">

          {/* CHILLI */}
          <div className="scroll-reveal border-t border-white/10 pt-8">
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-headline-md uppercase text-4xl md:text-5xl tracking-wide">CHILLI</h3>
              <span className="font-label-caps text-primary tracking-widest text-xs">HEAT</span>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
              The heat that wakes everything up.
            </p>
          </div>

          {/* TAMARIND */}
          <div className="scroll-reveal border-t border-white/10 pt-8" style={{ transitionDelay: "100ms" }}>
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-headline-md uppercase text-4xl md:text-5xl tracking-wide">TAMARIND</h3>
              <span className="font-label-caps text-secondary tracking-widest text-xs">TANG</span>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
              The natural tang that makes it linger.
            </p>
          </div>

          {/* GARLIC */}
          <div className="scroll-reveal border-t border-white/10 pt-8" style={{ transitionDelay: "200ms" }}>
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-headline-md uppercase text-4xl md:text-5xl tracking-wide">GARLIC</h3>
              <span className="font-label-caps text-white/50 tracking-widest text-xs">DEPTH</span>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
              The foundational flavor that grounds the fire.
            </p>
          </div>

        </div>

        {/* Mobile-only Bottom line */}
        <div className="md:hidden scroll-reveal pt-12 mt-12 border-t border-white/10">
          <p
            className="font-headline-lg uppercase"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--color-primary)",
              lineHeight: 1.1,
            }}
          >
            REAL INGREDIENTS.<br />REAL HEAT.
          </p>
        </div>

      </div>
    </section>
  );
}
