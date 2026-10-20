import { useState } from 'react';
import { Check, Flame, GlassWater, Plus, ShoppingBag, Star } from 'lucide-react';
import { drinkItems, menuItems, whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface CartEntry {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  quantity: number;
}

interface MenuProps {
  onAddToCart?: (item: { id: string; name: string; price: number; priceFormatted: string }) => void;
}

type FilterTab = 'featured' | 'angus' | 'smash';

const tabs: { id: FilterTab; label: string; count: number }[] = [
  { id: 'featured', label: 'Destaques da Casa', count: 6 },
  { id: 'angus', label: 'Linha Angus 160g', count: 6 },
  { id: 'smash', label: 'Smash & Fritas', count: 6 },
];

export default function Menu({ onAddToCart }: MenuProps) {
  const ref = useScrollReveal<HTMLElement>();
  const [activeTab, setActiveTab] = useState<FilterTab>('featured');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Every tab returns exactly 6 items -> 2 rows of 3 on desktop, 3 rows of 2 on tablet (zero orphan cards)
  const displayedItems = (() => {
    if (activeTab === 'featured') {
      return menuItems.filter((item) => item.featured).slice(0, 6);
    }
    if (activeTab === 'angus') {
      const angus = menuItems.filter((item) => item.category === 'angus');
      const loadedFries = menuItems.find((item) => item.id === 'batata-loaded');
      return loadedFries ? [...angus, loadedFries].slice(0, 6) : angus.slice(0, 6);
    }
    return menuItems
      .filter((item) => item.category === 'smash' || item.category === 'sides')
      .slice(0, 6);
  })();

  const handleAdd = (item: { id: string; name: string; price: number; priceFormatted: string }) => {
    if (onAddToCart) {
      onAddToCart(item);
      setJustAddedId(item.id);
      setTimeout(() => {
        setJustAddedId((prev) => (prev === item.id ? null : prev));
      }, 1100);
    }
  };

  return (
    <section
      ref={ref}
      id="cardapio"
      className="relative overflow-hidden bg-gf-black-light py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-gf-orange/[0.05] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header & Category Tabs */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="reveal section-pill mb-4">
              <Flame size={14} className="text-gf-orange" />
              <span>Cardápio da Chapa</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              ESCOLHA O SEU <span className="text-gradient-orange">FAVORITO.</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-3 max-w-xl text-base text-gray-300">
              Montado na hora, bem recheado e servido no ponto. Clica pra montar sua sacola ou pede
              direto no WhatsApp.
            </p>
          </div>

          {/* Interactive Category Switcher */}
          <div className="reveal reveal-delay-2 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-gf-black p-1.5">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? 'bg-gf-orange text-gf-black shadow-md'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Balanced 3x2 Burger Grid (6 items per tab — never 4 on top and 1 alone) */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item, i) => {
            const isAdded = justAddedId === item.id;
            return (
              <article
                key={`${activeTab}-${item.id}`}
                className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} card-hover group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gf-black-card`}
              >
                {/* Properly Framed 4:3 Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gf-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gf-black-card via-transparent to-black/20" />

                  {item.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-gf-orange px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gf-black shadow-md">
                      {item.tag}
                    </span>
                  )}

                  <div className="absolute bottom-3 right-4 rounded-full border border-white/15 bg-gf-black/90 px-3.5 py-1 font-display text-lg tracking-wide text-gf-orange backdrop-blur-md">
                    R$ {item.priceFormatted}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gf-orange-light">
                      {item.subtitle}
                    </div>
                    <h3 className="mt-1 font-display text-2xl tracking-wide text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2.5 border-t border-white/[0.07] pt-4">
                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-[0.98] ${
                        isAdded
                          ? 'bg-emerald-500 text-black'
                          : 'bg-gf-orange text-gf-black hover:bg-gf-orange-light'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={15} />
                          <span>Adicionado!</span>
                        </>
                      ) : (
                        <>
                          <Plus size={15} />
                          <span>Adicionar à Sacola</span>
                        </>
                      )}
                    </button>

                    <a
                      href={whatsappLink(
                        `Olá! Gostaria de pedir: 1x ${item.name} (R$ ${item.priceFormatted})`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-colors hover:border-gf-orange hover:bg-gf-orange/15 hover:text-gf-orange-light"
                      title="Pedir direto no WhatsApp"
                      aria-label={`Pedir ${item.name} direto no WhatsApp`}
                    >
                      <ShoppingBag size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean Editorial Drink Board (No fake french-fry photos!) */}
        <div className="reveal mt-14 rounded-3xl border border-white/10 bg-gf-black p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                <GlassWater size={22} />
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-white">
                  BEBIDAS GELADAS
                </h3>
                <p className="text-xs text-gray-400">
                  Refrigerante trincando, suco Del Valle e energético pra acompanhar
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gf-orange-light">
              Adicione no seu pedido
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {drinkItems.map((drink) => {
              const isAdded = justAddedId === drink.id;
              return (
                <div
                  key={drink.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-gf-black-light px-5 py-4 transition-colors hover:border-gf-orange/30"
                >
                  <div className="min-w-0">
                    <div className="font-display text-lg tracking-wide text-white">{drink.name}</div>
                    <p className="truncate text-xs text-gray-400">{drink.detail}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-display text-lg text-gf-orange">
                      R$ {drink.priceFormatted}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleAdd(drink)}
                      className={`flex h-9 items-center gap-1.5 rounded-full px-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                        isAdded
                          ? 'bg-emerald-500 text-black'
                          : 'border border-gf-orange/40 bg-gf-orange/15 text-gf-orange-light hover:bg-gf-orange hover:text-gf-black'
                      }`}
                    >
                      {isAdded ? <Check size={14} /> : <Plus size={14} />}
                      <span>{isAdded ? 'Ok' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom rating note */}
        <div className="reveal mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-gf-black/60 px-6 py-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gf-orange text-gf-orange" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-300">
              Todos os hambúrgueres acompanham nossa maionese artesanal.
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Preparo na hora · 20 a 30 min
          </span>
        </div>
      </div>
    </section>
  );
}
