import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2a2f4a',
        borderTop: `1px solid var(--border-color)`,
      }}
      className="py-8 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div style={{ color: 'var(--text-secondary)' }} className="text-sm">
          © {new Date().getFullYear()} Louie-David Desachy
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/louie-david-desachy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-secondary)' }}
            className="hover:opacity-70 transition-opacity"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/LouieDavidD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text-secondary)' }}
            className="hover:opacity-70 transition-opacity"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Attribution */}
        <div style={{ color: 'var(--text-secondary)' }} className="text-xs">
          Design inspired by HTML5 UP / Jekyll Forty
        </div>
      </div>
    </footer>
  );
}
