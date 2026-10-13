export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'angus',
    label: 'Angus Premium',
    items: [
      {
        name: 'GRAN SIMPLES ANGUS',
        description: 'Pão brioche, hambúrguer angus 160g, maionese caseira, queijo muçarela.',
        price: '37,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.41.jpeg',
      },
      {
        name: 'GRAN BACON ANGUS',
        description: 'Pão brioche, hambúrguer angus 160g, maionese caseira, barbecue, queijo muçarela e bacon.',
        price: '40,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.47 copy.jpeg',
      },
      {
        name: 'GRAN EGG ANGUS',
        description: 'Pão brioche, hambúrguer angus 160g, maionese caseira, barbecue, queijo muçarela, bacon e ovo.',
        price: '43,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg',
      },
      {
        name: 'GRAN SALADA ANGUS',
        description: 'Pão brioche, hambúrguer angus 160g, maionese caseira, barbecue, queijo muçarela, bacon, alface e tomate.',
        price: '43,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.48_(1).jpeg',
      },
      {
        name: 'GRAN MONSTER ANGUS',
        description: 'Pão brioche, maionese caseira, 2 hambúrgueres angus 160g, 2 fatias de queijo cheddar e 2 bacon fatiados.',
        price: '52,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg',
      },
    ],
  },
  {
    id: 'smash',
    label: 'Smash Burguer',
    items: [
      {
        name: 'GRAN RINGS',
        description: 'Pão brioche amanteigado, hambúrguer com carne de 160g, queijo, muçarela, bacon, 3 anéis de cebola empanados e maionese verde.',
        price: '41,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.47.jpeg',
        tag: 'Mais pedido',
      },
      {
        name: 'SMASH SIMPLES',
        description: 'Pão smash prime, carne 80g, queijo cheddar, maionese com ervas.',
        price: '19,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.41.jpeg',
      },
      {
        name: 'SMASH BACON',
        description: 'Pão smash prime, carne 80g, bacon, queijo cheddar, maionese com ervas.',
        price: '22,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.46.jpeg',
      },
      {
        name: 'SMASH SALADA',
        description: 'Pão smash prime, carne 80g, bacon, alface americana, tomate, queijo cheddar e maionese com ervas.',
        price: '25,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.48_(1).jpeg',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Acompanhamentos',
    items: [
      {
        name: 'BATATA FRITA',
        description: 'Porção de batata frita crocante com sal marinho e molho especial.',
        price: '18,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'BATATA LOADED',
        description: 'Batata frita coberta com cheddar, bacon e molho da casa.',
        price: '24,00',
        image: '/pedidos/WhatsApp_Image_2026-09-20_at_12.33.44_(1).jpeg',
        tag: 'Novo',
      },
      {
        name: 'ONION RINGS',
        description: 'Anéis de cebola empanados e crocantes com molho dipping.',
        price: '20,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Bebidas',
    items: [
      {
        name: 'SCHWEPPES 1.5L',
        description: 'Schweppes 1,5L.',
        price: '15,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'ENERGÉTICO MONSTER',
        description: 'Lata de energético Monster.',
        price: '10,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'COCA-COLA 310ML',
        description: 'Coca-Cola lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'COCA-COLA ZERO 310ML',
        description: 'Coca-Cola Zero lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'SPRITE 310ML',
        description: 'Sprite lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'FANTA LARANJA 310ML',
        description: 'Fanta Laranja lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'SCHWEPPES 310ML',
        description: 'Schweppes lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'GUARANÁ JESUS 310ML',
        description: 'Guaraná Jesus lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'GUARANÁ 310ML',
        description: 'Guaraná lata 310ml.',
        price: '5,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'SUCO DE UVA 310ML',
        description: 'Suco de uva Del Valle 310ml.',
        price: '6,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'SUCO DE PÊSSEGO 310ML',
        description: 'Suco de pêssego 310ml.',
        price: '6,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'SUCO DE GOIABA 310ML',
        description: 'Suco de goiaba 310ml.',
        price: '6,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'SUCO DE MARACUJÁ 310ML',
        description: 'Suco de maracujá 310ml.',
        price: '6,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
      {
        name: 'ÁGUA COM GÁS',
        description: 'Água mineral com gás.',
        price: '4,00',
        image: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
      },
    ],
  },
];

export interface GalleryImage {
  url: string;
  alt: string;
  span?: 'col' | 'row' | 'both';
}

export const galleryImages: GalleryImage[] = [
  {
    url: '/pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg',
    alt: 'Hambúrguer suculento com gergelim',
    span: 'both',
  },
  {
    url: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.44.jpeg',
    alt: 'Carne sendo grelhada na chama',
    span: 'row',
  },
  {
    url: '/pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg',
    alt: 'Hambúrguer com cheddar derretido',
    span: 'col',
  },
  {
    url: '/pedidos/WhatsApp_Image_2026-09-20_at_12.33.44_(1).jpeg',
    alt: 'Combo com batata e molho',
  },
  {
    url: '/galeria/WhatsApp_Image_2026-09-20_at_12.33.40.jpeg',
    alt: 'Cheeseburgers na grelha',
  },
  {
    url: '/pedidos/WhatsApp_Image_2026-09-20_at_12.33.48.jpeg',
    alt: 'Hambúrguer gourmet com rúcula',
  },
];

export interface Review {
  text: string;
  author: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    text: 'Hambúrguer simplesmente incrível! Carne muito saborosa e o molho é sensacional.',
    author: 'Cliente Granfinos',
    rating: 5,
  },
  {
    text: 'Um dos melhores hambúrgueres que já experimentei. Com certeza vou pedir novamente!',
    author: 'Cliente Granfinos',
    rating: 5,
  },
  {
    text: 'Ambiente bonito, atendimento excelente e comida maravilhosa.',
    author: 'Cliente Granfinos',
    rating: 5,
  },
];

export const WHATSAPP_NUMBER = '5561998115921';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer um pedido na GRANFINOS.';

export function whatsappLink(message?: string): string {
  const msg = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
