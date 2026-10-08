"use client";

/**
 * Bridge section replacing the old Heat Scale.
 * Simple, bold, direct — transitions from product to food desire.
 */
export function BridgeSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Tagline */}
        <div className="mb-4 scroll-reveal">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest">
            THE EXPERIENCE
          </span>
        </div>

        {/* Big bold question */}
        <h2 className="font-headline-lg uppercase heading-reveal mb-6 text-5xl md:text-7xl">
          WHAT ARE<br />
          YOU PUTTING<br />
          SIGI ON?
        </h2>
        
        {/* Paragraph */}
        <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed scroll-reveal mb-16">
          A little heat can change the whole meal. Put Sigi on chicken, eggs, chips, a Rolex — whatever&apos;s calling for something extra.
        </p>

        {/* Full-width image, respecting layout padding */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm scroll-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sigi-images/bridge_food_spread.png"
            alt="Sigi on food"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
}

