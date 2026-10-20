import { useEffect, useState } from 'react';
import { Beef, Flame, Leaf, ShieldCheck } from 'lucide-react';
import { assetUrl } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const aboutSlides = [
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.41.jpeg'),
    caption: 'Duplo Blend & Barbecue da Casa',
    alt: 'Hambúrguer artesanal duplo Granfinos com cheddar e barbecue',
  },
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg'),
    caption: 'Gran Monster Angus 320g na Brasa',
    alt: 'Gran Monster Angus com duplo cheddar e bacon',
  },
  {
    url: assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg'),
    caption: 'Gran Egg com Ovo na Chapa & Bacon',
    alt: 'Gran Egg Angus com ovo, bacon e queijo derretido',
  },
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg'),
    caption: 'Ingredientes Frescos Selecionados',
    alt: 'Gran Salada Angus com alface e tomate fresco',
  },
];

const pillars = [
  {
    icon: Beef,
    title: 'Carne Alta & Ponto Certo',
    description:
      'Blend Angus 160g chapeado no fogo alto pra criar aquela casquinha dourada por fora e manter a carne suculenta por dentro.',
  },
  {
    icon: Leaf,
    title: 'Pão Selado & Queijo Escorrendo',
    description:
      'Pão brioche fofinho dourado na chapa com manteiga, queijo derretendo de verdade e fatias generosas de bacon crocante.',
  },
  {
    icon: Flame,
    title: 'Maionese Verde da Casa',
    description:
      'Nossa receita artesanal batida com alho assado e cheiro-verde fresco. É o molho que todo mundo pede pote extra.',
  },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % aboutSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative overflow-hidden bg-gf-black py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-gf-orange/[0.05] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Auto-Alternating Real Photography Composition */}
          <div className="reveal lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Main large auto-cycling photo */}
              <div className="col-span-12 overflow-hidden rounded-3xl border border-white/10 bg-gf-black-card">
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gf-black">
                  {aboutSlides.map((slide, idx) => {
                    const isActive = idx === activePhoto;
                    return (
                      <img
                        key={slide.url}
                        src={slide.url}
                        alt={slide.alt}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${
                          isActive
                            ? 'scale-100 opacity-100 z-10'
                            : 'scale-105 opacity-0 z-0 pointer-events-none'
                        }`}
                      />
                    );
                  })}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-gf-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-white/15 bg-gf-black/85 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      {aboutSlides[activePhoto].caption}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-gf-orange px-3.5 py-1.5 text-xs font-bold text-gf-black">
                      <ShieldCheck size={14} />
                      100% Artesanal
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom two balanced frames */}
              <div className="col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-gf-black-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg')}
                    alt="Gran Bacon Angus com queijo derretido"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>

              <div className="col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-gf-black-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg')}
                    alt="Porção de batata frita crocante Granfinos"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Story & Craft Pillars */}
          <div className="lg:col-span-6">
            <div className="reveal section-pill mb-4">
              <Flame size={14} className="text-gf-orange" />
              <span>Sobre a Granfinos</span>
            </div>

            <h2 className="reveal reveal-delay-1 font-display text-4xl uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              MAIS QUE UM HAMBÚRGUER.
              <br />
              <span className="text-gradient-orange">TRADIÇÃO NA CHAPA.</span>
            </h2>

            <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-gray-300 lg:text-lg">
              A Granfinos começou no Varjão com uma chapa quente e uma ideia bem clara: fazer
              hambúrguer como a gente gosta de comer. Carne moída no dia, queijo derretido escorrendo,
              bacon fatiado na hora e nossa maionese verde artesanal. Sem firula, só comida boa
              entregue quentinha na sua porta.
            </p>

            <div className="mt-8 space-y-4">
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${i + 2} card-hover flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-gf-black-light p-5`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
