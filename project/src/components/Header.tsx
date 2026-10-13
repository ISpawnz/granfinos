import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gf-black/95 backdrop-blur-lg border-b border-white/5 py-3'
          : 'bg-gradient-to-b from-gf-black/80 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="group flex items-center">
          <img
            src="/galeria/WhatsApp_Image_2026-09-20_at_12.30.34.jpeg"
            alt="Granfinos Burger"
            className="h-16 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gf-orange transition-transform duration-300 hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#cardapio"
          className="hidden rounded-full bg-gf-orange px-6 py-2.5 text-sm font-bold text-gf-black transition-all hover:bg-gf-orange-light hover:shadow-lg hover:shadow-gf-orange/40 lg:block"
        >
          FAZER PEDIDO
        </a>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 pb-6 pt-2">
          <div className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-gf-black-light p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-gf-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cardapio"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-gf-orange px-4 py-3 text-center text-base font-bold text-gf-black"
            >
              FAZER PEDIDO
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
