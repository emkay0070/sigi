"use client";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0000] text-on-surface-variant py-24 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <h3 className="font-headline-lg text-6xl text-primary uppercase tracking-tight">
              SIGI
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm opacity-80">Hot chilli paste with tamarind.</p>
              <p className="text-sm opacity-80">Rich, spicy &amp; naturally tangy.</p>
              <p className="text-sm opacity-60 mt-2">Processed &amp; packed by<br />Suez Health Products – Kireka.</p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-label-caps text-label-caps tracking-widest text-white mt-3">
              GET IN TOUCH
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/+256759743007" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors">
                WhatsApp: +256 759 743 007
              </a>
              <a href="https://wa.me/+256772998380" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors">
                WhatsApp: +256 772 998 380
              </a>
              <span className="text-sm opacity-60">Kampala, Uganda</span>
            </div>
          </div>

          {/* Column 3: Explore */}
          <div className="flex flex-col gap-6">
            <h4 className="font-label-caps text-label-caps tracking-widest text-white mt-3">
              EXPLORE
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors">Home</a>
              <a href="#ingredients" className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors">Ingredients</a>
              <a href="#food" className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors">The Sigi Way</a>
            </div>
          </div>

          {/* Column 4: Order */}
          <div className="flex flex-col gap-6">
            <h4 className="font-label-caps text-label-caps tracking-widest text-white mt-3">
              ORDER
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/+256759743007" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:opacity-80 transition-opacity">
                Get Your Sigi →
              </a>
              <span className="text-sm opacity-60">WhatsApp us to order</span>
              <span className="text-sm opacity-60">Delivery across Kampala</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="font-label-caps tracking-widest text-[10px] opacity-40">
            © {new Date().getFullYear()} SIGI CHILLI PASTE. CRAFTED IN UGANDA.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-label-caps tracking-widest text-[10px] opacity-40 hover:opacity-100 transition-opacity">PRIVACY</a>
            <a href="#" className="font-label-caps tracking-widest text-[10px] opacity-40 hover:opacity-100 transition-opacity">TERMS</a>
            <a href="#" className="font-label-caps tracking-widest text-[10px] opacity-40 hover:opacity-100 transition-opacity">SHIPPING</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
