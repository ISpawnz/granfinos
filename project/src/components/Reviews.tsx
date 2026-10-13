import { Star, Quote } from 'lucide-react';
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
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gf-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gf-orange/30 bg-gf-orange/10 px-4 py-2 text-sm font-medium text-gf-orange-light">
            AVALIAÇÕES
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            O QUE DIZEM NOSSOS <span className="text-gradient-orange">CLIENTES</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-gf-orange text-gf-orange" />
            ))}
            <span className="ml-2 font-display text-xl text-white">4.9</span>
            <span className="text-sm text-gray-500">/ 5.0</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-hover relative rounded-3xl border border-white/5 bg-gf-black-light p-8`}
            >
              <Quote size={40} className="mb-4 text-gf-orange/30" />

              <div className="mb-4 flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-gf-orange text-gf-orange" />
                ))}
              </div>

              <p className="text-base leading-relaxed text-gray-300">"{review.text}"</p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gf-orange/15 font-display text-sm text-gf-orange">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{review.author}</div>
                  <div className="text-xs text-gray-500">Cliente verificado</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
