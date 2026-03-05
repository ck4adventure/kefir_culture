'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NavButtons } from '@/components/NavButtons';

export default function KefirOverviewPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Kefir', href: '/kefir' },
    { label: 'What is Kefir?', href: '/kefir/overview' },
  ];

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="container-prose">
          <h1 className="section-title">What is Kefir?</h1>

          <section className="my-8" aria-labelledby="introduction">
            <h2 className="section-title" id="introduction">An Ancient Living Culture</h2>
            <p className="section-lead">
              Milk kefir is a traditional cultured dairy beverage made by fermenting milk with kefir grains. These small, cauliflower-shaped clusters contain a living community of beneficial bacteria and yeast that transform fresh milk into a tangy, probiotic-rich drink.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1rem", fontWeight: 300 }}>
              With simple daily care, kefir grains can remain healthy and active for many years, continually producing fresh kefir. The process is straightforward, but because kefir grains are living organisms, they respond best to regular feeding and gentle handling.
            </p>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="pronunciation">
            <h3 className="section-title" id="pronunciation">Pronunciation Guide</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              Kefir is typically pronounced:
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)", margin: "1rem 0" }}>
              <em>kuh-FEER</em>
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--pebble)", marginBottom: "1rem" }}>
              IPA: /kəˈfɪr/
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8 }}>
              In some regions it may also be pronounced <strong>KEE-feer</strong>, but kuh-FEER is the most widely accepted pronunciation in English.
            </p>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8" aria-labelledby="what-are-grains">
            <h3 className="section-title" id="what-are-grains">What Are Kefir Grains?</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Kefir grains are not actual grains. They are a <strong>SCOBY</strong>, which stands for <em>Symbiotic Culture of Bacteria and Yeast</em>. This means they are a stable, cooperative community of microorganisms living together in a matrix of proteins and polysaccharides.
            </p>

            <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginTop: "1.5rem", marginBottom: "0.8rem" }}>
              How They Work Together
            </h4>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--stone)", lineHeight: 1.8 }}>
              <li>The bacteria ferment lactose (milk sugar) into lactic acid.</li>
              <li>The yeast contribute mild carbonation and additional fermentation byproducts.</li>
              <li>Together, they create kefir's characteristic tangy flavor, slight effervescence, and creamy texture.</li>
            </ul>

            <p style={{ fontSize: "0.95rem", color: "var(--stone)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              The grains grow and multiply when properly fed, forming soft, white or off-white clusters with a texture similar to small florets of cauliflower.
            </p>
          </section>

          <hr style={{ borderColor: "var(--chalk)", margin: "2rem 0" }} />

          <section className="my-8">
            <h3 className="section-title">Health Benefits</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">🦠</div>
                <div>
                  <strong>30+ Probiotic Strains</strong>
                  <p>Far more diverse than yogurt or store-bought kefir</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div>
                  <strong>High in B Vitamins</strong>
                  <p>B12, riboflavin, and folate naturally produced during fermentation</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🧬</div>
                <div>
                  <strong>Lactose-Reduced</strong>
                  <p>Fermentation breaks down most lactose, easier to digest</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔄</div>
                <div>
                  <strong>Self-Sustaining</strong>
                  <p>Grains grow and multiply, giving you a lifelong culture</p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <NavButtons
          next={{ title: 'Care Guide', href: '/kefir/care' }}
        />
      </div>
    </>
  );
}
