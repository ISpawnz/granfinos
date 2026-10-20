import { Flame, Quote, Star } from 'lucide-react';
import { reviews } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Reviews() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="avaliacoes"
      className="relative overflow-hidden bg-gf-black py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gf-orange/[0.05] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="reveal section-pill mb-4">
              <Flame size={14} className="text-gf-orange" />
              <span>Avaliações Reais</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              QUEM PROVA, <span className="text-gradient-orange">RECOMENDA.</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-gf-black-light px-5 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gf-orange text-gf-orange" />
              ))}
            </div>
            <div className="border-l border-white/10 pl-3">
              <span className="font-display text-xl text-white">4.9</span>
              <span className="ml-1 text-xs text-gray-400">/ 5.0 média</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.author}
              className={`reveal reveal-delay-${i + 1} card-hover flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-gf-black-light p-7`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={15} className="fill-gf-orange text-gf-orange" />
                    ))}
                  </div>
                  <Quote size={28} className="text-gf-orange/25" />
                </div>

                <p className="mt-5 text-base leading-relaxed text-gray-200">"{review.text}"</p>
              </div>

              <div className="mt-6 border-t border-white/[0.07] pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gf-orange/15 font-display text-sm text-gf-orange">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{review.author}</div>
                    <div className="text-xs text-gray-400">{review.role}</div>
                  </div>
                </div>
                <div className="mt-3 rounded-xl bg-gf-black px-3 py-1.5 text-xs font-medium text-gf-orange-light">
                  {review.order}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
