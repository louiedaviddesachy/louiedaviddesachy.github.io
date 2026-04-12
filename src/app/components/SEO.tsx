import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  const fullTitle = `${title} | Louie-David Desachy`;
  const defaultImage = image || '/profile-photo.jpg';
  const siteUrl = url || 'https://louie-david-desachy.com';

  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Schema.org pour Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Louie-David Desachy',
          jobTitle: 'PhD Student in Applied Mathematics',
          affiliation: [
            {
              '@type': 'Organization',
              name: 'Inria Paris',
              url: 'https://heka.gitlabpages.inria.fr/',
            },
            {
              '@type': 'Organization',
              name: 'Université Paris Cité',
              url: 'https://u-paris.fr/',
            },
          ],
          url: siteUrl,
          image: defaultImage,
          sameAs: [
            'https://www.linkedin.com/in/louie-david-desachy/',
            'https://github.com/LouieDavidD',
            'https://scholar.google.com/citations?user=XAEET4RuxTcC&hl=fr&oi=ao',
          ],
        })}
      </script>
    </Helmet>
  );
}
