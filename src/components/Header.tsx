import { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { LOGO_URL } from '@/data/menu';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Combo', href: '#combo' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export default function Header({ cartCount = 0, onOpenCart }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gf-black/95 backdrop-blur-md border-b border-white/[0.07] py-3'
          : 'bg-gradient-to-b from-gf-black/90 via-gf-black/50 to-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black p-0.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-gf-orange/50">
            <img
              src={LOGO_URL}
              alt="Granfinos Burger"
              className="h-full w-full rounded-[10px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl leading-none tracking-wider text-white">
              GRAN<span className="text-gf-orange">FINOS</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Burger Artesanal
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-gf-orange transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {cartCount > 0 && onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 rounded-full border border-gf-orange/40 bg-gf-orange/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gf-orange-light transition-all hover:bg-gf-orange/20"
              aria-label="Abrir sacola de pedidos"
            >
              <ShoppingBag size={16} />
              <span>Sacola ({cartCount})</span>
            </button>
          )}
          <a href="#cardapio" className="btn-primary !px-6 !py-2.5 !text-xs">
            FAZER PEDIDO
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {cartCount > 0 && onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative flex h-10 items-center gap-1.5 rounded-full border border-gf-orange/40 bg-gf-orange/15 px-3.5 text-xs font-bold text-gf-orange-light"
              aria-label="Abrir sacola"
            >
              <ShoppingBag size={16} />
              <span>{cartCount}</span>
            </button>
          )}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-gf-orange/40"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 pb-6 pt-3">
          <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-gf-black-light/95 p-3 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-gf-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cardapio"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 w-full justify-center !py-3.5"
            >
              FAZER PEDIDO
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
