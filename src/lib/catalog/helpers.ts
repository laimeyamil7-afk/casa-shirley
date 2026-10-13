import { brands, categories } from "./meta";
import type { BrandId, CategoryId } from "./types";

export function getBrandName(brandId: BrandId): string {
  return brands.find((b) => b.id === brandId)?.name ?? brandId;
}

export function getCategoryLabel(categoryId: CategoryId): string {
  return categories.find((c) => c.id === categoryId)?.label ?? categoryId;
}
