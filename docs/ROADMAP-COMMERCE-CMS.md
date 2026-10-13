# Roadmap: panel de productos y carrito (fase 2)

Ganchos listos en código; el demo los mantiene apagados.

## Estado actual (demo)

- Catálogo: `src/content/products.json` → `src/lib/catalog/adapters/local-json.ts`
- Academia: `src/content/courses.json` → `src/lib/academy/adapters/local-json.ts`
- Ventas: WhatsApp (`src/config/site.ts`)
- Flags: `src/config/features.ts` — `cartEnabled: false`, `checkoutMode: "whatsapp"`, `cmsProvider: "local"`

## Panel para que el cliente gestione productos

### Opción recomendada: Sanity

1. Proyecto en [sanity.io](https://www.sanity.io); schema `product` = `src/lib/catalog/types.ts` (`Product`).
2. Implementar `fetchProductsFromCms()` en `src/lib/catalog/adapters/cms.ts` (mapeo a `Product[]`).
3. Opcional: documento `course` = `src/lib/academy/types.ts`.
4. Env en build:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET=production`
   - `SANITY_API_TOKEN` (solo lectura en CI)
5. `features.cmsProvider: "sanity"` (y `usesRemoteCms()` activará academy CMS cuando exista).
6. Webhook Sanity → rebuild (Vercel/Netlify/Hostinger CI o GitHub Action).

### Opción: Directus

Colección `products`, mismo adapter, `cmsProvider: "directus"`.

### Migración desde JSON

1. Exportar `products.json` / `courses.json` como seed.
2. Importar en CMS.
3. Verificar slugs y `published: true`.
4. Apagar JSON cuando el build lea 100% del CMS.

## Carrito de compras

1. En `src/config/features.ts`:
   ```ts
   cartEnabled: true,
   checkoutMode: "cart",
   ```
2. Página **`/carrito`** ya existe (`src/pages/carrito.astro`); redirige a `/maquinas` si el carrito está off.
3. Runtime cliente: `CartRuntime.astro` + `src/lib/commerce/cart-store.ts`.
4. Checkout: `initiateCartCheckout()` en `src/lib/commerce/checkout/cart.ts`:
   - **whatsapp-summary** (implementado)
   - **mercadopago** (pendiente)
5. UI: `CartIcon`, `AddToCartButton` visibles solo con `isCartActive()`.

## Checklist antes de producción

- [ ] `demoMode: false` y quitar `noindex`
- [ ] Datos legales en `site.ts`
- [ ] Formularios conectados (Formspree / SMTP Hostinger)
- [ ] Logos oficiales de marcas
- [ ] Fotos reales de productos

Documentación de estructura: [ARCHITECTURE.md](./ARCHITECTURE.md).
