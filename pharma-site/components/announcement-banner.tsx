import Image from "next/image";

export default function AnnouncementBanner() {
  return (
    <aside
      aria-label="Distribution notice"
      className="bg-gradient-to-r from-[var(--handson-orange)] to-[var(--handson-orange-dark)] text-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-2 sm:py-2.5 text-[13px] sm:text-sm font-medium">
          <span className="flex items-center gap-2.5">
            <span className="synapgen-dance inline-flex items-center justify-center bg-white rounded-md p-[3px] shadow-[0_2px_8px_rgba(0,0,0,0.18)] ring-1 ring-white/40">
              <Image
                src="/synapgen-product.png"
                alt="Synapgen"
                width={64}
                height={36}
                className="h-5 w-auto sm:h-6 object-contain"
                priority
              />
            </span>
            <span lang="fr" className="tracking-tight">
              Synapgen est disponible chez les grossistes pharmaceutiques.
            </span>
          </span>
          <span
            aria-hidden
            className="hidden sm:inline-block w-px h-4 bg-white/40"
          />
          <span dir="rtl" lang="ar">
            متوفر لدى موزعي الأدوية.
          </span>
        </div>
      </div>
    </aside>
  );
}
