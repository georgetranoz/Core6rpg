import { Link } from 'react-router-dom';
import { Target, Zap, Globe2 } from 'lucide-react';
import { handbookPdfUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta(
    'Core6 RPG: Universal Modern RPG System',
    'Core6 RPG is a universal modern tabletop RPG: fast d6 dice pools, one-roll combat, and Heroes ready in minutes. Fun, fast, flexible across any genre — free Hero\'s Handbook PDF.',
  );

  return (
    <>
      <section className="hero-home" aria-labelledby="hero-heading">
        <div className="hero-home__backdrop" aria-hidden="true">
          <div className="hero-home__backdrop-img" />
          <div className="hero-home__backdrop-veil" />
        </div>

        <div className="hero-home__inner">
          <div className="hero-home__visual">
            <div className="hero-home__cover-frame">
              <img
                src="/handbook-cover.png"
                alt="Core6 Hero's Handbook — dragon over crimson"
                width={773}
                height={1000}
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="hero-home__copy">
            <p className="hero-home__eyebrow">
              Fun · Fast · Flexible
              <span className="hero-home__eyebrow-sub">
                Infinite Universes · Infinite Possibilities
              </span>
            </p>
            <h1 id="hero-heading" className="hero-home__title">
              <span className="hero-home__title-line">
                Your <em className="game-term">Hero</em>.
              </span>
              <span className="hero-home__title-line">Any Universe.</span>
              <span className="hero-home__title-line hero-home__title-line--accent">
                One Roll.
              </span>
            </h1>
            <p className="hero-home__lead">
              A fast, flexible, universal d6 RPG system. Build a legend in five
              minutes, drop the bookkeeping, and focus on the action.
            </p>
            <div className="cta-row">
              <a className="btn btn--primary" href={handbookPdfUrl}>
                Get the Hero&apos;s Handbook (free PDF or print)
              </a>
              <Link className="btn btn--secondary" to="/app">
                Try the Companion App
              </Link>
            </div>
            <p className="trust-strip">
              Made in Australia · Free Open Game License · No subscription, ever
            </p>
          </div>
        </div>
      </section>

      <section className="pillars" aria-labelledby="pillars-heading">
        <div className="pillars__inner">
          <h2 id="pillars-heading">The Three Pillars</h2>
          <div className="pillar-grid">
            <article className="pillar-card">
              <h3>
                <Target
                  size={20}
                  color="var(--accent)"
                  aria-hidden="true"
                  style={{ verticalAlign: '-3px', marginRight: 8 }}
                />
                Fun
              </h3>
              <p>
                No bookkeeping treadmills. No spell slots, no rations to count,
                no rolling 1&apos;s for HP. Every roll is one roll — attack and damage
                in the same toss. <em className="game-term">Heroes</em> go first.
                Combat resolves in minutes, not half a session.
              </p>
            </article>
            <article className="pillar-card">
              <h3>
                <Zap
                  size={20}
                  color="var(--accent)"
                  aria-hidden="true"
                  style={{ verticalAlign: '-3px', marginRight: 8 }}
                />
                Fast
              </h3>
              <p>
                Three stats. Two starting{' '}
                <em className="game-term">Disciplines</em>.{' '}
                <em className="game-term">Heroes</em> built and rolling dice in
                under five minutes. After every combat, Heroes are back to full
                health and abilities — focus on the action and the story, not the
                rest mechanics.
              </p>
            </article>
            <article className="pillar-card">
              <h3>
                <Globe2
                  size={20}
                  color="var(--accent)"
                  aria-hidden="true"
                  style={{ verticalAlign: '-3px', marginRight: 8 }}
                />
                Flexible
              </h3>
              <p>
                The same Core6 engine runs high fantasy, cyberpunk, super hero,
                space opera, vampire, or cosmic horror. Skin a Mental ranged
                attack as psychic missiles at one table and neural disruptors
                at the next — no rules change, no new book to buy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-inner" aria-labelledby="formats-heading">
        <p className="section-label">One engine</p>
        <h2 id="formats-heading" className="page-title">
          What people use Core6 for
        </h2>
        <p className="page-lead">
          Four formats, one line — same Heroes, the same rules.
        </p>
        <div className="card-grid card-grid--4">
          <Link to="/books#handbook" className="use-card">
            <h3>Core6 RPG</h3>
            <p>Story campaigns. The classic GM-led tabletop experience.</p>
          </Link>
          <Link to="/books#adventures" className="use-card">
            <h3>Core6 Adventures</h3>
            <p>Solo &amp; co-op. Deep campaigns without needing a GM.</p>
          </Link>
          <Link to="/books#tactics" className="use-card">
            <h3>Core6 Tactics</h3>
            <p>Squad battler PvP. Team vs. team, fast and lethal.</p>
          </Link>
          <Link to="/books#battlegrounds" className="use-card">
            <h3>Core6 Battlegrounds</h3>
            <p>Mass combat. Warhammer-scale battles, none of the bloat.</p>
          </Link>
        </div>
      </section>

      <section className="closing-pitch">
        <h2>Be Heroic. Infinite Universes. Infinite Possibilities.</h2>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a className="btn btn--primary" href={handbookPdfUrl}>
            Download the free PDF
          </a>
          <Link className="btn btn--secondary" to="/books">
            Browse the books
          </Link>
        </div>
      </section>
    </>
  );
}
