import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Flame, Maximize2, X } from 'lucide-react';
import { galleryImages } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Auto-highlight cycling through gallery cards every 3s
  useEffect(() => {
    if (selectedIndex !== null) return;
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedIndex]);

  return (
    <section
      ref={ref}
      id="galeria"
      className="relative overflow-hidden bg-gf-black-light py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="reveal section-pill mb-4">
              <Flame size={14} className="text-gf-orange" />
              <span>Galeria Granfinos</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              DIRETO DA NOSSA <span className="text-gradient-orange">CHAPA.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
            Fotos reais dos nossos lanches e porções preparados diariamente na Granfinos Burger.
          </p>
        </div>

        {/* Mathematically balanced 3x2 grid (6 unique real photos, uniform 4:3 framing) */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => {
            const isSpotlit = i === spotlightIndex;
            return (
              <button
                key={img.title}
                type="button"
                onClick={() => setSelectedIndex(i)}
                onMouseEnter={() => setSpotlightIndex(i)}
                className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} card-hover group relative block w-full overflow-hidden rounded-3xl border bg-gf-black text-left transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gf-orange ${
                  isSpotlit ? 'border-gf-orange/60' : 'border-white/10'
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gf-black">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className={`h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
                      isSpotlit ? 'scale-[1.03]' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gf-black/90 via-gf-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-gf-black/75 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    <Maximize2 size={15} />
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="font-display text-xl tracking-wide text-white">{img.title}</div>
                    <div className="mt-0.5 text-xs text-gray-300">{img.subtitle}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Prev/Next navigation */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-gf-black-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gf-black/80 text-white transition-colors hover:border-gf-orange hover:text-gf-orange"
              aria-label="Fechar imagem"
            >
              <X size={20} />
            </button>

            <div className="relative bg-black">
              <img
                src={galleryImages[selectedIndex].url}
                alt={galleryImages[selectedIndex].alt}
                className="max-h-[72vh] w-full object-contain"
              />
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + galleryImages.length) % galleryImages.length
                  )
                }
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gf-black/80 text-white transition-colors hover:border-gf-orange hover:text-gf-orange"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gf-black/80 text-white transition-colors hover:border-gf-orange hover:text-gf-orange"
                aria-label="Próxima foto"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
              <div>
                <div className="font-display text-2xl text-white">
                  {galleryImages[selectedIndex].title}
                </div>
                <p className="mt-0.5 text-sm text-gray-400">
                  {galleryImages[selectedIndex].subtitle}
                </p>
              </div>
              <span className="font-display text-sm text-gf-orange">
                {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
