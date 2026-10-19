import { Clock, Flame, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Varjão Q 7 Conjunto A B C',
      sub: 'Varjão Q 7 Conjunto D, A — Brasília, DF',
    },
    {
      icon: Phone,
      label: 'Telefone / WhatsApp',
      value: '(61) 99811-5921',
      sub: 'Atendimento rápido para pedidos e retirada',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@granfinosgurguer',
      sub: 'Acompanhe lançamentos e promoções',
    },
    {
      icon: Clock,
      label: 'Horário de Funcionamento',
      value: 'Segunda a Domingo: 19h às 23h',
      sub: 'Aberto todos os dias da semana',
    },
  ];

  return (
    <section
      ref={ref}
      id="contato"
      className="relative overflow-hidden bg-gf-black-light py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-gf-orange/[0.05] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="reveal section-pill mb-4">
              <Flame size={14} className="text-gf-orange" />
              <span>Localização & Contato</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              VEM PARA A <span className="text-gradient-orange">GRANFINOS.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-md text-sm text-gray-400 sm:text-base">
            Peça pelo WhatsApp para receber em casa ou venha retirar seu hambúrguer quentinho no
            Varjão.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Contact cards in a 2x2 grid + full-width CTA */}
          <div className="reveal flex flex-col justify-between gap-4 lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="card-hover flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gf-black p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      {info.label}
                    </div>
                    <div className="mt-1 font-display text-lg tracking-wide text-white">
                      {info.value}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-gray-400">{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !py-4 !text-base"
            >
              <MessageCircle size={20} />
              <span>CHAMAR NO WHATSAPP AGORA</span>
            </a>
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-2 lg:col-span-6">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-gf-black">
              <iframe
                src="https://www.google.com/maps?q=Granfinos+Burgers,+Varjão+Q+7+Conjunto+A+B+C,+Varjão+Q+7+Conjunto+D,+Brasília+-+DF,+Brazil&output=embed"
                className="h-full w-full"
                style={{ border: 0, minHeight: '380px' }}
                loading="lazy"
                title="Mapa Granfinos"
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/10 bg-gf-black/90 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gf-orange" />
                  <span className="font-display text-sm tracking-wide text-white">
                    GRANFINOS BURGER
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-gray-300">Varjão Q 7 Conj. A B C — Brasília, DF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
