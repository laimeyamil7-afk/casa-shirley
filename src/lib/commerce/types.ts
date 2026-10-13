export interface CartLine {
  productSlug: string;
  name: string;
  quantity: number;
  unitPrice: number | null;
}

export interface Cart {
  lines: CartLine[];
  updatedAt: string;
}

export function emptyCart(): Cart {
  return { lines: [], updatedAt: new Date().toISOString() };
}

export function cartLineCount(cart: Cart): number {
  return cart.lines.reduce((sum, line) => sum + line.quantity, 0);
}
