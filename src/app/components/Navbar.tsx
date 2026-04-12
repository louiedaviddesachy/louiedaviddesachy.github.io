import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Teaching', path: '/teaching' },
  { name: 'Curriculum', path: '/curriculum' },
  { name: 'Projects', path: '/projects' },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Respecter prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - lastScrollY;

          // Check if scrolled past hero (60px threshold)
          setScrolled(currentScrollY > 60);

          // Hide navbar when scrolling down fast (désactiver si prefers-reduced-motion)
          if (!prefersReducedMotion) {
            if (scrollDelta > 5 && currentScrollY > 100) {
              setHidden(true);
            } else if (scrollDelta < 0) {
              // Show navbar when scrolling up
              setHidden(false);
            }
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? '#242943' : 'transparent',
        borderBottom: scrolled ? `1px solid var(--border-color)` : 'none',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'background-color 300ms ease, box-shadow 300ms ease, border-bottom 300ms ease, transform 250ms ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link
          to="/"
          style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
          className="text-lg md:text-xl hover:opacity-70 transition-opacity"
        >
          Louie-David Desachy
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path
                    ? 'var(--accent-primary)'
                    : scrolled ? 'var(--text-secondary)' : '#ffffff',
                }}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-6 pb-4 flex flex-wrap gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              color: location.pathname === link.path 
                ? 'var(--accent-primary)' 
                : scrolled ? 'var(--text-secondary)' : '#ffffff',
            }}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}