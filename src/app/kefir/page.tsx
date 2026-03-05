'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function KefirHub() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Kefir', href: '/kefir' },
  ];

  return (
    <>
      <div className="container py-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mb-12">
          <h1 className="section-title">All things Kefir</h1>
          <p className="section-lead">
            Learn everything you need to make and maintain milk kefir at home.
          </p>
        </div>

        {/* Guide sections grid */}
        <div className="guide-sections-grid">
          <Link href="/kefir/overview" className="guide-card">
            <div className="guide-card-icon">🥛</div>
            <h2 className="guide-card-title">What is Kefir?</h2>
            <p className="guide-card-desc">
              Discover the history, science, and benefits of this ancient fermented probiotic drink.
            </p>
            <span className="guide-card-link">Read more →</span>
          </Link>

          <Link href="/kefir/care" className="guide-card">
            <div className="guide-card-icon">💜</div>
            <h2 className="guide-card-title">Care Guide</h2>
            <p className="guide-card-desc">
              Daily feeding instructions, troubleshooting, and tips for healthy, thriving grains.
            </p>
            <span className="guide-card-link">Read more →</span>
          </Link>

          <Link href="/kefir/storage" className="guide-card">
            <div className="guide-card-icon">🫙</div>
            <h2 className="guide-card-title">Storage & Serving</h2>
            <p className="guide-card-desc">
              How to store finished kefir, serve it, and keep your grains during breaks.
            </p>
            <span className="guide-card-link">Read more →</span>
          </Link>
        </div>
      </div>
    </>
  );
}