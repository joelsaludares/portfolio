# Joel Saludares Portfolio

Professional portfolio built from the supplied AstroWind 1.0.0 starter.

## Stack

- Astro 7
- Tailwind CSS 4
- Astro Content Collections
- Markdown/MDX content
- Decap CMS-ready project editing
- Static GitHub Pages deployment

## Content model

Projects live in `src/data/project/*.md`. A reusable project detail template renders every project, so adding a project does not require duplicating page code.

## Routes

- `/portfolio/` — Home
- `/portfolio/projects` — Project list
- `/portfolio/projects/<slug>` — Project case study
- `/portfolio/about` — About
- `/portfolio/blog` — Insights
- `/portfolio/admin/` — CMS endpoint after configuring repository authentication

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```
