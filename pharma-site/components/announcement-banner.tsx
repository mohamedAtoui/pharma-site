"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AnnouncementBanner() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-label="Distribution notice"
      className={`sticky top-16 z-40 bg-gradient-to-r from-[var(--handson-orange)] to-[var(--handson-orange-dark)] text-white shadow-sm transition-[padding] duration-200 ease-out ${
        compact ? "py-1" : "py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-center gap-2 sm:gap-4 font-medium tracking-tight transition-[font-size] duration-200 ease-out ${
            compact ? "text-[10px] sm:text-xs" : "text-[11px] sm:text-sm"
          }`}
        >
          <span className="flex items-center gap-2 min-w-0">
            <span
              className={`synapgen-dance shrink-0 inline-flex items-center justify-center bg-white rounded-md p-[2px] shadow-[0_2px_8px_rgba(0,0,0,0.18)] ring-1 ring-white/40 transition-[height] duration-200 ease-out ${
                compact ? "h-4 sm:h-5" : "h-5 sm:h-6"
              }`}
            >
              <Image
                src="/synapgen-product.png"
                alt="Synapgen"
                width={64}
                height={36}
                className="h-full w-auto object-contain"
                priority
              />
            </span>
            <span lang="fr" className="sm:hidden whitespace-nowrap">
              Disponible chez les grossistes pharmaceutiques.
            </span>
            <span lang="fr" className="hidden sm:inline">
              Synapgen est disponible chez les grossistes pharmaceutiques.
            </span>
          </span>
          <span
            aria-hidden
            className="hidden sm:inline-block w-px h-4 bg-white/40"
          />
          <span dir="rtl" lang="ar" className="hidden sm:inline">
            متوفر لدى موزعي الأدوية.
          </span>
        </div>
      </div>
    </aside>
  );
}
