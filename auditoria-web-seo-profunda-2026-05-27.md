# Auditoria profunda web + SEO - VANTIA

Fecha: 2026-05-27.
URL local auditada: `clientes/vantia/web/index.html`.
Objetivo: vender polerones slim fit VANTIA sin Shopify completo, llevando al usuario a reservar talla/stock por Instagram DM.

## Veredicto ejecutivo

La web tenia buena direccion visual: minimal, premium, oscura, editorial y coherente con una marca de ropa emergente. Pero tenia tres problemas criticos:

1. Usaba fotos externas de polerones/modelos que no son VANTIA.
2. Las fotos mostraban prendas anchas, no slim fit.
3. El CTA era demasiado generico: "Comprar por DM" no explicaba el siguiente paso real.

La correccion estrategica es vender **calce limpio + abrigo + tonos neutros + reserva por talla**, no "streetwear oversize".

## Score antes de ajustes

| Area | Nota | Diagnostico |
|---|---:|---|
| Aura / direccion visual | 8/10 | Minimal y premium, buena primera impresion. |
| Verdad de producto | 3/10 | Imagenes externas contradecian slim fit y podian parecer otra marca. |
| Conversion | 5/10 | CTA entendible, pero poco especifico y sin reduccion de friccion por talla. |
| SEO on-page | 4/10 | Title y H1 no explotaban busqueda "polerones slim fit en Chile". |
| SEO tecnico | 4/10 | Faltaba canonical, structured data, favicon/manifest y assets propios. |
| Confianza | 5/10 | Buena estetica, pero faltaban fotos reales, guia de talla y consistencia visual. |

## Score despues de ajustes aplicados

| Area | Nota | Diagnostico |
|---|---:|---|
| Aura / direccion visual | 8/10 | Se mantiene el tono cinematico, pero sin depender de fotos ajenas. |
| Verdad de producto | 7/10 | Ya no hay otra marca ni poleron ancho; aun falta foto real del producto. |
| Conversion | 7.5/10 | CTA ahora pide reservar talla/stock y explica que enviar por DM. |
| SEO on-page | 7/10 | Title, H1, copy y seccion SEO apuntan a "polerones slim fit en Chile". |
| SEO tecnico | 7/10 | Canonical, JSON-LD, sitemap, robots, favicon, manifest y assets locales. |
| Confianza | 6.5/10 | Mejoro mucho, pero el salto real vendra con fotos propias y testimonio/UGC. |

## Cambios aplicados

### Producto visual

- Eliminadas imagenes externas de Pexels/Unsplash.
- Creados assets propios:
  - `assets/hero-slimfit-vantia.svg`
  - `assets/product-slimfit-vantia.svg`
  - `assets/fabric-detail-vantia.svg`
  - `assets/og-vantia.svg`
  - `assets/favicon.svg`
- El sitio ya no muestra otro poleron de otra marca.
- El producto visual ya comunica una silueta mas slim/limpia.

### CTA

Antes:

```text
Comprar por DM
```

Problema:

- Muy generico.
- No le dice al usuario que debe pedir talla/stock.
- En ropa, la principal friccion es calce/talla, no solo precio.

Ahora:

```text
Reservar mi talla
Ver calce y precio
Pedir talla y stock por DM
Reservar talla por Instagram
```

Tambien se agrego:

```text
DM con color + talla + estatura. Te orientamos antes de reservar.
```

Esto reduce la duda principal y aumenta probabilidad de DM con datos utiles.

### SEO on-page

Antes:

```text
VANTIA(R) | Slim fit essentials
```

Ahora:

```text
Polerones slim fit en Chile | VANTIA(R)
```

Mejora:

- Incluye categoria.
- Incluye fit.
- Incluye pais/mercado.
- Mantiene marca.

Meta description ahora incluye:

- Polerones slim fit.
- VANTIA.
- Chile.
- Tonos neutros.
- Interior chiporro.
- Precio.

