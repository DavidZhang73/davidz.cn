# DavidZ homepage

Vue 3 / Vite static homepage. Requires Node 22+ and pnpm 10.24.0.

- `pnpm install --frozen-lockfile`
- `pnpm run dev`
- `pnpm run build` (typecheck, client bundle, build-time Vue rendering)
- `pnpm test` (verify generated navigation, assets and bundle boundaries)
- `pnpm run preview --host 127.0.0.1`

Production serves only `dist/` through Nginx. No Node server, Worker or paid service is required. Build-time SSR writes the complete navigation HTML; Vue hydrates it in the browser. The physics animation is fetched after window load and two animation frames. A working theme button remains available while it loads, including when the animation request fails.

Cards use local Vite-fingerprinted assets. Three first-row mobile icons are eager; remaining icons use native lazy loading (visible desktop icons still load when near the viewport). Dark/light logos use a single picture element, with browser theme selection before hydration and the manual theme selection afterward. Original public image paths remain available for compatibility. Slidev's logo was vendored from https://sli.dev/logo.svg on 2026-10-15.

The inline head script applies the system color theme before paint. The preference behavior is unchanged: manual changes last for the current page session, and a system theme change updates the page.

Shared Nginx cache changes are staged under [deploy/nginx](deploy/nginx/README.md) and are **not applied by CI**. They require the later coordinated server rollout. Pushing `main` still triggers the existing frontend deployment workflow; do not push until the rollout is approved.

## Regional www deployment

www.davidz.cn serves one build on CN and SF. Apex DNS stays at CN for SSH; web redirects are enabled separately after DNS cutover. CI verifies both staging manifests before publishing assets then HTML, retaining old hash assets and previous versions under the homepage site's .deploy directory. On failure it restores attempted origins. CI never changes DNS or web-server configuration.

SF uses the existing PRIVATE_KEY only if already authorized there; preflight checks both hosts before uploads and installs no key. SF variables select ubuntu, port 22, pinned host keys, and /opt/1panel/www/sites/davidz.cn/index/.

The live 00-public-static-v1.conf already recognizes www.davidz.cn. The older deploy/nginx reference is not a deployment source and must not replace live policy.
