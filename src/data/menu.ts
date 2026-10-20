export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

export const LOGO_URL = assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.30.34.jpeg');
export const HERO_BURGER_URL = assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg');
export const ABOUT_BURGER_URL = assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.41.jpeg');
export const COMBO_IMAGE_URL = assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.44_(1).jpeg');

export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: 'angus' | 'smash' | 'sides';
  tag?: string;
  featured?: boolean;
}

export interface DrinkItem {
  id: string;
  name: string;
  detail: string;
  price: number;
  priceFormatted: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'gran-monster-angus',
    name: 'GRAN MONSTER ANGUS',
    subtitle: 'Duplo Angus 320g · Cheddar · Bacon',
    description:
      'Pão brioche fofinho, 2 carnes altas de Angus 160g chapeadas no ponto, dobro de cheddar derretido, bastante bacon crocante e maionese verde da casa.',
    price: 52,
    priceFormatted: '52,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg'),
    category: 'angus',
    tag: 'Mais Vendido',
    featured: true,
  },
  {
    id: 'gran-bacon-angus',
    name: 'GRAN BACON ANGUS',
    subtitle: 'Angus 160g · Bacon · Barbecue',
    description:
      'Pão brioche selado na manteiga, burger Angus 160g suculento, queijo derretido, tiras de bacon dourado na chapa, molho barbecue e maionese da casa.',
    price: 40,
    priceFormatted: '40,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg'),
    category: 'angus',
    tag: 'Clássico da Casa',
    featured: true,
  },
  {
    id: 'gran-egg-angus',
    name: 'GRAN EGG ANGUS',
    subtitle: 'Angus 160g · Ovo · Bacon',
    description:
      'Pão brioche macio, burger Angus 160g, ovo estalado na chapa com gema macia, bacon crocante, queijo derretido e maionese artesanal.',
    price: 43,
    priceFormatted: '43,00',
    image: assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg'),
    category: 'angus',
    featured: true,
  },
  {
    id: 'gran-salada-angus',
    name: 'GRAN SALADA ANGUS',
    subtitle: 'Angus 160g · Alface · Tomate · Bacon',
    description:
      'Pão brioche amanteigado, burger Angus 160g, queijo derretido, bacon crocante, alface americana fresca, rodelas de tomate e maionese da casa.',
    price: 43,
    priceFormatted: '43,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg'),
    category: 'angus',
    featured: true,
  },
  {
    id: 'gran-rings',
    name: 'GRAN RINGS ESPECIAL',
    subtitle: 'Blend 160g · Onion Rings · Maionese Verde',
    description:
      'Pão brioche na chapa, carne de 160g suculenta, queijo derretido, bacon crocante, anéis de cebola dourados bem sequinhos e maionese verde artesanal.',
    price: 41,
    priceFormatted: '41,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.41.jpeg'),
    category: 'smash',
    tag: 'Favorito do Chef',
    featured: true,
  },
  {
    id: 'batata-loaded',
    name: 'BATATA LOADED BACON',
    subtitle: 'Cheddar Cremoso · Bacon em Cubos',
    description:
      'Batata frita sequinha e estalando de crocante, afogada em cheddar cremoso e coberta com pedacinhos de bacon frito na hora.',
    price: 24,
    priceFormatted: '24,00',
    image: assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.44_(1).jpeg'),
    category: 'sides',
    tag: 'Para Compartilhar',
    featured: true,
  },
  {
    id: 'gran-simples-angus',
    name: 'GRAN SIMPLES ANGUS',
    subtitle: 'Angus 160g · Queijo · Maionese Caseira',
    description:
      'Pra quem gosta do sabor da carne: pão brioche macio, burger Angus 160g suculento no ponto, queijo derretido e maionese verde da casa.',
    price: 37,
    priceFormatted: '37,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.48_(1).jpeg'),
    category: 'angus',
  },
  {
    id: 'smash-bacon',
    name: 'SMASH BACON DUPLO',
    subtitle: 'Smash 80g · Crosta Caramelizada · Cheddar',
    description:
      'Pão brioche smash, carne prensada na chapa com aquela crostinha caramelizada, queijo cheddar derretido, fatias de bacon e maionese de ervas.',
    price: 22,
    priceFormatted: '22,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg'),
    category: 'smash',
    tag: 'Smash',
  },
  {
    id: 'smash-salada',
    name: 'SMASH SALADA PRIME',
    subtitle: 'Smash 80g · Alface · Tomate · Bacon',
    description:
      'Pão brioche smash, carne prensada com crostinha crocante, queijo cheddar, bacon, alface fresca, tomate e maionese de ervas.',
    price: 25,
    priceFormatted: '25,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg'),
    category: 'smash',
  },
  {
    id: 'smash-simples',
    name: 'SMASH CLÁSSICO',
    subtitle: 'Smash 80g · Cheddar · Maionese de Ervas',
    description:
      'Pão smash macio, blend prensado na chapa bem quente, queijo cheddar derretido e maionese artesanal da casa.',
    price: 19,
    priceFormatted: '19,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.48_(1).jpeg'),
    category: 'smash',
  },
  {
    id: 'batata-frita',
    name: 'BATATA FRITA TRADICIONAL',
    subtitle: 'Crocante · Sal Marinho · Molho da Casa',
    description:
      'Porção de batata frita bem douradinha, crocante por fora e macia por dentro, finalizada com sal marinho e potinho de molho da casa.',
    price: 18,
    priceFormatted: '18,00',
    image: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg'),
    category: 'sides',
  },
];

