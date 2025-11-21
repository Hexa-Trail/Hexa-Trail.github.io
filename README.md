# HexaTrail – Site Vitrine

Ce dépôt contient le site vitrine officiel du projet **HexaTrail**, un système de télémétrie pour VTT combinant un hardware compact et un logiciel d’analyse avancé.  
Le site présente le projet, le matériel, le logiciel d’analyse et les informations de contact.

---

## 🚀 Objectif

Présenter de façon claire et moderne les fonctionnalités du projet HexaTrail :  
- Télémétrie embarquée haute fréquence  
- Analyse de données via interface web  
- Outils de cinématique intégrés  
- Présentation du matériel et du logiciel  

Le site est volontairement simple, responsive et basé sur un design glassmorphism clair.

---

## 🧱 Structure du projet

```
index.html
index_resources/
│── index_style.css
│── index_script.js      # Carrousel + interactions légères
│── pictures/            # Images du site
│── Hexa Trail logo v3.png
└── …
```

---

## 🎨 Technologies utilisées

- **HTML5**
- **CSS3**
  - Design clair + glassmorphism
  - Composants réutilisables (cards, boutons, sections…)
  - Responsive mobile / tablette / desktop
- **JavaScript minimal**
  - Carrousel automatique
  - Indicateurs interactifs

Aucune dépendance externe pour garantir légèreté et rapidité.

---

## 🌐 Déploiement

Le déploiement est assuré via **GitHub Pages**.  
En cas de modifications CSS, un rafraîchissement forcé peut être nécessaire :

- Windows : `Ctrl + F5`  
- macOS : `Cmd + Shift + R`

Pour éviter les problèmes de cache, utiliser un paramètre versionné :

```html
<link rel="stylesheet" href="index_resources/index_style.css?v=2">
```

---

## 📸 Aperçus à venir

Des captures seront ajoutées prochainement.

---

## 🛠️ Maintenance

Pour modifier le style, adapter de préférence :  
- Les variables `:root` (palette, radius, ombres)  
- Les classes globales (`glass-card`, `card-grid`, `btn-*`, etc.)

Ces classes seront progressivement synchronisées avec l’application HexaTrail.

---

## 📧 Contact

Pour en savoir plus :  
**nathan.cruzel@etu.emse.fr**

---

## 📜 Licence

Projet sous licence MIT.
