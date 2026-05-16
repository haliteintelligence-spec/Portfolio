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

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 0.3s ease, border-color 0.3s ease",
          backgroundColor: scrolled || menuOpen ? "rgba(21,27,60,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(8px)" : "none",
          borderBottom: scrolled && !menuOpen ? "1px solid rgba(70,89,70,0.2)" : "none",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#FAF6F0",
              textDecoration: "none",
              letterSpacing: "0.01em",
              zIndex: 51,
            }}
          >
            MKO
          </a>

          {/* Desktop links */}
          <ul className="nav-desktop" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: "2rem" }}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: "#FAF6F0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    opacity: 0.8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#FAF6F0",
              display: "none",
              zIndex: 51,
              lineHeight: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path
                  d="M3 3L19 19M19 3L3 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <line x1="2" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu overlay */}
      <div
        className="nav-mobile-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "#111950",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#FAF6F0",
              textDecoration: "none",
              fontSize: "1.6rem",
              fontWeight: 700,
              fontFamily: "var(--font-playfair), Georgia, serif",
              padding: "12px 32px",
              borderRadius: "12px",
              transition: "background-color 0.2s, opacity 0.2s",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(125,137,125,0.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {l.label}
          </a>
        ))}

      </div>

      <style>{`
        /* Desktop: show links + hire pill, hide hamburger */
        @media (min-width: 769px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-overlay { display: none !important; }
        }
        /* Mobile: hide desktop links + hire pill, show hamburger */
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
