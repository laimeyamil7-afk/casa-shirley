import { isCartActive } from "@/config/features";
import type { Cart, CartLine } from "./types";
import { cartLineCount, emptyCart } from "./types";

const STORAGE_KEY = "casashirley_cart";

export function loadCart(): Cart {
  if (typeof localStorage === "undefined") return emptyCart();
  if (!isCartActive()) return emptyCart();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyCart();
    return JSON.parse(raw) as Cart;
  } catch {
    return emptyCart();
  }
}

export function saveCart(cart: Cart): void {
  if (!isCartActive()) return;
  cart.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(line: CartLine): Cart {
  if (!isCartActive()) return emptyCart();
  const cart = loadCart();
  const existing = cart.lines.find((l) => l.productSlug === line.productSlug);
  if (existing) {
    existing.quantity += line.quantity;
  } else {
    cart.lines.push(line);
  }
  saveCart(cart);
  return cart;
}

export function setLineQuantity(productSlug: string, quantity: number): Cart {
  const cart = loadCart();
  if (quantity <= 0) {
    cart.lines = cart.lines.filter((l) => l.productSlug !== productSlug);
  } else {
    const line = cart.lines.find((l) => l.productSlug === productSlug);
    if (line) line.quantity = quantity;
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(productSlug: string): Cart {
  const cart = loadCart();
  cart.lines = cart.lines.filter((l) => l.productSlug !== productSlug);
  saveCart(cart);
  return cart;
}

export function clearCart(): Cart {
  const cart = emptyCart();
  saveCart(cart);
  return cart;
}

export function getCartItemCount(): number {
  return cartLineCount(loadCart());
}
