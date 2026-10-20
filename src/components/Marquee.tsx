import { Flame } from 'lucide-react';

const items = [
  'BLEND ANGUS 160G',
  'PÃO BRIOCHE SELADO NA MANTEIGA',
  'SMASH BURGER NA CHAPA',
  'MAIONESE CASEIRA EXCLUSIVA',
  'CHEDDAR CREMOSO & BACON CROCANTE',
  'ABERTO TODOS OS DIAS DAS 19H ÀS 23H',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gf-orange/30 bg-gf-orange py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-base uppercase tracking-wider text-gf-black sm:text-lg">
              {item}
            </span>
            <Flame size={16} className="shrink-0 fill-gf-black/30 text-gf-black/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
