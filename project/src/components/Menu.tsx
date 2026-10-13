import { ShoppingCart, Star } from 'lucide-react';
import { menuCategories, whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Menu() {
  const ref = useScrollReveal<HTMLElement>();
  const menuItems = menuCategories.flatMap((category) => category.items).slice(0, 5);

  return (
    <section
      ref={ref}
      id="cardapio"
      className="relative overflow-hidden bg-gradient-to-b from-gf-black via-gf-black-light to-gf-black py-24 lg:py-32"
    >
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gf-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="reveal text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
            NOSSO CARDÁPIO
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            ESCOLHA O SEU <span className="text-gradient-orange">FAVORITO</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-400">
            Todos os hambúrgueres são preparados na hora com ingredientes frescos e selecionados.
          </p>
        </div>

        {/* Menu items grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} card-hover group relative overflow-hidden rounded-3xl border border-white/5 bg-gf-black-card`}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gf-black-card via-gf-black-card/20 to-transparent" />

                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-gf-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-gf-black">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg leading-tight text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>

                <div className="mt-4 flex justify-end">
                  <a
                    href={whatsappLink(`Olá! Gostaria de pedir: ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-gf-orange/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gf-orange transition-all hover:bg-gf-orange hover:text-gf-black"
                  >
                    <ShoppingCart size={14} />
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-gf-orange text-gf-orange" />
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Todos os pedidos são preparados na hora. Tempo de preparo médio: 20-30 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
