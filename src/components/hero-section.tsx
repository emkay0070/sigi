"use client";

/**
 * Hero Section — fully reconstructed.
 * Hero image covers the full width/height of the viewport.
 * Text + CTA overlaid on top. Ghost "FEEL THE FIRE" behind everything.
 */
export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ── Full-bleed Hero Image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sigi-images/Sigi Hot Chilli Paste Hero Shot.png"
        alt="Sigi Hot Chilli Paste — Feel The Fire"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 1,
        }}
      />

      {/* ── Dark gradient overlay so text is readable ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(36,12,12,0.35) 0%, rgba(36,12,12,0.15) 40%, rgba(36,12,12,0.75) 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Ghost Background Headline ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          pointerEvents: "none",
          padding: "0 80px",
        }}
      >
        <h1
          className="font-display-hero text-display-hero uppercase select-none text-center"
          style={{ color: "rgba(255,255,255,0.07)" }}
        >
          FEEL THE FIRE
        </h1>
      </div>

      {/* ── Bottom-left: Copy + CTA ── */}
      <div
        className="scroll-reveal"
        id="hero-reveal"
        style={{
          position: "absolute",
          bottom: "80px",
          left: "80px",
          zIndex: 10,
          maxWidth: "520px",
        }}
      >
        {/* Brand name */}
        <p
          className="font-label-caps"
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "#e3bebc",
            marginBottom: "16px",
            fontWeight: 700,
          }}
        >
          SIGI
        </p>

        {/* Main product headline — poster-scale */}
        <h2
          className="font-headline-lg text-headline-lg"
          style={{ marginBottom: "4px", lineHeight: "1.0" }}
        >
          HOT CHILLI
        </h2>
        <h2
          className="font-headline-lg text-headline-lg"
          style={{ marginBottom: "16px", lineHeight: "1.0" }}
        >
          PASTE
        </h2>

        {/* "with tamarind" — italic, smaller, personality */}
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            color: "#e3bebc",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          with tamarind.
        </p>

        {/* Personality line */}
        <p
          className="font-label-caps"
          style={{
            fontSize: "13px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "12px",
            fontWeight: 700,
          }}
        >
          PUT SOME HEAT ON IT.
        </p>

        {/* Product specs */}
        <p
          className="font-label-caps"
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "rgba(227,190,188,0.5)",
            marginBottom: "32px",
          }}
        >
          250G · ALL NATURAL INGREDIENTS · NO PRESERVATIVES ADDED
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-hover"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#ffb3b0",
            color: "#68000f",
            padding: "16px 40px",
            fontFamily: "var(--font-space-grotesk), monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          GET YOUR SIGI
          <span style={{ fontSize: "16px" }}>→</span>
        </a>
      </div>

    </section>
  );
}
