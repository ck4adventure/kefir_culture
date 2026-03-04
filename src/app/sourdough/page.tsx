'use client';

import '../globals.css';

export default function SourdoughPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
              <span className="hero-eyebrow">Coming soon</span>
              <h1 className="hero-title">
                Sourdough<br />
                <em>Guide</em>
              </h1>
              <p className="hero-lead">
                Learn to make sourdough from starter to loaf with detailed step-by-step guides.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--stone)", marginTop: "2rem" }}>
                We're currently working on our comprehensive sourdough guide. Check back soon!
              </p>
              <div className="hero-actions" style={{ marginTop: "2rem" }}>
                <a href="/" className="btn btn-moss btn-lg">← Return to Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">
                🍞 Fermented<em>WithLove</em>
              </div>
              <p className="footer-tagline">A small guide to making kefir, sourdough & ferments at home.</p>
            </div>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/kefir" className="footer-link">Kefir Guide</a>
            </div>
          </div>
          <div className="footer-copy">© 2026 fermentedwithlove.com — made with live cultures</div>
        </div>
      </footer>
    </>
  );
}
