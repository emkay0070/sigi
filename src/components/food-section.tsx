"use client";

import { useEffect, useRef } from "react";

export function FoodSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const images = sectionRef.current.querySelectorAll('.parallax-img');
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        // Calculate how far the image is from the center of the viewport
        const centerOffset = rect.top - window.innerHeight / 2;
        // Apply a subtle parallax translation
        (img as HTMLElement).style.transform = `translateY(${centerOffset * -0.15}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-background z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col gap-40 pt-16">
          
          {/* ITEM 01: Side by Side (Words Left, Image Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 scroll-reveal">
            <div className="w-full md:w-2/5 flex flex-col justify-center order-2 md:order-1">
              <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
                01 / CHICKEN
              </span>
              <h3 className="font-headline-md text-4xl md:text-5xl mb-6 uppercase">
                CHARRED CHICKEN
              </h3>
              <p className="text-lg text-on-surface-variant opacity-80 leading-relaxed">
                A little fire goes a long way.
              </p>
            </div>
            <div className="w-full md:w-3/5 aspect-[4/3] overflow-hidden bg-black relative rounded-sm shadow-2xl order-1 md:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sigi-images/food_chicken.png"
                alt="Charred Chicken"
                className="parallax-img w-full h-[130%] object-cover absolute top-[-15%] left-0 opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>

          {/* ITEM 02: Full Width Middle (Heading Top-Left, Image Full, Desc Bottom-Right) */}
          <div className="flex flex-col w-full scroll-reveal">
            {/* Top Left Heading */}
            <div className="flex justify-start mb-8">
              <div>
                <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4">
                  02 / EGGS
                </span>
                <h3 className="font-headline-md text-4xl md:text-6xl uppercase">
                  MORNING EGGS
                </h3>
              </div>
            </div>

            {/* Full width rounded image */}
            <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden bg-black relative rounded-[2rem] shadow-2xl mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/sigi-images/food_eggs.png" 
                alt="Morning Eggs"
                className="parallax-img w-full h-[140%] object-cover absolute top-[-20%] left-0 opacity-90 transition-opacity hover:opacity-100" 
              />
            </div>

            {/* Bottom Right Description */}
            <div className="flex justify-end">
              <p className="text-xl text-on-surface-variant opacity-80 leading-relaxed max-w-lg text-right">
                Same eggs. Different mood.
              </p>
            </div>
          </div>

          {/* ITEM 03: Side by Side (Image Left, Words Right) */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 scroll-reveal">
            <div className="w-full md:w-3/5 aspect-[4/3] overflow-hidden bg-black relative rounded-sm shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sigi-images/food_chips.png"
                alt="Rolex & Chips"
                className="parallax-img w-full h-[130%] object-cover absolute top-[-15%] left-0 opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4">
                03 / STREET FOOD
              </span>
              <h3 className="font-headline-md text-4xl md:text-5xl mb-6 uppercase">
                ROLEX + CHIPS
              </h3>
              <p className="text-lg text-on-surface-variant opacity-80 leading-relaxed">
                Because some things just need a little heat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
