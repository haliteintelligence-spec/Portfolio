"use client";

import { useEffect, useState } from "react";

const roles = [
  "Procurement Strategist",
  "AI Builder",
  "Operations Leader",
  "Founder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#450F2A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 48px",
      }}
    >
      {/* Decorative background rings */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          border: "1px solid rgba(193,122,71,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(193,122,71,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(193,122,71,0.15)",
            border: "1px solid rgba(193,122,71,0.3)",
            borderRadius: "999px",
            padding: "6px 18px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              color: "#C17A47",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            color: "#FAF6F0",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Marie K. Ozenua
        </h1>

        {/* Animated role */}
        <div
          style={{
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
              color: "#C17A47",
              fontStyle: "italic",
              fontWeight: 600,
              transition: "opacity 0.4s ease, transform 0.4s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
            }}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "rgba(250,246,240,0.75)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "0 auto 48px",
            fontWeight: 400,
          }}
        >
          Bridging enterprise procurement strategy and AI innovation to build a
          more inclusive beauty industry — from boardrooms to build logs.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              backgroundColor: "#C17A47",
              color: "#FAF6F0",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "background-color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#a86438";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C17A47";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              backgroundColor: "transparent",
              color: "#FAF6F0",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              border: "1px solid rgba(250,246,240,0.35)",
              transition: "border-color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(250,246,240,0.7)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(250,246,240,0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.5,
          }}
        >
          <span
            style={{
              color: "#FAF6F0",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, rgba(250,246,240,0.6), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
