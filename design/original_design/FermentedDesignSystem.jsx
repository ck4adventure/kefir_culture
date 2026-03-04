import { useState } from "react";

/* ============================================================
   FERMENTED WITH LOVE — React Design System
   Copy the <style> tag contents into your global CSS / index.css
   The components below are ready to copy into your project.
   ============================================================ */

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');

  :root {
    /* --- Color Palette --- */
    --cream:        #F7F2E8;
    --parchment:    #EDE5D0;
    --tan:          #D6C9A8;
    --warm-brown:   #7B5E3A;
    --deep-brown:   #3E2A14;
    --rust:         #B85C38;
    --sage:         #6B7C5C;
    --muted-sage:   #A8B99A;
    --amber:        #C8892A;
    --off-white:    #FDFAF4;
    --text-body:    #4A3728;
    --text-muted:   #8A7260;

    /* --- Shadcn/ui semantic tokens (HSL) --- */
    --background:              43 38% 94%;
    --foreground:              22 21% 22%;
    --card:                    40 35% 87%;
    --card-foreground:         25 51% 16%;
    --primary:                 28 38% 35%;
    --primary-foreground:      36 100% 97%;
    --secondary:               98 14% 42%;
    --secondary-foreground:    0 0% 100%;
    --muted:                   38 30% 75%;
    --muted-foreground:        22 18% 45%;
    --accent:                  16 54% 46%;
    --accent-foreground:       0 0% 100%;
    --border:                  38 30% 75%;
    --input:                   43 60% 97%;
    --ring:                    35 64% 48%;
    --radius:                  0.5rem;
    --destructive:             8 53% 39%;
    --destructive-foreground:  36 100% 97%;

    /* --- Typography --- */
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body:    'DM Sans', system-ui, sans-serif;
    --font-mono:    'DM Mono', monospace;

    /* --- Spacing --- */
    --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
    --space-4: 1rem;     --space-5: 1.25rem;  --space-6: 1.5rem;
    --space-8: 2rem;     --space-10: 2.5rem;  --space-12: 3rem;
    --space-16: 4rem;    --space-20: 5rem;    --space-24: 6rem;

    /* --- Shadows --- */
    --shadow-sm: 0 1px 3px rgba(62,42,20,0.08);
    --shadow:    0 3px 10px rgba(62,42,20,0.10);
    --shadow-md: 0 6px 20px rgba(62,42,20,0.12);
    --shadow-lg: 0 12px 40px rgba(62,42,20,0.14);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { font-size: 16px; scroll-behavior: smooth; }

  body {
    background-color: var(--cream);
    color: var(--text-body);
    font-family: var(--font-body);
    line-height: 1.6;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  }

  a { color: var(--amber); text-underline-offset: 3px; transition: color 150ms ease; }
  a:hover { color: var(--rust); }
  img, video { max-width: 100%; height: auto; display: block; }
`;

/* ============================================================
   DESIGN TOKENS (JS object — useful for inline styles / theming)
   ============================================================ */
export const tokens = {
  colors: {
    cream: "#F7F2E8",
    parchment: "#EDE5D0",
    tan: "#D6C9A8",
    warmBrown: "#7B5E3A",
    deepBrown: "#3E2A14",
    rust: "#B85C38",
    sage: "#6B7C5C",
    mutedSage: "#A8B99A",
    amber: "#C8892A",
    offWhite: "#FDFAF4",
    textBody: "#4A3728",
    textMuted: "#8A7260",
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
    mono: "'DM Mono', monospace",
  },
};

/* ============================================================
   UTILITY: cn() — tiny classname joiner (replace with clsx/cn)
   ============================================================ */
const cn = (...classes) => classes.filter(Boolean).join(" ");

/* ============================================================
   LAYOUT COMPONENTS
   ============================================================ */

/** Page-width container */
export const Container = ({ children, prose = false, className = "", style = {} }) => (
  <div
    className={className}
    style={{
      width: "100%",
      maxWidth: prose ? "720px" : "1100px",
      marginInline: "auto",
      paddingInline: "clamp(1rem, 4vw, 2rem)",
      ...style,
    }}
  >
    {children}
  </div>
);

/** Responsive CSS grid */
export const Grid = ({ children, cols = "auto", gap = 6, className = "", style = {} }) => {
  const colMap = {
    1: "repeat(1, 1fr)",
    2: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
    3: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
    4: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
    auto: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
  };
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: colMap[cols] ?? colMap.auto,
        gap: `${gap * 0.25}rem`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Section with consistent vertical padding */
export const Section = ({ children, className = "", style = {} }) => (
  <section
    className={className}
    style={{ paddingBlock: "clamp(3rem, 8vw, 6rem)", ...style }}
  >
    {children}
  </section>
);

/* ============================================================
   NAVIGATION
   ============================================================ */
export const Nav = ({ logo = "FermentedWithLove", links = [], cta }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "60px",
        background: "rgba(247,242,232,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--tan)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--deep-brown)", textDecoration: "none" }}>
          {logo.replace("WithLove", "")}<em style={{ color: "var(--rust)", fontStyle: "italic" }}>WithLove</em>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", alignItems: "center" }}>
          {links.map((l) => (
            <li key={l.label} style={{ display: "none", "@media(min-width:640px)": { display: "block" } }}>
              <a href={l.href} style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-body)", textDecoration: "none" }}>{l.label}</a>
            </li>
          ))}
          {cta && <li>{cta}</li>}
        </ul>
      </Container>
    </nav>
  );
};

/* ============================================================
   TYPOGRAPHY COMPONENTS
   ============================================================ */

export const DisplayHeading = ({ children, size = "xl", italic = false, style = {} }) => {
  const sizes = { sm: "1.875rem", md: "2.25rem", lg: "3rem", xl: "clamp(2.25rem, 5vw, 3.5rem)" };
  return (
    <h1
      style={{
        fontFamily: "var(--font-display)",
        fontSize: sizes[size] ?? sizes.xl,
        fontWeight: 600,
        color: "var(--deep-brown)",
        lineHeight: 1.2,
        fontStyle: italic ? "italic" : "normal",
        ...style,
      }}
    >
      {children}
    </h1>
  );
};

/** Use <em> inside for rust-colored italic emphasis */
export const Heading = ({ as: Tag = "h2", children, style = {} }) => {
  const sizes = { h2: "1.875rem", h3: "1.5rem", h4: "1.25rem", h5: "1.125rem", h6: "1rem" };
  return (
    <Tag
      style={{
        fontFamily: "var(--font-display)",
        fontSize: sizes[Tag] ?? "1.5rem",
        fontWeight: 600,
        color: "var(--deep-brown)",
        lineHeight: 1.25,
        marginBottom: "0.75rem",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

export const Lead = ({ children, style = {} }) => (
  <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300, ...style }}>
    {children}
  </p>
);

export const Muted = ({ children, style = {} }) => (
  <span style={{ color: "var(--text-muted)", fontSize: "0.875rem", ...style }}>{children}</span>
);

/* ============================================================
   TAG / BADGE
   ============================================================ */
const tagVariants = {
  default:   { bg: "#A8B99A", color: "#3E2A14" },
  kefir:     { bg: "#D4E8D0", color: "#2C4A24" },
  sourdough: { bg: "#F0DDB0", color: "#5A3A10" },
  ferment:   { bg: "#E0CFF0", color: "#3A2060" },
  recipe:    { bg: "#FAD8C8", color: "#5A2010" },
};

export const Tag = ({ children, variant = "default", style = {} }) => {
  const v = tagVariants[variant] ?? tagVariants.default;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        borderRadius: "9999px",
        padding: "0.2rem 0.65rem",
        background: v.bg,
        color: v.color,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

/* ============================================================
   BUTTON
   ============================================================ */
const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontFamily: "var(--font-body)",
  fontWeight: 500,
  letterSpacing: "0.02em",
  borderRadius: "9999px",
  cursor: "pointer",
  border: "none",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "all 150ms ease",
};

const btnVariantStyles = {
  primary: { background: "var(--warm-brown)", color: "#FFF8EE" },
  accent:  { background: "var(--rust)", color: "#fff" },
  outline: { background: "transparent", color: "var(--warm-brown)", border: "1.5px solid var(--warm-brown)" },
  ghost:   { background: "transparent", color: "var(--text-body)" },
  sage:    { background: "var(--sage)", color: "#fff" },
};

const btnSizeStyles = {
  sm: { fontSize: "0.75rem", padding: "0.375rem 0.875rem" },
  md: { fontSize: "0.875rem", padding: "0.625rem 1.25rem" },
  lg: { fontSize: "1rem",    padding: "0.875rem 2rem" },
};

export const Button = ({ children, variant = "primary", size = "md", as: Tag = "button", href, style = {}, onClick, ...rest }) => {
  const El = href ? "a" : Tag;
  return (
    <El
      href={href}
      onClick={onClick}
      style={{ ...btnBase, ...btnVariantStyles[variant], ...btnSizeStyles[size], ...style }}
      {...rest}
    >
      {children}
    </El>
  );
};

/* ============================================================
   CARD
   ============================================================ */
export const Card = ({ children, variant = "default", style = {} }) => (
  <div
    style={{
      background: "var(--parchment)",
      border: "1px solid var(--tan)",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "var(--shadow-sm)",
      transition: "box-shadow 250ms ease, transform 250ms ease",
      borderTop: variant === "recipe" ? "4px solid var(--rust)" : undefined,
      ...style,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.transform = "translateY(0)"; }}
  >
    {children}
  </div>
);

export const CardImage = ({ src, alt = "", gradient, style = {} }) => (
  <div
    style={{
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "1rem",
      aspectRatio: "16/9",
      background: gradient ?? "var(--tan)",
      ...style,
    }}
  >
    {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
  </div>
);

/* ============================================================
   CALLOUT / TIP BOX
   ============================================================ */
const calloutColors = {
  default: { bg: "#F2ECD8", border: "var(--amber)" },
  sage:    { bg: "#EDF2E8", border: "var(--sage)" },
  rust:    { bg: "#FAE8E0", border: "var(--rust)" },
};

export const Callout = ({ title, children, variant = "default", style = {} }) => {
  const c = calloutColors[variant] ?? calloutColors.default;
  return (
    <div
      style={{
        background: c.bg,
        borderLeft: `4px solid ${c.border}`,
        borderRadius: "0 8px 8px 0",
        padding: "1rem 1.25rem",
        fontSize: "0.875rem",
        ...style,
      }}
    >
      {title && (
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--deep-brown)", marginBottom: "0.25rem" }}>
          {title}
        </div>
      )}
      <div style={{ color: "var(--text-body)" }}>{children}</div>
    </div>
  );
};

/* ============================================================
   FORM ELEMENTS
   ============================================================ */
const inputBase = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  background: "var(--off-white)",
  color: "var(--text-body)",
  border: "1.5px solid var(--tan)",
  borderRadius: "8px",
  padding: "0.625rem 1rem",
  outline: "none",
  transition: "border-color 150ms, box-shadow 150ms",
};

export const Input = ({ label, id, style = {}, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      {label && <label htmlFor={id} style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--deep-brown)", marginBottom: "0.5rem" }}>{label}</label>}
      <input
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBase,
          borderColor: focused ? "var(--amber)" : "var(--tan)",
          boxShadow: focused ? "0 0 0 3px rgba(200,137,42,0.18)" : "none",
          ...style,
        }}
        {...props}
      />
    </div>
  );
};

export const Textarea = ({ label, id, style = {}, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      {label && <label htmlFor={id} style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--deep-brown)", marginBottom: "0.5rem" }}>{label}</label>}
      <textarea
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBase,
          resize: "vertical",
          minHeight: "120px",
          borderColor: focused ? "var(--amber)" : "var(--tan)",
          boxShadow: focused ? "0 0 0 3px rgba(200,137,42,0.18)" : "none",
          ...style,
        }}
        {...props}
      />
    </div>
  );
};

/* ============================================================
   RECIPE COMPONENTS
   ============================================================ */
export const IngredientList = ({ ingredients = [] }) => (
  <ul style={{ background: "var(--parchment)", borderRadius: "12px", padding: "1.25rem", listStyle: "none" }}>
    {ingredients.map((ing, i) => (
      <li key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBlock: "0.5rem", borderBottom: i < ingredients.length - 1 ? "1px solid var(--tan)" : "none", fontSize: "0.875rem" }}>
        <span>{ing.name}</span>
        <span style={{ fontWeight: 500, color: "var(--rust)", marginLeft: "1rem", whiteSpace: "nowrap" }}>{ing.amount}</span>
      </li>
    ))}
  </ul>
);

export const Steps = ({ steps = [] }) => (
  <ol style={{ listStyle: "none", padding: 0 }}>
    {steps.map((step, i) => (
      <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "flex-start" }}>
        <span style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, width: "2rem", height: "2rem",
          background: "var(--rust)", color: "#fff",
          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem",
          borderRadius: "9999px", marginTop: "0.1em",
        }}>
          {i + 1}
        </span>
        <span style={{ paddingTop: "0.25rem", lineHeight: 1.6 }}>{step}</span>
      </li>
    ))}
  </ol>
);

/* ============================================================
   DIVIDER
   ============================================================ */
export const Divider = ({ label, style = {} }) =>
  label ? (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBlock: "2rem", color: "var(--text-muted)", fontSize: "0.875rem", ...style }}>
      <div style={{ flex: 1, borderTop: "1px solid var(--tan)" }} />
      {label}
      <div style={{ flex: 1, borderTop: "1px solid var(--tan)" }} />
    </div>
  ) : (
    <hr style={{ border: "none", borderTop: "1px solid var(--tan)", marginBlock: "2rem", ...style }} />
  );

/* ============================================================
   FOOTER
   ============================================================ */
export const Footer = ({ links = [] }) => (
  <footer style={{ background: "var(--deep-brown)", color: "rgba(255,248,238,0.8)", paddingBlock: "3rem" }}>
    <Container>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontStyle: "italic", color: "var(--cream)", marginBottom: "1rem" }}>
        FermentedWithLove
      </div>
      <p style={{ maxWidth: "48ch", marginBottom: "1.5rem", fontSize: "0.875rem" }}>
        A small corner of the internet dedicated to living cultures, slow food, and the ancient art of fermentation.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.875rem", marginBottom: "2rem" }}>
        {links.map((l) => <a key={l.label} href={l.href} style={{ color: "var(--amber)" }}>{l.label}</a>)}
      </div>
      <p style={{ fontSize: "0.75rem", opacity: 0.45 }}>© 2026 FermentedWithLove.com — cultivated with care</p>
    </Container>
  </footer>
);

/* ============================================================
   HERO SECTION
   ============================================================ */
export const Hero = ({ title, titleEm, lead, actions = [] }) => (
  <Section style={{ textAlign: "center" }}>
    <Container prose>
      <DisplayHeading style={{ marginInline: "auto", marginBottom: "1.25rem" }}>
        {title} <em style={{ color: "var(--rust)", fontStyle: "italic", fontWeight: 400 }}>{titleEm}</em>
      </DisplayHeading>
      <Lead style={{ marginInline: "auto", marginBottom: "2rem" }}>{lead}</Lead>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
        {actions.map((a, i) => <Button key={i} variant={a.variant ?? (i === 0 ? "accent" : "outline")} size="lg" href={a.href}>{a.label}</Button>)}
      </div>
    </Container>
  </Section>
);

/* ============================================================
   STYLE GUIDE PAGE — the live demo
   ============================================================ */
const navLinks = [
  { label: "Kefir", href: "#" },
  { label: "Sourdough", href: "#" },
  { label: "Ferments", href: "#" },
  { label: "Recipes", href: "#" },
];

const sampleIngredients = [
  { name: "Whole milk", amount: "4 cups" },
  { name: "Milk kefir grains", amount: "2 tbsp" },
  { name: "Clean glass jar (1 qt)", amount: "1" },
  { name: "Breathable cloth cover", amount: "1" },
];

const sampleSteps = [
  "Add kefir grains to a clean, dry glass jar.",
  "Pour milk over the grains, leaving an inch of headspace.",
  "Cover with a breathable cloth and secure with a rubber band.",
  "Leave at room temperature (68–72°F) for 12–48 hours until thickened and tangy.",
  "Strain out the grains and refrigerate your kefir. Repeat!",
];

const SgLabel = ({ children }) => (
  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--tan)" }}>
    {children}
  </p>
);

const SgSection = ({ label, children }) => (
  <div style={{ paddingBlock: "3rem", borderBottom: "1px solid var(--tan)" }}>
    <SgLabel>{label}</SgLabel>
    {children}
  </div>
);

const Swatch = ({ hex, name }) => (
  <div style={{ width: "80px", borderRadius: "8px", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
    <div style={{ height: "64px", background: hex }} />
    <div style={{ background: "white", padding: "6px", fontSize: "9px", fontFamily: "var(--font-mono)" }}>{name}</div>
  </div>
);

export default function DesignSystem() {
  return (
    <>
      <style>{globalStyles}</style>

      <Nav
        links={navLinks}
        cta={<Button variant="accent" size="sm" href="#">Get Started</Button>}
      />

      <main>
        {/* HERO */}
        <Container>
          <SgSection label="Hero">
            <Hero
              title="Alive, bubbling &"
              titleEm="made with love"
              lead="Everything you need to know about kefir, sourdough, and the beautiful world of fermentation — from first grain to first taste."
              actions={[
                { label: "Explore Recipes", href: "#", variant: "accent" },
                { label: "Start with Kefir →", href: "#", variant: "outline" },
              ]}
            />
          </SgSection>

          {/* COLORS */}
          <SgSection label="Color Palette">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Swatch hex="#F7F2E8" name="--cream" />
              <Swatch hex="#EDE5D0" name="--parchment" />
              <Swatch hex="#D6C9A8" name="--tan" />
              <Swatch hex="#7B5E3A" name="--warm-brown" />
              <Swatch hex="#3E2A14" name="--deep-brown" />
              <Swatch hex="#B85C38" name="--rust" />
              <Swatch hex="#6B7C5C" name="--sage" />
              <Swatch hex="#C8892A" name="--amber" />
            </div>
          </SgSection>

          {/* TYPOGRAPHY */}
          <SgSection label="Typography — Playfair Display + DM Sans">
            <DisplayHeading style={{ marginBottom: "1rem" }}>
              The Art of <em style={{ color: "var(--rust)", fontStyle: "italic", fontWeight: 400 }}>Fermentation</em>
            </DisplayHeading>
            <Heading as="h2">Getting started with kefir grains</Heading>
            <Heading as="h3">What makes a good sourdough starter?</Heading>
            <Heading as="h4" style={{ marginTop: "0.5rem" }}>Step 4: The long cold proof</Heading>
            <Lead style={{ margin: "1rem 0" }}>
              There's something quietly magical about leaving food to transform on its own — guided only by temperature, time, and the invisible work of microbes.
            </Lead>
            <p style={{ maxWidth: "68ch" }}>
              Kefir is a fermented milk beverage made with kefir grains — a symbiotic culture of bacteria and yeasts. The grains ferment the milk overnight, creating a tangy, probiotic-rich drink with a gentle fizz.
            </p>
          </SgSection>

          {/* TAGS */}
          <SgSection label="Tags & Badges">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <Tag variant="kefir">Kefir</Tag>
              <Tag variant="sourdough">Sourdough</Tag>
              <Tag variant="ferment">Fermentation</Tag>
              <Tag variant="recipe">Recipe</Tag>
              <Tag>Beginner</Tag>
              <Tag>Dairy-Free</Tag>
              <Tag>24hr Ferment</Tag>
            </div>
          </SgSection>

          {/* BUTTONS */}
          <SgSection label="Buttons">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
              <Button variant="primary">Primary</Button>
              <Button variant="accent">Get the Recipe</Button>
              <Button variant="outline">Learn More</Button>
              <Button variant="ghost">Cancel</Button>
              <Button variant="sage">Sage Action</Button>
              <Button variant="accent" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large CTA</Button>
            </div>
          </SgSection>

          {/* CARDS */}
          <SgSection label="Cards">
            <Grid cols={3} gap={6}>
              <Card variant="recipe">
                <CardImage gradient="linear-gradient(135deg, #D6C9A8, #B85C38, #7B5E3A)" />
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <Tag variant="kefir">Kefir</Tag>
                  <Tag>Beginner</Tag>
                </div>
                <Heading as="h3">Classic Milk Kefir</Heading>
                <Muted>A simple overnight ferment. Just grains, milk, and patience.</Muted>
                <Button variant="outline" size="sm" style={{ marginTop: "1rem" }}>View Recipe →</Button>
              </Card>
              <Card variant="recipe">
                <CardImage gradient="linear-gradient(135deg, #EDE5D0, #C8892A, #7B5E3A)" />
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <Tag variant="sourdough">Sourdough</Tag>
                  <Tag>Intermediate</Tag>
                </div>
                <Heading as="h3">Country Sourdough Loaf</Heading>
                <Muted>An open crumb with a crackly crust. Made over 36 hours.</Muted>
                <Button variant="outline" size="sm" style={{ marginTop: "1rem" }}>View Recipe →</Button>
              </Card>
              <Card variant="recipe">
                <CardImage gradient="linear-gradient(135deg, #A8B99A, #6B7C5C, #3E2A14)" />
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <Tag variant="ferment">Fermentation</Tag>
                </div>
                <Heading as="h3">Lacto-Fermented Garlic Honey</Heading>
                <Muted>Sweet, pungent, and surprisingly easy. Ready in 4 weeks.</Muted>
                <Button variant="outline" size="sm" style={{ marginTop: "1rem" }}>View Recipe →</Button>
              </Card>
            </Grid>
          </SgSection>

          {/* FORMS */}
          <SgSection label="Form Elements">
            <div style={{ maxWidth: "480px" }}>
              <Input label="Your name" id="name" placeholder="e.g. Sarah" />
              <Input label="Email address" id="email" type="email" placeholder="you@example.com" />
              <Textarea label="Ask a fermentation question" id="note" placeholder="My kefir grains are turning pink..." />
              <Button variant="accent">Send Message</Button>
            </div>
          </SgSection>

          {/* CALLOUTS */}
          <SgSection label="Callouts & Tips">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "640px" }}>
              <Callout title="💡 Fermentation Tip">
                Temperature matters more than almost anything else. Between 68–72°F (20–22°C) is the sweet spot for most ferments.
              </Callout>
              <Callout title="🌿 Note on Water Kefir" variant="sage">
                Water kefir grains are different from milk kefir grains — don't swap them between recipes.
              </Callout>
              <Callout title="⚠️ Safety Note" variant="rust">
                If your ferment smells putrid (not just sour), or shows pink/black/fuzzy mold, discard it and start fresh.
              </Callout>
            </div>
          </SgSection>

          {/* RECIPE LAYOUT */}
          <SgSection label="Recipe Components">
            <Grid cols={2} gap={8}>
              <div>
                <Heading as="h4" style={{ marginBottom: "1rem" }}>Ingredients</Heading>
                <IngredientList ingredients={sampleIngredients} />
              </div>
              <div>
                <Heading as="h4" style={{ marginBottom: "1rem" }}>Instructions</Heading>
                <Steps steps={sampleSteps} />
              </div>
            </Grid>
          </SgSection>

          {/* DIVIDERS */}
          <SgSection label="Dividers">
            <Divider />
            <Divider label="❋ made with love ❋" />
          </SgSection>
        </Container>
      </main>

      <Footer
        links={[
          { label: "Kefir Guides", href: "#" },
          { label: "Sourdough", href: "#" },
          { label: "Ferments", href: "#" },
          { label: "Recipes", href: "#" },
          { label: "About", href: "#" },
        ]}
      />
    </>
  );
}