H1 ahora incluye marca y categoria:

```text
VANTIA Polerones slim fit
```

Se agrego una seccion semantica:

```text
Polerones slim fit en Chile para outfits limpios.
```

Esta seccion ayuda a Google a entender la pagina sin convertir la web en un bloque feo de SEO.

### SEO tecnico

Agregado:

- `rel="canonical"` a `https://vantiastore.com/`.
- `meta robots` index/follow.
- OpenGraph local.
- Twitter card.
- JSON-LD `Organization`.
- JSON-LD `Product`.
- JSON-LD `FAQPage`.
- `robots.txt`.
- `sitemap.xml`.
- `favicon.svg`.
- `site.webmanifest`.
- `_headers` con cabeceras basicas.

## Problemas pendientes importantes

### 1. Faltan fotos reales

La web ya no muestra otra marca, pero sigue usando ilustraciones propias temporales. Para vender ropa, esto es mejor que usar una foto falsa, pero no reemplaza fotos reales.

Fotos minimas necesarias:

- Poleron real de frente.
- Poleron real lateral.
- Poleron real espalda.
- Interior chiporro.
- Persona usando talla real.
- Foto de dos colores juntos.

### 2. Falta tabla de medidas

SEO y conversion mejoran si existe una seccion:

```text
Guia de tallas slim fit
S / M / L / XL
Ancho pecho
Largo
Manga
```

Sin medidas, el DM tendra muchas preguntas repetidas.

### 3. Falta prueba social

Cuando exista:

- Foto cliente.
- Testimonio corto.
- Captura de DM autorizada.
- "Primeras unidades entregadas".

Esto debe ir antes del FAQ o cerca de compra.

### 4. Falta canal de compra final

Instagram DM funciona para etapa inicial, pero para conversion mas fuerte se recomienda definir uno:

- Instagram DM solo.
- WhatsApp con mensaje prellenado.
- Mercado Pago Link.

Cuando exista numero WhatsApp, el CTA puede mejorar mucho:

```text
Quiero reservar mi talla VANTIA. Color: __ / Talla: __ / Comuna: __
```

## SEO: keywords prioritarias

### Principal

```text
polerones slim fit Chile
```

### Secundarias

```text
poleron slim fit hombre
poleron slim fit mujer
poleron con chiporro
polerones tonos neutros
ropa minimalista Chile
streetwear minimalista Chile
poleron negro slim fit
poleron beige slim fit
```

### Marca

```text
VANTIA
VANTIA Chile
VANTIA ropa
VANTIA polerones
vantiastore
```

## Recomendacion de estructura final para publicar

Orden ideal:

1. Hero con visual real o asset VANTIA controlado.
2. Precio y atributos visibles antes del primer scroll.
3. Producto + fit + stock.
4. Fotos reales de calce.
5. Guia de talla.
6. Como comprar.
7. FAQ.
8. CTA final.

La version actual ya cubre 1, 2, 3, 5, 6, 7 y 8. Falta mejorar 4 con fotos reales.

## Checklist antes de apuntar dominio

- [ ] Reemplazar assets temporales por fotos reales si existen.
- [ ] Confirmar tallas y colores reales.
- [ ] Confirmar canal de compra definitivo.
- [ ] Convertir `og-vantia.svg` a PNG/JPG para maxima compatibilidad social.
- [ ] Publicar en Cloudflare Pages/GitHub Pages.
- [ ] Cambiar DNS desde Shopify al hosting nuevo.
- [ ] Verificar `https://vantiastore.com`.
- [ ] Subir sitemap a Google Search Console.
- [ ] Probar link desde Instagram bio.

## Conclusion

La web debe mantener el aura actual, pero no puede fingir producto. La version corregida ahora protege la marca: no muestra polerones de terceros, no promete oversize, comunica slim fit y lleva al usuario a una accion mas concreta.

La siguiente mejora que mas vendera no es mas diseno: son fotos reales del poleron slim fit.

