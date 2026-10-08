"use client";

import { useEffect } from "react";
import { AtmosphericShader } from "@/components/atmospheric-shader";
import { TopNavBar } from "@/components/top-nav-bar";
import { HeroSection } from "@/components/hero-section";
import { BridgeSection } from "@/components/bridge-section";
import { IngredientsSection } from "@/components/ingredients-section";
import { FoodSection } from "@/components/food-section";
import { ProductSection } from "@/components/product-section";
import { OrderSection } from "@/components/order-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  // Scroll Reveal — runs once on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".scroll-reveal, .heading-reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed fullscreen atmospheric fire shader */}
      <AtmosphericShader />

      {/* Page content (stacked above shader via z-index) */}
      <div className="relative z-10">
        <TopNavBar />
        <HeroSection />
        <BridgeSection />
        <IngredientsSection />
        <FoodSection />
        <ProductSection />
        <OrderSection />
        <SiteFooter />
      </div>
    </>
  );
}



