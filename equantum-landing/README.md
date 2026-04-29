# eQuantum Landing

Landing page comercial para eQuantum — Consultoría tecnológica senior.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (iconos)
- **Framer Motion** (animaciones)

## Estructura de la landing

1. **Hero** — Headline impactante + CTA + trust bar
2. **Problemas** — 3 cards de dolor actual
3. **Servicios** — 6 servicios en grid (incluye mySAP ERP)
4. **Nosotros** — Stats + propuesta de valor
5. **Casos** — 4 casos de éxito con resultados cuantificados
6. **Proceso** — 4 pasos de metodología
7. **CTA Final** — Agendamiento + contacto
8. **Footer**

## Deploy

### Local
```bash
npm install
npm run dev
```

### Vercel
1. Subir repo a GitHub
2. Importar en Vercel
3. Deploy automático

## Personalizar

- **Colores:** `tailwind.config.ts` → objeto `colors`
- **Contenido:** `app/page.tsx`
- **SEO:** `app/layout.tsx` → `metadata`
- **Contacto:** `app/page.tsx` → sección `CTA` (WhatsApp + email)

---

© 2026 eQuantum
