import './globals.css';

const equipment = [
  { name: "Glass jar (1 qt)", desc: "Wide-mouth mason jars are ideal. Avoid metal — the acidity can react.", icon: "🫙" },
  { name: "Kefir grains", desc: "The living starter culture. Get them from a local sharer or online.", icon: "🌿" },
  { name: "Whole milk", desc: "Full-fat gives the creamiest result. Raw or pasteurised both work.", icon: "🥛" },
  { name: "Breathable cover", desc: "A square of muslin or cheesecloth secured with a rubber band.", icon: "🧴" },
  { name: "Plastic strainer", desc: "To separate grains from finished kefir — never metal.", icon: "🔩" },
  { name: "Wooden spoon", desc: "For stirring. Again, avoid metal contact with grains.", icon: "🥄" },
];

const careSteps = [
  { title: "Ratio", desc: "Start with 1–2 tbsp of grains per 2 cups of milk. Adjust as your grains multiply." },
  { title: "Temperature", desc: "Leave at room temperature — ideally 68–75°F (20–24°C). Warmer ferments faster." },
  { title: "Time", desc: "12–24 hours is typical. Taste after 12h; tangy and slightly thick means it's ready." },
  { title: "Straining", desc: "Pour through a plastic strainer into a clean jar. The grains left behind are ready to reuse immediately." },
  { title: "Resting your grains", desc: "Taking a break? Cover grains in fresh milk and refrigerate. Change the milk every 1–2 weeks." },
];

const tips = [
  { label: "Temperature tip", text: "A slightly warm oven with just the light on is a perfect fermentation environment in winter." },
  { label: "Grain health", text: "Healthy grains are white/cream, cauliflower-shaped, and smell pleasantly sour. Pink or slimy = discard." },
  { label: "Second ferment", text: "After straining, bottle the kefir and leave 4–6h at room temp for a fizzy, more complex flavour." },
];

const storageCards = [
  { icon: "❄️", title: "Refrigerate finished kefir", body: "Strained kefir keeps for up to 2–3 weeks in a sealed jar in the fridge. Flavour deepens over time.", tag: "Up to 3 weeks", tagStyle: "tag-green", cardStyle: "green" },
  { icon: "🥛", title: "How to drink it", body: "Plain over ice, blended into smoothies, poured over granola, or used as a buttermilk substitute in baking.", tag: "Versatile", tagStyle: "tag-blue", cardStyle: "blue" },
  { icon: "🫙", title: "Resting your grains", body: "Submerge grains in fresh milk, seal, and refrigerate. Change milk every 1–2 weeks. They'll keep indefinitely.", tag: "Indefinite storage", tagStyle: "tag-green", cardStyle: "" },
  { icon: "🌡️", title: "Serving temperature", body: "Straight from the fridge is most refreshing. Room temperature brings out more of the yeasty complexity.", tag: "2–6°C ideal", tagStyle: "tag-blue", cardStyle: "" },
];

