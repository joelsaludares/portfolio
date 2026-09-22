# CMS Milestone 1.1

## Completed

- Kept the approved public portfolio unchanged.
- Added an Astro-managed `/admin` route so the CMS is reachable during local development.
- Kept `public/admin/config.yml` as the public Decap configuration asset.
- Enabled Decap `local_backend` for local CMS development.
- Added `npm run cms:local` to start the Decap local proxy.
- Added local CMS setup instructions.

## Current content model

`src/data/site.json` controls site-level content.

`src/data/project/*.md` controls project content.

The Astro pages/components remain presentation code. The CMS UI is the intended interface for normal content maintenance.

## Next CMS work

- Verify local create/edit project flow end-to-end.
- Verify media uploads.
- Verify profile/contact/homepage editing.
- Configure production authentication/backend after the local CMS is validated.
