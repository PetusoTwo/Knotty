const whatsappPhone = "51934758261";

export const featuredProducts = [
  {
    id: 1,
    nombre: "Osito abracito",
    precio: "S/35",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Suave, abrazable y perfecto para regalos especiales.",
    cta: "Lo quiero",
  },
  {
    id: 2,
    nombre: "Conejita pastel",
    precio: "S/42",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Tonos dulces y acabado delicado hecho a mano.",
    cta: "Pedir el mio",
  },
  {
    id: 3,
    nombre: "Mini gatito luna",
    precio: "S/30",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Pequeno, tierno y facil de llevar a cualquier lugar.",
    cta: "Quiero este",
  },
  {
    id: 4,
    nombre: "Dino crochet",
    precio: "S/48",
    imagen: "/images/main.jpg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 5,
    nombre: "Llavero corazon",
    precio: "S/22",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Detalle artesanal ideal para sorprender con cariño.",
    cta: "Pedir el mio",
  },
  {
    id: 6,
    nombre: "Perrito sonador",
    precio: "S/44",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Costuras cuidadas y look adorable para coleccionar.",
    cta: "Quiero este",
  },
  {
    id: 7,
    nombre: "Pollito pocket",
    precio: "S/28",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Textura suave y expresion tierna que enamora.",
    cta: "Lo quiero",
  },
  {
    id: 8,
    nombre: "Capibara mini",
    precio: "S/46",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Ideal para decorar espacios con un toque artesanal.",
    cta: "Pedir el mio",
  },
  {
    id: 9,
    nombre: "Zorrito travieso",
    precio: "S/40",
    imagen: "/images/amigurumi-main.jpg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Quiero este",
  }
];

export function buildProductWhatsAppUrl(productName) {
  const message = encodeURIComponent(
    `Hola, estoy interesado en el amigurumi: ${productName}`,
  );
  return `https://wa.me/${whatsappPhone}?text=${message}`;
}
