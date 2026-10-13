import type { Product } from "../types";
import { features } from "@/config/features";

/**
 * Fase 2: implementar por proveedor (Sanity / Directus) y mapear a Product.
 * Env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN (solo build).
 */
export async function fetchProductsFromCms(): Promise<Product[]> {
  throw new Error(
    `CMS "${features.cmsProvider}" no implementado. Ver docs/ROADMAP-COMMERCE-CMS.md y src/lib/catalog/adapters/cms.ts`,
  );
}
