# 📦 Guide complet : Télécharger et déployer votre site

## ⚠️ IMPORTANT : Ordre des étapes

1. ✅ **Télécharger** le projet depuis Figma Make
2. ✅ **Installer** les dépendances
3. ✅ **Tester** localement
4. ✅ **Déployer** sur GitHub Pages

---

## 1️⃣ Télécharger le projet depuis Figma Make

### Dans Figma Make :

1. Cherchez le bouton **"Download"**, **"Export"** ou **"Download files"**
2. Téléchargez tout le projet en archive (.zip)
3. Décompressez l'archive sur votre ordinateur
4. Vous devriez avoir un dossier avec cette structure :

```
votre-dossier/
├── src/
├── .github/
├── package.json
├── vite.config.ts
└── ...
```

---

## 2️⃣ Installer les dépendances

Ouvrez un terminal dans le dossier téléchargé :

```bash
# Naviguez vers le dossier (remplacez par votre chemin)
cd ~/Downloads/votre-dossier

# Installez pnpm si pas déjà installé
npm install -g pnpm

# Installez les dépendances
pnpm install
```

---

## 3️⃣ Tester localement (optionnel mais recommandé)

```bash
# Lancer le serveur de développement
pnpm run dev

# Ouvrir dans le navigateur
# Le site sera sur http://localhost:5173
```

Testez que tout fonctionne correctement, puis arrêtez le serveur (Ctrl+C).

---

## 4️⃣ Déployer sur GitHub

### A. Initialiser Git

```bash
# Initialiser le repository
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Site personnel Louie-David Desachy - Version finale avec SEO et accessibilité"
```

### B. Connecter au repository GitHub

```bash
# Ajouter le remote
git remote add origin https://github.com/louiedaviddesachy/louiedaviddesachy.github.io.git

# Vérifier que le remote est bien ajouté
git remote -v
```

### C. Pousser vers GitHub

**⚠️ ATTENTION** : Cette commande va **remplacer** tout le contenu actuel de votre repository GitHub.

```bash
# Changer vers la branche main
git branch -M main

# Pousser vers GitHub (force push pour remplacer l'ancien contenu)
git push -f origin main
```

**💡 Vous devrez peut-être vous authentifier** :
- Soit avec votre nom d'utilisateur + token GitHub
- Soit via SSH si vous avez configuré une clé SSH

---

## 5️⃣ Configurer GitHub Pages

1. Allez sur : **https://github.com/louiedaviddesachy/louiedaviddesachy.github.io/settings/pages**

2. Dans la section **"Build and deployment"** :
   - **Source** : Sélectionnez `GitHub Actions`
   - (Ne sélectionnez PAS "Deploy from a branch")

3. Cliquez sur **Save** si nécessaire

---

## 6️⃣ Vérifier le déploiement

1. Allez sur : **https://github.com/louiedaviddesachy/louiedaviddesachy.github.io/actions**

2. Vous verrez un workflow en cours d'exécution :
   - ⏳ Orange = En cours
   - ✅ Vert = Succès
   - ❌ Rouge = Erreur

3. Après 2-3 minutes, votre site sera en ligne sur :
   **https://louiedaviddesachy.github.io/**

---

## 🔄 Pour les mises à jour futures

Une fois le site déployé, pour faire des modifications :

```bash
# 1. Modifiez vos fichiers dans l'éditeur de code

# 2. Ajoutez les modifications
git add .

# 3. Créez un commit
git commit -m "Ajout d'une nouvelle publication"

# 4. Poussez vers GitHub
git push origin main
```

Le site se redéploie automatiquement en 2-3 minutes ! 🎉

---

## 🐛 Problèmes courants

### "Permission denied" lors du push

Solution : Configurez votre authentification GitHub
```bash
# Option 1 : HTTPS avec token
# Allez sur : https://github.com/settings/tokens
# Créez un token et utilisez-le comme mot de passe

# Option 2 : SSH
# Configurez une clé SSH : https://docs.github.com/fr/authentication/connecting-to-github-with-ssh
```

### Le site affiche une page 404

1. Vérifiez que GitHub Pages pointe vers "GitHub Actions"
2. Attendez 5 minutes (le premier déploiement peut être plus long)
3. Vérifiez dans l'onglet Actions qu'il n'y a pas d'erreur

### Le build échoue dans GitHub Actions

1. Consultez les logs dans l'onglet Actions
2. Testez le build localement : `pnpm run build`
3. Vérifiez que toutes les dépendances sont bien installées

---

## 📋 Checklist complète

- [ ] Télécharger le projet depuis Figma Make
- [ ] Installer pnpm : `npm install -g pnpm`
- [ ] Installer les dépendances : `pnpm install`
- [ ] Tester localement : `pnpm run dev`
- [ ] Initialiser Git : `git init`
- [ ] Ajouter les fichiers : `git add .`
- [ ] Créer le commit : `git commit -m "..."`
- [ ] Ajouter le remote : `git remote add origin ...`
- [ ] Pousser vers GitHub : `git push -f origin main`
- [ ] Configurer GitHub Pages : Source = GitHub Actions
- [ ] Vérifier le déploiement : https://louiedaviddesachy.github.io/

---

## 📧 Besoin d'aide ?

Si vous rencontrez un problème, vérifiez :
1. Les logs dans l'onglet Actions de GitHub
2. Que vous avez bien téléchargé TOUS les fichiers du projet
3. Que pnpm et Git sont installés : `pnpm --version` et `git --version`

**Contact** : louie-david.desachy@inria.fr
