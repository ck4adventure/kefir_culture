'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NavButtons } from '@/components/NavButtons';

export default function KefirCarePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Kefir', href: '/kefir' },
    { label: 'Care Guide', href: '/kefir/care' },
  ];

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="container-prose">
          <h1 className="section-title">Caring for Milk Kefir Grains</h1>
          <p className="section-lead">
            Milk kefir grains require fresh milk daily to remain healthy. With simple, consistent care, your grains will thrive and produce delicious kefir for years.
          </p>

          <section className="my-8" aria-labelledby="feeding-instructions">
            <h2 className="section-title" id="feeding-instructions">Daily Feeding Instructions</h2>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Equipment Needed</h3>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Glass jars, 12–16 ounces</li>
              <li>Plastic wrap, cheesecloth, or other breathable lid</li>
              <li>Fine mesh strainer, plastic or stainless steel</li>
            </ul>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Basic Feeding Ratio</h3>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li><strong>1 tablespoon</strong> kefir grains</li>
              <li><strong>1–2 cups</strong> fresh milk</li>
            </ul>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem" }}>
              You may adjust the milk quantity depending on how quickly your grains ferment and your desired thickness.
            </p>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Step-by-Step Directions</h3>
            <ol style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Place kefir grains in a clean glass jar.</li>
              <li>Add fresh milk (cow, goat, or sheep milk all work well).</li>
              <li>Cover the jar with a breathable lid (cloth secured with a band or loose-fitting lid).</li>
              <li>Leave at room temperature (68–75°F / 20–24°C) for approximately 18–24 hours.</li>
              <li>Once fermentation is complete, strain the kefir through a non-reactive strainer into a separate container.</li>
              <li>Transfer the grains immediately into fresh milk to begin the next cycle.</li>
            </ol>

            <div style={{ background: "var(--milk-deep)", padding: "1.25rem", borderRadius: "12px", borderLeft: "4px solid var(--stone)", marginTop: "2rem" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, margin: 0 }}>
                <strong>⚠️ Metal Safety:</strong> Avoid prolonged contact with reactive metals like aluminum. Occasional contact with stainless steel during straining is safe. <strong>Consistency matters:</strong> Grains thrive on regular feeding at roughly the same temperature and interval each day.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="ready-indicator">
            <h2 className="section-title" id="ready-indicator">How to Know When It's Ready</h2>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>The milk has thickened to a drinkable yogurt-like consistency.</li>
              <li>It has a pleasant tangy aroma.</li>
              <li>You may see slight separation between curds and whey.</li>
              <li>Small bubbles may be visible, indicating active fermentation.</li>
            </ul>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              <strong>Taste is the best indicator.</strong> It should be mildly tart but not sharply sour. Longer fermentation increases acidity and thickness.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem" }}>
              If fully separated into large curds and clear whey, the kefir is over-fermented but still usable. Simply strain and adjust the next fermentation time or increase the amount of milk.
            </p>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="splitting">
            <h2 className="section-title" id="splitting">Splitting and Sharing Grains</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              Over time, kefir grains naturally multiply. When you find that fermentation is consistently finishing too quickly, you're needing large quantities of milk daily, or the grains have significantly increased in mass, it's time to divide them.
            </p>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>To Split Your Grains:</h3>
            <ol style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Simply separate the grains into two portions.</li>
              <li>Continue feeding one portion at your preferred milk ratio.</li>
              <li>The extra portion may be shared, stored temporarily in the refrigerator, or dehydrated for later use.</li>
              <li>After splitting, reduce the milk quantity back to a balanced ratio. This keeps fermentation predictable and prevents over-acidification.</li>
            </ol>

            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              Regular splitting is a normal and healthy part of maintaining milk kefir grains. With consistent care, grains can continue multiplying indefinitely, making them easy to share within a community.
            </p>

            <div style={{ background: "var(--milk-deep)", padding: "1.25rem", borderRadius: "12px", borderLeft: "4px solid var(--fjord)", marginTop: "2rem" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, margin: "0 0 0.75rem 0" }}>
                <strong>Taking a Break?</strong> If your grains need a short rest, store them in fresh milk in the refrigerator for up to one week. Change the milk every 1–2 weeks if storing longer.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, margin: 0 }}>
                After refrigeration, allow a few room-temperature fermentation cycles for full activity to resume.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="troubleshooting">
            <h2 className="section-title" id="troubleshooting">Troubleshooting</h2>
            <div className="troubleshooting-list">
              <div className="troubleshooting-item">
                <h4>Kefir is too thin</h4>
                <ul>
                  <li>Fermentation time may be too short.</li>
                  <li>Room temperature may be too cool.</li>
                  <li>Try: Increase fermentation time or reduce milk volume slightly.</li>
                </ul>
              </div>

              <div className="troubleshooting-item">
                <h4>Kefir is too sour</h4>
                <ul>
                  <li>Fermented too long.</li>
                  <li>Try: Reduce fermentation time or increase milk volume.</li>
                </ul>
              </div>

              <div className="troubleshooting-item">
                <h4>Grains aren't thickening milk</h4>
                <ul>
                  <li>They may need several days to acclimate to a new environment.</li>
                  <li>Ensure consistent daily feeding.</li>
                  <li>Try: Avoid chlorinated or ultra-pasteurized milk when possible.</li>
                </ul>
              </div>

              <div className="troubleshooting-item">
                <h4>Grains are shrinking or not multiplying</h4>
                <ul>
                  <li>Check room temperature (extreme heat or cold stresses grains).</li>
                  <li>Ensure consistent feeding schedule.</li>
                  <li>Verify milk quality.</li>
                </ul>
              </div>

              <div className="troubleshooting-item">
                <h4>Strong yeast smell or excessive carbonation</h4>
                <ul>
                  <li>Try: Shorten fermentation time.</li>
                  <li>Try: Slightly increase milk-to-grain ratio.</li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        <NavButtons
          prev={{ title: 'What is Kefir?', href: '/kefir/overview' }}
          next={{ title: 'Storage & Serving', href: '/kefir/storage' }}
        />
      </div>
    </>
  );
}
