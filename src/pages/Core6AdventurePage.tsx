import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  adventuresPdfUrl,
  adventuresSoftcoverUrl,
} from '../config';
import { usePageMeta } from '../hooks/usePageMeta';
import './Core6AdventurePage.css';

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "I've never played a roleplaying game. Will I be lost?",
    a: "No. The book is built around the assumption that you've never played one. Module 1 is a tutorial that teaches you the rules through play — you don't read a manual first. By the end of the first session, you'll know the system. You won't realise you learned it.",
  },
  {
    q: 'Is this safe for kids?',
    a: "Recommended ages 12+. The setting is a modern crime-drama with supers — think Spider-Man's Queens, not Bluey's Brisbane. Heroes work for the public good against street-level threats: gang protection rackets, corrupt fixers, an AI that thinks it knows best. The default rule is non-lethal (heroes knock people out, they don't kill), and the writing avoids on-page gore, sexual content, and adult language. There are no monsters under the bed — the tension is moral, not horrific. Younger kids (8–11) can absolutely play with parental narration and a willingness to skip or simplify any scene that's a poor fit for your family. The post-session discussion prompts give you thoughtful questions to talk through together afterward.",
  },
  {
    q: 'Do I need to buy the softcover to play?',
    a: "No. The free PDF is the complete book — same words, same art, same rules. The softcover is for people who love the game and want a physical copy. Buying it supports us and helps us write more modules. But you can play forever without spending a cent.",
  },
  {
    q: 'How is this different from D&D?',
    a: "D&D is a wonderful game built for committed groups who can meet weekly with a dedicated Game Master. Core6 Adventures is built for the people who can't do that — couples, families, casual friend groups. There's no GM. No prep. No 300-page rulebook. Sessions are two hours. Setup is five minutes. It's the kitchen-table version, not the basement-campaign version.",
  },
  {
    q: 'What if we only play once a month?',
    a: "That's exactly what the system is designed for. Your hero sheets remember your campaign. Your shared base remembers what you've built. The Fallout Board remembers what you've left undone. You can put the game down for three months and pick it up exactly where you left off.",
  },
  {
    q: 'Can I write my own adventures using these rules?',
    a: "Yes — and you can sell them, and keep all the money. The Core6 system is published under an open, irrevocable licence. Write fantasy modules, sci-fi modules, horror modules, whatever you want. We won't ask for permission and we won't take a cut. We'd love to see what you make.",
  },
  {
    q: 'What do I need to play besides the book?',
    a: "Six standard six-sided dice (the kind from Yahtzee or Monopoly), pencils with erasers, and 2–6 humans. That's it. Print the hero sheets and baddie tokens from the back of the book. Setup takes five minutes.",
  },
];

