# Web de marca personal — Nuria Morales

Proyecto Astro (Content Collections + Markdown) siguiendo la Fase 0 aprobada:
sistema de marca Bodoni Moda + Jost + Cinzel, paleta Rosa Pétalo/Beige/Gold/White/Dark Grey,
funnel completo Discover → Convert, SEO técnico y arquitectura AI Search.

## Desarrollo local

```
npm install
npm run dev
```

## Build de producción

```
npm run build
npm run preview
```

## Deploy en Netlify

1. Sube este proyecto a un repositorio de GitHub.
2. En Netlify: "Add new site" → "Import an existing project" → conecta el repositorio.
3. Build command: `npm run build` — Publish directory: `dist`
4. Conecta el dominio personalizado desde Site settings → Domain management.

## Contenido editable

- Proyectos: `src/content/proyectos/*.md`
- Artículos de Insights: `src/content/insights/*.md`
- Textos de página fija: directamente en cada `.astro` dentro de `src/pages`

## Pendiente antes de publicar (marcado con [PLACEHOLDER] en el código)

- Fotografías reales (hero, about, proyectos, artículos) en `public/images`
- Email, LinkedIn e Instagram reales en `Footer.astro` y `contacto.astro`
- Textos legales (privacy, cookies, legal notice) con asesoría legal
- Resultados/outcome de los casos de Selected Work, solo cuando estén verificados
