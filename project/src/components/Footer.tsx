import { Flame, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gf-black">
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gf-orange/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gf-orange text-gf-black">
                <Flame size={20} strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl tracking-wider text-white">
                GRAN<span className="text-gf-orange">FINOS</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Hambúrguer artesanal, ingredientes selecionados e muito sabor em cada mordida. Sua
              experiência premium em hambúrguer.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/granfinosgurguer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gf-black-light text-gray-400 transition-all hover:border-gf-orange/40 hover:text-gf-orange"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-gf-orange">Links Rápidos</h3>
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
            <h3 className="font-display text-sm uppercase tracking-wider text-gf-orange">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gf-orange" />
                Varjão Q 7 Conjunto A B C, Varjão Q 7 Conjunto D, A, Brasília - DF, Brazil
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="shrink-0 text-gf-orange" />
                (61) 99811-5921
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Instagram size={18} className="shrink-0 text-gf-orange" />
                @granfinosgurguer
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-gf-orange">Horário</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={18} className="shrink-0 text-gf-orange" />
                <div>
                  <div className="text-white">Segunda a Domingo</div>
                  <div className="text-xs text-gray-500">19h às 23h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GRANFINOS. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Feito com fogo e sabor.
          </p>
        </div>
      </div>
    </footer>
  );
}
