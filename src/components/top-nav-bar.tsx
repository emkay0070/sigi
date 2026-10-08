"use client";

/** TopNavBar — exactly from code.html */
export function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-margin-desktop py-unit h-20">
      {/* Logo */}
      <div className="font-headline-md text-headline-md text-primary tracking-tighter">
        SIGI
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10">
        <a
          href="#heat-scale"
          className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-label-caps hover:text-secondary transition-colors duration-300"
        >
          Heat Scale
        </a>
        <a
          href="#ingredients"
          className="text-on-surface-variant font-medium font-label-caps text-label-caps hover:text-secondary transition-colors duration-300"
        >
          Ingredients
        </a>
        <a
          href="#pairing"
          className="text-on-surface-variant font-medium font-label-caps text-label-caps hover:text-secondary transition-colors duration-300"
        >
          Pairing
        </a>
        <a
          href="#recipes"
          className="text-on-surface-variant font-medium font-label-caps text-label-caps hover:text-secondary transition-colors duration-300"
        >
          Recipes
        </a>
        <a
          href="#find-sigi"
          className="text-on-surface-variant font-medium font-label-caps text-label-caps hover:text-secondary transition-colors duration-300"
        >
          Find Sigi
        </a>
      </div>

      {/* CTA Button */}
      <button className="bg-primary-container text-on-primary-container px-6 py-2 font-label-caps text-label-caps rounded-none transition-all hover:bg-secondary hover:text-on-secondary scale-100 active:scale-95 duration-200">
        Taste the Fire
      </button>
    </nav>
  );
}
