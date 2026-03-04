import { cloneElement } from "react";

/* ══════════════════════════════════════════
   MILK GLASS LOGO v2
   — Softened rim and base corners (rounded caps + curves)
   — Fill opacity nudged up to feel milky-white
   — Outline style, works on any background
═══════════════════════════════════════════ */
export function MilkGlass({ size = 80, color = "#4A7C59", bg = "transparent" }) {
  const w = size, h = size;
  const cx = w / 2;

  const rimW  = w * 0.62;
  const baseW = w * 0.44;
  const glassT = h * 0.12;
  const glassB = h * 0.88;
  const glassH = glassB - glassT;

  const rimL  = cx - rimW  / 2;
  const rimR  = cx + rimW  / 2;
  const baseL = cx - baseW / 2;
  const baseR = cx + baseW / 2;

  const fillTop = glassT + glassH * 0.12;
  const fillL   = rimL  + (fillTop - glassT) / glassH * (baseL - rimL);
  const fillR   = rimR  + (fillTop - glassT) / glassH * (baseR - rimR);

  const sw  = Math.max(1.2, w * 0.028);   // stroke weight
  const cr  = w * 0.04;                    // corner softening radius

  // Rim arc — gentle outward curve, rounded ends
  const rimSag = h * 0.016;
  // Base arc — gentle downward curve, rounded ends
  const baseSag = h * 0.028;

  // Bubbles
  const bubbles = [
    { ox: -w * 0.10, cy: glassT + glassH * 0.72, r: w * 0.052, op: 0.90 },
    { ox:  w * 0.07, cy: glassT + glassH * 0.50, r: w * 0.038, op: 0.75 },
    { ox: -w * 0.02, cy: glassT + glassH * 0.28, r: w * 0.028, op: 0.55 },
  ];

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* ── Milk fill — slightly increased opacity, white tinted ── */}
      <path
        d={`
          M ${fillL} ${fillTop}
          L ${fillR} ${fillTop}
          L ${baseR - cr * 0.3} ${glassB - baseSag * 0.2}
          Q ${cx} ${glassB + baseSag * 0.6}
          ${baseL + cr * 0.3} ${glassB - baseSag * 0.2}
          Z
        `}
        fill="white"
        opacity="0.55"
      />
      {/* Second pass in brand colour for a very faint tint */}
      <path
        d={`
          M ${fillL} ${fillTop}
          L ${fillR} ${fillTop}
          L ${baseR - cr * 0.3} ${glassB - baseSag * 0.2}
          Q ${cx} ${glassB + baseSag * 0.6}
          ${baseL + cr * 0.3} ${glassB - baseSag * 0.2}
          Z
        `}
        fill={color}
        opacity="0.07"
      />

      {/* ── Milk surface — soft upward arc ── */}
      <path
        d={`M ${fillL} ${fillTop} Q ${cx} ${fillTop - h * 0.02} ${fillR} ${fillTop}`}
        stroke={color}
        strokeWidth={sw * 0.65}
        fill="none"
        opacity="0.45"
      />

      {/* ── Glass sides — straight lines, rounded linecap at both ends ── */}
      <line
        x1={rimL}  y1={glassT + rimSag * 0.15}
        x2={baseL} y2={glassB - baseSag * 0.25}
        stroke={color} strokeWidth={sw} strokeLinecap="round"
      />
      <line
        x1={rimR}  y1={glassT + rimSag * 0.15}
        x2={baseR} y2={glassB - baseSag * 0.25}
        stroke={color} strokeWidth={sw} strokeLinecap="round"
      />

      {/* ── Rim — rounded outward arc ── */}
      <path
        d={`M ${rimL} ${glassT + rimSag * 0.15} Q ${cx} ${glassT - rimSag} ${rimR} ${glassT + rimSag * 0.15}`}
        stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none"
      />

      {/* ── Base — rounded downward arc ── */}
      <path
        d={`M ${baseL} ${glassB - baseSag * 0.25} Q ${cx} ${glassB + baseSag} ${baseR} ${glassB - baseSag * 0.25}`}
        stroke={color} strokeWidth={sw} strokeLinecap="round" fill="none"
      />

      {/* ── Bubbles ── */}
      {bubbles.map((b, i) => (
        <circle
          key={i}
          cx={cx + b.ox}
          cy={b.cy}
          r={b.r}
          stroke={color}
          strokeWidth={sw * 0.75}
          fill="none"
          opacity={b.op}
        />
      ))}

      {/* ── Subtle glass highlight ── */}
      <line
        x1={rimL  + sw * 1.8} y1={glassT + glassH * 0.1}
        x2={baseL + sw * 1.8 + (rimL - baseL) * -0.04} y2={glassT + glassH * 0.52}
        stroke={color} strokeWidth={sw * 0.4} strokeLinecap="round" opacity="0.22"
      />
    </svg>
  );
}

/* ══════════════════════════════════════════
   PREVIEW
═══════════════════════════════════════════ */
function cloneWithProps(el, props) {
  return cloneElement(el, props);
}

function Wordmark({ color }) {
  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic",
      fontSize: "0.9rem", fontWeight: 600, color, letterSpacing: "0.01em", opacity: 0.75 }}>
      fermentedwithlove
    </div>
  );
}

