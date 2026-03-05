'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NavButtons } from '@/components/NavButtons';

export default function KefirStoragePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Kefir', href: '/kefir' },
    { label: 'Storage & Serving', href: '/kefir/storage' },
  ];

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="container-prose">

          <section className="my-8" aria-labelledby="storage-finished">
            <h2 className="section-title" id="storage-finished">Storing Finished Kefir</h2>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Chilling for Flavor and Thickness</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              After straining, freshly fermented kefir can be consumed immediately. However, many people prefer to refrigerate it for improved flavor and texture.
            </p>

            <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)", marginTop: "1rem", marginBottom: "0.6rem" }}>Steps:</h4>
            <ol style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Transfer the finished kefir to a sealed glass container.</li>
              <li>Place it in the refrigerator for at least 12–24 hours before consuming.</li>
            </ol>

            <div style={{ background: "var(--milk-deep)", padding: "1.25rem", borderRadius: "12px", marginTop: "1.5rem" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.8rem", marginTop: 0 }}>What Happens During Refrigeration:</h4>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8, margin: 0 }}>
                <li>The flavor becomes milder and more balanced.</li>
                <li>The texture often thickens slightly.</li>
                <li>Effervescence may increase gently as residual fermentation continues at a slower pace.</li>
              </ul>
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              This resting period allows the acids and fermentation byproducts to integrate more fully, resulting in a smoother taste.
            </p>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="storage-duration">
            <h2 className="section-title" id="storage-duration">Safe Storage Duration</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              Refrigerated kefir is generally best consumed within <strong>7–10 days</strong> for optimal flavor and probiotic activity. It often remains safe beyond that window if properly refrigerated, but taste and texture may become increasingly sour over time.
            </p>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Signs That Kefir Should Be Discarded:</h3>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Unpleasant or rotten odor (distinct from normal tanginess)</li>
              <li>Visible mold growth (fuzzy or colored spots)</li>
              <li>Unusual discoloration</li>
            </ul>

            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              <strong>Separation is normal:</strong> Curds and whey separation during storage is not a sign of spoilage. Simply shake or stir before serving.
            </p>

            <div style={{ background: "var(--milk-deep)", padding: "1.25rem", borderRadius: "12px", marginTop: "1.5rem", borderLeft: "4px solid var(--moss)" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, margin: 0 }}>
                <strong>💡 Pro Tip:</strong> Store kefir in a sealed container in the coldest part of the refrigerator, ideally below 40°F (4°C). With proper refrigeration, kefir remains a stable, living food that continues to evolve in flavor while maintaining its beneficial microbial profile.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="serving">
            <h2 className="section-title" id="serving">How to Serve & Enjoy</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              Kefir is incredibly versatile. Here are popular ways to enjoy it:
            </p>

            <div className="serving-ideas">
              <div className="serving-idea">
                <div className="serving-icon">🧊</div>
                <h4>Plain Over Ice</h4>
                <p>Straight from the fridge is most refreshing. Room temperature brings out more yeasty complexity.</p>
              </div>

              <div className="serving-idea">
                <div className="serving-icon">🥤</div>
                <h4>Smoothies</h4>
                <p>Blend with fruit, honey, or nut butters for a protein-rich breakfast drink.</p>
              </div>

              <div className="serving-idea">
                <div className="serving-icon">🥣</div>
                <h4>With Granola</h4>
                <p>Poured over granola and fresh berries, like a tangy yogurt alternative.</p>
              </div>

              <div className="serving-idea">
                <div className="serving-icon">🍰</div>
                <h4>In Baking</h4>
                <p>Use as a buttermilk substitute in pancakes, muffins, and other baked goods.</p>
              </div>
            </div>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="resting-grains">
            <h2 className="section-title" id="resting-grains">Resting Your Grains (Taking a Break)</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              Sometimes you need a break from daily fermentation. Your grains can rest safely in the refrigerator for extended periods.
            </p>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Short Break (Up to 1 week):</h3>
            <ol style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Submerge grains in fresh milk.</li>
              <li>Seal the container and refrigerate.</li>
              <li>Return to room temperature and resume normal feeding when ready.</li>
            </ol>

            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>Longer Break (1–4 weeks):</h3>
            <ol style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>Change the milk every 1–2 weeks to keep grains nourished.</li>
              <li>Store in sealed containers in the refrigerator.</li>
              <li>After returning to room temperature, allow a few daily fermentation cycles for full activity to resume.</li>
            </ol>

            <div style={{ background: "var(--milk-deep)", padding: "1.25rem", borderRadius: "12px", marginTop: "1.5rem", borderLeft: "4px solid var(--moss)" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, margin: 0 }}>
                <strong>Indefinite Storage:</strong> With proper care and regular milk changes, kefir grains can be maintained indefinitely, making them a true heirloom culture perfect for passing down.
              </p>
            </div>
          </section>
        </article>

        <NavButtons
          prev={{ title: 'Care Guide', href: '/kefir/care' }}
        />
      </div>
    </>
  );
}
