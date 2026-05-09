import { Link } from 'react-router-dom';
import { lumenosUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function UniversesPage() {
  usePageMeta(
    'Settings & Universes — Core6 RPG',
    'Infinite Universes, Infinite Possibilities. Drop into Lumenos City, Artos, Mythic Bound — or publish your own under the C6OGL.',
  );

  return (
    <div className="page-inner">
      <p className="section-label">Settings</p>
      <h1 className="page-title">Infinite Universes. Infinite Possibilities.</h1>
      <p className="page-lead">
        Core6 is genre-agnostic — but if you&apos;d rather not build a world from
        scratch, drop into one of ours.
      </p>

      <section className="setting-block">
        <div className="setting-visual" aria-hidden="true" />
        <h2>Lumenos City — Modern. Cyberpunk-tinged. Supernatural.</h2>
        <p>
          Modern-day Sydney, rebranded after the AI overlord&apos;s reset.
          Runners, supers, vampires, and the AI&apos;s enforcers all jockey for
          what comes next.
        </p>
        <p>
          <strong>Stories you&apos;ll tell:</strong> corporate espionage in glass
          towers · a vampire detective working both sides of the Veil · a
          Sentinel team raiding a werewolf gang&apos;s compound.
        </p>
        <p>
          <a className="btn btn--primary btn--small" href={lumenosUrl}>
            Explore Lumenos City →
          </a>
        </p>
      </section>

      <section className="setting-block">
        <div className="setting-visual" aria-hidden="true" />
        <h2>The World of Artos — High Fantasy. Crumbling Empires.</h2>
        <p>
          The cycle of birth, death, and rebirth has been shattered. The Empire of
          Valarion teeters. An ancient god of chaos stirs.
        </p>
        <p>
          <strong>Stories you&apos;ll tell:</strong> a doomed border patrol holding
          the line · a rebellion using the dying gods&apos; tools against the
          Empire · ancient ruins waking up beneath your feet.
        </p>
        <p className="book-meta">Artos campaign book in development.</p>
      </section>

      <section className="setting-block">
        <div className="setting-visual" aria-hidden="true" />
        <h2>Mythic Bound — Near-future. Monster hunting. With consequences.</h2>
        <p>
          Your <em className="game-term">Hero</em> is a contractor for the Van
          Helsing Society, hunting things that go bump in the night. After every
          mission, the cleanup crew BETA assesses the collateral damage. Keep it
          clean, get paid. Level a city block, you get the bill.
        </p>
        <p>
          <strong>Stories you&apos;ll tell:</strong> a quiet exorcism that goes
          very loud · racing BETA to a cult site before it&apos;s classified ·
          choosing whether the asset gets rescued or sanctioned.
        </p>
        <p className="book-meta">Mythic Bound campaign book in development.</p>
      </section>

      <section className="content-section">
        <h2>Make Your Own</h2>
        <p>
          Every Core6 setting is published under our Open Game License. You can
          run them, hack them, mash them up, and publish your own setting books
          — even commercially. Read the C6OGL to learn how.
        </p>
        <Link className="btn btn--secondary" to="/creators#c6ogl">
          Read the C6OGL
        </Link>
      </section>
    </div>
  );
}
