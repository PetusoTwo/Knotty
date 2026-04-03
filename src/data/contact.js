export const contactContent = {
  eyebrow: "Mundo de ideas",
  title: "No necesitas explicarlo perfecto...\nsolo empieza con una idea",
  subtitle:
    "Haz clic en una idea, y en Knotty la tejemos para ti punto a punto.",
  floatingIdeas: [
    "Quiero un Stitch",
    "Un capibara porfa",
    "Algo unico...",
    "Un gatito tierno",
    "Un amigurumi de mi mascota",
    "Una figura de mi serie favorita",
    "Un goku para mi hijo",
  ],
  whatsappPhone: "51934758261",
};

export function getBaseWhatsappMessage() {
  return (
    "Hola! Quiero un amigurumi 🧸✨\n" +
    "Tengo en mente algo especial, pero quiero su ayuda para definirlo mejor.\n\n" +
    "Podrian ayudarme?"
  );
}

export function buildWhatsappUrlFromIdea(ideaText = "") {
  const cleanIdea = ideaText.trim();
  const message =
    cleanIdea.length > 0
      ? `Hola! Quiero un amigurumi de: ${cleanIdea} ✨ ¿Me pueden ayudar?`
      : getBaseWhatsappMessage();

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contactContent.whatsappPhone}?text=${encoded}`;
}
