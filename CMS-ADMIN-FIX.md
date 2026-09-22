# CMS Admin Fix

The CMS config is directly reachable at `/admin/config.yml`, but Decap's admin shell was still failing to resolve it from the Astro admin route.

This patch moves the Decap entry point back to the conventional static `public/admin/index.html` location and makes `/admin` redirect to it.

## Apply to the existing `portfolio-v2`

1. Copy `public/admin/index.html` into `public/admin/index.html`.
2. Replace `src/pages/admin/index.astro` with the patched file.
3. Keep the existing `public/admin/config.yml` unchanged.
4. Keep `local_backend: true` in `config.yml`.
5. Keep the existing Decap proxy process running on port 8081.
6. Run `npm run dev` and open `http://localhost:4321/admin`.

Expected result: Decap loads the CMS UI without the `Failed to load config.yml (404)` message.
