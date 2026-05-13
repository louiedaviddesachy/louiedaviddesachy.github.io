import { Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

const teachings = [
  {
    year: '2026',
    courses: [
      {
        title: 'Statistiques et simulation de variables aléatoires',
        type: 'Theory and Code',
        institution: 'Université Paris Cité',
        level: 'Licence 3 Maths-Info',
        hours: '42h',
      },
      {
        title: 'Econométrie : introduction à la programmation R',
        type: 'Code',
        institution: 'Université Paris Cité',
        level: 'Licence 3 MIASHS',
        hours: '18h',
      },
    ],
  },
];

export function Teaching() {
  return (
    <>
      <SEO
        title="Teaching"
        description="Enseignements de Louie-David Desachy à l'Université Paris Cité : Statistiques, simulation de variables aléatoires et introduction à R."
      />
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
          Teaching
        </h1>
        <p style={{ color: 'var(--text-secondary)' }} className="text-lg mb-12">
          Teaching activities and courses I've been involved in during my PhD.
        </p>

        {/* Teaching by Year */}
        <div className="space-y-12">
          {teachings.map((yearData) => (
            <section key={yearData.year}>
              <h2 style={{ color: 'var(--text-primary)' }} className="text-2xl mb-6">
                {yearData.year}
              </h2>
              <div className="space-y-6">
                {yearData.courses.map((course, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                    }}
                    className="p-6 rounded-xl border"
                  >
                    <h3 style={{ color: 'var(--text-primary)' }} className="text-xl mb-2">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          color: 'var(--accent-primary)',
                          borderColor: 'var(--border-color)',
                        }}
                        className="px-3 py-1 rounded-full text-sm border"
                      >
                        {course.type}
                      </span>
                      <span
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          color: 'var(--text-secondary)',
                          borderColor: 'var(--border-color)',
                        }}
                        className="px-3 py-1 rounded-full text-sm border"
                      >
                        {course.hours}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-1">
                      {course.institution} · {course.level}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Interactive Applications Section */}
        <section className="mt-16">
          <h2 style={{ color: 'var(--text-primary)' }} className="text-2xl mb-4">
            Applications Interactives
          </h2>
          <p style={{ color: 'var(--text-secondary)' }} className="text-base mb-6">
            Démonstrations interactives développées pour illustrer les concepts du cours.
          </p>

          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
            }}
            className="p-6 rounded-xl border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ color: 'var(--text-primary)' }} className="text-xl">
                Algorithme d'Acceptation-Rejet
              </h3>
              <a
                href="https://lddesachy.shinyapps.io/stats-acceptation-rejet/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-primary)' }}
                className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity text-sm"
              >
                Ouvrir dans un nouvel onglet
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-4">
              Simulation interactive de l'algorithme d'acceptation-rejet pour différentes distributions de probabilité.
            </p>

            {/* Iframe container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%', minHeight: '700px' }}>
              <iframe
                src="https://lddesachy.shinyapps.io/stats-acceptation-rejet/"
                className="absolute top-0 left-0 w-full h-full rounded-lg border"
                style={{ borderColor: 'var(--border-color)' }}
                title="Algorithme d'Acceptation-Rejet - Application Shiny"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
