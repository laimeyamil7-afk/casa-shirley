export const academyName = "Global Conexión Importación";

export const site = {
  name: "Casa Shirley",
  tagline: "Importador de máquinas de coser industriales",
  description:
    "Importadores directos de máquinas de coser industriales, repuestos y accesorios. Venta mayorista y minorista. Global Conexión Importación.",
  url: "https://casashirley.com.ar",
};

export const whatsappNumber = "5491139112314";
export const whatsappDisplay = "11 3911-2314";
export const whatsappDefaultMessage =
  "Hola Casa Shirley, quiero hacer una consulta.";

export function whatsappUrl(text?: string): string {
  const message = text ?? whatsappDefaultMessage;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappProductMessage(productName: string): string {
  return `Hola Casa Shirley, consulto por: ${productName}.`;
}

export const social = {
  instagram: "https://www.instagram.com/casa_shirley/",
  tiktok: "https://www.tiktok.com/@casa_shirley",
  facebook: "https://www.facebook.com/casa.shirley.sa/",
};

export const legalPlaceholders = {
  razonSocial: "[Por confirmar — Casa Shirley e Hijas S.A.]",
  cuit: "[Por confirmar — 30-71771458-6]",
  domicilioFiscal: "[Por confirmar]",
  domicilioComercial: "[Por confirmar]",
  horarios: "[Por confirmar]",
  email: "casashirley@gmail.com",
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/maquinas", label: "Máquinas" },
  { href: "/marcas", label: "Marcas" },
  { href: "/academia", label: "Global Conexión" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
