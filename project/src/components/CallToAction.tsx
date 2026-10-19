import { ArrowRight, Flame } from 'lucide-react';
import { whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CallToAction() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-gf-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[2.25rem] border border-gf-orange/25 bg-gradient-to-br from-gf-black-light via-gf-black-card to-gf-black p-8 text-center sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-radial-ember opacity-90" />

          <div className="relative mx-auto max-w-2xl">
            <div className="section-pill mb-5">
              <Flame size={14} className="text-gf-orange" />
              <span>Chapa no Fogo</span>
            </div>

            <h2 className="font-display text-4xl uppercase leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              BATEU AQUELA <span className="text-gradient-orange">FOME?</span>
            </h2>

            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              A chapa já tá acesa. Manda seu pedido pelo WhatsApp que a gente começa a chapear o seu
              burger agora mesmo.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group !px-9 !py-4 !text-base"
              >
                <span>PEDIR AGORA NO WHATSAPP</span>
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a href="#cardapio" className="btn-secondary !px-8 !py-4">
                <span>VER CARDÁPIO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
