"use client";

import { useState } from "react";

type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tag?: string;
};

const jobs: Job[] = [
  {
    company: "Halite Intelligence",
    role: "CEO & Founder",
    location: "Remote, Global",
    period: "2026 – Present",
    current: true,
    tag: "Founder",
    highlights: [
      "Founded and leading Halite Intelligence — a closed-loop AI infrastructure platform built for beauty brands",
      "Building full-stack product using React, Next.js, Supabase, PostgreSQL, and the Anthropic API",
    ],
  },
  {
    company: "L'Occitane Group",
    role: "Procurement Specialist",
    location: "New York, NY",
    period: "2026 – Present",
    current: true,
    tag: "Beauty",
    highlights: [
      "Driving strategic procurement initiatives within one of the world's leading luxury beauty groups",
      "Supporting global sourcing strategy, supplier governance, and cost optimization across beauty categories",
    ],
  },
  {
    company: "Insight Sourcing Group (Accenture)",
    role: "Consulting Associate / Consultant",
    location: "Atlanta, GA",
    period: "2024 – 2025",
    tag: "Consulting",
    highlights: [
      "Led cross-functional cost savings initiatives across $150M+ in spend, owning project execution, timelines, and financial outcomes",
      "Conducted enterprise spend assessments for Private Equity clients identifying 5–10% cost optimization opportunities",
      "Managed strategic vendor relationships across a portfolio of 200+ suppliers",
      "Delivered ~4% in rebate savings through spend baselining, competitive sourcing, and supplier negotiations",
    ],
  },
  {
    company: "McKinsey & Company",
    role: "Senior Analyst",
    location: "Atlanta, GA",
    period: "2022 – 2024",
    tag: "Strategy",
    highlights: [
      "Identified $10M+ in savings across 4 direct categories worth $70M+ in spend as part of a category sourcing transformation",
      "Leveraged RFQ analysis, benchmarking, cleansheeting, and spend profiling to identify savings opportunities averaging 10%+ potential",
      "Oversaw end-to-end RFQ process and led supplier selection with C-suite clients",
    ],
  },
  {
    company: "Accenture LLP",
    role: "Senior Strategy Analyst",
    location: "Atlanta, GA",
    period: "2021 – 2022",
    tag: "Strategy",
    highlights: [
      "Sourcing Program Consultant supporting strategic sourcing for a Products Manufacturing client with $100M+ spend",
      "Oversaw RFx process with 90+ suppliers across 6+ indirect categories",
      "Served as primary liaison between C-suite clients and suppliers; led overall program management including steerco reporting",
      "Strategy Architect on a Post-Merger Integration for two Capital Market clients with $15B+ combined revenue",
    ],
  },
];

function Card({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
        border: "1px solid #EAE7E2",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "22px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-mayfest), Georgia, serif",
              fontWeight: 400,
              color: "#303030",
              fontSize: "1.05rem",
              letterSpacing: "0.01em",
              marginBottom: "4px",
            }}
          >
            {job.company}
          </div>
          <div
            style={{
              fontFamily: "var(--font-quattrocento), sans-serif",
              color: "#827E79",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {job.role}
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            {job.tag && (
              <span
                style={{
                  fontFamily: "var(--font-questrial), sans-serif",
                  backgroundColor: "#EAE7E2",
                  color: "#303030",
                  padding: "2px 10px",
                  borderRadius: "2px",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {job.tag}
              </span>
            )}
            <span
              style={{
                fontFamily: "var(--font-questrial), sans-serif",
                color: "#827E79",
                fontSize: "10px",
                letterSpacing: "0.1em",
              }}
            >
              {job.period} · {job.location}
            </span>
          </div>
        </div>

        <div
          style={{
            flexShrink: 0,
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            backgroundColor: open ? "#303030" : "transparent",
            border: `1px solid ${open ? "#303030" : "#EAE7E2"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s, border-color 0.2s",
            marginTop: "2px",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            style={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              d="M1.5 3.5L5 7L8.5 3.5"
              stroke={open ? "#FFFFFF" : "#303030"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div style={{ borderTop: "1px solid #EAE7E2", padding: "16px 24px 22px" }}>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {job.highlights.map((h, j) => (
              <li
                key={j}
                style={{
                  position: "relative",
                  color: "#303030",
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  letterSpacing: "0.02em",
                  marginBottom: j < job.highlights.length - 1 ? "6px" : 0,
                  paddingLeft: "16px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "2px",
                    top: "9px",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    backgroundColor: "#827E79",
                  }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dot({ current }: { current?: boolean }) {
  return (
    <div
      style={{
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        backgroundColor: current ? "#827E79" : "#303030",
        border: "3px solid #FFFFFF",
        boxShadow: current
          ? "0 0 0 2px #827E79"
          : "0 0 0 1px rgba(48,48,48,0.25)",
        flexShrink: 0,
        zIndex: 1,
        position: "relative",
      }}
    />
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
      style={{
        backgroundColor: "#F7F6F1",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
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
            Experience
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
            Career Journey
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }} className="timeline-root">
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: "linear-gradient(to bottom, #303030, rgba(48,48,48,0.1))",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {jobs.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={`${job.company}-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 48px 1fr",
                    alignItems: "start",
                    position: "relative",
                  }}
                  className="timeline-row"
                >
                  <div style={{ paddingRight: "24px" }}>
                    {isLeft && <Card job={job} />}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", paddingTop: "18px", zIndex: 1 }}>
                    <Dot current={job.current} />
                  </div>
                  <div style={{ paddingLeft: "24px" }}>
                    {!isLeft && <Card job={job} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
