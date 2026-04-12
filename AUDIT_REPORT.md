# 📋 RAPPORT D'AUDIT - Site Personnel Louie-David Desachy

*Date : 12 avril 2026*  
*Mode : Dark uniquement (comme spécifié)*

---

## 1. AUDIT VISUEL & COHÉRENCE DE DESIGN

### 🟡 Palette de couleurs partiellement cohérente
**Description :** Les couleurs principales sont correctement appliquées (#242943, #f76f91, #9bf1ff), mais des couleurs legacy du light mode persistent dans theme.css (lignes 7-13) qui ne sont jamais utilisées.

**Correction suggérée :**
```css
/* Supprimer les variables light mode inutiles dans theme.css */
:root {
  --font-size: 16px;
  /* Supprimer les lignes 7-13 (light mode colors) */
}

/* Appliquer directement les couleurs dark au :root */
:root {
  --bg-main: #242943;
  --bg-secondary: #2a2f4a;
  --text-primary: #ffffff;
  --text-secondary: rgba(244, 244, 255, 0.6);
  --accent-primary: #f76f91;
  --accent-secondary: #9bf1ff;
  --border-color: rgba(212, 212, 255, 0.1);
}
```

### 🟡 Grid des tuiles ajusté à 3 colonnes mais pas optimisé
**Description :** La grille est passée de 4 à 3 tuiles (lg:grid-cols-3), mais l'espacement pourrait être amélioré pour une meilleure symétrie visuelle.

**Correction suggérée :**
```tsx
// Dans Home.tsx, ligne 164
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Retirer lg:grid-cols-3 car md:grid-cols-3 suffit */}
```

### 🟢 Typographie hiérarchisée correctement
La hiérarchie visuelle est claire avec des tailles cohérentes (4xl→5xl→6xl pour les titres, text-base→lg pour le corps).

### 🟡 Image Escher (Metamorphosis) - Contraste insuffisant
**Description :** L'image de fond des tuiles a une opacité de 0.3, mais le contraste avec le texte blanc n'est pas testé sur tous les écrans.

**Correction suggérée :**
```tsx
// Dans MetamorphosisBackground.tsx
opacity: 0.15, // Réduire pour améliorer le contraste texte/fond
filter: 'blur(1px)', // Ajouter un léger blur pour réduire le bruit visuel
```

### 🟠 Responsive mobile non testé pour les liens multiples
**Description :** Dans Curriculum.tsx, les liens "Inria Paris & Université Paris Cité" s'affichent inline, risque de débordement sur petits écrans.

**Correction suggérée :**
```tsx
<div className="text-sm font-medium flex flex-wrap gap-x-1">
  {/* Ajouter flex-wrap pour éviter le débordement */}
```

---

## 2. AUDIT DES ANIMATIONS & PERFORMANCES

### 🟢 Préloader fonctionnel avec sessionStorage
Le préloader π→cerveau se déclenche correctement au premier chargement et utilise sessionStorage pour ne pas se répéter.

### 🟠 Pas de support prefers-reduced-motion sur toutes les animations
**Description :** Le préloader gère `prefers-reduced-motion`, mais les autres animations (scroll reveal, hover tuiles, navbar hide/show) ne le gèrent pas.

**Correction suggérée :**
```tsx
// Dans useScrollReveal.ts
useEffect(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    setIsVisible(true); // Afficher directement sans animation
    return;
  }
  
  const observer = new IntersectionObserver(...);
  // ... reste du code
}, [threshold]);
```

### 🔴 Animations canvas Background jamais nettoyées
**Description :** Les animations de fond (Particles, Warped Grid, etc.) dans BackgroundSelector sont commentées dans Home.tsx mais les composants existent toujours. Si réactivés, il manque la gestion du `visibilitychange` pour mettre en pause quand l'onglet est inactif.

**Correction suggérée :**
```tsx
// Ajouter dans chaque composant Background (Particles, WarpedGrid, etc.)
useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate(); // Reprendre l'animation
    }
  };
  
  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
}, []);
```

### 🟡 ScrollProgress non throttled
**Description :** Le ScrollProgress écoute l'événement scroll sans throttle/debounce, peut causer des problèmes de performance sur mobile.

**Correction suggérée :**
```tsx
// Dans ScrollProgress.tsx, utiliser requestAnimationFrame
useEffect(() => {
  let ticking = false;
  
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setProgress(scrollPercent);
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
  // ...
}, []);
```

### 🟢 IntersectionObserver utilisé correctement
Le hook `useScrollReveal` utilise IntersectionObserver sans option `once: true` mais déconnecte proprement l'observer.

---

## 3. AUDIT DES FONCTIONNALITÉS

### 🔴 Bouton "Download CV" pointe vers un fichier inexistant
**Description :** `/cv.pdf` n'existe pas dans le projet (pas de dossier public/).

**Correction suggérée :**
```tsx
// Option 1 : Ajouter le fichier
// Créer public/cv.pdf et le référencer

// Option 2 : Rendre le bouton disabled temporairement
<a
  href="/cv.pdf"
  download
  className="px-6 py-3 rounded-lg flex items-center gap-2 opacity-50 cursor-not-allowed"
  onClick={(e) => e.preventDefault()}
>
  <Download className="w-4 h-4" />
  CV disponible prochainement
</a>
```

### 🟢 Liens externes correctement configurés
Tous les liens (Inria, Université, LinkedIn, GitHub, Google Scholar) utilisent `target="_blank" rel="noopener noreferrer"`.

### 🟢 Filtre de blog fonctionnel
Le filtre par catégorie (All/Conference/News/Outreach) fonctionne sans rechargement grâce au state React.

### 🟢 Accordéon du blog fonctionnel
L'accordéon s'ouvre/ferme correctement avec `expandedId` state et ChevronDown animé.

### 🟡 Données blog non documentées pour ajout facile
**Description :** Le fichier `blogPosts.ts` a des commentaires, mais est actuellement vide (`export const blogPosts: BlogPost[] = [];`).

**Correction suggérée :**
```ts
// Dans blogPosts.ts, ajouter un exemple commenté
export const blogPosts: BlogPost[] = [
  // Exemple de post (décommenter et remplir pour ajouter) :
  // {
  //   id: '1',
  //   category: 'Conference', // 'Conference' | 'News' | 'Outreach'
  //   date: '2026-04-12', // Format YYYY-MM-DD
  //   title: 'Titre de l\'actualité',
  //   excerpt: 'Résumé court (1 phrase)',
  //   content: 'Contenu complet de l\'actualité...',
  //   linkedinUrl: 'https://linkedin.com/...' // Optionnel
  // },
];
```

### 🟢 Navigation tuiles fonctionnelle
Les 3 tuiles (Teaching, Curriculum, Projects) redirigent correctement vers leurs pages respectives.

### 🟢 Navbar intelligente fonctionnelle
La navbar est transparente sur le hero, devient opaque après 60px de scroll, et se cache en scroll rapide vers le bas.

---

## 4. AUDIT SEO & MÉTADONNÉES ACADÉMIQUES

### 🔴 Aucune balise meta présente
**Description :** Pas de fichier HTML d'entrée visible (projet Figma Make/React), donc pas de `<title>`, `<meta description>`, ou Open Graph tags.

**Correction suggérée :**
```tsx
// Créer un composant SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  const fullTitle = `${title} | Louie-David Desachy`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

// Utiliser dans chaque page :
// <SEO title="Accueil" description="Doctorant en Mathématiques Appliquées..." />
```

### 🔴 Pas de Schema.org pour les publications
**Description :** La page Publications (maintenant vide) ne contient pas de balisage Schema.org `ScholarlyArticle`.

**Correction suggérée :**
```tsx
// Dans Projects.tsx (section Publications), ajouter :
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": pub.title,
    "author": {
      "@type": "Person",
      "name": "Louie-David Desachy"
    },
    "datePublished": pub.year,
    "publisher": {
      "@type": "Organization",
      "name": pub.venue
    }
  })}
</script>
```

### 🔴 Pas de sitemap.xml ni robots.txt
**Description :** Projet React/Vite, pas de génération de sitemap ni de robots.txt.

**Correction suggérée :**
```txt
// Créer public/robots.txt
User-agent: *
Allow: /
Sitemap: https://votre-domaine.com/sitemap.xml

// Installer vite-plugin-sitemap ou générer manuellement
```

### 🟠 Images sans attributs alt explicites
**Description :** L'image de profil utilise `ImageWithFallback` avec `alt="Louie-David Desachy"` (OK), mais l'image Escher n'a pas d'attribut alt (elle est dans un div background-image).

**Correction suggérée :**
```tsx
// Dans MetamorphosisBackground.tsx
<div 
  role="img"
  aria-label="Metamorphosis by M.C. Escher - decorative pattern background"
  className="absolute inset-0 w-full h-full"
  style={{...}}
/>
```

---

## 5. AUDIT ACCESSIBILITÉ

### 🟢 Boutons icônes avec aria-label
LinkedIn, GitHub, Google Scholar ont tous des `aria-label` explicites.

### 🟠 Navbar toggle mode absent (mais pas nécessaire)
Le bouton dark/light mode a été supprimé, donc ce point est résolu.

### 🟠 Préloader non marqué aria-hidden
**Description :** Le préloader bloque l'accès visuel pendant 1.6s mais n'est pas caché des lecteurs d'écran.

**Correction suggérée :**
```tsx
// Dans Preloader.tsx, ligne 31
<div
  aria-hidden="true" // Ajouter cet attribut
  className={`fixed inset-0 z-[9999]...`}
>
```

### 🔴 Canvas backgrounds non marqués aria-hidden
**Description :** Les composants Background (Particles, WarpedGrid, etc.) utilisent `<canvas>` qui sont purement décoratifs mais pas marqués `aria-hidden="true"`.

**Correction suggérée :**
```tsx
// Dans chaque composant Background (ParticlesBackground, etc.)
<canvas
  ref={canvasRef}
  aria-hidden="true" // Ajouter cet attribut
  className="absolute inset-0 w-full h-full"
/>
```

### 🔴 Accordéons sans ARIA corrects
**Description :** Les accordéons du blog (News) n'utilisent pas `aria-expanded` ni `aria-controls`.

**Correction suggérée :**
```tsx
// Dans Home.tsx, section Blog
<button
  onClick={() => togglePost(post.id)}
  aria-expanded={isExpanded}
  aria-controls={`post-content-${post.id}`}
  className="w-full text-left..."
>
  {/* ... */}
</button>

<div
  id={`post-content-${post.id}`}
  role="region"
  aria-labelledby={`post-title-${post.id}`}
  className="px-5 pb-5 pt-4"
>
  {/* ... */}
</div>
```

### 🟡 Focus visible non systématique
**Description :** Pas de style de focus personnalisé visible sur tous les éléments interactifs.

**Correction suggérée :**
```css
/* Dans theme.css */
@layer base {
  *:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }
}
```

### 🟡 Ordre de tabulation logique mais non testé
L'ordre visuel semble cohérent, mais devrait être testé au clavier (Tab, Shift+Tab).

---

## 6. AUDIT COMPATIBILITÉ & ROBUSTESSE

### 🟢 Application React/Vite moderne
Le site utilise React 18 et Vite, compatibles avec les navigateurs modernes.

### 🔴 Pas de dégradation gracieuse sans JavaScript
**Description :** Site 100% React, contenu inaccessible si JS désactivé.

**Correction suggérée :**
```html
<!-- Ajouter dans le fichier HTML d'entrée -->
<noscript>
  <div style="padding: 2rem; text-align: center; background: #242943; color: white;">
    <h1>Louie-David Desachy</h1>
    <p>Ce site nécessite JavaScript pour fonctionner.</p>
    <p>Veuillez activer JavaScript dans votre navigateur.</p>
  </div>
</noscript>
```

### 🟡 Canvas supporté par navigateurs modernes
Les animations canvas sont supportées par Safari ≥14, Firefox ESR, Chrome moderne.

### 🟡 Polices système par défaut
**Description :** Aucune police personnalisée chargée, utilise la stack système. Pas de FOUT, mais pas de typographie distinctive.

**Correction suggérée :**
```css
/* Si vous souhaitez ajouter une police, utiliser font-display: swap */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap; /* Éviter le FOUT */
}
```

### 🟠 Pas de gestion d'erreurs React
**Description :** Pas d'Error Boundary pour capturer les erreurs React.

**Correction suggérée :**
```tsx
// Créer ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Une erreur est survenue</h1>
          <button onClick={() => window.location.reload()}>
            Recharger la page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Envelopper l'app dans App.tsx
<ErrorBoundary>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
</ErrorBoundary>
```

---

## 📊 TABLEAU RÉCAPITULATIF

| Catégorie | 🔴 Critique | 🟠 Important | 🟡 Mineur | Total |
|-----------|-------------|--------------|-----------|-------|
| **1. Visuel & Design** | 0 | 1 | 3 | 4 |
| **2. Animations & Perf** | 1 | 1 | 2 | 4 |
| **3. Fonctionnalités** | 1 | 0 | 1 | 2 |
| **4. SEO & Métadonnées** | 3 | 1 | 0 | 4 |
| **5. Accessibilité** | 2 | 2 | 2 | 6 |
| **6. Compatibilité** | 1 | 1 | 2 | 4 |
| **TOTAL** | **8** | **6** | **10** | **24** |

---

## 🎯 TOP 5 CORRECTIONS PRIORITAIRES

### 1. 🔴 Ajouter les balises meta SEO (title, description, Open Graph)
**Impact :** Essentiel pour le référencement et le partage sur réseaux sociaux.  
**Effort :** Moyen (installer react-helmet-async + créer composant SEO).

### 2. 🔴 Corriger le bouton "Download CV" (fichier inexistant)
**Impact :** Fonctionnalité cassée visible par tous les utilisateurs.  
**Effort :** Faible (ajouter le PDF ou désactiver le bouton).

### 3. 🔴 Ajouter aria-hidden sur canvas décoratifs et préloader
**Impact :** Accessibilité pour lecteurs d'écran.  
**Effort :** Faible (ajouter attribut `aria-hidden="true"`).

### 4. 🔴 Ajouter ARIA sur accordéons du blog (aria-expanded, aria-controls)
**Impact :** Accessibilité navigation clavier et lecteurs d'écran.  
**Effort :** Moyen (modifier composant accordéon).

### 5. 🟠 Implémenter prefers-reduced-motion sur toutes les animations
**Impact :** Accessibilité pour utilisateurs sensibles au mouvement.  
**Effort :** Moyen (ajouter media query dans useScrollReveal et navbar).

---

## ✅ POINTS FORTS DU SITE

- ✅ Design épuré et cohérent en mode dark
- ✅ Animations fluides et professionnelles (navbar, scroll reveal)
- ✅ Préloader créatif et non intrusif (sessionStorage)
- ✅ Navigation intuitive avec tuiles et hover effects
- ✅ Code React bien structuré et modulaire
- ✅ Liens externes sécurisés (noopener noreferrer)
- ✅ Responsive design avec grille adaptative

---

**Rapport généré le 12 avril 2026**  
**Prochaine étape recommandée :** Implémenter les 5 corrections prioritaires avant mise en production.
