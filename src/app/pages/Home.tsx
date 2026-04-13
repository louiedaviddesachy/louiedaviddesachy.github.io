import { Download, Mail, GraduationCap, User, FolderOpen, ChevronDown, Linkedin, Github, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState } from 'react';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { MetamorphosisBackground } from '../components/MetamorphosisBackground';
import { Preloader } from '../components/Preloader';
import { BackgroundSelector, BackgroundRenderer, BackgroundType } from '../components/BackgroundSelector';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SEO } from '../components/SEO';
// Import image depuis public/ pour le build de production
const profilePhoto = "/photo_profile.png";

const categoryColors = {
  Conference: '#9bf1ff',
  News: '#f76f91',
  Outreach: '#a78bfa',
};

const tiles = [
  { id: 'teaching', title: 'Teaching', icon: GraduationCap, path: '/teaching' },
  { id: 'curriculum', title: 'Curriculum', icon: User, path: '/curriculum' },
  { id: 'projects', title: 'Projects', icon: FolderOpen, path: '/projects' },
];

export function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'All' | BlogPost['category']>('All');
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('particles');

  // Scroll reveal for sections
  const tilesReveal = useScrollReveal(0.15);
  const blogReveal = useScrollReveal(0.15);
  const contactReveal = useScrollReveal(0.15);

  const filteredPosts = filterCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filterCategory);

  const togglePost = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Accueil"
        description="Louie-David Desachy, doctorant en Mathématiques Appliquées pour l'Imagerie Médicale à Inria Paris et Université Paris Cité. Recherche sur les modèles génératifs pour l'imagerie médicale."
      />
      <Preloader />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-main)' }}>
        {/* Hero Section */}
        <section style={{ backgroundColor: '#242943', position: 'relative', overflow: 'hidden' }} className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          {/* Background Animation - Disabled */}
          {/* <BackgroundRenderer type={backgroundType} /> */}

          {/* Background Selector - Disabled */}
          {/* <BackgroundSelector
            currentBackground={backgroundType}
            onBackgroundChange={setBackgroundType}
          /> */}

          <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl mb-3">
                  Louie-David Desachy
                </h1>
                <p style={{ color: 'var(--accent-primary)' }} className="text-xl md:text-2xl mb-6">
                  PhD Student in Applied Mathematics for Medical Imaging
                </p>
                <p style={{ color: '#e0e0e0' }} className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                  PhD student in Applied Mathematics for Medical Imaging at{' '}
                  <a
                    href="https://heka.gitlabpages.inria.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-primary)' }}
                    className="hover:underline"
                  >
                    Inria
                  </a>
                  {' '}and{' '}
                  <a
                    href="https://u-paris.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-primary)' }}
                    className="hover:underline"
                  >
                    Université Paris Cité
                  </a>
                  , supervised by{' '}
                  <a
                    href="https://sites.google.com/site/stephanieallassonniere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-primary)' }}
                    className="hover:underline"
                  >
                    Stéphanie Allassonnière
                  </a>
                  . I work on the development of generative approaches for modeling longitudinal trajectories and detecting anomalies in medical imaging data. My goal is to gain a deeper understanding of how pathologies evolve over time by combining advanced geometrical and statistical tools to support more precise and personalized diagnostics in healthcare.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="/cv.pdf"
                    download
                    style={{
                      backgroundColor: 'var(--accent-primary)',
                      color: '#ffffff',
                    }}
                    className="px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                  <button
                    onClick={scrollToContact}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-color)',
                    }}
                    className="px-6 py-3 rounded-lg border flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </button>
                </div>
              </div>

              {/* Right: Profile Photo */}
              <div className="flex-shrink-0">
                <ImageWithFallback
                  src={profilePhoto}
                  alt="Louie-David Desachy"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
                  style={{ border: '4px solid var(--accent-primary)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tiles */}
        <section 
          style={{ 
            backgroundColor: hoveredTile ? '#242943' : 'var(--bg-secondary)',
            transition: 'background-color 0.5s ease',
          }} 
          className="py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        >
          {/* Metamorphosis Background - inspired by MC Escher */}
          {hoveredTile && (
            <div className="absolute inset-0 z-0">
              <MetamorphosisBackground />
            </div>
          )}

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                const isOtherTileHovered = hoveredTile && hoveredTile !== tile.id;
                
                return (
                  <Link
                    key={tile.id}
                    to={tile.path}
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      borderColor: 'var(--border-color)',
                      opacity: isOtherTileHovered ? 0 : 1,
                      transform: isOtherTileHovered ? 'scale(0.8)' : 'scale(1)',
                      pointerEvents: isOtherTileHovered ? 'none' : 'auto',
                      transition: 'all 0.5s ease',
                    }}
                    className="group p-8 rounded-xl border flex flex-col items-center justify-center gap-4 hover:shadow-lg"
                    onMouseEnter={(e) => {
                      setHoveredTile(tile.id);
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      const icon = e.currentTarget.querySelector('.tile-icon') as HTMLElement;
                      const title = e.currentTarget.querySelector('.tile-title') as HTMLElement;
                      if (icon) icon.style.color = 'var(--accent-primary)';
                      if (title) title.style.color = '#242943';
                    }}
                    onMouseLeave={(e) => {
                      setHoveredTile(null);
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-main)';
                      const icon = e.currentTarget.querySelector('.tile-icon') as HTMLElement;
                      const title = e.currentTarget.querySelector('.tile-title') as HTMLElement;
                      if (icon) icon.style.color = 'var(--text-primary)';
                      if (title) title.style.color = 'var(--text-primary)';
                    }}
                  >
                    <Icon
                      className="tile-icon w-12 h-12 transition-colors duration-300"
                      style={{ color: 'var(--text-primary)', strokeWidth: 1.5 }}
                    />
                    <h3 className="tile-title text-xl transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                      {tile.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog & Contact Section */}
        <section style={{ backgroundColor: 'var(--bg-main)' }} className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Blog (2/3) */}
              <div className="flex-1">
                <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl mb-6">
                  News
                </h2>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['All', 'Conference', 'News', 'Outreach'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat as any)}
                      style={{
                        backgroundColor: filterCategory === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                        color: filterCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                        borderColor: 'var(--border-color)',
                      }}
                      className="px-4 py-2 rounded-full text-sm border transition-all duration-200"
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Blog Posts */}
                <div className="space-y-4">
                  {filteredPosts.length === 0 ? (
                    <div
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                      }}
                      className="border rounded-xl p-12 text-center"
                    >
                      <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
                      <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
                        {filterCategory === 'All' ? 'No news yet. Check back soon!' : `No ${filterCategory.toLowerCase()} posts yet.`}
                      </p>
                    </div>
                  ) : (
                    filteredPosts.map((post) => {
                      const isExpanded = expandedId === post.id;
                      return (
                        <article
                          key={post.id}
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            borderColor: 'var(--border-color)',
                          }}
                          className="border rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => togglePost(post.id)}
                            aria-expanded={isExpanded}
                            aria-controls={`post-content-${post.id}`}
                            className="w-full text-left p-5 hover:opacity-90 transition-opacity"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                {/* Category Badge */}
                                <span
                                  style={{
                                    backgroundColor: categoryColors[post.category],
                                    color: '#1a1a2e',
                                  }}
                                  className="inline-block px-3 py-1 rounded-full text-xs mb-2"
                                >
                                  {post.category}
                                </span>
                                {/* Date */}
                                <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-2">
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  })}
                                </p>
                                {/* Title */}
                                <h3 id={`post-title-${post.id}`} style={{ color: 'var(--text-primary)' }} className="text-xl mb-2">
                                  {post.title}
                                </h3>
                                {/* Excerpt */}
                                <p style={{ color: 'var(--text-secondary)' }} className="text-sm line-clamp-1">
                                  {post.excerpt}
                                </p>
                              </div>
                              <ChevronDown
                                className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                style={{ color: 'var(--accent-primary)' }}
                              />
                            </div>
                          </button>

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div
                              id={`post-content-${post.id}`}
                              role="region"
                              aria-labelledby={`post-title-${post.id}`}
                              style={{ borderTop: `1px solid var(--border-color)` }}
                              className="px-5 pb-5 pt-4"
                            >
                              <p style={{ color: 'var(--text-primary)' }} className="leading-relaxed mb-4">
                                {post.content}
                              </p>
                              {post.linkedinUrl && (
                                <a
                                  href={post.linkedinUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: 'var(--accent-secondary)' }}
                                  className="text-sm hover:underline"
                                >
                                  View on LinkedIn →
                                </a>
                              )}
                            </div>
                          )}
                        </article>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Contact (1/3) */}
              <div id="contact" className="lg:w-96">
                <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl mb-6">
                  Contact
                </h2>
                <div
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                  className="border rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]"
                >
                  {/* Email */}
                  <Mail className="w-8 h-8 mb-3" style={{ color: 'var(--accent-secondary)' }} />
                  <a
                    href="mailto:louie-david.desachy@inria.fr"
                    style={{ color: 'var(--accent-secondary)' }}
                    className="text-lg mb-8 hover:underline transition-all"
                  >
                    louie-david.desachy@inria.fr
                  </a>

                  {/* Social Icons */}
                  <div className="flex gap-6 mb-6">
                    <a
                      href="https://www.linkedin.com/in/louie-david-desachy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      style={{ color: 'var(--text-secondary)' }}
                      className="transition-colors"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <Linkedin className="w-7 h-7" />
                    </a>
                    <a
                      href="https://github.com/LouieDavidD"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      style={{ color: 'var(--text-secondary)' }}
                      className="transition-colors"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <Github className="w-7 h-7" />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=XAEET4RuxTcC&hl=fr&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Scholar"
                      style={{ color: 'var(--text-secondary)' }}
                      className="transition-colors"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <BookOpen className="w-7 h-7" />
                    </a>
                  </div>

                  <div style={{ backgroundColor: 'var(--border-color)' }} className="w-full h-px mb-6" />

                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm text-center">
                    Feel free to reach out for any collaboration or questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
