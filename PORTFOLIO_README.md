# Joel Saludares Portfolio

A light-mode, responsive professional portfolio built from AstroWind.

## Core stack

- Astro 7
- Tailwind CSS 4
- Outfit typography via Astro's native Fonts API
- Astro Content Collections for project case studies
- Markdown/MDX-ready project content
- Static deployment compatible with GitHub Pages

## Content-driven architecture

Most portfolio content is intentionally kept out of page templates:

- `src/data/site.json` — profile, contact details, CV path, skills, stats, approach, experience, and education
- `src/data/project/*.md` — projects, case studies, technology lists, screenshots, and featured status
- `public/files/Joel-Saludares-CV-2026.pdf` — downloadable CV

Adding or updating a project means editing/adding one project content file rather than changing the project page HTML.

## Main routes

- `/portfolio/`
- `/portfolio/projects`
- `/portfolio/projects/<slug>`
- `/portfolio/about`
- `/portfolio/experience`
- `/portfolio/contact`

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check:astro
npm run build
```

## Deployment

The site is configured for a static GitHub Pages deployment at `/portfolio/`. Update `src/config.yaml` if the repository base path changes.
