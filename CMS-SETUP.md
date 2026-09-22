# Joel Saludares Portfolio CMS

The portfolio now uses **Decap CMS** so normal portfolio maintenance does not require editing Astro pages, JSON, or Markdown by hand.

## What you can manage

- Profile and contact information
- Home page statistics, focus areas, and approach
- Skills and technologies
- Experience and education
- About page copy
- Contact page copy
- CV upload/replacement
- Logo/branding image
- Projects: add, edit, feature, remove
- Project images and galleries
- Project case-study content

## CMS URL

After deployment, open:

`https://YOUR-SITE-DOMAIN/admin/`

## Netlify authentication setup

This project is configured for the Decap `git-gateway` backend. Decap documents Git Gateway with Netlify Identity as the standard setup: enable Netlify Identity for the site, choose **Invite only** registration, and enable **Git Gateway** under Identity services.

Then invite the email address that should be allowed to manage the portfolio.

## Important behavior

The CMS writes your changes back to the Git repository. The hosting platform then rebuilds the Astro site, so the public portfolio receives the updated content after the deploy completes.

This is intentional: the public site remains a fast static Astro site, while Decap provides the non-hardcoded content management UI.

## Local development

The public site can still be run normally with:

```bash
npm install
npm run dev
```

For CMS editing, use the deployed `/admin/` route after Git Gateway/Identity is configured. The CMS saves to the configured `main` branch.
