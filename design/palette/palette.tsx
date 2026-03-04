const tokens = {
  colors: [
    { name: "--milk",         hex: "#F8F8F4", role: "Page background — warm optical white, not pure bright white" },
    { name: "--milk-deep",    hex: "#EFEFE8", role: "Section alternates, card surfaces" },
    { name: "--moss",         hex: "#4A7C59", role: "Primary green — deep, confident, natural" },
    { name: "--moss-light",   hex: "#D4E8DB", role: "Green tint — pill backgrounds, hover fills" },
    { name: "--fjord",        hex: "#3D6B8E", role: "Primary blue — calm Nordic water tone" },
    { name: "--fjord-light",  hex: "#D0E4F0", role: "Blue tint — subtle accents, info states" },
    { name: "--stone",        hex: "#6B6B63", role: "Body text — warm grey, never harsh black" },
    { name: "--pebble",       hex: "#A8A89E", role: "Muted text, captions, placeholders" },
    { name: "--chalk",        hex: "#E2E2DA", role: "Borders, dividers, rule lines" },
    { name: "--ink",          hex: "#1C1C18", role: "Headings — near-black with warmth" },
  ],
  type: [
    { role: "Display / Hero",  family: "Cormorant Garamond", note: "Elegant, editorial — italic cuts beautifully" },
    { role: "Body & UI",       family: "DM Sans",            note: "Geometric, clean, excellent legibility" },
    { role: "Labels & Mono",   family: "DM Mono",            note: "For ingredients, measurements, tags" },
  ],
};

const hex2rgb = (h: string) => {
  const r = parseInt(h.slice(1,3),16), g = parseInt(h.slice(3,5),16), b = parseInt(h.slice(5,7),16);
  return [r,g,b];
};
const luminance = ([r,g,b]: number[]) => {
  const s = (v: number) => { v/=255; return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4); };
  return 0.2126*s(r)+0.7152*s(g)+0.0722*s(b);
};
const contrast = (h1: string, h2: string) => {
  const l1=luminance(hex2rgb(h1)), l2=luminance(hex2rgb(h2));
  return ((Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05)).toFixed(1);
};

