# Casa Shirley — sitio web (demo)

Sitio estático multipágina para **Casa Shirley**: maquinaria textil, ventas por WhatsApp y formación **Global Conexión Importación**.

Stack: [Astro](https://astro.build) 5 + Tailwind CSS 4.

## Requisitos

- Node.js 20+

## Desarrollo local

```bash
npm install
npm run dev
```

En PowerShell, si hace falta: `npm.cmd run dev`.

Abrí [http://localhost:4321](http://localhost:4321).

## Build de producción

```bash
npm run build
npm run preview
```

Salida en `dist/`.

## Publicar manualmente

### Hostinger (shared)

1. `npm run build`
2. Subí el **contenido** de `dist/` a `public_html`

### Vercel / Netlify / Cloudflare Pages

- Build: `npm run build`
- Output: `dist`
- Node 20+

## Configuración

| Archivo | Uso |
|---------|-----|
| `src/config/site.ts` | WhatsApp, redes, legales |
| `src/config/features.ts` | Demo, carrito, CMS |
| `src/content/products.json` | Catálogo demo |
| `src/content/courses.json` | Academia demo |

WhatsApp ventas: **11 3911-2314** (`5491139112314`).

## Estructura (resumen)

```
src/
  config/           # site + features (+ barrel @/config)
  content/          # JSON demo (reemplazable por CMS)
  lib/
    catalog/        # productos, adapters, meta marcas
    commerce/       # carrito + checkout
    academy/        # curso / formación
  components/
    catalog/        # ProductCard, BrandStrip, …
    commerce/       # carrito (fase 2)
  pages/
```

Imports con alias `@/` → `src/`.

## Extensibilidad

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — capas y convenciones
- [docs/ROADMAP-COMMERCE-CMS.md](docs/ROADMAP-COMMERCE-CMS.md) — panel (Sanity/Directus) y carrito
