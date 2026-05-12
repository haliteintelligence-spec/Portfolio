"use client";

type Skill = { name: string; have: boolean };

type Category = {
  name: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    name: "Procurement & Strategy",
    skills: [
      { name: "Strategic Sourcing", have: true },
      { name: "Spend Analysis", have: true },
      { name: "Supplier Management", have: true },
      { name: "RFx Process", have: true },
      { name: "Contract Negotiation", have: true },
      { name: "Cost Optimization", have: true },
      { name: "Category Management", have: true },
      { name: "CAPM (In Progress)", have: true },
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      { name: "Python", have: true },
      { name: "SQL / PostgreSQL", have: true },
      { name: "R", have: true },
      { name: "Tableau", have: true },
      { name: "Power BI", have: true },
      { name: "MS Excel (Advanced)", have: true },
      { name: "Alteryx", have: true },
      { name: "Google Ads", have: true },
    ],
  },
  {
    name: "Development & Technical",
    skills: [
      { name: "React", have: true },
      { name: "Next.js", have: true },
      { name: "Claude Code", have: true },
      { name: "Anthropic API", have: true },
      { name: "AWS", have: true },
      { name: "Docker", have: true },
      { name: "GitHub", have: true },
      { name: "Python", have: true },
    ],
  },
  {
    name: "Database & Infrastructure",
    skills: [
      { name: "PostgreSQL", have: true },
      { name: "Supabase", have: true },
      { name: "SQL", have: true },
      { name: "AWS RDS", have: true },
      { name: "Docker", have: true },
      { name: "Vercel", have: true },
    ],
  },
  {
    name: "Design & Creative",
    skills: [
      { name: "Adobe Photoshop", have: true },
      { name: "Adobe Illustrator", have: true },
      { name: "MS Project", have: true },
      { name: "Facebook Ads", have: true },
      { name: "Shopify", have: true },
      { name: "Photography", have: true },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="8" fill="#450F2A" fillOpacity="0.12" />
      <path
        d="M4.5 8.5L7 11L11.5 6"
        stroke="#450F2A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
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
            Tools & Expertise
          </h2>
        </div>

        {/* Skill table */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #E8DDD0",
            boxShadow: "0 2px 24px rgba(69,15,42,0.06)",
          }}
        >
          {/* Table header */}
          <div
            style={{
              backgroundColor: "#450F2A",
              display: "grid",
              gridTemplateColumns: "240px 1fr",
              padding: "16px 28px",
              gap: "24px",
            }}
            className="skills-grid"
          >
            <div
              style={{
                color: "#FAF6F0",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Category
            </div>
            <div
              style={{
                color: "#FAF6F0",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Skills
            </div>
          </div>

          {/* Rows */}
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr",
                gap: "24px",
                padding: "24px 28px",
                backgroundColor: i % 2 === 0 ? "#FAF6F0" : "#F8F3EE",
                borderTop: "1px solid #E8DDD0",
                alignItems: "start",
              }}
              className="skills-grid"
            >
              {/* Category name */}
              <div
                style={{
                  fontWeight: 600,
                  color: "#450F2A",
                  fontSize: "0.9rem",
                  paddingTop: "2px",
                }}
              >
                {cat.name}
              </div>

              {/* Skills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: skill.have
                        ? "rgba(69,15,42,0.06)"
                        : "rgba(196,181,189,0.2)",
                      border: `1px solid ${skill.have ? "rgba(69,15,42,0.15)" : "rgba(196,181,189,0.4)"}`,
                      borderRadius: "999px",
                      padding: "5px 12px 5px 8px",
                      fontSize: "0.8rem",
                      color: skill.have ? "#450F2A" : "#8B6575",
                      fontWeight: 500,
                      transition: "background-color 0.2s",
                    }}
                  >
                    {skill.have ? (
                      <CheckIcon />
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#C4B5BD" fillOpacity="0.3" />
                        <path
                          d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
                          stroke="#C4B5BD"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
