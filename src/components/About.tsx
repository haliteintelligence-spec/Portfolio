"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        backgroundColor: "#F7F6F1",
        padding: "0 0 100px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left — photo, bleeds up into previous section */}
        <div
          style={{
            position: "relative",
            marginTop: "-60px",
          }}
          className="about-photo-col"
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              position: "relative",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <Image
              src="/headshot.jpg"
              alt="Marie K. Ozenua"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 10%" }}
            />
          </div>
        </div>

        {/* Right — text */}
        <div style={{ paddingTop: "80px" }}>
          <p
            style={{
              fontFamily: "var(--font-questrial), sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              color: "#827E79",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            About Marie
          </p>

          <h2
            style={{
              fontFamily: "var(--font-mayfest), Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#303030",
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              marginBottom: "36px",
            }}
          >
            Marie has built, scaled and shipped at the intersection of enterprise and innovation.
          </h2>

          <p
            style={{
              color: "#303030",
              fontSize: "14px",
              lineHeight: 1.7,
              letterSpacing: "0.035em",
              marginBottom: "20px",
              fontWeight: 300,
            }}
          >
            With a Master&apos;s in Supply Chain Engineering from Georgia Tech and a career
            spanning McKinsey, Accenture, and global procurement advisory, Marie has spent
            years turning complex supply systems into competitive advantages across beauty,
            manufacturing, and private equity.
          </p>
          <p
            style={{
              color: "#303030",
              fontSize: "14px",
              lineHeight: 1.7,
              letterSpacing: "0.035em",
              marginBottom: "20px",
              fontWeight: 300,
            }}
          >
            Her deepest work lives at the intersection of beauty and technology. She
            founded{" "}
            <strong style={{ color: "#000000", fontWeight: 400 }}>MKH Collective</strong>
            {" "}— data-driven CPG consulting across growth, procurement, and operations — and{" "}
            <strong style={{ color: "#000000", fontWeight: 400 }}>Halite Intelligence</strong>
            {" "}— consumer identity infrastructure for AI commerce. She also founded{" "}
            <strong style={{ color: "#000000", fontWeight: 400 }}>Nnu Botanica</strong>,
            a beauty brand rooted in ancestral botanicals, because representation in beauty is
            not a trend — it is a necessity.
          </p>

          {/* LinkedIn — hairline rule + eyebrow link, matching the "About Marie" kicker */}
          <div style={{ marginTop: "28px" }}>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(48,48,48,0.18)",
                marginBottom: "16px",
              }}
            />
            <a
              href="https://www.linkedin.com/in/marie-ozenua-56247b111/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-questrial), sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                color: "#827E79",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#303030")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#827E79")}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
              Connect on LinkedIn →
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 24px !important;
          }
          .about-photo-col {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
