const whatsappPhone = "51934758261";

export const featuredProducts = [
  {
    id: 1,
    nombre: "Pingüino abrazable",
    precio: "S/35",
    imagen: "/images/01.jpg",
    descripcion: "Suave, abrazable y perfecto para regalos especiales.",
    cta: "Lo quiero",
  },
  {
    id: 2,
    nombre: "Ovejitas peludas",
    precio: "S/42",
    imagen: "/images/02.jpg",
    descripcion: "Tonos dulces y acabado delicado hecho a mano.",
    cta: "Pedir el mio",
  },
  {
    id: 3,
    nombre: "Mini gatito tierno",
    precio: "S/30",
    imagen: "/images/03.jpg",
    descripcion: "Pequeno, tierno y facil de llevar a cualquier lugar.",
    cta: "Quiero este",
  },
  {
    id: 4,
    nombre: "Osita soñadora",
    precio: "S/48",
    imagen: "/images/04.jpg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 5,
    nombre: "Osita miniatura",
    precio: "S/22",
    imagen: "/images/05.jpg",
    descripcion: "Detalle artesanal ideal para sorprender con cariño.",
    cta: "Pedir el mio",
  },
  {
    id: 6,
    nombre: "Oso hormiguero",
    precio: "S/44",
    imagen: "/images/06.jpg",
    descripcion: "Costuras cuidadas y look adorable para coleccionar.",
    cta: "Quiero este",
  },
  {
    id: 7,
    nombre: "Oso pocket",
    precio: "S/28",
    imagen: "/images/007.jpg",
    descripcion: "Textura suave y expresion tierna que enamora.",
    cta: "Lo quiero",
  },
  {
    id: 8,
    nombre: "Muñeca artesanal",
    precio: "S/46",
    imagen: "/images/08.jpg",
    descripcion: "Ideal para decorar espacios con un toque artesanal.",
    cta: "Pedir el mio",
  },
  {
    id: 9,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/09.jpg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Quiero este",
  }
];

export function buildProductWhatsAppUrl(productName) {
  const message = encodeURIComponent(
    `Hola! Me interesa el amigurumi: ${productName} 🧸`,
  );
  return `https://wa.me/${whatsappPhone}?text=${message}`;
}
