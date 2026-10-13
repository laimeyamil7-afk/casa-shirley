import { whatsappUrl } from "@/config/site";
import type { CartLine } from "../types";

export function whatsappCheckoutUrl(lines: CartLine[]): string {
  if (lines.length === 0) {
    return whatsappUrl("Hola Casa Shirley, quiero armar un pedido.");
  }
  const body = lines
    .map(
      (l, i) =>
        `${i + 1}. ${l.name} x${l.quantity}${l.unitPrice != null ? ` ($${l.unitPrice})` : ""}`,
    )
    .join("\n");
  return whatsappUrl(`Hola Casa Shirley, consulto por este pedido:\n\n${body}`);
}
