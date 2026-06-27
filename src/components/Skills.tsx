"use client";

type Skill = { name: string; have: boolean };
type Category = { name: string; skills: Skill[] };

const categories: Category[] = [
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
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      style={{
        backgroundColor: "#FFFFFF",
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
            Skills
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
            Tools & Expertise
          </h2>
        </div>

        {/* Table */}
        <div
          style={{
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid #EAE7E2",
          }}
        >
          {/* Header row */}
          <div
            style={{
              backgroundColor: "#303030",
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              padding: "14px 28px",
              gap: "24px",
            }}
            className="skills-grid skills-header-row"
          >
            <div
              style={{
                fontFamily: "var(--font-questrial), sans-serif",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Category
            </div>
            <div
              style={{
                fontFamily: "var(--font-questrial), sans-serif",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                opacity: 0.6,
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
                gridTemplateColumns: "220px 1fr",
                gap: "24px",
                padding: "22px 28px",
                backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7F6F1",
                borderTop: "1px solid #EAE7E2",
                alignItems: "start",
              }}
              className="skills-grid skills-row"
            >
              <div
                style={{
                  fontFamily: "var(--font-questrial), sans-serif",
                  fontWeight: 400,
                  color: "#303030",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  paddingTop: "4px",
                }}
              >
                {cat.name}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "transparent",
                      border: "1px solid #EAE7E2",
                      borderRadius: "4px",
                      padding: "5px 12px",
                      fontSize: "12px",
                      fontFamily: "var(--font-quattrocento), sans-serif",
                      color: "#303030",
                      fontWeight: 400,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