export default function LandingPage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo">Fermented<em>WithLove</em></span>
          <ul className="nav-links">
            {["What is Kefir", "Equipment", "Care Guide", "Storage"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`}>{l}</a></li>
            ))}
          </ul>
          <a href="#care-guide" className="btn btn-moss btn-sm">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="hero-eyebrow">Live cultures · Probiotic · Home fermented</span>
              <h1 className="hero-title">
                Milk, grains,<br />
                <em>& a little patience.</em>
              </h1>
              <p className="hero-lead">
                Everything you need to culture your own kefir at home — from understanding the grains to your first perfect glass.
              </p>
              <div className="hero-actions">
                <a href="#what-is-kefir" className="btn btn-moss btn-lg">Learn the Basics</a>
                <a href="#care-guide" className="btn btn-outline btn-lg">Care Guide →</a>
              </div>
              <div className="hero-stats">
                {[
                  { val: "24h", label: "Typical ferment time" },
                  { val: "30+", label: "Probiotic strains" },
                  { val: "∞", label: "Reusable grains" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="stat-val">{s.val}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrated product shot */}
            <div className="hero-img">
              <div className="kefir-scene">
                <div className="kefir-lid" />
                <div className="kefir-jar">
                  <div className="kefir-fill" />
                  <div className="kefir-grains">
                    {[...Array(5)].map((_, i) => <div key={i} className="grain" />)}
                  </div>
                  <div className="kefir-label-strip">
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.08em", color: "var(--moss)", textTransform: "uppercase" }}>milk kefir</span>
                  </div>
                </div>
                <div className="kefir-spoon" style={{ display: "flex", alignItems: "center", marginTop: "0.75rem", transform: "rotate(-25deg)" }}>
                  <div className="spoon-handle" />
                  <div className="spoon-head" />
                </div>
                <div className="scene-herbs">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="herb-sprig">
                      <div className="herb-leaf" style={{ transform: i % 2 === 0 ? "rotate(-10deg)" : "rotate(10deg)" }} />
                      <div className="herb-stem" />
                    </div>
                  ))}
                </div>
              </div>
              <span className="hero-img-caption">styled product shot · replace with photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEASER STRIP */}
      <div className="teaser-strip">
        <div className="container">
          <div className="teaser-grid">
            {[
              { icon: "🌿", label: "What is Kefir?", sub: "Origins, culture & benefits", href: "#what-is-kefir" },
              { icon: "🫙", label: "Equipment Needed", sub: "Six things to get started", href: "#equipment" },
              { icon: "📋", label: "Care Guide", sub: "Step-by-step fermentation", href: "#care-guide" },
              { icon: "❄️", label: "Storage & Serving", sub: "How to keep & enjoy it", href: "#storage" },
            ].slice(0,3).map(t => (
              <a key={t.label} href={t.href} className="teaser-item">
                <span className="teaser-icon">{t.icon}</span>
                <div>
                  <div className="teaser-label">{t.label}</div>
                  <div className="teaser-sub">{t.sub}</div>
                </div>
                <span className="teaser-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT IS KEFIR */}
      <section className="section" id="what-is-kefir">
        <div className="container">
          <div className="what-grid">
            <div>
              <p className="section-eyebrow">What is kefir</p>
              <h2 className="section-title">A drink that's been <em>alive for centuries.</em></h2>
              <p className="section-lead">
                Kefir originated in the Caucasus mountains thousands of years ago. It's made by adding kefir grains — a living symbiotic colony of bacteria and yeast — to milk, then letting them ferment at room temperature.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem", fontWeight: 300 }}>
                The result is a tangy, lightly effervescent drink packed with probiotics. Unlike yogurt, kefir contains a far wider variety of beneficial microorganisms, and the grains can be reused indefinitely — making it one of the most sustainable fermented foods you can make at home.
              </p>
            </div>
            <div className="what-visual">
              {[
                { icon: "🦠", text: "<strong>30+ probiotic strains</strong> — far more diverse than yogurt or store-bought kefir" },
                { icon: "⚡", text: "<strong>High in B vitamins</strong> — B12, riboflavin, and folate naturally produced during fermentation" },
                { icon: "🧬", text: "<strong>Lactose-reduced</strong> — fermentation breaks down most of the lactose, easier to digest" },
                { icon: "🔄", text: "<strong>Self-sustaining</strong> — grains grow and multiply, giving you a lifelong culture" },
              ].map((b, i) => (
                <div key={i} className="benefit-pill">
                  <span className="benefit-icon">{b.icon}</span>
                  <span className="benefit-text" dangerouslySetInnerHTML={{ __html: b.text }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="section section-alt" id="equipment">
        <div className="container">
          <p className="section-eyebrow">What you need</p>
          <h2 className="section-title">Simple tools,<br /><em>timeless results.</em></h2>
          <p className="section-lead">You probably own most of this already. The only thing you truly need to source are the grains themselves.</p>
          <div className="equip-grid">
            {equipment.map((e, i) => (
              <div key={e.name} className="equip-card">
                <div className="equip-num">0{i + 1}</div>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{e.icon}</div>
                <div className="equip-name">{e.name}</div>
                <div className="equip-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE GUIDE */}
      <section className="section" id="care-guide">
        <div className="container">
          <div className="care-grid">
            <div>
              <p className="section-eyebrow">Care guide</p>
              <h2 className="section-title">Feeding your <em>grains well.</em></h2>
              <p className="section-lead">Kefir grains are living things. Treat them well and they'll reward you indefinitely.</p>
              <ol className="step-list">
                {careSteps.map((s, i) => (
                  <li key={s.title} className="step-item">
                    <div className="step-num">{i + 1}</div>
                    <div className="step-body">
                      <div className="step-title">{s.title}</div>
                      <div className="step-desc">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="care-visual">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fjord)", marginBottom: "1.25rem" }}>Tips & troubleshooting</p>
                {tips.map(t => (
                  <div key={t.label} className="tip-card">
                    <div className="tip-label">{t.label}</div>
                    <div className="tip-text">{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORAGE & CONSUME */}
      <section className="section section-alt" id="storage">
        <div className="container">
          <p className="section-eyebrow">Storage & serving</p>
          <h2 className="section-title">Made with care,<br /><em>enjoyed slowly.</em></h2>
          <p className="section-lead">Finished kefir keeps beautifully, and your grains — properly rested — will last a lifetime.</p>
          <div className="storage-grid">
            {storageCards.map(c => (
              <div key={c.title} className={`storage-card ${c.cardStyle}`}>
                <div className="storage-ico">{c.icon}</div>
                <div className="storage-title">{c.title}</div>
                <div className="storage-body">{c.body}</div>
                <span className={`storage-tag ${c.tagStyle}`}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container-prose" style={{ textAlign: "center" }}>
          <h2 className="cta-title">Ready to start <em>culturing?</em></h2>
          <p className="cta-sub">It takes ten minutes to set up your first batch. Your grains will do the rest.</p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#what-is-kefir" className="btn btn-white btn-lg">Read the Guide</a>
            <a href="#equipment" className="btn btn-outline btn-lg" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.3)" }}>See Equipment</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">Fermented<em>WithLove</em></div>
              <p className="footer-tagline">A small guide to making kefir, sourdough & ferments at home.</p>
            </div>
            <div className="footer-links">
              {["What is Kefir", "Equipment", "Care Guide", "Storage", "Recipes"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
          </div>
          <div className="footer-copy">© 2026 fermentedwithlove.com — made with live cultures</div>
        </div>
      </footer>
    </>
  );
}