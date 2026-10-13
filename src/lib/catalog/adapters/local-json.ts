import type { Product } from "../types";
import productsData from "@/content/products.json";

export async function fetchProductsFromLocalJson(): Promise<Product[]> {
  return (productsData as Product[]).filter((p) => p.published);
}
