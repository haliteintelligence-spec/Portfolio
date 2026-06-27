"use client";

/* SVG wordmarks rendered in currentColor so they inherit opacity transitions */

function LogoGeorgiaTech() {
  return (
    <svg
      viewBox="0 0 220 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Georgia Tech ISyE"
      style={{ width: "260px", height: "auto" }}
    >
      {/* GT block mark */}
      <rect width="42" height="42" rx="2" fill="currentColor" />
      <text
        x="8"
        y="30"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="26"
        fill="white"
      >
        GT
      </text>
      {/* Wordmark */}
      <text
        x="52"
        y="18"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="11"
        letterSpacing="1.5"
        fill="currentColor"
      >
        GEORGIA TECH
      </text>
      <text
        x="52"
        y="36"
        fontFamily="Georgia, serif"
        fontWeight="400"
        fontSize="17"
        fill="currentColor"
      >
        ISyE
      </text>
      <text
        x="52"
        y="50"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="400"
        fontSize="8.5"
        letterSpacing="1"
        fill="currentColor"
        opacity="0.6"
      >
        INDUSTRIAL &amp; SYSTEMS ENGINEERING
      </text>
    </svg>
  );
}

function LogoPRNewswire() {
  return (
    <svg
      viewBox="0 0 190 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PR Newswire"
      style={{ width: "240px", height: "auto" }}
    >
      {/* PR square badge */}
      <rect width="40" height="40" rx="3" fill="currentColor" y="6" />
      <text
        x="20"
        y="32"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="white"
      >
        PR
      </text>
      {/* Newswire wordmark */}
      <text
        x="50"
        y="22"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="300"
        fontSize="9"
        letterSpacing="2"
        fill="currentColor"
        opacity="0.5"
      >
        CISION
      </text>
      <text
        x="50"
        y="38"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="16"
        letterSpacing="0.5"
        fill="currentColor"
      >
        Newswire
      </text>
    </svg>
  );
}

function LogoJohnGalt() {
  return (
    <svg
      viewBox="0 0 200 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="John Galt Solutions"
      style={{ width: "240px", height: "auto" }}
    >
      {/* Diagonal line mark */}
      <line x1="4" y1="48" x2="20" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="48" x2="30" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      {/* Wordmark */}
      <text
        x="40"
        y="24"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="14"
        letterSpacing="1.5"
        fill="currentColor"
      >
        JOHN GALT
      </text>
      <text
        x="40"
        y="43"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="400"
        fontSize="11"
        letterSpacing="3"
        fill="currentColor"
        opacity="0.6"
      >
        SOLUTIONS
      </text>
    </svg>
  );
}

const logos = [
  { component: <LogoGeorgiaTech />, label: "Georgia Tech ISyE" },
  { component: <LogoPRNewswire />, label: "PR Newswire" },
  { component: <LogoJohnGalt />, label: "John Galt Solutions" },
];

export default function Press() {
  return (
    <section
      id="press"
      style={{
        backgroundColor: "#EAE7E2",
        padding: "72px 40px 80px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* "As featured in" heading — matches Jaclyn's press_0 style */}
        <p
          style={{
            fontFamily: "var(--font-mayfest), Georgia, serif",
            fontStyle: "italic",
            fontSize: "22px",
            fontWeight: 400,
            color: "#303030",
            letterSpacing: "0.03em",
            lineHeight: 1.6,
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          As featured in
        </p>

        {/* Logo row */}
        <div
          className="press-logos"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.label}
              style={{
                color: "rgba(48,48,48,0.45)",
                transition: "color 0.25s ease",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.color =
                  "rgba(48,48,48,0.85)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.color =
                  "rgba(48,48,48,0.45)")
              }
            >
              {logo.component}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .press-logos {
            gap: 48px !important;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
