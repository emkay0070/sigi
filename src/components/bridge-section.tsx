"use client";

/**
 * Bridge section replacing the old Heat Scale.
 * Simple, bold, direct — transitions from product to food desire.
 */
export function BridgeSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Big bold question */}
        <h2
          className="font-headline-lg uppercase heading-reveal mb-16"
          style={{
            fontSize: "clamp(3rem, 8vw, 9rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          WHAT ARE<br />
          YOU PUTTING<br />
          SIGI ON?
        </h2>

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

