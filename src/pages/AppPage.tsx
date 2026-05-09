import { useMemo } from 'react';
import { heroSheetLiveUrl, siteOrigin } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function AppPage() {
  usePageMeta(
    'Core6 Hero Sheet — Companion App',
    'Free mobile-first Core6 character sheet: wizard, dice pools, Discipline browser, offline — no accounts. GM mode coming soon.',
  );

  const appJsonLd = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Core6 Hero Sheet',
        applicationCategory: 'GameApplication',
        operatingSystem: 'Any (web browser)',
        browserRequirements: 'Requires JavaScript. Works offline when installed.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Companion character sheet for Core6 RPG — build Heroes, track combat, roll dice pools, browse Disciplines. Local-first; no subscription.',
        url: siteOrigin ? `${siteOrigin}/app` : undefined,
      }),
    [],
  );

  return (
    <div className="page-inner page-inner--narrow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: appJsonLd }}
      />

      <p className="section-label">Companion</p>
      <h1 className="page-title">
        The Core6 Hero Sheet — Free Companion App
      </h1>
      <p className="page-lead">
        A clean, mobile-first character sheet built specifically for Core6 —
        runs in any browser, installs to your phone, works offline.
      </p>

      <section className="content-section">
        <ul>
          <li>
            Build a <em className="game-term">Hero</em> with the in-app wizard.
            Done in two minutes.
          </li>
          <li>
            Track HP, AP, and combat state with one tap. End of combat? Reset
            everything in a single button.
          </li>
          <li>
            Browse all 80+ <em className="game-term">Disciplines</em> with full
            upgrade trees. Buy, refund, respec instantly — never lose track of XP.
          </li>
          <li>
            Roll your dice pools with one tap. Hits highlighted, totals shown.
          </li>
          <li>
            Switch between multiple Heroes instantly — perfect if you run more than
            one.
          </li>
          <li>No accounts. No tracking. No subscription. Your data stays on your device.</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>
          {heroSheetLiveUrl ? (
            <a
              className="btn btn--primary"
              href={heroSheetLiveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open the app →
            </a>
          ) : (
            <>
              <button
                type="button"
                className="btn btn--primary"
                disabled
                style={{ opacity: 0.55, cursor: 'not-allowed' }}
              >
                Open the app →
              </button>
              <span className="trust-strip" style={{ display: 'block', marginTop: '0.75rem' }}>
                Public hosting URL not set yet — run the Hero Sheet locally from the
                Core6 repo, or subscribe below for launch news.
              </span>
            </>
          )}
        </p>
      </section>

      <section className="content-section">
        <h2>Coming soon</h2>
        <p>
          GM mode with live campaign rosters, real-time HP updates during combat,
          and a campaign invite system. Sign up below to be the first to know.
        </p>
        <p>
          <a className="btn btn--secondary btn--small" href="#newsletter">
            Notify me
          </a>
        </p>
      </section>
    </div>
  );
}
