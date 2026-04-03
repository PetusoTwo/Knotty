export const heroContent = {
    eyebrow: "Knotty Studio",
    title: "Amigurumis hechos con amor",
    subtitle:
        "Cada pieza nace a mano, puntada por puntada, para convertir recuerdos y personas especiales en muñecos únicos.",
    ctaPrimary: {
        label: "Ver catálogo",
        href: "#catalogo",
    },
    ctaSecondary: {
        label: "Pedir por WhatsApp",
    },
    whatsappPhone: "51934758261",
    whatsappMessage: "Hola Knotty, quiero pedir un amigurumi personalizado.",
    mainImage: {
        src: "/images/main.jpg",
        alt: "imagen amigurumi.",
        objectFit: "cover",
        objectPosition: "50% 22%",
    },
};

export function getHeroWhatsappLink() {
    const text = encodeURIComponent(heroContent.whatsappMessage);
    return `https://wa.me/${heroContent.whatsappPhone}?text=${text}`;
}
