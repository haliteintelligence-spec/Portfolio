"use client";

const ventures = [
  {
    name: "MKH Collective",
    label: "CPG Consulting",
    desc: "Strategy that moves the shelf. Data-driven consulting for CPG brands — growth, procurement, and operations in one integrated practice.",
    href: "https://www.mkhcollective.com",
  },
  {
    name: "Halite Intelligence",
    label: "AI Infrastructure",
    desc: "Predictive CPG intelligence platform — turning consumer interactions into retention, personalization, and growth.",
    href: "https://haliteintelligence.com",
  },
  {
    name: "Nnu Botanica",
    label: "Brand & Founder",
    desc: "A beauty brand rooted in ancestral botanicals — because representation in beauty is not a trend, it is a necessity.",
    href: "https://nnubotanica.com",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Top editorial block ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px 72px",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-questrial), sans-serif",
            fontSize: "10px",
            fontWeight: 400,
            color: "#827E79",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Meet Marie K. Ozenua
        </p>

        {/* Hero heading */}
        <h1
          style={{
            fontFamily: "var(--font-mayfest), Georgia, serif",
            fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
            fontWeight: 400,
            color: "#303030",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
            marginBottom: "36px",
            maxWidth: "900px",
            margin: "0 auto 36px",
          }}
        >
          A procurement strategist, AI builder &amp; founder making real impact at the intersection of{" "}
          <span style={{ fontFamily: "var(--font-mayfest)", fontStyle: "italic" }}>
            beauty and technology.
          </span>
        </h1>

        {/* CTA */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "80px" }}>
          <a
            href="#about"
            style={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              padding: "10px 28px",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: "var(--font-quattrocento), sans-serif",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Learn More
          </a>
          <a
            href="#contact"
            style={{
              backgroundColor: "transparent",
              color: "#000000",
              padding: "10px 28px",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: "var(--font-quattrocento), sans-serif",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "2px solid #000000",
              transition: "opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get in Touch
          </a>
        </div>

      </div>

      {/* ── Divider ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(48,48,48,0.15)" }} />
      </div>

      {/* ── Venture cards ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        className="hero-ventures"
      >
        {ventures.map((v, i) => (
          <a
            key={v.name}
            href={v.href}
            target={v.href.startsWith("http") ? "_blank" : "_self"}
            rel={v.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              display: "block",
              padding: "36px 28px",
              textDecoration: "none",
              borderRight: i < ventures.length - 1 ? "1px solid rgba(48,48,48,0.12)" : "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <p
              style={{
                fontFamily: "var(--font-questrial), sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                color: "#827E79",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {v.label}
            </p>
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
                fontSize: "13px",
                fontWeight: 300,
                color: "#303030",
                lineHeight: 1.7,
                letterSpacing: "0.02em",
                opacity: 0.75,
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
            border-bottom: 1px solid rgba(48,48,48,0.12);
          }
          .hero-ventures a:last-child {
            border-bottom: none;
          }
          .hero-photo {
            width: 220px !important;
            height: 270px !important;
          }
        }
      `}</style>
    </section>
  );
}
