import type { CmsProvider } from "@/config/features";
import type { Product } from "../types";
import { fetchProductsFromCms } from "./cms";
import { fetchProductsFromLocalJson } from "./local-json";

export type ProductsAdapter = () => Promise<Product[]>;

export const productsAdapters: Record<CmsProvider, ProductsAdapter> = {
  local: fetchProductsFromLocalJson,
  sanity: fetchProductsFromCms,
  directus: fetchProductsFromCms,
};
