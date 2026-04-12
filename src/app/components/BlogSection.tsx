import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Optimisation Stochastique : Nouvelles Perspectives',
    excerpt: "L'optimisation stochastique est au cœur des algorithmes d'apprentissage moderne...",
    content: "L'optimisation stochastique est au cœur des algorithmes d'apprentissage moderne. Dans cet article, j'explore les dernières avancées en matière de méthodes de descente de gradient stochastique et leurs applications dans les réseaux de neurones profonds. Les résultats montrent une amélioration significative de la convergence dans des environnements non convexes.",
    image: 'https://images.unsplash.com/photo-1767725467112-e0e9140c9c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGFic3RyYWN0JTIwZ2VvbWV0cnl8ZW58MXx8fHwxNzc0OTYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    title: 'Applications du Machine Learning en Finance',
    excerpt: 'Les modèles prédictifs transforment la gestion de portefeuille...',
    content: "Les modèles prédictifs transforment la gestion de portefeuille et l'analyse des risques financiers. Cette recherche examine l'utilisation d'algorithmes d'apprentissage profond pour la prédiction des séries temporelles financières, avec une attention particulière aux méthodes de régularisation et à la gestion de l'incertitude dans les prévisions.",
    image: 'https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc0OTYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    title: 'Méthodes Numériques pour les EDPs',
    excerpt: 'Une approche innovante pour résoudre les équations différentielles partielles...',
    content: "Une approche innovante pour résoudre les équations différentielles partielles complexes en utilisant des techniques d'apprentissage automatique. Je présente une nouvelle classe d'algorithmes qui combine les méthodes numériques classiques avec les réseaux de neurones pour obtenir des solutions plus précises et computationnellement efficaces.",
    image: 'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDg2NjI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function BlogSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex-1">
      <h2 
        style={{ color: 'var(--forty-text)' }}
        className="text-2xl md:text-3xl mb-8 px-6 md:px-0"
      >
        Blog
      </h2>
      <div className="space-y-4">
        {blogPosts.map((post) => {
          const isExpanded = expandedId === post.id;
          return (
            <article
              key={post.id}
              style={{
                backgroundColor: 'var(--forty-bg-secondary)',
                borderColor: 'var(--forty-border)',
              }}
              className="border rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => togglePost(post.id)}
                className="w-full text-left hover:bg-opacity-90 transition-all duration-200"
              >
                <div className="flex gap-4 p-4 md:p-5">
                  {post.image && (
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 md:w-24 md:h-24 rounded object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 
                        style={{ color: 'var(--forty-text)' }}
                        className="text-lg md:text-xl mb-2"
                      >
                        {post.title}
                      </h3>
                      <ChevronDown
                        className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        style={{ color: 'var(--forty-accent-primary)' }}
                      />
                    </div>
                    <p
                      style={{ color: 'var(--forty-text-muted)' }}
                      className="text-sm md:text-base line-clamp-1"
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </button>

              {/* Contenu déroulant */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isExpanded ? '500px' : '0',
                }}
              >
                <div 
                  className="px-4 md:px-5 pb-5 pt-2"
                  style={{
                    borderTop: `1px solid var(--forty-border)`,
                  }}
                >
                  <p
                    style={{ color: 'var(--forty-text)' }}
                    className="text-sm md:text-base leading-relaxed opacity-90"
                  >
                    {post.content}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
