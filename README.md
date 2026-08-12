# Portfolio — Michel Siatou

Portfolio personnel construit en React + Vite, pensé pour un développeur frontend
junior qui se lance en freelance depuis Yaoundé.

## Concept de design

Identité "carnet de chantier numérique" : palette encre / sable / terracotta / sauge,
typographie Fraunces (titres) + Inter (texte) + Caveat (notes manuscrites), et une
fiche de projet façon post-it pour rappeler que chaque site est un vrai chantier en
construction, pas une démo figée.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera accessible sur http://localhost:5173

## Build de production

```bash
npm run build
```

Les fichiers prêts à déployer seront dans le dossier `dist/`.

## Déployer sur Vercel

1. Pousse ce projet sur un repo GitHub
2. Connecte le repo sur vercel.com → "New Project"
3. Vercel détecte automatiquement Vite, aucune config nécessaire

## Structure

```
src/
  components/
    Header.jsx     — navigation + menu mobile
    Hero.jsx        — accroche + fiche projet Mayé Cameroun
    Projects.jsx    — grille de projets (à compléter au fur et à mesure)
    Parcours.jsx    — timeline formation + autodidaxie
    Skills.jsx      — compétences avec niveau visuel
    Contact.jsx     — bloc contact final
    Footer.jsx
  index.css         — tokens de design (couleurs, typo, layout)
  App.jsx
```

## Prochaines étapes suggérées

- Remplacer les deux cartes "Prochain template" dans `Projects.jsx` par de vrais
  projets dès qu'ils sont prêts (restaurant, immobilier, etc.)
- Une fois Mayé Cameroun terminé et déployé, ajouter le lien réel (`link: "https://..."`)
  et idéalement une capture d'écran du site
- Ajouter une photo ou un portrait illustré dans le Hero si tu veux personnaliser
  davantage
- Déployer sur Vercel et connecter un nom de domaine si tu en achètes un
