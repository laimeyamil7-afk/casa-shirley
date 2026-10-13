export type CmsProvider = "local" | "sanity" | "directus";
export type CheckoutMode = "whatsapp" | "cart";

export const features = {
  demoMode: true,
  /** UI de carrito (/carrito, icono, agregar). Activar junto con checkoutMode "cart". */
  cartEnabled: false,
  cmsProvider: "local" as CmsProvider,
  /** whatsapp = solo consulta; cart = checkout vía carrito (requiere cartEnabled). */
  checkoutMode: "whatsapp" as CheckoutMode,
};

export function isCartActive(): boolean {
  return features.cartEnabled && features.checkoutMode === "cart";
}

export function usesRemoteCms(): boolean {
  return features.cmsProvider !== "local";
}
