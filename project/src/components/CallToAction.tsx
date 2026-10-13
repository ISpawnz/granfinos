import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CallToAction() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-gf-black py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-orange opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gf-orange/15 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="reveal font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
          BATEU AQUELA <span className="text-gradient-orange">FOME?</span>
        </h2>

        <p className="reveal reveal-delay-1 mt-4 font-display text-2xl text-gray-300 sm:text-3xl">
          Então você já sabe onde ir.
        </p>

        <div className="reveal reveal-delay-2 mt-10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gf-orange px-10 py-5 text-lg font-bold text-gf-black transition-all hover:bg-gf-orange-light hover:shadow-2xl hover:shadow-gf-orange/40 animate-pulse-glow"
          >
            PEDIR AGORA
            <ArrowRight size={24} className="transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
