# Local CMS Setup

The public portfolio stays unchanged. This adds a working local Decap CMS route at `/admin` and a local content proxy.

## 1. Start the Decap local proxy

Open Terminal 1 at the project root:

```bash
npm run cms:local
```

This starts the Decap proxy on port 8081 by default.

## 2. Start Astro

Open Terminal 2 at the same project root:

```bash
npm run dev
```

Then open:

```text
http://localhost:4321/admin
```

## 3. What local CMS mode does

With `local_backend: true`, Decap connects to the local repository through the local proxy while you develop. This is intended for local CMS testing.

## 4. Production

The deployed CMS will use the configured Git backend instead of the local proxy. Authentication/deployment setup is handled separately for the hosting provider.