export const drinkItems: DrinkItem[] = [
  {
    id: 'refri-lata',
    name: 'Refrigerantes Lata 310ml',
    detail: 'Coca-Cola, Coca Zero, Guaraná, Guaraná Jesus, Sprite, Fanta ou Schweppes',
    price: 5,
    priceFormatted: '5,00',
  },
  {
    id: 'sucos-lata',
    name: 'Sucos Del Valle 310ml',
    detail: 'Sabores: Uva, Pêssego, Goiaba ou Maracujá bem gelados',
    price: 6,
    priceFormatted: '6,00',
  },
  {
    id: 'monster-energy',
    name: 'Energético Monster 473ml',
    detail: 'Lata tradicional super gelada',
    price: 10,
    priceFormatted: '10,00',
  },
  {
    id: 'schweppes-15l',
    name: 'Schweppes Citrus 1,5L',
    detail: 'Garrafa 1,5L ideal para acompanhar combos e compartilhar',
    price: 15,
    priceFormatted: '15,00',
  },
];

export interface GalleryImage {
  url: string;
  title: string;
  subtitle: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg'),
    title: 'Gran Monster Angus',
    subtitle: 'Duplo blend 160g, cheddar duplo e bacon defumado',
    alt: 'Hambúrguer duplo Gran Monster Angus com queijo cheddar e bacon',
  },
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.41.jpeg'),
    title: 'Calda de Barbecue & Cheddar',
    subtitle: 'Suculência máxima direto da nossa chapa',
    alt: 'Hambúrguer duplo com muito cheddar e calda de barbecue',
  },
  {
    url: assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.44_(1).jpeg'),
    title: 'Batata Loaded Especial',
    subtitle: 'Fritas crocantes com cheddar cremoso e cubos de bacon',
    alt: 'Porção de batata frita com cheddar e bacon',
  },
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg'),
    title: 'Gran Bacon Angus',
    subtitle: 'Brioche dourado, angus 160g e tiras de bacon na brasa',
    alt: 'Hambúrguer Gran Bacon Angus com queijo e bacon',
  },
  {
    url: assetUrl('galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg'),
    title: 'Gran Salada Frescor',
    subtitle: 'Ingredientes frescos colhidos diariamente',
    alt: 'Hambúrguer Gran Salada com alface, tomate, queijo e bacon',
  },
  {
    url: assetUrl('pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg'),
    title: 'Gran Egg Artesanal',
    subtitle: 'Ovo na chapa, bacon crocante e queijo muçarela',
    alt: 'Hambúrguer Gran Egg com ovo, bacon e queijo derretido',
  },
];

export interface Review {
  text: string;
  author: string;
  role: string;
  order: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    text: 'O Gran Monster Angus é surreal. Carne no ponto exato, suculenta de verdade, pão macio que não desmonta e a maionese da casa faz toda a diferença.',
    author: 'Lucas Mendes',
    role: 'Cliente frequente · Lago Norte',
    order: 'Pediu: Gran Monster Angus + Batata Loaded',
    rating: 5,
  },
  {
    text: 'Melhor hambúrguer artesanal do Varjão e região! Chegou quentinho, a batata com cheddar e bacon vem muito bem servida e o atendimento no WhatsApp é super rápido.',
    author: 'Camila Rocha',
    role: 'Cliente verificada · Varjão',
    order: 'Pediu: Combo Gran Bacon Angus',
    rating: 5,
  },
  {
    text: 'Dá pra sentir que os ingredientes são de primeira. O smash tem aquela crostinha perfeita na carne e o preço é super justo pela qualidade entregue.',
    author: 'Rafael Nogueira',
    role: 'Cliente verificado · Asa Norte',
    order: 'Pediu: Gran Rings Especial',
    rating: 5,
  },
];

export const WHATSAPP_NUMBER = '5561998115921';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer um pedido na GRANFINOS Burger.';

export function whatsappLink(message?: string): string {
  const msg = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
