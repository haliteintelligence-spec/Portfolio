"use client";

const stats = [
  { value: "$150M+", label: "Spend under management" },
  { value: "200+", label: "Vendors managed" },
  { value: "5+", label: "Years consulting" },
  { value: "3", label: "Ventures founded" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#FAF6F0",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ marginBottom: "64px" }}>
          <span
            style={{
              color: "#C17A47",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            About
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
            Creative Operator.<br />Builder. Beautyphile.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="grid-cols-about"
        >
          {/* Bio */}
          <div>
            <p
              style={{
                color: "#1A0A12",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              I am the rare kind of builder who moves between spreadsheets and
              source code without losing the thread. With a Master&apos;s in
              Supply Chain Engineering from Georgia Tech and a career spanning
              McKinsey, Accenture, and global procurement advisory, I have spent
              years turning complex supply systems into competitive advantages —
              managing hundreds of millions of dollars in spend across beauty,
              manufacturing, and private equity.
            </p>
            <p
              style={{
                color: "#1A0A12",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              But my truest passion lives at the intersection of beauty and
              technology. I founded{" "}
              <strong style={{ color: "#450F2A" }}>Halite Intelligence</strong>{" "}
              — a closed-loop AI infrastructure built specifically for beauty
              brands — because I believe the industry deserves smarter,
              faster, and more equitable tools. I also built{" "}
              <strong style={{ color: "#450F2A" }}>Nnu Botanica</strong>, a
              beauty brand rooted in ancestral botanicals and modern science,
              because representation in beauty is not a trend — it is a
              necessity.
            </p>
            <p
              style={{
                color: "#1A0A12",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              My goal is simple: make a meaningful difference in inclusive
              beauty by bringing the rigor of enterprise operations and the
              creativity of a founder to every problem I touch. Whether I am
              negotiating a $20M supplier contract or shipping a new AI feature,
              I bring the same precision, intentionality, and care.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "36px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://github.com/haliteintelligence-spec"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#450F2A",
                  color: "#FAF6F0",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6B1E3F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#450F2A")
                }
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:marieozenua@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "#450F2A",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  border: "1px solid #450F2A",
                  transition: "background-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#450F2A";
                  e.currentTarget.style.color = "#FAF6F0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#450F2A";
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: "#F2EBE0",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  border: "1px solid #E8DDD0",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: "#C17A47",
                    lineHeight: 1,
                    marginBottom: "10px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#4A2A38",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}

            {/* Education card */}
            <div
              style={{
                gridColumn: "span 2",
                backgroundColor: "#450F2A",
                borderRadius: "16px",
                padding: "28px 28px",
                color: "#FAF6F0",
              }}
            >
              <div
                style={{
                  color: "#C17A47",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                Georgia Institute of Technology
              </div>
              <div style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "12px" }}>
                M.S. Supply Chain Engineering · Amazon System Design Fellow · GPA 3.50
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(250,246,240,0.15)",
                  marginBottom: "12px",
                }}
              />
              <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                B.S. Industrial & Systems Engineering · Economics & Financial Systems · GPA 3.61
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-about {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
