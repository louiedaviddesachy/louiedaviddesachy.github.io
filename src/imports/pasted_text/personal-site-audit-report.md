Tu viens de générer le site personnel de Louie-David Desachy, doctorant en Mathématiques Appliquées pour l'Imagerie Médicale (Inria / Université Paris Cité). Je souhaite que tu réalises maintenant un audit complet et critique de ce que tu as produit, en examinant le site sous six angles distincts. Pour chaque point identifié, tu fournis : une description du problème, son niveau de sévérité (🔴 Critique / 🟠 Important / 🟡 Mineur), et une suggestion de correction concrète.

1. AUDIT VISUEL & COHÉRENCE DE DESIGN
Examine l'ensemble des pages (Home, Teaching, Publications, Curriculum, Projects) et réponds à ces questions :

La palette de couleurs (#242943, #2a2f4a, #f76f91, #9bf1ff, #ffffff) est-elle appliquée de manière cohérente sur toutes les pages et dans les deux modes (dark/light) ?
Les espacements (padding, margin, gap) sont-ils harmonieux et cohérents d'une section à l'autre ?
La typographie (tailles, graisses, interlignage) respecte-t-elle une hiérarchie visuelle claire ?
Y a-t-il des éléments visuellement "cassés" ou mal alignés sur mobile, tablette ou desktop ?
Le contraste texte/fond respecte-t-il les ratios WCAG AA (4.5:1 pour le texte normal, 3:1 pour le texte large) dans les deux modes ?
L'image Escher (fond des tuiles) est-elle correctement masquée, redimensionnée et lisible sous le texte sur toutes les tailles d'écran ?


2. AUDIT DES ANIMATIONS & PERFORMANCES

Le préloader (π → cerveau) se déclenche-t-il correctement au premier chargement et est-il bien ignoré via sessionStorage aux visites suivantes ?
La grille difféomorphique (canvas Catmull-Rom) tourne-t-elle à 60fps sur mobile ? Y a-t-il des chutes de framerate visibles ?
La barre de progression du scroll est-elle fluide et précise sur des pages longues ?
Les animations de révélation au scroll (IntersectionObserver) se déclenchent-elles dans le bon ordre et une seule fois (once: true) ?
Les animations respectent-elles prefers-reduced-motion — sont-elles toutes désactivées ou remplacées par des états statiques cohérents ?
Y a-t-il des animations qui continuent de tourner en arrière-plan quand l'onglet est inactif (visibilitychange) ?
Le score Lighthouse Performance est-il ≥ 90 sur mobile et desktop ? Si non, quels sont les points bloquants ?


3. AUDIT DES FONCTIONNALITÉS

Le toggle dark/light mode fonctionne-t-il correctement et la préférence est-elle bien persistée via localStorage entre les sessions ?
Le bouton "Download CV" renvoie-t-il vers un fichier PDF valide et accessible ?
Tous les liens externes (Inria, Université Paris Cité, Stéphanie Allassonnière, LinkedIn, GitHub) s'ouvrent-ils dans un nouvel onglet (target="_blank" rel="noopener noreferrer") ?
Le filtre par catégorie du blog (Tous / Conférence / Actualité / Vulgarisation) fonctionne-t-il sans rechargement de page ?
L'accordéon du blog s'ouvre et se ferme correctement avec une animation fluide ? Le contenu tronqué est-il bien caché par défaut ?
Le système de données YAML/JSON pour les posts du blog est-il bien documenté avec des commentaires explicatifs pour ajouter de nouveaux posts ?
Les quatre tuiles (Teaching, Publications, Curriculum, Projects) redirigent-elles vers les bonnes pages ?
La navbar intelligente (transparente au-dessus du hero, opaque après 60px de scroll, masquée en scroll rapide vers le bas) fonctionne-t-elle correctement ?


4. AUDIT SEO & MÉTADONNÉES ACADÉMIQUES

Chaque page dispose-t-elle d'une balise <title> unique et descriptive ?
Les balises <meta description> sont-elles présentes et optimisées pour chaque page ?
Les balises Open Graph (og:title, og:description, og:image) sont-elles correctement définies pour le partage sur les réseaux sociaux ?
Les publications dans la page Publications utilisent-elles le balisage Schema.org ScholarlyArticle pour améliorer l'indexation académique ?
Le fichier sitemap.xml est-il généré correctement par Jekyll pour toutes les pages ?
Le fichier robots.txt est-il présent et correctement configuré ?
Les images (photo de profil, image Escher) disposent-elles toutes d'attributs alt descriptifs ?


5. AUDIT ACCESSIBILITÉ

Tous les boutons d'icônes (LinkedIn, GitHub, dark mode toggle) ont-ils des attributs aria-label explicites ?
La navigation au clavier est-elle possible sur l'ensemble du site (focus visible sur tous les éléments interactifs) ?
Le préloader bloque-t-il l'accès au contenu pour les lecteurs d'écran ? Est-il correctement marqué aria-hidden="true" ?
Le canvas de la grille difféomorphique est-il marqué aria-hidden="true" (c'est un élément purement décoratif) ?
Les accordéons du blog utilisent-ils les attributs ARIA corrects (aria-expanded, aria-controls) ?
L'ordre de tabulation est-il logique et cohérent avec l'ordre visuel sur toutes les pages ?


6. AUDIT COMPATIBILITÉ & ROBUSTESSE JEKYLL

Le site se construit-il sans erreur ni warning via jekyll build ?
Les fichiers YAML de configuration (_config.yml) et de données (posts du blog) sont-ils valides et bien structurés ?
Le site est-il fonctionnel si JavaScript est désactivé (dégradation gracieuse) — le contenu principal reste-t-il accessible ?
Le canvas et les animations CSS se dégradent-ils proprement sur les navigateurs anciens (Safari < 14, Firefox ESR) ?
Les polices de caractères se chargent-elles correctement sans flash de texte non stylisé (FOUT) ?


FORMAT DE RÉPONSE ATTENDU
Présente l'audit sous forme d'un rapport structuré par section, avec pour chaque problème identifié :

🔴/🟠/🟡 + Titre court du problème
Description en 1-2 phrases
Correction suggérée (snippet de code si applicable)

Termine par un tableau récapitulatif avec le nombre de problèmes par catégorie et par niveau de sévérité, puis une liste priorisée des 5 corrections les plus impactantes à effectuer en premier.
