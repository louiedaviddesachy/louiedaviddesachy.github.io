import { Link } from 'react-router';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';

const publications: any[] = [];

export function Publications() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/"
          style={{ color: 'var(--accent-primary)' }}
          className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Title */}
        <h1 style={{ color: 'var(--text-primary)' }} className="text-4xl md:text-5xl mb-4">
          Publications
        </h1>
        <p style={{ color: 'var(--text-secondary)' }} className="text-lg mb-12">
          List of academic publications and research papers.
        </p>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.length === 0 ? (
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
              className="p-12 rounded-xl border text-center"
            >
              <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
                No publications yet. Check back soon!
              </p>
            </div>
          ) : (
            publications.map((pub) => (
              <article
                key={pub.id}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
                className="p-6 rounded-xl border"
              >
                {/* Type Badge */}
                <span
                  style={{
                    backgroundColor: pub.type === 'Journal' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                    color: '#1a1a2e',
                  }}
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                >
                  {pub.type}
                </span>

                {/* Title */}
                <h2 style={{ color: 'var(--text-primary)' }} className="text-xl mb-2">
                  {pub.title}
                </h2>

                {/* Authors */}
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-2">
                  {pub.authors}
                </p>

                {/* Venue & Year */}
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-4">
                  <em>{pub.venue}</em>, {pub.year}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--accent-primary)',
                        borderColor: 'var(--accent-primary)',
                      }}
                      className="px-4 py-2 rounded-lg border text-sm flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <FileText className="w-4 h-4" />
                      PDF
                    </a>
                  )}
                  {pub.links.doi && (
                    <a
                      href={pub.links.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border-color)',
                      }}
                      className="px-4 py-2 rounded-lg border text-sm flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      DOI
                    </a>
                  )}
                  {pub.links.arxiv && (
                    <a
                      href={pub.links.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border-color)',
                      }}
                      className="px-4 py-2 rounded-lg border text-sm flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      arXiv
                    </a>
                  )}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
