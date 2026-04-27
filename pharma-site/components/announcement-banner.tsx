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
            <span lang="fr" className="sm:hidden whitespace-nowrap">
              Synapgen disponible chez les grossistes.
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
