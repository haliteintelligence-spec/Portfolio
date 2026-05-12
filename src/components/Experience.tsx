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

const tagColors: Record<string, { bg: string; text: string }> = {
  Beauty:      { bg: "rgba(193,122,71,0.12)",  text: "#C17A47" },
  Founder:     { bg: "rgba(69,15,42,0.12)",    text: "#450F2A" },
  Consulting:  { bg: "rgba(107,30,63,0.1)",    text: "#6B1E3F" },
  Procurement: { bg: "rgba(74,42,56,0.1)",     text: "#4A2A38" },
  Strategy:    { bg: "rgba(139,101,117,0.15)", text: "#8B6575" },
};

function Card({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#F8F3EE",
        borderRadius: "16px",
        border: "1px solid #E8DDD0",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Clickable header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "22px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        {/* Left: company + role */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              color: "#450F2A",
              fontSize: "1rem",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            {job.company}
          </div>
          <div
            style={{
              color: "#4A2A38",
              fontSize: "0.875rem",
              fontWeight: 600,
              marginTop: "2px",
            }}
          >
            {job.role}
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "6px", flexWrap: "wrap" }}>
            {job.tag && (
              <span
                style={{
                  backgroundColor: tagColors[job.tag]?.bg ?? "rgba(69,15,42,0.08)",
                  color: tagColors[job.tag]?.text ?? "#450F2A",
                  padding: "2px 10px",
                  borderRadius: "999px",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {job.tag}
              </span>
            )}
            <span style={{ color: "#8B6575", fontSize: "0.78rem", fontWeight: 500 }}>
              {job.period} · {job.location}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <div
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: open ? "#450F2A" : "rgba(69,15,42,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s",
            marginTop: "2px",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke={open ? "#FAF6F0" : "#450F2A"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Expandable bullet list */}
      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #E8DDD0",
            padding: "18px 28px 22px",
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {job.highlights.map((h, j) => (
              <li
                key={j}
                style={{
                  position: "relative",
                  color: "#1A0A12",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  marginBottom: j < job.highlights.length - 1 ? "6px" : 0,
                  paddingLeft: "16px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "2px",
                    top: "10px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#C17A47",
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
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: current ? "#C17A47" : "#450F2A",
        border: "3px solid #FAF6F0",
        boxShadow: current
          ? "0 0 0 2px #C17A47"
          : "0 0 0 2px rgba(69,15,42,0.3)",
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
        backgroundColor: "#FAF6F0",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
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
            Experience
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
            Career Journey
          </h2>
        </div>

        {/* Alternating timeline */}
        <div style={{ position: "relative" }} className="timeline-root">
          {/* Center vertical line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "8px",
              bottom: "8px",
              width: "2px",
              background:
                "linear-gradient(to bottom, #450F2A, rgba(69,15,42,0.1))",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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
                  {/* Left slot */}
                  <div
                    style={{
                      paddingRight: "24px",
                      paddingTop: isLeft ? 0 : undefined,
                    }}
                  >
                    {isLeft && <Card job={job} />}
                  </div>

                  {/* Center dot */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "18px",
                      zIndex: 1,
                    }}
                  >
                    <Dot current={job.current} />
                  </div>

                  {/* Right slot */}
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
