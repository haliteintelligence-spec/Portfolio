"use client";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  github?: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "Halite Intelligence",
    tagline: "Consumer identity infrastructure for AI commerce",
    description:
      "Halite gives every partner brand one consented, portable consumer profile — built by the shopper and carried from brand to brand. Instead of opening with a cold onboarding quiz, brands personalize accurately on the first visit and get sharper with every check-in. It runs as two sides of one system: Halite, the identity and recommendation layer brands install in about a week with no code, and Hallie, the consumer app where shoppers own their profile, log what they use, and get paid for what they share. Consent is the gate — nothing moves between brands without it.",
    tags: ["React", "Next.js", "Anthropic API", "Supabase", "PostgreSQL", "Shopify", "AWS"],
    url: "https://haliteintelligence.com",
    github: "https://github.com/haliteintelligence-spec",
    accent: "#303030",
  },
  {
    name: "Nnu Botanica",
    tagline: "Ancestral beauty, modern science",
    description:
      "A beauty brand rooted in the power of ancestral botanicals and elevated by modern science. Nnu Botanica was born from the belief that inclusive beauty is not a niche — it is the standard. Every product is a bridge between heritage wisdom and contemporary formulation.",
    tags: ["Shopify", "Brand Strategy", "Supply Chain", "Product Development"],
    url: "https://nnubotanica.com",
    accent: "#827E79",
  },
  {
    name: "Aura",
    tagline: "Beauty intelligence, elevated",
    description:
      "An AI-powered beauty discovery platform that helps users find products aligned with their skin profile, values, and aesthetic. Aura uses intelligent filtering and personalization to surface products that truly fit — moving beyond the noise of traditional beauty retail.",
    tags: ["Next.js", "React", "AI", "Vercel"],
    url: "https://aura-chi-three.vercel.app/",
    github: "https://github.com/haliteintelligence-spec/Aura",
    accent: "#EAE7E2",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        backgroundColor: "#EAE7E2",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <span
            style={{
              fontFamily: "var(--font-questrial), sans-serif",
              color: "#827E79",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Projects
          </span>
          <h2
            style={{
              fontFamily: "var(--font-mayfest), Georgia, serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 400,
              color: "#303030",
              lineHeight: 1.1,
              letterSpacing: "0.01em",
            }}
          >
            What I&apos;ve Built
          </h2>
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.25s ease",
                boxShadow: "2px 2px 3px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 3px rgba(0,0,0,0.03)";
              }}
            >
              {/* Card header */}
              <div
                className="project-card-header"
                style={{
                  backgroundColor: project.accent,
                  padding: "32px 28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-mayfest), Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: project.accent === "#EAE7E2" ? "#303030" : "#FFFFFF",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                    letterSpacing: "0.01em",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-questrial), sans-serif",
                    color: project.accent === "#EAE7E2" ? "rgba(48,48,48,0.65)" : "rgba(255,255,255,0.7)",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Card body */}
              <div
                className="project-card-body"
                style={{
                  padding: "24px 28px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    color: "#303030",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-questrial), sans-serif",
                        backgroundColor: "#F7F6F1",
                        border: "1px solid #EAE7E2",
                        color: "#827E79",
                        padding: "3px 10px",
                        borderRadius: "2px",
                        fontSize: "9px",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      fontFamily: "var(--font-quattrocento), sans-serif",
                      fontWeight: 400,
                      textDecoration: "none",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visit
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        backgroundColor: "transparent",
                        color: "#303030",
                        padding: "8px 18px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontFamily: "var(--font-quattrocento), sans-serif",
                        fontWeight: 400,
                        textDecoration: "none",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        border: "2px solid #000000",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
