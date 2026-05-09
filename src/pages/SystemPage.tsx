import { handbookPdfUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function SystemPage() {
  usePageMeta(
    'How Core6 Plays — Core6 RPG',
    'Core6 is a d6 dice-pool RPG: three stats, one-roll combat, Heroes act first. Fun, fast, flexible — learn enough to run a one-shot in one page.',
  );

  return (
    <div className="page-inner page-inner--narrow">
      <p className="section-label">The System</p>
      <h1 className="page-title">How Core6 Plays</h1>
      <p className="page-lead">
        Core6 is a d6 dice-pool system with everything you&apos;d expect from a
        modern RPG and almost nothing you&apos;ve come to dread.
      </p>

      <section className="content-section">
        <p>
          If you&apos;ve ever played a d20 game, you&apos;ll feel at home in five
          minutes. If you&apos;ve never played a tabletop RPG before, you can
          build a <em className="game-term">Hero</em>, learn the rules, and roll
          your first attack faster than it takes to install a video game.
        </p>
      </section>

      <section className="content-section">
        <h2>Three Stats — That&apos;s It</h2>
        <p>
          Forget juggling six or seven attributes. Every roll in Core6 comes
          from three stats:
        </p>
        <ul>
          <li>
            <strong>Physical</strong> — strength, agility, endurance, raw
            athleticism
          </li>
          <li>
            <strong>Mental</strong> — intelligence, perception, cunning, magical
            aptitude
          </li>
          <li>
            <strong>Social</strong> — charm, presence, intimidation, leadership
          </li>
        </ul>
        <p>
          When your Hero tries something risky, you roll a number of d6s equal
          to the relevant stat. A 4, 5, or 6 is a hit. Count your hits —
          that&apos;s your number of successes.
        </p>
        <p>
          Unlike systems where Strength and Dexterity dominate and other stats
          become dump scores, every Core6 stat can deal damage in combat. A
          silver-tongued duellist hits as hard as a barbarian — they just hit
          different things.
        </p>
      </section>

      <section className="content-section">
        <h2>One Roll = Attack + Damage</h2>
        <p>
          In Core6, you don&apos;t roll to hit and then roll for damage. You
          roll once. Each die that hits the{' '}
          <em className="game-term">Combat Target</em> (CT — usually 4+) is both
          a hit and one point of damage. A successful 3-die attack with two hits
          deals two damage. Done.
        </p>
        <p>
          This single change cuts combat time roughly in half compared to
          traditional d20 systems.
        </p>
      </section>

      <section className="content-section">
        <h2>Heroes Act First</h2>
        <p>
          No initiative rolls. Unless your Hero is surprised, you go first.
          Cinematic, decisive, and skip-able only if you and your GM want the
          gritty option. (Core6 supports initiative if you ask for it —
          it&apos;s just not required.)
        </p>
      </section>

      <section className="content-section">
        <h2>Pick a Stat, Pick Two Disciplines, Done</h2>
        <p>Hero creation has three steps:</p>
        <ol>
          <li>
            Assign your stats. Every Hero starts with 3 / 2 / 2. Put the 3 in
            your favourite stat. Warrior → Physical. Mage → Mental. Face →
            Social.
          </li>
          <li>
            Pick two starting{' '}
            <em className="game-term">Disciplines</em>. Disciplines are your
            special abilities — over 80 unique Disciplines, each with its own
            upgrade tree. Mix and match for a build that&apos;s truly yours.
          </li>
          <li>Name your Hero.</li>
        </ol>
        <p>
          That&apos;s it. Your Hero is assumed competent — fully equipped, no
          shopping list, no inventory micromanagement. The same Hero plays in
          fantasy, sci-fi, or modern day with zero changes.
        </p>
      </section>

      <section className="content-section">
        <h2>Full Reset After Combat</h2>
        <p>
          After every fight, your Hero is back to full HP, full Action Points,
          and ready to go. No five-minute breaks for short rests. No tracking
          spell slots between encounters. No &quot;we should rest, but the
          dungeon is a hostile area.&quot; Combat ends, story continues.
        </p>
      </section>

      <section className="content-section">
        <h2>Level Up. Or Respec. Anytime.</h2>
        <p>
          Earn XP. Spend it however you want — buy stats, buy HP, buy new
          Disciplines, buy upgrades to existing ones.
        </p>
        <p>
          And here&apos;s the part most systems get wrong: with GM approval, you
          can refund any XP and rebuild your Hero between sessions. No more
          &quot;bored barbarian during a city-intrigue session.&quot; Heroes
          adapt with the story, not against it.
        </p>
      </section>

      <section className="content-section">
        <h2>Tactical Depth, On Demand</h2>
        <p>
          Core6 has every advanced rule veteran tacticians look for: attacks of
          opportunity, flanking, overwatch, ready actions, threatened squares,
          range penalties, cover, conditions. They&apos;re all there.
        </p>
        <p>
          They&apos;re also all optional. Run a quick narrative one-shot or a
          crunchy XCOM-grade tactical battle — same engine, same Heroes.
        </p>
      </section>

      <section className="content-section">
        <h2>Beyond Combat</h2>
        <p>
          Core6 quietly handles the things other systems treat as separate
          games:
        </p>
        <ul>
          <li>
            <strong>Influence &amp; Standing</strong> — earn reputation in
            Public and Underworld networks. Spend it to call in favours, secure
            intel, recruit allies. Your renown is a real currency.
          </li>
          <li>
            <strong>Fear, Morale &amp; Corruption</strong> — for horror, dark
            fantasy, or supernatural campaigns where your Hero&apos;s mind is as
            fragile as their body.
          </li>
          <li>
            <strong>Hunger, Mana &amp; Blood</strong> — track resources for
            vampire games, thirst-driven powers, or magic tied to vital essence.
          </li>
          <li>
            <strong>The Veil</strong> — for settings where some powers must stay
            hidden from humanity. Break it at your peril.
          </li>
        </ul>
        <p>Use any of them. Use none of them. It&apos;s your game.</p>
      </section>

      <section className="content-section">
        <a className="btn btn--primary" href={handbookPdfUrl}>
          Download the Hero&apos;s Handbook PDF — free
        </a>
      </section>
    </div>
  );
}
