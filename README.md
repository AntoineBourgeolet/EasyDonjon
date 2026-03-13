# EasyDonjon

Documentation ultra-rapide des stratégies de donjons World of Warcraft avec Astro + Starlight.

## Développement

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Structure de contenu

- Les pages de stratégie sont dans `src/content/docs/donjons/`
- Exemple actuel : `src/content/docs/donjons/bc/terrasse-du-magistere.md`

## Déploiement GitHub Pages

- Le workflow est dans `.github/workflows/deploy.yml`
- Push sur `main` => build + déploiement automatique sur GitHub Pages
- La config `site/base` est gérée dans `astro.config.mjs` pour un build compatible Pages
