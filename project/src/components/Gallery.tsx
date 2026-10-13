import { galleryImages } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="galeria" className="relative overflow-hidden bg-gf-black-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
            GALERIA
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            A EXPERIÊNCIA <span className="text-gradient-orange">GRANFINOS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-400">
            Um pouquinho do nosso universo em cada foto. Veja por que a Granfinos é única.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)} group relative overflow-hidden rounded-2xl border border-white/5 ${
                img.span === 'both'
                  ? 'col-span-2 row-span-2'
                  : img.span === 'col'
                  ? 'col-span-2'
                  : img.span === 'row'
                  ? 'row-span-2'
                  : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Orange border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-gf-orange/0 transition-all duration-400 group-hover:ring-gf-orange/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
