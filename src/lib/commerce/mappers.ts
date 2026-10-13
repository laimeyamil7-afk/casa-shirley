import type { Product } from "@/lib/catalog";
import type { CartLine } from "./types";

export function productToCartLine(product: Product, quantity = 1): CartLine {
  return {
    productSlug: product.slug,
    name: product.name,
    quantity,
    unitPrice: product.price,
  };
}
