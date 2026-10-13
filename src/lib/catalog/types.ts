export type BrandId = "pegasus" | "jack" | "dison" | "baoyu";

export type CategoryId =
  | "overlocks"
  | "collareta"
  | "rectas"
  | "botonera"
  | "cortadoras"
  | "doble-aguja"
  | "repuestos";

export type StockStatus = "consultar" | "disponible" | "agotado";

export interface Product {
  slug: string;
  name: string;
  brand: BrandId;
  category: CategoryId;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
  featured: boolean;
  published: boolean;
  price: number | null;
  stockStatus: StockStatus;
}

export interface BrandInfo {
  id: BrandId;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  highlight?: string;
}

export interface CategoryInfo {
  id: CategoryId;
  label: string;
}

export interface MarqueeBrand {
  id: string;
  name: string;
  logo: string;
}
