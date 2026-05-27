# Deploy y DNS - VANTIA(R)

## Recomendacion

Publicar esta carpeta como sitio estatico y apuntar `vantiastore.com` al nuevo hosting.

Orden recomendado:

1. Cloudflare Pages.
2. GitHub Pages.
3. Vercel Pro si se quiere usar Vercel para uso comercial.

## Antes de tocar DNS

1. Entrar a Shopify.
2. Exportar productos/clientes/pedidos si hay datos utiles.
3. Cancelar apps pagadas que ya no se usen.
4. Confirmar donde se administra el dominio:
   - Shopify Domains, si fue comprado en Shopify.
   - Google Domains / Squarespace / otro proveedor, si solo estaba conectado a Shopify.
5. Activar temporalmente pagina con password en Shopify si la tienda antigua sigue visible.

Texto temporal recomendado:

```text
VANTIA(R) esta preparando su nueva etapa.
Essentials minimalistas, polerones slim fit y tonos neutros.
Pedidos por Instagram: @vantia.cl
```

## Cloudflare Pages

Opcion recomendada para costo mensual bajo.

Pasos:

1. Crear repositorio con esta carpeta como sitio.
2. Entrar a Cloudflare Pages.
3. Crear proyecto desde el repo.
4. Build command: dejar vacio.
5. Output directory: `/` si el repo solo contiene la web, o `clientes/vantia/web` si se publica desde este repo completo.
6. Agregar dominio personalizado: `vantiastore.com`.
7. Agregar tambien `www.vantiastore.com`.
8. Seguir los DNS que Cloudflare indique.

## GitHub Pages

Pasos:

1. Crear repo publico para la web VANTIA.
2. Subir `index.html`, `styles.css`, `script.js`.
3. Ir a Settings -> Pages.
4. Source: deploy from branch.
5. Branch: main / root.
6. Custom domain: `vantiastore.com` o `www.vantiastore.com`.
7. Activar HTTPS.

## DNS actual observado

Al 2026-05-27:

```text
vantiastore.com -> Shopify
www.vantiastore.com -> shops.myshopify.com
Nameservers -> ns-cloud-a*.googledomains.com
```

Para salir de Shopify:

- Quitar A record que apunta a Shopify.
- Quitar CNAME `www` que apunta a `shops.myshopify.com`.
- Crear los registros que entregue Cloudflare/GitHub.

## Cuidado si el dominio fue comprado en Shopify

Si el dominio fue comprado dentro de Shopify y quieres salir completamente:

1. No desactivar la tienda antes de asegurar el dominio.
2. Shopify Admin -> Settings -> Domains.
3. Domain settings -> Transfer to another provider.
4. Guardar codigo de autorizacion.
5. Transferir a Cloudflare, Namecheap u otro proveedor.
6. Usar hosting con HTTPS para evitar problemas por HSTS.

## Checklist post-deploy

- [ ] `https://vantiastore.com` carga nueva landing.
- [ ] `https://www.vantiastore.com` redirige o carga igual.
- [ ] HTTPS activo.
- [ ] Link de Instagram funciona.
- [ ] Se ve bien en celular.
- [ ] Bio de Instagram apunta al dominio nuevo.
- [ ] Shopify antiguo no queda visible al publico.
