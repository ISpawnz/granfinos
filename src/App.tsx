import { useState } from 'react';
import { Minus, MessageCircle, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Menu, { CartEntry } from '@/components/Menu';
import ComboHighlight from '@/components/ComboHighlight';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { whatsappLink } from '@/data/menu';

function App() {
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notes, setNotes] = useState('');

  const handleAddToCart = (item: {
    id: string;
    name: string;
    price: number;
    priceFormatted: string;
  }) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((entry) => (entry.id === id ? { ...entry, quantity: entry.quantity + delta } : entry))
        .filter((entry) => entry.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const buildOrderMessage = () => {
    const lines = [
      'Olá! Gostaria de fazer o seguinte pedido na GRANFINOS Burger:',
      '',
      ...cart.map(
        (item) =>
          `• ${item.quantity}x ${item.name} — R$ ${(item.price * item.quantity)
            .toFixed(2)
            .replace('.', ',')}`
      ),
      '',
      `Total estimado: R$ ${cartTotal.toFixed(2).replace('.', ',')}`,
    ];
    if (notes.trim()) {
      lines.push(`Observações: ${notes.trim()}`);
    }
    return whatsappLink(lines.join('\n'));
  };

  return (
    <div className="min-h-screen bg-gf-black font-sans text-white">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <ComboHighlight onAddToCart={handleAddToCart} />
        <Gallery />
        <Reviews />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Interactive Order Drawer (Sacola) */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-md flex-col justify-between border-l border-white/10 bg-gf-black-light p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gf-orange/15 text-gf-orange">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-white">SUA SACOLA</h3>
                  <p className="text-xs text-gray-400">Finalize seu pedido direto no WhatsApp</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Fechar sacola"
              >
                <X size={18} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="my-auto py-12 text-center">
                <ShoppingBag size={40} className="mx-auto text-gray-600" />
                <p className="mt-4 font-display text-xl text-white">Sua sacola está vazia</p>
                <p className="mt-1 text-sm text-gray-400">
                  Adicione hambúrgueres, combos ou bebidas no cardápio.
                </p>
              </div>
            ) : (
              <>
                <div className="my-4 flex-1 space-y-3 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-gf-black p-4"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-display text-base tracking-wide text-white">
                          {item.name}
                        </div>
                        <div className="mt-0.5 text-xs font-semibold text-gf-orange">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:border-gf-orange"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:border-gf-orange"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <label
                      htmlFor="order-notes"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400"
                    >
                      Observações do pedido (opcional)
                    </label>
                    <textarea
                      id="order-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Sem cebola, ponto da carne, troco para R$ 100..."
                      className="w-full rounded-xl border border-white/10 bg-gf-black px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:border-gf-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="mb-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-red-400"
                    >
                      <Trash2 size={14} />
                      <span>Limpar sacola</span>
                    </button>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">Total estimado</span>
                      <div className="font-display text-2xl text-gf-orange">
                        R$ {cartTotal.toFixed(2).replace('.', ',')}
                      </div>
                    </div>
                  </div>

                  <a
                    href={buildOrderMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center !py-4"
                  >
                    <MessageCircle size={18} />
                    <span>ENVIAR PEDIDO NO WHATSAPP</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
