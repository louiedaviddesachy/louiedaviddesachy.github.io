import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--forty-bg-main)' }} className="w-full py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635366795162-90b6041fd292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2FkZW1pYyUyMHlvdW5nJTIwcmVzZWFyY2hlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDk2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Photo de profil"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
            style={{ border: '3px solid var(--forty-border)' }}
          />
        </div>

        {/* Contenu texte */}
        <div className="flex-1 text-center md:text-left">
          <h1 
            style={{ color: 'var(--forty-text)' }}
            className="mb-2 text-3xl md:text-4xl lg:text-5xl"
          >
            Louie David De Sachy
          </h1>
          <p 
            style={{ color: 'var(--forty-accent-secondary)' }}
            className="mb-4 text-lg md:text-xl"
          >
            Doctorant en Mathématiques Appliquées
          </p>
          <p 
            style={{ color: 'var(--forty-text)' }}
            className="max-w-2xl text-base md:text-lg leading-relaxed opacity-90"
          >
            PhD student in Applied Mathematics for Medical Imaging at Inria and Université Paris Cité, I work on the development of generative approaches for modeling longitudinal trajectories and detecting anomalies in medical imaging data. My goal is to gain a deeper understanding of how pathologies evolve over time by combining advanced geometrical and statistical tools to support more precise and personalized diagnostics in healthcare.
          </p>
        </div>
      </div>
    </section>
  );
}