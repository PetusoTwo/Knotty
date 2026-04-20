const whatsappPhone = "51934758261";

export const featuredProducts = [
  {
    id: 1,
    nombre: "Pingüino abrazable",
    precio: "S/35",
    imagen: "/images/01.png",
    descripcion: "Suave, abrazable y perfecto para regalos especiales.",
    cta: "Lo quiero",
  },
  {
    id: 2,
    nombre: "Ovejitas peludas",
    precio: "S/42",
    imagen: "/images/02.png",
    descripcion: "Tonos dulces y acabado delicado hecho a mano.",
    cta: "Lo quiero",
  },
  {
    id: 3,
    nombre: "Mini gatito tierno",
    precio: "S/30",
    imagen: "/images/03.png",
    descripcion: "Pequeno, tierno y facil de llevar a cualquier lugar.",
    cta: "Lo quiero",
  },
  {
    id: 4,
    nombre: "Osita soñadora",
    precio: "S/48",
    imagen: "/images/04.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 5,
    nombre: "Osita miniatura",
    precio: "S/22",
    imagen: "/images/05.png",
    descripcion: "Detalle artesanal ideal para sorprender con cariño.",
    cta: "Lo quiero",
  },
  {
    id: 6,
    nombre: "Oso hormiguero",
    precio: "S/44",
    imagen: "/images/06.png",
    descripcion: "Costuras cuidadas y look adorable para coleccionar.",
    cta: "Lo quiero",
  },
  {
    id: 7,
    nombre: "Oso pocket",
    precio: "S/28",
    imagen: "/images/07.png",
    descripcion: "Textura suave y expresion tierna que enamora.",
    cta: "Lo quiero",
  },
  {
    id: 8,
    nombre: "Muñeca artesanal",
    precio: "S/46",
    imagen: "/images/08.png",
    descripcion: "Ideal para decorar espacios con un toque artesanal.",
    cta: "Lo quiero",
  },
  {
    id: 9,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/09.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 10,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/10.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 11,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/11.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 12,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/12.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 13,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/13.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 14,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/14.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 15,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/15.png",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 16,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/16.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 17,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/17.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  },
  {
    id: 18,
    nombre: "Osito tierno",
    precio: "S/40",
    imagen: "/images/18.jpeg",
    descripcion: "Un diseno divertido con personalidad unica.",
    cta: "Lo quiero",
  }



];

export function buildProductWhatsAppUrl(productName) {
  const message = encodeURIComponent(
    `Hola! Me interesa el amigurumi: ${productName} 🧸`,
  );
  return `https://wa.me/${whatsappPhone}?text=${message}`;
}
