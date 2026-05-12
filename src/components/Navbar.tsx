"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(69,15,42,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,101,117,0.2)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#FAF6F0",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          MKO
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: "#FAF6F0",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:marieozenua@gmail.com"
          style={{
            display: "none",
            backgroundColor: "#C17A47",
            color: "#FAF6F0",
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            transition: "background-color 0.2s",
          }}
          className="hidden md:block"
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#a86438")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#C17A47")
          }
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "#FAF6F0",
          }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            ) : (
              <>
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#2D0A1C",
            padding: "16px 24px 24px",
            borderTop: "1px solid rgba(139,101,117,0.2)",
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#FAF6F0",
                textDecoration: "none",
                padding: "12px 0",
                fontSize: "0.95rem",
                fontWeight: 500,
                borderBottom: "1px solid rgba(139,101,117,0.15)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
