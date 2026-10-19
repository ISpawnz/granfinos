import { useEffect, useState } from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { whatsappLink } from '@/data/menu';

interface WhatsAppFloatProps {
  cartCount?: number;
  cartTotal?: number;
  onOpenCart?: () => void;
}

export default function WhatsAppFloat({
  cartCount = 0,
  cartTotal = 0,
  onOpenCart,
}: WhatsAppFloatProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showBar = visible || cartCount > 0;

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-300 ease-out ${
        showBar ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-12 opacity-0'
      }`}
    >
      {cartCount > 0 && onOpenCart ? (
        <button
          type="button"
          onClick={onOpenCart}
          className="btn-primary !px-5 !py-3.5 shadow-2xl"
        >
          <ShoppingBag size={18} />
          <span>
            Ver Sacola ({cartCount}) · R$ {cartTotal.toFixed(2).replace('.', ',')}
          </span>
        </button>
      ) : (
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-5 !py-3.5 shadow-2xl"
          aria-label="Fazer pedido no WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Pedir no WhatsApp</span>
        </a>
      )}
    </div>
  );
}
