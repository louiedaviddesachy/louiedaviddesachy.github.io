# 🚀 Guide de déploiement sur GitHub Pages

Ce guide vous explique comment déployer votre site personnel sur `louiedaviddesachy.github.io`.

## 📋 Prérequis

- Git installé sur votre machine
- Compte GitHub avec accès au repository `louiedaviddesachy/louiedaviddesachy.github.io`
- Node.js et pnpm installés (pour tester localement)

## 🔧 Étapes de déploiement

### 1. Initialiser le repository Git

```bash
# Dans le dossier de votre projet
cd /workspaces/default/code

# Initialiser Git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Site personnel Louie-David Desachy avec React + Vite"
```

### 2. Lier au repository GitHub

```bash
# Ajouter le remote (remplacer par votre URL si différente)
git remote add origin https://github.com/louiedaviddesachy/louiedaviddesachy.github.io.git

# Vérifier le remote
git remote -v
```

### 3. Pousser le code vers GitHub

**⚠️ IMPORTANT** : Ceci va **remplacer** tout le contenu actuel de votre repository.

```bash
# Option A : Push initial (si le repo est vide ou si vous voulez tout remplacer)
git branch -M main
git push -f origin main

# Option B : Push normal (si vous voulez merger avec l'existant)
git branch -M main
git pull origin main --rebase
git push origin main
```

### 4. Configurer GitHub Pages

1. Allez sur : https://github.com/louiedaviddesachy/louiedaviddesachy.github.io/settings/pages

2. Dans la section **"Build and deployment"** :
   - **Source** : Sélectionnez `GitHub Actions`

3. Le workflow `.github/workflows/deploy.yml` va automatiquement :
   - Builder le site avec Vite
   - Déployer sur GitHub Pages

### 5. Vérifier le déploiement

Après quelques minutes, votre site sera disponible sur :
**https://louiedaviddesachy.github.io/**

Vous pouvez suivre le déploiement dans l'onglet **Actions** de votre repository :
https://github.com/louiedaviddesachy/louiedaviddesachy.github.io/actions

## 🔄 Mises à jour futures

Pour mettre à jour votre site après modifications :

```bash
# 1. Faire vos modifications
# 2. Ajouter les fichiers modifiés
git add .

# 3. Créer un commit
git commit -m "Description de vos modifications"

# 4. Pousser vers GitHub
git push origin main
```

Le site sera automatiquement redéployé après chaque push sur la branche `main`.

## 🧪 Tester localement avant de déployer

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev

# Builder pour production (test)
pnpm run build

# Prévisualiser le build de production
pnpm run preview
```

## 📝 Structure du projet

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow GitHub Actions
├── src/
│   ├── app/
│   │   ├── components/       # Composants React
│   │   ├── pages/            # Pages du site
│   │   ├── data/             # Données (blog posts, etc.)
│   │   └── App.tsx           # Composant principal
│   └── styles/               # Styles CSS
├── vite.config.ts            # Configuration Vite
├── package.json              # Dépendances
└── AUDIT_REPORT.md           # Rapport d'audit du site
```

## 🐛 Résolution de problèmes

### Le site ne se déploie pas

1. Vérifiez que GitHub Actions est activé dans les settings du repository
2. Consultez l'onglet Actions pour voir les erreurs
3. Assurez-vous que les permissions sont correctes (Settings > Pages)

### Erreur 404 sur le site

1. Vérifiez que `base: '/'` dans `vite.config.ts` est correct
2. Vérifiez que GitHub Pages pointe vers la bonne source (GitHub Actions)

### Le build échoue

1. Vérifiez que toutes les dépendances sont dans `package.json`
2. Testez le build localement : `pnpm run build`
3. Consultez les logs dans l'onglet Actions

## 📧 Contact

Pour toute question : louie-david.desachy@inria.fr
