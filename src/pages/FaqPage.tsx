import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export function FaqPage() {
  usePageMeta(
    'FAQ — Core6 RPG',
    'Is Core6 free? Dice? GM required? Publishing? Quick answers about the universal tabletop RPG Core6.',
  );

  return (
    <div className="page-inner page-inner--narrow">
      <p className="section-label">Help</p>
      <h1 className="page-title">Frequently Asked Questions</h1>

      <section className="faq-item">
        <h3>Is Core6 actually free?</h3>
        <p>
          Yes. The Hero&apos;s Handbook is a free PDF download. We sell beautiful
          print and PDF editions for those who want them, but you can play the
          entire game without spending a cent.
        </p>
      </section>

      <section className="faq-item">
        <h3>Will my D&amp;D / Pathfinder / Savage Worlds Hero port over?</h3>
        <p>
          The concept will. The numbers won&apos;t — but Core6 builds fast. Most
          players port a beloved character in five minutes.
        </p>
      </section>

      <section className="faq-item">
        <h3>Do I need a GM?</h3>
        <p>
          For Core6 RPG, yes — the classic tabletop format works the way you&apos;d
          expect. For Core6 Adventures, no — solo and co-op campaigns run GM-less.
        </p>
      </section>

      <section className="faq-item">
        <h3>How many players does Core6 support?</h3>
        <p>
          Anywhere from solo (Adventures format) to mass-battle scale
          (Battlegrounds). The classic RPG format is best at 3–6 players plus a
          GM.
        </p>
      </section>

      <section className="faq-item">
        <h3>Is there a virtual tabletop integration?</h3>
        <p>
          Foundry and Roll20 support is on the roadmap. The free Companion App
          handles character sheets and dice rolls in the meantime — works from any
          phone or tablet.
        </p>
      </section>

      <section className="faq-item">
        <h3>Can I publish my own Core6 content?</h3>
        <p>
          Yes — the C6OGL makes it easy, including commercially. See the{' '}
          <Link to="/creators">Creators page</Link>.
        </p>
      </section>

      <section className="faq-item">
        <h3>What dice do I need?</h3>
        <p>
          Just six-sided dice (d6s). A handful per player. That&apos;s it.
        </p>
      </section>
    </div>
  );
}
