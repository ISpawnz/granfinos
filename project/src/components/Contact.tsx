import { MapPin, Phone, Instagram, Clock, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Varjão Q 7 Conjunto A B C',
      sub: 'Varjão Q 7 Conjunto D, A, Brasília - DF, Brazil',
    },
    {
      icon: Phone,
      label: 'Telefone / WhatsApp',
      value: '(61) 99811-5921',
      sub: 'Pedidos e reservas',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@granfinosgurguer',
      sub: 'Siga-nos para novidades',
    },
    {
      icon: Clock,
      label: 'Horário de Funcionamento',
      value: 'Seg — Dom: 19h às 23h',
      sub: 'Aberto todos os dias',
    },
  ];

  return (
    <section ref={ref} id="contato" className="relative overflow-hidden bg-gf-black-light py-24 lg:py-32">
      <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-gf-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
            CONTATO
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            VEM PARA A <span className="text-gradient-orange">GRANFINOS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-400">
            Faça seu pedido, tire dúvidas ou venha nos visitar. Estamos prontos para te atender.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="reveal space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="card-hover flex items-start gap-4 rounded-2xl border border-white/5 bg-gf-black p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                  <info.icon size={22} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">{info.label}</div>
                  <div className="mt-1 text-base font-semibold text-white">{info.value}</div>
                  <div className="text-sm text-gray-400">{info.sub}</div>
                </div>
              </div>
            ))}

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gf-orange px-6 py-4 text-base font-bold text-gf-black transition-all hover:bg-gf-orange-light hover:shadow-lg hover:shadow-gf-orange/30"
            >
              <MessageCircle size={22} />
              CHAMAR NO WHATSAPP
            </a>
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-1">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-white/5">
              <iframe
                src="https://www.google.com/maps?q=Granfinos+Burgers,+Varjão+Q+7+Conjunto+A+B+C,+Varjão+Q+7+Conjunto+D,+Brasília+-+DF,+Brazil&output=embed"
                className="h-full w-full"
                style={{ border: 0, minHeight: '360px' }}
                loading="lazy"
                title="Mapa Granfinos"
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-xl bg-gf-black/90 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gf-orange" />
                  <span className="font-display text-sm text-white">GRANFINOS Burger</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">Varjão Q 7 Conjunto A B C — Brasília, DF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
