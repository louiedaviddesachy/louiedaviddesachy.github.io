import { Mail, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <div className="flex-shrink-0 w-full md:w-80 lg:w-96">
      <h2
        style={{ color: "var(--forty-text)" }}
        className="text-2xl md:text-3xl mb-8 px-6 md:px-0"
      >
        Contact
      </h2>

      <div
        style={{
          backgroundColor: "var(--forty-bg-secondary)",
          borderColor: "var(--forty-border)",
        }}
        className="border rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]"
      >
        {/* Email */}
        <div className="mb-8 text-center">
          <Mail
            className="w-8 h-8 mx-auto mb-3"
            style={{ color: "var(--forty-accent-secondary)" }}
          />
          <a
            href="mailto:louie.desachy@example.com"
            style={{ color: "var(--forty-accent-secondary)" }}
            className="text-lg hover:underline transition-all duration-200"
          >
            louie.desachy@example.com
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/louie-david-de-sachy"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <Linkedin
              className="w-7 h-7 transition-colors duration-200"
              style={{ color: "var(--forty-text)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  "var(--forty-accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  "var(--forty-text)";
              }}
            />
          </a>
          <a
            href="https://twitter.com/louiedesachy"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Twitter"
          >
            <Twitter
              className="w-7 h-7 transition-colors duration-200"
              style={{ color: "var(--forty-text)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  "var(--forty-accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  "var(--forty-text)";
              }}
            />
          </a>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px my-6"
          style={{ backgroundColor: "var(--forty-border)" }}
        />

        {/* Texte additionnel */}
        <p
          style={{ color: "var(--forty-text)" }}
          className="text-sm text-center opacity-70"
        >
          I'm open to research conversations, collaborations,
          and thoughtful technical exchange around these topics.
        </p>
      </div>
    </div>
  );
}