export default function Palette() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F8F8F4", minHeight: "100vh", padding: "2.5rem 1.5rem", color: "#1C1C18" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 860, margin: "0 auto 3rem" }}>
        <p style={{ fontFamily: "'DM Mono'", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "0.75rem" }}>
          FermentedWithLove — Palette Proposal
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond'", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "0.5rem" }}>
          Clean, Nordic,{" "}
          <em style={{ fontStyle: "italic", color: "#4A7C59" }}>alive.</em>
        </h1>
        <p style={{ color: "#6B6B63", maxWidth: "52ch", lineHeight: 1.7, fontWeight: 300 }}>
          Milk white base with natural moss green and fjord blue accents. Warm greys for type. Lots of air.
        </p>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Swatches */}
        <div style={{ marginBottom: "0.75rem" }}>
          <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "1.25rem" }}>Colour tokens</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem", marginBottom: "3rem" }}>
          {tokens.colors.map(c => {
            const onDark = parseInt(c.hex.slice(1,3),16) < 160;
            const textCol = onDark ? "#F8F8F4" : "#1C1C18";
            const cr = contrast(c.hex, onDark ? "#F8F8F4" : "#1C1C18");
            return (
              <div key={c.name} style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
                <div style={{ background: c.hex, height: 72, display: "flex", alignItems: "flex-end", padding: "0.6rem 0.75rem" }}>
                  <span style={{ fontFamily: "'DM Mono'", fontSize: "0.7rem", color: textCol, opacity: 0.7 }}>contrast {cr}:1</span>
                </div>
                <div style={{ background: "#fff", padding: "0.65rem 0.75rem" }}>
                  <div style={{ fontFamily: "'DM Mono'", fontSize: "0.7rem", color: "#4A7C59", marginBottom: "0.2rem" }}>{c.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6B6B63", lineHeight: 1.4 }}>{c.role}</div>
                  <div style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", color: "#A8A89E", marginTop: "0.3rem" }}>{c.hex}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Typography */}
        <div style={{ marginBottom: "0.75rem" }}>
          <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "1.5rem" }}>Typography pairing</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E2DA", padding: "2rem", marginBottom: "3rem" }}>
          <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid #E2E2DA" }}>
            <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "0.5rem" }}>Cormorant Garamond — Display</p>
            <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 600, lineHeight: 1.1, color: "#1C1C18", marginBottom: "0.5rem" }}>
              Live cultures,<br/><em style={{ fontStyle: "italic", color: "#4A7C59" }}>living well.</em>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.25rem", color: "#6B6B63", fontStyle: "italic", fontWeight: 400 }}>
              Also beautiful at smaller sizes for pull quotes and section intros.
            </div>
          </div>
          <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid #E2E2DA" }}>
            <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "0.5rem" }}>DM Sans — Body & UI</p>
            <p style={{ fontSize: "1rem", color: "#6B6B63", lineHeight: 1.75, fontWeight: 300, maxWidth: "56ch", marginBottom: "0.75rem" }}>
              Kefir is a fermented milk drink made from kefir grains — a symbiotic culture of bacteria and yeast. It's tangy, slightly effervescent, and rich in probiotics.
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1C1C18" }}>UI label at medium weight — navigation, buttons, form labels.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "0.75rem" }}>DM Mono — Labels & measurements</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["2 tbsp kefir grains", "24hr ferment", "68–72°F", "Step 01", "Beginner"].map(t => (
                <span key={t} style={{ fontFamily: "'DM Mono'", fontSize: "0.75rem", background: "#D4E8DB", color: "#4A7C59", borderRadius: "9999px", padding: "0.3rem 0.75rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mini composition preview */}
        <div style={{ marginBottom: "0.75rem" }}>
          <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "1.5rem" }}>Composition preview</p>
        </div>
        <div style={{ background: "#F8F8F4", borderRadius: 12, border: "1px solid #E2E2DA", overflow: "hidden", marginBottom: "3rem" }}>
          {/* Mini nav */}
          <div style={{ borderBottom: "1px solid #E2E2DA", padding: "0.875rem 1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F8F8F4" }}>
            <span style={{ fontFamily: "'Cormorant Garamond'", fontSize: "1.1rem", fontWeight: 600 }}>Fermented<em style={{ fontStyle: "italic", color: "#4A7C59" }}>WithLove</em></span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Kefir", "Sourdough", "Recipes"].map(l => (
                <span key={l} style={{ fontSize: "0.8rem", fontWeight: 500, color: "#6B6B63" }}>{l}</span>
              ))}
              <span style={{ fontSize: "0.8rem", fontWeight: 500, background: "#4A7C59", color: "#fff", borderRadius: 99, padding: "0.25rem 0.875rem" }}>Get Started</span>
            </div>
          </div>
          {/* Mini hero */}
          <div style={{ padding: "3rem 1.75rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#3D6B8E", background: "#D0E4F0", borderRadius: 99, padding: "0.25rem 0.75rem", marginBottom: "1.25rem", display: "inline-block" }}>
                Live cultures
              </span>
              <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 600, lineHeight: 1.15, color: "#1C1C18", marginBottom: "1rem" }}>
                Milk, grains,<br/><em style={{ color: "#4A7C59", fontStyle: "italic" }}>& patience.</em>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#6B6B63", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.25rem" }}>
                Everything you need to culture your own kefir at home, from first grain to first glass.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span style={{ background: "#4A7C59", color: "#fff", borderRadius: 99, padding: "0.5rem 1.25rem", fontSize: "0.8rem", fontWeight: 500 }}>Start Here</span>
                <span style={{ border: "1.5px solid #4A7C59", color: "#4A7C59", borderRadius: 99, padding: "0.5rem 1.25rem", fontSize: "0.8rem", fontWeight: 500 }}>View Recipes</span>
              </div>
            </div>
            {/* Placeholder "product shot" */}
            <div style={{ background: "linear-gradient(135deg, #EFEFE8 0%, #D4E8DB 50%, #D0E4F0 100%)", borderRadius: 12, aspectRatio: "4/3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <div style={{ fontSize: "3rem" }}>🥛</div>
              <span style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", color: "#A8A89E", letterSpacing: "0.08em" }}>hero image goes here</span>
            </div>
          </div>
          {/* Mini teaser row */}
          <div style={{ borderTop: "1px solid #E2E2DA", display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#EFEFE8" }}>
            {[
              { icon: "🌿", label: "What is Kefir?", color: "#4A7C59" },
              { icon: "🫙", label: "What You Need", color: "#3D6B8E" },
              { icon: "❄️", label: "Storage & Care", color: "#4A7C59" },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: "1.25rem 1.5rem", borderRight: i < 2 ? "1px solid #E2E2DA" : "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 500, color: s.color }}>{s.label} →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decision block */}
        <div style={{ background: "#1C1C18", borderRadius: 12, padding: "2rem", color: "#F8F8F4" }}>
          <p style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A89E", marginBottom: "1rem" }}>Direction summary</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: "1.5rem" }}>
            {[
              { label: "Background", value: "#F8F8F4 milk white" },
              { label: "Primary accent", value: "#4A7C59 moss green" },
              { label: "Secondary accent", value: "#3D6B8E fjord blue" },
              { label: "Body text", value: "#6B6B63 warm stone" },
              { label: "Headings", value: "#1C1C18 near-black" },
              { label: "Display font", value: "Cormorant Garamond" },
              { label: "UI font", value: "DM Sans" },
              { label: "Mono / labels", value: "DM Mono" },
            ].map(d => (
              <div key={d.label}>
                <div style={{ fontFamily: "'DM Mono'", fontSize: "0.65rem", color: "#A8A89E", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{d.label}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{d.value}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
