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
              <div className="hero-actions" style={{ marginTop: "2rem", justifyContent: "center"}}>
                <a href="/" className="btn btn-moss btn-lg">← Return to Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
