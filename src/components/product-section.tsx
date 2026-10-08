"use client";

import { useEffect, useRef } from "react";
import { useSplitText } from "@/hooks/use-split-text";

export function ProductSection() {
  const headingRef = useSplitText<HTMLHeadingElement>({ stagger: 35, duration: 800, once: true });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.pageYOffset;
      const sectionTop = sectionRef.current.offsetTop;
      const relativeScroll = scrolled - sectionTop;

      const bottle = sectionRef.current.querySelector('.product-bottle') as HTMLElement;
      if (bottle && relativeScroll > -window.innerHeight && relativeScroll < window.innerHeight) {
        bottle.style.transform = `translateY(${relativeScroll * -0.05}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0000] overflow-hidden">

      {/* Subtle red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">

        {/* Headline — measured, not enormous */}
        <h2
          ref={headingRef}
          className="font-headline-lg uppercase text-center mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          THIS IS SIGI.
        </h2>

        {/* Tagline underneath */}
        <p
          className="font-label-caps tracking-[0.2em] text-on-surface-variant text-xs text-center mb-16 scroll-reveal"
          style={{ opacity: 0.6 }}
        >
          BOLD. NATURAL. UNAPOLOGETICALLY UGANDAN.
        </p>

        {/* Bottle */}
        <div className="relative flex justify-center items-center scroll-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sigi-images/transparent.png"
            alt="Sigi Hot Chilli Paste Bottle"
            className="product-bottle w-auto max-h-[65vh] object-contain drop-shadow-[0_20px_60px_rgba(255,0,0,0.2)]"
          />
        </div>

        {/* Tiny processor credit */}
        <div className="text-center mt-10 scroll-reveal">
          <p className="font-label-caps tracking-[0.15em] text-on-surface-variant/30" style={{ fontSize: "9px" }}>
            PROCESSED &amp; PACKED BY SUEZ HEALTH PRODUCTS - KIREKA
          </p>
        </div>

      </div>
    </section>
  );
}
