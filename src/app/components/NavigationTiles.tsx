import { GraduationCap, FileText, User } from 'lucide-react';

const tiles = [
  {
    id: 'teaching',
    title: 'Teaching',
    icon: GraduationCap,
    href: '#teaching',
  },
  {
    id: 'publications',
    title: 'Publications',
    icon: FileText,
    href: '#publications',
  },
  {
    id: 'curriculum',
    title: 'Curriculum',
    icon: User,
    href: '#curriculum',
  },
];

export function NavigationTiles() {
  return (
    <section style={{ backgroundColor: 'var(--forty-bg-secondary)' }} className="w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        {tiles.map((tile, index) => {
          const Icon = tile.icon;
          return (
            <a
              key={tile.id}
              href={tile.href}
              className="group relative flex flex-col items-center justify-center py-12 px-6 transition-all duration-300"
              style={{
                borderRight: index < tiles.length - 1 ? '1px solid var(--forty-border)' : 'none',
                borderBottom: '1px solid var(--forty-border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(247, 111, 145, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Icon 
                className="w-12 h-12 mb-4 transition-colors duration-300"
                style={{ 
                  color: 'var(--forty-text)',
                  strokeWidth: 1.5
                }}
              />
              <h3 
                className="text-xl tracking-wide transition-colors duration-300"
                style={{ color: 'var(--forty-text)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--forty-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--forty-text)';
                }}
              >
                {tile.title}
              </h3>
              
              {/* Bordure d'accent au survol */}
              <div 
                className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: 'var(--forty-accent-primary)' }}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}