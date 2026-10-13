import { features } from "@/config/features";
import { productsAdapters } from "./adapters";
import type { BrandId, CategoryId, Product } from "./types";

export { brands, categories, marqueeBrands } from "./meta";
export { getBrandName, getCategoryLabel } from "./helpers";
export type { Product, BrandId, CategoryId, BrandInfo, CategoryInfo, MarqueeBrand } from "./types";

let productsCache: Product[] | null = null;

async function loadProducts(): Promise<Product[]> {
  if (productsCache) return productsCache;
  const adapter = productsAdapters[features.cmsProvider];
  productsCache = await adapter();
  return productsCache;
}

/** Invalida caché (útil en tests o scripts de migración). */
export function resetProductsCache(): void {
  productsCache = null;
}

export async function getProducts(): Promise<Product[]> {
  return loadProducts();
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await loadProducts();
  return products.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const products = await loadProducts();
  return products.filter((p) => p.featured).slice(0, limit);
}

export async function getProductsFiltered(filters: {
  brand?: BrandId;
  category?: CategoryId;
}): Promise<Product[]> {
  let products = await loadProducts();
  if (filters.brand) {
    products = products.filter((p) => p.brand === filters.brand);
  }
  if (filters.category) {
    products = products.filter((p) => p.category === filters.category);
  }
  return products;
}
