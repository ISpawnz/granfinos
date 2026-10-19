import { ArrowRight, Beef, CircleDot, Flame, GlassWater, Plus } from 'lucide-react';
import { assetUrl, COMBO_IMAGE_URL, whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ComboHighlightProps {
  onAddToCart?: (item: { id: string; name: string; price: number; priceFormatted: string }) => void;
}

export default function ComboHighlight({ onAddToCart }: ComboHighlightProps) {
  const ref = useScrollReveal<HTMLElement>();

  const comboItem = {
    id: 'combo-granfinos-classic',
    name: 'COMBO GRANFINOS COMPLETO (Burger + Batata Loaded + Bebida)',
    price: 58,
    priceFormatted: '58,00',
  };

  return (
    <section
      ref={ref}
      id="combo"
      className="relative overflow-hidden bg-gf-black py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gf-orange/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gf-black-light p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Text + items */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="reveal section-pill mb-4">
                <Flame size={14} className="text-gf-orange" />
                <span>Combo Granfinos</span>
              </div>

              <h2 className="reveal reveal-delay-1 font-display text-4xl uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
                EXPERIÊNCIA COMPLETA <span className="text-gradient-orange">EM DOBRO.</span>
              </h2>

              <p className="reveal reveal-delay-2 mt-4 max-w-lg text-base leading-relaxed text-gray-300">
                O burger mais pedido da casa com a nossa batata afogada no cheddar e bacon, mais uma
                bebida bem gelada. Mata a fome e você ainda economiza R$ 11 no pedido.
              </p>

              {/* Combo items */}
              <div className="reveal reveal-delay-3 mt-7 space-y-3">
                {[
                  { icon: Beef, label: '1x Gran Bacon Angus 160g no Pão Brioche' },
                  { icon: CircleDot, label: '1x Batata Loaded com Cheddar & Bacon' },
                  { icon: GlassWater, label: '1x Refrigerante ou Suco 310ml à escolha' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-gf-black px-4 py-3.5 transition-colors hover:border-gf-orange/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                      <item.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-white sm:text-base">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="reveal reveal-delay-4 mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 line-through">
                    De R$ 69,00
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-gf-orange">Por R$</span>
                    <span className="font-display text-4xl text-white">58,00</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {onAddToCart && (
                    <button
                      type="button"
                      onClick={() => onAddToCart(comboItem)}
                      className="btn-primary"
                    >
                      <Plus size={18} />
                      <span>ADICIONAR COMBO</span>
                    </button>
                  )}
                  <a
                    href={whatsappLink(
                      'Olá! Quero pedir o Combo Granfinos Completo (Gran Bacon Angus + Batata Loaded + Bebida) - R$ 58,00'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary group"
                  >
                    <span>PEDIR DIRETO</span>
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Properly Framed Dual Image Showcase */}
            <div className="reveal reveal-delay-2 order-1 lg:order-2 lg:col-span-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 overflow-hidden rounded-3xl border border-white/10 bg-gf-black">
                  <div className="relative aspect-[4/4.3] w-full overflow-hidden">
                    <img
                      src={assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg')}
                      alt="Gran Bacon Angus do Combo"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-gf-black/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      Gran Bacon Angus
                    </div>
                  </div>
                </div>

                <div className="col-span-5 flex flex-col gap-4">
                  <div className="flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gf-black">
                    <div className="relative h-full min-h-[160px] w-full overflow-hidden">
                      <img
                        src={COMBO_IMAGE_URL}
                        alt="Batata Loaded com Cheddar e Bacon"
                        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 rounded-full bg-gf-black/85 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        + Batata Loaded
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center rounded-3xl border border-gf-orange/30 bg-gf-orange/15 p-5 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-gf-orange-light">
                      Economize
                    </span>
                    <span className="mt-1 font-display text-3xl text-white">R$ 11,00</span>
                    <span className="mt-0.5 text-xs text-gray-300">no combo completo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
