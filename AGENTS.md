# AGENTS

## Project Overview
- Vite + Vue 3 single-page app with Tailwind CSS v4 and Matter.js.
- Package manager: pnpm.
- Styling entrypoint: src/main.css.

## Commands
- Install: pnpm install
- Dev server: pnpm run dev
- Type check: pnpm run tsc
- Build: pnpm run build
- Preview: pnpm run preview

## Structure
- src/App.vue: main layout and page structure.
- src/components/: UI components.
- src/sites.ts: data for cards.

## Tooling Notes
- Tailwind CSS is wired through the Vite plugin.
- CI uses pnpm and Node 22.
