import { usePageMeta } from '../hooks/usePageMeta';

export function AboutPage() {
  usePageMeta(
    'About Core6 RPG',
    'Australian-made universal tabletop RPG from George Tran, edited by Carol Anne, published by Mango Dog Pty Ltd.',
  );

  return (
    <div className="page-inner page-inner--narrow">
      <p className="section-label">Team</p>
      <h1 className="page-title">About Core6</h1>

      <section className="content-section">
        <p>
          Core6 is designed and published by George Tran, edited by Carol Anne,
          and published in Australia by Mango Dog Pty Ltd.
        </p>
        <p>
          It&apos;s the result of years of trying to find a system that didn&apos;t
          make us choose between fast and deep, between simple to learn and
          satisfying to master, between ready out of the box and built for the
          campaign we actually wanted to run.
        </p>
        <p>We couldn&apos;t find it. So we built it.</p>
        <p>
          Core6 is proudly made in Australia, designed for the kitchen table as
          much as the gaming room, and built to be played with the people you
          actually know — kids, partners, lifelong friends, or strangers on a
          Discord call.
        </p>
        <p>Bond more. Play more. Create more memories — together.</p>
      </section>
    </div>
  );
}
