"use client";

import { useEffect } from "react";

/** The Heat Scale Section — exactly from code.html */
export function HeatScaleSection() {
  useEffect(() => {
    const slider = document.getElementById("heat-slider") as HTMLInputElement | null;
    const visualizer = document.getElementById("visualizer");
    const label = document.getElementById("heat-label");
    const barsCount = 30;

    const updateVisualizer = (val: number) => {
      if (!visualizer || !label) return;
      visualizer.innerHTML = "";
      for (let i = 0; i < barsCount; i++) {
        const bar = document.createElement("div");
        bar.className = "heat-bar flex-1 bg-surface-container-highest";
        const baseHeight = (i / barsCount) * 100;
        const activeHeight = Math.max(
          10,
          baseHeight * (val / 10) + Math.sin(i * 0.5) * 10
        );
        bar.style.height = `${activeHeight}%`;
        if (i / barsCount <= val / 10) {
          bar.style.backgroundColor =
            i > 20 ? "#ffb3b0" : i > 10 ? "#b11226" : "#571f00";
        }
        visualizer.appendChild(bar);
      }
      const intensity = val > 8 ? "X-HOT" : val > 5 ? "HOT" : "MILD";
      label.innerText = `SIGI ${intensity} (${val})`;
    };

    if (slider) {
      slider.addEventListener("input", (e) =>
        updateVisualizer(Number((e.target as HTMLInputElement).value))
      );
      updateVisualizer(Number(slider.value));
    }
  }, []);

  return (
    <section
      id="heat-scale"
      className="relative py-section-gap px-margin-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">

        {/* Section Header */}
        <div className="mb-20 scroll-reveal">
          <span className="font-label-caps text-label-caps text-secondary">
            THE FREQUENCY OF FLAVOR
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-4">
            MEASURE THE HEAT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left: Description + Interactive Visualizer */}
          <div className="space-y-12">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Our heat scale isn&apos;t just about pain—it&apos;s about depth.
              Each level of SIGI is tuned to a specific culinary frequency, from
              a gentle hum to a roaring inferno.
            </p>

            <div className="heat-control-container p-8 border border-white/10 bg-surface-dim relative group">
              <input
                className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary mb-12"
                id="heat-slider"
                max="10"
                min="1"
                type="range"
                defaultValue="7"
              />
              {/* Visualizer bars injected by JS */}
              <div
                className="flex justify-between items-end h-40 gap-2"
                id="visualizer"
              />
              <div className="mt-8 flex justify-between font-label-caps text-label-caps">
                <span>MILD HUM</span>
                <span className="text-primary" id="heat-label">
                  SIGI HOT (7)
                </span>
                <span>ROARING FIRE</span>
              </div>
            </div>
          </div>

          {/* Right: Tamarind image */}
          <div className="relative aspect-video bg-surface-container-high overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              src="/sigi-images/Sigi Hot Chilli Paste with Tamarind.png"
              alt="Sigi Hot Chilli Paste with Tamarind"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
              <p className="font-headline-md text-headline-md">
                &quot;Every meal deserves a little fire.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
