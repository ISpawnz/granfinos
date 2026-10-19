import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Flame, MapPin, Star, UtensilsCrossed } from 'lucide-react';
import { assetUrl, whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const heroShowcase = [
  {
    id: 'monster',
    name: 'Gran Monster Angus',
    detail: 'Duplo Angus 160g · Duplo Cheddar · Bacon',
    price: 'R$ 52,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg'),
  },
  {
    id: 'egg',
    name: 'Gran Egg Angus',
    detail: 'Angus 160g · Ovo na Chapa · Bacon & Queijo',
    price: 'R$ 43,00',
    image: assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg'),
  },
  {
    id: 'salada',
    name: 'Gran Salada Angus',
    detail: 'Angus 160g · Alface Fresca · Tomate · Bacon',
    price: 'R$ 43,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg'),
  },
  {
    id: 'bacon',
    name: 'Gran Bacon Angus',
    detail: 'Angus 160g · Queijo Derretido · Barbecue',
    price: 'R$ 40,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg'),
  },
];

const SLIDE_INTERVAL_MS = 3500;

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = heroShowcase[activeSlide];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroShowcase.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-gf-black pb-16 pt-28 lg:pb-24 lg:pt-32"
    >
      {/* Warm ambient depth */}
      <div className="pointer-events-none absolute inset-0 bg-radial-ember opacity-80" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-gf-orange/[0.08] blur-[130px]" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-[380px] w-[380px] rounded-full bg-gf-orange/[0.05] blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left column: Typography & Actions */}
        <div className="lg:col-span-7">
          <div className="reveal section-pill mb-6">
            <Flame size={14} className="text-gf-orange" />
            <span>Hamburgueria no Varjão · Brasília</span>
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-5xl uppercase leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-[5.4rem]">
            CARNE NA BRASA.
            <br />
            SABOR <span className="text-gradient-orange">GRANFINOS.</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Carne de verdade com 160g de Angus suculento no ponto certo, queijo escorrendo, bacon
            crocante e maionese verde da casa. Pede pelo WhatsApp que a gente chapeia na hora e
            entrega quentinho.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a href="#cardapio" className="btn-primary group">
              <span>VER CARDÁPIO COMPLETO</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <UtensilsCrossed size={17} />
              <span>PEDIR NO WHATSAPP</span>
            </a>
          </div>

          {/* Trust & Info Strip */}
          <div className="reveal reveal-delay-4 mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl text-white sm:text-3xl">4.9</span>
                <Star size={18} className="fill-gf-orange text-gf-orange" />
              </div>
              <p className="mt-1 text-xs text-gray-400">Avaliação dos clientes</p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <div className="flex items-center gap-1.5 font-display text-2xl text-white sm:text-3xl">
                <span>160G</span>
              </div>
              <p className="mt-1 text-xs text-gray-400">Blend Angus suculento</p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <div className="flex items-center gap-1.5 font-display text-2xl text-gf-orange sm:text-3xl">
                <span>19H–23H</span>
              </div>
              <p className="mt-1 text-xs text-gray-400">Aberto todos os dias</p>
            </div>
          </div>
        </div>

        {/* Right column: Auto-Alternating Burger Showcase */}
        <div
          className="reveal reveal-delay-2 lg:col-span-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Showcase Frame */}
            <div className="animate-hero-float relative overflow-hidden rounded-[2rem] border border-white/10 bg-gf-black-card shadow-2xl">
              <div className="relative aspect-[4/3.6] w-full overflow-hidden bg-gf-black-light">
                {heroShowcase.map((slide, idx) => {
                  const isActive = idx === activeSlide;
                  return (
                    <img
                      key={slide.id}
                      src={slide.image}
                      alt={slide.name}
                      className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${
                        isActive
                          ? 'scale-100 opacity-100 z-10'
                          : 'scale-105 opacity-0 z-0 pointer-events-none'
                      }`}
                    />
                  );
                })}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-gf-black via-gf-black/20 to-transparent" />

                {/* Top pill inside frame */}
                <div className="absolute left-4 top-4 z-30 flex items-center gap-2 rounded-full border border-white/15 bg-gf-black/80 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Flame size={14} className="text-gf-orange" />
                  <span>Feito na hora</span>
                </div>

                <div className="absolute right-4 top-4 z-30 rounded-full bg-gf-orange px-3.5 py-1.5 font-display text-sm tracking-wide text-gf-black transition-all duration-300">
                  {current.price}
                </div>

                {/* Slide indicator dots */}
                <div className="absolute bottom-3 left-6 z-30 flex items-center gap-1.5">
                  {heroShowcase.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Ver ${slide.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeSlide
                          ? 'w-7 bg-gf-orange'
                          : 'w-2 bg-white/35 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Caption bar */}
              <div className="flex items-center justify-between gap-4 border-t border-white/[0.06] bg-gf-black-card px-6 py-4">
                <div className="min-w-0">
                  <div className="truncate font-display text-xl tracking-wide text-white">
                    {current.name}
                  </div>
                  <div className="truncate text-xs text-gray-400">{current.detail}</div>
                </div>
                <a
                  href={whatsappLink(`Olá! Quero pedir o ${current.name} (${current.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-gf-orange/40 bg-gf-orange/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gf-orange-light transition-all hover:bg-gf-orange hover:text-gf-black"
                >
                  Pedir este
                </a>
              </div>
            </div>

            {/* Interactive Thumbnail Selector (2x2 or 4-col strip) */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {heroShowcase.map((item, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`group flex items-center gap-2 rounded-2xl border p-2 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-gf-orange bg-gf-orange/10'
                        : 'border-white/10 bg-gf-black-light/70 hover:border-white/25'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-10 w-10 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0">
                      <div
                        className={`truncate text-xs font-bold ${
                          isActive ? 'text-gf-orange-light' : 'text-white'
                        }`}
                      >
                        {item.name.replace('Gran ', '')}
                      </div>
                      <div className="text-[11px] text-gray-400">{item.price}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Location & Delivery info bar */}
            <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/[0.06] bg-gf-black-light/60 px-4 py-2.5 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gf-orange" />
                Varjão Q 7 Conj. A B C — Brasília
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-gf-orange" />
                Preparo médio: 20–30 min
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
