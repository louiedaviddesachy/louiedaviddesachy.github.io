/**
 * Blog Posts Data
 *
 * Pour ajouter un nouveau post :
 * 1. Décommentez l'exemple ci-dessous ou créez un nouvel objet dans le tableau
 * 2. Remplissez tous les champs requis
 * 3. Les catégories disponibles : "Conference", "News", "Outreach"
 * 4. Format de date : "YYYY-MM-DD" (année-mois-jour)
 * 5. linkedinUrl est optionnel
 *
 * Exemple de structure :
 * {
 *   id: '1',                    // Identifiant unique (incrémentez pour chaque nouveau post)
 *   category: 'Conference',      // 'Conference' | 'News' | 'Outreach'
 *   date: '2026-04-12',         // Format YYYY-MM-DD
 *   title: 'Titre du post',     // Titre affiché (max 100 caractères recommandé)
 *   excerpt: 'Résumé court',    // Résumé d'une ligne (max 150 caractères)
 *   content: 'Contenu complet', // Texte complet affiché à l'ouverture
 *   linkedinUrl: 'https://...'  // (Optionnel) Lien vers le post LinkedIn
 * }
 */

export interface BlogPost {
  id: string;
  category: 'Conference' | 'News' | 'Outreach';
  date: string;
  title: string;
  excerpt: string;
  content: string;
  linkedinUrl?: string;
}

export const blogPosts: BlogPost[] = [
  // Exemple (décommenter et modifier pour ajouter un post) :
  // {
  //   id: '1',
  //   category: 'News',
  //   date: '2026-04-12',
  //   title: 'Exemple d\'actualité',
  //   excerpt: 'Ceci est un exemple de post de blog pour montrer la structure.',
  //   content: 'Voici le contenu complet de l\'actualité. Vous pouvez écrire plusieurs paragraphes ici pour décrire votre actualité en détail.',
  //   linkedinUrl: 'https://www.linkedin.com/in/louie-david-desachy/'
  // },
];
