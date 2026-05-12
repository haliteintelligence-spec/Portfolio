"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 48px 48px",
      }}
    >
      {/* Decorative background rings */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          border: "1px solid rgba(193,122,71,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          border: "1px solid rgba(193,122,71,0.06)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-inner"
      >
        {/* Photo — left side */}
        <div
          style={{
            flexShrink: 0,
            position: "relative",
          }}
          className="hero-photo-wrap"
        >
          {/* Gold ring behind photo */}
          <div
            style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "50%",
              background:
                "conic-gradient(from 180deg, #C17A47 0%, transparent 40%, #C17A47 70%, transparent 100%)",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "relative",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #2D0A1C",
            }}
            className="hero-photo"
          >
            <Image
              src="/headshot.jpg"
              alt="Marie K. Ozenua"
              fill
              style={{ objectFit: "cover", objectPosition: "center 18%" }}
              priority
            />
          </div>
        </div>

        {/* Text — right side */}
        <div style={{ flex: 1 }}>
          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
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
              height: "44px",
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
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
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "44px",
              fontWeight: 400,
            }}
          >
            Bridging enterprise procurement strategy and AI innovation to build
            a more inclusive beauty industry — from boardrooms to build logs.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
        }}
      >
        <span
          style={{
            color: "#FAF6F0",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(250,246,240,0.6), transparent)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column !important;
            text-align: center;
            gap: 36px !important;
            padding-top: 20px;
          }
          .hero-photo-wrap {
            width: 220px !important;
          }
          .hero-photo {
            width: 220px !important;
            height: 220px !important;
          }
          .hero-inner p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-inner > div:last-child > div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
