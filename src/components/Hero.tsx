"use client";

const ventures = [
  {
    name: "MKH Collective",
    label: "CPG Consulting",
    desc: "Data-driven consulting for CPG brands at every stage of growth — growth strategy, procurement, and operations in one integrated practice.",
    href: "https://www.mkhcollective.com",
  },
  {
    name: "Halite Intelligence",
    label: "AI Infrastructure",
    desc: "Predictive AI infrastructure for CPG and beauty brands — turning consumer interactions into retention, personalization, and growth.",
    href: "https://haliteintelligence.com",
  },
  {
    name: "Nnu Botanica",
    label: "Brand & Founder",
    desc: "A beauty brand rooted in ancestral botanicals — because representation in beauty is not a trend, it is a necessity.",
    href: "https://nnubotanica.com",
  },
  {
    name: "Aura",
    label: "AI Beauty App",
    desc: "An AI-powered beauty and fragrance tracker — discover, organize, and explore your personal scent universe with smart search, daily logging, and personalized recommendations.",
    href: "https://aura-chi-three.vercel.app/",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "90px",
      }}
    >
      {/* ── Label + Heading ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 40px 72px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-quattrocento), sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            color: "#303030",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Meet Marie K. Ozenua
        </p>

        <h1
          style={{
            fontFamily: "var(--font-mayfest), Georgia, serif",
            fontSize: "clamp(1.4rem, 3vw, 2.75rem)",
            fontWeight: 400,
            color: "#303030",
            lineHeight: 1.08,
            letterSpacing: "0.01em",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          An operations strategist, AI builder &amp; founder making{" "}
          <span style={{ fontStyle: "italic" }}>real impact</span>{" "}
          at the intersection of consumer, beauty and technology.
        </h1>
      </div>

      {/* ── "A look into her world" + line ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Top divider line */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(48,48,48,0.5)",
            marginBottom: "20px",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-mayfest), Georgia, serif",
            fontStyle: "italic",
            fontSize: "22px",
            fontWeight: 400,
            color: "#303030",
            letterSpacing: "0.03em",
            lineHeight: 1.6,
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          A look into her world
        </p>

        {/* Full-width divider line — matches Jaclyn's intro_6 */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(48,48,48,0.5)",
            marginBottom: "0",
          }}
        />
      </div>

      {/* ── Three venture columns ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="hero-ventures"
      >
        {ventures.map((v, i) => (
          <a
            key={v.name}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "28px 28px 40px",
              textDecoration: "none",
              borderRight: i < ventures.length - 1 ? "1px solid rgba(48,48,48,0.12)" : "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <h3
              style={{
                fontFamily: "var(--font-quattrocento), sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#303030",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {v.name} →
            </h3>
            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#303030",
                lineHeight: 1.7,
                letterSpacing: "0.035em",
                opacity: 0.8,
                margin: 0,
              }}
            >
              {v.desc}
            </p>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-ventures {
            grid-template-columns: 1fr !important;
          }
          .hero-ventures a {
            border-right: none !important;
            border-top: 1px solid rgba(48,48,48,0.12);
            padding: 24px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
