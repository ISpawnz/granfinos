import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { LOGO_URL } from '@/data/menu';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Combo Especial', href: '#combo' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gf-black">
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black p-0.5">
                <img
                  src={LOGO_URL}
                  alt="Granfinos Burger"
                  className="h-full w-full rounded-[10px] object-cover"
                />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-white">
                  GRAN<span className="text-gf-orange">FINOS</span>
                </span>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Burger Artesanal
                </div>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Hambúrguer artesanal de verdade no Varjão, Brasília. Blends selecionados de Angus
              160g, Smash Burgers e acompanhamentos feitos na hora.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/granfinosgurguer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gf-black-light text-gray-300 transition-all hover:border-gf-orange hover:text-gf-orange"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-gf-orange">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-gf-orange">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gf-orange" />
                <span>Varjão Q 7 Conjunto A B C, Varjão Q 7 Conjunto D — Brasília, DF</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="shrink-0 text-gf-orange" />
                <span>(61) 99811-5921</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Instagram size={18} className="shrink-0 text-gf-orange" />
                <span>@granfinosgurguer</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-gf-orange">
              Funcionamento
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={18} className="shrink-0 text-gf-orange" />
                <div>
                  <div className="font-semibold text-white">Segunda a Domingo</div>
                  <div className="text-xs text-gray-400">Das 19h às 23h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} GRANFINOS Burger. Todos os direitos reservados.
          </p>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Brasília · DF · Feito na brasa
          </p>
        </div>
      </div>
    </footer>
  );
}
