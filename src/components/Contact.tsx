"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#450F2A",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(193,122,71,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(193,122,71,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            color: "#C17A47",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Contact
        </span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#FAF6F0",
            marginTop: "12px",
            marginBottom: "20px",
            lineHeight: 1.15,
          }}
        >
          Let&apos;s Build Something{" "}
          <span style={{ color: "#C17A47", fontStyle: "italic" }}>Together</span>
        </h2>
        <p
          style={{
            color: "rgba(250,246,240,0.7)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            marginBottom: "52px",
            maxWidth: "520px",
            margin: "0 auto 52px",
          }}
        >
          Whether you want to discuss a procurement challenge, explore a partnership
          in beauty AI, or just connect — my inbox is open.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          <a
            href="mailto:marieozenua@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send Email
          </a>
          <a
            href="https://github.com/haliteintelligence-spec"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "rgba(250,246,240,0.15)",
            margin: "0 auto 32px",
          }}
        />

        {/* Quick links */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Halite Intelligence", href: "https://haliteintelligence.com" },
            { label: "Nnu Botanica", href: "https://nnubotanica.com" },
            { label: "Aura", href: "https://aura-chi-three.vercel.app/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(250,246,240,0.5)",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(250,246,240,0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(250,246,240,0.5)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
