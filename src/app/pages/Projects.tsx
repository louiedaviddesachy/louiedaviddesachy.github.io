import { Link } from 'react-router';
import { ArrowLeft, FileText, Presentation, FolderOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

const academicPublications: any[] = [];

const presentations: any[] = [];

const ongoingProjects: any[] = [];

export function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Projets de recherche de Louie-David Desachy : publications académiques, présentations en conférence et projets en cours en imagerie médicale."
      />
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="max-w-5xl mx-auto">
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
          Projects
        </h1>
        <p style={{ color: 'var(--text-secondary)' }} className="text-lg mb-12">
          Research projects, publications, and presentations.
        </p>

        {/* Academic Publications Section */}
        <section className="mb-16">
          <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl mb-6">
            Publications
          </h2>
          {academicPublications.length === 0 ? (
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
              className="p-12 rounded-xl border text-center"
            >
              <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
                No publications yet.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {academicPublications.map((pub) => (
                  <div
                    key={pub.id}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                    }}
                    className="p-6 rounded-xl border flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 style={{ color: 'var(--text-primary)' }} className="text-xl mb-2">
                        {pub.title}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-2">
                        {pub.type} · {pub.venue}
                      </p>
                      <span
                        style={{
                          backgroundColor: 'var(--accent-secondary)',
                          color: '#1a1a2e',
                        }}
                        className="inline-block px-3 py-1 rounded-full text-xs"
                      >
                        {pub.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Presentations Section */}
        <section className="mb-16">
          <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl mb-6">
            Presentations
          </h2>
          {presentations.length === 0 ? (
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
              className="p-12 rounded-xl border text-center"
            >
              <Presentation className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
                No presentations yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {presentations.map((pres) => (
                <div
                  key={pres.id}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                  className="p-6 rounded-xl border"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 style={{ color: 'var(--text-primary)' }} className="text-xl">
                      {pres.title}
                    </h3>
                    <span
                      style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: '#ffffff',
                      }}
                      className="flex-shrink-0 px-3 py-1 rounded-full text-xs"
                    >
                      {pres.type}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-2">
                    <strong>{pres.event}</strong> · {pres.location}
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-4">
                    {pres.date}
                  </p>
                  {pres.slides && (
                    <a
                      href={pres.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--accent-secondary)',
                        borderColor: 'var(--accent-secondary)',
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:opacity-70 transition-opacity"
                    >
                      <Presentation className="w-4 h-4" />
                      View Slides
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Ongoing Projects Section */}
        <section>
          <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl mb-6">
            Research Projects
          </h2>
          {ongoingProjects.length === 0 ? (
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
              className="p-12 rounded-xl border text-center"
            >
              <FolderOpen className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg">
                No research projects yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingProjects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                  className="p-6 rounded-xl border flex flex-col"
                >
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 style={{ color: 'var(--text-primary)' }} className="text-xl">
                        {project.title}
                      </h3>
                      <span
                        style={{
                          backgroundColor: project.status === 'Completed' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                          color: project.status === 'Completed' ? '#1a1a2e' : '#ffffff',
                        }}
                        className="flex-shrink-0 px-3 py-1 rounded-full text-xs"
                      >
                        {project.status}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            backgroundColor: 'var(--bg-main)',
                            color: 'var(--text-secondary)',
                            borderColor: 'var(--border-color)',
                          }}
                          className="px-2 py-1 rounded text-xs border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        </div>
      </div>
    </>
  );
}
