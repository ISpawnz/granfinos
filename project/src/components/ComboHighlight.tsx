import { ArrowRight, Beef, GlassWater, CircleDot } from 'lucide-react';
import { whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ComboHighlight() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-gf-black py-24 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gf-orange/10 blur-[150px]" />
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,107,26,0.3) 30px, rgba(255,107,26,0.3) 31px)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text + items */}
          <div className="order-2 lg:order-1">
            <div className="reveal mb-4 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
              COMBO EM DESTAQUE
            </div>

            <h2 className="reveal font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              SEU COMBO PERFEITO <span className="text-gradient-orange">ESTÁ AQUI</span>
            </h2>

            <p className="reveal mt-4 max-w-md text-base text-gray-400 lg:text-lg">
              Hambúrguer + batata frita + bebida. Tudo que você precisa para uma refeição completa
              e cheia de sabor.
            </p>

            {/* Combo items */}
            <div className="reveal mt-8 space-y-3">
              {[
                { icon: Beef, label: 'Hambúrguer Granfinos Classic' },
                { icon: CircleDot, label: 'Batata frita grande e crocante' },
                { icon: GlassWater, label: 'Bebida 350ml à sua escolha' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-gf-black-light p-4 transition-colors hover:border-gf-orange/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                    <item.icon size={22} />
                  </div>
                  <span className="text-base font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-sm text-gray-500 line-through">R$ 54,00</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-400">R$</span>
                  <span className="font-display text-4xl text-gf-orange">42,00</span>
                </div>
              </div>
              <a
                href={whatsappLink('Olá! Quero o Combo Classic (Hambúrguer + Batata + Bebida) - R$ 42,00')}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-gf-orange px-8 py-4 text-base font-bold text-gf-black transition-all hover:bg-gf-orange-light hover:shadow-xl hover:shadow-gf-orange/30 animate-pulse-glow"
              >
                QUERO ESSE COMBO
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="reveal order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gf-orange/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-gf-orange/20">
                <img
                  src="/pedidos/WhatsApp_Image_2026-09-20_at_12.33.44_(1).jpeg"
                  alt="Combo Granfinos com hambúrguer e batata frita"
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gf-black/50 to-transparent" />

                {/* Price badge */}
                <div className="absolute right-4 top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gf-orange text-gf-black shadow-lg glow-orange-sm">
                  <span className="text-[10px] font-bold uppercase">Combo</span>
                  <span className="font-display text-xl leading-none">R$42</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
