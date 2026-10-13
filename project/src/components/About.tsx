import { Leaf, Beef, Flame } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Leaf,
    title: 'Ingredientes Selecionados',
    description: 'Cuidamos de cada detalhe, do pão ao molho. Só entra no nosso hambúrguer o melhor.',
  },
  {
    icon: Beef,
    title: 'Hambúrguer Artesanal',
    description: 'Carne moída na hora, tempero da casa e preparo no fogo para selar todos os sucos.',
  },
  {
    icon: Flame,
    title: 'Muito Sabor',
    description: 'Cada mordida é uma explosão de sabor. A experiência Granfinos é inesquecível.',
  },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative overflow-hidden bg-gf-black py-24 lg:py-32"
    >
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gf-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/11220677/pexels-photo-11220677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Hambúrgueres sendo grelhados na brasa"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gf-black/60 to-transparent" />
            </div>

          </div>

          {/* Text side */}
          <div>
            <div className="reveal mb-4 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
              SOBRE A GRANFINOS
            </div>

            <h2 className="reveal font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              MAIS QUE UM <span className="text-gradient-orange">HAMBÚRGUER.</span>
              <br />
              UMA EXPERIÊNCIA.
            </h2>

            <p className="reveal mt-6 text-base leading-relaxed text-gray-400 lg:text-lg">
              A Granfinos nasceu para transformar o simples ato de comer um hambúrguer em uma
              experiência inesquecível. Trabalhamos com ingredientes selecionados, preparo cuidadoso
              e muito sabor para entregar o melhor em cada pedido.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-white/5 bg-gf-black-light p-6 transition-all hover:border-gf-orange/30 hover:bg-gf-black-lighter`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange transition-transform group-hover:scale-110">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
