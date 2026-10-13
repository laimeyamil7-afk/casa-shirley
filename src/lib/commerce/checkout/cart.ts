import { isCartActive } from "@/config/features";
import type { Cart } from "../types";
import { whatsappCheckoutUrl } from "./whatsapp";

export type CartCheckoutStrategy = "whatsapp-summary" | "mercadopago" | "manual";

export type CartCheckoutResult =
  | { ok: true; url: string }
  | { ok: false; reason: string };

export function initiateCartCheckout(
  cart: Cart,
  strategy: CartCheckoutStrategy = "whatsapp-summary",
): CartCheckoutResult {
  if (!isCartActive()) {
    return {
      ok: false,
      reason: "Carrito desactivado. Activar cartEnabled y checkoutMode cart en features.ts.",
    };
  }
  if (cart.lines.length === 0) {
    return { ok: false, reason: "El carrito está vacío." };
  }

  switch (strategy) {
    case "whatsapp-summary":
      return { ok: true, url: whatsappCheckoutUrl(cart.lines) };
    case "mercadopago":
      return { ok: false, reason: "Mercado Pago no configurado." };
    case "manual":
      return { ok: false, reason: "Checkout manual: contactar al equipo." };
    default:
      return { ok: false, reason: "Estrategia de checkout desconocida." };
  }
}
