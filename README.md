# Web estática VANTIA®

Landing/catálogo propio en `vantiastore.com`, sin depender de Shopify como tienda completa.

**Producto actual:** poleron canguro premium con chiporro por dentro y bolsillo canguro.
**Campaña:** Día del Padre — "El regalo perfecto para papá".

## Archivos

- `index.html` — estructura de la landing.
- `styles.css` — identidad visual y responsive.
- `script.js` — scroll suave y tono del header.
- `deploy-dns.md` — pasos para publicar y apuntar el dominio.
- `CNAME` — dominio para GitHub Pages.
- `_headers` — cabeceras básicas para Cloudflare Pages.
- `vercel.json` — configuración de despliegue en Vercel.
- `robots.txt` y `sitemap.xml` — indexación básica.
- `site.webmanifest` — manifiesto PWA.
- `assets/` — visuales propios de VANTIA.
- `404.html` — página de error simple.

## Producto y precios

- Colores: gris claro, gris oscuro, negro, café oscuro.
- Tallas: S, M, L, XL.
- Lanzamiento: 1 x $13.990 · 2 x $21.990 · 3 x $29.990 CLP.
- Envíos: a domicilio (con recargo según dirección), regiones disponibles, Región Metropolitana.

## Modelo de venta

```text
Instagram/Reels -> vantiastore.com -> color/talla/precio -> WhatsApp +56 9 5493 4812
```

## Pendientes antes de publicar fuerte

1. Reemplazar las imágenes de producto por fotografía real cuando esté disponible
   (mismas proporciones; ver assets/photos/README.md).
2. Confirmar stock real por color y talla.
3. Confirmar valores y tiempos de envío por comuna.

## Cómo probar local

Abrir index.html directo en el navegador. No requiere build, Node ni servidor.
