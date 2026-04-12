import { Link } from "react-router";
import { ArrowLeft, Download } from "lucide-react";
import { SEO } from "../components/SEO";

// Combined timeline items with chronological sorting
const timelineItems = [
  {
    type: "experience",
    year: 2022,
    title: "PhD Candidate in Applied Mathematics",
    organization: "Inria Paris & Université Paris Cité",
    organizationLink: "https://heka.gitlabpages.inria.fr/",
    period: "October 2022 - Present",
    description:
      "Research on generative models for medical imaging, supervised by Stéphanie Allassonnière. Focus on developing novel statistical approaches for anatomical modeling and image synthesis.",
  },
  {
    type: "education",
    year: 2024,
    title: "Master's Degree in Applied Mathematics",
    organization: "Université Paris-Saclay",
    organizationLink: "https://sites.google.com/view/m2-msv/accueil",
    period: "2024 - 2025",
    description:
      "Masters in applied Mathematics for life science : stochastic modelling, deterministic optimization, statistical modelling",
  },
  {
    type: "experience",
    year: 2023,
    title: "Visiting Scholar",
    organization: "University of California, San Francisco (UCSF)",
    period: "September 2023 - June 2024",
    description:
      "Decripting the differences of heritability in Autism Sectrum Disorders between males and females investigating the statistical effect of common genetic variants.",
  },
  {
    type: "experience",
    year: 2022,
    title: "Research Intern",
    organization: "Inria Paris",
    organizationLink: "https://heka.gitlabpages.inria.fr/",
    period: "April 2022 - September 2022",
    description:
      "Masters thesis : Implementation of a robust statistical framework for medical image Analysis, combining Riemannian Geometry and Bayesian geometry.",
  },
  {
    type: "education",
    year: 2021,
    title: "Diplôme d'Ingénieur - Master of Sciences",
    organization: "AgroParisTech",
    organizationLink: "https://www.agroparistech.fr/",
    period: "2021 - 2025",
    description:
      "Master of Sciences specialized in engineering for life sciences",
  },
  {
    type: "experience",
    year: 2021,
    title: "Research Intern",
    organization: "Servier Insternational Research Institute",
    period: "April 2021 - September 2021",
    description:
      "Statistical analysis and modeling for pre-clinical trials data. Development of a pipeline of comparison between statistical analysis methods",
  },
  {
    type: "experience",
    year: 2020,
    title: "Research Assistant",
    organization:
      "IDEST - Institute of Economic and Social Development in Transition",
    period: "June 2020 - December 2020",
    description:
      "Redaction of a meta-review depicting the global state of the art about field trials of genetically modified crops.",
  },
  {
    type: "education",
    year: 2019,
    title: "Classes Préparatoires aux Grandes Écoles (CPGE)",
    organization: "Lycée Lakanal - BCPST",
    organizationLink: "https://www.citescolairelakanal.fr/cpge/presentation/filiere-scientifique/classe-preparatoire-bcpst",
    period: "2019 - 2021",
    description:
      "Intensive preparatory classes in Biology, Chemistry, Physics, and Mathematics. Preparation for competitive entrance exams to French Grandes Écoles.",
  },
];

const skills = {
  Programming: ["Python", "R"],
  Mathematics: [
    "Statistical Learning",
    "Differential Geometry",
    "Probability Theory",
  ],
  Tools: ["Git", "LaTeX", "Linux"],
};

export function Curriculum() {
  return (
    <>
      <SEO
        title="Curriculum"
        description="Parcours académique et professionnel de Louie-David Desachy : doctorat à Inria Paris, master en mathématiques appliquées, diplôme d'ingénieur AgroParisTech."
      />
      <div
        className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "var(--bg-main)" }}
      >
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/"
          style={{ color: "var(--accent-primary)" }}
          className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <h1
              style={{ color: "var(--text-primary)" }}
              className="text-4xl md:text-5xl mb-2"
            >
              Curriculum Vitae
            </h1>
            <p
              style={{ color: "var(--text-secondary)" }}
              className="text-lg"
            >
              Academic and professional background.
            </p>
          </div>
          <a
            href="/cv.pdf"
            download
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "#ffffff",
            }}
            className="px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Timeline Section */}
        <section className="mb-12">
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-2xl md:text-3xl mb-8"
          >
            Timeline
          </h2>
          <div className="relative">
            {/* Timeline vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{
                backgroundColor: "var(--text-primary)",
                opacity: 0.2,
              }}
            />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-16 group"
                >
                  {/* Timeline dot - color changes based on type */}
                  <div
                    className="absolute left-3 top-2 w-6 h-6 rounded-full border-4 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--bg-main)",
                      borderColor: item.type === "experience" 
                        ? "var(--accent-secondary)" 
                        : "var(--accent-primary)",
                    }}
                  />

                  {/* Content card */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-color)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.type === "experience" 
                        ? "var(--accent-secondary)" 
                        : "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color)";
                    }}
                    className="p-6 rounded-xl hover:shadow-lg hover:scale-[1.02]"
                  >
                    {/* Header with title and date badge */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h3
                          style={{ color: "var(--text-primary)" }}
                          className="text-xl mb-1"
                        >
                          {item.title}
                        </h3>
                        {(item as any).organizationLink ? (
                          <a
                            href={(item as any).organizationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: item.type === "experience"
                                ? "var(--accent-secondary)"
                                : "var(--accent-primary)",
                            }}
                            className="text-sm font-medium hover:underline"
                          >
                            {item.organization}
                          </a>
                        ) : (
                          <p
                            style={{
                              color: item.type === "experience"
                                ? "var(--accent-secondary)"
                                : "var(--accent-primary)",
                            }}
                            className="text-sm font-medium"
                          >
                            {item.organization}
                          </p>
                        )}
                      </div>
                      <span
                        style={{
                          backgroundColor: item.type === "experience" 
                            ? "var(--accent-secondary)" 
                            : "var(--accent-primary)",
                          color: "#ffffff",
                        }}
                        className="px-3 py-1 rounded-lg text-xs whitespace-nowrap flex-shrink-0"
                      >
                        {item.period}
                      </span>
                    </div>
                    <p
                      style={{ color: "var(--text-secondary)" }}
                      className="text-sm"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-2xl mb-6"
          >
            Skills
          </h2>
          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
            }}
            className="p-6 rounded-xl border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(
                ([category, items]) => (
                  <div key={category}>
                    <h3
                      style={{ color: "var(--text-primary)" }}
                      className="text-lg mb-3"
                    >
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          style={{
                            backgroundColor: "var(--bg-main)",
                            color: "var(--text-secondary)",
                            borderColor: "var(--border-color)",
                          }}
                          className="px-3 py-1 rounded-full text-sm border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}