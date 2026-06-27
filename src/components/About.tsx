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
            {" "}— predictive AI infrastructure for CPG brands. She also founded{" "}
            <strong style={{ color: "#000000", fontWeight: 400 }}>Nnu Botanica</strong>,
            a beauty brand rooted in ancestral botanicals, because representation in beauty is
            not a trend — it is a necessity.
          </p>

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
