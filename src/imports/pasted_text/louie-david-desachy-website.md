

Je souhaite créer un site internet professionnel complet présentant Louie-David Desachy, doctorant en Mathématiques Appliquées pour l'Imagerie Médicale à Inria et l'Université Paris Cité. Le style est moderne, minimaliste et orienté contenu, inspiré de https://antoinelfg.github.io/. Le site existant de référence est https://louiedaviddesachy.github.io/ (template Jekyll "Forty").

SYSTÈME DE COULEURS & DARK/LIGHT MODE
Le site doit disposer d'un bouton de bascule dark/light mode visible dans la barre de navigation (icône soleil/lune). Les deux modes doivent être cohérents et agréables.
Light mode (défaut) :

Fond principal : #ffffff
Fond secondaire (sections alternées, tuiles, cards) : #f5f5f7
Texte principal : #1a1a2e
Texte secondaire : #6b7280
Accent principal : #f76f91 (rose corail)
Accent secondaire : #9bf1ff (cyan)
Bordures : #e5e7eb

Dark mode :

Fond principal : #242943
Fond secondaire : #2a2f4a
Texte principal : #ffffff
Texte secondaire : rgba(244,244,255,0.6)
Accent principal : #f76f91 (identique — couleur signature conservée)
Accent secondaire : #9bf1ff (identique)
Bordures : rgba(212,212,255,0.1)


BARRE DE NAVIGATION
Fixe en haut de page, fond blanc (light) / #2a2f4a (dark), fine ombre basse. Contient à gauche le nom "Louie-David Desachy" en lien vers l'accueil, et à droite les liens : Home · Teaching · Publications · Curriculum · Projects, puis le bouton dark/light mode (icône soleil/lune), le tout en typographie légère, casse normale.

PAGE D'ACCUEIL — 3 BLOCS
Bloc 1 — Hero / Présentation
Fond blanc/#242943, pleine largeur, padding généreux. Deux colonnes :

Gauche : Nom "Louie-David Desachy" en grande typographie légère (pas de majuscules forcées). Dessous, le titre exact : "PhD Student in Applied Mathematics for Medical Imaging". Dessous, une bio de 2-3 lignes. Dessous, une rangée de tags cliquables avec leurs liens respectifs :

Inria → https://heka.gitlabpages.inria.fr/
Université Paris Cité → https://u-paris.fr/
Supervised by Stéphanie Allassonnière → https://sites.google.com/site/stephanieallassonniere/


Dessous les tags, deux boutons côte à côte : un bouton Download CV (icône téléchargement, renvoie vers le fichier PDF du CV) et un bouton Contact (ancre vers le bloc contact en bas de page).
Droite : photo de profil ronde avec fine bordure en #f76f91.

Bloc 2 — Navigation par tuiles
Fond #f5f5f7 / #2a2f4a. Quatre tuiles égales côte à côte : Teaching, Publications, Curriculum, Projects. Chaque tuile : fond blanc/#242943, coin arrondi (border-radius: 12px), fine bordure, une icône outline centrée (Font Awesome), un titre. Au survol : bordure et icône passent en #f76f91, légère élévation (box-shadow discret). Transition 0.2s. Chaque tuile redirige vers sa page dédiée.
Bloc 3 — Blog & Contact
Fond blanc/#242943. Deux colonnes :

Gauche (2/3) — Blog déroulant : Les articles sont des posts formatés à la manière de posts LinkedIn. Chaque entrée affiche : une pastille de catégorie colorée (ex. Conférence, Actualité, Vulgarisation), la date en gris clair, le titre en gras, et la première ligne tronquée. Un chevron › à droite indique l'état. Au clic, le contenu complet se déploie en accordéon avec animation fluide. Un filtre par catégorie (boutons-pills en haut du bloc : Tous · Conférence · Actualité · Vulgarisation) permet de filtrer les articles. Concernant les posts LinkedIn : implémenter la solution la plus robuste et maintenable — si l'API LinkedIn est trop contraignante (authentification OAuth complexe, données limitées), privilégier un système de fichier de données YAML ou JSON dans lequel les posts sont copiés/collés manuellement, avec un format structuré (date, catégorie, titre, contenu, lien LinkedIn optionnel). Prévoir un commentaire dans le code expliquant comment ajouter un nouveau post.
Droite (1/3) — Contact : Fond #f5f5f7/#2a2f4a, coins arrondis. Email cliquable en #9bf1ff (mailto). Icônes LinkedIn → https://www.linkedin.com/in/louie-david-desachy/ et GitHub → https://github.com/LouieDavidD en gris avec hover en #f76f91. Centré verticalement.


PAGES SECONDAIRES (structure générique)
Chaque page secondaire doit avoir : la barre de navigation commune, un titre de page en haut, un lien de retour vers l'accueil, et un footer commun. L'IA propose la structure la plus adaptée pour chaque page.
Page Teaching : Présentation des enseignements (cours, TD, TP), organisés par année ou par matière, avec établissement et niveau.
Page Publications : Liste des publications académiques avec auteurs, titre, journal/conférence, année, et liens (PDF, DOI, arXiv si applicable).
Page Curriculum : CV académique et professionnel structuré : formation, expériences de recherche, compétences, langues. Bouton Download CV (PDF) bien visible en haut de page.
Page Projects (inspirée de https://antoinelfg.github.io/) : Divisée en trois sections :

Publications (articles, papiers) — avec lien vers page Publications ou affichage inline
Présentations (conférences, posters, séminaires) — titre, événement, date, lieu, lien slides si dispo
Projets en cours / travaux — carte par projet avec titre, description courte, statut (En cours / Terminé), technologies ou méthodes utilisées


FOOTER COMMUN
Fond #2a2f4a (dark) ou #f5f5f7 (light). Nom + copyright à gauche. Liens icônes LinkedIn, GitHub au centre. Mention "Design inspiré de HTML5 UP / Jekyll Forty" à droite. Sobre et minimal.

EXIGENCES TECHNIQUES

Site statique Jekyll, compatible GitHub Pages
Dark/light mode géré via une classe CSS sur le <body> (ex. class="dark-mode"), togglée en JavaScript, avec persistance via localStorage
Animations : uniquement transition et transform/opacity — pas de librairies d'animation lourdes
Icônes : Font Awesome (CDN)
Typographie : système natif (-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif) ou Google Fonts sobre (ex. Inter)
Responsive : mobile-first, les tuiles passent en 2×2 sur tablette et 1 colonne sur mobile
Accessibilité : attributs aria-label sur les boutons d'icônes, contraste suffisant en dark et light mode