"use client";

import { useEffect, useRef } from "react";

/**
 * useSplitText
 *
 * Splits a heading element into individual characters using SplitType,
 * then animates them in when the element enters the viewport and out
 * when it leaves — using pure IntersectionObserver (no GSAP needed).
 *
 * Usage:
 *   const ref = useSplitText<HTMLHeadingElement>();
 *   <h2 ref={ref}>YOUR TEXT</h2>
 */
export function useSplitText<T extends HTMLElement>(
  options: {
    type?: "chars" | "words" | "lines";
    stagger?: number; // ms between each char
    duration?: number; // ms per char animation
    threshold?: number; // IO threshold
    once?: boolean; // animate only once (default false = re-animates on re-enter)
  } = {}
) {
  const ref = useRef<T>(null);
  const splitRef = useRef<import("split-type").default | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const {
    type = "chars",
    stagger = 30,
    duration = 600,
    threshold = 0.2,
    once = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver;

    async function init() {
      const SplitType = (await import("split-type")).default;
      splitRef.current = new SplitType(el as HTMLElement, { types: type });

      const units = (
        type === "chars"
          ? splitRef.current.chars
          : type === "words"
          ? splitRef.current.words
          : splitRef.current.lines
      ) as HTMLElement[];

      if (!units || units.length === 0) return;

      // Set each unit to its hidden start state
      units.forEach((u) => {
        u.style.display = "inline-block";
        u.style.opacity = "0";
        u.style.transform = "translateY(40px)";
        u.style.filter = "blur(4px)";
        u.style.transition = `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1),
                              transform ${duration}ms cubic-bezier(0.16,1,0.3,1),
                              filter ${duration * 0.7}ms ease`;
        u.style.willChange = "transform, opacity";
      });

      function animateIn() {
        units.forEach((u, i) => {
          setTimeout(() => {
            u.style.opacity = "1";
            u.style.transform = "translateY(0)";
            u.style.filter = "blur(0px)";
          }, i * stagger);
        });
      }

      function animateOut() {
        units.forEach((u, i) => {
          const reverseIdx = units.length - 1 - i;
          setTimeout(() => {
            u.style.opacity = "0";
            u.style.transform = "translateY(-20px)";
            u.style.filter = "blur(4px)";
          }, reverseIdx * (stagger * 0.5));
        });
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateIn();
              if (once) observer.disconnect();
            } else {
              if (!once) animateOut();
            }
          });
        },
        { threshold }
      );

      observer.observe(el);
    }

    init();

    return () => {
      observer?.disconnect();
      splitRef.current?.revert();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [type, stagger, duration, threshold, once]);

  return ref;
}
