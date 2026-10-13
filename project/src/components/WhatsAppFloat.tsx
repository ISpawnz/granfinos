import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/data/menu';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowTip(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Tooltip */}
      {showTip && (
        <div className="relative mb-2 hidden rounded-2xl border border-white/10 bg-gf-black-light px-4 py-3 shadow-xl sm:block">
          <button
            onClick={() => setShowTip(false)}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gf-black text-gray-400 hover:text-white"
            aria-label="Fechar"
          >
            <X size={12} />
          </button>
          <p className="text-sm font-medium text-white">Ficou com fome? Faça seu pedido!</p>
          <p className="text-xs text-gray-400">Toque aqui para falar no WhatsApp</p>
          <div className="absolute -right-1.5 bottom-4 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-gf-black-light" />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gf-orange text-gf-black shadow-lg transition-all hover:scale-110 hover:bg-gf-orange-light hover:shadow-xl hover:shadow-gf-orange/40"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
          <span className="absolute h-full w-full animate-ping rounded-full bg-gf-orange-light opacity-75" />
          <span className="relative h-4 w-4 rounded-full border-2 border-gf-black bg-white" />
        </span>
      </a>
    </div>
  );
}
