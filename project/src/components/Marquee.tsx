const items = [
  'HAMBÚRGUER ARTESANAL',
  'INGREDIENTES SELECIONADOS',
  'MUITO SABOR',
  'PÃO BRIOCHE',
  'CARNE PREMIUM',
  'CHEDDAR DERRETIDO',
  'BACON CROCANTE',
  'FEITO NO FOGO',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gf-orange/20 bg-gf-orange py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-lg uppercase tracking-wider text-gf-black">
              {item}
            </span>
            <span className="text-gf-black/40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
