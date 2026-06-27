"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundColor: "#303030",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
            fontFamily: "var(--font-questrial), sans-serif",
            color: "#827E79",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Contact
        </span>
        <h2
          style={{
            fontFamily: "var(--font-mayfest), Georgia, serif",
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            marginBottom: "24px",
            lineHeight: 1.1,
            letterSpacing: "0.01em",
          }}
        >
          Let&apos;s Build Something Together
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "52px",
            maxWidth: "480px",
            margin: "0 auto 52px",
            fontWeight: 300,
            letterSpacing: "0.035em",
          }}
        >
          Whether you want to discuss a procurement challenge, explore a partnership
          in beauty AI, or just connect — my inbox is open.
        </p>

        <div
          className="contact-btns"
          style={{
            display: "flex",
            gap: "12px",
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
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px 28px",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: "var(--font-quattrocento), sans-serif",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              color: "#FFFFFF",
              padding: "10px 28px",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: "var(--font-quattrocento), sans-serif",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "2px solid rgba(255,255,255,0.4)",
              transition: "border-color 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.12)",
            margin: "0 auto 32px",
          }}
        />

        <div
          className="contact-links"
          style={{
            display: "flex",
            gap: "28px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "MKH Collective", href: "https://www.mkhcollective.com" },
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
                fontFamily: "var(--font-questrial), sans-serif",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
