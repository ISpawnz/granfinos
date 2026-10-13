import { ArrowRight, Flame, Star, UtensilsCrossed } from 'lucide-react';
import { whatsappLink } from '@/data/menu';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-gf-black pt-24">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-radial-orange opacity-60" />
      <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-gf-orange/10 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gf-orange/5 blur-[100px]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
            <Flame size={16} />
            Hambúrguer Artesanal Premium
          </div>

          <h1 className="font-display text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            GRAN<span className="text-gradient-orange">FINOS</span>
          </h1>

          <p className="mt-4 font-display text-2xl text-gray-300 sm:text-3xl lg:text-4xl">
            Seu hambúrguer, do seu jeito.
          </p>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-400 lg:mx-0 lg:text-lg">
            Hambúrguer artesanal, ingredientes selecionados e muito sabor em cada mordida.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#cardapio"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gf-orange px-8 py-4 text-base font-bold text-gf-black transition-all hover:bg-gf-orange-light hover:shadow-xl hover:shadow-gf-orange/30 sm:w-auto"
            >
              VER CARDÁPIO
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-gf-orange hover:bg-gf-orange/10 hover:text-gf-orange-light sm:w-auto"
            >
              <UtensilsCrossed size={20} />
              FAZER PEDIDO
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            <div className="flex items-center gap-1">
              <span className="font-display text-3xl text-gf-orange">4.9</span>
              <Star size={20} className="fill-gf-orange text-gf-orange" />
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-500">Avaliação média</div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex items-center justify-center">
          {/* Glowing ring behind image */}
          <div className="absolute h-[380px] w-[380px] animate-spin-slow rounded-full border border-gf-orange/20 sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]" />
          <div className="absolute h-[320px] w-[320px] rounded-full bg-gf-orange/15 blur-[80px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

          <div className="relative animate-float">
            <img
              src="/galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg"
              alt="Hambúrguer artesanal Granfinos com queijo derretido"
              className="relative z-10 h-[340px] w-[340px] rounded-full object-cover shadow-2xl shadow-gf-orange/20 ring-4 ring-gf-orange/20 sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-gf-orange/20 bg-gf-black-light/90 px-5 py-3 backdrop-blur-md glow-orange-sm sm:left-auto sm:right-2 sm:translate-x-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gf-orange text-gf-black">
              <Flame size={20} />
            </div>
            <div className="text-left">
              <div className="font-display text-sm text-white">100% ARTESANAL</div>
              <div className="text-xs text-gray-400">Feito no fogo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gf-orange" />
        </div>
      </div>
    </section>
  );
}
