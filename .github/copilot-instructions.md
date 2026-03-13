# Project Guidelines

## Code Style
- Keep changes minimal and focused on the requested task.
- Follow existing Astro/Starlight patterns already used in this repo.
- Prefer editing `src/styles/custom.css` for global visual adjustments.
- Do not introduce new frameworks or tooling unless explicitly requested.

## Architecture
- This is an Astro docs site using Starlight.
- Main config lives in `astro.config.mjs`.
- Documentation content lives under `src/content/docs/`.
- Content collections are defined in `src/content.config.ts` using Starlight `docsLoader()` and `docsSchema()`.
- Theme behavior is customized in `src/components/ThemeProvider.astro`.

## Build and Test
- Install: `npm install` (CI uses `npm ci`).
- Dev server: `npm run dev` (or `npm start`).
- Production build: `npm run build`.
- Preview build: `npm run preview`.
- There is currently no dedicated test script; validate changes with `npm run build`.

## Conventions
- Write user-facing docs in French unless a task explicitly asks otherwise.
- For strategy pages, use frontmatter (`title`, `description`) and Markdown/MDX in `src/content/docs/donjons/**`.
- Reuse Starlight components and callout syntax already present in existing dungeon pages.
- Keep links and assets compatible with GitHub Pages deployment.

## Deployment Pitfalls
- `astro.config.mjs` sets a dynamic `base` path for GitHub Actions; avoid hardcoded absolute paths.
- Build output is `dist/` and is deployed by `.github/workflows/deploy.yml` on push to `main`.
- `disable404Route: true` is set in Starlight config; use content-based 404 handling in docs.