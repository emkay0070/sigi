"use client";

const LOCATIONS = [
  { city: "KAMPALA CENTRAL", address: "Acacia Mall, Ground Floor" },
  { city: "ENTEBBE", address: "Victoria Mall, Supermarket A" },
];

/** Find Sigi Section — exactly from code.html */
export function FindSigiSection() {
  return (
    <section
      id="find-sigi"
      className="relative py-section-gap px-margin-desktop overflow-hidden"
    >
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-20">

        {/* Left: Copy + Location List */}
        <div className="md:w-1/3 space-y-8 scroll-reveal">
          <span className="font-label-caps text-label-caps text-secondary">
            LOCATE THE HEAT
          </span>
          <h2 className="font-headline-lg text-headline-lg">FIND SIGI</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            From the markets of Kampala to curated pantries across the globe.
            Locate your nearest spark.
          </p>
          <div className="space-y-4">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                className="p-6 border border-white/5 bg-surface-container-low hover:border-primary transition-colors cursor-pointer group"
              >
                <p className="font-label-caps text-label-caps text-primary">
                  {loc.city}
                </p>
                <p className="text-on-surface mt-2">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stylised Map */}
        <div className="md:w-2/3 h-[600px] bg-surface-container relative overflow-hidden scroll-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-40"
            src="/sigi-images/Sigi Hot Chilli Paste Still Life.png"
            alt="Kampala, Uganda"
          />
          {/* Stylised Map UI */}
          <div className="absolute inset-0 p-10 pointer-events-none">
            <div className="w-full h-full border border-white/10 relative">
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
                <div className="bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px] mt-2">
                  CURRENT BASE
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
