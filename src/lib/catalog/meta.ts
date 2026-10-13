import type { BrandInfo, CategoryInfo, MarqueeBrand } from "./types";

export const categories: CategoryInfo[] = [
  { id: "overlocks", label: "Overlocks" },
  { id: "collareta", label: "Collareta / Tapa costura" },
  { id: "rectas", label: "Rectas" },
  { id: "botonera", label: "Botonera" },
  { id: "cortadoras", label: "Cortadoras" },
  { id: "doble-aguja", label: "Doble aguja" },
  { id: "repuestos", label: "Repuestos y accesorios" },
];

export const brands: BrandInfo[] = [
  {
    id: "pegasus",
    name: "PEGASUS",
    tagline: "Precisión japonesa en overlock",
    highlight: "Línea premium para producción exigente",
    description:
      "Referente mundial en overlocks e interlock. Destaca por precisión, durabilidad y terminaciones de alta calidad en procesos industriales.",
    logo: "/images/brands/pegasus.svg",
  },
  {
    id: "jack",
    name: "JACK",
    tagline: "Tecnología inteligente en cada costura",
    description:
      "Marca innovadora en máquinas electrónicas: equipos eficientes, silenciosos y de bajo consumo, pensados para optimizar la producción.",
    logo: "/images/brands/jack.svg",
  },
  {
    id: "dison",
    name: "DISON",
    tagline: "Rendimiento y practicidad",
    description:
      "Soluciones eficientes en maquinaria textil, con equipos funcionales, fácil mantenimiento y excelente relación precio-calidad.",
    logo: "/images/brands/dison.svg",
  },
  {
    id: "baoyu",
    name: "BAOYU",
    tagline: "Calidad al mejor costo",
    description:
      "Alternativa robusta y versátil, adaptada a talleres y plantas que buscan equilibrio entre inversión y rendimiento.",
    logo: "/images/brands/baoyu.svg",
  },
];

/** Cinta del home: marcas propias + aliadas comerciales. */
export const marqueeBrands: MarqueeBrand[] = [
  { id: "pegasus", name: "PEGASUS", logo: "/images/brands/pegasus.svg" },
  { id: "jack", name: "JACK", logo: "/images/brands/jack.svg" },
  { id: "dison", name: "DISON", logo: "/images/brands/dison.svg" },
  { id: "baoyu", name: "BAOYU", logo: "/images/brands/baoyu.svg" },
  { id: "siruba", name: "SIRUBA", logo: "/images/brands/siruba.svg" },
  { id: "kansai", name: "KANSAI SPECIAL", logo: "/images/brands/kansai.svg" },
  { id: "juki", name: "JUKI", logo: "/images/brands/juki.svg" },
  { id: "sunstar", name: "SUNSTAR", logo: "/images/brands/sunstar.svg" },
  { id: "typical", name: "TYPICAL", logo: "/images/brands/typical.svg" },
  { id: "zoje", name: "ZOJE", logo: "/images/brands/zoje.svg" },
  { id: "brother", name: "BROTHER", logo: "/images/brands/brother.svg" },
  { id: "gemsy", name: "GEMSY", logo: "/images/brands/gemsy.svg" },
];
