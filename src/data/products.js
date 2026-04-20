const whatsappPhone = "51934758261";

export const featuredProducts = [
  {
    id: 1,
    nombre: "Tulipan Rosa",
    precio: "S/20",
    imagen: "/images/01.png",
    descripcion: "Suave y delicado, perfecto para decorar tu hogar.",
    cta: "Lo quiero",
  },
  {
    id: 2,
    nombre: "Conejita Tierna",
    precio: "S/15",
    imagen: "/images/02.png",
    descripcion: "Tonos dulces y acabado delicado hecho a mano.",
    cta: "Lo quiero",
  },
  {
    id: 3,
    nombre: "Virgencita de Guadalupe",
    precio: "S/55",
    imagen: "/images/03.png",
    descripcion: "Ideal para decorar espacios con un toque artesanal.",
    cta: "Lo quiero",
  },
  {
    id: 4,
    nombre: "Rosa",
    precio: "S/20",
    imagen: "/images/04.png",
    descripcion: "Un diseño único y encantador que te enamorará.",
    cta: "Lo quiero",
  },
  {
    id: 5,
    nombre: "Llavero Stitch pequeño",
    precio: "S/10",
    imagen: "/images/05.png",
    descripcion: "Detalle artesanal ideal para sorprender con cariño. Llavero perfecto para regalar.",
    cta: "Lo quiero",
  },
  {
    id: 6,
    nombre: "Osito en canasta",
    precio: "S/20",
    imagen: "/images/06.png",
    descripcion: "Costuras cuidadas y look adorable.",
    cta: "Lo quiero",
  },
  {
    id: 7,
    nombre: "Pequeña planta suculenta",
    precio: "S/20",
    imagen: "/images/07.png",
    descripcion: "Textura suave y delicada, ideal para decorar espacios.",
    cta: "Lo quiero",
  },
  {
    id: 8,
    nombre: "Oso tierno con canasta",
    precio: "S/20",
    imagen: "/images/08.png",
    descripcion: "Ideal para decorar espacios con un toque artesanal.",
    cta: "Lo quiero",
  },
  {
    id: 9,
    nombre: "Girasol amarillo",
    precio: "S/20",
    imagen: "/images/09.png",
    descripcion: "Un diseno divertido con personalidad unica, perfecto para alegrar cualquier espacio.",
    cta: "Lo quiero",
  },
  {
    id: 10,
    nombre: "Ramo de tulipanes",
    precioUnidad: "S/8",
    precioDocena: "S/84",
    imagen: "/images/10.jpeg",
    descripcion: "Un ramo de tulipanes vibrantes y coloridos, perfecto para alegrar cualquier espacio con su belleza y encanto.",
    cta: "Lo quiero",
  },
  {
    id: 11,
    nombre: "Flores variadas",
    precio: "S/20",
    imagen: "/images/12.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 12,
    nombre: "Llavero de ositos",
    precio: "S/10",
    imagen: "/images/13.png",
    descripcion: "Un llavero de ositos encantadores, perfecto para llevar contigo un toque de ternura y alegría a donde vayas.",
    cta: "Lo quiero",
  },
  {
    id: 13,
    nombre: "Virgen de Guadalupe",
    precio: "S/22",
    imagen: "/images/14.jpeg",
    descripcion: "Virgen de guadalupe con personalidad unica, en otra version.",
    cta: "Lo quiero",
  },
  {
    id: 14,
    nombre: "Flor blanca",
    precio: "S/20",
    imagen: "/images/15.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 15,
    nombre: "Llavero Pingüino rosa",
    precio: "S/10",
    imagen: "/images/16.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 16,
    nombre: "LLavero de Elefante",
    precio: "S/10",
    imagen: "/images/17.jpeg",
    descripcion: "Un llavero de Elefante encantador, perfecto para llevar contigo.",
    cta: "Lo quiero",
  },
  {
    id: 17,
    nombre: "Chuckie Finster de Rugrats",
    precio: "S/80",
    imagen: "/images/18.jpeg",
    descripcion: "Un diseno de Chuckie Finster de los Rugrats.",
    cta: "Lo quiero",
  }



];

export function buildProductWhatsAppUrl(productName) {
  const message = encodeURIComponent(
    `Hola! Me interesa el amigurumi: ${productName} 🧸`,
  );
  return `https://wa.me/${whatsappPhone}?text=${message}`;
}
