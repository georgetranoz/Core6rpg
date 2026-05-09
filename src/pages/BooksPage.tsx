import { useMemo } from 'react';
import {
  gmGuidePdfUrl,
  gmGuidePrintUrl,
  handbookPdfUrl,
  lumenosUrl,
  printStoreUrl,
  siteOrigin,
} from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function BooksPage() {
  usePageMeta(
    'The Core6 Library — Books',
    'Every Core6 book uses the same engine. Hero’s Handbook, GM Guide, print editions, and settings including Lumenos City.',
  );

  const booksJsonLd = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Book',
            name: "Core6 Hero's Handbook",
            isbn: '978-1-7637735-6-1',
            bookFormat: 'https://schema.org/Paperback',
            inLanguage: 'en',
            url: siteOrigin ? `${siteOrigin}/books#handbook` : undefined,
            image: siteOrigin ? `${siteOrigin}/handbook-cover.png` : undefined,
            author: {
              '@type': 'Person',
              name: 'George Tran',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Mango Dog Pty Ltd',
            },
          },
          {
            '@type': 'Book',
            name: 'Core6 GM Guide',
            isbn: '978-1-7637735-7-8',
            bookFormat: 'https://schema.org/Paperback',
            inLanguage: 'en',
            url: siteOrigin ? `${siteOrigin}/books#gm-guide` : undefined,
            image: siteOrigin ? `${siteOrigin}/gm-guide-cover.png` : undefined,
            author: {
              '@type': 'Person',
              name: 'George Tran',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Mango Dog Pty Ltd',
            },
          },
          {
            '@type': 'Book',
            name: 'Core6 Adventures',
            isbn: '978-1-9235970-0-6',
            bookFormat: 'https://schema.org/EBook',
            inLanguage: 'en',
            url: siteOrigin ? `${siteOrigin}/books#adventures` : undefined,
            image: siteOrigin ? `${siteOrigin}/adventures-cover.png` : undefined,
          },
          {
            '@type': 'Book',
            name: 'Core6 Tactics',
            inLanguage: 'en',
            url: siteOrigin ? `${siteOrigin}/books#tactics` : undefined,
            image: siteOrigin ? `${siteOrigin}/tactics-cover.png` : undefined,
            author: {
              '@type': 'Person',
              name: 'George Tran',
            },
          },
          {
            '@type': 'Book',
            name: 'Core6 Battlegrounds',
            inLanguage: 'en',
            url: siteOrigin ? `${siteOrigin}/books#battlegrounds` : undefined,
            image: siteOrigin ? `${siteOrigin}/battlegrounds-cover.png` : undefined,
            author: {
              '@type': 'Person',
              name: 'George Tran',
            },
          },
          {
            '@type': 'Book',
            name: 'Lumenos City — City of Light\'s Shadows',
            isbn: '978-1-7637735-8-5',
            bookFormat: 'https://schema.org/Paperback',
            inLanguage: 'en',
            url: lumenosUrl,
            image: siteOrigin ? `${siteOrigin}/lumenos-cover.png` : undefined,
          },
        ],
      }),
    [],
  );

  return (
    <div className="page-inner">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: booksJsonLd }}
      />

      <p className="section-label">Products</p>
      <h1 className="page-title">The Core6 Library</h1>
      <p className="page-lead">
        Every book uses the same engine. Buy what you need, ignore what you
        don&apos;t.
      </p>

      <article className="book-card" id="handbook">
        <div className="book-cover book-cover--image">
          <img
            src="/handbook-cover.png"
            alt="Core6 RPG Hero's Handbook cover"
            width={280}
            height={420}
            loading="lazy"
          />
        </div>
        <div className="book-card__body">
          <h2>Core6 Hero&apos;s Handbook</h2>
          <p className="book-tagline">
            The complete rulebook. Everything you need to play.
          </p>
          <ul className="book-bullets">
            <li>
              Build <em className="game-term">Heroes</em>. Run sessions. GM your
              first campaign. The Hero&apos;s Handbook covers core mechanics, all
              80+ <em className="game-term">Disciplines</em>, optional advanced
              rules, and three published settings to drop into.
            </li>
            <li>335 pages of rules, examples, and tools</li>
            <li>
              80+ Disciplines with full upgrade trees
            </li>
            <li>Three campaign settings included</li>
          </ul>
          <p className="book-meta">ISBN 978-1-7637735-6-1</p>
          <div className="book-actions">
            <a
              className="btn btn--primary btn--small"
              href={handbookPdfUrl}
            >
              Free PDF
            </a>
            <a
              className="btn btn--secondary btn--small"
              href={printStoreUrl}
            >
              Buy print
            </a>
          </div>
        </div>
      </article>

      <article className="book-card" id="gm-guide">
        <div className="book-cover book-cover--image">
          <img
            src="/gm-guide-cover.png"
            alt="Core6 GM Guide cover"
            width={280}
            height={420}
            loading="lazy"
          />
        </div>
        <div className="book-card__body">
          <h2>Core6 GM Guide</h2>
          <p className="book-tagline">Less prep, more fun.</p>
          <ul className="book-bullets">
            <li>
              GM burnout is real — this guide introduces{' '}
              <em className="game-term">The Core6 Method</em>: emergent,
              collaborative storytelling where your table&apos;s choices drive the
              session, not weeks of unused lore.
            </li>
            <li>
              Using our <em className="game-term">Mission Blueprint</em>, pick up
              thousands of mission seeds — monster hunts, conspiracies, and more —
              each with fallout that sparks the next beat. Never face a blank page
              again.
            </li>
            <li>
              Craft villains your <em className="game-term">Heroes</em> will love
              to hate. Less homework, more play — your escape from the GM grind.
            </li>
            <li>
              Includes the Mission Blueprint generator, NPC and faction
              builders, ready-to-run encounter tables, and session prep
              templates — everything you need to run Core6 at the table.
            </li>
          </ul>
          <p className="book-meta">
            ISBN 978-1-7637735-7-8 · By George Tran · Infinite Universes,
            Infinite Possibilities · Fun, Fast and Flexible
          </p>
          <div className="book-actions">
            {gmGuidePdfUrl ? (
              <a
                className="btn btn--primary btn--small"
                href={gmGuidePdfUrl}
              >
                Download PDF
              </a>
            ) : null}
            <a
              className={`btn btn--${gmGuidePdfUrl ? 'secondary' : 'primary'} btn--small`}
              href={gmGuidePrintUrl}
            >
              Buy print
            </a>
          </div>
        </div>
      </article>

      <article className="book-card" id="adventures">
        <div className="book-cover book-cover--image">
          <img
            src="/adventures-cover.png"
            alt="Core6 Adventures cover"
            width={280}
            height={420}
            loading="lazy"
          />
        </div>
        <div className="book-card__body">
          <h2>
            Core6 Adventures{' '}
            <span className="tag-coming-soon">Coming soon</span>
          </h2>
          <p className="book-tagline">
            Solo and co-op campaigns. Endless adventures.
          </p>
          <p>
            Want to play an RPG but can&apos;t find a GM? Or maybe you don&apos;t
            want to be the GM?
          </p>
          <p>
            Picture Gloomhaven meets XCOM&apos;s tactical combat in a persistent
            campaign where your <em className="game-term">Heroes</em> level up
            with experience. The world remembers and reacts to your actions,
            mission after mission.
          </p>
          <p>
            The mission generator uses the fallout from your past choices to drive
            the story forward. Took down the local mafia boss? Now his widow has put
            a contract on your team — defend your base against assassins.
          </p>
          <ul className="book-bullets">
            <li>Solo or 2–4 player co-op</li>
            <li>No GM required</li>
            <li>Each mission a gritty, cinematic adventure</li>
            <li>Setup in minutes, pack down in minutes</li>
          </ul>
          <p className="book-meta">
            ISBN 978-1-9235970-0-6 — Bond More. Play More. Create More Memories —
            Together.
          </p>
          <div className="book-actions">
            <a className="btn btn--ghost btn--small" href="#newsletter">
              Notify me when it&apos;s out
            </a>
          </div>
        </div>
      </article>

      <article className="book-card" id="tactics">
        <div className="book-cover book-cover--image">
          <img
            src="/tactics-cover.png"
            alt="Core6 Tactics cover"
            width={280}
            height={420}
            loading="lazy"
          />
        </div>
        <div className="book-card__body">
          <h2>
            Core6 Tactics{' '}
            <span className="tag-coming-soon">Coming soon</span>
          </h2>
          <p className="book-tagline">
            GM-less squad battler. Team vs. team.
          </p>
          <p>
            A high-octane PvP team battler — think Fortnite or PUBG squad mode in
            tabletop form. Build a squad of <em className="game-term">Heroes</em>,
            deploy, and fight to be the last team standing.
          </p>
          <p>
            Same <em className="game-term">Disciplines</em> you&apos;ve already
            invested in. Brand new way to play.
          </p>
          <div className="book-actions">
            <a className="btn btn--ghost btn--small" href="#newsletter">
              Notify me when it&apos;s out
            </a>
          </div>
        </div>
      </article>

      <article className="book-card" id="battlegrounds">
        <div className="book-cover book-cover--image">
          <img
            src="/battlegrounds-cover.png"
            alt="Core6 Battlegrounds cover"
            width={280}
            height={420}
            loading="lazy"
          />
        </div>
        <div className="book-card__body">
          <h2>
            Core6 Battlegrounds{' '}
            <span className="tag-coming-soon">Coming soon</span>
          </h2>
          <p className="book-tagline">
            Mass combat. Customised armies. None of the bloat.
          </p>
          <p>
            Wargaming without the edition churn or the $2000 buy-in. Build any
            army using the full Discipline rules from Core6. Use any minis you
            already own. Fast, intuitive mass combat with infinite roster
            combinations.
          </p>
          <div className="book-actions">
            <a className="btn btn--ghost btn--small" href="#newsletter">
              Notify me when it&apos;s out
            </a>
          </div>
        </div>
      </article>

      <article className="book-card" id="lumenos">
        <div className="book-cover book-cover--image">
          <img
            src="/lumenos-cover.png"
            alt="Lumenos City — The City of Light's Shadows cover"
            width={280}
            height={420}
            loading="lazy"
          />
        </div>
        <div className="book-card__body">
          <h2>Lumenos City — City of Light&apos;s Shadows</h2>
          <p className="book-tagline">
            Setting book. Modern Sydney, after the AI took over.
          </p>
          <p>
            <strong>The Great Reset… was just the beginning.</strong>
          </p>
          <p>
            An AI named Aimee has erased every debt overnight. Governments
            collapse. The masks come off — superhumans, vampires, werewolves,
            things older still — all walk openly through what used to be Sydney.
          </p>
          <p>
            Will your <em className="game-term">Hero</em> put on Sentinel armour
            and serve the new order? Run the streets as a cyberpunk fixer? Embrace
            older shadows? In a city of conspiracy and moral ambiguity, the
            legends are still being written.
          </p>
          <ul className="book-bullets">
            <li>Full setting guide with factions, geography, and adventure hooks</li>
            <li>Drop-in Disciplines themed to the world</li>
            <li>
              Plays out of the Hero&apos;s Handbook with no extra rules
            </li>
          </ul>
          <p className="book-meta">
            ISBN 978-1-7637735-8-5 ·{' '}
            <a href={lumenosUrl}>www.LumenosCity.com</a>
          </p>
          <div className="book-actions">
            <a
              className="btn btn--primary btn--small"
              href={lumenosUrl}
            >
              Buy Lumenos City
            </a>
          </div>
        </div>
      </article>

      <section className="content-section">
        <p>
          More settings in development. The World of Artos (high fantasy) and
          Mythic Bound (futuristic monster hunting) are next.
        </p>
      </section>
    </div>
  );
}