function Preview({ bg, label, children, border }) {
  const isLight = bg === "#FAFAF7" || bg === "#D4E8DB" || bg === "#D0E4F0";
  return (
    <div style={{ background: bg, padding: "2.5rem 1.5rem", display: "flex",
      flexDirection: "column", alignItems: "center", gap: "1rem",
      borderRight: border ? "1px solid #E2E2DA" : "none" }}>
      {children}
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem",
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: isLight ? "#A8A89E" : "rgba(255,255,255,0.4)" }}>
        {label}
      </span>
    </div>
  );
}

// this is the page that it builds
// pick out aspects from here
export default function MilkGlassLogoV2() {
  const mark = <MilkGlass size={96} color="#4A7C59" />;

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#FAFAF7",
      minHeight: "100vh", padding: "2.5rem 1.5rem", color: "#1C1C18" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Mono'", fontSize: "0.68rem", letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#A8A89E", marginBottom: "0.5rem" }}>
          FermentedWithLove — Logo v2
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond'", fontSize: "clamp(1.75rem,4vw,2.75rem)",
          fontWeight: 600, marginBottom: "0.4rem" }}>
          Milk Glass — <em style={{ color: "#4A7C59", fontStyle: "italic" }}>softened & milky</em>
        </h1>
        <p style={{ color: "#6B6B63", fontSize: "0.875rem", marginBottom: "3rem", fontWeight: 300 }}>
          Rounded rim & base. White fill with a touch more opacity.
        </p>

        <div style={{ background: "#fff", border: "1px solid #E2E2DA", borderRadius: 16,
          overflow: "hidden", marginBottom: "2rem" }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #E2E2DA" }}>
            <Preview bg="#FAFAF7" label="On light" border>
              {mark}<Wordmark color="#1C1C18" />
            </Preview>
            <Preview bg="#1C1C18" label="On dark" border>
              {cloneWithProps(mark, { color: "#FAFAF7" })}<Wordmark color="#FAFAF7" />
            </Preview>
            <Preview bg="#4A7C59" label="Brand green">
              {cloneWithProps(mark, { color: "#FAFAF7" })}<Wordmark color="#FAFAF7" />
            </Preview>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #E2E2DA" }}>
            <Preview bg="#3D6B8E" label="Fjord blue" border>
              {cloneWithProps(mark, { color: "#FAFAF7" })}<Wordmark color="#FAFAF7" />
            </Preview>
            <Preview bg="#D4E8DB" label="Moss tint" border>
              {cloneWithProps(mark, { color: "#4A7C59" })}<Wordmark color="#1C1C18" />
            </Preview>
            <Preview bg="#D0E4F0" label="Fjord tint">
              {cloneWithProps(mark, { color: "#3D6B8E" })}<Wordmark color="#1C1C18" />
            </Preview>
          </div>

          {/* Sizes */}
          <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #E2E2DA" }}>
            <p style={{ fontFamily: "'DM Mono'", fontSize: "0.62rem", letterSpacing: "0.08em",
              textTransform: "uppercase", color: "#A8A89E", marginBottom: "1.25rem" }}>
              Icon scale
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
              {[128, 64, 48, 32].map(s => (
                <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <MilkGlass size={s} color="#4A7C59" />
                  <span style={{ fontFamily: "'DM Mono'", fontSize: "0.55rem", color: "#A8A89E" }}>{s}px</span>
                </div>
              ))}
              {[64, 32].map(s => (
                <div key={`d${s}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ background: "#1C1C18", borderRadius: s <= 32 ? 5 : 10,
                    padding: Math.max(3, s * 0.1), display: "inline-flex" }}>
                    <MilkGlass size={s} color="#FAFAF7" />
                  </div>
                  <span style={{ fontFamily: "'DM Mono'", fontSize: "0.55rem", color: "#A8A89E" }}>{s}px ◼</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav context */}
          <div style={{ padding: "1.5rem 2rem" }}>
            <p style={{ fontFamily: "'DM Mono'", fontSize: "0.62rem", letterSpacing: "0.08em",
              textTransform: "uppercase", color: "#A8A89E", marginBottom: "1.25rem" }}>
              In nav context
            </p>
            <div style={{ background: "#FAFAF7", borderRadius: 10, padding: "0 1.5rem", height: 60,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              border: "1px solid #E2E2DA", marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MilkGlass size={30} color="#4A7C59" />
                <span style={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.15rem",
                  fontWeight: 600, color: "#1C1C18" }}>
                  Fermented<em style={{ color: "#4A7C59", fontStyle: "italic" }}>WithLove</em>
                </span>
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {["Kefir","Sourdough","Recipes"].map(l => (
                  <span key={l} style={{ fontSize: "0.8rem", fontWeight: 500, color: "#6B6B63" }}>{l}</span>
                ))}
              </div>
            </div>
            <div style={{ background: "#1C1C18", borderRadius: 10, padding: "0 1.5rem", height: 60,
              display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MilkGlass size={30} color="#FAFAF7" />
                <span style={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.15rem",
                  fontWeight: 600, color: "#FAFAF7" }}>
                  Fermented<em style={{ color: "#A8B99A", fontStyle: "italic" }}>WithLove</em>
                </span>
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {["Kefir","Sourdough","Recipes"].map(l => (
                  <span key={l} style={{ fontSize: "0.8rem", fontWeight: 500,
                    color: "rgba(255,255,255,0.45)" }}>{l}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
