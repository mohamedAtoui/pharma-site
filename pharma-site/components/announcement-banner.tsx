import Image from "next/image";

export default function AnnouncementBanner() {
  return (
    <aside
      aria-label="Distribution notice"
      className="sticky top-16 z-40 bg-gradient-to-r from-[var(--handson-orange)] to-[var(--handson-orange-dark)] text-white shadow-md py-2.5 sm:py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 font-semibold tracking-tight text-[12px] sm:text-[15px]">
          <span className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <span className="synapgen-slide shrink-0">
              <span className="synapgen-dance inline-flex items-center justify-center bg-white rounded-md p-[2px] shadow-[0_2px_8px_rgba(0,0,0,0.18)] ring-1 ring-white/40 h-6 sm:h-7">
                <Image
                  src="/synapgen-product.png"
                  alt="Synapgen"
                  width={64}
                  height={36}
                  className="h-full w-auto object-contain"
                  priority
                />
              </span>
            </span>

            {/* Mobile copy */}
            <span data-lang-only="fr" lang="fr" className="sm:hidden whitespace-nowrap">
              Synapgen disponible chez les{" "}
              <span className="text-yellow-200 font-bold">grossistes pharma</span>
              .
            </span>
            <span data-lang-only="en" lang="en" className="sm:hidden whitespace-nowrap">
              Synapgen available at pharmaceutical{" "}
              <span className="text-yellow-200 font-bold">wholesalers</span>.
            </span>

            {/* Desktop copy */}
            <span data-lang-only="fr" lang="fr" className="hidden sm:inline">
              Synapgen est disponible chez les{" "}
              <span className="text-yellow-200 font-bold">
                grossistes pharmaceutiques
              </span>
              .
            </span>
            <span data-lang-only="en" lang="en" className="hidden sm:inline">
              Synapgen is available at leading pharmaceutical{" "}
              <span className="text-yellow-200 font-bold">wholesalers</span>.
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
