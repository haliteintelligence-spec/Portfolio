"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, note }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#F7F6F1",
    border: "1px solid rgba(48,48,48,0.12)",
    borderRadius: "4px",
    padding: "12px 16px",
    fontSize: "13px",
    fontFamily: "var(--font-lato), sans-serif",
    fontWeight: 300,
    color: "#303030",
    letterSpacing: "0.02em",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-questrial), sans-serif",
    fontSize: "9px",
    fontWeight: 400,
    color: "#827E79",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          backgroundColor: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            width: "100%",
            maxWidth: "520px",
            padding: "48px 44px",
            position: "relative",
            pointerEvents: "auto",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#303030",
              opacity: 0.4,
              padding: "4px",
              lineHeight: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <p
                style={{
                  fontFamily: "var(--font-mayfest), Georgia, serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "#303030",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Message sent.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#827E79",
                  letterSpacing: "0.03em",
                  lineHeight: 1.6,
                }}
              >
                Thank you for reaching out. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <p
                style={{
                  fontFamily: "var(--font-mayfest), Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "#303030",
                  marginBottom: "36px",
                  lineHeight: 1.2,
                  letterSpacing: "0.01em",
                }}
              >
                Get in touch
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Phone <span style={{ opacity: 0.5 }}>(optional)</span></label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (000) 000-0000"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Drop a note</label>
                  <textarea
                    required
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ fontSize: "12px", color: "#c0392b", fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "4px",
                    padding: "13px 28px",
                    fontSize: "11px",
                    fontFamily: "var(--font-quattrocento), sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    opacity: status === "submitting" ? 0.6 : 1,
                    transition: "opacity 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => { if (status !== "submitting") e.currentTarget.style.opacity = "0.75"; }}
                  onMouseLeave={(e) => { if (status !== "submitting") e.currentTarget.style.opacity = "1"; }}
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
            Let&apos;s Connect
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              lineHeight: 1.7,
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
            <button
              onClick={() => setModalOpen(true)}
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
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Contact
            </button>
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

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
