"use client";

const LINKS = ["Privacy", "Terms", "Shipping", "Contact"];

/** Footer — exactly from code.html */
export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest text-secondary px-margin-desktop py-gutter gap-unit w-full flex flex-col md:flex-row justify-between items-center relative border-t border-white/5">
      {/* Logo */}
      <div className="font-headline-md text-headline-md text-primary">SIGI</div>

      {/* Links */}
      <div className="flex gap-8 my-8 md:my-0">
        {LINKS.map((link) => (
          <a
            key={link}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="font-label-caps text-label-caps text-on-surface-variant opacity-60 text-center md:text-right">
        © 2024 SIGI CHILLI PASTE. CRAFTED IN UGANDA.
      </div>
    </footer>
  );
}
