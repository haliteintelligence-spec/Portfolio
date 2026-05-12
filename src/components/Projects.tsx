"use client";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  github?: string;
  accent: string;
  emoji: string;
};

const projects: Project[] = [
  {
    name: "Halite Intelligence",
    tagline: "Closed-loop AI infrastructure for beauty brands",
    description:
      "A purpose-built AI platform designed specifically for beauty brands — providing spend intelligence, supplier assessment, and procurement automation in a single closed-loop system. Built to give beauty operators the kind of enterprise-grade AI infrastructure that has historically only been available to Fortune 500 companies.",
    tags: ["React", "Next.js", "Anthropic API", "Supabase", "PostgreSQL", "AWS"],
    url: "https://haliteintelligence.com",
    github: "https://github.com/haliteintelligence-spec",
    accent: "#450F2A",
    emoji: "⬡",
  },
  {
    name: "Nnu Botanica",
    tagline: "Ancestral beauty, modern science",
    description:
      "A beauty brand rooted in the power of ancestral botanicals and elevated by modern science. Nnu Botanica was born from the belief that inclusive beauty is not a niche — it is the standard. Every product is a bridge between heritage wisdom and contemporary formulation.",
    tags: ["Shopify", "Brand Strategy", "Supply Chain", "Product Development"],
    url: "https://nnubotanica.com",
    accent: "#6B1E3F",
    emoji: "🌿",
  },
  {
    name: "Aura",
    tagline: "Beauty intelligence, elevated",
    description:
      "An AI-powered beauty discovery platform that helps users find products aligned with their skin profile, values, and aesthetic. Aura uses intelligent filtering and personalization to surface products that truly fit — moving beyond the noise of traditional beauty retail.",
    tags: ["Next.js", "React", "AI", "Vercel"],
    url: "https://aura-chi-three.vercel.app/",
    github: "https://github.com/haliteintelligence-spec/Aura",
    accent: "#8B6575",
    emoji: "✦",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        backgroundColor: "#F2EBE0",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <span
            style={{
              color: "#C17A47",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Projects
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#450F2A",
              marginTop: "8px",
              lineHeight: 1.2,
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
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                backgroundColor: "#FAF6F0",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #E8DDD0",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                boxShadow: "0 2px 16px rgba(69,15,42,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(69,15,42,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 16px rgba(69,15,42,0.04)";
              }}
            >
              {/* Card header banner */}
              <div
                className="project-card-header"
                style={{
                  backgroundColor: project.accent,
                  padding: "32px 28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative circle */}
                <div
                  style={{
                    position: "absolute",
                    top: "-24px",
                    right: "-24px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(250,246,240,0.06)",
                  }}
                />
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "12px",
                    lineHeight: 1,
                  }}
                >
                  {project.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#FAF6F0",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    color: "rgba(250,246,240,0.75)",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
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
                    color: "#1A0A12",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#F2EBE0",
                        border: "1px solid #E8DDD0",
                        color: "#4A2A38",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: project.accent,
                      color: "#FAF6F0",
                      padding: "9px 18px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.85")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visit Site
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
                        color: project.accent,
                        padding: "9px 18px",
                        borderRadius: "999px",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                        border: `1px solid ${project.accent}`,
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(69,15,42,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
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