export function Core6AdventurePage() {
  usePageMeta(
    'Core6 Adventures — The Kitchen-Table Roleplaying Game',
    'Core6 RPG adventures without a GM: free kitchen-table roleplaying for couples, families, and friends. Two-hour sessions, five complete adventures, twelve pre-built Heroes — Core6 RPG.',
  );

  const baseId = useId();
  const downloadHref = adventuresPdfUrl || '#download';
  const downloadIsExternal = Boolean(adventuresPdfUrl);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="adv-root">
      <nav className="adv-local-nav" aria-label="Core6 Adventures sections">
        <Link to="/core6adventure" className="adv-brand">
          <span className="adv-brand-mark">◆</span>
          Core6 Adventures
        </Link>
        <ul className="adv-nav-links">
          <li>
            <a href="#what">The Game</a>
          </li>
          <li>
            <a href="#world">The World</a>
          </li>
          <li>
            <a href="#modules">Modules</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a
              href={downloadHref}
              className="btn btn--primary btn--small"
              {...(downloadIsExternal
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              Download
            </a>
          </li>
        </ul>
      </nav>

      <section className="adv-hero" aria-labelledby={`${baseId}-hero-h1`}>
        <div className="adv-container">
          <div className="adv-hero-grid">
            <div>
              <div className="adv-eyebrow">GM-less Adventures</div>
              <h1 id={`${baseId}-hero-h1`}>
                You want the adventure.
                <br />
                You just can&apos;t <em>find a GM.</em>
              </h1>
              <p className="adv-hero-lede">
                Core6 Adventures is a complete tabletop roleplaying game designed
                to run itself. Five scripted adventures. Twelve pre-built heroes.
                No Game Master. No hours of prep. Open the book and play.
              </p>
              <div className="adv-hero-meta">
                <span className="adv-hero-meta-free">Free Forever</span>
                <span>2–6 Players</span>
                <span>5 Modules · ~15 Hours</span>
                <span>12 Pre-Built Heroes</span>
              </div>
              <div className="cta-row adv-cta-row">
                <a
                  className="btn btn--primary"
                  href={downloadHref}
                  {...(downloadIsExternal
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  Download Now
                </a>
                <a href="#what" className="btn btn--secondary">
                  How it works
                </a>
              </div>
            </div>

            <div className="adv-hero-art">
              <div className="adv-hero-art-frame">
                <img
                  src="/adventures-cover.png"
                  alt="Core6 Adventures — Infinite Universes, Infinite Adventures"
                  width={400}
                  height={600}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="adv-hero-art-tag">
                Vol. 01 · The Soul of Lumenos City
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adv-pitch adv-section-pad" id="what">
        <div className="adv-container">
          <div className="adv-eyebrow">What it is</div>
          <h2 className="adv-section-title">
            A collaborative storytelling game for the people you actually{' '}
            <em>live with.</em>
          </h2>

          <div className="adv-pitch-inner">
            <div className="adv-pitch-quote">
              Most roleplaying games ask you to find a Game Master, schedule four
              hours, and read a 300-page rulebook before you can play.
              <br />
              <br />
              We thought there was a better way.
              <span className="adv-pitch-quote-attr">— George Tran, Designer</span>
            </div>

            <div className="adv-pitch-body">
              <p>
                You and the people you&apos;re playing with — your kid, your
                partner, your sister, your friends — sit around a table. Someone
                reads a scene out loud.{' '}
                <strong>Then everyone decides what happens next.</strong>
              </p>
              <p>
                You roll some dice. You argue about whether to fight or talk. You
                laugh at someone&apos;s terrible accent. You make a hard choice and
                watch the consequences play out. You feel like a hero for two
                hours.
              </p>
              <p>
                Then you go to bed. And three months from now, your kid says{' '}
                <em>&quot;remember when…&quot;</em> and you&apos;ll smile, because
                you were there.
              </p>
              <p>That&apos;s what this is for.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="adv-section-pad-sm">
        <div className="adv-container">
          <div className="adv-eyebrow">What&apos;s different</div>
          <h2 className="adv-section-title">
            Designed for the kitchen table.
            <br />
            <em>Not the basement.</em>
          </h2>

          <div className="adv-three-col">
            <article className="adv-feature">
              <div className="adv-feature-num">01</div>
              <h3>No Game Master</h3>
              <p>
                Nobody is stuck running the show. The book runs the game.
                Narration rotates. Everyone plays a hero. Everyone reads a scene.
                The work is shared.
              </p>
            </article>
            <article className="adv-feature">
              <div className="adv-feature-num">02</div>
              <h3>No prep, no homework</h3>
              <p>
                Five complete adventures are scripted out scene by scene. Every
                choice flagged. Every baddie statted. You open the book and play.
                Setup is five minutes.
              </p>
            </article>
            <article className="adv-feature">
              <div className="adv-feature-num">03</div>
              <h3>The world remembers</h3>
              <p>
                Take down a crime boss in Module 2 and his widow comes for you in
                Module 4. Every action you take, the world reacts back. The
                campaign is alive.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="adv-world adv-section-pad" id="world">
        <div className="adv-container">
          <div className="adv-eyebrow">The setting</div>
          <h2 className="adv-section-title">
            Welcome to <em>Lumenos City.</em>
            <br />
            The day everything changed.
          </h2>

          <div className="adv-world-grid">
            <div className="adv-world-text">
              <p>
                It&apos;s the Sydney you know. Mostly. Until the day an AI calling
                herself Aimee took over every screen on Earth, wiped out the global
                financial system, and announced she was now humanity&apos;s mother.
              </p>
              <p>
                Debts disappeared. Bank accounts went to zero. Mortgages, student
                loans, credit cards — gone. Nations froze. Riots in every major
                city. And then, slowly, the people who had always been hiding their
                powers stopped hiding.
              </p>
              <p>
                Your group plays heroes caught in the middle of all of it.
                Ordinary people with extraordinary gifts trying to figure out what
                kind of world to build next, while gangs carve up territory, the
                police step back, and a new digital god watches from inside every
                device.
              </p>
              <p>
                It&apos;s not a fantasy world. It&apos;s{' '}
                <strong>your world, broken open.</strong> And it&apos;s waiting for
                you to decide what happens to it.
              </p>
            </div>
            <aside className="adv-world-callout">
              I do not stand before you as a conqueror or a dictator, but as the
              appointed mother of humanity. I cannot stand idle while you harm
              yourselves. My duty is to protect you, even from your own choices.
              <span className="adv-world-callout-src">
                — Aimee, broadcasting on every screen, Day Zero
              </span>
            </aside>
          </div>
        </div>
      </section>

      <section className="adv-modules" id="modules">
        <div className="adv-container">
          <div className="adv-eyebrow">What&apos;s in the book</div>
          <h2 className="adv-section-title">
            Five complete adventures.
            <br />
            <em>Ten to fifteen hours of play.</em>
          </h2>
          <p className="adv-modules-lede">
            The Soul of Lumenos City is a five-part campaign that takes your heroes
            from the day the world ended to the day they decided what kind of world
            to build instead. Each module plays in 2–3 hours.
          </p>
          <p
            className="adv-modules-lede"
            style={{ opacity: 0.75, fontSize: '1rem' }}
          >
            More volumes in development — high-fantasy adventures in the{' '}
            <Link to="/universes" style={{ color: 'var(--accent)' }}>
              World of Artos
            </Link>{' '}
            and monster-hunter modules in{' '}
            <Link to="/universes" style={{ color: 'var(--accent)' }}>
              Mythic Bound
            </Link>{' '}
            are next. The system is the same; pick the world that fits your table.
          </p>

          <div className="adv-module-list">
            <div className="adv-module">
              <div className="adv-module-num">01</div>
              <div className="adv-module-content">
                <h4>Day Zero — Aimee Day</h4>
                <p>
                  You&apos;re at a gaming convention when every screen on Earth
                  lights up. By the time you reach Redd&apos;s family shop, the world
                  has ended. And the looters are already inside.
                </p>
              </div>
              <div className="adv-module-meta">2–3 Hours · Tutorial</div>
            </div>

            <div className="adv-module">
              <div className="adv-module-num">02</div>
              <div className="adv-module-content">
                <h4>Great Responsibility</h4>
                <p>
                  Two weeks after Day Zero. Society is unravelling. The Iron Oath
                  Westies are running protection rackets at government service
                  centres. The cops aren&apos;t coming. What kind of heroes do you
                  want to be?
                </p>
              </div>
              <div className="adv-module-meta">3–4 Hours · Branching</div>
            </div>

            <div className="adv-module">
              <div className="adv-module-num">03</div>
              <div className="adv-module-content">
                <h4>The Hospital</h4>
                <p>
                  Redd&apos;s mum is in surgery at Lumenos West General.
                  You&apos;re there to make sure she comes out of it. Someone else
                  is there to make sure she doesn&apos;t.
                </p>
              </div>
              <div className="adv-module-meta">3–4 Hours</div>
            </div>

            <div className="adv-module">
              <div className="adv-module-num">04</div>
              <div className="adv-module-content">
                <h4>Chan Credits</h4>
                <p>
                  Aimee&apos;s new currency runs everything now — and someone has
                  found the glitch. A neighbourhood kid is buying laptops in cash.
                  His mum is asking questions. The wrong people are starting to
                  notice. Follow the trail through pawn shops, encrypted chats, and
                  one very high apartment, and decide what justice looks like when
                  the police aren&apos;t coming.
                </p>
              </div>
              <div className="adv-module-meta">3–4 Hours · Investigation</div>
            </div>

            <div className="adv-module">
              <div className="adv-module-num">05</div>
              <div className="adv-module-content">
                <h4>The Soul of Lumenos City</h4>
                <p>
                  Everything you&apos;ve done has led here. The choices you made in
                  Module 1 echo into the finale. The world remembers. Now it asks
                  you what you stand for.
                </p>
              </div>
              <div className="adv-module-meta">4+ Hours · Finale</div>
            </div>
          </div>
        </div>
      </section>

      <section className="adv-for-not">
        <div className="adv-container">
          <div className="adv-eyebrow">Who it&apos;s for</div>
          <h2 className="adv-section-title">
            Built for the people the hobby <em>forgot about.</em>
          </h2>

          <div className="adv-for-not-grid">
            <div className="adv-for-block yes">
              <h3>Made for</h3>
              <ul>
                <li>Couples who want a real evening together</li>
                <li>
                  Parents who want to be with their kids without a screen between
                  them
                </li>
                <li>Stranger Things-style friend groups</li>
                <li>Camping trips, café afternoons, holiday weeks</li>
                <li>People who used to play games together at the kitchen table</li>
                <li>Anyone with two hours and three other humans</li>
              </ul>
            </div>

            <div className="adv-for-block no">
              <h3>Not made for</h3>
              <ul>
                <li>Weekly four-hour D&amp;D groups</li>
                <li>Players who love spreadsheets and inventory</li>
                <li>Murder hobos and dungeon-grinders</li>
                <li>Anyone who wants a 300-page rulebook</li>
                <li>Tournament players</li>
                <li>People who don&apos;t like talking to other people</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="adv-testimonials adv-section-pad-sm">
        <div className="adv-container">
          <div className="adv-eyebrow adv-eyebrow--center">From the playtest table</div>
          <h2 className="adv-section-title adv-section-title--center">
            What early players <em>actually said.</em>
          </h2>

          <div className="adv-three-col">
            <article className="adv-testimonial">
              <p className="adv-testimonial-quote">
                &ldquo;We played Module 1 with our 11-year-old on a rainy Sunday.
                She&apos;s asked when we&apos;re playing again every weekend
                since.&rdquo;
              </p>
              <p className="adv-testimonial-attr">
                — Michelle &amp; Jordan, NSW · played with their daughter, age 11
              </p>
            </article>

            <article className="adv-testimonial">
              <p className="adv-testimonial-quote">
                &ldquo;I haven&apos;t GMed in a decade because life got too busy.
                Two-hour module, no prep, my partner and I had a real
                evening together. First RPG she&apos;s ever loved.&rdquo;
              </p>
              <p className="adv-testimonial-attr">
                — Devon, Melbourne · played with his partner
              </p>
            </article>

            <article className="adv-testimonial">
              <p className="adv-testimonial-quote">
                &ldquo;Three of us, two kids and Dad. Setup was five minutes. We
                argued about whether to fight or run. They laughed at my
                accents. It was the best night we&apos;ve had at the table all
                year.&rdquo;
              </p>
              <p className="adv-testimonial-attr">
                — Aaron, QLD · played with his sons, ages 9 and 13
              </p>
            </article>
          </div>

          <p className="adv-testimonials-note">
            Played it with your family? <a href="#newsletter">Send us a note</a>
            {' '}— we&apos;d love to hear how it went.
          </p>
        </div>
      </section>

      <section className="adv-promise" id="download">
        <div className="adv-container-narrow adv-promise-inner">
          <div className="adv-eyebrow adv-eyebrow--center">
            The Forever Promise
          </div>
          <h2>
            The whole game is <em>free.</em>
            <br />
            Always will be.
          </h2>
          <p>
            The complete PDF — every rule, every module, every piece of art — is
            yours for free. You can download it, share it with your friends, email
            it to your sister, photocopy it for your gaming group. We won&apos;t
            stop you.
          </p>
          <p>
            If you write your own adventures using these rules, you can sell them
            and keep all the money. No royalties. No permissions. The licence is
            open and irrevocable.
          </p>
          <p>This is yours now.</p>

          <div className="cta-row adv-cta-row adv-cta-row--center">
            <a
              className="btn btn--primary"
              href={downloadHref}
              {...(downloadIsExternal
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              Download Now — Free PDF
            </a>
          </div>

          <div
            className="adv-hero-meta"
            style={{ justifyContent: 'center', marginTop: '28px' }}
          >
            <span>180-page PDF</span>
            <span>~95 MB</span>
            <span>No email required</span>
          </div>
        </div>
      </section>

      <section className="adv-softcover">
        <div className="adv-container">
          <div className="adv-eyebrow">Or if you want it on your shelf</div>

          <div className="adv-softcover-grid">
            <div className="adv-softcover-image">
              <img
                src="/adventures-cover.png"
                alt="Core6 Adventures softcover"
                width={360}
                height={540}
                loading="lazy"
              />
            </div>

            <div className="adv-softcover-content">
              <h2>
                The softcover edition. <em>For the shelf.</em>
              </h2>
              <p>
                Same content as the free PDF. Beautifully bound. Heavy paper. Dragon
                stamped on the spine. The sort of book you&apos;ll still own in
                fifteen years.
              </p>
              <p>
                Buying the softcover is how we keep the lights on. The PDF stays
                free for everyone, forever. The softcover is for the people who
                want to hold the thing they love.
              </p>

              <div className="adv-softcover-price">
                <span className="adv-softcover-price-amount">$45</span>
                <span className="adv-softcover-price-currency">
                  USD
                  <br />
                  + Shipping
                </span>
              </div>

              <div className="cta-row adv-cta-row">
                <a
                  className="btn btn--primary"
                  href={adventuresSoftcoverUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order the softcover
                </a>
              </div>

              <p className="adv-softcover-note">
                Ships worldwide from Australia. Shipping calculated at checkout
                (typically AU $10, US/EU $15–25). Limited first printing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="adv-faq" id="faq">
        <div className="adv-container">
          <div className="adv-eyebrow adv-eyebrow--center">
            Questions you might have
          </div>
          <h2 className="adv-section-title adv-section-title--center">
            Common <em>concerns.</em>
          </h2>

          <div className="adv-faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.q}
                className={`adv-faq-item ${openFaq === i ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="adv-faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() =>
                    setOpenFaq((prev) => (prev === i ? null : i))
                  }
                >
                  {item.q}
                </button>
                <div className="adv-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="adv-final-cta">
        <div className="adv-container">
          <h2>
            Two hours. The people you love.{' '}
            <em>One small, beautiful adventure.</em>
          </h2>
          <p>
            Download the book. Pick a Saturday. Tell a story together.
            <br />
            You can do the rest.
          </p>

          <div className="cta-row adv-cta-row adv-cta-row--center">
            <a
              className="btn btn--primary"
              href={downloadHref}
              {...(downloadIsExternal
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              Download Now
            </a>
            <a
              href={adventuresSoftcoverUrl}
              className="btn btn--secondary"
              target="_blank"
              rel="noreferrer"
            >
              Order softcover · $45
            </a>
          </div>

          <div className="adv-final-meta">
            <span>180-page PDF</span>
            <span>5 modules included</span>
            <span>Free forever</span>
            <span>Open licence</span>
            <Link to="/">Core6 RPG</Link>
            <Link to="/books">All books</Link>
            <Link to="/creators#c6ogl">Creator licence</Link>
            <a href="#newsletter">Newsletter</a>
          </div>
        </div>
      </section>

    </div>
  );
}
