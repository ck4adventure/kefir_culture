'use client';

import '../globals.css';

export default function CidersPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
              <span className="hero-eyebrow">Coming soon</span>
              <h1 className="hero-title">
                Cider & Fermented<br />
                <em>Drinks</em>
              </h1>
              <p className="hero-lead">
                Ferment your own cider, kombucha, and other delicious beverages at home.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--stone)", marginTop: "2rem" }}>
                We're currently working on our guide to fermented drinks. Check back soon!
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
