# Arquitectura del proyecto

Sitio estático Astro. La lógica de negocio vive en `src/lib/`; la UI en `src/components/`; datos demo en `src/content/`.

## Capas

| Capa | Ruta | Responsabilidad |
|------|------|-----------------|
| Config | `src/config/` | Sitio, flags (`features`), WhatsApp, nav |
| Catálogo | `src/lib/catalog/` | Productos, marcas, categorías, adapters CMS/JSON |
| Comercio | `src/lib/commerce/` | Carrito (localStorage), checkout, mappers |
| Academia | `src/lib/academy/` | Curso / formación (mismo patrón adapter) |
| Contenido | `src/content/` | `products.json`, `courses.json` (solo datos) |

## Catálogo

- **API pública:** `getProducts()`, `getProductBySlug()`, `getFeaturedProducts()`, `getProductsFiltered()`.
- **Metadatos:** `brands`, `categories`, `marqueeBrands` en `meta.ts`.
- **Adapters:** `adapters/local-json.ts` (hoy) → `adapters/cms.ts` (Sanity/Directus).
- **Selector:** `features.cmsProvider` + registro en `adapters/index.ts`.
- **Build:** caché en memoria por proceso de build (`resetProductsCache()` para scripts).

## Comercio (fase 2)

Activación en `features.ts`:

```ts
cartEnabled: true,
checkoutMode: "cart",
```

- **Store:** `cart-store.ts` (add / remove / clear / badge).
- **Checkout:** `initiateCartCheckout()` → hoy `whatsapp-summary`; stub `mercadopago`.
- **UI:** `components/commerce/*`, página `/carrito`, `CartRuntime.astro` (script solo si `isCartActive()`).

Import único: `import { addToCart, initiateCartCheckout } from "@/lib/commerce"`.

## Panel del cliente (CMS)

1. Schema alineado a `Product` y `AcademyCourse`.
2. Implementar fetch en `catalog/adapters/cms.ts` y `academy/adapters/cms.ts`.
3. `cmsProvider: "sanity" | "directus"` + env en build.
4. Webhook → rebuild.

Ver [ROADMAP-COMMERCE-CMS.md](./ROADMAP-COMMERCE-CMS.md).

## Imports

Alias `@/` → `src/` (tsconfig + Vite).

## Componentes

- `components/catalog/` — productos y cinta de marcas.
- `components/commerce/` — carrito (condicionado por flags).
- Resto — layout, formularios, páginas internas.
